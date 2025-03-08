(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))c(S);new MutationObserver(S=>{for(const M of S)if(M.type==="childList")for(const _ of M.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&c(_)}).observe(document,{childList:!0,subtree:!0});function f(S){const M={};return S.integrity&&(M.integrity=S.integrity),S.referrerPolicy&&(M.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?M.credentials="include":S.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function c(S){if(S.ep)return;S.ep=!0;const M=f(S);fetch(S.href,M)}})();function Hd(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var tc={exports:{}},hi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd;function Tm(){if(rd)return hi;rd=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function f(c,S,M){var _=null;if(M!==void 0&&(_=""+M),S.key!==void 0&&(_=""+S.key),"key"in S){M={};for(var V in S)V!=="key"&&(M[V]=S[V])}else M=S;return S=M.ref,{$$typeof:r,type:c,key:_,ref:S!==void 0?S:null,props:M}}return hi.Fragment=o,hi.jsx=f,hi.jsxs=f,hi}var ud;function wm(){return ud||(ud=1,tc.exports=Tm()),tc.exports}var O=wm(),ac={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od;function Lm(){if(od)return ye;od=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),_=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),D=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),X=Symbol.iterator;function J(d){return d===null||typeof d!="object"?null:(d=X&&d[X]||d["@@iterator"],typeof d=="function"?d:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ie=Object.assign,oe={};function ce(d,T,N){this.props=d,this.context=T,this.refs=oe,this.updater=N||K}ce.prototype.isReactComponent={},ce.prototype.setState=function(d,T){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,T,"setState")},ce.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function pe(){}pe.prototype=ce.prototype;function he(d,T,N){this.props=d,this.context=T,this.refs=oe,this.updater=N||K}var de=he.prototype=new pe;de.constructor=he,ie(de,ce.prototype),de.isPureReactComponent=!0;var Re=Array.isArray,te={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function W(d,T,N,x,B,P){return N=P.ref,{$$typeof:r,type:d,key:T,ref:N!==void 0?N:null,props:P}}function p(d,T){return W(d.type,T,void 0,void 0,void 0,d.props)}function y(d){return typeof d=="object"&&d!==null&&d.$$typeof===r}function w(d){var T={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(N){return T[N]})}var F=/\/+/g;function q(d,T){return typeof d=="object"&&d!==null&&d.key!=null?w(""+d.key):T.toString(36)}function re(){}function Ae(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(re,re):(d.status="pending",d.then(function(T){d.status==="pending"&&(d.status="fulfilled",d.value=T)},function(T){d.status==="pending"&&(d.status="rejected",d.reason=T)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function xe(d,T,N,x,B){var P=typeof d;(P==="undefined"||P==="boolean")&&(d=null);var Z=!1;if(d===null)Z=!0;else switch(P){case"bigint":case"string":case"number":Z=!0;break;case"object":switch(d.$$typeof){case r:case o:Z=!0;break;case C:return Z=d._init,xe(Z(d._payload),T,N,x,B)}}if(Z)return B=B(d),Z=x===""?"."+q(d,0):x,Re(B)?(N="",Z!=null&&(N=Z.replace(F,"$&/")+"/"),xe(B,T,N,"",function($){return $})):B!=null&&(y(B)&&(B=p(B,N+(B.key==null||d&&d.key===B.key?"":(""+B.key).replace(F,"$&/")+"/")+Z)),T.push(B)),1;Z=0;var we=x===""?".":x+":";if(Re(d))for(var Y=0;Y<d.length;Y++)x=d[Y],P=we+q(x,Y),Z+=xe(x,T,N,P,B);else if(Y=J(d),typeof Y=="function")for(d=Y.call(d),Y=0;!(x=d.next()).done;)x=x.value,P=we+q(x,Y++),Z+=xe(x,T,N,P,B);else if(P==="object"){if(typeof d.then=="function")return xe(Ae(d),T,N,x,B);throw T=String(d),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return Z}function U(d,T,N){if(d==null)return d;var x=[],B=0;return xe(d,x,"","",function(P){return T.call(N,P,B++)}),x}function z(d){if(d._status===-1){var T=d._result;T=T(),T.then(function(N){(d._status===0||d._status===-1)&&(d._status=1,d._result=N)},function(N){(d._status===0||d._status===-1)&&(d._status=2,d._result=N)}),d._status===-1&&(d._status=0,d._result=T)}if(d._status===1)return d._result.default;throw d._result}var j=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)};function k(){}return ye.Children={map:U,forEach:function(d,T,N){U(d,function(){T.apply(this,arguments)},N)},count:function(d){var T=0;return U(d,function(){T++}),T},toArray:function(d){return U(d,function(T){return T})||[]},only:function(d){if(!y(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},ye.Component=ce,ye.Fragment=f,ye.Profiler=S,ye.PureComponent=he,ye.StrictMode=c,ye.Suspense=E,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,ye.act=function(){throw Error("act(...) is not supported in production builds of React.")},ye.cache=function(d){return function(){return d.apply(null,arguments)}},ye.cloneElement=function(d,T,N){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var x=ie({},d.props),B=d.key,P=void 0;if(T!=null)for(Z in T.ref!==void 0&&(P=void 0),T.key!==void 0&&(B=""+T.key),T)!ne.call(T,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&T.ref===void 0||(x[Z]=T[Z]);var Z=arguments.length-2;if(Z===1)x.children=N;else if(1<Z){for(var we=Array(Z),Y=0;Y<Z;Y++)we[Y]=arguments[Y+2];x.children=we}return W(d.type,B,void 0,void 0,P,x)},ye.createContext=function(d){return d={$$typeof:_,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:M,_context:d},d},ye.createElement=function(d,T,N){var x,B={},P=null;if(T!=null)for(x in T.key!==void 0&&(P=""+T.key),T)ne.call(T,x)&&x!=="key"&&x!=="__self"&&x!=="__source"&&(B[x]=T[x]);var Z=arguments.length-2;if(Z===1)B.children=N;else if(1<Z){for(var we=Array(Z),Y=0;Y<Z;Y++)we[Y]=arguments[Y+2];B.children=we}if(d&&d.defaultProps)for(x in Z=d.defaultProps,Z)B[x]===void 0&&(B[x]=Z[x]);return W(d,P,void 0,void 0,null,B)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(d){return{$$typeof:V,render:d}},ye.isValidElement=y,ye.lazy=function(d){return{$$typeof:C,_payload:{_status:-1,_result:d},_init:z}},ye.memo=function(d,T){return{$$typeof:D,type:d,compare:T===void 0?null:T}},ye.startTransition=function(d){var T=te.T,N={};te.T=N;try{var x=d(),B=te.S;B!==null&&B(N,x),typeof x=="object"&&x!==null&&typeof x.then=="function"&&x.then(k,j)}catch(P){j(P)}finally{te.T=T}},ye.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},ye.use=function(d){return te.H.use(d)},ye.useActionState=function(d,T,N){return te.H.useActionState(d,T,N)},ye.useCallback=function(d,T){return te.H.useCallback(d,T)},ye.useContext=function(d){return te.H.useContext(d)},ye.useDebugValue=function(){},ye.useDeferredValue=function(d,T){return te.H.useDeferredValue(d,T)},ye.useEffect=function(d,T){return te.H.useEffect(d,T)},ye.useId=function(){return te.H.useId()},ye.useImperativeHandle=function(d,T,N){return te.H.useImperativeHandle(d,T,N)},ye.useInsertionEffect=function(d,T){return te.H.useInsertionEffect(d,T)},ye.useLayoutEffect=function(d,T){return te.H.useLayoutEffect(d,T)},ye.useMemo=function(d,T){return te.H.useMemo(d,T)},ye.useOptimistic=function(d,T){return te.H.useOptimistic(d,T)},ye.useReducer=function(d,T,N){return te.H.useReducer(d,T,N)},ye.useRef=function(d){return te.H.useRef(d)},ye.useState=function(d){return te.H.useState(d)},ye.useSyncExternalStore=function(d,T,N){return te.H.useSyncExternalStore(d,T,N)},ye.useTransition=function(){return te.H.useTransition()},ye.version="19.0.0",ye}var cd;function pc(){return cd||(cd=1,ac.exports=Lm()),ac.exports}var Xe=pc();const Ja=Hd(Xe);var nc={exports:{}},di={},lc={exports:{}},ic={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd;function Gm(){return sd||(sd=1,function(r){function o(U,z){var j=U.length;U.push(z);e:for(;0<j;){var k=j-1>>>1,d=U[k];if(0<S(d,z))U[k]=z,U[j]=d,j=k;else break e}}function f(U){return U.length===0?null:U[0]}function c(U){if(U.length===0)return null;var z=U[0],j=U.pop();if(j!==z){U[0]=j;e:for(var k=0,d=U.length,T=d>>>1;k<T;){var N=2*(k+1)-1,x=U[N],B=N+1,P=U[B];if(0>S(x,j))B<d&&0>S(P,x)?(U[k]=P,U[B]=j,k=B):(U[k]=x,U[N]=j,k=N);else if(B<d&&0>S(P,j))U[k]=P,U[B]=j,k=B;else break e}}return z}function S(U,z){var j=U.sortIndex-z.sortIndex;return j!==0?j:U.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;r.unstable_now=function(){return M.now()}}else{var _=Date,V=_.now();r.unstable_now=function(){return _.now()-V}}var E=[],D=[],C=1,X=null,J=3,K=!1,ie=!1,oe=!1,ce=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;function de(U){for(var z=f(D);z!==null;){if(z.callback===null)c(D);else if(z.startTime<=U)c(D),z.sortIndex=z.expirationTime,o(E,z);else break;z=f(D)}}function Re(U){if(oe=!1,de(U),!ie)if(f(E)!==null)ie=!0,Ae();else{var z=f(D);z!==null&&xe(Re,z.startTime-U)}}var te=!1,ne=-1,W=5,p=-1;function y(){return!(r.unstable_now()-p<W)}function w(){if(te){var U=r.unstable_now();p=U;var z=!0;try{e:{ie=!1,oe&&(oe=!1,pe(ne),ne=-1),K=!0;var j=J;try{t:{for(de(U),X=f(E);X!==null&&!(X.expirationTime>U&&y());){var k=X.callback;if(typeof k=="function"){X.callback=null,J=X.priorityLevel;var d=k(X.expirationTime<=U);if(U=r.unstable_now(),typeof d=="function"){X.callback=d,de(U),z=!0;break t}X===f(E)&&c(E),de(U)}else c(E);X=f(E)}if(X!==null)z=!0;else{var T=f(D);T!==null&&xe(Re,T.startTime-U),z=!1}}break e}finally{X=null,J=j,K=!1}z=void 0}}finally{z?F():te=!1}}}var F;if(typeof he=="function")F=function(){he(w)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,re=q.port2;q.port1.onmessage=w,F=function(){re.postMessage(null)}}else F=function(){ce(w,0)};function Ae(){te||(te=!0,F())}function xe(U,z){ne=ce(function(){U(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_continueExecution=function(){ie||K||(ie=!0,Ae())},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return J},r.unstable_getFirstCallbackNode=function(){return f(E)},r.unstable_next=function(U){switch(J){case 1:case 2:case 3:var z=3;break;default:z=J}var j=J;J=z;try{return U()}finally{J=j}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(U,z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var j=J;J=U;try{return z()}finally{J=j}},r.unstable_scheduleCallback=function(U,z,j){var k=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?k+j:k):j=k,U){case 1:var d=-1;break;case 2:d=250;break;case 5:d=1073741823;break;case 4:d=1e4;break;default:d=5e3}return d=j+d,U={id:C++,callback:z,priorityLevel:U,startTime:j,expirationTime:d,sortIndex:-1},j>k?(U.sortIndex=j,o(D,U),f(E)===null&&U===f(D)&&(oe?(pe(ne),ne=-1):oe=!0,xe(Re,j-k))):(U.sortIndex=d,o(E,U),ie||K||(ie=!0,Ae())),U},r.unstable_shouldYield=y,r.unstable_wrapCallback=function(U){var z=J;return function(){var j=J;J=z;try{return U.apply(this,arguments)}finally{J=j}}}}(ic)),ic}var fd;function Em(){return fd||(fd=1,lc.exports=Gm()),lc.exports}var rc={exports:{}},mt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd;function Am(){if(hd)return mt;hd=1;var r=pc();function o(E){var D="https://react.dev/errors/"+E;if(1<arguments.length){D+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)D+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+E+"; visit "+D+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(o(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},S=Symbol.for("react.portal");function M(E,D,C){var X=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S,key:X==null?null:""+X,children:E,containerInfo:D,implementation:C}}var _=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function V(E,D){if(E==="font")return"";if(typeof D=="string")return D==="use-credentials"?D:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,mt.createPortal=function(E,D){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!D||D.nodeType!==1&&D.nodeType!==9&&D.nodeType!==11)throw Error(o(299));return M(E,D,null,C)},mt.flushSync=function(E){var D=_.T,C=c.p;try{if(_.T=null,c.p=2,E)return E()}finally{_.T=D,c.p=C,c.d.f()}},mt.preconnect=function(E,D){typeof E=="string"&&(D?(D=D.crossOrigin,D=typeof D=="string"?D==="use-credentials"?D:"":void 0):D=null,c.d.C(E,D))},mt.prefetchDNS=function(E){typeof E=="string"&&c.d.D(E)},mt.preinit=function(E,D){if(typeof E=="string"&&D&&typeof D.as=="string"){var C=D.as,X=V(C,D.crossOrigin),J=typeof D.integrity=="string"?D.integrity:void 0,K=typeof D.fetchPriority=="string"?D.fetchPriority:void 0;C==="style"?c.d.S(E,typeof D.precedence=="string"?D.precedence:void 0,{crossOrigin:X,integrity:J,fetchPriority:K}):C==="script"&&c.d.X(E,{crossOrigin:X,integrity:J,fetchPriority:K,nonce:typeof D.nonce=="string"?D.nonce:void 0})}},mt.preinitModule=function(E,D){if(typeof E=="string")if(typeof D=="object"&&D!==null){if(D.as==null||D.as==="script"){var C=V(D.as,D.crossOrigin);c.d.M(E,{crossOrigin:C,integrity:typeof D.integrity=="string"?D.integrity:void 0,nonce:typeof D.nonce=="string"?D.nonce:void 0})}}else D==null&&c.d.M(E)},mt.preload=function(E,D){if(typeof E=="string"&&typeof D=="object"&&D!==null&&typeof D.as=="string"){var C=D.as,X=V(C,D.crossOrigin);c.d.L(E,C,{crossOrigin:X,integrity:typeof D.integrity=="string"?D.integrity:void 0,nonce:typeof D.nonce=="string"?D.nonce:void 0,type:typeof D.type=="string"?D.type:void 0,fetchPriority:typeof D.fetchPriority=="string"?D.fetchPriority:void 0,referrerPolicy:typeof D.referrerPolicy=="string"?D.referrerPolicy:void 0,imageSrcSet:typeof D.imageSrcSet=="string"?D.imageSrcSet:void 0,imageSizes:typeof D.imageSizes=="string"?D.imageSizes:void 0,media:typeof D.media=="string"?D.media:void 0})}},mt.preloadModule=function(E,D){if(typeof E=="string")if(D){var C=V(D.as,D.crossOrigin);c.d.m(E,{as:typeof D.as=="string"&&D.as!=="script"?D.as:void 0,crossOrigin:C,integrity:typeof D.integrity=="string"?D.integrity:void 0})}else c.d.m(E)},mt.requestFormReset=function(E){c.d.r(E)},mt.unstable_batchedUpdates=function(E,D){return E(D)},mt.useFormState=function(E,D,C){return _.H.useFormState(E,D,C)},mt.useFormStatus=function(){return _.H.useHostTransitionStatus()},mt.version="19.0.0",mt}var dd;function _m(){if(dd)return rc.exports;dd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),rc.exports=Am(),rc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function xm(){if(yd)return di;yd=1;var r=Em(),o=pc(),f=_m();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var M=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),J=Symbol.for("react.consumer"),K=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),Re=Symbol.for("react.memo_cache_sentinel"),te=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=te&&e[te]||e["@@iterator"],typeof e=="function"?e:null)}var W=Symbol.for("react.client.reference");function p(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===W?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case V:return"Portal";case C:return"Profiler";case D:return"StrictMode";case oe:return"Suspense";case ce:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case K:return(e.displayName||"Context")+".Provider";case J:return(e._context.displayName||"Context")+".Consumer";case ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pe:return t=e.displayName||null,t!==null?t:p(e.type)||"Memo";case he:t=e._payload,e=e._init;try{return p(e(t))}catch{}}return null}var y=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w=Object.assign,F,q;function re(e){if(F===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);F=t&&t[1]||"",q=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+e+q}var Ae=!1;function xe(e,t){if(!e||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(L){var R=L}Reflect.construct(e,[],H)}else{try{H.call()}catch(L){R=L}e.call(H.prototype)}}else{try{throw Error()}catch(L){R=L}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(L){if(L&&R&&typeof L.stack=="string")return[L.stack,R.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var h=u.split(`
`),m=s.split(`
`);for(l=n=0;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;for(;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;if(n===h.length||l===m.length)for(n=h.length-1,l=m.length-1;1<=n&&0<=l&&h[n]!==m[l];)l--;for(;1<=n&&0<=l;n--,l--)if(h[n]!==m[l]){if(n!==1||l!==1)do if(n--,l--,0>l||h[n]!==m[l]){var G=`
`+h[n].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=n&&0<=l);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?re(a):""}function U(e){switch(e.tag){case 26:case 27:case 5:return re(e.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 15:return e=xe(e.type,!1),e;case 11:return e=xe(e.type.render,!1),e;case 1:return e=xe(e.type,!0),e;default:return""}}function z(e){try{var t="";do t+=U(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function j(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function k(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(j(e)!==e)throw Error(c(188))}function T(e){var t=e.alternate;if(!t){if(t=j(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return d(l),e;if(i===n)return d(l),t;i=i.sibling}throw Error(c(188))}if(a.return!==n.return)a=l,n=i;else{for(var u=!1,s=l.child;s;){if(s===a){u=!0,a=l,n=i;break}if(s===n){u=!0,n=l,a=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===a){u=!0,a=i,n=l;break}if(s===n){u=!0,n=i,a=l;break}s=s.sibling}if(!u)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}var x=Array.isArray,B=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},Z=[],we=-1;function Y(e){return{current:e}}function $(e){0>we||(e.current=Z[we],Z[we]=null,we--)}function le(e,t){we++,Z[we]=e.current,e.current=t}var ae=Y(null),me=Y(null),Be=Y(null),He=Y(null);function Le(e,t){switch(le(Be,t),le(me,e),le(ae,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Oh(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=Oh(e),t=Bh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(ae),le(ae,t)}function se(){$(ae),$(me),$(Be)}function Pe(e){e.memoizedState!==null&&le(He,e);var t=ae.current,a=Bh(t,e.type);t!==a&&(le(me,e),le(ae,a))}function be(e){me.current===e&&($(ae),$(me)),He.current===e&&($(He),ui._currentValue=P)}var Ce=Object.prototype.hasOwnProperty,je=r.unstable_scheduleCallback,It=r.unstable_cancelCallback,xt=r.unstable_shouldYield,Pa=r.unstable_requestPaint,Ue=r.unstable_now,Ht=r.unstable_getCurrentPriorityLevel,Ze=r.unstable_ImmediatePriority,ct=r.unstable_UserBlockingPriority,vt=r.unstable_NormalPriority,gl=r.unstable_LowPriority,ml=r.unstable_IdlePriority,Ta=r.log,Ct=r.unstable_setDisableYieldValue,Qt=null,dt=null;function oy(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Qt,e,void 0,(e.current.flags&128)===128)}catch{}}function wa(e){if(typeof Ta=="function"&&Ct(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Qt,e)}catch{}}var Tt=Math.clz32?Math.clz32:fy,cy=Math.log,sy=Math.LN2;function fy(e){return e>>>=0,e===0?32:31-(cy(e)/sy|0)|0}var pi=128,vi=4194304;function $a(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function bi(e,t){var a=e.pendingLanes;if(a===0)return 0;var n=0,l=e.suspendedLanes,i=e.pingedLanes,u=e.warmLanes;e=e.finishedLanes!==0;var s=a&134217727;return s!==0?(a=s&~l,a!==0?n=$a(a):(i&=s,i!==0?n=$a(i):e||(u=s&~u,u!==0&&(n=$a(u))))):(s=a&~l,s!==0?n=$a(s):i!==0?n=$a(i):e||(u=a&~u,u!==0&&(n=$a(u)))),n===0?0:t!==0&&t!==n&&(t&l)===0&&(l=n&-n,u=t&-t,l>=u||l===32&&(u&4194176)!==0)?t:n}function Sl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function hy(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lc(){var e=pi;return pi<<=1,(pi&4194176)===0&&(pi=128),e}function Gc(){var e=vi;return vi<<=1,(vi&62914560)===0&&(vi=4194304),e}function Zr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Dl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function dy(e,t,a,n,l,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,h=e.expirationTimes,m=e.hiddenUpdates;for(a=u&~a;0<a;){var G=31-Tt(a),H=1<<G;s[G]=0,h[G]=-1;var R=m[G];if(R!==null)for(m[G]=null,G=0;G<R.length;G++){var L=R[G];L!==null&&(L.lane&=-536870913)}a&=~H}n!==0&&Ec(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Ec(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Tt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194218}function Ac(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Tt(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function _c(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xc(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:ed(e.type))}function yy(e,t){var a=B.p;try{return B.p=e,t()}finally{B.p=a}}var La=Math.random().toString(36).slice(2),yt="__reactFiber$"+La,bt="__reactProps$"+La,Ln="__reactContainer$"+La,Jr="__reactEvents$"+La,gy="__reactListeners$"+La,my="__reactHandles$"+La,Hc="__reactResources$"+La,pl="__reactMarker$"+La;function Pr(e){delete e[yt],delete e[bt],delete e[Jr],delete e[gy],delete e[my]}function Ia(e){var t=e[yt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ln]||a[yt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=kh(e);e!==null;){if(a=e[yt])return a;e=kh(e)}return t}e=a,a=e.parentNode}return null}function Gn(e){if(e=e[yt]||e[Ln]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function vl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function En(e){var t=e[Hc];return t||(t=e[Hc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function lt(e){e[pl]=!0}var Cc=new Set,Nc={};function en(e,t){An(e,t),An(e+"Capture",t)}function An(e,t){for(Nc[e]=t,e=0;e<t.length;e++)Cc.add(t[e])}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Oc={},Bc={};function Dy(e){return Ce.call(Bc,e)?!0:Ce.call(Oc,e)?!1:Sy.test(e)?Bc[e]=!0:(Oc[e]=!0,!1)}function Mi(e,t,a){if(Dy(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ri(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ua(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function py(e){var t=Uc(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){n=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ti(e){e._valueTracker||(e._valueTracker=py(e))}function zc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Uc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var vy=/[\n"\\]/g;function Ot(e){return e.replace(vy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $r(e,t,a,n,l,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Ir(e,u,Nt(t)):a!=null?Ir(e,u,Nt(a)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+Nt(s):e.removeAttribute("name")}function kc(e,t,a,n,l,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+Nt(a):"",t=t!=null?""+Nt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=s?e.checked:!!n,e.defaultChecked=!!n,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u)}function Ir(e,t,a){t==="number"&&wi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function _n(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Nt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Vc(e,t,a){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Nt(a):""}function Fc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(x(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Nt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function xn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var by=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||by.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function qc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&jc(e,l,n)}else for(var i in t)t.hasOwnProperty(i)&&jc(e,i,t[i])}function eu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var My=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ry=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Li(e){return Ry.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var tu=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hn=null,Cn=null;function Wc(e){var t=Gn(e);if(t&&(e=t.stateNode)){var a=e[bt]||null;e:switch(e=t.stateNode,t.type){case"input":if($r(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[bt]||null;if(!l)throw Error(c(90));$r(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&zc(n)}break e;case"textarea":Vc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&_n(e,!!a.multiple,t,!1)}}}var nu=!1;function Yc(e,t,a){if(nu)return e(t,a);nu=!0;try{var n=e(t);return n}finally{if(nu=!1,(Hn!==null||Cn!==null)&&(cr(),Hn&&(t=Hn,e=Cn,Cn=Hn=null,Wc(t),e)))for(t=0;t<e.length;t++)Wc(e[t])}}function bl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[bt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var lu=!1;if(ra)try{var Ml={};Object.defineProperty(Ml,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Ml,Ml),window.removeEventListener("test",Ml,Ml)}catch{lu=!1}var Ga=null,iu=null,Gi=null;function Kc(){if(Gi)return Gi;var e,t=iu,a=t.length,n,l="value"in Ga?Ga.value:Ga.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var u=a-e;for(n=1;n<=u&&t[a-n]===l[i-n];n++);return Gi=l.slice(e,1<n?1-n:void 0)}function Ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ai(){return!0}function Qc(){return!1}function Mt(e){function t(a,n,l,i,u){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ai:Qc,this.isPropagationStopped=Qc,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),t}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_i=Mt(tn),Rl=w({},tn,{view:0,detail:0}),Ty=Mt(Rl),ru,uu,Tl,xi=w({},Rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tl&&(Tl&&e.type==="mousemove"?(ru=e.screenX-Tl.screenX,uu=e.screenY-Tl.screenY):uu=ru=0,Tl=e),ru)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),Xc=Mt(xi),wy=w({},xi,{dataTransfer:0}),Ly=Mt(wy),Gy=w({},Rl,{relatedTarget:0}),ou=Mt(Gy),Ey=w({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ay=Mt(Ey),_y=w({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xy=Mt(_y),Hy=w({},tn,{data:0}),Zc=Mt(Hy),Cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function By(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Oy[e])?!!t[e]:!1}function cu(){return By}var Uy=w({},Rl,{key:function(e){if(e.key){var t=Cy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ny[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?Ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zy=Mt(Uy),ky=w({},xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jc=Mt(ky),Vy=w({},Rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),Fy=Mt(Vy),jy=w({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qy=Mt(jy),Wy=w({},xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yy=Mt(Wy),Ky=w({},tn,{newState:0,oldState:0}),Qy=Mt(Ky),Xy=[9,13,27,32],su=ra&&"CompositionEvent"in window,wl=null;ra&&"documentMode"in document&&(wl=document.documentMode);var Zy=ra&&"TextEvent"in window&&!wl,Pc=ra&&(!su||wl&&8<wl&&11>=wl),$c=" ",Ic=!1;function es(e,t){switch(e){case"keyup":return Xy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ts(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function Jy(e,t){switch(e){case"compositionend":return ts(t);case"keypress":return t.which!==32?null:(Ic=!0,$c);case"textInput":return e=t.data,e===$c&&Ic?null:e;default:return null}}function Py(e,t){if(Nn)return e==="compositionend"||!su&&es(e,t)?(e=Kc(),Gi=iu=Ga=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pc&&t.locale!=="ko"?null:t.data;default:return null}}var $y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function as(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$y[e.type]:t==="textarea"}function ns(e,t,a,n){Hn?Cn?Cn.push(n):Cn=[n]:Hn=n,t=yr(t,"onChange"),0<t.length&&(a=new _i("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Ll=null,Gl=null;function Iy(e){_h(e,0)}function Hi(e){var t=vl(e);if(zc(t))return e}function ls(e,t){if(e==="change")return t}var is=!1;if(ra){var fu;if(ra){var hu="oninput"in document;if(!hu){var rs=document.createElement("div");rs.setAttribute("oninput","return;"),hu=typeof rs.oninput=="function"}fu=hu}else fu=!1;is=fu&&(!document.documentMode||9<document.documentMode)}function us(){Ll&&(Ll.detachEvent("onpropertychange",os),Gl=Ll=null)}function os(e){if(e.propertyName==="value"&&Hi(Gl)){var t=[];ns(t,Gl,e,au(e)),Yc(Iy,t)}}function eg(e,t,a){e==="focusin"?(us(),Ll=t,Gl=a,Ll.attachEvent("onpropertychange",os)):e==="focusout"&&us()}function tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hi(Gl)}function ag(e,t){if(e==="click")return Hi(t)}function ng(e,t){if(e==="input"||e==="change")return Hi(t)}function lg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:lg;function El(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Ce.call(t,l)||!wt(e[l],t[l]))return!1}return!0}function cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ss(e,t){var a=cs(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cs(a)}}function fs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=wi(e.document)}return t}function du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ig(e,t){var a=hs(t);t=e.focusedElem;var n=e.selectionRange;if(a!==t&&t&&t.ownerDocument&&fs(t.ownerDocument.documentElement,t)){if(n!==null&&du(t)){if(e=n.start,a=n.end,a===void 0&&(a=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(a,t.value.length);else if(a=(e=t.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var l=t.textContent.length,i=Math.min(n.start,l);n=n.end===void 0?i:Math.min(n.end,l),!a.extend&&i>n&&(l=n,n=i,i=l),l=ss(t,i);var u=ss(t,n);l&&u&&(a.rangeCount!==1||a.anchorNode!==l.node||a.anchorOffset!==l.offset||a.focusNode!==u.node||a.focusOffset!==u.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),a.removeAllRanges(),i>n?(a.addRange(e),a.extend(u.node,u.offset)):(e.setEnd(u.node,u.offset),a.addRange(e)))}}for(e=[],a=t;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)a=e[t],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var rg=ra&&"documentMode"in document&&11>=document.documentMode,On=null,yu=null,Al=null,gu=!1;function ds(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||On==null||On!==wi(n)||(n=On,"selectionStart"in n&&du(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Al&&El(Al,n)||(Al=n,n=yr(yu,"onSelect"),0<n.length&&(t=new _i("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=On)))}function an(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Bn={animationend:an("Animation","AnimationEnd"),animationiteration:an("Animation","AnimationIteration"),animationstart:an("Animation","AnimationStart"),transitionrun:an("Transition","TransitionRun"),transitionstart:an("Transition","TransitionStart"),transitioncancel:an("Transition","TransitionCancel"),transitionend:an("Transition","TransitionEnd")},mu={},ys={};ra&&(ys=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function nn(e){if(mu[e])return mu[e];if(!Bn[e])return e;var t=Bn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ys)return mu[e]=t[a];return e}var gs=nn("animationend"),ms=nn("animationiteration"),Ss=nn("animationstart"),ug=nn("transitionrun"),og=nn("transitionstart"),cg=nn("transitioncancel"),Ds=nn("transitionend"),ps=new Map,vs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Xt(e,t){ps.set(e,t),en(t,[e])}var Bt=[],Un=0,Su=0;function Ci(){for(var e=Un,t=Su=Un=0;t<e;){var a=Bt[t];Bt[t++]=null;var n=Bt[t];Bt[t++]=null;var l=Bt[t];Bt[t++]=null;var i=Bt[t];if(Bt[t++]=null,n!==null&&l!==null){var u=n.pending;u===null?l.next=l:(l.next=u.next,u.next=l),n.pending=l}i!==0&&bs(a,l,i)}}function Ni(e,t,a,n){Bt[Un++]=e,Bt[Un++]=t,Bt[Un++]=a,Bt[Un++]=n,Su|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Du(e,t,a,n){return Ni(e,t,a,n),Oi(e)}function Ea(e,t){return Ni(e,null,null,t),Oi(e)}function bs(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;l&&t!==null&&e.tag===3&&(i=e.stateNode,l=31-Tt(a),i=i.hiddenUpdates,e=i[l],e===null?i[l]=[t]:e.push(t),t.lane=a|536870912)}function Oi(e){if(50<ei)throw ei=0,wo=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var zn={},Ms=new WeakMap;function Ut(e,t){if(typeof e=="object"&&e!==null){var a=Ms.get(e);return a!==void 0?a:(t={value:e,source:t,stack:z(t)},Ms.set(e,t),t)}return{value:e,source:t,stack:z(t)}}var kn=[],Vn=0,Bi=null,Ui=0,zt=[],kt=0,ln=null,oa=1,ca="";function rn(e,t){kn[Vn++]=Ui,kn[Vn++]=Bi,Bi=e,Ui=t}function Rs(e,t,a){zt[kt++]=oa,zt[kt++]=ca,zt[kt++]=ln,ln=e;var n=oa;e=ca;var l=32-Tt(n)-1;n&=~(1<<l),a+=1;var i=32-Tt(t)+l;if(30<i){var u=l-l%5;i=(n&(1<<u)-1).toString(32),n>>=u,l-=u,oa=1<<32-Tt(t)+l|a<<l|n,ca=i+e}else oa=1<<i|a<<l|n,ca=e}function pu(e){e.return!==null&&(rn(e,1),Rs(e,1,0))}function vu(e){for(;e===Bi;)Bi=kn[--Vn],kn[Vn]=null,Ui=kn[--Vn],kn[Vn]=null;for(;e===ln;)ln=zt[--kt],zt[kt]=null,ca=zt[--kt],zt[kt]=null,oa=zt[--kt],zt[kt]=null}var Dt=null,st=null,Ge=!1,Zt=null,ea=!1,bu=Error(c(519));function un(e){var t=Error(c(418,""));throw Hl(Ut(t,e)),bu}function Ts(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[yt]=e,t[bt]=n,a){case"dialog":Me("cancel",t),Me("close",t);break;case"iframe":case"object":case"embed":Me("load",t);break;case"video":case"audio":for(a=0;a<ai.length;a++)Me(ai[a],t);break;case"source":Me("error",t);break;case"img":case"image":case"link":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"input":Me("invalid",t),kc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Ti(t);break;case"select":Me("invalid",t);break;case"textarea":Me("invalid",t),Fc(t,n.value,n.defaultValue,n.children),Ti(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Nh(t.textContent,a)?(n.popover!=null&&(Me("beforetoggle",t),Me("toggle",t)),n.onScroll!=null&&Me("scroll",t),n.onScrollEnd!=null&&Me("scrollend",t),n.onClick!=null&&(t.onclick=gr),t=!0):t=!1,t||un(e)}function ws(e){for(Dt=e.return;Dt;)switch(Dt.tag){case 3:case 27:ea=!0;return;case 5:case 13:ea=!1;return;default:Dt=Dt.return}}function _l(e){if(e!==Dt)return!1;if(!Ge)return ws(e),Ge=!0,!1;var t=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||jo(e.type,e.memoizedProps)),a=!a),a&&(t=!0),t&&st&&un(e),ws(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){st=Pt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}st=null}}else st=Dt?Pt(e.stateNode.nextSibling):null;return!0}function xl(){st=Dt=null,Ge=!1}function Hl(e){Zt===null?Zt=[e]:Zt.push(e)}var Cl=Error(c(460)),Ls=Error(c(474)),Mu={then:function(){}};function Gs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zi(){}function Es(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(zi,zi),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Cl?Error(c(483)):e;default:if(typeof t.status=="string")t.then(zi,zi);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Cl?Error(c(483)):e}throw Nl=t,Cl}}var Nl=null;function As(){if(Nl===null)throw Error(c(459));var e=Nl;return Nl=null,e}var Fn=null,Ol=0;function ki(e){var t=Ol;return Ol+=1,Fn===null&&(Fn=[]),Es(Fn,e,t)}function Bl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vi(e,t){throw t.$$typeof===M?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function _s(e){var t=e._init;return t(e._payload)}function xs(e){function t(v,g){if(e){var b=v.deletions;b===null?(v.deletions=[g],v.flags|=16):b.push(g)}}function a(v,g){if(!e)return null;for(;g!==null;)t(v,g),g=g.sibling;return null}function n(v){for(var g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function l(v,g){return v=Va(v,g),v.index=0,v.sibling=null,v}function i(v,g,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<g?(v.flags|=33554434,g):b):(v.flags|=33554434,g)):(v.flags|=1048576,g)}function u(v){return e&&v.alternate===null&&(v.flags|=33554434),v}function s(v,g,b,A){return g===null||g.tag!==6?(g=So(b,v.mode,A),g.return=v,g):(g=l(g,b),g.return=v,g)}function h(v,g,b,A){var Q=b.type;return Q===E?G(v,g,b.props.children,A,b.key):g!==null&&(g.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===he&&_s(Q)===g.type)?(g=l(g,b.props),Bl(g,b),g.return=v,g):(g=lr(b.type,b.key,b.props,null,v.mode,A),Bl(g,b),g.return=v,g)}function m(v,g,b,A){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=Do(b,v.mode,A),g.return=v,g):(g=l(g,b.children||[]),g.return=v,g)}function G(v,g,b,A,Q){return g===null||g.tag!==7?(g=Sn(b,v.mode,A,Q),g.return=v,g):(g=l(g,b),g.return=v,g)}function H(v,g,b){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=So(""+g,v.mode,b),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _:return b=lr(g.type,g.key,g.props,null,v.mode,b),Bl(b,g),b.return=v,b;case V:return g=Do(g,v.mode,b),g.return=v,g;case he:var A=g._init;return g=A(g._payload),H(v,g,b)}if(x(g)||ne(g))return g=Sn(g,v.mode,b,null),g.return=v,g;if(typeof g.then=="function")return H(v,ki(g),b);if(g.$$typeof===K)return H(v,tr(v,g),b);Vi(v,g)}return null}function R(v,g,b,A){var Q=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return Q!==null?null:s(v,g,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case _:return b.key===Q?h(v,g,b,A):null;case V:return b.key===Q?m(v,g,b,A):null;case he:return Q=b._init,b=Q(b._payload),R(v,g,b,A)}if(x(b)||ne(b))return Q!==null?null:G(v,g,b,A,null);if(typeof b.then=="function")return R(v,g,ki(b),A);if(b.$$typeof===K)return R(v,g,tr(v,b),A);Vi(v,b)}return null}function L(v,g,b,A,Q){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return v=v.get(b)||null,s(g,v,""+A,Q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case _:return v=v.get(A.key===null?b:A.key)||null,h(g,v,A,Q);case V:return v=v.get(A.key===null?b:A.key)||null,m(g,v,A,Q);case he:var De=A._init;return A=De(A._payload),L(v,g,b,A,Q)}if(x(A)||ne(A))return v=v.get(b)||null,G(g,v,A,Q,null);if(typeof A.then=="function")return L(v,g,b,ki(A),Q);if(A.$$typeof===K)return L(v,g,b,tr(g,A),Q);Vi(g,A)}return null}function I(v,g,b,A){for(var Q=null,De=null,ee=g,ue=g=0,ut=null;ee!==null&&ue<b.length;ue++){ee.index>ue?(ut=ee,ee=null):ut=ee.sibling;var Ee=R(v,ee,b[ue],A);if(Ee===null){ee===null&&(ee=ut);break}e&&ee&&Ee.alternate===null&&t(v,ee),g=i(Ee,g,ue),De===null?Q=Ee:De.sibling=Ee,De=Ee,ee=ut}if(ue===b.length)return a(v,ee),Ge&&rn(v,ue),Q;if(ee===null){for(;ue<b.length;ue++)ee=H(v,b[ue],A),ee!==null&&(g=i(ee,g,ue),De===null?Q=ee:De.sibling=ee,De=ee);return Ge&&rn(v,ue),Q}for(ee=n(ee);ue<b.length;ue++)ut=L(ee,v,ue,b[ue],A),ut!==null&&(e&&ut.alternate!==null&&ee.delete(ut.key===null?ue:ut.key),g=i(ut,g,ue),De===null?Q=ut:De.sibling=ut,De=ut);return e&&ee.forEach(function(Qa){return t(v,Qa)}),Ge&&rn(v,ue),Q}function fe(v,g,b,A){if(b==null)throw Error(c(151));for(var Q=null,De=null,ee=g,ue=g=0,ut=null,Ee=b.next();ee!==null&&!Ee.done;ue++,Ee=b.next()){ee.index>ue?(ut=ee,ee=null):ut=ee.sibling;var Qa=R(v,ee,Ee.value,A);if(Qa===null){ee===null&&(ee=ut);break}e&&ee&&Qa.alternate===null&&t(v,ee),g=i(Qa,g,ue),De===null?Q=Qa:De.sibling=Qa,De=Qa,ee=ut}if(Ee.done)return a(v,ee),Ge&&rn(v,ue),Q;if(ee===null){for(;!Ee.done;ue++,Ee=b.next())Ee=H(v,Ee.value,A),Ee!==null&&(g=i(Ee,g,ue),De===null?Q=Ee:De.sibling=Ee,De=Ee);return Ge&&rn(v,ue),Q}for(ee=n(ee);!Ee.done;ue++,Ee=b.next())Ee=L(ee,v,ue,Ee.value,A),Ee!==null&&(e&&Ee.alternate!==null&&ee.delete(Ee.key===null?ue:Ee.key),g=i(Ee,g,ue),De===null?Q=Ee:De.sibling=Ee,De=Ee);return e&&ee.forEach(function(Rm){return t(v,Rm)}),Ge&&rn(v,ue),Q}function Qe(v,g,b,A){if(typeof b=="object"&&b!==null&&b.type===E&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case _:e:{for(var Q=b.key;g!==null;){if(g.key===Q){if(Q=b.type,Q===E){if(g.tag===7){a(v,g.sibling),A=l(g,b.props.children),A.return=v,v=A;break e}}else if(g.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===he&&_s(Q)===g.type){a(v,g.sibling),A=l(g,b.props),Bl(A,b),A.return=v,v=A;break e}a(v,g);break}else t(v,g);g=g.sibling}b.type===E?(A=Sn(b.props.children,v.mode,A,b.key),A.return=v,v=A):(A=lr(b.type,b.key,b.props,null,v.mode,A),Bl(A,b),A.return=v,v=A)}return u(v);case V:e:{for(Q=b.key;g!==null;){if(g.key===Q)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){a(v,g.sibling),A=l(g,b.children||[]),A.return=v,v=A;break e}else{a(v,g);break}else t(v,g);g=g.sibling}A=Do(b,v.mode,A),A.return=v,v=A}return u(v);case he:return Q=b._init,b=Q(b._payload),Qe(v,g,b,A)}if(x(b))return I(v,g,b,A);if(ne(b)){if(Q=ne(b),typeof Q!="function")throw Error(c(150));return b=Q.call(b),fe(v,g,b,A)}if(typeof b.then=="function")return Qe(v,g,ki(b),A);if(b.$$typeof===K)return Qe(v,g,tr(v,b),A);Vi(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,g!==null&&g.tag===6?(a(v,g.sibling),A=l(g,b),A.return=v,v=A):(a(v,g),A=So(b,v.mode,A),A.return=v,v=A),u(v)):a(v,g)}return function(v,g,b,A){try{Ol=0;var Q=Qe(v,g,b,A);return Fn=null,Q}catch(ee){if(ee===Cl)throw ee;var De=qt(29,ee,null,v.mode);return De.lanes=A,De.return=v,De}finally{}}}var on=xs(!0),Hs=xs(!1),jn=Y(null),Fi=Y(0);function Cs(e,t){e=va,le(Fi,e),le(jn,t),va=e|t.baseLanes}function Ru(){le(Fi,va),le(jn,jn.current)}function Tu(){va=Fi.current,$(jn),$(Fi)}var Vt=Y(null),ta=null;function Aa(e){var t=e.alternate;le(at,at.current&1),le(Vt,e),ta===null&&(t===null||jn.current!==null||t.memoizedState!==null)&&(ta=e)}function Ns(e){if(e.tag===22){if(le(at,at.current),le(Vt,e),ta===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(ta=e)}}else _a()}function _a(){le(at,at.current),le(Vt,Vt.current)}function sa(e){$(Vt),ta===e&&(ta=null),$(at)}var at=Y(0);function ji(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},fg=r.unstable_scheduleCallback,hg=r.unstable_NormalPriority,nt={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new sg,data:new Map,refCount:0}}function Ul(e){e.refCount--,e.refCount===0&&fg(hg,function(){e.controller.abort()})}var zl=null,Lu=0,qn=0,Wn=null;function dg(e,t){if(zl===null){var a=zl=[];Lu=0,qn=Co(),Wn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Lu++,t.then(Os,Os),t}function Os(){if(--Lu===0&&zl!==null){Wn!==null&&(Wn.status="fulfilled");var e=zl;zl=null,qn=0,Wn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function yg(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Bs=y.S;y.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&dg(e,t),Bs!==null&&Bs(e,t)};var cn=Y(null);function Gu(){var e=cn.current;return e!==null?e:ke.pooledCache}function qi(e,t){t===null?le(cn,cn.current):le(cn,t.pool)}function Us(){var e=Gu();return e===null?null:{parent:nt._currentValue,pool:e}}var xa=0,Se=null,Ne=null,$e=null,Wi=!1,Yn=!1,sn=!1,Yi=0,kl=0,Kn=null,gg=0;function Je(){throw Error(c(321))}function Eu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!wt(e[a],t[a]))return!1;return!0}function Au(e,t,a,n,l,i){return xa=i,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,y.H=e===null||e.memoizedState===null?fn:Ha,sn=!1,i=a(n,l),sn=!1,Yn&&(i=ks(t,a,n,l)),zs(e),i}function zs(e){y.H=aa;var t=Ne!==null&&Ne.next!==null;if(xa=0,$e=Ne=Se=null,Wi=!1,kl=0,Kn=null,t)throw Error(c(300));e===null||it||(e=e.dependencies,e!==null&&er(e)&&(it=!0))}function ks(e,t,a,n){Se=e;var l=0;do{if(Yn&&(Kn=null),kl=0,Yn=!1,25<=l)throw Error(c(301));if(l+=1,$e=Ne=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}y.H=hn,i=t(a,n)}while(Yn);return i}function mg(){var e=y.H,t=e.useState()[0];return t=typeof t.then=="function"?Vl(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(Se.flags|=1024),t}function _u(){var e=Yi!==0;return Yi=0,e}function xu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Hu(e){if(Wi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Wi=!1}xa=0,$e=Ne=Se=null,Yn=!1,kl=Yi=0,Kn=null}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Se.memoizedState=$e=e:$e=$e.next=e,$e}function Ie(){if(Ne===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=$e===null?Se.memoizedState:$e.next;if(t!==null)$e=t,Ne=e;else{if(e===null)throw Se.alternate===null?Error(c(467)):Error(c(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},$e===null?Se.memoizedState=$e=e:$e=$e.next=e}return $e}var Ki;Ki=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Vl(e){var t=kl;return kl+=1,Kn===null&&(Kn=[]),e=Es(Kn,e,t),t=Se,($e===null?t.memoizedState:$e.next)===null&&(t=t.alternate,y.H=t===null||t.memoizedState===null?fn:Ha),e}function Qi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vl(e);if(e.$$typeof===K)return gt(e)}throw Error(c(438,String(e)))}function Cu(e){var t=null,a=Se.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=Se.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ki(),Se.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Re;return t.index++,a}function fa(e,t){return typeof t=="function"?t(e):t}function Xi(e){var t=Ie();return Nu(t,Ne,e)}function Nu(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}t.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var s=u=null,h=null,m=t,G=!1;do{var H=m.lane&-536870913;if(H!==m.lane?(Te&H)===H:(xa&H)===H){var R=m.revertLane;if(R===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),H===qn&&(G=!0);else if((xa&R)===R){m=m.next,R===qn&&(G=!0);continue}else H={lane:0,revertLane:m.revertLane,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},h===null?(s=h=H,u=i):h=h.next=H,Se.lanes|=R,Fa|=R;H=m.action,sn&&a(i,H),i=m.hasEagerState?m.eagerState:a(i,H)}else R={lane:H,revertLane:m.revertLane,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},h===null?(s=h=R,u=i):h=h.next=R,Se.lanes|=H,Fa|=H;m=m.next}while(m!==null&&m!==t);if(h===null?u=i:h.next=s,!wt(i,e.memoizedState)&&(it=!0,G&&(a=Wn,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=h,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Ou(e){var t=Ie(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var u=l=l.next;do i=e(i,u.action),u=u.next;while(u!==l);wt(i,t.memoizedState)||(it=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function Vs(e,t,a){var n=Se,l=Ie(),i=Ge;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var u=!wt((Ne||l).memoizedState,a);if(u&&(l.memoizedState=a,it=!0),l=l.queue,zu(qs.bind(null,n,l,e),[e]),l.getSnapshot!==t||u||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Qn(9,js.bind(null,n,l,a,t),{destroy:void 0},null),ke===null)throw Error(c(349));i||(xa&60)!==0||Fs(n,t,a)}return a}function Fs(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Se.updateQueue,t===null?(t=Ki(),Se.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function js(e,t,a,n){t.value=a,t.getSnapshot=n,Ws(t)&&Ys(e)}function qs(e,t,a){return a(function(){Ws(t)&&Ys(e)})}function Ws(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!wt(e,a)}catch{return!0}}function Ys(e){var t=Ea(e,2);t!==null&&pt(t,e,2)}function Bu(e){var t=Rt();if(typeof e=="function"){var a=e;if(e=a(),sn){wa(!0);try{a()}finally{wa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},t}function Ks(e,t,a,n){return e.baseState=a,Nu(e,Ne,typeof n=="function"?n:fa)}function Sg(e,t,a,n,l){if(Pi(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};y.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,Qs(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Qs(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var i=y.T,u={};y.T=u;try{var s=a(l,n),h=y.S;h!==null&&h(u,s),Xs(e,t,s)}catch(m){Uu(e,t,m)}finally{y.T=i}}else try{i=a(l,n),Xs(e,t,i)}catch(m){Uu(e,t,m)}}function Xs(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Zs(e,t,n)},function(n){return Uu(e,t,n)}):Zs(e,t,a)}function Zs(e,t,a){t.status="fulfilled",t.value=a,Js(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Qs(e,a)))}function Uu(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Js(t),t=t.next;while(t!==n)}e.action=null}function Js(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ps(e,t){return t}function $s(e,t){if(Ge){var a=ke.formState;if(a!==null){e:{var n=Se;if(Ge){if(st){t:{for(var l=st,i=ea;l.nodeType!==8;){if(!i){l=null;break t}if(l=Pt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){st=Pt(l.nextSibling),n=l.data==="F!";break e}}un(n)}n=!1}n&&(t=a[0])}}return a=Rt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:t},a.queue=n,a=Sf.bind(null,Se,n),n.dispatch=a,n=Bu(!1),i=qu.bind(null,Se,!1,n.queue),n=Rt(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Sg.bind(null,Se,l,i,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Is(e){var t=Ie();return ef(t,Ne,e)}function ef(e,t,a){t=Nu(e,t,Ps)[0],e=Xi(fa)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Vl(t):t;var n=Ie(),l=n.queue,i=l.dispatch;return a!==n.memoizedState&&(Se.flags|=2048,Qn(9,Dg.bind(null,l,a),{destroy:void 0},null)),[t,i,e]}function Dg(e,t){e.action=t}function tf(e){var t=Ie(),a=Ne;if(a!==null)return ef(t,a,e);Ie(),t=t.memoizedState,a=Ie();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Qn(e,t,a,n){return e={tag:e,create:t,inst:a,deps:n,next:null},t=Se.updateQueue,t===null&&(t=Ki(),Se.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function af(){return Ie().memoizedState}function Zi(e,t,a,n){var l=Rt();Se.flags|=e,l.memoizedState=Qn(1|t,a,{destroy:void 0},n===void 0?null:n)}function Ji(e,t,a,n){var l=Ie();n=n===void 0?null:n;var i=l.memoizedState.inst;Ne!==null&&n!==null&&Eu(n,Ne.memoizedState.deps)?l.memoizedState=Qn(t,a,i,n):(Se.flags|=e,l.memoizedState=Qn(1|t,a,i,n))}function nf(e,t){Zi(8390656,8,e,t)}function zu(e,t){Ji(2048,8,e,t)}function lf(e,t){return Ji(4,2,e,t)}function rf(e,t){return Ji(4,4,e,t)}function uf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function of(e,t,a){a=a!=null?a.concat([e]):null,Ji(4,4,uf.bind(null,t,e),a)}function ku(){}function cf(e,t){var a=Ie();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Eu(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function sf(e,t){var a=Ie();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Eu(t,n[1]))return n[0];if(n=e(),sn){wa(!0);try{e()}finally{wa(!1)}}return a.memoizedState=[n,t],n}function Vu(e,t,a){return a===void 0||(xa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=hh(),Se.lanes|=e,Fa|=e,a)}function ff(e,t,a,n){return wt(a,t)?a:jn.current!==null?(e=Vu(e,a,n),wt(e,t)||(it=!0),e):(xa&42)===0?(it=!0,e.memoizedState=a):(e=hh(),Se.lanes|=e,Fa|=e,t)}function hf(e,t,a,n,l){var i=B.p;B.p=i!==0&&8>i?i:8;var u=y.T,s={};y.T=s,qu(e,!1,t,a);try{var h=l(),m=y.S;if(m!==null&&m(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var G=yg(h,n);Fl(e,t,G,At(e))}else Fl(e,t,n,At(e))}catch(H){Fl(e,t,{then:function(){},status:"rejected",reason:H},At())}finally{B.p=i,y.T=u}}function pg(){}function Fu(e,t,a,n){if(e.tag!==5)throw Error(c(476));var l=df(e).queue;hf(e,l,t,P,a===null?pg:function(){return yf(e),a(n)})}function df(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:P},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function yf(e){var t=df(e).next.queue;Fl(e,t,{},At())}function ju(){return gt(ui)}function gf(){return Ie().memoizedState}function mf(){return Ie().memoizedState}function vg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=At();e=Oa(a);var n=Ba(t,e,a);n!==null&&(pt(n,t,a),Wl(n,t,a)),t={cache:wu()},e.payload=t;return}t=t.return}}function bg(e,t,a){var n=At();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Pi(e)?Df(t,a):(a=Du(e,t,a,n),a!==null&&(pt(a,e,n),pf(a,t,n)))}function Sf(e,t,a){var n=At();Fl(e,t,a,n)}function Fl(e,t,a,n){var l={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pi(e))Df(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,a);if(l.hasEagerState=!0,l.eagerState=s,wt(s,u))return Ni(e,t,l,0),ke===null&&Ci(),!1}catch{}finally{}if(a=Du(e,t,l,n),a!==null)return pt(a,e,n),pf(a,t,n),!0}return!1}function qu(e,t,a,n){if(n={lane:2,revertLane:Co(),action:n,hasEagerState:!1,eagerState:null,next:null},Pi(e)){if(t)throw Error(c(479))}else t=Du(e,a,n,2),t!==null&&pt(t,e,2)}function Pi(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Df(e,t){Yn=Wi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function pf(e,t,a){if((a&4194176)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Ac(e,a)}}var aa={readContext:gt,use:Qi,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je};aa.useCacheRefresh=Je,aa.useMemoCache=Je,aa.useHostTransitionStatus=Je,aa.useFormState=Je,aa.useActionState=Je,aa.useOptimistic=Je;var fn={readContext:gt,use:Qi,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:nf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Zi(4194308,4,uf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Zi(4194308,4,e,t)},useInsertionEffect:function(e,t){Zi(4,2,e,t)},useMemo:function(e,t){var a=Rt();t=t===void 0?null:t;var n=e();if(sn){wa(!0);try{e()}finally{wa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Rt();if(a!==void 0){var l=a(t);if(sn){wa(!0);try{a(t)}finally{wa(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=bg.bind(null,Se,e),[n.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:function(e){e=Bu(e);var t=e.queue,a=Sf.bind(null,Se,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(e,t){var a=Rt();return Vu(a,e,t)},useTransition:function(){var e=Bu(!1);return e=hf.bind(null,Se,e.queue,!0,!1),Rt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=Se,l=Rt();if(Ge){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),ke===null)throw Error(c(349));(Te&60)!==0||Fs(n,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,nf(qs.bind(null,n,i,e),[e]),n.flags|=2048,Qn(9,js.bind(null,n,i,a,t),{destroy:void 0},null),a},useId:function(){var e=Rt(),t=ke.identifierPrefix;if(Ge){var a=ca,n=oa;a=(n&~(1<<32-Tt(n)-1)).toString(32)+a,t=":"+t+"R"+a,a=Yi++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=gg++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return Rt().memoizedState=vg.bind(null,Se)}};fn.useMemoCache=Cu,fn.useHostTransitionStatus=ju,fn.useFormState=$s,fn.useActionState=$s,fn.useOptimistic=function(e){var t=Rt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=qu.bind(null,Se,!0,a),a.dispatch=t,[e,t]};var Ha={readContext:gt,use:Qi,useCallback:cf,useContext:gt,useEffect:zu,useImperativeHandle:of,useInsertionEffect:lf,useLayoutEffect:rf,useMemo:sf,useReducer:Xi,useRef:af,useState:function(){return Xi(fa)},useDebugValue:ku,useDeferredValue:function(e,t){var a=Ie();return ff(a,Ne.memoizedState,e,t)},useTransition:function(){var e=Xi(fa)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:Vl(e),t]},useSyncExternalStore:Vs,useId:gf};Ha.useCacheRefresh=mf,Ha.useMemoCache=Cu,Ha.useHostTransitionStatus=ju,Ha.useFormState=Is,Ha.useActionState=Is,Ha.useOptimistic=function(e,t){var a=Ie();return Ks(a,Ne,e,t)};var hn={readContext:gt,use:Qi,useCallback:cf,useContext:gt,useEffect:zu,useImperativeHandle:of,useInsertionEffect:lf,useLayoutEffect:rf,useMemo:sf,useReducer:Ou,useRef:af,useState:function(){return Ou(fa)},useDebugValue:ku,useDeferredValue:function(e,t){var a=Ie();return Ne===null?Vu(a,e,t):ff(a,Ne.memoizedState,e,t)},useTransition:function(){var e=Ou(fa)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:Vl(e),t]},useSyncExternalStore:Vs,useId:gf};hn.useCacheRefresh=mf,hn.useMemoCache=Cu,hn.useHostTransitionStatus=ju,hn.useFormState=tf,hn.useActionState=tf,hn.useOptimistic=function(e,t){var a=Ie();return Ne!==null?Ks(a,Ne,e,t):(a.baseState=e,[e,a.queue.dispatch])};function Wu(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Yu={isMounted:function(e){return(e=e._reactInternals)?j(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var n=At(),l=Oa(n);l.payload=t,a!=null&&(l.callback=a),t=Ba(e,l,n),t!==null&&(pt(t,e,n),Wl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=At(),l=Oa(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Ba(e,l,n),t!==null&&(pt(t,e,n),Wl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=At(),n=Oa(a);n.tag=2,t!=null&&(n.callback=t),t=Ba(e,n,a),t!==null&&(pt(t,e,a),Wl(t,e,a))}};function vf(e,t,a,n,l,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,u):t.prototype&&t.prototype.isPureReactComponent?!El(a,n)||!El(l,i):!0}function bf(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Yu.enqueueReplaceState(t,t.state,null)}function dn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}var $i=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Mf(e){$i(e)}function Rf(e){console.error(e)}function Tf(e){$i(e)}function Ii(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function wf(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ku(e,t,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ii(e,t)},a}function Lf(e){return e=Oa(e),e.tag=3,e}function Gf(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){wf(t,a,n)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){wf(t,a,n),typeof l!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function Mg(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&ql(t,a,l,!0),a=Vt.current,a!==null){switch(a.tag){case 13:return ta===null?Eo():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Mu?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),_o(e,n,l)),!1;case 22:return a.flags|=65536,n===Mu?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),_o(e,n,l)),!1}throw Error(c(435,a.tag))}return _o(e,n,l),Eo(),!1}if(Ge)return t=Vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==bu&&(e=Error(c(422),{cause:n}),Hl(Ut(e,a)))):(n!==bu&&(t=Error(c(423),{cause:n}),Hl(Ut(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Ut(n,a),l=Ku(e.stateNode,n,l),uo(e,l),Ke!==4&&(Ke=2)),!1;var i=Error(c(520),{cause:n});if(i=Ut(i,a),$l===null?$l=[i]:$l.push(i),Ke!==4&&(Ke=2),t===null)return!0;n=Ut(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Ku(a.stateNode,n,e),uo(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ja===null||!ja.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Lf(l),Gf(l,e,a,n),uo(a,l),!1}a=a.return}while(a!==null);return!1}var Ef=Error(c(461)),it=!1;function ft(e,t,a,n){t.child=e===null?Hs(t,null,a,n):on(t,e.child,a,n)}function Af(e,t,a,n,l){a=a.render;var i=t.ref;if("ref"in n){var u={};for(var s in n)s!=="ref"&&(u[s]=n[s])}else u=n;return gn(t),n=Au(e,t,a,u,i,l),s=_u(),e!==null&&!it?(xu(e,t,l),ha(e,t,l)):(Ge&&s&&pu(t),t.flags|=1,ft(e,t,n,l),t.child)}function _f(e,t,a,n,l){if(e===null){var i=a.type;return typeof i=="function"&&!mo(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,xf(e,t,i,n,l)):(e=lr(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!to(e,l)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:El,a(u,n)&&e.ref===t.ref)return ha(e,t,l)}return t.flags|=1,e=Va(i,n),e.ref=t.ref,e.return=t,t.child=e}function xf(e,t,a,n,l){if(e!==null){var i=e.memoizedProps;if(El(i,n)&&e.ref===t.ref)if(it=!1,t.pendingProps=n=i,to(e,l))(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,ha(e,t,l)}return Qu(e,t,a,n,l)}function Hf(e,t,a){var n=t.pendingProps,l=n.children,i=(t.stateNode._pendingVisibility&2)!==0,u=e!==null?e.memoizedState:null;if(jl(e,t),n.mode==="hidden"||i){if((t.flags&128)!==0){if(n=u!==null?u.baseLanes|a:a,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;t.childLanes=i&~n}else t.childLanes=0,t.child=null;return Cf(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&qi(t,u!==null?u.cachePool:null),u!==null?Cs(t,u):Ru(),Ns(t);else return t.lanes=t.childLanes=536870912,Cf(e,t,u!==null?u.baseLanes|a:a,a)}else u!==null?(qi(t,u.cachePool),Cs(t,u),_a(),t.memoizedState=null):(e!==null&&qi(t,null),Ru(),_a());return ft(e,t,l,a),t.child}function Cf(e,t,a,n){var l=Gu();return l=l===null?null:{parent:nt._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&qi(t,null),Ru(),Ns(t),e!==null&&ql(e,t,n,!0),null}function jl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=2097664)}}function Qu(e,t,a,n,l){return gn(t),a=Au(e,t,a,n,void 0,l),n=_u(),e!==null&&!it?(xu(e,t,l),ha(e,t,l)):(Ge&&n&&pu(t),t.flags|=1,ft(e,t,a,l),t.child)}function Nf(e,t,a,n,l,i){return gn(t),t.updateQueue=null,a=ks(t,n,a,l),zs(e),n=_u(),e!==null&&!it?(xu(e,t,i),ha(e,t,i)):(Ge&&n&&pu(t),t.flags|=1,ft(e,t,a,i),t.child)}function Of(e,t,a,n,l){if(gn(t),t.stateNode===null){var i=zn,u=a.contextType;typeof u=="object"&&u!==null&&(i=gt(u)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Yu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},io(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?gt(u):zn,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Wu(t,a,u,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Yu.enqueueReplaceState(i,i.state,null),Kl(t,n,i,l),Yl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,h=dn(a,s);i.props=h;var m=i.context,G=a.contextType;u=zn,typeof G=="object"&&G!==null&&(u=gt(G));var H=a.getDerivedStateFromProps;G=typeof H=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,G||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||m!==u)&&bf(t,i,n,u),Na=!1;var R=t.memoizedState;i.state=R,Kl(t,n,i,l),Yl(),m=t.memoizedState,s||R!==m||Na?(typeof H=="function"&&(Wu(t,a,H,n),m=t.memoizedState),(h=Na||vf(t,a,h,n,R,m,u))?(G||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=m),i.props=n,i.state=m,i.context=u,n=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,ro(e,t),u=t.memoizedProps,G=dn(a,u),i.props=G,H=t.pendingProps,R=i.context,m=a.contextType,h=zn,typeof m=="object"&&m!==null&&(h=gt(m)),s=a.getDerivedStateFromProps,(m=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==H||R!==h)&&bf(t,i,n,h),Na=!1,R=t.memoizedState,i.state=R,Kl(t,n,i,l),Yl();var L=t.memoizedState;u!==H||R!==L||Na||e!==null&&e.dependencies!==null&&er(e.dependencies)?(typeof s=="function"&&(Wu(t,a,s,n),L=t.memoizedState),(G=Na||vf(t,a,G,n,R,L,h)||e!==null&&e.dependencies!==null&&er(e.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,L,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,L,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=L),i.props=n,i.state=L,i.context=h,n=G):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,jl(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=on(t,e.child,null,l),t.child=on(t,null,a,l)):ft(e,t,a,l),t.memoizedState=i.state,e=t.child):e=ha(e,t,l),e}function Bf(e,t,a,n){return xl(),t.flags|=256,ft(e,t,a,n),t.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function Zu(e){return{baseLanes:e,cachePool:Us()}}function Ju(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Wt),e}function Uf(e,t,a){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),u&&(l=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ge){if(l?Aa(t):_a(),Ge){var s=st,h;if(h=s){e:{for(h=s,s=ea;h.nodeType!==8;){if(!s){s=null;break e}if(h=Pt(h.nextSibling),h===null){s=null;break e}}s=h}s!==null?(t.memoizedState={dehydrated:s,treeContext:ln!==null?{id:oa,overflow:ca}:null,retryLane:536870912},h=qt(18,null,null,0),h.stateNode=s,h.return=t,t.child=h,Dt=t,st=null,h=!0):h=!1}h||un(t)}if(s=t.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return s.data==="$!"?t.lanes=16:t.lanes=536870912,null;sa(t)}return s=n.children,n=n.fallback,l?(_a(),l=t.mode,s=$u({mode:"hidden",children:s},l),n=Sn(n,l,a,null),s.return=t,n.return=t,s.sibling=n,t.child=s,l=t.child,l.memoizedState=Zu(a),l.childLanes=Ju(e,u,a),t.memoizedState=Xu,n):(Aa(t),Pu(t,s))}if(h=e.memoizedState,h!==null&&(s=h.dehydrated,s!==null)){if(i)t.flags&256?(Aa(t),t.flags&=-257,t=Iu(e,t,a)):t.memoizedState!==null?(_a(),t.child=e.child,t.flags|=128,t=null):(_a(),l=n.fallback,s=t.mode,n=$u({mode:"visible",children:n.children},s),l=Sn(l,s,a,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,on(t,e.child,null,a),n=t.child,n.memoizedState=Zu(a),n.childLanes=Ju(e,u,a),t.memoizedState=Xu,t=l);else if(Aa(t),s.data==="$!"){if(u=s.nextSibling&&s.nextSibling.dataset,u)var m=u.dgst;u=m,n=Error(c(419)),n.stack="",n.digest=u,Hl({value:n,source:null,stack:null}),t=Iu(e,t,a)}else if(it||ql(e,t,a,!1),u=(a&e.childLanes)!==0,it||u){if(u=ke,u!==null){if(n=a&-a,(n&42)!==0)n=1;else switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=64;break;case 268435456:n=134217728;break;default:n=0}if(n=(n&(u.suspendedLanes|a))!==0?0:n,n!==0&&n!==h.retryLane)throw h.retryLane=n,Ea(e,n),pt(u,e,n),Ef}s.data==="$?"||Eo(),t=Iu(e,t,a)}else s.data==="$?"?(t.flags|=128,t.child=e.child,t=Ug.bind(null,e),s._reactRetry=t,t=null):(e=h.treeContext,st=Pt(s.nextSibling),Dt=t,Ge=!0,Zt=null,ea=!1,e!==null&&(zt[kt++]=oa,zt[kt++]=ca,zt[kt++]=ln,oa=e.id,ca=e.overflow,ln=t),t=Pu(t,n.children),t.flags|=4096);return t}return l?(_a(),l=n.fallback,s=t.mode,h=e.child,m=h.sibling,n=Va(h,{mode:"hidden",children:n.children}),n.subtreeFlags=h.subtreeFlags&31457280,m!==null?l=Va(m,l):(l=Sn(l,s,a,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,s=e.child.memoizedState,s===null?s=Zu(a):(h=s.cachePool,h!==null?(m=nt._currentValue,h=h.parent!==m?{parent:m,pool:m}:h):h=Us(),s={baseLanes:s.baseLanes|a,cachePool:h}),l.memoizedState=s,l.childLanes=Ju(e,u,a),t.memoizedState=Xu,n):(Aa(t),a=e.child,e=a.sibling,a=Va(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Pu(e,t){return t=$u({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function $u(e,t){return ch(e,t,0,null)}function Iu(e,t,a){return on(t,e.child,null,a),e=Pu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),no(e.return,t,a)}function eo(e,t,a,n,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=a,i.tailMode=l)}function kf(e,t,a){var n=t.pendingProps,l=n.revealOrder,i=n.tail;if(ft(e,t,n.children,a),n=at.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zf(e,a,t);else if(e.tag===19)zf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(le(at,n),l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&ji(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),eo(t,!1,l,a,i);break;case"backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ji(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}eo(t,!0,a,null,i);break;case"together":eo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ha(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ql(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Va(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Va(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function to(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&er(e)))}function Rg(e,t,a){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),Ca(t,nt,e.memoizedState.cache),xl();break;case 27:case 5:Pe(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:Ca(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Aa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Uf(e,t,a):(Aa(t),e=ha(e,t,a),e!==null?e.sibling:null);Aa(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(ql(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return kf(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),le(at,at.current),n)break;return null;case 22:case 23:return t.lanes=0,Hf(e,t,a);case 24:Ca(t,nt,e.memoizedState.cache)}return ha(e,t,a)}function Vf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)it=!0;else{if(!to(e,a)&&(t.flags&128)===0)return it=!1,Rg(e,t,a);it=(e.flags&131072)!==0}else it=!1,Ge&&(t.flags&1048576)!==0&&Rs(t,Ui,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,l=n._init;if(n=l(n._payload),t.type=n,typeof n=="function")mo(n)?(e=dn(n,e),t.tag=1,t=Of(null,t,n,e,a)):(t.tag=0,t=Qu(null,t,n,e,a));else{if(n!=null){if(l=n.$$typeof,l===ie){t.tag=11,t=Af(null,t,n,e,a);break e}else if(l===pe){t.tag=14,t=_f(null,t,n,e,a);break e}}throw t=p(n)||n,Error(c(306,t,""))}}return t;case 0:return Qu(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=dn(n,t.pendingProps),Of(e,t,n,l,a);case 3:e:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(c(387));var i=t.pendingProps;l=t.memoizedState,n=l.element,ro(e,t),Kl(t,i,null,a);var u=t.memoizedState;if(i=u.cache,Ca(t,nt,i),i!==l.cache&&lo(t,[nt],a,!0),Yl(),i=u.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Bf(e,t,i,a);break e}else if(i!==n){n=Ut(Error(c(424)),t),Hl(n),t=Bf(e,t,i,a);break e}else for(st=Pt(t.stateNode.containerInfo.firstChild),Dt=t,Ge=!0,Zt=null,ea=!0,a=Hs(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xl(),i===n){t=ha(e,t,a);break e}ft(e,t,i,a)}t=t.child}return t;case 26:return jl(e,t),e===null?(a=qh(t.type,null,t.pendingProps,null))?t.memoizedState=a:Ge||(a=t.type,e=t.pendingProps,n=mr(Be.current).createElement(a),n[yt]=t,n[bt]=e,ht(n,a,e),lt(n),t.stateNode=n):t.memoizedState=qh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pe(t),e===null&&Ge&&(n=t.stateNode=Vh(t.type,t.pendingProps,Be.current),Dt=t,ea=!0,st=Pt(n.firstChild)),n=t.pendingProps.children,e!==null||Ge?ft(e,t,n,a):t.child=on(t,null,n,a),jl(e,t),t.child;case 5:return e===null&&Ge&&((l=n=st)&&(n=Ig(n,t.type,t.pendingProps,ea),n!==null?(t.stateNode=n,Dt=t,st=Pt(n.firstChild),ea=!1,l=!0):l=!1),l||un(t)),Pe(t),l=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,n=i.children,jo(l,i)?n=null:u!==null&&jo(l,u)&&(t.flags|=32),t.memoizedState!==null&&(l=Au(e,t,mg,null,null,a),ui._currentValue=l),jl(e,t),ft(e,t,n,a),t.child;case 6:return e===null&&Ge&&((e=a=st)&&(a=em(a,t.pendingProps,ea),a!==null?(t.stateNode=a,Dt=t,st=null,e=!0):e=!1),e||un(t)),null;case 13:return Uf(e,t,a);case 4:return Le(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=on(t,null,n,a):ft(e,t,n,a),t.child;case 11:return Af(e,t,t.type,t.pendingProps,a);case 7:return ft(e,t,t.pendingProps,a),t.child;case 8:return ft(e,t,t.pendingProps.children,a),t.child;case 12:return ft(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ca(t,t.type,n.value),ft(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,gn(t),l=gt(l),n=n(l),t.flags|=1,ft(e,t,n,a),t.child;case 14:return _f(e,t,t.type,t.pendingProps,a);case 15:return xf(e,t,t.type,t.pendingProps,a);case 19:return kf(e,t,a);case 22:return Hf(e,t,a);case 24:return gn(t),n=gt(nt),e===null?(l=Gu(),l===null&&(l=ke,i=wu(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:n,cache:l},io(t),Ca(t,nt,l)):((e.lanes&a)!==0&&(ro(e,t),Kl(t,null,null,a),Yl()),l=e.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Ca(t,nt,n)):(n=i.cache,Ca(t,nt,n),n!==l.cache&&lo(t,[nt],a,!0))),ft(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}var ao=Y(null),yn=null,da=null;function Ca(e,t,a){le(ao,t._currentValue),t._currentValue=a}function ya(e){e._currentValue=ao.current,$(ao)}function no(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function lo(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var u=l.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=l;for(var h=0;h<t.length;h++)if(s.context===t[h]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),no(i.return,a,e),n||(u=null);break e}i=s.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(c(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),no(u,a,e),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===e){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function ql(e,t,a,n){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var s=l.type;wt(l.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(l===He.current){if(u=l.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(ui):e=[ui])}l=l.return}e!==null&&lo(t,e,a,n),t.flags|=262144}function er(e){for(e=e.firstContext;e!==null;){if(!wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gn(e){yn=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function gt(e){return Ff(yn,e)}function tr(e,t){return yn===null&&gn(e),Ff(e,t)}function Ff(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},da===null){if(e===null)throw Error(c(308));da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else da=da.next=t;return a}var Na=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ro(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(We&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=Oi(e),bs(e,null,a),t}return Ni(e,n,t,a),Oi(e)}function Wl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194176)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Ac(e,a)}}function uo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var oo=!1;function Yl(){if(oo){var e=Wn;if(e!==null)throw e}}function Kl(e,t,a,n){oo=!1;var l=e.updateQueue;Na=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var h=s,m=h.next;h.next=null,u===null?i=m:u.next=m,u=h;var G=e.alternate;G!==null&&(G=G.updateQueue,s=G.lastBaseUpdate,s!==u&&(s===null?G.firstBaseUpdate=m:s.next=m,G.lastBaseUpdate=h))}if(i!==null){var H=l.baseState;u=0,G=m=h=null,s=i;do{var R=s.lane&-536870913,L=R!==s.lane;if(L?(Te&R)===R:(n&R)===R){R!==0&&R===qn&&(oo=!0),G!==null&&(G=G.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var I=e,fe=s;R=t;var Qe=a;switch(fe.tag){case 1:if(I=fe.payload,typeof I=="function"){H=I.call(Qe,H,R);break e}H=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=fe.payload,R=typeof I=="function"?I.call(Qe,H,R):I,R==null)break e;H=w({},H,R);break e;case 2:Na=!0}}R=s.callback,R!==null&&(e.flags|=64,L&&(e.flags|=8192),L=l.callbacks,L===null?l.callbacks=[R]:L.push(R))}else L={lane:R,tag:s.tag,payload:s.payload,callback:s.callback,next:null},G===null?(m=G=L,h=H):G=G.next=L,u|=R;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;L=s,s=L.next,L.next=null,l.lastBaseUpdate=L,l.shared.pending=null}}while(!0);G===null&&(h=H),l.baseState=h,l.firstBaseUpdate=m,l.lastBaseUpdate=G,i===null&&(l.shared.lanes=0),Fa|=u,e.lanes=u,e.memoizedState=H}}function jf(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function qf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)jf(a[e],t)}function Ql(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var i=a.create,u=a.inst;n=i(),u.destroy=n}a=a.next}while(a!==l)}}catch(s){ze(t,t.return,s)}}function Ua(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var u=n.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,l=t;var h=a;try{s()}catch(m){ze(l,h,m)}}}n=n.next}while(n!==i)}}catch(m){ze(t,t.return,m)}}function Wf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{qf(t,a)}catch(n){ze(e,e.return,n)}}}function Yf(e,t,a){a.props=dn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ze(e,t,n)}}function mn(e,t){try{var a=e.ref;if(a!==null){var n=e.stateNode;switch(e.tag){case 26:case 27:case 5:var l=n;break;default:l=n}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(i){ze(e,t,i)}}function Lt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){ze(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ze(e,t,l)}else a.current=null}function Kf(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){ze(e,e.return,l)}}function Qf(e,t,a){try{var n=e.stateNode;Xg(n,e.type,a,t),n[bt]=t}catch(l){ze(e,e.return,l)}}function Xf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function co(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function so(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=gr));else if(n!==4&&n!==27&&(e=e.child,e!==null))for(so(e,t,a),e=e.sibling;e!==null;)so(e,t,a),e=e.sibling}function ar(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&n!==27&&(e=e.child,e!==null))for(ar(e,t,a),e=e.sibling;e!==null;)ar(e,t,a),e=e.sibling}var ga=!1,Ye=!1,fo=!1,Zf=typeof WeakSet=="function"?WeakSet:Set,rt=null,Jf=!1;function Tg(e,t){if(e=e.containerInfo,Vo=Mr,e=hs(e),du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,s=-1,h=-1,m=0,G=0,H=e,R=null;t:for(;;){for(var L;H!==a||l!==0&&H.nodeType!==3||(s=u+l),H!==i||n!==0&&H.nodeType!==3||(h=u+n),H.nodeType===3&&(u+=H.nodeValue.length),(L=H.firstChild)!==null;)R=H,H=L;for(;;){if(H===e)break t;if(R===a&&++m===l&&(s=u),R===i&&++G===n&&(h=u),(L=H.nextSibling)!==null)break;H=R,R=H.parentNode}H=L}a=s===-1||h===-1?null:{start:s,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fo={focusedElem:e,selectionRange:a},Mr=!1,rt=t;rt!==null;)if(t=rt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,rt=e;else for(;rt!==null;){switch(t=rt,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var I=dn(a.type,l,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(I,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(fe){ze(a,a.return,fe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Yo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,rt=e;break}rt=t.return}return I=Jf,Jf=!1,I}function Pf(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(e,a),n&4&&Ql(5,a);break;case 1:if(Sa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){ze(a,a.return,s)}else{var l=dn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ze(a,a.return,s)}}n&64&&Wf(a),n&512&&mn(a,a.return);break;case 3:if(Sa(e,a),n&64&&(n=a.updateQueue,n!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{qf(n,e)}catch(s){ze(a,a.return,s)}}break;case 26:Sa(e,a),n&512&&mn(a,a.return);break;case 27:case 5:Sa(e,a),t===null&&n&4&&Kf(a),n&512&&mn(a,a.return);break;case 12:Sa(e,a);break;case 13:Sa(e,a),n&4&&eh(e,a);break;case 22:if(l=a.memoizedState!==null||ga,!l){t=t!==null&&t.memoizedState!==null||Ye;var i=ga,u=Ye;ga=l,(Ye=t)&&!u?za(e,a,(a.subtreeFlags&8772)!==0):Sa(e,a),ga=i,Ye=u}n&512&&(a.memoizedProps.mode==="manual"?mn(a,a.return):Lt(a,a.return));break;default:Sa(e,a)}}function $f(e){var t=e.alternate;t!==null&&(e.alternate=null,$f(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var et=null,Gt=!1;function ma(e,t,a){for(a=a.child;a!==null;)If(e,t,a),a=a.sibling}function If(e,t,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Qt,a)}catch{}switch(a.tag){case 26:Ye||Lt(a,t),ma(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ye||Lt(a,t);var n=et,l=Gt;for(et=a.stateNode,ma(e,t,a),a=a.stateNode,t=a.attributes;t.length;)a.removeAttributeNode(t[0]);Pr(a),et=n,Gt=l;break;case 5:Ye||Lt(a,t);case 6:l=et;var i=Gt;if(et=null,ma(e,t,a),et=l,Gt=i,et!==null)if(Gt)try{e=et,n=a.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)}catch(u){ze(a,t,u)}else try{et.removeChild(a.stateNode)}catch(u){ze(a,t,u)}break;case 18:et!==null&&(Gt?(t=et,a=a.stateNode,t.nodeType===8?Wo(t.parentNode,a):t.nodeType===1&&Wo(t,a),fi(t)):Wo(et,a.stateNode));break;case 4:n=et,l=Gt,et=a.stateNode.containerInfo,Gt=!0,ma(e,t,a),et=n,Gt=l;break;case 0:case 11:case 14:case 15:Ye||Ua(2,a,t),Ye||Ua(4,a,t),ma(e,t,a);break;case 1:Ye||(Lt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Yf(a,t,n)),ma(e,t,a);break;case 21:ma(e,t,a);break;case 22:Ye||Lt(a,t),Ye=(n=Ye)||a.memoizedState!==null,ma(e,t,a),Ye=n;break;default:ma(e,t,a)}}function eh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fi(e)}catch(a){ze(t,t.return,a)}}function wg(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zf),t;default:throw Error(c(435,e.tag))}}function ho(e,t){var a=wg(e);t.forEach(function(n){var l=zg.bind(null,e,n);a.has(n)||(a.add(n),n.then(l,l))})}function Ft(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=e,u=t,s=u;e:for(;s!==null;){switch(s.tag){case 27:case 5:et=s.stateNode,Gt=!1;break e;case 3:et=s.stateNode.containerInfo,Gt=!0;break e;case 4:et=s.stateNode.containerInfo,Gt=!0;break e}s=s.return}if(et===null)throw Error(c(160));If(i,u,l),et=null,Gt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)th(t,e),t=t.sibling}var Jt=null;function th(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ft(t,e),jt(e),n&4&&(Ua(3,e,e.return),Ql(3,e),Ua(5,e,e.return));break;case 1:Ft(t,e),jt(e),n&512&&(Ye||a===null||Lt(a,a.return)),n&64&&ga&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Jt;if(Ft(t,e),jt(e),n&512&&(Ye||a===null||Lt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[pl]||i[yt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),ht(i,n,a),i[yt]=e,lt(i),n=i;break e;case"link":var u=Kh("link","href",l).get(n+(a.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(a.href==null?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(s,1);break t}}i=l.createElement(n),ht(i,n,a),l.head.appendChild(i);break;case"meta":if(u=Kh("meta","content",l).get(n+(a.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(s,1);break t}}i=l.createElement(n),ht(i,n,a),l.head.appendChild(i);break;default:throw Error(c(468,n))}i[yt]=e,lt(i),n=i}e.stateNode=n}else Qh(l,e.type,e.stateNode);else e.stateNode=Yh(l,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?Qh(l,e.type,e.stateNode):Yh(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Qf(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(n&4&&e.alternate===null){l=e.stateNode,i=e.memoizedProps;try{for(var h=l.firstChild;h;){var m=h.nextSibling,G=h.nodeName;h[pl]||G==="HEAD"||G==="BODY"||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&h.rel.toLowerCase()==="stylesheet"||l.removeChild(h),h=m}for(var H=e.type,R=l.attributes;R.length;)l.removeAttributeNode(R[0]);ht(l,H,i),l[yt]=e,l[bt]=i}catch(I){ze(e,e.return,I)}}case 5:if(Ft(t,e),jt(e),n&512&&(Ye||a===null||Lt(a,a.return)),e.flags&32){l=e.stateNode;try{xn(l,"")}catch(I){ze(e,e.return,I)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Qf(e,l,a!==null?a.memoizedProps:l)),n&1024&&(fo=!0);break;case 6:if(Ft(t,e),jt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(I){ze(e,e.return,I)}}break;case 3:if(pr=null,l=Jt,Jt=Sr(t.containerInfo),Ft(t,e),Jt=l,jt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{fi(t.containerInfo)}catch(I){ze(e,e.return,I)}fo&&(fo=!1,ah(e));break;case 4:n=Jt,Jt=Sr(e.stateNode.containerInfo),Ft(t,e),jt(e),Jt=n;break;case 12:Ft(t,e),jt(e);break;case 13:Ft(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Mo=Ue()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ho(e,n)));break;case 22:if(n&512&&(Ye||a===null||Lt(a,a.return)),h=e.memoizedState!==null,m=a!==null&&a.memoizedState!==null,G=ga,H=Ye,ga=G||h,Ye=H||m,Ft(t,e),Ye=H,ga=G,jt(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,n&8192&&(t._visibility=h?t._visibility&-2:t._visibility|1,h&&(t=ga||Ye,a===null||m||t||Xn(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(a=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(a===null){m=a=t;try{if(l=m.stateNode,h)i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{u=m.stateNode,s=m.memoizedProps.style;var L=s!=null&&s.hasOwnProperty("display")?s.display:null;u.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(I){ze(m,m.return,I)}}}else if(t.tag===6){if(a===null){m=t;try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(I){ze(m,m.return,I)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,ho(e,a))));break;case 19:Ft(t,e),jt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ho(e,n)));break;case 21:break;default:Ft(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var a=e.return;a!==null;){if(Xf(a)){var n=a;break e}a=a.return}throw Error(c(160))}switch(n.tag){case 27:var l=n.stateNode,i=co(e);ar(e,i,l);break;case 5:var u=n.stateNode;n.flags&32&&(xn(u,""),n.flags&=-33);var s=co(e);ar(e,s,u);break;case 3:case 4:var h=n.stateNode.containerInfo,m=co(e);so(e,m,h);break;default:throw Error(c(161))}}}catch(G){ze(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ah(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ah(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Pf(e,t.alternate,t),t=t.sibling}function Xn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ua(4,t,t.return),Xn(t);break;case 1:Lt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Yf(t,t.return,a),Xn(t);break;case 26:case 27:case 5:Lt(t,t.return),Xn(t);break;case 22:Lt(t,t.return),t.memoizedState===null&&Xn(t);break;default:Xn(t)}e=e.sibling}}function za(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:za(l,i,a),Ql(4,i);break;case 1:if(za(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(m){ze(n,n.return,m)}if(n=i,l=n.updateQueue,l!==null){var s=n.stateNode;try{var h=l.shared.hiddenCallbacks;if(h!==null)for(l.shared.hiddenCallbacks=null,l=0;l<h.length;l++)jf(h[l],s)}catch(m){ze(n,n.return,m)}}a&&u&64&&Wf(i),mn(i,i.return);break;case 26:case 27:case 5:za(l,i,a),a&&n===null&&u&4&&Kf(i),mn(i,i.return);break;case 12:za(l,i,a);break;case 13:za(l,i,a),a&&u&4&&eh(l,i);break;case 22:i.memoizedState===null&&za(l,i,a),mn(i,i.return);break;default:za(l,i,a)}t=t.sibling}}function yo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ul(a))}function go(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ul(e))}function ka(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nh(e,t,a,n),t=t.sibling}function nh(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:ka(e,t,a,n),l&2048&&Ql(9,t);break;case 3:ka(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ul(e)));break;case 12:if(l&2048){ka(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){ze(t,t.return,h)}}else ka(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,t.memoizedState!==null?i._visibility&4?ka(e,t,a,n):Xl(e,t):i._visibility&4?ka(e,t,a,n):(i._visibility|=4,Zn(e,t,a,n,(t.subtreeFlags&10256)!==0)),l&2048&&yo(t.alternate,t);break;case 24:ka(e,t,a,n),l&2048&&go(t.alternate,t);break;default:ka(e,t,a,n)}}function Zn(e,t,a,n,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,u=t,s=a,h=n,m=u.flags;switch(u.tag){case 0:case 11:case 15:Zn(i,u,s,h,l),Ql(8,u);break;case 23:break;case 22:var G=u.stateNode;u.memoizedState!==null?G._visibility&4?Zn(i,u,s,h,l):Xl(i,u):(G._visibility|=4,Zn(i,u,s,h,l)),l&&m&2048&&yo(u.alternate,u);break;case 24:Zn(i,u,s,h,l),l&&m&2048&&go(u.alternate,u);break;default:Zn(i,u,s,h,l)}t=t.sibling}}function Xl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:Xl(a,n),l&2048&&yo(n.alternate,n);break;case 24:Xl(a,n),l&2048&&go(n.alternate,n);break;default:Xl(a,n)}t=t.sibling}}var Zl=8192;function Jn(e){if(e.subtreeFlags&Zl)for(e=e.child;e!==null;)lh(e),e=e.sibling}function lh(e){switch(e.tag){case 26:Jn(e),e.flags&Zl&&e.memoizedState!==null&&dm(Jt,e.memoizedState,e.memoizedProps);break;case 5:Jn(e);break;case 3:case 4:var t=Jt;Jt=Sr(e.stateNode.containerInfo),Jn(e),Jt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Zl,Zl=16777216,Jn(e),Zl=t):Jn(e));break;default:Jn(e)}}function ih(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Jl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];rt=n,uh(n,e)}ih(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rh(e),e=e.sibling}function rh(e){switch(e.tag){case 0:case 11:case 15:Jl(e),e.flags&2048&&Ua(9,e,e.return);break;case 3:Jl(e);break;case 12:Jl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,nr(e)):Jl(e);break;default:Jl(e)}}function nr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];rt=n,uh(n,e)}ih(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ua(8,t,t.return),nr(t);break;case 22:a=t.stateNode,a._visibility&4&&(a._visibility&=-5,nr(t));break;default:nr(t)}e=e.sibling}}function uh(e,t){for(;rt!==null;){var a=rt;switch(a.tag){case 0:case 11:case 15:Ua(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Ul(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,rt=n;else e:for(a=e;rt!==null;){n=rt;var l=n.sibling,i=n.return;if($f(n),n===a){rt=null;break e}if(l!==null){l.return=i,rt=l;break e}rt=i}}}function Lg(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,a,n){return new Lg(e,t,a,n)}function mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Va(e,t){var a=e.alternate;return a===null?(a=qt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function oh(e,t){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function lr(e,t,a,n,l,i){var u=0;if(n=e,typeof e=="function")mo(e)&&(u=1);else if(typeof e=="string")u=fm(e,a,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case E:return Sn(a.children,l,i,t);case D:u=8,l|=24;break;case C:return e=qt(12,a,t,l|2),e.elementType=C,e.lanes=i,e;case oe:return e=qt(13,a,t,l),e.elementType=oe,e.lanes=i,e;case ce:return e=qt(19,a,t,l),e.elementType=ce,e.lanes=i,e;case de:return ch(a,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:case K:u=10;break e;case J:u=9;break e;case ie:u=11;break e;case pe:u=14;break e;case he:u=16,n=null;break e}u=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=qt(u,a,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function Sn(e,t,a,n){return e=qt(7,e,n,t),e.lanes=a,e}function ch(e,t,a,n){e=qt(22,e,n,t),e.elementType=de,e.lanes=a;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var i=l._current;if(i===null)throw Error(c(456));if((l._pendingVisibility&2)===0){var u=Ea(i,2);u!==null&&(l._pendingVisibility|=2,pt(u,i,2))}},attach:function(){var i=l._current;if(i===null)throw Error(c(456));if((l._pendingVisibility&2)!==0){var u=Ea(i,2);u!==null&&(l._pendingVisibility&=-3,pt(u,i,2))}}};return e.stateNode=l,e}function So(e,t,a){return e=qt(6,e,null,t),e.lanes=a,e}function Do(e,t,a){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Da(e){e.flags|=4}function sh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Xh(t)){if(t=Vt.current,t!==null&&((Te&4194176)===Te?ta!==null:(Te&62914560)!==Te&&(Te&536870912)===0||t!==ta))throw Nl=Mu,Ls;e.flags|=8192}}function ir(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gc():536870912,e.lanes|=t,$n|=t)}function Pl(e,t){if(!Ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&31457280,n|=l.flags&31457280,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Gg(e,t,a){var n=t.pendingProps;switch(vu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return qe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ya(nt),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(_l(t)?Da(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Zt!==null&&(Lo(Zt),Zt=null))),qe(t),null;case 26:return a=t.memoizedState,e===null?(Da(t),a!==null?(qe(t),sh(t,a)):(qe(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Da(t),qe(t),sh(t,a)):(qe(t),t.flags&=-16777217):(e.memoizedProps!==n&&Da(t),qe(t),t.flags&=-16777217),null;case 27:be(t),a=Be.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Da(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return qe(t),null}e=ae.current,_l(t)?Ts(t):(e=Vh(l,n,a),t.stateNode=e,Da(t))}return qe(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Da(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return qe(t),null}if(e=ae.current,_l(t))Ts(t);else{switch(l=mr(Be.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?l.createElement(a,{is:n.is}):l.createElement(a)}}e[yt]=t,e[bt]=n;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(ht(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Da(t)}}return qe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Da(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=Be.current,_l(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Dt,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[yt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Nh(e.nodeValue,a)),e||un(t)}else e=mr(e).createTextNode(n),e[yt]=t,t.stateNode=e}return qe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=_l(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[yt]=t}else xl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),l=!1}else Zt!==null&&(Lo(Zt),Zt=null),l=!0;if(!l)return t.flags&256?(sa(t),t):(sa(t),null)}if(sa(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var i=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),ir(t,t.updateQueue),qe(t),null;case 4:return se(),e===null&&Uo(t.stateNode.containerInfo),qe(t),null;case 10:return ya(t.type),qe(t),null;case 19:if($(at),l=t.memoizedState,l===null)return qe(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)Pl(l,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ji(e),i!==null){for(t.flags|=128,Pl(l,!1),e=i.updateQueue,t.updateQueue=e,ir(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)oh(a,e),a=a.sibling;return le(at,at.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ue()>rr&&(t.flags|=128,n=!0,Pl(l,!1),t.lanes=4194304)}else{if(!n)if(e=ji(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,ir(t,e),Pl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Ge)return qe(t),null}else 2*Ue()-l.renderingStartTime>rr&&a!==536870912&&(t.flags|=128,n=!0,Pl(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ue(),t.sibling=null,e=at.current,le(at,n?e&1|2:e&1),t):(qe(t),null);case 22:case 23:return sa(t),Tu(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),a=t.updateQueue,a!==null&&ir(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&$(cn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ya(nt),qe(t),null;case 25:return null}throw Error(c(156,t.tag))}function Eg(e,t){switch(vu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ya(nt),se(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 13:if(sa(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));xl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(at),null;case 4:return se(),null;case 10:return ya(t.type),null;case 22:case 23:return sa(t),Tu(),e!==null&&$(cn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ya(nt),null;case 25:return null;default:return null}}function fh(e,t){switch(vu(t),t.tag){case 3:ya(nt),se();break;case 26:case 27:case 5:be(t);break;case 4:se();break;case 13:sa(t);break;case 19:$(at);break;case 10:ya(t.type);break;case 22:case 23:sa(t),Tu(),e!==null&&$(cn);break;case 24:ya(nt)}}var Ag={getCacheForType:function(e){var t=gt(nt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},_g=typeof WeakMap=="function"?WeakMap:Map,We=0,ke=null,ve=null,Te=0,Ve=0,Et=null,pa=!1,Pn=!1,po=!1,va=0,Ke=0,Fa=0,Dn=0,vo=0,Wt=0,$n=0,$l=null,na=null,bo=!1,Mo=0,rr=1/0,ur=null,ja=null,or=!1,pn=null,Il=0,Ro=0,To=null,ei=0,wo=null;function At(){if((We&2)!==0&&Te!==0)return Te&-Te;if(y.T!==null){var e=qn;return e!==0?e:Co()}return xc()}function hh(){Wt===0&&(Wt=(Te&536870912)===0||Ge?Lc():536870912);var e=Vt.current;return e!==null&&(e.flags|=32),Wt}function pt(e,t,a){(e===ke&&Ve===2||e.cancelPendingCommit!==null)&&(In(e,0),ba(e,Te,Wt,!1)),Dl(e,a),((We&2)===0||e!==ke)&&(e===ke&&((We&2)===0&&(Dn|=a),Ke===4&&ba(e,Te,Wt,!1)),la(e))}function dh(e,t,a){if((We&6)!==0)throw Error(c(327));var n=!a&&(t&60)===0&&(t&e.expiredLanes)===0||Sl(e,t),l=n?Cg(e,t):Ao(e,t,!0),i=n;do{if(l===0){Pn&&!n&&ba(e,t,0,!1);break}else if(l===6)ba(e,t,0,!pa);else{if(a=e.current.alternate,i&&!xg(a)){l=Ao(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;l=$l;var h=s.current.memoizedState.isDehydrated;if(h&&(In(s,u).flags|=256),u=Ao(s,u,!1),u!==2){if(po&&!h){s.errorRecoveryDisabledLanes|=i,Dn|=i,l=4;break e}i=na,na=l,i!==null&&Lo(i)}l=u}if(i=!1,l!==2)continue}}if(l===1){In(e,0),ba(e,t,0,!0);break}e:{switch(n=e,l){case 0:case 1:throw Error(c(345));case 4:if((t&4194176)===t){ba(n,t,Wt,!pa);break e}break;case 2:na=null;break;case 3:case 5:break;default:throw Error(c(329))}if(n.finishedWork=a,n.finishedLanes=t,(t&62914560)===t&&(i=Mo+300-Ue(),10<i)){if(ba(n,t,Wt,!pa),bi(n,0)!==0)break e;n.timeoutHandle=Uh(yh.bind(null,n,a,na,ur,bo,t,Wt,Dn,$n,pa,2,-0,0),i);break e}yh(n,a,na,ur,bo,t,Wt,Dn,$n,pa,0,-0,0)}}break}while(!0);la(e)}function Lo(e){na===null?na=e:na.push.apply(na,e)}function yh(e,t,a,n,l,i,u,s,h,m,G,H,R){var L=t.subtreeFlags;if((L&8192||(L&16785408)===16785408)&&(ri={stylesheets:null,count:0,unsuspend:hm},lh(t),t=ym(),t!==null)){e.cancelPendingCommit=t(bh.bind(null,e,a,n,l,u,s,h,1,H,R)),ba(e,i,u,!m);return}bh(e,a,n,l,u,s,h,G,H,R)}function xg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!wt(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ba(e,t,a,n){t&=~vo,t&=~Dn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var i=31-Tt(l),u=1<<i;n[i]=-1,l&=~u}a!==0&&Ec(e,a,t)}function cr(){return(We&6)===0?(ti(0),!1):!0}function Go(){if(ve!==null){if(Ve===0)var e=ve.return;else e=ve,da=yn=null,Hu(e),Fn=null,Ol=0,e=ve;for(;e!==null;)fh(e.alternate,e),e=e.return;ve=null}}function In(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Jg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Go(),ke=e,ve=a=Va(e.current,null),Te=t,Ve=0,Et=null,pa=!1,Pn=Sl(e,t),po=!1,$n=Wt=vo=Dn=Fa=Ke=0,na=$l=null,bo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-Tt(n),i=1<<l;t|=e[l],n&=~i}return va=t,Ci(),a}function gh(e,t){Se=null,y.H=aa,t===Cl?(t=As(),Ve=3):t===Ls?(t=As(),Ve=4):Ve=t===Ef?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Et=t,ve===null&&(Ke=1,Ii(e,Ut(t,e.current)))}function mh(){var e=y.H;return y.H=aa,e===null?aa:e}function Sh(){var e=y.A;return y.A=Ag,e}function Eo(){Ke=4,pa||(Te&4194176)!==Te&&Vt.current!==null||(Pn=!0),(Fa&134217727)===0&&(Dn&134217727)===0||ke===null||ba(ke,Te,Wt,!1)}function Ao(e,t,a){var n=We;We|=2;var l=mh(),i=Sh();(ke!==e||Te!==t)&&(ur=null,In(e,t)),t=!1;var u=Ke;e:do try{if(Ve!==0&&ve!==null){var s=ve,h=Et;switch(Ve){case 8:Go(),u=6;break e;case 3:case 2:case 6:Vt.current===null&&(t=!0);var m=Ve;if(Ve=0,Et=null,el(e,s,h,m),a&&Pn){u=0;break e}break;default:m=Ve,Ve=0,Et=null,el(e,s,h,m)}}Hg(),u=Ke;break}catch(G){gh(e,G)}while(!0);return t&&e.shellSuspendCounter++,da=yn=null,We=n,y.H=l,y.A=i,ve===null&&(ke=null,Te=0,Ci()),u}function Hg(){for(;ve!==null;)Dh(ve)}function Cg(e,t){var a=We;We|=2;var n=mh(),l=Sh();ke!==e||Te!==t?(ur=null,rr=Ue()+500,In(e,t)):Pn=Sl(e,t);e:do try{if(Ve!==0&&ve!==null){t=ve;var i=Et;t:switch(Ve){case 1:Ve=0,Et=null,el(e,t,i,1);break;case 2:if(Gs(i)){Ve=0,Et=null,ph(t);break}t=function(){Ve===2&&ke===e&&(Ve=7),la(e)},i.then(t,t);break e;case 3:Ve=7;break e;case 4:Ve=5;break e;case 7:Gs(i)?(Ve=0,Et=null,ph(t)):(Ve=0,Et=null,el(e,t,i,7));break;case 5:var u=null;switch(ve.tag){case 26:u=ve.memoizedState;case 5:case 27:var s=ve;if(!u||Xh(u)){Ve=0,Et=null;var h=s.sibling;if(h!==null)ve=h;else{var m=s.return;m!==null?(ve=m,sr(m)):ve=null}break t}}Ve=0,Et=null,el(e,t,i,5);break;case 6:Ve=0,Et=null,el(e,t,i,6);break;case 8:Go(),Ke=6;break e;default:throw Error(c(462))}}Ng();break}catch(G){gh(e,G)}while(!0);return da=yn=null,y.H=n,y.A=l,We=a,ve!==null?0:(ke=null,Te=0,Ci(),Ke)}function Ng(){for(;ve!==null&&!xt();)Dh(ve)}function Dh(e){var t=Vf(e.alternate,e,va);e.memoizedProps=e.pendingProps,t===null?sr(e):ve=t}function ph(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Nf(a,t,t.pendingProps,t.type,void 0,Te);break;case 11:t=Nf(a,t,t.pendingProps,t.type.render,t.ref,Te);break;case 5:Hu(t);default:fh(a,t),t=ve=oh(t,va),t=Vf(a,t,va)}e.memoizedProps=e.pendingProps,t===null?sr(e):ve=t}function el(e,t,a,n){da=yn=null,Hu(t),Fn=null,Ol=0;var l=t.return;try{if(Mg(e,l,t,a,Te)){Ke=1,Ii(e,Ut(a,e.current)),ve=null;return}}catch(i){if(l!==null)throw ve=l,i;Ke=1,Ii(e,Ut(a,e.current)),ve=null;return}t.flags&32768?(Ge||n===1?e=!0:Pn||(Te&536870912)!==0?e=!1:(pa=e=!0,(n===2||n===3||n===6)&&(n=Vt.current,n!==null&&n.tag===13&&(n.flags|=16384))),vh(t,e)):sr(t)}function sr(e){var t=e;do{if((t.flags&32768)!==0){vh(t,pa);return}e=t.return;var a=Gg(t.alternate,t,va);if(a!==null){ve=a;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);Ke===0&&(Ke=5)}function vh(e,t){do{var a=Eg(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);Ke=6,ve=null}function bh(e,t,a,n,l,i,u,s,h,m){var G=y.T,H=B.p;try{B.p=2,y.T=null,Og(e,t,a,n,H,l,i,u,s,h,m)}finally{y.T=G,B.p=H}}function Og(e,t,a,n,l,i,u,s){do tl();while(pn!==null);if((We&6)!==0)throw Error(c(327));var h=e.finishedWork;if(n=e.finishedLanes,h===null)return null;if(e.finishedWork=null,e.finishedLanes=0,h===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var m=h.lanes|h.childLanes;if(m|=Su,dy(e,n,m,i,u,s),e===ke&&(ve=ke=null,Te=0),(h.subtreeFlags&10256)===0&&(h.flags&10256)===0||or||(or=!0,Ro=m,To=a,kg(vt,function(){return tl(),null})),a=(h.flags&15990)!==0,(h.subtreeFlags&15990)!==0||a?(a=y.T,y.T=null,i=B.p,B.p=2,u=We,We|=4,Tg(e,h),th(h,e),ig(Fo,e.containerInfo),Mr=!!Vo,Fo=Vo=null,e.current=h,Pf(e,h.alternate,h),Pa(),We=u,B.p=i,y.T=a):e.current=h,or?(or=!1,pn=e,Il=n):Mh(e,m),m=e.pendingLanes,m===0&&(ja=null),oy(h.stateNode),la(e),t!==null)for(l=e.onRecoverableError,h=0;h<t.length;h++)m=t[h],l(m.value,{componentStack:m.stack});return(Il&3)!==0&&tl(),m=e.pendingLanes,(n&4194218)!==0&&(m&42)!==0?e===wo?ei++:(ei=0,wo=e):ei=0,ti(0),null}function Mh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ul(t)))}function tl(){if(pn!==null){var e=pn,t=Ro;Ro=0;var a=_c(Il),n=y.T,l=B.p;try{if(B.p=32>a?32:a,y.T=null,pn===null)var i=!1;else{a=To,To=null;var u=pn,s=Il;if(pn=null,Il=0,(We&6)!==0)throw Error(c(331));var h=We;if(We|=4,rh(u.current),nh(u,u.current,s,a),We=h,ti(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Qt,u)}catch{}i=!0}return i}finally{B.p=l,y.T=n,Mh(e,t)}}return!1}function Rh(e,t,a){t=Ut(a,t),t=Ku(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(Dl(e,2),la(e))}function ze(e,t,a){if(e.tag===3)Rh(e,e,a);else for(;t!==null;){if(t.tag===3){Rh(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ja===null||!ja.has(n))){e=Ut(a,e),a=Lf(2),n=Ba(t,a,2),n!==null&&(Gf(a,n,t,e),Dl(n,2),la(n));break}}t=t.return}}function _o(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new _g;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(po=!0,l.add(a),e=Bg.bind(null,e,t,a),t.then(e,e))}function Bg(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(Te&a)===a&&(Ke===4||Ke===3&&(Te&62914560)===Te&&300>Ue()-Mo?(We&2)===0&&In(e,0):vo|=a,$n===Te&&($n=0)),la(e)}function Th(e,t){t===0&&(t=Gc()),e=Ea(e,t),e!==null&&(Dl(e,t),la(e))}function Ug(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Th(e,a)}function zg(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),Th(e,a)}function kg(e,t){return je(e,t)}var fr=null,al=null,xo=!1,hr=!1,Ho=!1,vn=0;function la(e){e!==al&&e.next===null&&(al===null?fr=al=e:al=al.next=e),hr=!0,xo||(xo=!0,Fg(Vg))}function ti(e,t){if(!Ho&&hr){Ho=!0;do for(var a=!1,n=fr;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var u=n.suspendedLanes,s=n.pingedLanes;i=(1<<31-Tt(42|e)+1)-1,i&=l&~(u&~s),i=i&201326677?i&201326677|1:i?i|2:0}i!==0&&(a=!0,Gh(n,i))}else i=Te,i=bi(n,n===ke?i:0),(i&3)===0||Sl(n,i)||(a=!0,Gh(n,i));n=n.next}while(a);Ho=!1}}function Vg(){hr=xo=!1;var e=0;vn!==0&&(Zg()&&(e=vn),vn=0);for(var t=Ue(),a=null,n=fr;n!==null;){var l=n.next,i=wh(n,t);i===0?(n.next=null,a===null?fr=l:a.next=l,l===null&&(al=a)):(a=n,(e!==0||(i&3)!==0)&&(hr=!0)),n=l}ti(e)}function wh(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-Tt(i),s=1<<u,h=l[u];h===-1?((s&a)===0||(s&n)!==0)&&(l[u]=hy(s,t)):h<=t&&(e.expiredLanes|=s),i&=~s}if(t=ke,a=Te,a=bi(e,e===t?a:0),n=e.callbackNode,a===0||e===t&&Ve===2||e.cancelPendingCommit!==null)return n!==null&&n!==null&&It(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Sl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&It(n),_c(a)){case 2:case 8:a=ct;break;case 32:a=vt;break;case 268435456:a=ml;break;default:a=vt}return n=Lh.bind(null,e),a=je(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&It(n),e.callbackPriority=2,e.callbackNode=null,2}function Lh(e,t){var a=e.callbackNode;if(tl()&&e.callbackNode!==a)return null;var n=Te;return n=bi(e,e===ke?n:0),n===0?null:(dh(e,n,t),wh(e,Ue()),e.callbackNode!=null&&e.callbackNode===a?Lh.bind(null,e):null)}function Gh(e,t){if(tl())return null;dh(e,t,!0)}function Fg(e){Pg(function(){(We&6)!==0?je(Ze,e):e()})}function Co(){return vn===0&&(vn=Lc()),vn}function Eh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Li(""+e)}function Ah(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function jg(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var i=Eh((l[bt]||null).action),u=n.submitter;u&&(t=(t=u[bt]||null)?Eh(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new _i("action","action",null,n,l);e.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(vn!==0){var h=u?Ah(l,u):new FormData(l);Fu(a,{pending:!0,data:h,method:l.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=u?Ah(l,u):new FormData(l),Fu(a,{pending:!0,data:h,method:l.method,action:i},i,h))},currentTarget:l}]})}}for(var No=0;No<vs.length;No++){var Oo=vs[No],qg=Oo.toLowerCase(),Wg=Oo[0].toUpperCase()+Oo.slice(1);Xt(qg,"on"+Wg)}Xt(gs,"onAnimationEnd"),Xt(ms,"onAnimationIteration"),Xt(Ss,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(ug,"onTransitionRun"),Xt(og,"onTransitionStart"),Xt(cg,"onTransitionCancel"),Xt(Ds,"onTransitionEnd"),An("onMouseEnter",["mouseout","mouseover"]),An("onMouseLeave",["mouseout","mouseover"]),An("onPointerEnter",["pointerout","pointerover"]),An("onPointerLeave",["pointerout","pointerover"]),en("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),en("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),en("onBeforeInput",["compositionend","keypress","textInput","paste"]),en("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),en("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),en("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ai));function _h(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var u=n.length-1;0<=u;u--){var s=n[u],h=s.instance,m=s.currentTarget;if(s=s.listener,h!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=m;try{i(l)}catch(G){$i(G)}l.currentTarget=null,i=h}else for(u=0;u<n.length;u++){if(s=n[u],h=s.instance,m=s.currentTarget,s=s.listener,h!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=m;try{i(l)}catch(G){$i(G)}l.currentTarget=null,i=h}}}}function Me(e,t){var a=t[Jr];a===void 0&&(a=t[Jr]=new Set);var n=e+"__bubble";a.has(n)||(xh(t,e,2,!1),a.add(n))}function Bo(e,t,a){var n=0;t&&(n|=4),xh(a,e,n,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Uo(e){if(!e[dr]){e[dr]=!0,Cc.forEach(function(a){a!=="selectionchange"&&(Yg.has(a)||Bo(a,!1,e),Bo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Bo("selectionchange",!1,t))}}function xh(e,t,a,n){switch(ed(t)){case 2:var l=Sm;break;case 8:l=Dm;break;default:l=Jo}a=l.bind(null,t,a,e),l=void 0,!lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function zo(e,t,a,n,l){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var s=n.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(u===4)for(u=n.return;u!==null;){var h=u.tag;if((h===3||h===4)&&(h=u.stateNode.containerInfo,h===l||h.nodeType===8&&h.parentNode===l))return;u=u.return}for(;s!==null;){if(u=Ia(s),u===null)return;if(h=u.tag,h===5||h===6||h===26||h===27){n=i=u;continue e}s=s.parentNode}}n=n.return}Yc(function(){var m=i,G=au(a),H=[];e:{var R=ps.get(e);if(R!==void 0){var L=_i,I=e;switch(e){case"keypress":if(Ei(a)===0)break e;case"keydown":case"keyup":L=zy;break;case"focusin":I="focus",L=ou;break;case"focusout":I="blur",L=ou;break;case"beforeblur":case"afterblur":L=ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Ly;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Fy;break;case gs:case ms:case Ss:L=Ay;break;case Ds:L=qy;break;case"scroll":case"scrollend":L=Ty;break;case"wheel":L=Yy;break;case"copy":case"cut":case"paste":L=xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Jc;break;case"toggle":case"beforetoggle":L=Qy}var fe=(t&4)!==0,Qe=!fe&&(e==="scroll"||e==="scrollend"),v=fe?R!==null?R+"Capture":null:R;fe=[];for(var g=m,b;g!==null;){var A=g;if(b=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||b===null||v===null||(A=bl(g,v),A!=null&&fe.push(ni(g,A,b))),Qe)break;g=g.return}0<fe.length&&(R=new L(R,I,null,a,G),H.push({event:R,listeners:fe}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",R&&a!==tu&&(I=a.relatedTarget||a.fromElement)&&(Ia(I)||I[Ln]))break e;if((L||R)&&(R=G.window===G?G:(R=G.ownerDocument)?R.defaultView||R.parentWindow:window,L?(I=a.relatedTarget||a.toElement,L=m,I=I?Ia(I):null,I!==null&&(Qe=j(I),fe=I.tag,I!==Qe||fe!==5&&fe!==27&&fe!==6)&&(I=null)):(L=null,I=m),L!==I)){if(fe=Xc,A="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(fe=Jc,A="onPointerLeave",v="onPointerEnter",g="pointer"),Qe=L==null?R:vl(L),b=I==null?R:vl(I),R=new fe(A,g+"leave",L,a,G),R.target=Qe,R.relatedTarget=b,A=null,Ia(G)===m&&(fe=new fe(v,g+"enter",I,a,G),fe.target=b,fe.relatedTarget=Qe,A=fe),Qe=A,L&&I)t:{for(fe=L,v=I,g=0,b=fe;b;b=nl(b))g++;for(b=0,A=v;A;A=nl(A))b++;for(;0<g-b;)fe=nl(fe),g--;for(;0<b-g;)v=nl(v),b--;for(;g--;){if(fe===v||v!==null&&fe===v.alternate)break t;fe=nl(fe),v=nl(v)}fe=null}else fe=null;L!==null&&Hh(H,R,L,fe,!1),I!==null&&Qe!==null&&Hh(H,Qe,I,fe,!0)}}e:{if(R=m?vl(m):window,L=R.nodeName&&R.nodeName.toLowerCase(),L==="select"||L==="input"&&R.type==="file")var Q=ls;else if(as(R))if(is)Q=ng;else{Q=tg;var De=eg}else L=R.nodeName,!L||L.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?m&&eu(m.elementType)&&(Q=ls):Q=ag;if(Q&&(Q=Q(e,m))){ns(H,Q,a,G);break e}De&&De(e,R,m),e==="focusout"&&m&&R.type==="number"&&m.memoizedProps.value!=null&&Ir(R,"number",R.value)}switch(De=m?vl(m):window,e){case"focusin":(as(De)||De.contentEditable==="true")&&(On=De,yu=m,Al=null);break;case"focusout":Al=yu=On=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,ds(H,a,G);break;case"selectionchange":if(rg)break;case"keydown":case"keyup":ds(H,a,G)}var ee;if(su)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Nn?es(e,a)&&(ue="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(Pc&&a.locale!=="ko"&&(Nn||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Nn&&(ee=Kc()):(Ga=G,iu="value"in Ga?Ga.value:Ga.textContent,Nn=!0)),De=yr(m,ue),0<De.length&&(ue=new Zc(ue,e,null,a,G),H.push({event:ue,listeners:De}),ee?ue.data=ee:(ee=ts(a),ee!==null&&(ue.data=ee)))),(ee=Zy?Jy(e,a):Py(e,a))&&(ue=yr(m,"onBeforeInput"),0<ue.length&&(De=new Zc("onBeforeInput","beforeinput",null,a,G),H.push({event:De,listeners:ue}),De.data=ee)),jg(H,e,m,a,G)}_h(H,t)})}function ni(e,t,a){return{instance:e,listener:t,currentTarget:a}}function yr(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=bl(e,a),l!=null&&n.unshift(ni(e,l,i)),l=bl(e,t),l!=null&&n.push(ni(e,l,i))),e=e.return}return n}function nl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hh(e,t,a,n,l){for(var i=t._reactName,u=[];a!==null&&a!==n;){var s=a,h=s.alternate,m=s.stateNode;if(s=s.tag,h!==null&&h===n)break;s!==5&&s!==26&&s!==27||m===null||(h=m,l?(m=bl(a,i),m!=null&&u.unshift(ni(a,m,h))):l||(m=bl(a,i),m!=null&&u.push(ni(a,m,h)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var Kg=/\r\n?/g,Qg=/\u0000|\uFFFD/g;function Ch(e){return(typeof e=="string"?e:""+e).replace(Kg,`
`).replace(Qg,"")}function Nh(e,t){return t=Ch(t),Ch(e)===t}function gr(){}function Oe(e,t,a,n,l,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||xn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&xn(e,""+n);break;case"className":Ri(e,"class",n);break;case"tabIndex":Ri(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ri(e,a,n);break;case"style":qc(e,n,i);break;case"data":if(t!=="object"){Ri(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Li(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Oe(e,t,"name",l.name,l,null),Oe(e,t,"formEncType",l.formEncType,l,null),Oe(e,t,"formMethod",l.formMethod,l,null),Oe(e,t,"formTarget",l.formTarget,l,null)):(Oe(e,t,"encType",l.encType,l,null),Oe(e,t,"method",l.method,l,null),Oe(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Li(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=gr);break;case"onScroll":n!=null&&Me("scroll",e);break;case"onScrollEnd":n!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Li(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Mi(e,"popover",n);break;case"xlinkActuate":ua(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ua(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ua(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ua(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ua(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ua(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ua(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ua(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ua(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Mi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=My.get(a)||a,Mi(e,a,n))}}function ko(e,t,a,n,l,i){switch(a){case"style":qc(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?xn(e,n):(typeof n=="number"||typeof n=="bigint")&&xn(e,""+n);break;case"onScroll":n!=null&&Me("scroll",e);break;case"onScrollEnd":n!=null&&Me("scrollend",e);break;case"onClick":n!=null&&(e.onclick=gr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[bt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Mi(e,a,n)}}}function ht(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Oe(e,t,i,u,a,null)}}l&&Oe(e,t,"srcSet",a.srcSet,a,null),n&&Oe(e,t,"src",a.src,a,null);return;case"input":Me("invalid",e);var s=i=u=l=null,h=null,m=null;for(n in a)if(a.hasOwnProperty(n)){var G=a[n];if(G!=null)switch(n){case"name":l=G;break;case"type":u=G;break;case"checked":h=G;break;case"defaultChecked":m=G;break;case"value":i=G;break;case"defaultValue":s=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(c(137,t));break;default:Oe(e,t,n,G,a,null)}}kc(e,i,s,h,m,u,l,!1),Ti(e);return;case"select":Me("invalid",e),n=u=i=null;for(l in a)if(a.hasOwnProperty(l)&&(s=a[l],s!=null))switch(l){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":n=s;default:Oe(e,t,l,s,a,null)}t=i,a=u,e.multiple=!!n,t!=null?_n(e,!!n,t,!1):a!=null&&_n(e,!!n,a,!0);return;case"textarea":Me("invalid",e),i=l=n=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":n=s;break;case"defaultValue":l=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:Oe(e,t,u,s,a,null)}Fc(e,n,l,i),Ti(e);return;case"option":for(h in a)if(a.hasOwnProperty(h)&&(n=a[h],n!=null))switch(h){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Oe(e,t,h,n,a,null)}return;case"dialog":Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(n=0;n<ai.length;n++)Me(ai[n],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in a)if(a.hasOwnProperty(m)&&(n=a[m],n!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Oe(e,t,m,n,a,null)}return;default:if(eu(t)){for(G in a)a.hasOwnProperty(G)&&(n=a[G],n!==void 0&&ko(e,t,G,n,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(n=a[s],n!=null&&Oe(e,t,s,n,a,null))}function Xg(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,u=null,s=null,h=null,m=null,G=null;for(L in a){var H=a[L];if(a.hasOwnProperty(L)&&H!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":h=H;default:n.hasOwnProperty(L)||Oe(e,t,L,null,n,H)}}for(var R in n){var L=n[R];if(H=a[R],n.hasOwnProperty(R)&&(L!=null||H!=null))switch(R){case"type":i=L;break;case"name":l=L;break;case"checked":m=L;break;case"defaultChecked":G=L;break;case"value":u=L;break;case"defaultValue":s=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(c(137,t));break;default:L!==H&&Oe(e,t,R,L,n,H)}}$r(e,u,s,h,m,G,i,l);return;case"select":L=u=s=R=null;for(i in a)if(h=a[i],a.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":L=h;default:n.hasOwnProperty(i)||Oe(e,t,i,null,n,h)}for(l in n)if(i=n[l],h=a[l],n.hasOwnProperty(l)&&(i!=null||h!=null))switch(l){case"value":R=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==h&&Oe(e,t,l,i,n,h)}t=s,a=u,n=L,R!=null?_n(e,!!a,R,!1):!!n!=!!a&&(t!=null?_n(e,!!a,t,!0):_n(e,!!a,a?[]:"",!1));return;case"textarea":L=R=null;for(s in a)if(l=a[s],a.hasOwnProperty(s)&&l!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Oe(e,t,s,null,n,l)}for(u in n)if(l=n[u],i=a[u],n.hasOwnProperty(u)&&(l!=null||i!=null))switch(u){case"value":R=l;break;case"defaultValue":L=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==i&&Oe(e,t,u,l,n,i)}Vc(e,R,L);return;case"option":for(var I in a)if(R=a[I],a.hasOwnProperty(I)&&R!=null&&!n.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:Oe(e,t,I,null,n,R)}for(h in n)if(R=n[h],L=a[h],n.hasOwnProperty(h)&&R!==L&&(R!=null||L!=null))switch(h){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:Oe(e,t,h,R,n,L)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in a)R=a[fe],a.hasOwnProperty(fe)&&R!=null&&!n.hasOwnProperty(fe)&&Oe(e,t,fe,null,n,R);for(m in n)if(R=n[m],L=a[m],n.hasOwnProperty(m)&&R!==L&&(R!=null||L!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:Oe(e,t,m,R,n,L)}return;default:if(eu(t)){for(var Qe in a)R=a[Qe],a.hasOwnProperty(Qe)&&R!==void 0&&!n.hasOwnProperty(Qe)&&ko(e,t,Qe,void 0,n,R);for(G in n)R=n[G],L=a[G],!n.hasOwnProperty(G)||R===L||R===void 0&&L===void 0||ko(e,t,G,R,n,L);return}}for(var v in a)R=a[v],a.hasOwnProperty(v)&&R!=null&&!n.hasOwnProperty(v)&&Oe(e,t,v,null,n,R);for(H in n)R=n[H],L=a[H],!n.hasOwnProperty(H)||R===L||R==null&&L==null||Oe(e,t,H,R,n,L)}var Vo=null,Fo=null;function mr(e){return e.nodeType===9?e:e.ownerDocument}function Oh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function jo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qo=null;function Zg(){var e=window.event;return e&&e.type==="popstate"?e===qo?!1:(qo=e,!0):(qo=null,!1)}var Uh=typeof setTimeout=="function"?setTimeout:void 0,Jg=typeof clearTimeout=="function"?clearTimeout:void 0,zh=typeof Promise=="function"?Promise:void 0,Pg=typeof queueMicrotask=="function"?queueMicrotask:typeof zh<"u"?function(e){return zh.resolve(null).then(e).catch($g)}:Uh;function $g(e){setTimeout(function(){throw e})}function Wo(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(n===0){e.removeChild(l),fi(t);return}n--}else a!=="$"&&a!=="$?"&&a!=="$!"||n++;a=l}while(a);fi(t)}function Yo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yo(a),Pr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ig(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[pl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Pt(e.nextSibling),e===null)break}return null}function em(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Pt(e.nextSibling),e===null))return null;return e}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function kh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function Vh(e,t,a){switch(t=mr(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}var Yt=new Map,Fh=new Set;function Sr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Ma=B.d;B.d={f:tm,r:am,D:nm,C:lm,L:im,m:rm,X:om,S:um,M:cm};function tm(){var e=Ma.f(),t=cr();return e||t}function am(e){var t=Gn(e);t!==null&&t.tag===5&&t.type==="form"?yf(t):Ma.r(e)}var ll=typeof document>"u"?null:document;function jh(e,t,a){var n=ll;if(n&&typeof t=="string"&&t){var l=Ot(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Fh.has(l)||(Fh.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),ht(t,"link",e),lt(t),n.head.appendChild(t)))}}function nm(e){Ma.D(e),jh("dns-prefetch",e,null)}function lm(e,t){Ma.C(e,t),jh("preconnect",e,t)}function im(e,t,a){Ma.L(e,t,a);var n=ll;if(n&&e&&t){var l='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Ot(a.imageSizes)+'"]')):l+='[href="'+Ot(e)+'"]';var i=l;switch(t){case"style":i=il(e);break;case"script":i=rl(e)}Yt.has(i)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Yt.set(i,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(li(i))||t==="script"&&n.querySelector(ii(i))||(t=n.createElement("link"),ht(t,"link",e),lt(t),n.head.appendChild(t)))}}function rm(e,t){Ma.m(e,t);var a=ll;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ot(n)+'"][href="'+Ot(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=rl(e)}if(!Yt.has(i)&&(e=w({rel:"modulepreload",href:e},t),Yt.set(i,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ii(i)))return}n=a.createElement("link"),ht(n,"link",e),lt(n),a.head.appendChild(n)}}}function um(e,t,a){Ma.S(e,t,a);var n=ll;if(n&&e){var l=En(n).hoistableStyles,i=il(e);t=t||"default";var u=l.get(i);if(!u){var s={loading:0,preload:null};if(u=n.querySelector(li(i)))s.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Yt.get(i))&&Ko(e,a);var h=u=n.createElement("link");lt(h),ht(h,"link",e),h._p=new Promise(function(m,G){h.onload=m,h.onerror=G}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Dr(u,t,n)}u={type:"stylesheet",instance:u,count:1,state:s},l.set(i,u)}}}function om(e,t){Ma.X(e,t);var a=ll;if(a&&e){var n=En(a).hoistableScripts,l=rl(e),i=n.get(l);i||(i=a.querySelector(ii(l)),i||(e=w({src:e,async:!0},t),(t=Yt.get(l))&&Qo(e,t),i=a.createElement("script"),lt(i),ht(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function cm(e,t){Ma.M(e,t);var a=ll;if(a&&e){var n=En(a).hoistableScripts,l=rl(e),i=n.get(l);i||(i=a.querySelector(ii(l)),i||(e=w({src:e,async:!0,type:"module"},t),(t=Yt.get(l))&&Qo(e,t),i=a.createElement("script"),lt(i),ht(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function qh(e,t,a,n){var l=(l=Be.current)?Sr(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=il(a.href),a=En(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=il(a.href);var i=En(l).hoistableStyles,u=i.get(e);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=l.querySelector(li(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Yt.set(e,a),i||sm(l,e,a,u.state))),t&&n===null)throw Error(c(528,""));return u}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=rl(a),a=En(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function il(e){return'href="'+Ot(e)+'"'}function li(e){return'link[rel="stylesheet"]['+e+"]"}function Wh(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function sm(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),ht(t,"link",a),lt(t),e.head.appendChild(t))}function rl(e){return'[src="'+Ot(e)+'"]'}function ii(e){return"script[async]"+e}function Yh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(n)return t.instance=n,lt(n),n;var l=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),lt(n),ht(n,"style",l),Dr(n,a.precedence,e),t.instance=n;case"stylesheet":l=il(a.href);var i=e.querySelector(li(l));if(i)return t.state.loading|=4,t.instance=i,lt(i),i;n=Wh(a),(l=Yt.get(l))&&Ko(n,l),i=(e.ownerDocument||e).createElement("link"),lt(i);var u=i;return u._p=new Promise(function(s,h){u.onload=s,u.onerror=h}),ht(i,"link",n),t.state.loading|=4,Dr(i,a.precedence,e),t.instance=i;case"script":return i=rl(a.src),(l=e.querySelector(ii(i)))?(t.instance=l,lt(l),l):(n=a,(l=Yt.get(i))&&(n=w({},a),Qo(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),lt(l),ht(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Dr(n,a.precedence,e));return t.instance}function Dr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,u=0;u<n.length;u++){var s=n[u];if(s.dataset.precedence===t)i=s;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ko(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Qo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var pr=null;function Kh(e,t,a){if(pr===null){var n=new Map,l=pr=new Map;l.set(a,n)}else l=pr,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[pl]||i[yt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=n.get(u);s?s.push(i):n.set(u,[i])}}return n}function Qh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function fm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Xh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ri=null;function hm(){}function dm(e,t,a){if(ri===null)throw Error(c(475));var n=ri;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=il(a.href),i=e.querySelector(li(l));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=vr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=i,lt(i);return}i=e.ownerDocument||e,a=Wh(a),(l=Yt.get(l))&&Ko(a,l),i=i.createElement("link"),lt(i);var u=i;u._p=new Promise(function(s,h){u.onload=s,u.onerror=h}),ht(i,"link",a),t.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=vr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function ym(){if(ri===null)throw Error(c(475));var e=ri;return e.stylesheets&&e.count===0&&Xo(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Xo(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function vr(){if(this.count--,this.count===0){if(this.stylesheets)Xo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var br=null;function Xo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,br=new Map,t.forEach(gm,e),br=null,vr.call(e))}function gm(e,t){if(!(t.state.loading&4)){var a=br.get(e);if(a)var n=a.get(null);else{a=new Map,br.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var u=l[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),n=u)}n&&a.set(null,n)}l=t.instance,u=l.getAttribute("data-precedence"),i=a.get(u)||n,i===n&&a.set(null,l),a.set(u,l),this.count++,n=vr.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var ui={$$typeof:K,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function mm(e,t,a,n,l,i,u,s){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zr(0),this.hiddenUpdates=Zr(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Zh(e,t,a,n,l,i,u,s,h,m,G,H){return e=new mm(e,t,a,u,s,h,m,H),t=1,i===!0&&(t|=24),i=qt(3,null,null,t),e.current=i,i.stateNode=e,t=wu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},io(i),e}function Jh(e){return e?(e=zn,e):zn}function Ph(e,t,a,n,l,i){l=Jh(l),n.context===null?n.context=l:n.pendingContext=l,n=Oa(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=Ba(e,n,t),a!==null&&(pt(a,e,t),Wl(a,e,t))}function $h(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Zo(e,t){$h(e,t),(e=e.alternate)&&$h(e,t)}function Ih(e){if(e.tag===13){var t=Ea(e,67108864);t!==null&&pt(t,e,67108864),Zo(e,67108864)}}var Mr=!0;function Sm(e,t,a,n){var l=y.T;y.T=null;var i=B.p;try{B.p=2,Jo(e,t,a,n)}finally{B.p=i,y.T=l}}function Dm(e,t,a,n){var l=y.T;y.T=null;var i=B.p;try{B.p=8,Jo(e,t,a,n)}finally{B.p=i,y.T=l}}function Jo(e,t,a,n){if(Mr){var l=Po(n);if(l===null)zo(e,t,n,Rr,a),td(e,n);else if(vm(l,e,t,a,n))n.stopPropagation();else if(td(e,n),t&4&&-1<pm.indexOf(e)){for(;l!==null;){var i=Gn(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=$a(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var h=1<<31-Tt(u);s.entanglements[1]|=h,u&=~h}la(i),(We&6)===0&&(rr=Ue()+500,ti(0))}}break;case 13:s=Ea(i,2),s!==null&&pt(s,i,2),cr(),Zo(i,2)}if(i=Po(n),i===null&&zo(e,t,n,Rr,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else zo(e,t,n,null,a)}}function Po(e){return e=au(e),$o(e)}var Rr=null;function $o(e){if(Rr=null,e=Ia(e),e!==null){var t=j(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=k(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Rr=e,null}function ed(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ht()){case Ze:return 2;case ct:return 8;case vt:case gl:return 32;case ml:return 268435456;default:return 32}default:return 32}}var Io=!1,qa=null,Wa=null,Ya=null,oi=new Map,ci=new Map,Ka=[],pm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function td(e,t){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":oi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(t.pointerId)}}function si(e,t,a,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Gn(t),t!==null&&Ih(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function vm(e,t,a,n,l){switch(t){case"focusin":return qa=si(qa,e,t,a,n,l),!0;case"dragenter":return Wa=si(Wa,e,t,a,n,l),!0;case"mouseover":return Ya=si(Ya,e,t,a,n,l),!0;case"pointerover":var i=l.pointerId;return oi.set(i,si(oi.get(i)||null,e,t,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,ci.set(i,si(ci.get(i)||null,e,t,a,n,l)),!0}return!1}function ad(e){var t=Ia(e.target);if(t!==null){var a=j(t);if(a!==null){if(t=a.tag,t===13){if(t=k(a),t!==null){e.blockedOn=t,yy(e.priority,function(){if(a.tag===13){var n=At(),l=Ea(a,n);l!==null&&pt(l,a,n),Zo(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Po(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);tu=n,a.target.dispatchEvent(n),tu=null}else return t=Gn(a),t!==null&&Ih(t),e.blockedOn=a,!1;t.shift()}return!0}function nd(e,t,a){Tr(e)&&a.delete(t)}function bm(){Io=!1,qa!==null&&Tr(qa)&&(qa=null),Wa!==null&&Tr(Wa)&&(Wa=null),Ya!==null&&Tr(Ya)&&(Ya=null),oi.forEach(nd),ci.forEach(nd)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,Io||(Io=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,bm)))}var Lr=null;function ld(e){Lr!==e&&(Lr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Lr===e&&(Lr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if($o(n||a)===null)continue;break}var i=Gn(a);i!==null&&(e.splice(t,3),t-=3,Fu(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function fi(e){function t(h){return wr(h,e)}qa!==null&&wr(qa,e),Wa!==null&&wr(Wa,e),Ya!==null&&wr(Ya,e),oi.forEach(t),ci.forEach(t);for(var a=0;a<Ka.length;a++){var n=Ka[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)ad(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],u=l[bt]||null;if(typeof i=="function")u||ld(a);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(l=i,u=i[bt]||null)s=u.formAction;else if($o(l)!==null)continue}else s=u.action;typeof s=="function"?a[n+1]=s:(a.splice(n,3),n-=3),ld(a)}}}function ec(e){this._internalRoot=e}Gr.prototype.render=ec.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=At();Ph(a,n,e,t,null,null)},Gr.prototype.unmount=ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&tl(),Ph(e.current,2,null,e,null,null),cr(),t[Ln]=null}};function Gr(e){this._internalRoot=e}Gr.prototype.unstable_scheduleHydration=function(e){if(e){var t=xc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ka.length&&t!==0&&t<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&ad(e)}};var id=o.version;if(id!=="19.0.0")throw Error(c(527,id,"19.0.0"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=T(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var Mm={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:y,findFiberByHostInstance:Ia,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Er.isDisabled&&Er.supportsFiber)try{Qt=Er.inject(Mm),dt=Er}catch{}}return di.createRoot=function(e,t){if(!S(e))throw Error(c(299));var a=!1,n="",l=Mf,i=Rf,u=Tf,s=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(s=t.unstable_transitionCallbacks)),t=Zh(e,1,!1,null,null,a,n,l,i,u,s,null),e[Ln]=t.current,Uo(e.nodeType===8?e.parentNode:e),new ec(t)},di.hydrateRoot=function(e,t,a){if(!S(e))throw Error(c(299));var n=!1,l="",i=Mf,u=Rf,s=Tf,h=null,m=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(h=a.unstable_transitionCallbacks),a.formState!==void 0&&(m=a.formState)),t=Zh(e,1,!0,t,a??null,n,l,i,u,s,h,m),t.context=Jh(null),a=t.current,n=At(),l=Oa(n),l.callback=null,Ba(a,l,n),t.current.lanes=n,Dl(t,n),la(t),e[Ln]=t.current,Uo(e),new Gr(t)},di.version="19.0.0",di}var gd;function Hm(){if(gd)return nc.exports;gd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),nc.exports=xm(),nc.exports}var Cm=Hm(),St=function(){return St=Object.assign||function(o){for(var f,c=1,S=arguments.length;c<S;c++){f=arguments[c];for(var M in f)Object.prototype.hasOwnProperty.call(f,M)&&(o[M]=f[M])}return o},St.apply(this,arguments)};function Ur(r,o,f){if(f||arguments.length===2)for(var c=0,S=o.length,M;c<S;c++)(M||!(c in o))&&(M||(M=Array.prototype.slice.call(o,0,c)),M[c]=o[c]);return r.concat(M||Array.prototype.slice.call(o))}var Fe="-ms-",Si="-moz-",_e="-webkit-",Cd="comm",qr="rule",vc="decl",Nm="@import",Nd="@keyframes",Om="@layer",Od=Math.abs,bc=String.fromCharCode,hc=Object.assign;function Bm(r,o){return ot(r,0)^45?(((o<<2^ot(r,0))<<2^ot(r,1))<<2^ot(r,2))<<2^ot(r,3):0}function Bd(r){return r.trim()}function Ra(r,o){return(r=o.exec(r))?r[0]:r}function ge(r,o,f){return r.replace(o,f)}function xr(r,o,f){return r.indexOf(o,f)}function ot(r,o){return r.charCodeAt(o)|0}function sl(r,o,f){return r.slice(o,f)}function ia(r){return r.length}function Ud(r){return r.length}function mi(r,o){return o.push(r),r}function Um(r,o){return r.map(o).join("")}function md(r,o){return r.filter(function(f){return!Ra(f,o)})}var Wr=1,fl=1,zd=0,Kt=0,tt=0,yl="";function Yr(r,o,f,c,S,M,_,V){return{value:r,root:o,parent:f,type:c,props:S,children:M,line:Wr,column:fl,length:_,return:"",siblings:V}}function Xa(r,o){return hc(Yr("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},o)}function ul(r){for(;r.root;)r=Xa(r.root,{children:[r]});mi(r,r.siblings)}function zm(){return tt}function km(){return tt=Kt>0?ot(yl,--Kt):0,fl--,tt===10&&(fl=1,Wr--),tt}function $t(){return tt=Kt<zd?ot(yl,Kt++):0,fl++,tt===10&&(fl=1,Wr++),tt}function Mn(){return ot(yl,Kt)}function Hr(){return Kt}function Kr(r,o){return sl(yl,r,o)}function dc(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vm(r){return Wr=fl=1,zd=ia(yl=r),Kt=0,[]}function Fm(r){return yl="",r}function uc(r){return Bd(Kr(Kt-1,yc(r===91?r+2:r===40?r+1:r)))}function jm(r){for(;(tt=Mn())&&tt<33;)$t();return dc(r)>2||dc(tt)>3?"":" "}function qm(r,o){for(;--o&&$t()&&!(tt<48||tt>102||tt>57&&tt<65||tt>70&&tt<97););return Kr(r,Hr()+(o<6&&Mn()==32&&$t()==32))}function yc(r){for(;$t();)switch(tt){case r:return Kt;case 34:case 39:r!==34&&r!==39&&yc(tt);break;case 40:r===41&&yc(r);break;case 92:$t();break}return Kt}function Wm(r,o){for(;$t()&&r+tt!==57;)if(r+tt===84&&Mn()===47)break;return"/*"+Kr(o,Kt-1)+"*"+bc(r===47?r:$t())}function Ym(r){for(;!dc(Mn());)$t();return Kr(r,Kt)}function Km(r){return Fm(Cr("",null,null,null,[""],r=Vm(r),0,[0],r))}function Cr(r,o,f,c,S,M,_,V,E){for(var D=0,C=0,X=_,J=0,K=0,ie=0,oe=1,ce=1,pe=1,he=0,de="",Re=S,te=M,ne=c,W=de;ce;)switch(ie=he,he=$t()){case 40:if(ie!=108&&ot(W,X-1)==58){xr(W+=ge(uc(he),"&","&\f"),"&\f",Od(D?V[D-1]:0))!=-1&&(pe=-1);break}case 34:case 39:case 91:W+=uc(he);break;case 9:case 10:case 13:case 32:W+=jm(ie);break;case 92:W+=qm(Hr()-1,7);continue;case 47:switch(Mn()){case 42:case 47:mi(Qm(Wm($t(),Hr()),o,f,E),E);break;default:W+="/"}break;case 123*oe:V[D++]=ia(W)*pe;case 125*oe:case 59:case 0:switch(he){case 0:case 125:ce=0;case 59+C:pe==-1&&(W=ge(W,/\f/g,"")),K>0&&ia(W)-X&&mi(K>32?Dd(W+";",c,f,X-1,E):Dd(ge(W," ","")+";",c,f,X-2,E),E);break;case 59:W+=";";default:if(mi(ne=Sd(W,o,f,D,C,S,V,de,Re=[],te=[],X,M),M),he===123)if(C===0)Cr(W,o,ne,ne,Re,M,X,V,te);else switch(J===99&&ot(W,3)===110?100:J){case 100:case 108:case 109:case 115:Cr(r,ne,ne,c&&mi(Sd(r,ne,ne,0,0,S,V,de,S,Re=[],X,te),te),S,te,X,V,c?Re:te);break;default:Cr(W,ne,ne,ne,[""],te,0,V,te)}}D=C=K=0,oe=pe=1,de=W="",X=_;break;case 58:X=1+ia(W),K=ie;default:if(oe<1){if(he==123)--oe;else if(he==125&&oe++==0&&km()==125)continue}switch(W+=bc(he),he*oe){case 38:pe=C>0?1:(W+="\f",-1);break;case 44:V[D++]=(ia(W)-1)*pe,pe=1;break;case 64:Mn()===45&&(W+=uc($t())),J=Mn(),C=X=ia(de=W+=Ym(Hr())),he++;break;case 45:ie===45&&ia(W)==2&&(oe=0)}}return M}function Sd(r,o,f,c,S,M,_,V,E,D,C,X){for(var J=S-1,K=S===0?M:[""],ie=Ud(K),oe=0,ce=0,pe=0;oe<c;++oe)for(var he=0,de=sl(r,J+1,J=Od(ce=_[oe])),Re=r;he<ie;++he)(Re=Bd(ce>0?K[he]+" "+de:ge(de,/&\f/g,K[he])))&&(E[pe++]=Re);return Yr(r,o,f,S===0?qr:V,E,D,C,X)}function Qm(r,o,f,c){return Yr(r,o,f,Cd,bc(zm()),sl(r,2,-2),0,c)}function Dd(r,o,f,c,S){return Yr(r,o,f,vc,sl(r,0,c),sl(r,c+1,-1),c,S)}function kd(r,o,f){switch(Bm(r,o)){case 5103:return _e+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return _e+r+r;case 4789:return Si+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return _e+r+Si+r+Fe+r+r;case 5936:switch(ot(r,o+11)){case 114:return _e+r+Fe+ge(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return _e+r+Fe+ge(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return _e+r+Fe+ge(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return _e+r+Fe+r+r;case 6165:return _e+r+Fe+"flex-"+r+r;case 5187:return _e+r+ge(r,/(\w+).+(:[^]+)/,_e+"box-$1$2"+Fe+"flex-$1$2")+r;case 5443:return _e+r+Fe+"flex-item-"+ge(r,/flex-|-self/g,"")+(Ra(r,/flex-|baseline/)?"":Fe+"grid-row-"+ge(r,/flex-|-self/g,""))+r;case 4675:return _e+r+Fe+"flex-line-pack"+ge(r,/align-content|flex-|-self/g,"")+r;case 5548:return _e+r+Fe+ge(r,"shrink","negative")+r;case 5292:return _e+r+Fe+ge(r,"basis","preferred-size")+r;case 6060:return _e+"box-"+ge(r,"-grow","")+_e+r+Fe+ge(r,"grow","positive")+r;case 4554:return _e+ge(r,/([^-])(transform)/g,"$1"+_e+"$2")+r;case 6187:return ge(ge(ge(r,/(zoom-|grab)/,_e+"$1"),/(image-set)/,_e+"$1"),r,"")+r;case 5495:case 3959:return ge(r,/(image-set\([^]*)/,_e+"$1$`$1");case 4968:return ge(ge(r,/(.+:)(flex-)?(.*)/,_e+"box-pack:$3"+Fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+_e+r+r;case 4200:if(!Ra(r,/flex-|baseline/))return Fe+"grid-column-align"+sl(r,o)+r;break;case 2592:case 3360:return Fe+ge(r,"template-","")+r;case 4384:case 3616:return f&&f.some(function(c,S){return o=S,Ra(c.props,/grid-\w+-end/)})?~xr(r+(f=f[o].value),"span",0)?r:Fe+ge(r,"-start","")+r+Fe+"grid-row-span:"+(~xr(f,"span",0)?Ra(f,/\d+/):+Ra(f,/\d+/)-+Ra(r,/\d+/))+";":Fe+ge(r,"-start","")+r;case 4896:case 4128:return f&&f.some(function(c){return Ra(c.props,/grid-\w+-start/)})?r:Fe+ge(ge(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return ge(r,/(.+)-inline(.+)/,_e+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ia(r)-1-o>6)switch(ot(r,o+1)){case 109:if(ot(r,o+4)!==45)break;case 102:return ge(r,/(.+:)(.+)-([^]+)/,"$1"+_e+"$2-$3$1"+Si+(ot(r,o+3)==108?"$3":"$2-$3"))+r;case 115:return~xr(r,"stretch",0)?kd(ge(r,"stretch","fill-available"),o,f)+r:r}break;case 5152:case 5920:return ge(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,S,M,_,V,E,D){return Fe+S+":"+M+D+(_?Fe+S+"-span:"+(V?E:+E-+M)+D:"")+r});case 4949:if(ot(r,o+6)===121)return ge(r,":",":"+_e)+r;break;case 6444:switch(ot(r,ot(r,14)===45?18:11)){case 120:return ge(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+_e+(ot(r,14)===45?"inline-":"")+"box$3$1"+_e+"$2$3$1"+Fe+"$2box$3")+r;case 100:return ge(r,":",":"+Fe)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ge(r,"scroll-","scroll-snap-")+r}return r}function zr(r,o){for(var f="",c=0;c<r.length;c++)f+=o(r[c],c,r,o)||"";return f}function Xm(r,o,f,c){switch(r.type){case Om:if(r.children.length)break;case Nm:case vc:return r.return=r.return||r.value;case Cd:return"";case Nd:return r.return=r.value+"{"+zr(r.children,c)+"}";case qr:if(!ia(r.value=r.props.join(",")))return""}return ia(f=zr(r.children,c))?r.return=r.value+"{"+f+"}":""}function Zm(r){var o=Ud(r);return function(f,c,S,M){for(var _="",V=0;V<o;V++)_+=r[V](f,c,S,M)||"";return _}}function Jm(r){return function(o){o.root||(o=o.return)&&r(o)}}function Pm(r,o,f,c){if(r.length>-1&&!r.return)switch(r.type){case vc:r.return=kd(r.value,r.length,f);return;case Nd:return zr([Xa(r,{value:ge(r.value,"@","@"+_e)})],c);case qr:if(r.length)return Um(f=r.props,function(S){switch(Ra(S,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ul(Xa(r,{props:[ge(S,/:(read-\w+)/,":"+Si+"$1")]})),ul(Xa(r,{props:[S]})),hc(r,{props:md(f,c)});break;case"::placeholder":ul(Xa(r,{props:[ge(S,/:(plac\w+)/,":"+_e+"input-$1")]})),ul(Xa(r,{props:[ge(S,/:(plac\w+)/,":"+Si+"$1")]})),ul(Xa(r,{props:[ge(S,/:(plac\w+)/,Fe+"input-$1")]})),ul(Xa(r,{props:[S]})),hc(r,{props:md(f,c)});break}return""})}}var $m={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_t={},hl=typeof process<"u"&&_t!==void 0&&(_t.REACT_APP_SC_ATTR||_t.SC_ATTR)||"data-styled",Vd="active",Fd="data-styled-version",Qr="6.1.15",Mc=`/*!sc*/
`,kr=typeof window<"u"&&"HTMLElement"in window,Im=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_t!==void 0&&_t.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_t.REACT_APP_SC_DISABLE_SPEEDY!==""?_t.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_t.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_t!==void 0&&_t.SC_DISABLE_SPEEDY!==void 0&&_t.SC_DISABLE_SPEEDY!==""&&_t.SC_DISABLE_SPEEDY!=="false"&&_t.SC_DISABLE_SPEEDY),Xr=Object.freeze([]),dl=Object.freeze({});function e1(r,o,f){return f===void 0&&(f=dl),r.theme!==f.theme&&r.theme||o||f.theme}var jd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),t1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,a1=/(^-|-$)/g;function pd(r){return r.replace(t1,"-").replace(a1,"")}var n1=/(a)(d)/gi,Ar=52,vd=function(r){return String.fromCharCode(r+(r>25?39:97))};function gc(r){var o,f="";for(o=Math.abs(r);o>Ar;o=o/Ar|0)f=vd(o%Ar)+f;return(vd(o%Ar)+f).replace(n1,"$1-$2")}var oc,qd=5381,cl=function(r,o){for(var f=o.length;f;)r=33*r^o.charCodeAt(--f);return r},Wd=function(r){return cl(qd,r)};function l1(r){return gc(Wd(r)>>>0)}function i1(r){return r.displayName||r.name||"Component"}function cc(r){return typeof r=="string"&&!0}var Yd=typeof Symbol=="function"&&Symbol.for,Kd=Yd?Symbol.for("react.memo"):60115,r1=Yd?Symbol.for("react.forward_ref"):60112,u1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c1=((oc={})[r1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},oc[Kd]=Qd,oc);function bd(r){return("type"in(o=r)&&o.type.$$typeof)===Kd?Qd:"$$typeof"in r?c1[r.$$typeof]:u1;var o}var s1=Object.defineProperty,f1=Object.getOwnPropertyNames,Md=Object.getOwnPropertySymbols,h1=Object.getOwnPropertyDescriptor,d1=Object.getPrototypeOf,Rd=Object.prototype;function Xd(r,o,f){if(typeof o!="string"){if(Rd){var c=d1(o);c&&c!==Rd&&Xd(r,c,f)}var S=f1(o);Md&&(S=S.concat(Md(o)));for(var M=bd(r),_=bd(o),V=0;V<S.length;++V){var E=S[V];if(!(E in o1||f&&f[E]||_&&E in _||M&&E in M)){var D=h1(o,E);try{s1(r,E,D)}catch{}}}}return r}function Tn(r){return typeof r=="function"}function Rc(r){return typeof r=="object"&&"styledComponentId"in r}function bn(r,o){return r&&o?"".concat(r," ").concat(o):r||o||""}function Td(r,o){if(r.length===0)return"";for(var f=r[0],c=1;c<r.length;c++)f+=r[c];return f}function Di(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function mc(r,o,f){if(f===void 0&&(f=!1),!f&&!Di(r)&&!Array.isArray(r))return o;if(Array.isArray(o))for(var c=0;c<o.length;c++)r[c]=mc(r[c],o[c]);else if(Di(o))for(var c in o)r[c]=mc(r[c],o[c]);return r}function Tc(r,o){Object.defineProperty(r,"toString",{value:o})}function wn(r){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var y1=function(){function r(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return r.prototype.indexOfGroup=function(o){for(var f=0,c=0;c<o;c++)f+=this.groupSizes[c];return f},r.prototype.insertRules=function(o,f){if(o>=this.groupSizes.length){for(var c=this.groupSizes,S=c.length,M=S;o>=M;)if((M<<=1)<0)throw wn(16,"".concat(o));this.groupSizes=new Uint32Array(M),this.groupSizes.set(c),this.length=M;for(var _=S;_<M;_++)this.groupSizes[_]=0}for(var V=this.indexOfGroup(o+1),E=(_=0,f.length);_<E;_++)this.tag.insertRule(V,f[_])&&(this.groupSizes[o]++,V++)},r.prototype.clearGroup=function(o){if(o<this.length){var f=this.groupSizes[o],c=this.indexOfGroup(o),S=c+f;this.groupSizes[o]=0;for(var M=c;M<S;M++)this.tag.deleteRule(c)}},r.prototype.getGroup=function(o){var f="";if(o>=this.length||this.groupSizes[o]===0)return f;for(var c=this.groupSizes[o],S=this.indexOfGroup(o),M=S+c,_=S;_<M;_++)f+="".concat(this.tag.getRule(_)).concat(Mc);return f},r}(),Nr=new Map,Vr=new Map,Or=1,_r=function(r){if(Nr.has(r))return Nr.get(r);for(;Vr.has(Or);)Or++;var o=Or++;return Nr.set(r,o),Vr.set(o,r),o},g1=function(r,o){Or=o+1,Nr.set(r,o),Vr.set(o,r)},m1="style[".concat(hl,"][").concat(Fd,'="').concat(Qr,'"]'),S1=new RegExp("^".concat(hl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),D1=function(r,o,f){for(var c,S=f.split(","),M=0,_=S.length;M<_;M++)(c=S[M])&&r.registerName(o,c)},p1=function(r,o){for(var f,c=((f=o.textContent)!==null&&f!==void 0?f:"").split(Mc),S=[],M=0,_=c.length;M<_;M++){var V=c[M].trim();if(V){var E=V.match(S1);if(E){var D=0|parseInt(E[1],10),C=E[2];D!==0&&(g1(C,D),D1(r,C,E[3]),r.getTag().insertRules(D,S)),S.length=0}else S.push(V)}}},wd=function(r){for(var o=document.querySelectorAll(m1),f=0,c=o.length;f<c;f++){var S=o[f];S&&S.getAttribute(hl)!==Vd&&(p1(r,S),S.parentNode&&S.parentNode.removeChild(S))}};function v1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Zd=function(r){var o=document.head,f=r||o,c=document.createElement("style"),S=function(V){var E=Array.from(V.querySelectorAll("style[".concat(hl,"]")));return E[E.length-1]}(f),M=S!==void 0?S.nextSibling:null;c.setAttribute(hl,Vd),c.setAttribute(Fd,Qr);var _=v1();return _&&c.setAttribute("nonce",_),f.insertBefore(c,M),c},b1=function(){function r(o){this.element=Zd(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(f){if(f.sheet)return f.sheet;for(var c=document.styleSheets,S=0,M=c.length;S<M;S++){var _=c[S];if(_.ownerNode===f)return _}throw wn(17)}(this.element),this.length=0}return r.prototype.insertRule=function(o,f){try{return this.sheet.insertRule(f,o),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},r.prototype.getRule=function(o){var f=this.sheet.cssRules[o];return f&&f.cssText?f.cssText:""},r}(),M1=function(){function r(o){this.element=Zd(o),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(o,f){if(o<=this.length&&o>=0){var c=document.createTextNode(f);return this.element.insertBefore(c,this.nodes[o]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},r.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},r}(),R1=function(){function r(o){this.rules=[],this.length=0}return r.prototype.insertRule=function(o,f){return o<=this.length&&(this.rules.splice(o,0,f),this.length++,!0)},r.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},r.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},r}(),Ld=kr,T1={isServer:!kr,useCSSOMInjection:!Im},Jd=function(){function r(o,f,c){o===void 0&&(o=dl),f===void 0&&(f={});var S=this;this.options=St(St({},T1),o),this.gs=f,this.names=new Map(c),this.server=!!o.isServer,!this.server&&kr&&Ld&&(Ld=!1,wd(this)),Tc(this,function(){return function(M){for(var _=M.getTag(),V=_.length,E="",D=function(X){var J=function(pe){return Vr.get(pe)}(X);if(J===void 0)return"continue";var K=M.names.get(J),ie=_.getGroup(X);if(K===void 0||!K.size||ie.length===0)return"continue";var oe="".concat(hl,".g").concat(X,'[id="').concat(J,'"]'),ce="";K!==void 0&&K.forEach(function(pe){pe.length>0&&(ce+="".concat(pe,","))}),E+="".concat(ie).concat(oe,'{content:"').concat(ce,'"}').concat(Mc)},C=0;C<V;C++)D(C);return E}(S)})}return r.registerId=function(o){return _r(o)},r.prototype.rehydrate=function(){!this.server&&kr&&wd(this)},r.prototype.reconstructWithOptions=function(o,f){return f===void 0&&(f=!0),new r(St(St({},this.options),o),this.gs,f&&this.names||void 0)},r.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(o=function(f){var c=f.useCSSOMInjection,S=f.target;return f.isServer?new R1(S):c?new b1(S):new M1(S)}(this.options),new y1(o)));var o},r.prototype.hasNameForId=function(o,f){return this.names.has(o)&&this.names.get(o).has(f)},r.prototype.registerName=function(o,f){if(_r(o),this.names.has(o))this.names.get(o).add(f);else{var c=new Set;c.add(f),this.names.set(o,c)}},r.prototype.insertRules=function(o,f,c){this.registerName(o,f),this.getTag().insertRules(_r(o),c)},r.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},r.prototype.clearRules=function(o){this.getTag().clearGroup(_r(o)),this.clearNames(o)},r.prototype.clearTag=function(){this.tag=void 0},r}(),w1=/&/g,L1=/^\s*\/\/.*$/gm;function Pd(r,o){return r.map(function(f){return f.type==="rule"&&(f.value="".concat(o," ").concat(f.value),f.value=f.value.replaceAll(",",",".concat(o," ")),f.props=f.props.map(function(c){return"".concat(o," ").concat(c)})),Array.isArray(f.children)&&f.type!=="@keyframes"&&(f.children=Pd(f.children,o)),f})}function G1(r){var o,f,c,S=dl,M=S.options,_=M===void 0?dl:M,V=S.plugins,E=V===void 0?Xr:V,D=function(J,K,ie){return ie.startsWith(f)&&ie.endsWith(f)&&ie.replaceAll(f,"").length>0?".".concat(o):J},C=E.slice();C.push(function(J){J.type===qr&&J.value.includes("&")&&(J.props[0]=J.props[0].replace(w1,f).replace(c,D))}),_.prefix&&C.push(Pm),C.push(Xm);var X=function(J,K,ie,oe){K===void 0&&(K=""),ie===void 0&&(ie=""),oe===void 0&&(oe="&"),o=oe,f=K,c=new RegExp("\\".concat(f,"\\b"),"g");var ce=J.replace(L1,""),pe=Km(ie||K?"".concat(ie," ").concat(K," { ").concat(ce," }"):ce);_.namespace&&(pe=Pd(pe,_.namespace));var he=[];return zr(pe,Zm(C.concat(Jm(function(de){return he.push(de)})))),he};return X.hash=E.length?E.reduce(function(J,K){return K.name||wn(15),cl(J,K.name)},qd).toString():"",X}var E1=new Jd,Sc=G1(),$d=Ja.createContext({shouldForwardProp:void 0,styleSheet:E1,stylis:Sc});$d.Consumer;Ja.createContext(void 0);function Gd(){return Xe.useContext($d)}var A1=function(){function r(o,f){var c=this;this.inject=function(S,M){M===void 0&&(M=Sc);var _=c.name+M.hash;S.hasNameForId(c.id,_)||S.insertRules(c.id,_,M(c.rules,_,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=f,Tc(this,function(){throw wn(12,String(c.name))})}return r.prototype.getName=function(o){return o===void 0&&(o=Sc),this.name+o.hash},r}(),_1=function(r){return r>="A"&&r<="Z"};function Ed(r){for(var o="",f=0;f<r.length;f++){var c=r[f];if(f===1&&c==="-"&&r[0]==="-")return r;_1(c)?o+="-"+c.toLowerCase():o+=c}return o.startsWith("ms-")?"-"+o:o}var Id=function(r){return r==null||r===!1||r===""},ey=function(r){var o,f,c=[];for(var S in r){var M=r[S];r.hasOwnProperty(S)&&!Id(M)&&(Array.isArray(M)&&M.isCss||Tn(M)?c.push("".concat(Ed(S),":"),M,";"):Di(M)?c.push.apply(c,Ur(Ur(["".concat(S," {")],ey(M),!1),["}"],!1)):c.push("".concat(Ed(S),": ").concat((o=S,(f=M)==null||typeof f=="boolean"||f===""?"":typeof f!="number"||f===0||o in $m||o.startsWith("--")?String(f).trim():"".concat(f,"px")),";")))}return c};function Rn(r,o,f,c){if(Id(r))return[];if(Rc(r))return[".".concat(r.styledComponentId)];if(Tn(r)){if(!Tn(M=r)||M.prototype&&M.prototype.isReactComponent||!o)return[r];var S=r(o);return Rn(S,o,f,c)}var M;return r instanceof A1?f?(r.inject(f,c),[r.getName(c)]):[r]:Di(r)?ey(r):Array.isArray(r)?Array.prototype.concat.apply(Xr,r.map(function(_){return Rn(_,o,f,c)})):[r.toString()]}function x1(r){for(var o=0;o<r.length;o+=1){var f=r[o];if(Tn(f)&&!Rc(f))return!1}return!0}var H1=Wd(Qr),C1=function(){function r(o,f,c){this.rules=o,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&x1(o),this.componentId=f,this.baseHash=cl(H1,f),this.baseStyle=c,Jd.registerId(f)}return r.prototype.generateAndInjectStyles=function(o,f,c){var S=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,f,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&f.hasNameForId(this.componentId,this.staticRulesId))S=bn(S,this.staticRulesId);else{var M=Td(Rn(this.rules,o,f,c)),_=gc(cl(this.baseHash,M)>>>0);if(!f.hasNameForId(this.componentId,_)){var V=c(M,".".concat(_),void 0,this.componentId);f.insertRules(this.componentId,_,V)}S=bn(S,_),this.staticRulesId=_}else{for(var E=cl(this.baseHash,c.hash),D="",C=0;C<this.rules.length;C++){var X=this.rules[C];if(typeof X=="string")D+=X;else if(X){var J=Td(Rn(X,o,f,c));E=cl(E,J+C),D+=J}}if(D){var K=gc(E>>>0);f.hasNameForId(this.componentId,K)||f.insertRules(this.componentId,K,c(D,".".concat(K),void 0,this.componentId)),S=bn(S,K)}}return S},r}(),Fr=Ja.createContext(void 0);Fr.Consumer;function N1(r){var o=Ja.useContext(Fr),f=Xe.useMemo(function(){return function(c,S){if(!c)throw wn(14);if(Tn(c)){var M=c(S);return M}if(Array.isArray(c)||typeof c!="object")throw wn(8);return S?St(St({},S),c):c}(r.theme,o)},[r.theme,o]);return r.children?Ja.createElement(Fr.Provider,{value:f},r.children):null}var sc={};function O1(r,o,f){var c=Rc(r),S=r,M=!cc(r),_=o.attrs,V=_===void 0?Xr:_,E=o.componentId,D=E===void 0?function(Re,te){var ne=typeof Re!="string"?"sc":pd(Re);sc[ne]=(sc[ne]||0)+1;var W="".concat(ne,"-").concat(l1(Qr+ne+sc[ne]));return te?"".concat(te,"-").concat(W):W}(o.displayName,o.parentComponentId):E,C=o.displayName,X=C===void 0?function(Re){return cc(Re)?"styled.".concat(Re):"Styled(".concat(i1(Re),")")}(r):C,J=o.displayName&&o.componentId?"".concat(pd(o.displayName),"-").concat(o.componentId):o.componentId||D,K=c&&S.attrs?S.attrs.concat(V).filter(Boolean):V,ie=o.shouldForwardProp;if(c&&S.shouldForwardProp){var oe=S.shouldForwardProp;if(o.shouldForwardProp){var ce=o.shouldForwardProp;ie=function(Re,te){return oe(Re,te)&&ce(Re,te)}}else ie=oe}var pe=new C1(f,J,c?S.componentStyle:void 0);function he(Re,te){return function(ne,W,p){var y=ne.attrs,w=ne.componentStyle,F=ne.defaultProps,q=ne.foldedComponentIds,re=ne.styledComponentId,Ae=ne.target,xe=Ja.useContext(Fr),U=Gd(),z=ne.shouldForwardProp||U.shouldForwardProp,j=e1(W,xe,F)||dl,k=function(P,Z,we){for(var Y,$=St(St({},Z),{className:void 0,theme:we}),le=0;le<P.length;le+=1){var ae=Tn(Y=P[le])?Y($):Y;for(var me in ae)$[me]=me==="className"?bn($[me],ae[me]):me==="style"?St(St({},$[me]),ae[me]):ae[me]}return Z.className&&($.className=bn($.className,Z.className)),$}(y,W,j),d=k.as||Ae,T={};for(var N in k)k[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&k.theme===j||(N==="forwardedAs"?T.as=k.forwardedAs:z&&!z(N,d)||(T[N]=k[N]));var x=function(P,Z){var we=Gd(),Y=P.generateAndInjectStyles(Z,we.styleSheet,we.stylis);return Y}(w,k),B=bn(q,re);return x&&(B+=" "+x),k.className&&(B+=" "+k.className),T[cc(d)&&!jd.has(d)?"class":"className"]=B,p&&(T.ref=p),Xe.createElement(d,T)}(de,Re,te)}he.displayName=X;var de=Ja.forwardRef(he);return de.attrs=K,de.componentStyle=pe,de.displayName=X,de.shouldForwardProp=ie,de.foldedComponentIds=c?bn(S.foldedComponentIds,S.styledComponentId):"",de.styledComponentId=J,de.target=c?S.target:r,Object.defineProperty(de,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Re){this._foldedDefaultProps=c?function(te){for(var ne=[],W=1;W<arguments.length;W++)ne[W-1]=arguments[W];for(var p=0,y=ne;p<y.length;p++)mc(te,y[p],!0);return te}({},S.defaultProps,Re):Re}}),Tc(de,function(){return".".concat(de.styledComponentId)}),M&&Xd(de,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),de}function Ad(r,o){for(var f=[r[0]],c=0,S=o.length;c<S;c+=1)f.push(o[c],r[c+1]);return f}var _d=function(r){return Object.assign(r,{isCss:!0})};function B1(r){for(var o=[],f=1;f<arguments.length;f++)o[f-1]=arguments[f];if(Tn(r)||Di(r))return _d(Rn(Ad(Xr,Ur([r],o,!0))));var c=r;return o.length===0&&c.length===1&&typeof c[0]=="string"?Rn(c):_d(Rn(Ad(c,o)))}function Dc(r,o,f){if(f===void 0&&(f=dl),!o)throw wn(1,o);var c=function(S){for(var M=[],_=1;_<arguments.length;_++)M[_-1]=arguments[_];return r(o,f,B1.apply(void 0,Ur([S],M,!1)))};return c.attrs=function(S){return Dc(r,o,St(St({},f),{attrs:Array.prototype.concat(f.attrs,S).filter(Boolean)}))},c.withConfig=function(S){return Dc(r,o,St(St({},f),S))},c}var ty=function(r){return Dc(O1,r)},wc=ty;jd.forEach(function(r){wc[r]=ty(r)});const U1=`Name,Rarity,Type,Attack Power,Damage Type,Base Stats,Attributes,Dropped By,Locations
Iron Breaker,2: Rare,Axe_2H,"{19.5, 129.5}",Physical,"- Might {3, 17}
   - Vitality {3, 17}",,- Global Loot,
Iron Greatsword,1: Uncommon,Sword_2H,"{17.5, 113.5}",Physical,"- Might {3, 15}
   - Vitality {3, 15}",,- Global Loot,
Iron Longsword,1: Uncommon,Sword_1H,"{7.5, 45.5}",Physical,"- Might {3, 15}
   - Vitality {3, 15}",,- Global Loot,
Iron Mace,1: Uncommon,Mace_1H,"{8.5, 50.5}",Physical,"- Vitality {3, 15}",,- Global Loot,
Iron Mallet,1: Uncommon,Mace_2H,"{19.5, 124.5}",Physical,"- Vitality {4, 23}",,- Global Loot,
Iron Sabre,1: Uncommon,Sword_1H,"{8.5, 52.5}",Physical,"- Dexterity {2, 8}
   - Vitality {2, 8}",,- Global Loot,
Iron Spear,2: Rare,Polearm,"{20.0, 135.5}",Physical,"- Might {3, 17}
   - Vitality {3, 17}",,- Global Loot,
Iron Sword,1: Uncommon,Sword_1H,"{8.5, 52.5}",Physical,"- Might {2, 8}
   - Vitality {2, 8}",,- Global Loot,
Silver-Edged Axe,2: Rare,Axe_1H,"{9.5, 62.5}",Physical,,,- Global Loot,
Copper Scepter,1: Uncommon,Wand,"{5.5, 30.5}",Lightning,"- Vitality {2, 8}
   - Intelligence {2, 8}",,- Global Loot,
Beatin' stick,0: Common,Mace_1H,"{6.5, 41.5}",Physical,,,- Global Loot,
Bent Rod,0: Common,Mace_1H,"{6.5, 35.5}",Physical,,,- Global Loot,
Boot Blade,0: Common,Sword_1H,"{7.5, 43.5}",Physical,"- Dexterity {2, 14}",,- Global Loot,
Broken Blade,0: Common,Sword_1H,"{6.5, 41.5}",Physical,,,- Global Loot,
Broken Sword,0: Common,Sword_1H,"{6.5, 41.5}",Physical,,,- Global Loot,
Fishing Spear,0: Common,Polearm,"{15.5, 102.5}",Physical,"- Reflex {1, 7}",,- Global Loot,
Fork,0: Common,Polearm,"{15.5, 102.5}",Physical,"- Dexterity {4, 28}",,- Global Loot,
Goblin Shortsword,0: Common,Sword_1H,"{6.5, 41.5}",Physical,"- Dexterity {2, 14}",,- Global Loot,
Kitchen Knife,0: Common,Sword_1H,"{6.5, 37.5}",Physical,"- Dexterity {2, 14}",,- Global Loot,
Musket,0: Common,Gun_2H,"{16.5, 107.5}",Physical,"- Might {2, 14}",,- Global Loot,
Peashooter,0: Common,Gun_1H,"{4.5, 28.5}",Physical,"- Dexterity {2, 14}",,- Global Loot,
Primitive Spear,0: Common,Polearm,"{13.5, 87.5}",Physical,"- Dexterity {3, 21}",,- Global Loot,
Sharpened Stick,0: Common,Polearm,"{14.5, 92.5}",Physical,"- Might {2, 9}",,- Global Loot,
Shortbow,0: Common,Bow,"{15.5, 98.5}",Physical,"- Might {2, 14}
   - Dexterity {1, 7}",,- Global Loot,
Shortsword,0: Common,Sword_1H,"{6.5, 41.5}",Physical,"- Might {1, 5}
   - Dexterity {1, 5}",,- Global Loot,
Spiked Axe,0: Common,Axe_1H,"{6.5, 41.5}",Physical,"- Reflex {1, 7}",,- Global Loot,
Spiked Club,0: Common,Mace_1H,"{7.5, 45.5}",Physical,"- Might {2, 9}",,- Global Loot,
Spiked Rolling Pin,0: Common,Mace_1H,"{6.5, 41.5}",Physical,"- Intelligence {2, 9}",,- Global Loot,
Staff,0: Common,Staff,"{10.5, 68.5}",Fire,"- Might {2, 14}
   - Intelligence {2, 14}",,- Global Loot,
Stone Axe,0: Common,Axe_1H,"{6.5, 39.5}",Physical,"- Vitality {2, 9}",,- Global Loot,
Stone Dagger,0: Common,Sword_1H,"{6.5, 39.5}",Physical,"- Dexterity {2, 14}",,- Global Loot,
Stone Hammer,0: Common,Mace_1H,"{6.5, 41.5}",Physical,,,- Global Loot,
Two-Handed Axe,0: Common,Axe_2H,"{17.5, 113.5}",Physical,"- Vitality {3, 21}",,- Global Loot,
Walking Stick,0: Common,Staff,"{10.5, 68.5}",Fire,"- Vitality {1, 7}
   - Intelligence {3, 21}",,- Global Loot,
Wand,0: Common,Wand,"{4.5, 28.5}",Fire,"- Might {2, 9}
   - Intelligence {2, 9}",,- Global Loot,
Wooden Mallet,0: Common,Mace_2H,"{17.5, 113.5}",Physical,,,- Global Loot,
Boarding Axe,1: Uncommon,Axe_1H,"{7.5, 48.5}",Physical,"- Might {3, 15}",,- Global Loot,
Bone Shiv,1: Uncommon,Sword_1H,"{7.5, 43.5}",Shadow,"- Dexterity {3, 15}",,- Global Loot,
Bowie Knife,1: Uncommon,Sword_1H,"{8.5, 54.5}",Physical,,,- Global Loot,
Brass Knuckles,1: Uncommon,FistWeapon,"{7.5, 45.5}",Physical,"- Might {2, 8}
   - Dexterity {2, 8}",,- Global Loot,
Broadsword,1: Uncommon,Sword_1H,"{8.5, 50.5}",Physical,"- Might {2, 8}
   - Vitality {2, 8}",,- Global Loot,
Concealed Pistol,1: Uncommon,Gun_1H,"{6.5, 38.5}",Physical,"- Dexterity {3, 15}",,- Global Loot,
Copper Knuckles,1: Uncommon,FistWeapon,"{7.5, 45.5}",Physical,"- Dexterity {2, 8}
   - Reflex {2, 8}",,- Global Loot,
Cutlass,1: Uncommon,Sword_1H,"{7.5, 45.5}",Physical,"- Might {2, 8}
   - Dexterity {2, 8}",,- Global Loot,
Femur,1: Uncommon,Wand,"{4.5, 21.5}",Shadow,"- Might {2, 8}","- Summon Damage {1.5,7.5}%",- Global Loot,
Flintlock Pistol,1: Uncommon,Gun_1H,"{6.5, 38.5}",Physical,"- Might {2, 8}
   - Dexterity {2, 8}",,- Global Loot,
Forkaxe,1: Uncommon,Polearm,"{17.5, 113.5}",Physical,"- Dexterity {3, 15}
   - Vitality {3, 15}",,- Global Loot,
Gemstone Baton,1: Uncommon,Staff,"{11.5, 75.5}",Cold,"- Reflex {7, 45}",,- Global Loot,
Gemstone Cane,1: Uncommon,Staff,"{11.5, 75.5}",Cold,"- Vitality {3, 15}
   - Intelligence {3, 15}
   - Reflex {3, 15}",,- Global Loot,
Gemstone Ritual Staff,1: Uncommon,Staff,"{11.5, 75.5}",Lightning,"- Might {3, 15}
   - Intelligence {3, 15}","- Summon Damage {2,10}%
   - Summon Health {2,10}%",- Global Loot,
Gemstone Shillelagh,1: Uncommon,Staff,"{11.5, 75.5}",Fire,"- Might {7, 45}",,- Global Loot,
Gemstone Staff,1: Uncommon,Staff,"{11.5, 75.5}",Lightning,"- Intelligence {7, 45}",,- Global Loot,
Gemstone Wand,1: Uncommon,Wand,"{5.5, 30.5}",Fire,"- Might {4, 23}",,- Global Loot,
Gemstone Wand Rod,1: Uncommon,Wand,"{5.5, 30.5}",Lightning,"- Intelligence {4, 23}",,- Global Loot,
Gemstone Wand Sprig,1: Uncommon,Wand,"{5.5, 30.5}",Cold,"- Reflex {4, 23}",,- Global Loot,
Glaive,1: Uncommon,Polearm,"{19.5, 124.5}",Physical,"- Might {4, 23}
   - Dexterity {2, 8}",,- Global Loot,
Goblin Club,1: Uncommon,Mace_1H,"{7.5, 48.5}",Physical,"- Might {3, 15}",,- Global Loot,
Goblin Matchete,1: Uncommon,Sword_1H,"{8.5, 54.5}",Physical,,,- Global Loot,
Goblin Spear,1: Uncommon,Polearm,"{17.5, 113.5}",Physical,"- Might {3, 15}
   - Dexterity {3, 15}",,- Global Loot,
Guard's Spear,1: Uncommon,Polearm,"{17.5, 113.5}",Physical,"- Vitality {5, 30}",,- Global Loot,
Halberd,1: Uncommon,Polearm,"{19.5, 124.5}",Physical,"- Might {4, 23}
   - Vitality {2, 8}",,- Global Loot,
Half-Halberd,1: Uncommon,Polearm,"{17.5, 113.5}",Physical,"- Might {5, 30}",,- Global Loot,
Hand Axe,1: Uncommon,Axe_1H,"{6.5, 41.5}",Physical,"- Might {2, 9}
   - Dexterity {2, 9}",,- Global Loot,
Harpoon,1: Uncommon,Polearm,"{17.5, 113.5}",Physical,"- Dexterity {5, 30}",,- Global Loot,
Hatchet,1: Uncommon,Axe_1H,"{7.5, 45.5}",Physical,"- Might {2, 8}
   - Vitality {2, 8}",,- Global Loot,
Hunting Knife,1: Uncommon,Sword_1H,"{7.5, 45.5}",Physical,"- Dexterity {3, 15}",,- Global Loot,
Kunai,1: Uncommon,Sword_1H,"{8.5, 50.5}",Physical,"- Dexterity {3, 15}",,- Global Loot,
Longbow,1: Uncommon,Bow,"{14.5, 95.5}",Physical,"- Might {3, 15}
   - Dexterity {3, 15}",,- Global Loot,
Longsword,1: Uncommon,Sword_1H,"{7.5, 48.5}",Physical,"- Might {3, 15}",,- Global Loot,
Mace,1: Uncommon,Mace_1H,"{6.5, 36.5}",Physical,"- Might {2, 8}","- Return Damage Physical {2, 26}",- Global Loot,
Musket Pistol,1: Uncommon,Gun_1H,"{6.5, 38.5}",Physical,"- Might {2, 8}
   - Dexterity {2, 8}",,- Global Loot,
Musketoon,1: Uncommon,Gun_2H,"{14.5, 90.5}",Physical,"- Might {3, 15}
   - Dexterity {2, 8}
   - Vitality {2, 8}",,- Global Loot,
Mystic Blade,1: Uncommon,Sword_1H,"{6.5, 36.5}",Physical,"- Intelligence {3, 15}
   - Reflex {2, 8}",,- Global Loot,
Pike,1: Uncommon,Polearm,"{19.5, 124.5}",Physical,"- Might {3, 15}
   - Dexterity {2, 8}
   - Vitality {2, 8}",,- Global Loot,
Pirate's Cutlass,1: Uncommon,Sword_1H,"{8.5, 50.5}",Physical,"- Dexterity {3, 15}",,- Global Loot,
Poleaxe,1: Uncommon,Polearm,"{17.5, 109.5}",Physical,"- Might {2, 8}
   - Dexterity {2, 8}
   - Vitality {3, 15}",,- Global Loot,
Raider Axe,1: Uncommon,Axe_2H,"{21.5, 137.5}",Physical,,,- Global Loot,
Ritual Blade,1: Uncommon,Sword_1H,"{6.5, 39.5}",Physical,"- Might {2, 8}
   - Vitality {3, 15}
   - Intelligence {3, 15}",,- Global Loot,
Sabre,1: Uncommon,Sword_1H,"{8.5, 51.5}",Physical,"- Vitality {2, 8}
   - Reflex {2, 8}",,- Global Loot,
Sand Sultan Simitar,1: Uncommon,Sword_1H,"{7.5, 45.5}",Physical,"- Dexterity {2, 8}
   - Reflex {2, 8}",,- Global Loot,
Scimitar,1: Uncommon,Sword_1H,"{6.5, 41.5}",Physical,"- Vitality {2, 8}
   - Reflex {2, 8}",,- Global Loot,
Shovel,1: Uncommon,Polearm,"{20.0, 135.5}",Cold,,,- Grave Digger,"- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Snub Nose Musket,1: Uncommon,Gun_2H,"{15.5, 101.5}",Physical,"- Might {3, 15}
   - Vitality {3, 15}",,- Global Loot,
Spear,1: Uncommon,Polearm,"{16.5, 107.5}",Physical,"- Dexterity {3, 15}",,- Global Loot,
Spiked Mace,1: Uncommon,Mace_1H,"{6.5, 36.5}",Physical,"- Vitality {2, 8}","- Return Damage Physical {2, 26}",- Global Loot,
Steel Knuckles,1: Uncommon,FistWeapon,"{8.5, 54.5}",Physical,"- Might {2, 8}",,- Global Loot,
Straight Sword,1: Uncommon,Sword_1H,"{9.5, 57.5}",Physical,,,- Global Loot,
Viking Axe,1: Uncommon,Axe_1H,"{8.5, 52.5}",Physical,"- Might {3, 15}",,- Global Loot,
Viking Hammer,1: Uncommon,Mace_1H,"{8.5, 52.5}",Physical,"- Might {2, 8}
   - Vitality {2, 8}",,- Global Loot,
Viking Warhammer,1: Uncommon,Mace_2H,"{18.5, 118.5}",Physical,"- Might {3, 15}
   - Vitality {2, 8}
   - Reflex {2, 8}",,- Global Loot,
Warhammer,1: Uncommon,Mace_1H,"{6.5, 41.5}",Physical,"- Might {2, 8}
   - Vitality {2, 8}
   - Reflex {2, 8}",,- Global Loot,
Battle Hammer,2: Rare,Mace_1H,"{8.5, 49.5}",Physical,"- Might {3, 17}",,- Global Loot,
Blade Fist,2: Rare,FistWeapon,"{8.5, 49.5}",Physical,"- Might {1, 7}
   - Dexterity {1, 7}
   - Reflex {1, 7}",,- Ronin,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Blood Runed Cleaver,2: Rare,Axe_1H,"{10.5, 64.5}",Physical,,- % Life Steal 3,- The Baron,- CastleGloom Day
Bloodletter,2: Rare,Sword_1H,"{8.5, 54.5}",Physical,,- % Life Steal 3,"- Samare the Vampire (Event)
   - The Duke
   - Avatar of Xotec
   - Medusa","- WaterTempleRuins Night
   - EmeraldJungle Day
   - CastleGloom Day
   - WaterTempleRuins Day
   - EmeraldJungle Night"
Blunderbuss,2: Rare,Gun_2H,"{16.5, 108.5}",Physical,"- Might {4, 25}",,- The Ember King,- Emberlands Day
Bone Shard,2: Rare,Wand,"{5.5, 33.5}",Shadow,"- Vitality {2, 9}
   - Intelligence {2, 9}","- Summon Damage {2,10}%
   - Summon Limit 1","- Dark Cultist Conjuror
   - The Bishop (Event)
   - The Butcher","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Captain's Sidearm,2: Rare,Gun_1H,"{7.5, 45.5}",Physical,"- Reflex {3, 17}","- Dodge Counter Damage {5,25}%","- Admiral Blackbeard
   - Captain of the Emerald Eel
   - Captain of the Ruby Rum
   - Captain of the Sapphire Sea","- WaterTempleRuins Night
   - WaterTempleRuins Day"
Ceremonial Spear,2: Rare,Polearm,"{21.5, 141.5}",Physical,"- Dexterity {4, 25}",,- Global Loot,
Cestus,2: Rare,FistWeapon,"{7.5, 45.5}",Physical,"- Dexterity {2, 13}","- Additional Weapon Damage Source[""Dexterity""] * .05f
   - Gain Additional Weapon Damage equal to 5% of your Dexterity.",- Unchained Efreet,"- WyrmrestDesert Night
   - WyrmrestDesert Day"
Cleric's Hammer,2: Rare,Mace_1H,"{6.5, 40.0}",Physical,"- Vitality {2, 9}
   - Intelligence {2, 9}","- Holy Power {1.5,7.5}%","- The Countess
   - Cleric","- FrostwroughtMountain Night
   - FrostwroughtMountain Day
   - WaterTempleRuins Night
   - CastleGloom Day
   - WaterTempleRuins Day"
Coach Gun,2: Rare,Gun_2H,"{17.5, 113.5}",Physical,"- Might {5, 33}",,- Global Loot,
Composite Longbow,2: Rare,Bow,"{15.5, 98.5}",Physical,"- Might {4, 25}
   - Dexterity {2, 9}",,- Global Loot,
Conduit Rod,2: Rare,Staff,"{12.5, 82.5}",Lightning,"- Dexterity {3, 17}
   - Intelligence {2, 9}
   - Reflex {2, 9}","- Lightning Damage {3,15}%","- Ragnar
   - Apparition","- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Corrupted Shard,2: Rare,Sword_1H,"{6.5, 40.0}",Shadow,,- Striking with this weapon applies 1 stack of poison.,"- The Risen Witch (Event)
   - The Witch
   - Twisted Soul of the Swamp","- SunkenSwamplands Day
   - SunkenSwamplands Night"
Cruel Blade,2: Rare,Sword_1H,"{6.5, 40.0}",Physical,"- Might {2, 9}","- Return Damage Physical {2, 29}","- The Gobfather
   - The Pale Goblin
   - The Broker","- DwarvenHalls Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day
   - Emberlands Day"
Crystal Baton,2: Rare,Staff,"{12.5, 82.5}",Fire,"- Might {3, 17}
   - Dexterity {3, 17}
   - Intelligence {3, 17}",,"- Lord Infernicus (Event)
   - The Forgemaster",- Emberlands Day
Crystal Cane,2: Rare,Staff,"{12.5, 82.5}",Cold,"- Reflex {8, 49}",,- Global Loot,
Crystal Rod,2: Rare,Staff,"{12.5, 82.5}",Lightning,"- Intelligence {8, 49}",,- Dwarven Warmachine,- DwarvenHalls Day
Crystal Shillelagh,2: Rare,Staff,"{12.5, 82.5}",Lightning,"- Might {8, 49}",,- Crystal Golem,- ForgottenMines Day
Crystal Staff,2: Rare,Staff,"{12.5, 82.5}",Fire,"- Vitality {3, 17}
   - Intelligence {3, 17}
   - Reflex {3, 17}",,- Global Loot,
Dwarven Greatsword,2: Rare,Sword_2H,"{23.5, 154.5}",Physical,"- Vitality {4, 25}",,"- Dwarven Sword Maiden
   - Mountain King Ironheart",- DwarvenHalls Day
Dwarven Handaxe,2: Rare,Axe_1H,"{9.5, 57.5}",Physical,,"- Basic attacks have a 15% chance to proc an additional attack once per 
   turn.","- Dwarven Flamesmith
   - Mountain King Ironheart",- DwarvenHalls Day
Dwarven Morningstar,2: Rare,Sword_1H,"{6.5, 40.0}",Physical,"- Might {2, 9}
   - Vitality {2, 9}","- Return Damage Physical {2, 29}","- Dwarven Shield
   - Mountain King Ironheart",- DwarvenHalls Day
Dwarven Pickaxe,2: Rare,Axe_2H,"{20.0, 135.5}",Physical,"- Might {3, 17}
   - Vitality {3, 17}",,"- Mountain King Ironheart
   - Dwarven Miner
   - The Prospector","- ForgottenMines Day
   - DwarvenHalls Day"
Dwarven Sceptre,2: Rare,Staff,"{12.5, 82.5}",Fire,"- Might {3, 17}
   - Vitality {3, 17}
   - Intelligence {3, 17}",,- Mountain King Ironheart,- DwarvenHalls Day
Dwarven Spellhammer,2: Rare,Mace_1H,"{6.5, 37.5}",Physical,"- Vitality {2, 13}
   - Intelligence {2, 13}","- increased power for mana use {2, 9}%","- Dwarven Infantry
   - Mountain King Ironheart",- DwarvenHalls Day
Elder Branch,2: Rare,Staff,"{12.5, 82.5}",Healing,"- Vitality {3, 17}","- Holy Power {3,15}%","- Ursa
   - Forest Giant","- FreewindForest Night
   - FreewindForest Day"
Elegant Blade,2: Rare,Sword_1H,"{8.5, 49.5}",Physical,"- Reflex {3, 17}",,- Global Loot,
Elephant Gun,2: Rare,Gun_2H,"{19.5, 128.5}",Physical,,,"- The Gobfather
   - The Pale Goblin","- DwarvenHalls Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day"
Flanged Mace,2: Rare,Mace_2H,"{18.5, 123.5}",Physical,"- Might {6, 41}",,- Global Loot,
Flintlock Rifle,2: Rare,Gun_2H,"{15.5, 98.5}",Physical,"- Might {4, 25}
   - Dexterity {2, 9}",,"- Admiral Blackbeard
   - Dwarven Warmachine
   - The Prospector
   - Councilor Jahsun","- WaterTempleRuins Night
   - EmeraldJungle Day
   - ForgottenMines Day
   - DwarvenHalls Day
   - EmeraldJungle Night"
Foestave,2: Rare,Polearm,"{22.5, 147.5}",Physical,"- Might {3, 17}",,- The Black Knight,"- SunkenSwamplands Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day
   - SunkenSwamplands Night"
Gatecrasher,2: Rare,Mace_2H,"{18.5, 123.5}",Physical,"- Might {4, 25}",- Grants the skill Slam.,"- Hodr, the Frost Giant (Event)","- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Gladiator's Spear,2: Rare,Polearm,"{18.5, 123.5}",Physical,"- Might {3, 17}
   - Dexterity {3, 17}",,"- Lucilla
   - Maximus
   - Proximo
   - Valkyrie Commander","- WaterTempleRuins Night
   - WaterTempleRuins Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Goblin Bone Axe,2: Rare,Axe_2H,"{22.5, 147.5}",Physical,,- Weapon attacks apply 1 stacks of bleeding.,- Global Loot,
Hero's Blade,2: Rare,Sword_2H,"{18.5, 123.5}",Physical,"- Might {2, 9}
   - Dexterity {2, 9}
   - Vitality {2, 9}",,- Global Loot,
Hunter's Bow,2: Rare,Bow,"{16.5, 108.5}",Physical,"- Might {3, 17}
   - Dexterity {3, 17}",,"- Anthulk
   - The Minotaur",- ForgottenMines Day
Hunting Rifle,3: Legendary,Gun_2H,"{19.5, 128.5}",Physical,,- Attacks with this weapon apply 1 stack of bleeding.,- Global Loot,
Hunting Spear,2: Rare,Polearm,"{20.0, 135.5}",Physical,"- Might {2, 9}
   - Dexterity {4, 25}",,"- Hod
   - Lagertha
   - Ragnar
   - Councilor Jahsun","- EmeraldJungle Night
   - EmeraldJungle Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Ice-Runed Axe,2: Rare,Axe_1H,"{9.5, 59.5}",Cold,,"- Cold Damage {1.5,7.5}%",- The Dusk King,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Iron Pistol,2: Rare,Gun_1H,"{7.5, 43.5}",Physical,"- Might {2, 9}
   - Dexterity {2, 9}",,- Blood Mask Boss,"- FreewindForest Night
   - FreewindForest Day"
Iron Scepter,2: Rare,Wand,"{5.5, 33.5}",Fire,"- Might {2, 9}
   - Vitality {2, 9}
   - Intelligence {2, 9}",,- Emperor Marcus,
Knuckle Dagger,2: Rare,Unarmed,"{8.5, 54.5}",Physical,"- Dexterity {2, 9}
   - Vitality {1, 5}",,- Global Loot,
Life-Runed Hatchet,2: Rare,Axe_1H,"{9.5, 62.5}",Physical,,- Max Health 10%,"- Ursa
   - Forest Giant","- FreewindForest Night
   - FreewindForest Day"
Long Bore Handgun,2: Rare,Gun_1H,"{7.5, 45.5}",Physical,"- Might {2, 9}",,- Global Loot,
Mystic Staff,2: Rare,Staff,"{12.5, 82.5}",Fire,"- Might {2, 9}
   - Vitality {2, 9}
   - Intelligence {3, 17}",,- Global Loot,
Obsidian Blade,2: Rare,Sword_1H,"{9.5, 59.5}",Shadow,,,- The Sun Queen,"- WyrmrestDesert Night
   - WyrmrestDesert Day"
Obsidian Dagger,2: Rare,Sword_1H,"{8.5, 54.5}",Shadow,"- Dexterity {3, 17}",,- The Sun Queen,"- WyrmrestDesert Night
   - WyrmrestDesert Day"
Obsidian Hatchet,2: Rare,Axe_1H,"{8.5, 54.5}",Shadow,,"- Shadow Damage {1.5,7.5}%",- The Sun Queen,"- WyrmrestDesert Night
   - WyrmrestDesert Day"
Paladin's Hammer,2: Rare,Mace_2H,"{19.5, 129.5}",Physical,"- Might {3, 17}
   - Vitality {2, 9}",,- Paladin,"- ForgottenMines Day
   - DwarvenHalls Day
   - CastleGloom Day"
Pirate Sidearm,2: Rare,Gun_1H,"{7.5, 45.5}",Physical,"- Might {2, 9}
   - Vitality {2, 9}",,- Global Loot,
Quarterstaff,2: Rare,Polearm,"{18.5, 123.5}",Physical,"- Might {2, 9}
   - Dexterity {2, 9}
   - Vitality {2, 9}
   - Reflex {2, 9}",,- The Minotaur,- ForgottenMines Day
Rapier,2: Rare,Sword_1H,"{8.5, 54.5}",Physical,"- Reflex {3, 17}","- Dodge Counter Damage {6,30}%",- Rogue,"- Emberlands Day
   - FreewindForest Night
   - FreewindForest Day"
Recurve Bow,2: Rare,Bow,"{18.5, 118.5}",Physical,"- Dexterity {2, 9}
   - Reflex {2, 9}",,- Ronin,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Ritual Sword,2: Rare,Sword_2H,"{16.5, 105.5}",Physical,"- Might {3, 17}
   - Intelligence {3, 17}
   - Reflex {2, 9}",,- The Broker,- Emberlands Day
Rockbreaker,2: Rare,Mace_2H,"{18.5, 123.5}",Physical,"- Might {3, 17}",- 15% chance to cast Level [level value] {SKL=Fracture} when striking.,"- Ursa
   - Forest Giant","- FreewindForest Night
   - FreewindForest Day"
Silver-Edged Dagger,2: Rare,Sword_1H,"{9.5, 57.5}",Physical,"- Dexterity {3, 17}",,- Global Loot,
Silver-Edged Longsword,2: Rare,Sword_1H,"{9.5, 57.5}",Physical,"- Might {3, 17}",,"- Herald of the Abyss
   - The Dead One","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Silver-Edged Shortsword,2: Rare,Sword_1H,"{9.5, 62.5}",Physical,"- Dexterity {2, 9}",,- Global Loot,
Sledge Hammer,2: Rare,Mace_2H,"{26.5, 172.5}",Physical,,- Dexterity -25%,"- Lady of the Well
   - The Scarecrow","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Soldier's Axe,2: Rare,Axe_2H,"{18.5, 123.5}",Physical,"- Might {3, 17}
   - Vitality {3, 17}",,"- The Butcher
   - The Jester
   - Skeleton Knight
   - Testing Character
   - The Pale Knight","- DwarvenHalls Day
   - SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Stalker's Bow,2: Rare,Bow,"{14.5, 94.5}",Physical,"- Dexterity {6, 41}",,- Azug Spikefist,
Steel Dagger,2: Rare,Sword_1H,"{8.5, 54.5}",Physical,"- Dexterity {3, 17}",,- Global Loot,
Stiletto,2: Rare,Sword_1H,"{7.5, 47.5}",Physical,,"- Striking with this weapon has a 50% chance to apply 1 stack of 
   {STA=Bleeding}.",- Global Loot,
Sultan Sword,2: Rare,Sword_2H,"{18.5, 123.5}",Physical,"- Dexterity {5, 33}",,- The Sultan,"- WyrmrestDesert Night
   - WyrmrestDesert Day"
Thief's Blade,2: Rare,Sword_1H,"{8.5, 49.5}",Physical,"- Dexterity {3, 17}",- 25% chance to Steal Status when striking.,- Thief,"- EmeraldJungle Night
   - EmeraldJungle Day"
Tonfa,2: Rare,FistWeapon,"{6.5, 40.0}",Physical,"- Vitality {2, 13}","- Damage to Physical Source[""MaxHealth""] * .01f
   - Gain Additional Physical Damage equal to 1% of your Max Health.",- The Grandmaster,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Tribal Headhunter,2: Rare,Sword_2H,"{17.5, 111.5}",Physical,"- Might {2, 9}
   - Dexterity {2, 9}",- Grants the passive skill Executioner.,"- Avatar of Xotec
   - Medusa","- WaterTempleRuins Night
   - WaterTempleRuins Day
   - EmeraldJungle Night
   - EmeraldJungle Day"
Yari,2: Rare,Polearm,"{22.5, 147.5}",Physical,"- Dexterity {3, 17}",,- Ronin,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Zweihander,2: Rare,Sword_2H,"{20.0, 135.5}",Physical,"- Might {5, 33}",,- The Black Knight,"- SunkenSwamplands Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day
   - SunkenSwamplands Night"
Abyssal Staff,3: Legendary,Staff,"{13.5, 89.5}",Shadow,"- Might {3, 18}
   - Vitality {3, 18}","- Shadow Damage {4,20}%",- The Broker,- Emberlands Day
Ancient Sword,3: Legendary,Sword_1H,"{9.5, 59.5}",Physical,,- 10% chance to cast Level [level value] {SKL=Curse} when striking.,"- Ancient Guardian
   - Ancient Slaver","- WyrmrestDesert Night
   - WyrmrestDesert Day"
Assassin's Edge,3: Legendary,Sword_1H,"{8.5, 54.5}",Physical,"- Dexterity {4, 27}",,"- Blood Mask Boss
   - Assassin","- FreewindForest Night
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day
   - WaterTempleRuins Night
   - FreewindForest Day
   - WaterTempleRuins Day"
Bagh nakha,3: Legendary,FistWeapon,"{8.5, 48.5}",Physical,,"- Basic attacks have a 20% chance to proc an additional attack once per 
   turn.",- Global Loot,
Bishop Staff,3: Legendary,Staff,"{17.5, 115.5}",Healing,"- Vitality {3, 18}
   - Intelligence {3, 18}","- Holy Power {4,20}%",- The Bishop (Event),"- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Bone Cleaver,3: Legendary,Axe_2H,"{24.5, 160.0}",Physical,"- Might {2, 9}
   - Vitality {2, 9}",- Weapon attacks apply 2 stacks of bleeding.,"- The Bishop (Event)
   - The Butcher
   - The Jester","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Crimson Crusher,3: Legendary,Mace_2H,"{23.5, 153.5}",Shadow,"- Might {2, 9}
   - Vitality {2, 9}",- % Life Steal 6,- The Baron,- CastleGloom Day
Crimson Hatchet,3: Legendary,Axe_1H,"{10.5, 64.5}",Shadow,,- % Life Steal 3,"- Samare the Vampire (Event)
   - The Baron
   - The Duke",- CastleGloom Day
Crimson Sceptre,3: Legendary,Staff,"{13.5, 89.5}",Shadow,"- Might {6, 36}",- Mana Steal 5%,- The Countess,- CastleGloom Day
Crimson Slayer,3: Legendary,Sword_2H,"{25.5, 166.5}",Physical,,"- % Life Steal 6
   - Weapon attacks apply 2 stacks of bleeding.","- Samare the Vampire (Event)
   - The Duke",- CastleGloom Day
Crusader Sword,3: Legendary,Sword_2H,"{20.0, 133.5}",Physical,"- Might {2, 14}
   - Dexterity {2, 14}
   - Vitality {2, 14}",,- Global Loot,
Divinity Staff,3: Legendary,Staff,"{13.5, 89.5}",Lightning,"- Might {3, 18}
   - Intelligence {3, 18}","- increased power for mana use {4, 27}%",- Global Loot,
Flayer Blade,3: Legendary,Sword_1H,"{10.5, 64.5}",Physical,,- Striking with this weapon applies 1 stack of {STA=Bleeding}.,"- Councilor Jahsun
   - Avatar of Xotec
   - Medusa","- WaterTempleRuins Night
   - WaterTempleRuins Day
   - EmeraldJungle Night
   - EmeraldJungle Day"
Foe-Crusher,3: Legendary,Mace_2H,"{20.0, 133.5}",Physical,"- Might {3, 18}
   - Vitality {3, 18}",- 10% chance to cast Level [level value] {SKL=Slam} on striking.,- Mountain King Ironheart,- DwarvenHalls Day
Forest Glaive,3: Legendary,Polearm,"{20.0, 133.5}",Physical,"- Might {3, 18}
   - Reflex {3, 18}",- Max Health 20%,- Global Loot,
Gentleman's Pistol,3: Legendary,Gun_1H,"{8.5, 49.5}",Physical,"- Reflex {3, 18}","- Dodge Counter Damage {6,30}%",- Blood Mask Boss,"- FreewindForest Night
   - FreewindForest Day"
Gilded Axe,3: Legendary,Axe_2H,"{22.5, 146.5}",Physical,"- Might {3, 18}
   - Vitality {3, 18}",,"- Olgoi, Devourer of Treasure
   - Captain of the Ruby Rum","- WaterTempleRuins Day
   - DwarvenHalls Day"
Gilded Hatchet,3: Legendary,Axe_1H,"{9.5, 59.5}",Physical,"- Might {2, 9}
   - Vitality {2, 9}",,- Global Loot,
Gilded Rapier,3: Legendary,Sword_1H,"{9.5, 59.5}",Physical,"- Reflex {3, 18}","- Dodge Counter Damage {8,40}%","- Olgoi, Devourer of Treasure
   - Captain of the Emerald Eel","- WaterTempleRuins Day
   - DwarvenHalls Day"
Gilded Scepter,3: Legendary,Wand,"{6.5, 36.5}",Healing,"- Might {2, 9}
   - Intelligence {2, 9}","- Holy Power {2,10}%","- Herald of the Abyss
   - Emperor Marcus","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Gilded Spear,3: Legendary,Polearm,"{20.0, 133.5}",Physical,"- Might {3, 18}
   - Dexterity {4, 27}",,- Global Loot,
Gilded Staff,3: Legendary,Staff,"{13.5, 89.5}",Fire,"- Might {6, 36}
   - Vitality {2, 9}
   - Intelligence {2, 9}",,"- Olgoi, Devourer of Treasure",- DwarvenHalls Day
Gladius,3: Legendary,Sword_1H,"{10.5, 67.5}",Physical,"- Dexterity {3, 18}",,"- Lucilla
   - Proximo",
Goblin Shaman Staff,3: Legendary,Staff,"{13.5, 89.5}",Fire,"- Might {4, 27}
   - Intelligence {2, 9}","- Fire Damage {3,15}%
   - Holy Power {3,15}%","- Goblin Shaman
   - The Gobfather
   - Iceclaw Witch Doctor
   - Pale Witch Doctor
   - The Pale Goblin","- DwarvenHalls Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day"
Gold Cestus,3: Legendary,FistWeapon,"{8.5, 48.5}",Physical,"- Dexterity {2, 14}","- Additional Weapon Damage Source[""Dexterity""] * .075f
   - Gain Additional Weapon Damage equal to 7.5% of your Dexterity.",- Unchained Efreet,"- WyrmrestDesert Night
   - WyrmrestDesert Day"
Golden Cross,3: Legendary,Wand,"{8.5, 54.5}",Healing,,"- Holy Power {2,10}%",- The Bishop (Event),"- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Golden Scepter,3: Legendary,Wand,"{6.5, 36.5}",Fire,"- Might {3, 18}
   - Intelligence {2, 9}",,- Global Loot,
Griffin Horn,3: Legendary,Bow,"{13.5, 85.5}",Physical,"- Dexterity {4, 27}","- Additional Weapon Damage Source[""Dexterity""] * .30f
   - Gain Additional Weapon Damage equal to 30% of your Dexterity.",- Global Loot,
Hand Cannon,3: Legendary,Gun_1H,"{9.5, 58.5}",Fire,,,"- Admiral Blackbeard
   - The Prospector","- WaterTempleRuins Night
   - ForgottenMines Day"
Holy Blade,3: Legendary,Sword_1H,"{10.5, 64.5}",Holy,"- Might {3, 18}","- Holy Power {4,20}%",- The Bishop (Event),"- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Ivory Musket,3: Legendary,Gun_2H,"{21.5, 138.5}",Fire,,,- Councilor Jahsun,"- EmeraldJungle Night
   - EmeraldJungle Day"
Minotaur Axe,3: Legendary,Axe_2H,"{20.0, 133.5}",Physical,"- Might {4, 27}
   - Vitality {3, 18}",,"- Anthulk
   - The Minotaur",- ForgottenMines Day
Naginata,3: Legendary,Polearm,"{16.5, 107.5}",Physical,"- Dexterity {4, 27}","- Additional Weapon Damage Source[""Dexterity""] * .30f
   - Gain Additional Weapon Damage equal to 30% of your Dexterity.","- Ronin
   - The Grandmaster","- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Oasis Glaive,3: Legendary,Polearm,"{20.0, 133.5}",Physical,"- Vitality {3, 18}
   - Intelligence {3, 18}",- Max Mana 20%,- Global Loot,
Obsidian Cestus,4: Mythic,FistWeapon,"{9.5, 58.5}",Shadow,,"- Shadow Damage {2,10}%
   - % Life Steal 4",- Global Loot,
Obsidian Talon,3: Legendary,FistWeapon,"{7.5, 43.5}",Shadow,,- Striking with this weapon applies 1 stack of Poison.,- Global Loot,
Ornate Sword,3: Legendary,Sword_1H,"{9.5, 61.5}",Physical,"- Might {2, 9}
   - Vitality {2, 9}",,- Global Loot,
Ruby Battleaxe,3: Legendary,Axe_2H,"{20.0, 133.5}",Fire,"- Might {4, 27}
   - Vitality {3, 18}",,"- Lord Infernicus (Event)
   - The Forgemaster",- Emberlands Day
Ruby Glaive,3: Legendary,Polearm,"{16.5, 107.5}",Fire,"- Might {3, 18}
   - Intelligence {3, 18}","- Fire Damage {4,20}%",- Global Loot,
Ruby Halberd,3: Legendary,Polearm,"{24.5, 160.0}",Fire,,"- Fire Damage {4,20}%",- Dwarven Warmachine,- DwarvenHalls Day
Ruby Sword,3: Legendary,Sword_1H,"{8.5, 54.5}",Fire,,"- Fire Damage {4,20}%
   - 10% chance to apply Level [level value] {SKL=Immolate} on hit.",- The Broker,- Emberlands Day
Ruby Tonfa,3: Legendary,FistWeapon,"{7.5, 43.5}",Fire,"- Might {2, 9}
   - Intelligence {1, 5}","- Damage to Fire Source[""Might""] * .1f
   - Gain Added Damage to Fire equal to 10% of your Might.","- Lord Infernicus (Event)
   - The Forgemaster",- Emberlands Day
Sai,3: Legendary,Sword_1H,"{8.5, 48.5}",Physical,"- Reflex {2, 14}","- Additional Weapon Damage Source[""Reflex""] * .075f
   - Gain Additional Weapon Damage equal to 7.5% of your Reflex.",- The Grandmaster,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Sand Spear,3: Legendary,Polearm,"{20.0, 133.5}",Physical,"- Might {3, 18}
   - Dexterity {3, 18}","- Damage and Healing {3,15}%","- Unchained Efreet
   - The Sultan","- WyrmrestDesert Night
   - WyrmrestDesert Day"
Sapphire Cestus,3: Legendary,FistWeapon,"{8.5, 54.5}",Cold,"- Might {2, 9}
   - Intelligence {1, 5}","- Damage to Cold Source[""Might""] * .1f
   - Gain Added Damage to Cold equal to 10% of your Might.",- Global Loot,
Sapphire Claymore,3: Legendary,Sword_2H,"{20.0, 133.5}",Cold,"- Might {3, 18}
   - Dexterity {2, 9}
   - Vitality {3, 18}",,- Global Loot,
Sapphire Poleaxe,3: Legendary,Polearm,"{24.5, 160.0}",Cold,,"- Cold Damage {4,20}%",- Global Loot,
Sapphire Spear,3: Legendary,Polearm,"{16.5, 107.5}",Cold,"- Might {2, 9}
   - Intelligence {2, 9}
   - Reflex {3, 18}","- Cold Damage {4,20}%",- Global Loot,
Sapphire Sword,3: Legendary,Sword_1H,"{8.5, 54.5}",Cold,,"- Cold Damage {2,10}%
   - 10% chance to cast Level [level value] {SKL=Frost Shard} on hit.",- Global Loot,
Sharpshooter,3: Legendary,Gun_2H,"{16.5, 107.5}",Physical,"- Dexterity {7, 45}",,"- Lady of the Well
   - The Scarecrow
   - Captain of the Sapphire Sea","- WaterTempleRuins Day
   - SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Shield Crusher,3: Legendary,Mace_2H,"{23.5, 153.5}",Physical,"- Might {6, 36}",,- Global Loot,
Silver Shot,3: Legendary,Gun_1H,"{10.5, 62.5}",Physical,,,"- The Butcher
   - The Jester","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Skull Mace,3: Legendary,Wand,"{6.5, 36.5}",Shadow,"- Might {3, 18}","- Summon Damage {2.5,12.5}%
   - Summon Limit 1",- The Sun Queen,"- WyrmrestDesert Night
   - WyrmrestDesert Day"
Sky Spear,3: Legendary,Polearm,"{20.0, 133.5}",Physical,"- Vitality {3, 18}
   - Intelligence {3, 18}","- Damage and Healing {3,15}%",- Global Loot,
Slayer Blade,3: Legendary,Sword_1H,"{11.5, 69.5}",Physical,"- Might {2, 9}",,"- The Butcher
   - The Jester","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Spike Fist,3: Legendary,FistWeapon,"{7.5, 43.5}",Physical,"- Vitality {2, 14}","- Return Damage Physical Source[""MaxHealth""] * .01f
   - Gain Added Return Damage Physical equal to 1% of your Max Health.",- Azug Spikefist,
Stone-Cleaver,3: Legendary,Axe_2H,"{24.5, 160.0}",Physical,"- Might {4, 27}
   - Vitality {3, 18}",,- Mountain King Ironheart,- DwarvenHalls Day
Sword Guard,3: Legendary,Sword_2H,"{24.5, 160.0}",Physical,"- Reflex {6, 36}",,- The Black Knight,"- SunkenSwamplands Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day
   - SunkenSwamplands Night"
Topaz Cestus,3: Legendary,FistWeapon,"{7.5, 43.5}",Lightning,,"- Damage to Lightning Source[""Might""] * .1f
   - Gain Added Damage to Lightning equal to 10% of your Might.",- Tlaloc the Storm,"- WaterTempleRuins Night
   - WaterTempleRuins Day
   - EmeraldJungle Night
   - EmeraldJungle Day"
Topaz Greataxe,3: Legendary,Axe_2H,"{20.0, 133.5}",Lightning,"- Might {3, 18}
   - Dexterity {4, 27}",,- Ragnar,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Topaz Greatsword,3: Legendary,Sword_2H,"{20.0, 133.5}",Lightning,"- Dexterity {4, 27}
   - Vitality {3, 18}",,- Global Loot,
Topaz Polearm,3: Legendary,Polearm,"{22.5, 146.5}",Lightning,,"- Lightning Damage {4,20}%",- Global Loot,
Topaz Sword,3: Legendary,Sword_1H,"{8.5, 54.5}",Lightning,,"- Lightning Damage {2,10}%
   - 8% chance on striking to cast Level [level value] {SKL=Shock}.",- Global Loot,
Topaz Sword-Staff,3: Legendary,Polearm,"{16.5, 107.5}",Lightning,"- Dexterity {3, 18}
   - Intelligence {3, 18}","- Lightning Damage {4,20}%",- Global Loot,
Twisted Dagger,3: Legendary,Sword_1H,"{7.5, 43.5}",Shadow,,"- Shadow Damage {2,10}%
   - Striking with this weapon applies 2 stack of Poison.","- The Jester
   - Twisted Soul of the Swamp","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Vanquisher Blade,3: Legendary,Sword_1H,"{8.5, 54.5}",Physical,"- Might {4, 27}",,- Global Loot,
Vanquisher Sword,3: Legendary,Sword_2H,"{20.0, 133.5}",Physical,"- Might {6, 40}",,"- Lady of the Well
   - The Scarecrow
   - Avatar of Xotec
   - Medusa","- SunkenSwamplands Night
   - WaterTempleRuins Night
   - EmeraldJungle Day
   - CastleGloom Day
   - WaterTempleRuins Day
   - EmeraldJungle Night
   - SunkenSwamplands Day"
Wrecking Ball,3: Legendary,FistWeapon,"{6.5, 40.0}",Physical,"- Might {2, 9}",- 10% chance to cast Quaking Fist on striking.,- Azug Spikefist,
Abaddon,4: Mythic,Mace_2H,"{26.5, 172.5}",Shadow,"- Might {3, 20}
   - Intelligence {3, 20}","- Shadow Damage {5,25}%
   - 20% chance to cast Level [level value] {SKL=Raise Servant of Abaddon} 
   on enemy death.","- Black Dragon
   - The Dusk King","- FrostwroughtMountain Night
   - FrostwroughtMountain Day
   - CastleGloom Day"
Ancient Staff,4: Mythic,Staff,"{14.5, 96.5}",Fire,"- Intelligence {9, 58}",- Max Mana 25%,- Global Loot,
Apocalypse,4: Mythic,Sword_2H,"{21.5, 143.5}",Fire,"- Might {6, 39}","- Fire Damage {5,25}%","- Lord Infernicus (Event)
   - Red Dragon",- Emberlands Day
Arcane Pillar,4: Mythic,Staff,"{14.5, 96.5}",Fire,"- Might {10, 67}",,- The Sultan,"- WyrmrestDesert Night
   - WyrmrestDesert Day"
Arcane Sceptre,4: Mythic,Wand,"{6.5, 39.5}",Fire,"- Might {5, 34}",,- The Sultan,"- WyrmrestDesert Night
   - WyrmrestDesert Day"
Big Game Hunter,4: Mythic,Gun_2H,"{30.5, 200.0}",Physical,,- Movement Points -1,- Councilor Jahsun,"- EmeraldJungle Night
   - EmeraldJungle Day"
Black Crusade,4: Mythic,Bow,"{21.5, 138.5}",Physical,"- Might {2, 10}
   - Dexterity {2, 10}
   - Vitality {2, 10}",- Attacks with this weapon cause 2 stacks of Bleeding.,- The Black Knight,"- SunkenSwamplands Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day
   - SunkenSwamplands Night"
Champion Blade,4: Mythic,Axe_2H,"{26.5, 172.5}",Physical,"- Vitality {5, 29}",- Grants the passive skill {SKL=Colossus}.,- Maximus,
Cold Steel Axe,4: Mythic,Axe_1H,"{9.5, 58.5}",Cold,"- Might {2, 10}
   - Vitality {2, 10}","- Cold Damage {2.5,12.5}%
   - 10% chance to cast Level [level value] {SKL=Ice Lance} on striking.",- Blue Dragon,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Coldsteel Vanquisher,4: Mythic,Gun_1H,"{8.5, 53.5}",Cold,"- Might {3, 20}",,"- Blue Dragon
   - The Prospector
   - Olgoi, Devourer of Treasure","- ForgottenMines Day
   - DwarvenHalls Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Crimson Brand,4: Mythic,Sword_1H,"{10.5, 66.5}",Shadow,"- Might {2, 10}
   - Dexterity {2, 10}",- Life Steal 4%,"- Samare the Vampire (Event)
   - The Duke",- CastleGloom Day
Crystal Spire,4: Mythic,Staff,"{14.5, 96.5}",Cold,"- Might {3, 15}
   - Dexterity {3, 15}
   - Vitality {3, 15}
   - Intelligence {3, 15}
   - Reflex {3, 15}",,- Crystal Golem,- ForgottenMines Day
Dark God's Sceptre,4: Mythic,Staff,"{14.5, 96.5}",Shadow,"- Might {5, 29}","- Shadow Damage {5,25}%
   - Mana Steal 5%","- Black Dragon
   - The Countess
   - The Bishop (Event)","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Dead One's Scythe,4: Mythic,Wand,"{6.5, 39.5}",Shadow,"- Might {3, 20}","- Summon Damage {3,15}%
   - Summon Limit 1","- The Dead One
   - Lady of the Well
   - The Scarecrow","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Dragon Fist,4: Mythic,FistWeapon,"{9.5, 58.5}",Shadow,,"- 5% chance to cast Level [level value] {SKL=Thunder Bolt} when hitting 
   an enemy with any ability.
   - 5% chance to cast Level [level value] {SKL=Frost Nova} when hitting an 
   enemy with any ability.
   - 5% chance to cast Level [level value] {SKL=Fireball} when hitting an 
   enemy with any ability.","- Black Dragon
   - Blue Dragon
   - Green Dragon
   - Red Dragon","- FreewindForest Night
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day
   - FreewindForest Day
   - CastleGloom Day
   - Emberlands Day"
Dwarven Lord's Sceptre,4: Mythic,Wand,"{6.5, 39.5}",Fire,"- Vitality {3, 20}","- Damage and Healing {2.5,12.5}%",- Mountain King Ironheart,- DwarvenHalls Day
Earthshaker,4: Mythic,Mace_2H,"{21.5, 143.5}",Physical,"- Might {3, 20}
   - Vitality {3, 20}",- 10% chance to cast Level [level value] {SKL=Stunning Slam} on striking.,"- Ursa
   - Forest Giant","- FreewindForest Night
   - FreewindForest Day"
Ember King's Might,4: Mythic,Sword_2H,"{19.5, 129.5}",Fire,"- Might {2, 10}
   - Vitality {2, 10}","- Fire Damage {5,25}%
   - 15% chance to cast Level [level value] {SKL=Detonate} on striking.",- The Ember King,- Emberlands Day
Emberstone Staff,4: Mythic,Staff,"{14.5, 96.5}",Fire,"- Might {3, 20}
   - Intelligence {3, 20}","- Fire Damage {5,25}%
   - 20% chance to cast Level [level value] {SKL=Burning Ground} when 
   hitting with any ability.",- The Broker,- Emberlands Day
Excalibur,4: Mythic,Sword_2H,"{26.5, 172.5}",Holy,"- Might {3, 20}
   - Vitality {3, 20}","- Holy Power Source[""Might""] * .4f%
   - Gain Increased Holy Power equal to 40% of your Might.",- Drops from the Sword in the Stone event,
Executioner Axe,4: Mythic,Axe_2H,"{26.5, 172.5}",Physical,"- Might {2, 10}
   - Vitality {2, 10}",- Weapon attacks apply 2 stacks of bleeding.,- Global Loot,
Fencer's Gift,4: Mythic,Sword_1H,"{10.5, 63.5}",Physical,"- Reflex {3, 20}","- Dodge Counter Damage {10,50}%",- The Prospector,- ForgottenMines Day
Flame Grasp,4: Mythic,Wand,"{6.5, 39.5}",Fire,"- Intelligence {5, 29}","- Damage to Fire Source[""Intelligence""] * .20f
   - Gain Added Damage to Fire equal to 20% of your Intelligence.","- The Mad Mage (Event)
   - Red Dragon",- Emberlands Day
Frost Grasp,4: Mythic,Wand,"{6.5, 39.5}",Cold,"- Intelligence {5, 29}","- Damage to Cold Source[""Intelligence""] * .20f
   - Gain Added Damage to Cold equal to 20% of your Intelligence.","- Blue Dragon
   - The Mad Mage (Event)","- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Fury Staff,4: Mythic,Polearm,"{26.5, 172.5}",Lightning,"- Dexterity {10, 67}",,- Tlaloc the Storm,"- WaterTempleRuins Night
   - WaterTempleRuins Day
   - EmeraldJungle Night
   - EmeraldJungle Day"
Ghost Hunter,4: Mythic,Gun_2H,"{22.5, 149.5}",Shadow,"- Might {2, 10}
   - Dexterity {2, 10}",- Grants the skill {SKL=Spectral Mark}.,- Admiral Blackbeard,- WaterTempleRuins Night
Gobfather's Smasher,4: Mythic,Mace_2H,"{26.5, 172.5}",Physical,"- Might {3, 20}
   - Vitality {3, 20}",,- The Gobfather,"- WyrmrestDesert Night
   - WyrmrestDesert Day"
Goblin Chieftain Axe,4: Mythic,Axe_2H,"{27.5, 179.5}",Physical,"- Might {5, 29}
   - Vitality {2, 10}",- Casts {SKL=Rally} at the start of each turn.,"- Azug Spikefist
   - Iceclaw Chieftain
   - The Pale Goblin",- DwarvenHalls Day
Golden Valkyrie Spear,4: Mythic,Polearm,"{24.5, 158.5}",Physical,"- Might {3, 20}
   - Vitality {3, 20}",- Applies Seal of Might at the start of battle.,- Valkyrie Commander,"- WaterTempleRuins Night
   - WaterTempleRuins Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Grandfather Odachi,4: Mythic,Sword_2H,"{17.5, 115.5}",Physical,"- Might {3, 20}
   - Vitality {2, 10}","- Additional Weapon Damage Source[""Might""] * .4f
   - Gain Additional Weapon Damage equal to 40% of your Might.",- Ronin,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Hailstone Staff,4: Mythic,Staff,"{14.5, 96.5}",Cold,"- Might {3, 20}
   - Intelligence {3, 20}","- Cold Damage {5,25}%
   - 15% chance to cast Level [level value] {SKL=Frost Nova} when hitting 
   with any ability.","- Hodr, the Frost Giant (Event)","- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Harvester,4: Mythic,Axe_2H,"{21.5, 143.5}",Physical,"- Might {3, 20}
   - Vitality {3, 20}","- 20% chance to cast Level [level value] {SKL=Reaper's Scythe} on 
   striking.","- The Black Knight
   - Lady of the Well
   - The Scarecrow","- SunkenSwamplands Night
   - WyrmrestDesert Day
   - CastleGloom Day
   - WyrmrestDesert Night
   - SunkenSwamplands Day"
Heavenly Blade,4: Mythic,Sword_2H,"{27.5, 179.5}",Physical,"- Might {2, 10}
   - Dexterity {2, 10}
   - Vitality {2, 10}
   - Intelligence {2, 10}
   - Reflex {2, 10}",,- Unchained Efreet,"- WyrmrestDesert Night
   - WyrmrestDesert Day"
Holy Symbol,4: Mythic,Wand,"{9.5, 58.5}",Healing,"- Might {2, 10}","- Holy Power {2.5,12.5}%",- Herald of the Abyss,"- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Ice King's Axe,4: Mythic,Axe_2H,"{21.5, 143.5}",Cold,"- Might {3, 20}
   - Vitality {3, 20}","- Cold Damage {5,25}%
   - 20% chance to cast Level [level value] {SKL=Breath of Winter} on 
   striking.",- The Dusk King,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Kingsblade,4: Mythic,Sword_1H,"{9.5, 58.5}",Physical,"- Might {1, 5}
   - Dexterity {1, 5}
   - Vitality {1, 5}
   - Intelligence {1, 5}
   - Reflex {1, 5}",,- Global Loot,
Kingslayer,4: Mythic,Sword_1H,"{10.5, 63.5}",Physical,"- Dexterity {5, 29}",,"- The Butcher
   - The Jester","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Last Word,4: Mythic,Gun_1H,"{7.5, 43.5}",Physical,,"- Basic attacks have a 25% chance to proc an additional attack once per 
   turn.",- Global Loot,
Laying on Hands,4: Mythic,FistWeapon,"{11.5, 69.5}",Healing,"- Might {2, 10}
   - Intelligence {1, 5}","- Healing Given Source[""Might""] * .5f
   - Gain Additional Healing to Heals equal to 50% of your Might.",- Global Loot,
Living Axe,4: Mythic,Axe_2H,"{21.5, 143.5}",Physical,"- Vitality {3, 20}
   - Reflex {3, 20}","- Health Per Turn {14, 168}","- Ursa
   - Forest Giant","- FreewindForest Night
   - FreewindForest Day"
Logan's Paw,4: Mythic,FistWeapon,"{7.5, 46.5}",Physical,"- Vitality {3, 15}","- Health Per Turn {7, 84}
   - Damage to Physical Source[""MaxHealth""] * .025f
   - Gain Additional Physical Damage equal to 2.5% of your Max Health.",- The Grandmaster,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Magedraw,4: Mythic,Bow,"{12.5, 80.0}",Physical,,- Gain Level [level value] {SKL=Enchant Fire}.,- Crystal Golem,- ForgottenMines Day
Medusa Staff,4: Mythic,Staff,"{14.5, 96.5}",Shadow,"- Might {3, 20}
   - Vitality {3, 20}",- Grants the skill {SKL=Petrify}.,"- Anthulk
   - The Minotaur
   - Medusa","- WaterTempleRuins Night
   - EmeraldJungle Day
   - ForgottenMines Day
   - WaterTempleRuins Day
   - EmeraldJungle Night"
Mjolnir,4: Mythic,Mace_1H,"{9.5, 58.5}",Lightning,"- Might {2, 10}
   - Vitality {2, 10}","- Lightning Damage {2.5,12.5}%
   - 10% chance to cast Level [level value] {SKL=Thunder Bolt} on striking.","- Lagertha
   - Ragnar
   - Green Dragon","- FreewindForest Night
   - FreewindForest Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Mourning Star,4: Mythic,Mace_1H,"{7.5, 46.5}",Physical,,"- Return Damage Physical Source[""Armor""] * .02f
   - Gain Added Return Damage Physical equal to 2% of your Armor.","- Dark Cultist Attendant
   - The Gobfather
   - The Pale Goblin","- SunkenSwamplands Night
   - WyrmrestDesert Day
   - CastleGloom Day
   - DwarvenHalls Day
   - WyrmrestDesert Night
   - SunkenSwamplands Day"
Ninjato,4: Mythic,Sword_1H,"{7.5, 46.5}",Physical,"- Dexterity {2, 10}
   - Vitality {1, 5}","- Additional Weapon Damage Source[""Dexterity""] * .10f
   - Gain Additional Weapon Damage equal to 10% of your Dexterity.",- Ronin,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Oculus Stone,4: Mythic,Wand,"{6.5, 39.5}",Lightning,"- Might {3, 15}
   - Intelligence {2, 10}
   - Reflex {2, 10}",,"- The Minotaur
   - Lady of the Well
   - The Scarecrow","- ForgottenMines Day
   - SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Peacekeeper,4: Mythic,Gun_2H,"{21.5, 138.5}",Physical,"- Might {6, 39}",,"- The Sultan
   - Medusa","- WaterTempleRuins Night
   - EmeraldJungle Day
   - WyrmrestDesert Day
   - WaterTempleRuins Day
   - WyrmrestDesert Night
   - EmeraldJungle Night"
Phantom Piercer,4: Mythic,Sword_1H,"{11.5, 69.5}",Shadow,"- Reflex {3, 20}","- 10% chance to cast Level [level value] {SKL=Reaper's Scythe} on 
   striking.",- Admiral Blackbeard,- WaterTempleRuins Night
Phoenix Claymore,4: Mythic,Sword_2H,"{21.5, 143.5}",Fire,"- Vitality {3, 20}","- Fire Damage {5,25}%
   - Return Damage Fire {6, 67}
   - Grants the passive {SKL=Glory}. Gain Level [level value] {SKL=Enchant 
   Fire} while holding this weapon.","- Red Dragon
   - The Broker",- Emberlands Day
Problem Solver,4: Mythic,Gun_1H,"{11.5, 74.5}",Physical,,,- Global Loot,
Shadow Stalker Bow,4: Mythic,Bow,"{21.5, 138.5}",Shadow,"- Dexterity {6, 39}","- 10% chance to cast Level [level value] {SKL=Spectral Chains} on 
   striking. 10% chance to cast Level [level value] {SKL=Blind} on striking.",- The Sun Queen,"- WyrmrestDesert Night
   - WyrmrestDesert Day"
Shiny Blue Crusher,4: Mythic,Mace_1H,"{7.5, 43.5}",Cold,"- Vitality {2, 10}
   - Intelligence {2, 10}","- Cold Damage {2.5,12.5}%",- Global Loot,
Shiny Orange Basher,4: Mythic,Mace_1H,"{7.5, 43.5}",Lightning,"- Dexterity {2, 10}
   - Intelligence {2, 10}","- Lightning Damage {2.5,12.5}%",- Global Loot,
Shiny Red Smasher,4: Mythic,Mace_1H,"{7.5, 43.5}",Fire,"- Might {2, 10}
   - Intelligence {2, 10}","- Fire Damage {2.5,12.5}%",- Global Loot,
Siegebreaker,4: Mythic,Mace_2H,"{26.5, 172.5}",Physical,"- Might {2, 10}
   - Vitality {2, 10}",- Striking with this weapon applies {STA=Fracture} to the target.,"- Hodr, the Frost Giant (Event)","- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Slayer Axe,4: Mythic,Axe_2H,"{30.5, 200.0}",Physical,,,- The Butcher,"- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Spectral Hammer,4: Mythic,Gun_1H,"{9.5, 58.5}",Shadow,,"- Shadow Damage {2.5,12.5}%
   - 10% chance to shoot a Ghostly Cannon Ball on striking.",- Admiral Blackbeard,- WaterTempleRuins Night
Sun Staff,4: Mythic,Staff,"{21.5, 143.5}",Healing,"- Might {3, 20}","- Holy Power {5,25}%",- The Sun Queen,"- WyrmrestDesert Night
   - WyrmrestDesert Day"
Thunder Grasp,4: Mythic,Wand,"{6.5, 39.5}",Lightning,"- Intelligence {5, 29}","- Damage to Lightning Source[""Intelligence""] * .20f
   - Gain Added Damage to Lightning equal to 20% of your Intelligence.","- Green Dragon
   - The Mad Mage (Event)","- FreewindForest Night
   - FreewindForest Day"
Thunderforce,4: Mythic,Bow,"{15.5, 98.5}",Lightning,"- Dexterity {3, 20}
   - Reflex {2, 10}","- Lightning Damage {5,25}%
   - 15% Chance to cast Level [level value] {SKL=Chain Lightning} when 
   striking with this weapon.",- Global Loot,
Thunderstone Staff,4: Mythic,Staff,"{14.5, 96.5}",Lightning,"- Dexterity {3, 20}
   - Intelligence {3, 20}","- Lightning Damage {5,25}%
   - 10% chance to proc a Level [level value] {SKL=Thunder Bolt} when 
   hitting with any ability.","- Tlaloc the Storm
   - Green Dragon","- FreewindForest Night
   - WaterTempleRuins Night
   - EmeraldJungle Day
   - FreewindForest Day
   - WaterTempleRuins Day
   - EmeraldJungle Night"
Trophy Hunter,4: Mythic,Bow,"{23.5, 155.5}",Physical,"- Dexterity {3, 20}",- Grants the passive skill {SKL=Trophy Hunter}.,- Councilor Jahsun,"- EmeraldJungle Night
   - EmeraldJungle Day"
Volcanic,4: Mythic,Gun_1H,"{9.5, 58.5}",Fire,,"- Fire Damage {2.5,12.5}%","- Dwarven Warmachine
   - Red Dragon","- DwarvenHalls Day
   - Emberlands Day"
Warmachine Gauntlet,4: Mythic,FistWeapon,"{11.5, 69.5}",Fire,"- Might {2, 10}
   - Vitality {1, 5}",- 10% chance to cast Level [level value] {SKL=Meteor} when Striking.,- Dwarven Warmachine,- DwarvenHalls Day
Windstrike,4: Mythic,Bow,"{14.5, 92.5}",Physical,"- Might {5, 29}","- Additional Weapon Damage Source[""Might""] * .35f
   - Gain Additional Weapon Damage equal to 35% of your Might.",- Black Dragon,- CastleGloom Day
Winged Axe,4: Mythic,Axe_1H,"{8.5, 52.5}",Physical,,"- Basic attacks have a 25% chance to proc an additional attack once per 
   turn.",- Valkyrie Commander,"- WaterTempleRuins Night
   - WaterTempleRuins Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Witch's Broom,4: Mythic,Staff,"{14.5, 96.5}",Shadow,"- Might {3, 20}
   - Vitality {3, 20}",- Shadow damage you deal applies 2 stacks of @Poison@.,"- The Risen Witch (Event)
   - The Witch","- SunkenSwamplands Day
   - SunkenSwamplands Night"
Rabbit's Spear,4: Mythic,Polearm,{140},Physical,"- Dexterity {20}
   - Reflex {20}","- Skills Granted {Momentum III, Falcon Dash}",- The Ronin,"- FrostwroughtMountains Day
   - FrostwroughtMountains Night"
Ksvaldir,4: Mythic,Sword_2H,{135},Physical,- Dexterity {39},"- Dodge Counter Damage {100}%
   - Dodge Counter Attack Chance {100}%
   - Life Steal 5%
   - Applies Hunger Ksvaldir: Sacrifice 10% of your max health per turn",- The Countess,"- CastleGloom Day
   - CastleGloom Night"`,z1=`Name,Rarity,Armor,Magic Armor,Base Stats,Attributes,Dropped By,Locations
Battered Heater,0: Common,"{6, 41}","{6, 41}","- Vitality {1, 7}",,- Global Loot,
Goblin Shield,1: Uncommon,"{10, 68}","{10, 68}","- Might {4, 23}",,- Global Loot,
Heater,1: Uncommon,"{10, 68}","{10, 68}",,"- Return Damage Physical {2, 26}",- Global Loot,
Iron Aspis,1: Uncommon,"{10, 68}","{10, 68}","- Reflex {3, 15}",,- Global Loot,
Wooden Buckler,1: Uncommon,"{10, 68}","{10, 68}","- Vitality {4, 23}",,- Global Loot,
Wooden Heater,1: Uncommon,"{15, 101}","{12, 79}",,,- Global Loot,
Wooden Round Shield,1: Uncommon,"{12, 79}","{15, 101}",,,- Global Loot,
Abyssal Shield,2: Rare,"{13, 86}","{13, 86}","- Vitality {3, 21}",- Return Damage Shadow 20%,- The Broker,- Emberlands Day
Blackguard,2: Rare,"{13, 86}","{13, 86}","- Vitality {3, 17}","- Additional Weapon Damage {5, 33}
   - Physical Damage {1.5,7.5}%",- The Black Knight,"- SunkenSwamplands Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day
   - SunkenSwamplands Night"
Bladed Buckler,2: Rare,"{15, 98}","{15, 98}","- Vitality {2, 9}","- Return Damage Physical {2, 29}","- The Gobfather
   - Azug Spikefist
   - The Pale Goblin","- DwarvenHalls Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day"
Chitin Shield,2: Rare,"{18, 123}","{11, 74}","- Might {2, 9}
   - Vitality {2, 9}",- Resist Physical 8%,- Anthulk,- ForgottenMines Day
Dwarven Spellshield,2: Rare,"{8, 49}","{15, 98}","- Might {4, 25}","- Resist Cold 8%
   - Resist Fire 8%
   - Resist Lightning 8%","- Dwarven Infantry
   - Dwarven Shield
   - Mountain King Ironheart",- DwarvenHalls Day
Gravestone,2: Rare,"{8, 49}","{15, 98}",,"- Summon Resistance 10%
   - Summon Health {2,10}%
   - Summon Limit 1","- Herald of the Abyss
   - The Dead One
   - Grave Digger
   - Headsman","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Iron Heater,2: Rare,"{15, 98}","{11, 74}","- Vitality {3, 21}",,- Knight,"- Emberlands Day
   - FreewindForest Night
   - FreewindForest Day"
Parmula,2: Rare,"{11, 74}","{11, 74}","- Might {2, 9}
   - Dexterity {2, 9}
   - Reflex {3, 17}",,"- Lucilla
   - Maximus
   - Proximo",
Tribal Shield,2: Rare,,"{22, 147}","- Vitality {2, 9}","- Resist Cold 8%
   - Resist Fire 8%
   - Resist Lightning 8%","- Avatar of Xotec
   - Medusa","- WaterTempleRuins Night
   - WaterTempleRuins Day
   - EmeraldJungle Night
   - EmeraldJungle Day"
Golden Aspis,3: Legendary,"{14, 93}","{14, 93}","- Might {2, 9}
   - Dexterity {2, 9}
   - Reflex {3, 18}",,"- Lucilla
   - Maximus
   - Proximo",
Holy Heater,3: Legendary,"{12, 80}","{12, 80}","- Might {2, 9}
   - Vitality {3, 18}","- Holy Power {2,10}%",- Global Loot,
Ironbark Shield,3: Legendary,"{18, 120}","{18, 120}","- Vitality {3, 18}","- Return Damage Physical {3, 31}","- Ursa
   - Forest Giant","- FreewindForest Night
   - FreewindForest Day"
Kingdom Guard,3: Legendary,"{12, 80}","{12, 80}","- Might {2, 9}
   - Dexterity {2, 9}
   - Vitality {2, 9}
   - Intelligence {2, 9}
   - Reflex {2, 9}",,- Global Loot,
Savage Shield,3: Legendary,"{14, 93}","{14, 93}","- Vitality {3, 18}","- Additional Weapon Damage {6, 36}
   - Physical Damage {2,10}%","- Hod
   - Lagertha
   - Ragnar","- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Silver Kite Shield,3: Legendary,"{14, 93}","{14, 93}","- Vitality {2, 9}
   - Reflex {2, 9}","- 10% chance to cast Level [level value] {SKL=Blinding Light} when 
   struck.",- Global Loot,
Thorn Shield,3: Legendary,"{12, 80}","{12, 80}","- Vitality {3, 18}",- Attackers gain 4 stacks of poison.,"- The Risen Witch (Event)
   - The Witch
   - Twisted Soul of the Swamp
   - Twisted Treant","- SunkenSwamplands Day
   - SunkenSwamplands Night"
Tribal Guardian,3: Legendary,,"{24, 160}",,"- Resist Cold 10%
   - Resist Fire 10%
   - Resist Lightning 10%",- Avatar of Xotec,"- WaterTempleRuins Night
   - WaterTempleRuins Day
   - EmeraldJungle Night
   - EmeraldJungle Day"
Anthulk Shell,4: Mythic,"{21, 143}","{13, 86}","- Might {2, 10}
   - Vitality {2, 10}",- 25% Chance when hit to cast Level [level value] {SKL=Ankheg Spines}.,- Anthulk,- ForgottenMines Day
Crimson Guard,4: Mythic,"{19, 129}","{19, 129}","- Vitality {3, 20}","- Return Damage Physical Source[""Armor""] * .02f
   - Gain Added Return Damage Physical equal to 2% of your Armor.",- The Baron,- CastleGloom Day
Dead One's Head,4: Mythic,"{9, 58}","{17, 115}","- Intelligence {3, 20}","- Summon Limit 1
   - Summon Resistance 10%
   - Summon Health {3,15}%","- The Dead One
   - The Bishop (Event)
   - The Butcher","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"
Demon Skull,4: Mythic,"{13, 86}","{21, 143}",,"- Fire Damage {2.5,12.5}%
   - Return Damage Fire {3, 34}
   - 10% chance when struck to cast Level [level value] {SKL=Burning 
   Ground}.",- The Broker,- Emberlands Day
Dwarven Defender,4: Mythic,"{17, 115}","{17, 115}","- Vitality {2, 10}","- Resist Cold 10%
   - Resist Fire 10%
   - Resist Lightning 10%
   - Resist Physical 10%
   - *""Guardian bold, in steel and gold, against despair, a shield does 
   hold.*",- Mountain King Ironheart,- DwarvenHalls Day
Gilded Kite Shield,4: Mythic,"{17, 115}","{17, 115}","- Might {2, 10}
   - Vitality {3, 15}","- 10% chance upon getting hit to cast Level [level value] {SKL=Shield of 
   Light}.","- Olgoi, Devourer of Treasure",- DwarvenHalls Day
Ivory Aegis,4: Mythic,"{7, 43}","{7, 43}","- Might {2, 10}
   - Vitality {2, 10}","- Holy Power {2.5,12.5}%
   - 10% chance when hit to cast Level [level value] {SKL=Mass Cure}.",- Global Loot,
Westarch Defender,4: Mythic,"{17, 115}","{17, 115}","- Might {2, 10}
   - Vitality {2, 10}",- 10% chance to cast Level [level value] {SKL=Howl} when struck.,"- Hodr, the Frost Giant (Event)","- FrostwroughtMountain Night
   - FrostwroughtMountain Day"
Ilsalay's Indestructible Aegis,4: Mythic,{115},{72},"- Might {29}
   - Vitality {29}",- Grants the passive skill Indestructible,- The Witch,"- SunkenSwamplands Day
   - SunkenSwamplands Night"`,k1=`Name,Rarity,Armor,Magic Armor,Base Stats,Attributes,Dropped By,Locations\r
Simple Hood,0: Common,"{6, 41}","{3, 21}",,,- Global Loot,\r
Traveler's Hat,1: Uncommon,"{4, 23}","{7, 45}","- Vitality {2, 8}
   - Intelligence {2, 8}
   - Reflex {2, 8}",,- Global Loot,\r
Barbute,1: Uncommon,"{15, 101}","{14, 90}","- Might {2, 8}
   - Vitality {2, 8}",,- Global Loot,\r
Blood Mask,1: Uncommon,"{4, 23}","{4, 23}","- Dexterity {4, 23}
   - Reflex {2, 8}",,- Global Loot,\r
Canary Chapeau,1: Uncommon,"{5, 34}","{5, 34}","- Vitality {2, 8}
   - Intelligence {2, 8}
   - Reflex {3, 15}",,- Global Loot,\r
Canary Feathered Beret,1: Uncommon,"{4, 23}","{4, 23}","- Vitality {3, 15}
   - Intelligence {4, 23}",,- Global Loot,\r
Chain Coif,1: Uncommon,"{14, 90}","{15, 101}","- Might {3, 15}",,- Global Loot,\r
Chain Helm,1: Uncommon,"{10, 68}","{17, 113}","- Vitality {2, 8}
   - Reflex {2, 8}",,- Global Loot,\r
Enchanter's Hat,1: Uncommon,"{4, 23}","{4, 23}","- Might {3, 15}
   - Intelligence {4, 23}",,- Global Loot,\r
Leather Hood,0: Common,"{2, 11}","{2, 11}","- Vitality {1, 7}
   - Reflex {1, 7}",,- Global Loot,\r
Navy Chapeau,1: Uncommon,"{5, 34}","{5, 34}","- Might {2, 8}
   - Vitality {2, 8}
   - Intelligence {2, 8}
   - Reflex {2, 8}",,- Global Loot,\r
Navy Feathered Beret,1: Uncommon,"{4, 23}","{4, 23}","- Might {2, 8}
   - Vitality {3, 15}
   - Intelligence {3, 15}",,- Global Loot,\r
Olive Chapeau,1: Uncommon,"{5, 34}","{5, 34}","- Dexterity {3, 15}
   - Vitality {2, 8}
   - Reflex {2, 8}",,- Global Loot,\r
Olive Feathered Beret,1: Uncommon,"{4, 23}","{4, 23}","- Dexterity {4, 23}
   - Vitality {2, 8}
   - Intelligence {2, 8}",,- Global Loot,\r
Outlaw Mask,1: Uncommon,"{6, 40}","{5, 29}","- Might {2, 12}
   - Dexterity {2, 12}
   - Reflex {2, 8}",,- Global Loot,\r
Paladin's Helm,1: Uncommon,"{10, 68}","{10, 68}","- Might {2, 8}
   - Vitality {2, 8}
   - Intelligence {2, 8}",,- Paladin,"- ForgottenMines Day
   - DwarvenHalls Day
   - CastleGloom Day"\r
Sand Sultan Wrap,1: Uncommon,"{4, 23}","{4, 23}","- Dexterity {2, 8}
   - Vitality {3, 15}
   - Reflex {3, 15}",,- Global Loot,\r
Scarlet Chapeau,1: Uncommon,"{5, 34}","{5, 34}","- Might {3, 15}
   - Vitality {2, 8}
   - Reflex {2, 8}",,- Global Loot,\r
Scarlet Feathered Beret,1: Uncommon,"{4, 23}","{4, 23}","- Might {3, 15}
   - Vitality {2, 8}
   - Intelligence {3, 15}",,- Global Loot,\r
Thief's Hood,1: Uncommon,"{5, 34}","{5, 34}","- Dexterity {4, 23}
   - Reflex {2, 8}",,- Thief,"- EmeraldJungle Night
   - EmeraldJungle Day"\r
Violet Cap,1: Uncommon,"{5, 34}","{5, 34}","- Might {2, 12}
   - Dexterity {2, 12}
   - Reflex {2, 8}",,- Global Loot,\r
Violet Feathered Beret,1: Uncommon,"{4, 23}","{4, 23}","- Might {2, 12}
   - Dexterity {2, 12}
   - Intelligence {3, 15}",,- Global Loot,\r
Archer's Cap,2: Rare,"{4, 25}","{4, 25}","- Might {2, 9}
   - Dexterity {2, 9}
   - Vitality {2, 9}","- Skill Range 1
   - Damage to Physical {1, 14}",- Global Loot,\r
Assassin's Mask,2: Rare,"{4, 25}","{4, 25}","- Dexterity {4, 25}
   - Vitality {2, 9}
   - Reflex {2, 9}",- 10% chance to cast Hide in Shadows whenever an enemy dies.,- Assassin,"- WaterTempleRuins Night
   - WaterTempleRuins Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Assistant's Cap,2: Rare,"{3, 15}","{6, 35}","- Dexterity {6, 41}",,- Global Loot,\r
Crusader's Chain Hood,2: Rare,"{13, 86}","{17, 111}","- Might {2, 9}
   - Vitality {2, 9}",- Movement Points 1,- Crusader,"- SunkenSwamplands Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day
   - SunkenSwamplands Night"\r
Cultist Hood,2: Rare,"{2, 13}","{6, 37}","- Might {2, 9}
   - Intelligence {2, 9}","- Summon Damage {2,10}%
   - Summon Health {2,10}%",- Global Loot,\r
Emerald Cross Cap,2: Rare,"{6, 37}","{6, 37}","- Dexterity {4, 25}
   - Reflex {2, 9}",,- Global Loot,\r
Emerald Cross Helm,2: Rare,"{15, 98}","{8, 49}","- Might {3, 17}
   - Vitality {3, 17}",,- Global Loot,\r
Enforcer Helm,2: Rare,"{15, 98}","{15, 98}","- Might {3, 17}
   - Vitality {2, 9}",,- Emperor Marcus,\r
Frog Helm,2: Rare,"{15, 98}","{15, 98}","- Dexterity {2, 9}
   - Vitality {3, 17}",,- The Black Knight,"- SunkenSwamplands Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day
   - SunkenSwamplands Night"\r
Full Plate Helm,2: Rare,"{13, 86}","{13, 86}",,"- Resist Cold 5%
   - Resist Fire 5%
   - Resist Lightning 5%
   - Resist Physical 5%",- The Baron,- CastleGloom Day\r
Gentleman's Cap,2: Rare,"{8, 49}","{8, 49}","- Vitality {2, 9}
   - Reflex {3, 17}","- Dodge Counter Damage {6,30}%",- Global Loot,\r
Great Helm,2: Rare,"{17, 111}","{17, 111}","- Might {3, 17}
   - Vitality {2, 9}",,"- Anthulk
   - The Minotaur",- ForgottenMines Day\r
Magus Hat,2: Rare,"{3, 20}","{5, 30}","- Might {2, 9}
   - Dexterity {2, 9}
   - Intelligence {2, 9}","- Cold Damage {2,10}%
   - Fire Damage {2,10}%
   - Lightning Damage {2,10}%","- Crystal Golem
   - Dwarven Warmachine
   - Spellweaver Flamebearer
   - Spellweaver Frostbringer","- WaterTempleRuins Night
   - ForgottenMines Day
   - DwarvenHalls Day
   - WaterTempleRuins Day"\r
Pupil's Cap,2: Rare,"{3, 15}","{6, 35}","- Might {6, 41}",,- Unchained Efreet,"- WyrmrestDesert Night
   - WyrmrestDesert Day"\r
Ranger Hood,2: Rare,"{4, 25}","{4, 25}","- Might {3, 21}
   - Dexterity {3, 21}",- Skill Range 1,- Ranger,"- SunkenSwamplands Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day
   - SunkenSwamplands Night"\r
Scholar's Hat,2: Rare,"{3, 15}","{6, 35}","- Intelligence {6, 41}",,"- Lady of the Well
   - The Scarecrow
   - The Sultan","- SunkenSwamplands Night
   - WyrmrestDesert Day
   - CastleGloom Day
   - WyrmrestDesert Night
   - SunkenSwamplands Day"\r
Smouldering Hat,2: Rare,"{5, 30}","{5, 30}","- Might {3, 17}
   - Intelligence {3, 17}","- Fire Damage {3,15}%",- The Ember King,- Emberlands Day\r
Stalker's Hood,2: Rare,"{5, 30}","{5, 30}","- Dexterity {5, 33}
   - Reflex {2, 9}",- 10% chance to cast Stealth on turn start.,- Blood Mask Boss,"- FreewindForest Night
   - FreewindForest Day"\r
Tlaloc Horns,2: Rare,"{4, 25}","{4, 25}","- Dexterity {4, 25}
   - Intelligence {2, 9}","- Lightning Damage {3,15}%","- Tlaloc the Storm
   - Tlaloc the Storm","- WaterTempleRuins Night
   - WaterTempleRuins Day
   - EmeraldJungle Night
   - EmeraldJungle Day"\r
Blackguard Casque,3: Legendary,"{14, 93}","{14, 93}","- Might {3, 18}
   - Vitality {2, 9}
   - Reflex {2, 9}",,- The Black Knight,"- SunkenSwamplands Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day
   - SunkenSwamplands Night"\r
Bladed Helm,3: Legendary,"{12, 80}","{12, 80}","- Vitality {3, 18}","- Return Damage Physical {3, 31}","- The Gobfather
   - The Pale Goblin","- DwarvenHalls Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day"\r
Dark Steel Helm,3: Legendary,"{14, 93}","{14, 93}","- Might {2, 9}","- Physical Damage {4,20}%",- The Dead One,"- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"\r
Dwarven Helm,3: Legendary,"{16, 107}","{16, 107}","- Vitality {2, 9}","- Physical Damage {4,20}%","- Dwarven Shield
   - Dwarven Sword Maiden
   - Mountain King Ironheart",- DwarvenHalls Day\r
El Capitan,3: Legendary,"{8, 54}","{8, 54}","- Vitality {2, 9}
   - Reflex {3, 18}","- Dodge Counter Damage {8,40}%",- Global Loot,\r
Elemental Hood,3: Legendary,"{4, 27}","{4, 27}",,"- Max Mana {20, 133}
   - Damage to Cold {1, 12}
   - Damage to Fire {1, 12}
   - Damage to Lightning {1, 12}",- Global Loot,\r
Fire Hood,3: Legendary,"{4, 27}","{4, 27}",,"- Max Mana {20, 133}
   - Damage to Fire {1, 16}",- Global Loot,\r
Flame Hat,3: Legendary,"{4, 27}","{4, 27}","- Might {3, 18}
   - Vitality {2, 9}
   - Intelligence {2, 9}","- Fire Damage {4,20}%","- Lord Infernicus (Event)
   - The Forgemaster",- Emberlands Day\r
Frost Hat,3: Legendary,"{4, 27}","{4, 27}","- Might {2, 9}
   - Vitality {2, 9}
   - Intelligence {3, 18}","- Cold Damage {4,20}%",- The Dusk King,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Golden Bear Head,3: Legendary,"{12, 80}","{12, 80}","- Vitality {3, 18}","- Resist Physical 10%
   - Damage to Physical {1, 16}","- Hod
   - Lagertha
   - Ragnar","- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Ice Hood,3: Legendary,,,,"- Max Mana {20, 133}
   - Damage to Cold {1, 16}",- Global Loot,\r
Knight's Plate Helm,3: Legendary,"{14, 93}","{14, 93}",,"- Resist Cold 8%
   - Resist Fire 8%
   - Resist Lightning 8%
   - Resist Physical 8%","- Lady of the Well
   - The Butcher
   - The Jester
   - The Scarecrow
   - Knight","- FreewindForest Night
   - SunkenSwamplands Night
   - FreewindForest Day
   - CastleGloom Day
   - Emberlands Day
   - SunkenSwamplands Day"\r
Lightning Hood,3: Legendary,"{4, 27}","{4, 27}",,"- Max Mana {20, 133}
   - Damage to Lightning {1, 16}",- Global Loot,\r
Marksman's Cap,3: Legendary,"{4, 27}","{4, 27}","- Might {2, 9}
   - Dexterity {2, 9}","- Skill Range 2
   - Basic attacks have a 20% chance to proc an additional attack once per 
   turn.",- Global Loot,\r
Plague Mask,3: Legendary,"{4, 27}","{4, 27}","- Vitality {4, 27}
   - Reflex {3, 18}","- Shadow Damage {4,20}%
   - Attacks apply 1 stack of poison.","- Plague Doctor
   - The Risen Witch (Event)
   - The Witch
   - Twisted Soul of the Swamp","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"\r
Praetorian Helm,3: Legendary,"{10, 67}","{14, 93}","- Might {2, 9}
   - Dexterity {2, 9}
   - Vitality {2, 9}",- Skill Range 1,"- Emperor Marcus
   - Olgoi, Devourer of Treasure",- DwarvenHalls Day\r
Shadowstalker Mask,3: Legendary,"{4, 27}","{4, 27}","- Dexterity {7, 45}
   - Reflex {2, 9}",- 15% chance to cast Stealth on turn start.,- Global Loot,\r
Stag Helm,3: Legendary,"{16, 107}","{16, 107}","- Vitality {2, 9}
   - Reflex {3, 18}",,- Global Loot,\r
Summoner's Hat,3: Legendary,"{4, 22}","{5, 32}","- Might {2, 9}
   - Intelligence {2, 9}","- Summon Damage {3,15}%
   - Summon Health {3,15}%","- The Dusk King
   - The Dead One","- FrostwroughtMountain Night
   - SunkenSwamplands Night
   - FrostwroughtMountain Day
   - CastleGloom Day
   - SunkenSwamplands Day"\r
Sunwalker Hood,3: Legendary,"{4, 22}","{5, 32}","- Might {3, 18}
   - Intelligence {3, 18}","- Holy Power {4,20}%",- Valkyrie Commander,"- WaterTempleRuins Night
   - WaterTempleRuins Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Thunder Hat,3: Legendary,"{4, 27}","{4, 27}","- Dexterity {3, 18}
   - Vitality {2, 9}
   - Intelligence {2, 9}","- Lightning Damage {4,20}%",- Tlaloc the Storm,"- WaterTempleRuins Night
   - WaterTempleRuins Day
   - EmeraldJungle Night
   - EmeraldJungle Day"\r
Wizard's Hat,3: Legendary,"{3, 16}","{6, 38}","- Might {2, 9}
   - Dexterity {2, 9}
   - Vitality {2, 9}
   - Intelligence {2, 9}","- Cold Damage {3,15}%
   - Fire Damage {3,15}%
   - Lightning Damage {3,15}%","- Crystal Golem
   - Spellweaver Stormcaller","- WaterTempleRuins Night
   - ForgottenMines Day
   - WaterTempleRuins Day"\r
Adamant Helm,4: Mythic,"{21, 143}","{21, 143}","- Might {2, 10}
   - Vitality {2, 10}",- Damage Reduction 10%,- Dwarven Warmachine,- DwarvenHalls Day\r
Arcane Veil,4: Mythic,"{4, 23}","{4, 23}","- Might {10, 67}",,"- Unchained Efreet
   - The Ember King","- Emberlands Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day"\r
Bladed Great Helm,4: Mythic,"{17, 115}","{17, 115}","- Might {2, 10}
   - Vitality {3, 20}","- Return Damage Physical Source[""Armor""] * .02f
   - Gain Added Return Damage Physical equal to 2% of your Armor.",- Global Loot,\r
Bone Jester Mask,4: Mythic,"{9, 58}","{9, 58}","- Vitality {2, 10}
   - Reflex {3, 20}","- Dodge Counter Damage {10,50}%",- The Jester,"- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"\r
Crown of Mana,4: Mythic,,"{9, 58}","- Intelligence {10, 67}",,"- Olgoi, Devourer of Treasure",- DwarvenHalls Day\r
Dead One's Mind,4: Mythic,"{5, 29}","{5, 29}","- Vitality {2, 10}
   - Intelligence {2, 10}","- Summon Resistance 10%
   - Summon Damage {4,20}%
   - Summon Health {4,20}%",- The Countess,- CastleGloom Day\r
Discipline,4: Mythic,"{5, 29}","{5, 29}","- Vitality {10, 67}",,- Global Loot,\r
Ember King's Will,4: Mythic,"{9, 58}","{9, 58}","- Might {3, 15}
   - Vitality {3, 15}","- Fire Damage {5,25}%
   - The wearer gains Level [level value] {SKL=Aura of Flame}.",- The Ember King,- Emberlands Day\r
Ghost Face,4: Mythic,"{5, 29}","{5, 29}","- Reflex {10, 67}",,- Global Loot,\r
Golden Valkyrie Helm,4: Mythic,"{9, 58}","{9, 58}","- Might {2, 10}
   - Dexterity {2, 10}","- Skill Range 3
   - Basic attacks have a 25% chance to proc an additional attack once per 
   turn.",- Valkyrie Commander,"- WaterTempleRuins Night
   - WaterTempleRuins Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Leviathan Skull,4: Mythic,"{17, 115}","{17, 115}","- Might {5, 29}
   - Vitality {3, 15}","- Health Per Turn {7, 84}","- Black Dragon
   - Blue Dragon
   - Green Dragon
   - Red Dragon","- FreewindForest Night
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day
   - FreewindForest Day
   - CastleGloom Day
   - Emberlands Day"\r
Night Stalker Mask,4: Mythic,"{5, 29}","{5, 29}","- Dexterity {7, 48}
   - Reflex {3, 20}",- 20% chance to cast Stealth on turn start.,"- Samara the Vampire (Event)
   - The Duke",- CastleGloom Day\r
Ninja Hood,4: Mythic,"{5, 29}","{5, 29}","- Dexterity {10, 67}",,- Ronin,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Rage Casque,4: Mythic,"{9, 58}","{9, 58}","- Might {3, 20}
   - Vitality {3, 20}",- The wearer gains Berserker's Rage.,- Maximus,\r
Shako,4: Mythic,"{5, 29}","{5, 29}","- Might {1, 5}
   - Dexterity {1, 5}
   - Vitality {1, 5}
   - Intelligence {1, 5}
   - Reflex {1, 5}","- Max Health 10%
   - Max Mana 10%
   - Damage and Healing {3,15}%
   - Damage Reduction 5%","- Black Dragon
   - Blue Dragon
   - Green Dragon
   - Red Dragon","- FreewindForest Night
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day
   - FreewindForest Day
   - CastleGloom Day
   - Emberlands Day"\r
Slayer Mask,4: Mythic,"{17, 115}","{17, 115}","- Might {3, 15}
   - Vitality {3, 15}","- Physical Damage {5,25}%
   - % Life Steal 3",- The Baron,- CastleGloom Day\r
Wolfshead Hood,4: Mythic,"{9, 58}","{9, 58}","- Might {2, 10}
   - Vitality {2, 10}
   - Reflex {2, 10}","- Damage to Physical {1, 17}","- Hod
   - Lagertha
   - Ragnar","- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Hod's Hood,0: Common,"{6, 41}","{6, 41}",,,- Global Loot,\r
Tundra Helm,0: Common,"{6, 41}","{6, 41}",,,- Global Loot,\r
Woodland Helm,0: Common,"{6, 41}","{6, 41}",,,- Global Loot,`,V1=`Name,Rarity,Armor,Magic Armor,Base Stats,Attributes,Dropped By,Locations\r
Leather Doublet,0: Common,"{6, 41}",,"- Might {1, 7}
   - Reflex {1, 7}",,- Global Loot,\r
Leather Jerkin,0: Common,"{2, 11}","{2, 11}","- Might {2, 14}",,- Global Loot,\r
Novice Gi,0: Common,"{3, 21}","{3, 21}",,"- Max Health {15, 102}",- Global Loot,\r
Primitive Rags,0: Common,"{6, 41}",,,,- Global Loot,\r
Simple Robe,0: Common,"{3, 21}","{3, 21}","- Intelligence {2, 14}",,- Global Loot,\r
Toga,0: Common,,"{6, 41}",,,- Global Loot,\r
Traveler's Coat,0: Common,"{6, 41}","{3, 21}","- Vitality {2, 14}",,- Global Loot,\r
Blood Mask Tunic,1: Uncommon,"{5, 34}","{5, 34}","- Might {2, 12}
   - Dexterity {2, 12}
   - Reflex {2, 8}",,- Global Loot,\r
Breastplate,1: Uncommon,"{14, 90}","{14, 90}","- Might {2, 8}","- Return Damage Physical {2, 26}",- Global Loot,\r
Canary Coat,1: Uncommon,"{5, 34}","{5, 34}","- Vitality {2, 12}
   - Intelligence {2, 12}
   - Reflex {2, 8}",,- Global Loot,\r
Canary Tunic,1: Uncommon,"{4, 23}","{4, 23}","- Dexterity {3, 15}
   - Intelligence {4, 23}",,- Global Loot,\r
Chain Mail,1: Uncommon,"{10, 68}","{17, 113}","- Might {2, 8}
   - Vitality {2, 8}",,- Global Loot,\r
Competitor's Garb,1: Uncommon,"{4, 23}","{4, 23}",,"- Max Health {17, 113}
   - Additional Weapon Damage {1, 13}",- Global Loot,\r
Enchanter's Robe,1: Uncommon,"{3, 18}","{4, 27}","- Might {3, 15}
   - Intelligence {4, 23}",,- Global Loot,\r
Fire Garb,1: Uncommon,"{4, 23}","{4, 23}",,"- Max Mana {17, 113}
   - Damage to Fire {1, 13}",- Global Loot,\r
Humble Garb,1: Uncommon,"{4, 23}","{4, 23}",,"- Max Mana {17, 113}
   - Healing Given {1, 13}",- Global Loot,\r
Ice Garb,1: Uncommon,"{4, 23}","{4, 23}",,"- Max Mana {17, 113}
   - Damage to Cold {1, 13}",- Global Loot,\r
Leather Armor,1: Uncommon,"{7, 45}","{4, 23}","- Dexterity {3, 15}
   - Vitality {2, 8}
   - Reflex {2, 8}",,- Global Loot,\r
Lightning Garb,1: Uncommon,"{4, 23}","{4, 23}",,"- Max Mana {17, 113}
   - Damage to Lightning {1, 13}",- Global Loot,\r
Navy Coat,1: Uncommon,"{5, 34}","{5, 34}","- Might {2, 8}
   - Vitality {3, 15}
   - Reflex {2, 8}",,- Global Loot,\r
Navy Robes,1: Uncommon,"{4, 23}","{4, 23}","- Might {2, 8}
   - Vitality {3, 15}
   - Intelligence {3, 15}",,- Global Loot,\r
Olive Coat,1: Uncommon,"{4, 23}","{7, 45}","- Dexterity {3, 15}
   - Vitality {2, 8}
   - Reflex {2, 8}",,- Global Loot,\r
Olive Tunic,1: Uncommon,"{5, 34}","{5, 34}","- Dexterity {3, 15}
   - Intelligence {2, 8}
   - Reflex {2, 8}",,- Global Loot,\r
Outlaw Coat,1: Uncommon,"{7, 45}","{4, 23}","- Might {2, 8}
   - Dexterity {2, 8}
   - Vitality {2, 8}
   - Reflex {2, 8}",,- Global Loot,\r
Sand Sultan Tunic,1: Uncommon,"{5, 34}","{5, 34}","- Dexterity {3, 15}
   - Intelligence {2, 8}
   - Reflex {2, 8}",,- Global Loot,\r
Scarlet Coat,1: Uncommon,"{4, 23}","{4, 23}","- Might {3, 15}
   - Vitality {2, 8}
   - Reflex {3, 15}",,- Global Loot,\r
Scarlet Robes,1: Uncommon,"{4, 23}","{4, 23}","- Might {4, 23}
   - Intelligence {3, 15}",,- Global Loot,\r
Stone Wraps,1: Uncommon,"{10, 68}","{10, 68}",,"- Max Health {17, 113}",- Global Loot,\r
Studded Leather,1: Uncommon,"{7, 45}","{7, 45}","- Might {2, 8}
   - Dexterity {3, 15}
   - Reflex {2, 8}",,- Global Loot,\r
Tunic,1: Uncommon,"{4, 23}","{4, 23}","- Vitality {2, 12}
   - Intelligence {2, 12}
   - Reflex {2, 8}",,- Global Loot,\r
Violet Coat,1: Uncommon,"{4, 23}","{7, 45}","- Might {2, 8}
   - Dexterity {2, 8}
   - Intelligence {2, 8}
   - Reflex {2, 8}",,- Global Loot,\r
Violet Robes,1: Uncommon,"{4, 23}","{4, 23}","- Might {3, 15}
   - Intelligence {2, 8}
   - Reflex {3, 15}",,- Global Loot,\r
Animal Furs,2: Rare,"{8, 49}","{8, 49}","- Might {2, 9}
   - Vitality {2, 9}
   - Reflex {2, 9}","- Damage to Physical {1, 14}","- Hod
   - Lagertha
   - Ragnar
   - Anthulk
   - The Minotaur","- ForgottenMines Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Archer's Garb,2: Rare,"{4, 25}","{4, 25}","- Might {2, 9}
   - Dexterity {2, 9}
   - Vitality {2, 9}","- Skill Range 1
   - Damage to Physical {1, 14}",- Global Loot,\r
Assassin's Garb,2: Rare,"{4, 25}","{4, 25}","- Dexterity {4, 25}
   - Vitality {2, 9}
   - Reflex {2, 9}",- 10% chance to cast Hide in Shadows whenever an enemy dies.,- Assassin,"- WaterTempleRuins Night
   - WaterTempleRuins Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Assistant's Attire,2: Rare,"{3, 15}","{6, 35}","- Dexterity {6, 41}",,- Global Loot,\r
Challenger's Garb,2: Rare,"{4, 25}","{4, 25}",,"- Max Health {18, 123}
   - Additional Weapon Damage {1, 14}",- Ronin,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Cleric's Garb,2: Rare,"{9, 62}","{9, 62}","- Might {3, 17}
   - Vitality {3, 17}","- Holy Power {3,15}%","- Cleric
   - Valkyrie Commander","- WaterTempleRuins Night
   - WaterTempleRuins Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Crimson Coat,2: Rare,"{4, 25}","{4, 25}","- Might {3, 17}
   - Dexterity {2, 13}
   - Reflex {3, 17}",,"- Samara the Vampire (Event)
   - The Duke",- CastleGloom Day\r
Crusader Chainmail,2: Rare,"{15, 98}","{17, 111}","- Might {2, 9}
   - Vitality {2, 9}",- Movement Points 1,"- The Dusk King
   - Crusader","- FrostwroughtMountain Night
   - FrostwroughtMountain Day
   - SunkenSwamplands Night
   - WyrmrestDesert Day
   - WyrmrestDesert Night
   - SunkenSwamplands Day"\r
Cultist Robes,2: Rare,"{2, 13}","{6, 37}","- Vitality {2, 9}
   - Intelligence {2, 9}","- Summon Damage {2,10}%
   - Summon Health {2,10}%
   - 10% chance upon being hit to grant Ghost Armor.","- Dark Cultist Attendant
   - Dark Cultist Conjuror
   - Dark Cultist Servant
   - Herald of the Abyss
   - The Dead One","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"\r
Emerald Cross Tunic,2: Rare,"{11, 74}","{11, 74}","- Dexterity {3, 17}
   - Vitality {3, 17}",,- Councilor Jahsun,"- EmeraldJungle Night
   - EmeraldJungle Day"\r
Fighter's Half-Plate,2: Rare,"{15, 98}","{15, 98}","- Might {2, 9}
   - Vitality {2, 9}",- Resist Physical 8%,"- Hodr, the Frost Giant (Event)
   - Fighter","- FrostwroughtMountain Night
   - FrostwroughtMountain Day
   - CastleGloom Day
   - ForgottenMines Day
   - DwarvenHalls Day"\r
Fire Wraps,2: Rare,"{4, 25}","{4, 25}",,"- Max Mana {18, 123}
   - Damage to Fire {1, 14}","- The Grandmaster
   - Lord Infernicus (Event)
   - The Forgemaster","- Emberlands Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Full Platemail,2: Rare,"{13, 86}","{13, 86}",,"- Resist Cold 5%
   - Resist Fire 5%
   - Resist Lightning 5%
   - Resist Physical 5%",- The Baron,- CastleGloom Day\r
Gentleman's Vest,2: Rare,"{8, 49}","{8, 49}","- Vitality {2, 9}
   - Reflex {3, 17}","- Dodge Counter Damage {6,30}%",- Blood Mask Boss,"- FreewindForest Night
   - FreewindForest Day"\r
Guardian's Way,2: Rare,"{4, 25}","{4, 25}","- Might {3, 17}","- Max Health {18, 123}
   - Armor Source[""Might""] * 1f%
   - Magic Armor Source[""Might""] * 1f
   - Gain Armor and Magic Armor equal to your Might.",- Global Loot,\r
Hunter's Trappings,2: Rare,"{8, 49}","{8, 49}","- Vitality {4, 25}","- Damage to Physical {1, 14}",- Huntress,"- ForgottenMines Day
   - DwarvenHalls Day
   - CastleGloom Day"\r
Ice Wraps,2: Rare,"{4, 25}","{4, 25}",,"- Max Mana {18, 123}
   - Damage to Cold {1, 14}",- The Grandmaster,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Lightning Wraps,2: Rare,"{4, 25}","{4, 25}",,"- Max Mana {18, 123}
   - Damage to Lightning {1, 14}",- The Grandmaster,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Lionheart Breastplate,2: Rare,"{11, 74}","{11, 74}","- Might {3, 17}
   - Vitality {3, 17}",,- Global Loot,\r
Lionheart Leather,2: Rare,"{8, 49}","{8, 49}","- Dexterity {2, 9}
   - Vitality {2, 9}
   - Reflex {2, 9}",,- Global Loot,\r
Lionheart Plate,2: Rare,"{18, 123}","{18, 123}","- Might {2, 9}
   - Vitality {2, 9}",,- Emperor Marcus,\r
Magus Robe,2: Rare,"{3, 20}","{5, 30}","- Might {2, 9}
   - Dexterity {2, 9}
   - Intelligence {2, 9}","- Cold Damage {2,10}%
   - Fire Damage {2,10}%
   - Lightning Damage {2,10}%","- Spellweaver Flamebearer
   - Spellweaver Frostbringer
   - Spellweaver Stormcaller","- WaterTempleRuins Night
   - WaterTempleRuins Day"\r
Nobleman's Vest,2: Rare,"{8, 49}","{8, 49}","- Might {2, 9}
   - Dexterity {2, 9}
   - Reflex {2, 9}","- Dodge Counter Damage {6,30}%",- Global Loot,\r
Paladin Platemail,2: Rare,"{15, 98}","{15, 98}","- Might {2, 9}
   - Vitality {2, 9}",- Grants the wearer the ability to cast Healing Hand.,- Paladin,"- ForgottenMines Day
   - DwarvenHalls Day
   - CastleGloom Day"\r
Peaceful Garb,2: Rare,,,,"- Max Mana {18, 123}
   - Healing Given {1, 14}",- Global Loot,\r
Pupil's Attire,2: Rare,"{3, 15}","{6, 35}","- Might {6, 41}",,- Unchained Efreet,"- WyrmrestDesert Night
   - WyrmrestDesert Day"\r
Ranger Tunic,2: Rare,"{4, 25}","{4, 25}","- Might {3, 21}
   - Dexterity {3, 21}",- Skill Range 1,- Ranger,"- SunkenSwamplands Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day
   - SunkenSwamplands Night"\r
Scholar's Attire,2: Rare,"{3, 15}","{6, 35}","- Intelligence {6, 41}",,"- The Countess
   - Lady of the Well
   - The Scarecrow
   - The Sultan","- SunkenSwamplands Night
   - WyrmrestDesert Day
   - CastleGloom Day
   - WyrmrestDesert Night
   - SunkenSwamplands Day"\r
Smouldering Robes,2: Rare,"{5, 30}","{5, 30}","- Might {2, 9}
   - Vitality {2, 9}
   - Intelligence {2, 9}","- Fire Damage {3,15}%","- Lord Infernicus (Event)
   - The Ember King
   - The Forgemaster",- Emberlands Day\r
Spikemail,2: Rare,"{17, 111}","{17, 111}","- Vitality {3, 17}","- Return Damage Physical {2, 29}","- The Gobfather
   - Azug Spikefist
   - The Pale Goblin
   - Warrior
   - The Risen Witch (Event)
   - The Witch
   - Twisted Soul of the Swamp","- SunkenSwamplands Night
   - EmeraldJungle Day
   - WyrmrestDesert Day
   - DwarvenHalls Day
   - WyrmrestDesert Night
   - EmeraldJungle Night
   - SunkenSwamplands Day"\r
Stalker's Leather,2: Rare,"{5, 30}","{5, 30}","- Dexterity {5, 33}
   - Reflex {2, 9}",- 10% chance to cast Stealth on turn start.,- Global Loot,\r
Student's Gi,2: Rare,"{4, 25}","{4, 25}","- Might {2, 9}
   - Dexterity {2, 9}
   - Vitality {2, 9}
   - Intelligence {2, 9}
   - Reflex {2, 9}",,- Global Loot,\r
Swashbuckler Vest,2: Rare,"{8, 49}","{8, 49}","- Might {2, 9}
   - Dexterity {2, 9}
   - Reflex {3, 17}",,"- Admiral Blackbeard
   - The Prospector
   - Rogue","- FreewindForest Night
   - WaterTempleRuins Night
   - FreewindForest Day
   - ForgottenMines Day
   - Emberlands Day"\r
Thief's Garb,2: Rare,"{5, 30}","{5, 30}","- Dexterity {3, 17}
   - Vitality {2, 9}
   - Reflex {2, 9}",- Grants the ability Steal Action.,- Thief,"- EmeraldJungle Night
   - EmeraldJungle Day"\r
Tlaloc Garments,2: Rare,"{3, 15}","{6, 35}","- Dexterity {4, 25}
   - Intelligence {2, 9}","- Lightning Damage {3,15}%",- Tlaloc the Storm,"- WaterTempleRuins Night
   - WaterTempleRuins Day
   - EmeraldJungle Night
   - EmeraldJungle Day"\r
Traveler's Robe,2: Rare,"{4, 25}","{11, 74}","- Vitality {3, 17}
   - Reflex {3, 17}",,- Global Loot,\r
Warrior's Path,2: Rare,"{4, 25}","{4, 25}","- Might {6, 41}","- Max Health {18, 123}",- Ronin,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Arena Plate,3: Legendary,"{16, 107}","{16, 107}","- Might {2, 9}
   - Reflex {2, 9}","- Resist Physical 10%
   - Casts Warrior's Boon on the wearer when dropped below 30% hp. Can 
   trigger once every 5 turns.","- Lucilla
   - Proximo
   - Azug Spikefist",\r
Blackguard Chainmail,3: Legendary,"{14, 93}","{14, 93}","- Might {3, 18}
   - Vitality {2, 9}
   - Reflex {2, 9}",,- The Black Knight,"- SunkenSwamplands Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day
   - SunkenSwamplands Night"\r
Bladed Mail,3: Legendary,"{16, 107}","{16, 107}","- Vitality {3, 18}","- Return Damage Physical {3, 31}",- Azug Spikefist,\r
Champion's Garb,3: Legendary,"{4, 27}","{4, 27}",,"- Max Health {20, 133}
   - Additional Weapon Damage {1, 16}",- Global Loot,\r
Dark Steel Platemail,3: Legendary,"{14, 93}","{14, 93}","- Might {2, 9}","- Physical Damage {4,20}%",- Global Loot,\r
Duelist's Vest,3: Legendary,"{8, 54}","{8, 54}","- Vitality {2, 9}
   - Reflex {3, 18}","- Dodge Counter Damage {8,40}%",- Blood Mask Boss,"- FreewindForest Night
   - FreewindForest Day"\r
Dwarven Platemail,3: Legendary,"{16, 107}","{16, 107}","- Vitality {2, 9}","- Physical Damage {4,20}%","- Dwarven Shield
   - Dwarven Sword Maiden
   - Mountain King Ironheart",- DwarvenHalls Day\r
Elemental Gi,3: Legendary,"{4, 27}","{4, 27}",,"- Max Mana {20, 133}
   - Damage to Cold {1, 12}
   - Damage to Fire {1, 12}
   - Damage to Lightning {1, 12}",- Crystal Golem,- ForgottenMines Day\r
Fire Gi,3: Legendary,"{4, 27}","{4, 27}",,"- Max Mana {20, 133}
   - Damage to Fire {1, 16}",- Global Loot,\r
Flame Vestments,3: Legendary,"{4, 27}","{4, 27}","- Might {3, 18}
   - Vitality {2, 9}
   - Intelligence {2, 9}","- Fire Damage {4,20}%
   - Applies Level [level value] {SKL=Fire Shield} when struck.",- The Ember King,- Emberlands Day\r
Frost Mantle,3: Legendary,"{4, 27}","{4, 27}","- Might {2, 9}
   - Vitality {2, 9}
   - Intelligence {3, 18}","- Cold Damage {4,20}%
   - Applies Level [level value] {SKL=Frost Armor} when struck.","- Hodr, the Frost Giant (Event)","- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Gladiator's Garb,3: Legendary,"{5, 32}","{5, 32}","- Might {2, 9}
   - Vitality {2, 9}
   - Reflex {3, 18}",- Grants the passive Quick Hands.,"- Lucilla
   - Maximus
   - Proximo",\r
Golden Fleece,3: Legendary,"{12, 80}","{12, 80}","- Vitality {2, 9}
   - Reflex {2, 9}","- Resist Cold 10%
   - Resist Fire 10%
   - Resist Lightning 10%
   - Damage to Physical {1, 16}","- Hod
   - Ragnar
   - Anthulk
   - The Minotaur","- ForgottenMines Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Harmonious Garb,3: Legendary,,,,"- Max Mana {20, 133}
   - Healing Given {1, 16}",- Global Loot,\r
Ice Gi,3: Legendary,,,,"- Max Mana {20, 133}
   - Damage to Cold {1, 16}",- Global Loot,\r
Knight's Full Plate,3: Legendary,"{14, 93}","{14, 93}",,"- Resist Cold 8%
   - Resist Fire 8%
   - Resist Lightning 8%
   - Resist Physical 8%",- Knight,"- Emberlands Day
   - FreewindForest Night
   - FreewindForest Day"\r
Lightning Gi,3: Legendary,"{4, 27}","{4, 27}",,"- Max Mana {20, 133}
   - Damage to Lightning {1, 16}",- Tlaloc the Storm,"- WaterTempleRuins Night
   - WaterTempleRuins Day
   - EmeraldJungle Night
   - EmeraldJungle Day"\r
Master's Gi,3: Legendary,"{4, 27}","{4, 27}","- Might {3, 18}
   - Dexterity {3, 18}
   - Vitality {3, 18}
   - Intelligence {3, 18}
   - Reflex {3, 18}",,- Global Loot,\r
Plague Jacket,3: Legendary,"{4, 27}","{4, 27}","- Vitality {4, 27}
   - Reflex {3, 18}","- Shadow Damage {4,20}%
   - Attacks apply 1 stack of poison.","- Plague Doctor
   - The Risen Witch (Event)
   - The Witch
   - Twisted Soul of the Swamp","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"\r
Praetorian Cuirass,3: Legendary,"{18, 120}","{18, 120}","- Might {2, 9}
   - Vitality {2, 9}
   - Reflex {2, 9}",- Movement Points 2,"- Emperor Marcus
   - Olgoi, Devourer of Treasure",- DwarvenHalls Day\r
Professional Finery,3: Legendary,"{4, 27}","{4, 27}","- Dexterity {6, 36}","- Max Health {20, 133}",- Global Loot,\r
Shadowstalker Body Armor,3: Legendary,"{4, 27}","{4, 27}","- Dexterity {7, 45}
   - Reflex {2, 9}",- 15% chance to cast Stealth on turn start.,- Global Loot,\r
Stag Plate,3: Legendary,"{16, 107}","{16, 107}","- Vitality {2, 9}
   - Reflex {3, 18}",- Grants the passive Disengage.,- Global Loot,\r
Summoner's Robe,3: Legendary,"{4, 27}","{4, 27}","- Vitality {2, 9}
   - Intelligence {2, 9}","- Summon Damage {3,15}%
   - Summon Health {3,15}%",- The Countess,- CastleGloom Day\r
Sunwalker Robes,3: Legendary,"{3, 16}","{6, 38}","- Might {3, 18}
   - Vitality {3, 18}","- Holy Power {4,20}%",- The Sultan,"- WyrmrestDesert Night
   - WyrmrestDesert Day"\r
Thunder Robes,3: Legendary,"{4, 27}","{4, 27}","- Dexterity {3, 18}
   - Vitality {2, 9}
   - Intelligence {2, 9}","- Lightning Damage {4,20}%
   - Applies Level [level value] {SKL=Lightning Shield} when struck.",- Tlaloc the Storm,"- WaterTempleRuins Night
   - WaterTempleRuins Day
   - EmeraldJungle Night
   - EmeraldJungle Day"\r
Wizard's Robe,3: Legendary,"{4, 22}","{5, 32}","- Might {2, 9}
   - Dexterity {2, 9}
   - Vitality {2, 9}
   - Intelligence {2, 9}","- Cold Damage {3,15}%
   - Fire Damage {3,15}%
   - Lightning Damage {3,15}%",- Global Loot,\r
Adamant Platemail,4: Mythic,"{21, 143}","{21, 143}","- Might {2, 10}
   - Vitality {2, 10}",- Damage Reduction 10%,- The Ember King,- Emberlands Day\r
Arcane Robes,4: Mythic,"{5, 29}","{5, 29}","- Might {10, 67}",,"- Herald of the Abyss
   - Unchained Efreet","- SunkenSwamplands Night
   - WyrmrestDesert Day
   - CastleGloom Day
   - WyrmrestDesert Night
   - SunkenSwamplands Day"\r
Black Belt,4: Mythic,"{5, 29}","{5, 29}","- Reflex {10, 67}",,- The Grandmaster,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Bone Jester Jacket,4: Mythic,"{9, 58}","{9, 58}","- Vitality {2, 10}
   - Reflex {3, 20}","- Dodge Counter Damage {10,50}%","- Samara the Vampire (Event)
   - The Duke
   - The Jester","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"\r
Dead One's Robes,4: Mythic,"{4, 23}","{6, 35}","- Vitality {2, 10}
   - Intelligence {2, 10}","- Summon Resistance 10%
   - Summon Damage {4,20}%
   - Summon Health {4,20}%",- The Dusk King,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Emperor's Cuirass,4: Mythic,"{15, 100}","{15, 100}","- Might {2, 10}
   - Dexterity {2, 10}
   - Vitality {2, 10}
   - Intelligence {2, 10}
   - Reflex {2, 10}",- Casts Bless on the wearer.,- Emperor Marcus,\r
Energy Vestments,4: Mythic,"{2, 12}","{7, 46}","- Intelligence {10, 67}",,- Global Loot,\r
Fallen Cleric Robes,4: Mythic,"{15, 100}","{15, 100}","- Might {3, 15}
   - Intelligence {3, 15}","- Shadow Damage {5,25}%
   - 10% chance on hit to cast Level [level value] {SKL=Consumption}",- The Countess,- CastleGloom Day\r
Forgemaster's Links,4: Mythic,"{15, 100}","{21, 143}","- Might {5, 29}
   - Vitality {2, 10}","- Fire Damage {5,25}%
   - The wearer gains Level [level value] {SKL=Fire Shield}.",- The Forgemaster,- Emberlands Day\r
Golden Valkyrie Plate,4: Mythic,"{9, 58}","{9, 58}","- Might {2, 10}
   - Dexterity {2, 10}","- Skill Range 3
   - Basic attacks have a 25% chance to proc an additional attack once per 
   turn.",- Valkyrie Commander,"- WaterTempleRuins Night
   - WaterTempleRuins Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Grandmaster's Gi,4: Mythic,"{5, 29}","{5, 29}",,"- Damage to Physical {1, 13}
   - Damage to Cold {1, 13}
   - Damage to Fire {1, 13}
   - Damage to Lightning {1, 13}",- The Grandmaster,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Inner Strength,4: Mythic,"{5, 29}","{5, 29}","- Might {7, 48}","- Max Health {21, 143}",- Global Loot,\r
Iron Thorn Cuirass,4: Mythic,"{17, 115}","{17, 115}","- Might {2, 10}
   - Vitality {3, 20}","- Return Damage Physical Source[""Armor""] * .02f
   - Gain Added Return Damage Physical equal to 2% of your Armor.",- Azug Spikefist,\r
Leviathan Plate,4: Mythic,"{17, 115}","{17, 115}","- Might {5, 29}
   - Vitality {3, 15}","- Health Per Turn {7, 84}","- Black Dragon
   - Blue Dragon
   - Green Dragon
   - Red Dragon","- FreewindForest Night
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day
   - FreewindForest Day
   - CastleGloom Day
   - Emberlands Day"\r
Night Stalker Leathers,4: Mythic,"{5, 29}","{5, 29}","- Dexterity {7, 48}
   - Reflex {3, 20}",- 20% chance to cast Stealth on turn start.,- Global Loot,\r
Ninja Gear,4: Mythic,"{5, 29}","{5, 29}","- Dexterity {10, 67}",,- The Grandmaster,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Resolve,4: Mythic,"{5, 29}","{5, 29}","- Vitality {10, 67}",,- Global Loot,\r
Slayer Plate,4: Mythic,"{17, 115}","{17, 115}","- Might {3, 15}
   - Vitality {3, 15}","- Physical Damage {5,25}%
   - % Life Steal 3",- The Baron,- CastleGloom Day\r
Warlord Mantle,4: Mythic,"{9, 58}","{9, 58}","- Might {2, 10}
   - Vitality {2, 10}
   - Reflex {2, 10}","- Damage to Physical {1, 17}","- Hod
   - Lagertha
   - Ragnar","- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Will to Survive,4: Mythic,"{5, 29}","{5, 29}","- Might {3, 20}","- Max Health {21, 143}
   - Armor Source[""Might""] * 3f
   - Magic Armor Source[""Might""] * 3f
   - Gain Armor and Magic Armor equal to 2x your Might. 10% chance upon 
   getting hit to cast Level [level value] {SKL=Pain Suppression}.",- Councilor Jahsun,"- EmeraldJungle Night
   - EmeraldJungle Day"\r
Tundra Regalia,0: Common,"{6, 41}","{6, 41}",,,- Global Loot,\r
Woodland Regalia,0: Common,"{6, 41}","{6, 41}",,,- Global Loot,`,F1=`Name,Rarity,Armor,Magic Armor,Base Stats,Attributes,Dropped By,Locations\r
Amber Necklace,1: Uncommon,,,"- Dexterity {2, 8}",- Resist Lightning 10%,- Global Loot,\r
Blessed Locket,1: Uncommon,,,"- Vitality {2, 8}",,- Global Loot,\r
Brass Chain,1: Uncommon,"{4, 23}",,"- Dexterity {2, 12}",,- Global Loot,\r
Bronze Pendant,1: Uncommon,"{4, 23}",,"- Might {2, 12}",,- Global Loot,\r
Copper Pendant,1: Uncommon,,"{4, 23}","- Intelligence {2, 12}",,- Global Loot,\r
Goblin Bone Necklace,1: Uncommon,,,"- Might {2, 8}
   - Dexterity {2, 8}",,- Global Loot,\r
Iron Choker,1: Uncommon,"{10, 68}",,,,- Global Loot,\r
Memory Locket,1: Uncommon,,,"- Intelligence {3, 15}",,- Global Loot,\r
Opal Necklace,1: Uncommon,,,"- Might {2, 8}",- Resist Fire 10%,- Global Loot,\r
Pearl Necklace,1: Uncommon,,,"- Intelligence {2, 8}",- Resist Cold 10%,- Global Loot,\r
Spiked Collar,1: Uncommon,,,,"- Return Damage Physical {2, 26}",- Global Loot,\r
Trainer's Pendant,1: Uncommon,,,,"- Summon Damage {3,15}%",- Global Loot,\r
Tungsten Choker,1: Uncommon,"{7, 45}","{7, 45}",,,- Global Loot,\r
Bear Charm,2: Rare,,,"- Might {2, 9}
   - Dexterity {2, 9}
   - Vitality {2, 9}",,"- Hod
   - Lagertha
   - Ragnar","- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Boar Charm,2: Rare,,,"- Might {2, 9}
   - Dexterity {2, 9}
   - Vitality {2, 9}",,- Global Loot,\r
Diamond Necklace,2: Rare,,,"- Vitality {2, 9}","- Resist Cold 5%
   - Resist Fire 5%
   - Resist Lightning 5%",- Crystal Golem,- ForgottenMines Day\r
Eagle Charm,2: Rare,,,"- Dexterity {3, 17}",- Skill Range 1,- Global Loot,\r
Forest Pendant,2: Rare,,,"- Dexterity {2, 9}
   - Vitality {2, 9}
   - Reflex {2, 9}",,"- The Risen Witch (Event)
   - The Witch
   - Twisted Soul of the Swamp","- SunkenSwamplands Day
   - SunkenSwamplands Night"\r
Fox Charm,2: Rare,,,"- Dexterity {2, 9}
   - Intelligence {2, 9}
   - Reflex {2, 9}",,- Global Loot,\r
Gold Necklace,2: Rare,"{2, 10}","{2, 10}","- Might {1, 4}
   - Dexterity {1, 4}
   - Vitality {1, 4}
   - Intelligence {1, 4}
   - Reflex {1, 4}",,- Global Loot,\r
Heart Pendant,2: Rare,,,"- Vitality {4, 25}",,"- Hodr, the Frost Giant","- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Hope Locket,2: Rare,"{2, 10}","{2, 10}","- Vitality {2, 9}
   - Intelligence {2, 9}",,- Valkyrie Commander,"- WaterTempleRuins Night
   - WaterTempleRuins Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Lion Charm,2: Rare,,,"- Might {2, 9}
   - Dexterity {2, 9}
   - Reflex {2, 9}",,- Global Loot,\r
Moonstone Necklace,2: Rare,,,"- Intelligence {2, 9}",- Mana Costs -8%,- Global Loot,\r
Oasis Amulet,2: Rare,,,"- Might {2, 9}
   - Vitality {2, 9}
   - Intelligence {2, 9}",,- The Sultan,"- WyrmrestDesert Night
   - WyrmrestDesert Day"\r
Prayer Beads,2: Rare,,,"- Intelligence {2, 9}","- Holy Power {3,15}%","- The Bishop
   - Priestess","- SunkenSwamplands Night
   - EmeraldJungle Day
   - CastleGloom Day
   - EmeraldJungle Night
   - SunkenSwamplands Day"\r
Silver Necklace,2: Rare,"{8, 49}","{8, 49}",,,- Global Loot,\r
Skeleton Necklace,2: Rare,,,"- Might {2, 9}","- Summon Damage {4,20}%",- The Bishop,"- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"\r
Steel Chain,2: Rare,"{4, 25}","{4, 25}",,"- Return Damage Physical {2, 29}",- Global Loot,\r
Vial of Blood,2: Rare,,,"- Might {2, 9}",- % Life Steal 3,- The Countess,- CastleGloom Day\r
Warding Amulet,2: Rare,"{8, 49}","{8, 49}","- Vitality {2, 9}",,"- Ursa
   - Forest Giant","- FreewindForest Night
   - FreewindForest Day"\r
Wolf Charm,2: Rare,,,"- Vitality {2, 9}","- Damage to Physical {1, 14}","- Lucilla
   - Maximus
   - Proximo",\r
Wolf-Fang Necklace,2: Rare,,,"- Reflex {2, 9}","- Damage to Physical {1, 14}",- Global Loot,\r
Amulet of Alacrity,3: Legendary,,,"- Dexterity {2, 9}
   - Reflex {2, 9}",- Movement Points 2,- Global Loot,\r
Amulet of Vision,3: Legendary,,,"- Might {2, 9}
   - Dexterity {2, 9}","- Skill Range 2
   - Blind Immunity 1",- The Sun Queen,"- WyrmrestDesert Night
   - WyrmrestDesert Day"\r
Contender's Chain,3: Legendary,,,"- Vitality {3, 18}","- Damage to Physical {1, 16}",- Maximus,\r
Dark Steel Locket,3: Legendary,"{8, 54}","{8, 54}","- Might {2, 9}","- Physical Damage {4,20}%",- Herald of the Abyss,"- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"\r
Drake Eye Pendant,3: Legendary,"{8, 54}","{8, 54}","- Might {2, 9}","- Health Per Turn {6, 78}",- Global Loot,\r
Elemental Chain,3: Legendary,,,"- Vitality {3, 18}","- Damage to Cold {1, 12}
   - Damage to Fire {1, 12}
   - Damage to Lightning {1, 12}",- Global Loot,\r
Martyr's Chain,3: Legendary,,,"- Might {3, 18}","- Max Health -15%
   - Holy Power {5,25}%",- Emperor Marcus,\r
Mithril Pendant,3: Legendary,"{8, 54}","{8, 54}","- Might {3, 18}
   - Vitality {2, 9}",,- Global Loot,\r
Orichalcum Chain,3: Legendary,,,"- Might {2, 9}
   - Intelligence {2, 9}","- increased power for mana use 15%
   - Mana Costs 10%",- Crystal Golem,- ForgottenMines Day\r
Titanium Chain,3: Legendary,"{4, 27}","{4, 27}","- Vitality {2, 9}","- Return Damage Physical {3, 31}",- Global Loot,\r
Abyssal Chain,4: Mythic,,,"- Might {2, 10}","- Damage and Healing {5,25}%
   - Max Health -20%","- Admiral Blackbeard
   - The Dead One
   - The Prospector","- SunkenSwamplands Night
   - WaterTempleRuins Night
   - CastleGloom Day
   - ForgottenMines Day
   - SunkenSwamplands Day"\r
Adamant Chain,4: Mythic,"{13, 86}","{13, 86}","- Might {2, 10}
   - Vitality {2, 10}",- Damage Reduction 5%,- Dwarven Warmachine,- DwarvenHalls Day\r
Amulet of Brilliance,4: Mythic,,,"- Intelligence {6, 39}",,- Global Loot,\r
Amulet of Power,4: Mythic,,,"- Might {6, 39}",,"- Lord Infernicus (Event)
   - The Forgemaster",- Emberlands Day\r
Black Dragon Eye,4: Mythic,,,"- Vitality {2, 10}","- Damage to Shadow {2, 25}",- Black Dragon,- CastleGloom Day\r
Blue Dragon Eye,4: Mythic,,,"- Vitality {2, 10}","- Damage to Cold {1, 17}",- Blue Dragon,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Dragon's Blood Amulet,4: Mythic,"{11, 72}","{11, 72}","- Might {2, 10}","- Health Per Turn {21, 143}","- Black Dragon
   - Blue Dragon
   - Green Dragon
   - Red Dragon","- FreewindForest Night
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day
   - FreewindForest Day
   - CastleGloom Day
   - Emberlands Day"\r
Draught of Life,4: Mythic,,,"- Vitality {6, 39}",,"- Avatar of Xotec
   - Medusa","- WaterTempleRuins Night
   - WaterTempleRuins Day
   - EmeraldJungle Night
   - EmeraldJungle Day"\r
Ethereal Charm,4: Mythic,,,"- Reflex {6, 39}",,- Global Loot,\r
Green Dragon Eye,4: Mythic,,,"- Dexterity {2, 10}","- Damage to Lightning {2, 25}",- Green Dragon,"- FreewindForest Night
   - FreewindForest Day"\r
Pendant of Cunning,4: Mythic,,,"- Dexterity {6, 39}",,- Global Loot,\r
Razor Wire,4: Mythic,"{15, 100}","{15, 100}","- Vitality {3, 20}","- Return Damage Physical Source[""Armor""] * .02f
   - Gain Added Return Damage Physical equal to 2% of your Armor.","- The Risen Witch (Event)
   - The Witch
   - Twisted Soul of the Swamp","- SunkenSwamplands Day
   - SunkenSwamplands Night"\r
Red Dragon Eye,4: Mythic,,,"- Vitality {2, 10}","- Damage to Fire {2, 25}",- Red Dragon,- Emberlands Day\r
Sunstone Necklace,4: Mythic,,,"- Might {3, 20}
   - Intelligence {3, 20}","- 10% chance to cast Level [level value] {SKL=Blinding Light} when 
   hitting with any ability.",- The Sun Queen,"- WyrmrestDesert Night
   - WyrmrestDesert Day"\r
Valler's Pocket Watch,4: Mythic,,,- Vitality {20},"- -1 All Cooldowns
   - Mana Cost -20%","- The Broker
   - The Mad Mage (Event)","- Emberlands Day
   - Emberlands Night"`,j1=`Name,Rarity,Armor,Magic Armor,Base Stats,Attributes,Dropped By,Locations\r
Amber Ring,1: Uncommon,,,"- Dexterity {2, 8}",- Resist Lightning 10%,- Global Loot,\r
Brass Loop,1: Uncommon,"{4, 23}",,"- Dexterity {2, 12}",,- Global Loot,\r
Bronze Ring,1: Uncommon,"{4, 23}",,"- Might {2, 12}",,- Global Loot,\r
Conduit Ring,1: Uncommon,,,,"- Lightning Damage {2,10}%",- Global Loot,\r
Copper Ring,1: Uncommon,,"{4, 23}","- Intelligence {2, 12}",,- Global Loot,\r
Friendship Band,1: Uncommon,,,"- Might {2, 8}
   - Vitality {2, 8}",,- Global Loot,\r
Goblin Bone Ring,1: Uncommon,,,"- Might {2, 8}
   - Vitality {2, 8}",,- Global Loot,\r
Iron Band,1: Uncommon,"{10, 68}",,,,- Global Loot,\r
Opal Ring,1: Uncommon,,,"- Might {2, 8}",- Resist Fire 10%,- Global Loot,\r
Pearl Ring,1: Uncommon,,,"- Intelligence {2, 8}",- Resist Cold 10%,- Global Loot,\r
Promise Ring,1: Uncommon,,,"- Might {2, 8}
   - Vitality {2, 8}",,"- Lady of the Well
   - The Scarecrow","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"\r
Spiked Ring,1: Uncommon,,,,"- Return Damage Physical {2, 26}",- Global Loot,\r
Trainer's Band,1: Uncommon,,,"- Intelligence {2, 8}","- Summon Health {3,15}%",- Global Loot,\r
Tungsten Ring,1: Uncommon,"{7, 45}","{7, 45}",,,- Global Loot,\r
Blighted Band,2: Rare,,,"- Might {2, 9}","- Shadow Damage {3,15}%",- Global Loot,\r
Bone Ring,2: Rare,,,"- Intelligence {2, 9}","- Summon Health {4,20}%",- The Bishop,"- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"\r
Diamond Ring,2: Rare,,,"- Vitality {2, 9}","- Resist Cold 5%
   - Resist Fire 5%
   - Resist Lightning 5%",- Global Loot,\r
Gold Ring,2: Rare,,,"- Might {1, 5}
   - Dexterity {1, 5}
   - Vitality {1, 5}
   - Intelligence {1, 5}
   - Reflex {1, 5}",,- Global Loot,\r
Mending Band,2: Rare,,,,"- Health Per Turn {6, 72}",- Global Loot,\r
Ring of Haste,3: Legendary,,,"- Dexterity {2, 9}","Grants Fire Skill ""Haste""",- The Sun Queen,"- WyrmrestDesert Night
   - WyrmrestDesert Day"\r
Ring of Protection,2: Rare,,,"- Vitality {2, 9}",- Resist Physical 10%,- Global Loot,\r
Ruby Ring,2: Rare,,,"- Might {2, 9}","- Fire Damage {3,15}%","- Lord Infernicus (Event)
   - Captain of the Ruby Rum
   - Spellweaver Flamebearer
   - Fire Mage
   - The Forgemaster","- SunkenSwamplands Night
   - WaterTempleRuins Night
   - WyrmrestDesert Day
   - WaterTempleRuins Day
   - WyrmrestDesert Night
   - Emberlands Day
   - SunkenSwamplands Day"\r
Sapphire Ring,2: Rare,,,"- Intelligence {2, 9}","- Cold Damage {3,15}%","- The Dusk King
   - Captain of the Sapphire Sea
   - Spellweaver Frostbringer
   - Frost Mage","- FreewindForest Night
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day
   - WaterTempleRuins Night
   - FreewindForest Day
   - WaterTempleRuins Day
   - Emberlands Day"\r
Silver Band,2: Rare,"{8, 49}","{8, 49}",,,"- The Butcher
   - The Jester","- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"\r
Steel Ring,2: Rare,"{4, 25}","{4, 25}",,"- Return Damage Physical {2, 29}",- Global Loot,\r
Thief's Ring,3: Legendary,,,"- Dexterity {2, 9}",- Skills Granted {Steal Action},"- Samara the Vampire (Event)
   - The Duke
   - Thief","- EmeraldJungle Night
   - EmeraldJungle Day
   - CastleGloom Day"\r
Topaz Ring,2: Rare,,,"- Dexterity {2, 9}","- Lightning Damage {3,15}%","- Captain of the Emerald Eel
   - Spellweaver Stormcaller
   - Thunder Mage
   - Apparition","- WaterTempleRuins Night
   - WaterTempleRuins Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Warding Ring,2: Rare,"{8, 49}","{8, 49}","- Vitality {2, 9}",,"- Ursa
   - Forest Giant","- FreewindForest Night
   - FreewindForest Day"\r
Wedding Band,2: Rare,,,"- Might {2, 9}
   - Vitality {2, 9}
   - Intelligence {2, 9}",,- Global Loot,\r
Bleeding Band,3: Legendary,,,"- Might {2, 9}
   - Vitality {2, 9}",- Weapon attacks apply 1 stack of bleeding.,"- Anthulk
   - The Minotaur",- ForgottenMines Day\r
Dark Steel Ring,3: Legendary,"{8, 54}","{8, 54}","- Might {2, 9}","- Physical Damage {4,20}%",- Global Loot,\r
Elemental Loop,3: Legendary,,,"- Vitality {3, 18}","- Damage to Cold {1, 12}
   - Damage to Fire {1, 12}
   - Damage to Lightning {1, 12}",- Crystal Golem,- ForgottenMines Day\r
Gladiator's Mark,3: Legendary,,,"- Vitality {3, 18}","- Damage to Physical {1, 16}","- Lucilla
   - Proximo",\r
Living Band,3: Legendary,,,"- Might {2, 9}
   - Vitality {2, 9}","- Health Per Turn {6, 78}","- Ursa
   - Burning Treant
   - Forest Giant
   - Forest Keeper
   - Forest Treant
   - Forest Watcher
   - Frozen Treant
   - Trial of Honor","- FreewindForest Night
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day
   - FreewindForest Day
   - Emberlands Day"\r
Mark of Nobility,3: Legendary,,,"- Might {1, 7}
   - Dexterity {1, 7}
   - Vitality {1, 7}
   - Intelligence {1, 7}
   - Reflex {1, 7}",,- Global Loot,\r
Meteorite Band,3: Legendary,,,"- Vitality {3, 18}","- Damage to Fire {1, 16}",- Ember Golem,- Emberlands Day\r
Mithril Loop,3: Legendary,"{8, 54}","{8, 54}","- Might {3, 18}
   - Vitality {2, 9}",,- Global Loot,\r
Orichalcum Band,3: Legendary,,,"- Might {2, 9}
   - Intelligence {2, 9}","- increased power for mana use {15, 40}%
   - Mana Costs {10, 20}%",- Global Loot,\r
Purifying Band,3: Legendary,,,"- Intelligence {3, 18}",,- Global Loot,\r
Ring of Alacrity,3: Legendary,,,"- Dexterity {2, 9}
   - Reflex {2, 9}",- Movement Points 2,- Blood Mask Boss,"- FreewindForest Night
   - FreewindForest Day"\r
Ring of Vision,3: Legendary,,,"- Might {2, 9}
   - Dexterity {2, 9}","- Skill Range 2
   - Blind Immunity 1",- Global Loot,\r
Titanium Band,3: Legendary,"{4, 27}","{4, 27}","- Vitality {2, 9}","- Return Damage Physical {3, 31}",- Global Loot,\r
Abyssal Binding,4: Mythic,,,"- Might {2, 10}","- Damage and Healing {5,25}%
   - Max Health -15%",- Herald of the Abyss,"- SunkenSwamplands Night
   - SunkenSwamplands Day
   - CastleGloom Day"\r
Adamant Band,4: Mythic,"{13, 86}","{13, 86}","- Might {2, 10}
   - Vitality {2, 10}",- Damage Reduction 5%,"- Lord Infernicus (Event)
   - The Forgemaster",- Emberlands Day\r
Band of Blades,4: Mythic,"{15, 100}","{15, 100}","- Vitality {3, 20}","- Return Damage Physical Source[""Armor""] * .02f
   - Gain Added Return Damage Physical equal to 2% of your Armor.",- Global Loot,\r
Band of Freedom,4: Mythic,,,"- Dexterity {2, 10}
   - Reflex {2, 10}","- Rooted Immunity 1
   - Opportunity Attack Immunity 1
   - Chilled Immunity 1
   - Movement Points 2",- Global Loot,\r
Black Dragon Scale,4: Mythic,"{11, 72}","{11, 72}","- Vitality {2, 10}","- Return Damage Shadow {3, 34}
   - Health Per Turn {17, 115}",- Black Dragon,- CastleGloom Day\r
Blue Dragon Scale,4: Mythic,"{11, 72}","{11, 72}","- Intelligence {2, 10}","- Return Damage Cold {1, 17}
   - Health Per Turn {17, 115}",- Blue Dragon,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Emberstone Ring,4: Mythic,,,"- Might {2, 10}","- Fire Damage {5,25}%","- Dwarven Warmachine
   - Red Dragon","- DwarvenHalls Day
   - Emberlands Day"\r
Ethereal Loop,4: Mythic,,,"- Reflex {6, 39}",,- Global Loot,\r
Green Dragon Scale,4: Mythic,"{11, 72}","{11, 72}","- Dexterity {2, 10}","- Return Damage Lightning {3, 34}
   - Health Per Turn {17, 115}",- Green Dragon,"- FreewindForest Night
   - FreewindForest Day"\r
Hailstone Ring,4: Mythic,,,"- Intelligence {2, 10}","- Cold Damage {5,25}%",- Blue Dragon,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Heart Signet,4: Mythic,,,"- Vitality {6, 39}",,- Global Loot,\r
Iron Fortress Band,4: Mythic,"{9, 58}","{9, 58}",,"- Resist Physical 8%
   - Resist Cold 8%
   - Resist Fire 8%
   - Resist Lightning 8%","- The Gobfather
   - The Pale Goblin","- DwarvenHalls Day
   - WyrmrestDesert Night
   - WyrmrestDesert Day"\r
King's Signet,4: Mythic,,,"- Might {2, 9}
   - Dexterity {2, 9}
   - Vitality {2, 9}
   - Intelligence {2, 9}
   - Reflex {2, 9}",,- Global Loot,\r
Red Dragon Scale,4: Mythic,"{11, 72}","{11, 72}","- Might {2, 10}","- Return Damage Fire {3, 34}
   - Health Per Turn {17, 115}",- Red Dragon,- Emberlands Day\r
Ring of Brilliance,4: Mythic,,,"- Intelligence {6, 39}",,- Global Loot,\r
Ring of Cunning,4: Mythic,,,"- Dexterity {6, 39}",,- Ronin,"- FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Ring of Power,4: Mythic,,,"- Might {6, 39}",,- The Broker,- Emberlands Day\r
Sunstone Ring,4: Mythic,,,"- Might {3, 20}
   - Intelligence {3, 20}","- 10% chance to cast Level [level value] {SKL=Blinding Light} when 
   hitting with any ability.",- Avatar of Xotec,"- WaterTempleRuins Night
   - WaterTempleRuins Day
   - EmeraldJungle Night
   - EmeraldJungle Day"\r
Thunderstone Ring,4: Mythic,,,"- Dexterity {2, 10}","- Lightning Damage {5,25}%","- Ragnar
   - Green Dragon","- FreewindForest Night
   - FreewindForest Day
   - FrostwroughtMountain Night
   - FrostwroughtMountain Day"\r
Claw of Kuvonn,4: Mythic,,,"- Summon Limit {1}
   - Summon Resistance {5%}
   - Summon Damage {20%}
   - Summon Health {20%}",- All creatures you summon have Ghost Armor applied,"- The Dead One
   - The Countess","- CastleGloom Day
   - CastleGloom Night"`;var Br={exports:{}};/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/var q1=Br.exports,xd;function W1(){return xd||(xd=1,function(r,o){((f,c)=>{r.exports=c()})(q1,function f(){var c=typeof self<"u"?self:typeof window<"u"?window:c!==void 0?c:{},S,M=!c.document&&!!c.postMessage,_=c.IS_PAPA_WORKER||!1,V={},E=0,D={};function C(p){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(y){var w=te(y);w.chunkSize=parseInt(w.chunkSize),y.step||y.chunk||(w.chunkSize=null),this._handle=new oe(w),(this._handle.streamer=this)._config=w}).call(this,p),this.parseChunk=function(y,w){var F=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<F){let re=this._config.newline;re||(q=this._config.quoteChar||'"',re=this._handle.guessLineEndings(y,q)),y=[...y.split(re).slice(F)].join(re)}this.isFirstChunk&&W(this._config.beforeFirstChunk)&&(q=this._config.beforeFirstChunk(y))!==void 0&&(y=q),this.isFirstChunk=!1,this._halted=!1;var F=this._partialLine+y,q=(this._partialLine="",this._handle.parse(F,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(y=q.meta.cursor,F=(this._finished||(this._partialLine=F.substring(y-this._baseIndex),this._baseIndex=y),q&&q.data&&(this._rowCount+=q.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),_)c.postMessage({results:q,workerId:D.WORKER_ID,finished:F});else if(W(this._config.chunk)&&!w){if(this._config.chunk(q,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=q=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(q.data),this._completeResults.errors=this._completeResults.errors.concat(q.errors),this._completeResults.meta=q.meta),this._completed||!F||!W(this._config.complete)||q&&q.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),F||q&&q.meta.paused||this._nextChunk(),q}this._halted=!0},this._sendError=function(y){W(this._config.error)?this._config.error(y):_&&this._config.error&&c.postMessage({workerId:D.WORKER_ID,error:y,finished:!1})}}function X(p){var y;(p=p||{}).chunkSize||(p.chunkSize=D.RemoteChunkSize),C.call(this,p),this._nextChunk=M?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(w){this._input=w,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(y=new XMLHttpRequest,this._config.withCredentials&&(y.withCredentials=this._config.withCredentials),M||(y.onload=ne(this._chunkLoaded,this),y.onerror=ne(this._chunkError,this)),y.open(this._config.downloadRequestBody?"POST":"GET",this._input,!M),this._config.downloadRequestHeaders){var w,F=this._config.downloadRequestHeaders;for(w in F)y.setRequestHeader(w,F[w])}var q;this._config.chunkSize&&(q=this._start+this._config.chunkSize-1,y.setRequestHeader("Range","bytes="+this._start+"-"+q));try{y.send(this._config.downloadRequestBody)}catch(re){this._chunkError(re.message)}M&&y.status===0&&this._chunkError()}},this._chunkLoaded=function(){y.readyState===4&&(y.status<200||400<=y.status?this._chunkError():(this._start+=this._config.chunkSize||y.responseText.length,this._finished=!this._config.chunkSize||this._start>=(w=>(w=w.getResponseHeader("Content-Range"))!==null?parseInt(w.substring(w.lastIndexOf("/")+1)):-1)(y),this.parseChunk(y.responseText)))},this._chunkError=function(w){w=y.statusText||w,this._sendError(new Error(w))}}function J(p){(p=p||{}).chunkSize||(p.chunkSize=D.LocalChunkSize),C.call(this,p);var y,w,F=typeof FileReader<"u";this.stream=function(q){this._input=q,w=q.slice||q.webkitSlice||q.mozSlice,F?((y=new FileReader).onload=ne(this._chunkLoaded,this),y.onerror=ne(this._chunkError,this)):y=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var q=this._input,re=(this._config.chunkSize&&(re=Math.min(this._start+this._config.chunkSize,this._input.size),q=w.call(q,this._start,re)),y.readAsText(q,this._config.encoding));F||this._chunkLoaded({target:{result:re}})},this._chunkLoaded=function(q){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(q.target.result)},this._chunkError=function(){this._sendError(y.error)}}function K(p){var y;C.call(this,p=p||{}),this.stream=function(w){return y=w,this._nextChunk()},this._nextChunk=function(){var w,F;if(!this._finished)return w=this._config.chunkSize,y=w?(F=y.substring(0,w),y.substring(w)):(F=y,""),this._finished=!y,this.parseChunk(F)}}function ie(p){C.call(this,p=p||{});var y=[],w=!0,F=!1;this.pause=function(){C.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){C.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(q){this._input=q,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){F&&y.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),y.length?this.parseChunk(y.shift()):w=!0},this._streamData=ne(function(q){try{y.push(typeof q=="string"?q:q.toString(this._config.encoding)),w&&(w=!1,this._checkIsFinished(),this.parseChunk(y.shift()))}catch(re){this._streamError(re)}},this),this._streamError=ne(function(q){this._streamCleanUp(),this._sendError(q)},this),this._streamEnd=ne(function(){this._streamCleanUp(),F=!0,this._streamData("")},this),this._streamCleanUp=ne(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function oe(p){var y,w,F,q,re=Math.pow(2,53),Ae=-re,xe=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,U=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,z=this,j=0,k=0,d=!1,T=!1,N=[],x={data:[],errors:[],meta:{}};function B(Y){return p.skipEmptyLines==="greedy"?Y.join("").trim()==="":Y.length===1&&Y[0].length===0}function P(){if(x&&F&&(we("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+D.DefaultDelimiter+"'"),F=!1),p.skipEmptyLines&&(x.data=x.data.filter(function(me){return!B(me)})),Z()){let me=function(Be,He){W(p.transformHeader)&&(Be=p.transformHeader(Be,He)),N.push(Be)};var ae=me;if(x)if(Array.isArray(x.data[0])){for(var Y=0;Z()&&Y<x.data.length;Y++)x.data[Y].forEach(me);x.data.splice(0,1)}else x.data.forEach(me)}function $(me,Be){for(var He=p.header?{}:[],Le=0;Le<me.length;Le++){var se=Le,Pe=me[Le],Pe=((be,Ce)=>(je=>(p.dynamicTypingFunction&&p.dynamicTyping[je]===void 0&&(p.dynamicTyping[je]=p.dynamicTypingFunction(je)),(p.dynamicTyping[je]||p.dynamicTyping)===!0))(be)?Ce==="true"||Ce==="TRUE"||Ce!=="false"&&Ce!=="FALSE"&&((je=>{if(xe.test(je)&&(je=parseFloat(je),Ae<je&&je<re))return 1})(Ce)?parseFloat(Ce):U.test(Ce)?new Date(Ce):Ce===""?null:Ce):Ce)(se=p.header?Le>=N.length?"__parsed_extra":N[Le]:se,Pe=p.transform?p.transform(Pe,se):Pe);se==="__parsed_extra"?(He[se]=He[se]||[],He[se].push(Pe)):He[se]=Pe}return p.header&&(Le>N.length?we("FieldMismatch","TooManyFields","Too many fields: expected "+N.length+" fields but parsed "+Le,k+Be):Le<N.length&&we("FieldMismatch","TooFewFields","Too few fields: expected "+N.length+" fields but parsed "+Le,k+Be)),He}var le;x&&(p.header||p.dynamicTyping||p.transform)&&(le=1,!x.data.length||Array.isArray(x.data[0])?(x.data=x.data.map($),le=x.data.length):x.data=$(x.data,0),p.header&&x.meta&&(x.meta.fields=N),k+=le)}function Z(){return p.header&&N.length===0}function we(Y,$,le,ae){Y={type:Y,code:$,message:le},ae!==void 0&&(Y.row=ae),x.errors.push(Y)}W(p.step)&&(q=p.step,p.step=function(Y){x=Y,Z()?P():(P(),x.data.length!==0&&(j+=Y.data.length,p.preview&&j>p.preview?w.abort():(x.data=x.data[0],q(x,z))))}),this.parse=function(Y,$,le){var ae=p.quoteChar||'"',ae=(p.newline||(p.newline=this.guessLineEndings(Y,ae)),F=!1,p.delimiter?W(p.delimiter)&&(p.delimiter=p.delimiter(Y),x.meta.delimiter=p.delimiter):((ae=((me,Be,He,Le,se)=>{var Pe,be,Ce,je;se=se||[",","	","|",";",D.RECORD_SEP,D.UNIT_SEP];for(var It=0;It<se.length;It++){for(var xt,Pa=se[It],Ue=0,Ht=0,Ze=0,ct=(Ce=void 0,new pe({comments:Le,delimiter:Pa,newline:Be,preview:10}).parse(me)),vt=0;vt<ct.data.length;vt++)He&&B(ct.data[vt])?Ze++:(xt=ct.data[vt].length,Ht+=xt,Ce===void 0?Ce=xt:0<xt&&(Ue+=Math.abs(xt-Ce),Ce=xt));0<ct.data.length&&(Ht/=ct.data.length-Ze),(be===void 0||Ue<=be)&&(je===void 0||je<Ht)&&1.99<Ht&&(be=Ue,Pe=Pa,je=Ht)}return{successful:!!(p.delimiter=Pe),bestDelimiter:Pe}})(Y,p.newline,p.skipEmptyLines,p.comments,p.delimitersToGuess)).successful?p.delimiter=ae.bestDelimiter:(F=!0,p.delimiter=D.DefaultDelimiter),x.meta.delimiter=p.delimiter),te(p));return p.preview&&p.header&&ae.preview++,y=Y,w=new pe(ae),x=w.parse(y,$,le),P(),d?{meta:{paused:!0}}:x||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,w.abort(),y=W(p.chunk)?"":y.substring(w.getCharIndex())},this.resume=function(){z.streamer._halted?(d=!1,z.streamer.parseChunk(y,!0)):setTimeout(z.resume,3)},this.aborted=function(){return T},this.abort=function(){T=!0,w.abort(),x.meta.aborted=!0,W(p.complete)&&p.complete(x),y=""},this.guessLineEndings=function(me,ae){me=me.substring(0,1048576);var ae=new RegExp(ce(ae)+"([^]*?)"+ce(ae),"gm"),le=(me=me.replace(ae,"")).split("\r"),ae=me.split(`
`),me=1<ae.length&&ae[0].length<le[0].length;if(le.length===1||me)return`
`;for(var Be=0,He=0;He<le.length;He++)le[He][0]===`
`&&Be++;return Be>=le.length/2?`\r
`:"\r"}}function ce(p){return p.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function pe(p){var y=(p=p||{}).delimiter,w=p.newline,F=p.comments,q=p.step,re=p.preview,Ae=p.fastMode,xe=null,U=!1,z=p.quoteChar==null?'"':p.quoteChar,j=z;if(p.escapeChar!==void 0&&(j=p.escapeChar),(typeof y!="string"||-1<D.BAD_DELIMITERS.indexOf(y))&&(y=","),F===y)throw new Error("Comment character same as delimiter");F===!0?F="#":(typeof F!="string"||-1<D.BAD_DELIMITERS.indexOf(F))&&(F=!1),w!==`
`&&w!=="\r"&&w!==`\r
`&&(w=`
`);var k=0,d=!1;this.parse=function(T,N,x){if(typeof T!="string")throw new Error("Input must be a string");var B=T.length,P=y.length,Z=w.length,we=F.length,Y=W(q),$=[],le=[],ae=[],me=k=0;if(!T)return Ue();if(Ae||Ae!==!1&&T.indexOf(z)===-1){for(var Be=T.split(w),He=0;He<Be.length;He++){if(ae=Be[He],k+=ae.length,He!==Be.length-1)k+=w.length;else if(x)return Ue();if(!F||ae.substring(0,we)!==F){if(Y){if($=[],je(ae.split(y)),Ht(),d)return Ue()}else je(ae.split(y));if(re&&re<=He)return $=$.slice(0,re),Ue(!0)}}return Ue()}for(var Le=T.indexOf(y,k),se=T.indexOf(w,k),Pe=new RegExp(ce(j)+ce(z),"g"),be=T.indexOf(z,k);;)if(T[k]===z)for(be=k,k++;;){if((be=T.indexOf(z,be+1))===-1)return x||le.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:$.length,index:k}),xt();if(be===B-1)return xt(T.substring(k,be).replace(Pe,z));if(z===j&&T[be+1]===j)be++;else if(z===j||be===0||T[be-1]!==j){Le!==-1&&Le<be+1&&(Le=T.indexOf(y,be+1));var Ce=It((se=se!==-1&&se<be+1?T.indexOf(w,be+1):se)===-1?Le:Math.min(Le,se));if(T.substr(be+1+Ce,P)===y){ae.push(T.substring(k,be).replace(Pe,z)),T[k=be+1+Ce+P]!==z&&(be=T.indexOf(z,k)),Le=T.indexOf(y,k),se=T.indexOf(w,k);break}if(Ce=It(se),T.substring(be+1+Ce,be+1+Ce+Z)===w){if(ae.push(T.substring(k,be).replace(Pe,z)),Pa(be+1+Ce+Z),Le=T.indexOf(y,k),be=T.indexOf(z,k),Y&&(Ht(),d))return Ue();if(re&&$.length>=re)return Ue(!0);break}le.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:$.length,index:k}),be++}}else if(F&&ae.length===0&&T.substring(k,k+we)===F){if(se===-1)return Ue();k=se+Z,se=T.indexOf(w,k),Le=T.indexOf(y,k)}else if(Le!==-1&&(Le<se||se===-1))ae.push(T.substring(k,Le)),k=Le+P,Le=T.indexOf(y,k);else{if(se===-1)break;if(ae.push(T.substring(k,se)),Pa(se+Z),Y&&(Ht(),d))return Ue();if(re&&$.length>=re)return Ue(!0)}return xt();function je(Ze){$.push(Ze),me=k}function It(Ze){var ct=0;return ct=Ze!==-1&&(Ze=T.substring(be+1,Ze))&&Ze.trim()===""?Ze.length:ct}function xt(Ze){return x||(Ze===void 0&&(Ze=T.substring(k)),ae.push(Ze),k=B,je(ae),Y&&Ht()),Ue()}function Pa(Ze){k=Ze,je(ae),ae=[],se=T.indexOf(w,k)}function Ue(Ze){if(p.header&&!N&&$.length&&!U){var ct=$[0],vt={},gl=new Set(ct);let ml=!1;for(let Ta=0;Ta<ct.length;Ta++){let Ct=ct[Ta];if(vt[Ct=W(p.transformHeader)?p.transformHeader(Ct,Ta):Ct]){let Qt,dt=vt[Ct];for(;Qt=Ct+"_"+dt,dt++,gl.has(Qt););gl.add(Qt),ct[Ta]=Qt,vt[Ct]++,ml=!0,(xe=xe===null?{}:xe)[Qt]=Ct}else vt[Ct]=1,ct[Ta]=Ct;gl.add(Ct)}ml&&console.warn("Duplicate headers found and renamed."),U=!0}return{data:$,errors:le,meta:{delimiter:y,linebreak:w,aborted:d,truncated:!!Ze,cursor:me+(N||0),renamedHeaders:xe}}}function Ht(){q(Ue()),$=[],le=[]}},this.abort=function(){d=!0},this.getCharIndex=function(){return k}}function he(p){var y=p.data,w=V[y.workerId],F=!1;if(y.error)w.userError(y.error,y.file);else if(y.results&&y.results.data){var q={abort:function(){F=!0,de(y.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:Re,resume:Re};if(W(w.userStep)){for(var re=0;re<y.results.data.length&&(w.userStep({data:y.results.data[re],errors:y.results.errors,meta:y.results.meta},q),!F);re++);delete y.results}else W(w.userChunk)&&(w.userChunk(y.results,q,y.file),delete y.results)}y.finished&&!F&&de(y.workerId,y.results)}function de(p,y){var w=V[p];W(w.userComplete)&&w.userComplete(y),w.terminate(),delete V[p]}function Re(){throw new Error("Not implemented.")}function te(p){if(typeof p!="object"||p===null)return p;var y,w=Array.isArray(p)?[]:{};for(y in p)w[y]=te(p[y]);return w}function ne(p,y){return function(){p.apply(y,arguments)}}function W(p){return typeof p=="function"}return D.parse=function(p,y){var w=(y=y||{}).dynamicTyping||!1;if(W(w)&&(y.dynamicTypingFunction=w,w={}),y.dynamicTyping=w,y.transform=!!W(y.transform)&&y.transform,!y.worker||!D.WORKERS_SUPPORTED)return w=null,D.NODE_STREAM_INPUT,typeof p=="string"?(p=(F=>F.charCodeAt(0)!==65279?F:F.slice(1))(p),w=new(y.download?X:K)(y)):p.readable===!0&&W(p.read)&&W(p.on)?w=new ie(y):(c.File&&p instanceof File||p instanceof Object)&&(w=new J(y)),w.stream(p);(w=(()=>{var F;return!!D.WORKERS_SUPPORTED&&(F=(()=>{var q=c.URL||c.webkitURL||null,re=f.toString();return D.BLOB_URL||(D.BLOB_URL=q.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",re,")();"],{type:"text/javascript"})))})(),(F=new c.Worker(F)).onmessage=he,F.id=E++,V[F.id]=F)})()).userStep=y.step,w.userChunk=y.chunk,w.userComplete=y.complete,w.userError=y.error,y.step=W(y.step),y.chunk=W(y.chunk),y.complete=W(y.complete),y.error=W(y.error),delete y.worker,w.postMessage({input:p,config:y,workerId:w.id})},D.unparse=function(p,y){var w=!1,F=!0,q=",",re=`\r
`,Ae='"',xe=Ae+Ae,U=!1,z=null,j=!1,k=((()=>{if(typeof y=="object"){if(typeof y.delimiter!="string"||D.BAD_DELIMITERS.filter(function(N){return y.delimiter.indexOf(N)!==-1}).length||(q=y.delimiter),typeof y.quotes!="boolean"&&typeof y.quotes!="function"&&!Array.isArray(y.quotes)||(w=y.quotes),typeof y.skipEmptyLines!="boolean"&&typeof y.skipEmptyLines!="string"||(U=y.skipEmptyLines),typeof y.newline=="string"&&(re=y.newline),typeof y.quoteChar=="string"&&(Ae=y.quoteChar),typeof y.header=="boolean"&&(F=y.header),Array.isArray(y.columns)){if(y.columns.length===0)throw new Error("Option columns is empty");z=y.columns}y.escapeChar!==void 0&&(xe=y.escapeChar+Ae),y.escapeFormulae instanceof RegExp?j=y.escapeFormulae:typeof y.escapeFormulae=="boolean"&&y.escapeFormulae&&(j=/^[=+\-@\t\r].*$/)}})(),new RegExp(ce(Ae),"g"));if(typeof p=="string"&&(p=JSON.parse(p)),Array.isArray(p)){if(!p.length||Array.isArray(p[0]))return d(null,p,U);if(typeof p[0]=="object")return d(z||Object.keys(p[0]),p,U)}else if(typeof p=="object")return typeof p.data=="string"&&(p.data=JSON.parse(p.data)),Array.isArray(p.data)&&(p.fields||(p.fields=p.meta&&p.meta.fields||z),p.fields||(p.fields=Array.isArray(p.data[0])?p.fields:typeof p.data[0]=="object"?Object.keys(p.data[0]):[]),Array.isArray(p.data[0])||typeof p.data[0]=="object"||(p.data=[p.data])),d(p.fields||[],p.data||[],U);throw new Error("Unable to serialize unrecognized input");function d(N,x,B){var P="",Z=(typeof N=="string"&&(N=JSON.parse(N)),typeof x=="string"&&(x=JSON.parse(x)),Array.isArray(N)&&0<N.length),we=!Array.isArray(x[0]);if(Z&&F){for(var Y=0;Y<N.length;Y++)0<Y&&(P+=q),P+=T(N[Y],Y);0<x.length&&(P+=re)}for(var $=0;$<x.length;$++){var le=(Z?N:x[$]).length,ae=!1,me=Z?Object.keys(x[$]).length===0:x[$].length===0;if(B&&!Z&&(ae=B==="greedy"?x[$].join("").trim()==="":x[$].length===1&&x[$][0].length===0),B==="greedy"&&Z){for(var Be=[],He=0;He<le;He++){var Le=we?N[He]:He;Be.push(x[$][Le])}ae=Be.join("").trim()===""}if(!ae){for(var se=0;se<le;se++){0<se&&!me&&(P+=q);var Pe=Z&&we?N[se]:se;P+=T(x[$][Pe],se)}$<x.length-1&&(!B||0<le&&!me)&&(P+=re)}}return P}function T(N,x){var B,P;return N==null?"":N.constructor===Date?JSON.stringify(N).slice(1,25):(P=!1,j&&typeof N=="string"&&j.test(N)&&(N="'"+N,P=!0),B=N.toString().replace(k,xe),(P=P||w===!0||typeof w=="function"&&w(N,x)||Array.isArray(w)&&w[x]||((Z,we)=>{for(var Y=0;Y<we.length;Y++)if(-1<Z.indexOf(we[Y]))return!0;return!1})(B,D.BAD_DELIMITERS)||-1<B.indexOf(q)||B.charAt(0)===" "||B.charAt(B.length-1)===" ")?Ae+B+Ae:B)}},D.RECORD_SEP="",D.UNIT_SEP="",D.BYTE_ORDER_MARK="\uFEFF",D.BAD_DELIMITERS=["\r",`
`,'"',D.BYTE_ORDER_MARK],D.WORKERS_SUPPORTED=!M&&!!c.Worker,D.NODE_STREAM_INPUT=1,D.LocalChunkSize=10485760,D.RemoteChunkSize=5242880,D.DefaultDelimiter=",",D.Parser=pe,D.ParserHandle=oe,D.NetworkStreamer=X,D.FileStreamer=J,D.StringStreamer=K,D.ReadableStreamStreamer=ie,c.jQuery&&((S=c.jQuery).fn.parse=function(p){var y=p.config||{},w=[];return this.each(function(re){if(!(S(this).prop("tagName").toUpperCase()==="INPUT"&&S(this).attr("type").toLowerCase()==="file"&&c.FileReader)||!this.files||this.files.length===0)return!0;for(var Ae=0;Ae<this.files.length;Ae++)w.push({file:this.files[Ae],inputElem:this,instanceConfig:S.extend({},y)})}),F(),this;function F(){if(w.length===0)W(p.complete)&&p.complete();else{var re,Ae,xe,U,z=w[0];if(W(p.before)){var j=p.before(z.file,z.inputElem);if(typeof j=="object"){if(j.action==="abort")return re="AbortError",Ae=z.file,xe=z.inputElem,U=j.reason,void(W(p.error)&&p.error({name:re},Ae,xe,U));if(j.action==="skip")return void q();typeof j.config=="object"&&(z.instanceConfig=S.extend(z.instanceConfig,j.config))}else if(j==="skip")return void q()}var k=z.instanceConfig.complete;z.instanceConfig.complete=function(d){W(k)&&k(d,z.file,z.inputElem),q()},D.parse(z.file,z.instanceConfig)}}function q(){w.splice(0,1),F()}}),_&&(c.onmessage=function(p){p=p.data,D.WORKER_ID===void 0&&p&&(D.WORKER_ID=p.workerId),typeof p.input=="string"?c.postMessage({workerId:D.WORKER_ID,results:D.parse(p.input,p.config),finished:!0}):(c.File&&p.input instanceof File||p.input instanceof Object)&&(p=D.parse(p.input,p.config))&&c.postMessage({workerId:D.WORKER_ID,results:p,finished:!0})}),(X.prototype=Object.create(C.prototype)).constructor=X,(J.prototype=Object.create(C.prototype)).constructor=J,(K.prototype=Object.create(K.prototype)).constructor=K,(ie.prototype=Object.create(C.prototype)).constructor=ie,D})}(Br)),Br.exports}var Y1=W1();const K1=Hd(Y1),ol=r=>K1.parse(r,{header:!0,skipEmptyLines:!0,dynamicTyping:!0}).data,ay=r=>r.replace(/\s+/g,""),Q1=r=>r.replace(/[{}]/g,"");function fc(r,o){return r.split(o).map(f=>f.trim()).filter(f=>f.length>0)}function jr(r){const o=ay(Q1(r)).split(",");return o.length===1?{min:-1,max:parseInt(o[0],10)}:{min:parseInt(o[0],10),max:parseInt(o[1],10)}}function X1(r){const o=/(\w+)\s*{([\d,\s]+)}/g,f=[];let c;for(;(c=o.exec(r))!==null;){const S=c[1],M=jr(c[2]);f.push({label:S,...M})}return f}function Z1(r){const[o,f]=r.split("_");return{label:o,hands:{Bow:2,Staff:2,Polearm:2,Wand:1}[o]??(f==="2H"?2:1)}}function ny(r){const o=ay(r.Rarity).split(":"),f={label:o[1],value:parseInt(o[0])},c=X1(r["Base Stats"]),S=fc(r.Attributes??"","- "),M=fc(r["Dropped By"],"- "),_=fc((r.Locations??"").replaceAll(`
`,""),"- ");return{name:r.Name,rarity:f,baseStats:c,attributes:S,droppedBy:M,location:_}}function J1(r){return r.map(o=>({...ny(o),attackPower:jr(o["Attack Power"]),damageType:o["Damage Type"],type:Z1(o.Type)}))}function yi(r){return r.map(o=>({...ny(o),armor:o.Armor?jr(o.Armor):{min:-1,max:0},magicArmor:o["Magic Armor"]?jr(o["Magic Armor"]):{min:-1,max:0}}))}function P1(){const[r,o]=Xe.useState(),[f,c]=Xe.useState(),[S,M]=Xe.useState(),[_,V]=Xe.useState(),[E,D]=Xe.useState(),[C,X]=Xe.useState();return Xe.useEffect(()=>{o(J1(ol(U1))),c(yi(ol(z1))),M(yi(ol(k1))),V(yi(ol(V1))),D(yi(ol(F1))),X(yi(ol(j1)))},[]),{weaponData:r,shieldData:f,headData:S,chestData:_,amuletData:E,ringData:C}}function ly(r){const[o,f]=Xe.useState("rarity"),[c,S]=Xe.useState("desc"),[M,_]=Xe.useState("");Xe.useEffect(()=>{M&&f("stat")},[M]),Xe.useEffect(()=>{o!=="stat"&&_("")},[o]);const V=(D,C,X,J)=>D.sort((K,ie)=>{var pe,he;let oe,ce;switch(C){case"name":oe=K.name,ce=ie.name;break;case"rarity":oe=K.rarity.value,ce=ie.rarity.value;break;case"attackPower":oe=K.attackPower.max,ce=ie.attackPower.max;break;case"armor":oe=K.armor.max,ce=ie.armor.max;break;case"magicArmor":oe=K.magicArmor.max,ce=ie.magicArmor.max;break;case"stat":{oe=((pe=K.baseStats.find(de=>de.label===J))==null?void 0:pe.max)||0,ce=((he=ie.baseStats.find(de=>de.label===J))==null?void 0:he.max)||0;break}default:throw new Error(`Invalid field: ${C}`)}return X==="asc"?oe<ce?-1:oe>ce?1:0:oe>ce?-1:oe<ce?1:0});return{sortedItems:Xe.useMemo(()=>V(r,o,c,M),[r,o,c,M]),setSortField:f,sortOrder:c,setSortOrder:S,statFilter:M,setStatFilter:_}}const iy=wc.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 4px;
  width: 100%;

  .sort-controls {
    width: 100%;
  }
`,ry=wc.div`
  display: flex;
  flex-flow: column nowrap;
  width: 240px;
  padding: 4px;
  border: 1px solid #211a19;

  &:hover {
    outline: 1px solid #302725;
  }

  .name {
    color: ${({theme:r,$rarity:o})=>r.colors.rarity[o]};
    font-size: 18px;
  }

  .rarity-type {
    color: #777;
  }

  .armor-magicArmor {
    .values {
      font-size: 20px;
      
      .magicArmor {
        color: skyblue;
      }
    }
    
    .labels {
      font-size: 14px;
      .magicArmor {
        color: skyblue;
      }
    }
  }

  .attackPower {
    font-size: 28px;
  }

  .attackPower,
  .damageType {
    color: ${({theme:r,$damageType:o})=>r.colors.damageType[o?o.toLowerCase():""]};
  }

  .stats {
    color: ${({theme:r})=>r.colors.stats};
  }
`,uy=({setSortField:r,setSortOrder:o,sortOrder:f,setStatFilter:c,statFilter:S,setShowDetails:M,showDetails:_,itemType:V})=>O.jsxs("div",{className:"sort-controls",children:["Sorting:",O.jsx("button",{onClick:o,children:f}),O.jsx("button",{onClick:()=>r("name"),children:"Name"}),V==="Armor"?O.jsxs(O.Fragment,{children:[O.jsx("button",{onClick:()=>r("armor"),children:"Armor"}),O.jsx("button",{onClick:()=>r("magicArmor"),children:"Magic Armor"})]}):O.jsx("button",{onClick:()=>r("attackPower"),children:"Attack Power"}),O.jsx("button",{onClick:()=>r("rarity"),children:"Rarity"}),O.jsx("button",{onClick:()=>r("stat"),children:"Stat"}),O.jsxs("select",{onChange:E=>c(E.target.value),value:S,children:[O.jsx("option",{disabled:!0,value:"",children:"Select Stat"}),O.jsx("option",{value:"Might",children:"Might"}),O.jsx("option",{value:"Dexterity",children:"Dexterity"}),O.jsx("option",{value:"Vitality",children:"Vitality"}),O.jsx("option",{value:"Intelligence",children:"Intelligence"}),O.jsx("option",{value:"Reflex",children:"Reflex"})]}),O.jsxs("button",{onClick:M,children:[_?"Hide":"Show"," details"]})]}),$1=({data:r})=>{const{sortedItems:o,...f}=ly(r),[c,S]=Xe.useState(!1);return O.jsxs(iy,{children:[O.jsx(uy,{itemType:"Weapon",...f,setShowDetails:()=>S(M=>!M),showDetails:c,setSortOrder:()=>f.setSortOrder(M=>M==="asc"?"desc":"asc")}),o.map(M=>O.jsx(I1,{showDetails:c,...M}))]})},I1=({name:r,rarity:o,type:f,attackPower:c,damageType:S,baseStats:M,attributes:_,droppedBy:V,location:E,showDetails:D})=>O.jsxs(ry,{$rarity:o.value,$damageType:S,children:[O.jsx("div",{className:"name",children:r.toUpperCase()}),O.jsxs("div",{className:"rarity-type",children:[o.label," ",f.label," (",f.hands,"H)"]}),O.jsx("div",{className:"attackPower",children:c.min<0?c.max:`${c.min} - ${c.max}`}),O.jsxs("div",{className:"damageType",children:[S," Damage"]}),O.jsx("div",{className:"baseStats",children:M.map(C=>O.jsxs("div",{className:"stats",children:[O.jsxs("span",{children:["+",C.max," "]}),O.jsx("span",{children:C.label})]}))}),O.jsx("div",{className:"attributes",children:_.map(C=>O.jsx("div",{children:C}))}),D&&O.jsxs(O.Fragment,{children:[O.jsxs("div",{className:"droppedBy",children:["Dropped by:",V.map(C=>O.jsx("div",{children:C}))]}),O.jsxs("div",{className:"location",children:["Location:",E.map(C=>O.jsx("div",{children:C}))]})]})]}),gi=({data:r,type:o})=>{const{sortedItems:f,...c}=ly(r),[S,M]=Xe.useState(!1);return O.jsxs(iy,{children:[O.jsx(uy,{itemType:"Armor",...c,setShowDetails:()=>M(_=>!_),showDetails:S,setSortOrder:()=>c.setSortOrder(_=>_==="asc"?"desc":"asc")}),f.map(_=>O.jsx(e2,{..._,showDetails:S,type:o}))]})},e2=({name:r,rarity:o,armor:f,magicArmor:c,baseStats:S,attributes:M,droppedBy:_,location:V,showDetails:E,type:D})=>O.jsxs(ry,{$rarity:o.value,children:[O.jsx("div",{className:"name",children:r.toUpperCase()}),O.jsxs("div",{className:"rarity-type",children:[o.label," ",D]}),O.jsxs("div",{className:"armor-magicArmor",children:[O.jsxs("div",{className:"values",children:[O.jsx("span",{className:"armor",children:f.max}),O.jsx("span",{children:"/"}),O.jsx("span",{className:"magicArmor",children:c.max})]}),O.jsxs("div",{className:"labels",children:[O.jsx("span",{children:"Armor"}),O.jsx("span",{children:"/"}),O.jsx("span",{className:"magicArmor",children:"Magic Armor"})]})]}),O.jsx("div",{className:"baseStats",children:S.map(C=>O.jsxs("div",{className:"stats",children:[O.jsxs("span",{children:["+",C.max," "]}),O.jsx("span",{children:C.label})]}))}),O.jsx("div",{className:"attributes",children:M.map(C=>O.jsx("div",{children:C}))}),E&&O.jsxs(O.Fragment,{children:[O.jsxs("div",{className:"droppedBy",children:["Dropped by:",_.map(C=>O.jsx("div",{children:C}))]}),O.jsxs("div",{className:"location",children:["Location:",V.map(C=>O.jsx("div",{children:C}))]})]})]});function Za({tabs:r,children:o}){const[f,c]=Xe.useState(0);return O.jsxs("div",{children:[O.jsx("div",{className:"tabs",children:r.map((S,M)=>O.jsx("button",{className:`tab ${f===M?"active":""}`,onClick:()=>c(M),children:S}))}),O.jsx("div",{className:"tab-content",children:Ja.Children.toArray(o)[f]})]})}Za.Tab=({children:r})=>r;function t2(){const{weaponData:r,shieldData:o,headData:f,chestData:c,amuletData:S,ringData:M}=P1();return O.jsxs(Za,{tabs:["Weapons","Shields","Heads","Chestplates","Amulets","Rings"],children:[O.jsx(Za.Tab,{children:r&&O.jsx($1,{data:r})}),O.jsx(Za.Tab,{children:o&&O.jsx(gi,{data:o,type:"Shield"})}),O.jsx(Za.Tab,{children:f&&O.jsx(gi,{data:f,type:"Head"})}),O.jsx(Za.Tab,{children:c&&O.jsx(gi,{data:c,type:"Chest"})}),O.jsx(Za.Tab,{children:S&&O.jsx(gi,{data:S,type:"Amulet"})}),O.jsx(Za.Tab,{children:M&&O.jsx(gi,{data:M,type:"Ring"})})]})}class a2 extends Xe.Component{constructor(o){super(o),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(o){return{hasError:!0,error:o,errorInfo:null}}componentDidCatch(o,f){console.error("Error caught in boundary:",o,f),this.setState({errorInfo:f})}render(){var o;return this.state.hasError?O.jsxs("div",{children:[O.jsx("h1",{children:"Something went wrong."}),O.jsxs("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),O.jsx("br",{}),(o=this.state.errorInfo)==null?void 0:o.componentStack]})]}):this.props.children}}function n2(){return O.jsx(a2,{children:O.jsx(t2,{})})}const l2={colors:{stats:"royalblue",rarity:{4:"peru",3:"fuchsia",2:"aqua",1:"limegreen",0:"white"},damageType:{physical:"white",fire:"lightcoral",shadow:"violet",lightning:"blue",cold:"skyblue",holy:"yellow"}}};Cm.createRoot(document.getElementById("root")).render(O.jsx(Xe.StrictMode,{children:O.jsx(N1,{theme:l2,children:O.jsx(n2,{})})}));
