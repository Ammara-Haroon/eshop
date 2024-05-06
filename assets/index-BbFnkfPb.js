function DA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function S1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var I1={exports:{}},Cc={},C1={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Symbol.for("react.element"),OA=Symbol.for("react.portal"),LA=Symbol.for("react.fragment"),MA=Symbol.for("react.strict_mode"),VA=Symbol.for("react.profiler"),FA=Symbol.for("react.provider"),$A=Symbol.for("react.context"),jA=Symbol.for("react.forward_ref"),UA=Symbol.for("react.suspense"),zA=Symbol.for("react.memo"),BA=Symbol.for("react.lazy"),M_=Symbol.iterator;function WA(t){return t===null||typeof t!="object"?null:(t=M_&&t[M_]||t["@@iterator"],typeof t=="function"?t:null)}var A1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k1=Object.assign,R1={};function $s(t,e,n){this.props=t,this.context=e,this.refs=R1,this.updater=n||A1}$s.prototype.isReactComponent={};$s.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$s.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function P1(){}P1.prototype=$s.prototype;function Gp(t,e,n){this.props=t,this.context=e,this.refs=R1,this.updater=n||A1}var Qp=Gp.prototype=new P1;Qp.constructor=Gp;k1(Qp,$s.prototype);Qp.isPureReactComponent=!0;var V_=Array.isArray,x1=Object.prototype.hasOwnProperty,Kp={current:null},N1={key:!0,ref:!0,__self:!0,__source:!0};function b1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)x1.call(e,r)&&!N1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:za,type:t,key:s,ref:o,props:i,_owner:Kp.current}}function qA(t,e){return{$$typeof:za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yp(t){return typeof t=="object"&&t!==null&&t.$$typeof===za}function HA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var F_=/\/+/g;function Vh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?HA(""+t.key):e.toString(36)}function su(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case za:case OA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Vh(o,0):r,V_(i)?(n="",t!=null&&(n=t.replace(F_,"$&/")+"/"),su(i,e,n,"",function(u){return u})):i!=null&&(Yp(i)&&(i=qA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(F_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",V_(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Vh(s,a);o+=su(s,e,n,l,i)}else if(l=WA(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Vh(s,a++),o+=su(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wl(t,e,n){if(t==null)return t;var r=[],i=0;return su(t,r,"","",function(s){return e.call(n,s,i++)}),r}function GA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gt={current:null},ou={transition:null},QA={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:ou,ReactCurrentOwner:Kp};Q.Children={map:wl,forEach:function(t,e,n){wl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wl(t,function(){e++}),e},toArray:function(t){return wl(t,function(e){return e})||[]},only:function(t){if(!Yp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=$s;Q.Fragment=LA;Q.Profiler=VA;Q.PureComponent=Gp;Q.StrictMode=MA;Q.Suspense=UA;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QA;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=k1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)x1.call(e,l)&&!N1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:za,type:t.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(t){return t={$$typeof:$A,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:FA,_context:t},t.Consumer=t};Q.createElement=b1;Q.createFactory=function(t){var e=b1.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:jA,render:t}};Q.isValidElement=Yp;Q.lazy=function(t){return{$$typeof:BA,_payload:{_status:-1,_result:t},_init:GA}};Q.memo=function(t,e){return{$$typeof:zA,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=ou.transition;ou.transition={};try{t()}finally{ou.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return gt.current.useCallback(t,e)};Q.useContext=function(t){return gt.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return gt.current.useDeferredValue(t)};Q.useEffect=function(t,e){return gt.current.useEffect(t,e)};Q.useId=function(){return gt.current.useId()};Q.useImperativeHandle=function(t,e,n){return gt.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return gt.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return gt.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return gt.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return gt.current.useReducer(t,e,n)};Q.useRef=function(t){return gt.current.useRef(t)};Q.useState=function(t){return gt.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return gt.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return gt.current.useTransition()};Q.version="18.2.0";C1.exports=Q;var I=C1.exports;const Ac=S1(I),KA=DA({__proto__:null,default:Ac},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YA=I,XA=Symbol.for("react.element"),JA=Symbol.for("react.fragment"),ZA=Object.prototype.hasOwnProperty,ek=YA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tk={key:!0,ref:!0,__self:!0,__source:!0};function D1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ZA.call(e,r)&&!tk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:XA,type:t,key:s,ref:o,props:i,_owner:ek.current}}Cc.Fragment=JA;Cc.jsx=D1;Cc.jsxs=D1;I1.exports=Cc;var y=I1.exports,Bf={},O1={exports:{}},bt={},L1={exports:{}},M1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,B){var q=L.length;L.push(B);e:for(;0<q;){var Ce=q-1>>>1,Ve=L[Ce];if(0<i(Ve,B))L[Ce]=B,L[q]=Ve,q=Ce;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var B=L[0],q=L.pop();if(q!==B){L[0]=q;e:for(var Ce=0,Ve=L.length,yl=Ve>>>1;Ce<yl;){var Fr=2*(Ce+1)-1,Mh=L[Fr],$r=Fr+1,vl=L[$r];if(0>i(Mh,q))$r<Ve&&0>i(vl,Mh)?(L[Ce]=vl,L[$r]=q,Ce=$r):(L[Ce]=Mh,L[Fr]=q,Ce=Fr);else if($r<Ve&&0>i(vl,q))L[Ce]=vl,L[$r]=q,Ce=$r;else break e}}return B}function i(L,B){var q=L.sortIndex-B.sortIndex;return q!==0?q:L.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,d=!1,_=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=L)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function E(L){if(v=!1,g(L),!_)if(n(l)!==null)_=!0,Oh(C);else{var B=n(u);B!==null&&Lh(E,B.startTime-L)}}function C(L,B){_=!1,v&&(v=!1,m(V),V=-1),d=!0;var q=f;try{for(g(B),h=n(l);h!==null&&(!(h.expirationTime>B)||L&&!Wt());){var Ce=h.callback;if(typeof Ce=="function"){h.callback=null,f=h.priorityLevel;var Ve=Ce(h.expirationTime<=B);B=t.unstable_now(),typeof Ve=="function"?h.callback=Ve:h===n(l)&&r(l),g(B)}else r(l);h=n(l)}if(h!==null)var yl=!0;else{var Fr=n(u);Fr!==null&&Lh(E,Fr.startTime-B),yl=!1}return yl}finally{h=null,f=q,d=!1}}var k=!1,N=null,V=-1,te=5,W=-1;function Wt(){return!(t.unstable_now()-W<te)}function no(){if(N!==null){var L=t.unstable_now();W=L;var B=!0;try{B=N(!0,L)}finally{B?ro():(k=!1,N=null)}}else k=!1}var ro;if(typeof p=="function")ro=function(){p(no)};else if(typeof MessageChannel<"u"){var L_=new MessageChannel,bA=L_.port2;L_.port1.onmessage=no,ro=function(){bA.postMessage(null)}}else ro=function(){w(no,0)};function Oh(L){N=L,k||(k=!0,ro())}function Lh(L,B){V=w(function(){L(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||d||(_=!0,Oh(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var q=f;f=B;try{return L()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=f;f=L;try{return B()}finally{f=q}},t.unstable_scheduleCallback=function(L,B,q){var Ce=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Ce+q:Ce):q=Ce,L){case 1:var Ve=-1;break;case 2:Ve=250;break;case 5:Ve=1073741823;break;case 4:Ve=1e4;break;default:Ve=5e3}return Ve=q+Ve,L={id:c++,callback:B,priorityLevel:L,startTime:q,expirationTime:Ve,sortIndex:-1},q>Ce?(L.sortIndex=q,e(u,L),n(l)===null&&L===n(u)&&(v?(m(V),V=-1):v=!0,Lh(E,q-Ce))):(L.sortIndex=Ve,e(l,L),_||d||(_=!0,Oh(C))),L},t.unstable_shouldYield=Wt,t.unstable_wrapCallback=function(L){var B=f;return function(){var q=f;f=B;try{return L.apply(this,arguments)}finally{f=q}}}})(M1);L1.exports=M1;var nk=L1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V1=I,xt=nk;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F1=new Set,Yo={};function Si(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(Yo[t]=e,t=0;t<e.length;t++)F1.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wf=Object.prototype.hasOwnProperty,rk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$_={},j_={};function ik(t){return Wf.call(j_,t)?!0:Wf.call($_,t)?!1:rk.test(t)?j_[t]=!0:($_[t]=!0,!1)}function sk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ok(t,e,n,r){if(e===null||typeof e>"u"||sk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xp=/[\-:]([a-z])/g;function Jp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xp,Jp);Ze[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xp,Jp);Ze[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xp,Jp);Ze[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zp(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ok(e,n,i,r)&&(n=null),r||i===null?ik(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zn=V1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,El=Symbol.for("react.element"),zi=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),em=Symbol.for("react.strict_mode"),qf=Symbol.for("react.profiler"),$1=Symbol.for("react.provider"),j1=Symbol.for("react.context"),tm=Symbol.for("react.forward_ref"),Hf=Symbol.for("react.suspense"),Gf=Symbol.for("react.suspense_list"),nm=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),U1=Symbol.for("react.offscreen"),U_=Symbol.iterator;function io(t){return t===null||typeof t!="object"?null:(t=U_&&t[U_]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Fh;function wo(t){if(Fh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fh=e&&e[1]||""}return`
`+Fh+t}var $h=!1;function jh(t,e){if(!t||$h)return"";$h=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$h=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wo(t):""}function ak(t){switch(t.tag){case 5:return wo(t.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return t=jh(t.type,!1),t;case 11:return t=jh(t.type.render,!1),t;case 1:return t=jh(t.type,!0),t;default:return""}}function Qf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bi:return"Fragment";case zi:return"Portal";case qf:return"Profiler";case em:return"StrictMode";case Hf:return"Suspense";case Gf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case j1:return(t.displayName||"Context")+".Consumer";case $1:return(t._context.displayName||"Context")+".Provider";case tm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nm:return e=t.displayName||null,e!==null?e:Qf(t.type)||"Memo";case Qn:e=t._payload,t=t._init;try{return Qf(t(e))}catch{}}return null}function lk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qf(e);case 8:return e===em?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function z1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uk(t){var e=z1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tl(t){t._valueTracker||(t._valueTracker=uk(t))}function B1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=z1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Iu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kf(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function z_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function W1(t,e){e=e.checked,e!=null&&Zp(t,"checked",e,!1)}function Yf(t,e){W1(t,e);var n=wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xf(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function B_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xf(t,e,n){(e!=="number"||Iu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Eo=Array.isArray;function os(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Jf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function W_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(Eo(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function q1(t,e){var n=wr(e.value),r=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function q_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function H1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?H1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Sl,G1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Sl=Sl||document.createElement("div"),Sl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Sl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ck=["Webkit","ms","Moz","O"];Object.keys(xo).forEach(function(t){ck.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xo[e]=xo[t]})});function Q1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xo.hasOwnProperty(t)&&xo[t]?(""+e).trim():e+"px"}function K1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Q1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hk=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ed(t,e){if(e){if(hk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function td(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nd=null;function rm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rd=null,as=null,ls=null;function H_(t){if(t=qa(t)){if(typeof rd!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Nc(e),rd(t.stateNode,t.type,e))}}function Y1(t){as?ls?ls.push(t):ls=[t]:as=t}function X1(){if(as){var t=as,e=ls;if(ls=as=null,H_(t),e)for(t=0;t<e.length;t++)H_(e[t])}}function J1(t,e){return t(e)}function Z1(){}var Uh=!1;function ew(t,e,n){if(Uh)return t(e,n);Uh=!0;try{return J1(t,e,n)}finally{Uh=!1,(as!==null||ls!==null)&&(Z1(),X1())}}function Jo(t,e){var n=t.stateNode;if(n===null)return null;var r=Nc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var sd=!1;if(Dn)try{var so={};Object.defineProperty(so,"passive",{get:function(){sd=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{sd=!1}function fk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var No=!1,Cu=null,Au=!1,od=null,dk={onError:function(t){No=!0,Cu=t}};function pk(t,e,n,r,i,s,o,a,l){No=!1,Cu=null,fk.apply(dk,arguments)}function mk(t,e,n,r,i,s,o,a,l){if(pk.apply(this,arguments),No){if(No){var u=Cu;No=!1,Cu=null}else throw Error(A(198));Au||(Au=!0,od=u)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function G_(t){if(Ii(t)!==t)throw Error(A(188))}function gk(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return G_(i),t;if(s===r)return G_(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function nw(t){return t=gk(t),t!==null?rw(t):null}function rw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rw(t);if(e!==null)return e;t=t.sibling}return null}var iw=xt.unstable_scheduleCallback,Q_=xt.unstable_cancelCallback,_k=xt.unstable_shouldYield,yk=xt.unstable_requestPaint,Ae=xt.unstable_now,vk=xt.unstable_getCurrentPriorityLevel,im=xt.unstable_ImmediatePriority,sw=xt.unstable_UserBlockingPriority,ku=xt.unstable_NormalPriority,wk=xt.unstable_LowPriority,ow=xt.unstable_IdlePriority,kc=null,mn=null;function Ek(t){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(kc,t,void 0,(t.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:Ik,Tk=Math.log,Sk=Math.LN2;function Ik(t){return t>>>=0,t===0?32:31-(Tk(t)/Sk|0)|0}var Il=64,Cl=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ru(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=To(a):(s&=o,s!==0&&(r=To(s)))}else o=n&~i,o!==0?r=To(o):s!==0&&(r=To(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Zt(e),i=1<<n,r|=t[n],e&=~i;return r}function Ck(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ak(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Ck(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ad(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function aw(){var t=Il;return Il<<=1,!(Il&4194240)&&(Il=64),t}function zh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zt(e),t[e]=n}function kk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Zt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Zt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ie=0;function lw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uw,om,cw,hw,fw,ld=!1,Al=[],sr=null,or=null,ar=null,Zo=new Map,ea=new Map,Yn=[],Rk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function K_(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function oo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=qa(e),e!==null&&om(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Pk(t,e,n,r,i){switch(e){case"focusin":return sr=oo(sr,t,e,n,r,i),!0;case"dragenter":return or=oo(or,t,e,n,r,i),!0;case"mouseover":return ar=oo(ar,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Zo.set(s,oo(Zo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ea.set(s,oo(ea.get(s)||null,t,e,n,r,i)),!0}return!1}function dw(t){var e=Gr(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=tw(n),e!==null){t.blockedOn=e,fw(t.priority,function(){cw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function au(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ud(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);nd=r,n.target.dispatchEvent(r),nd=null}else return e=qa(n),e!==null&&om(e),t.blockedOn=n,!1;e.shift()}return!0}function Y_(t,e,n){au(t)&&n.delete(e)}function xk(){ld=!1,sr!==null&&au(sr)&&(sr=null),or!==null&&au(or)&&(or=null),ar!==null&&au(ar)&&(ar=null),Zo.forEach(Y_),ea.forEach(Y_)}function ao(t,e){t.blockedOn===e&&(t.blockedOn=null,ld||(ld=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,xk)))}function ta(t){function e(i){return ao(i,t)}if(0<Al.length){ao(Al[0],t);for(var n=1;n<Al.length;n++){var r=Al[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sr!==null&&ao(sr,t),or!==null&&ao(or,t),ar!==null&&ao(ar,t),Zo.forEach(e),ea.forEach(e),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)dw(n),n.blockedOn===null&&Yn.shift()}var us=zn.ReactCurrentBatchConfig,Pu=!0;function Nk(t,e,n,r){var i=ie,s=us.transition;us.transition=null;try{ie=1,am(t,e,n,r)}finally{ie=i,us.transition=s}}function bk(t,e,n,r){var i=ie,s=us.transition;us.transition=null;try{ie=4,am(t,e,n,r)}finally{ie=i,us.transition=s}}function am(t,e,n,r){if(Pu){var i=ud(t,e,n,r);if(i===null)Jh(t,e,r,xu,n),K_(t,r);else if(Pk(i,t,e,n,r))r.stopPropagation();else if(K_(t,r),e&4&&-1<Rk.indexOf(t)){for(;i!==null;){var s=qa(i);if(s!==null&&uw(s),s=ud(t,e,n,r),s===null&&Jh(t,e,r,xu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Jh(t,e,r,null,n)}}var xu=null;function ud(t,e,n,r){if(xu=null,t=rm(r),t=Gr(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xu=t,null}function pw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vk()){case im:return 1;case sw:return 4;case ku:case wk:return 16;case ow:return 536870912;default:return 16}default:return 16}}var er=null,lm=null,lu=null;function mw(){if(lu)return lu;var t,e=lm,n=e.length,r,i="value"in er?er.value:er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return lu=i.slice(t,1<r?1-r:void 0)}function uu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function kl(){return!0}function X_(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?kl:X_,this.isPropagationStopped=X_,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},um=Dt(js),Wa=Ee({},js,{view:0,detail:0}),Dk=Dt(Wa),Bh,Wh,lo,Rc=Ee({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(Bh=t.screenX-lo.screenX,Wh=t.screenY-lo.screenY):Wh=Bh=0,lo=t),Bh)},movementY:function(t){return"movementY"in t?t.movementY:Wh}}),J_=Dt(Rc),Ok=Ee({},Rc,{dataTransfer:0}),Lk=Dt(Ok),Mk=Ee({},Wa,{relatedTarget:0}),qh=Dt(Mk),Vk=Ee({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),Fk=Dt(Vk),$k=Ee({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jk=Dt($k),Uk=Ee({},js,{data:0}),Z_=Dt(Uk),zk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Wk[t])?!!e[t]:!1}function cm(){return qk}var Hk=Ee({},Wa,{key:function(t){if(t.key){var e=zk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cm,charCode:function(t){return t.type==="keypress"?uu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gk=Dt(Hk),Qk=Ee({},Rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ey=Dt(Qk),Kk=Ee({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cm}),Yk=Dt(Kk),Xk=Ee({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jk=Dt(Xk),Zk=Ee({},Rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eR=Dt(Zk),tR=[9,13,27,32],hm=Dn&&"CompositionEvent"in window,bo=null;Dn&&"documentMode"in document&&(bo=document.documentMode);var nR=Dn&&"TextEvent"in window&&!bo,gw=Dn&&(!hm||bo&&8<bo&&11>=bo),ty=" ",ny=!1;function _w(t,e){switch(t){case"keyup":return tR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wi=!1;function rR(t,e){switch(t){case"compositionend":return yw(e);case"keypress":return e.which!==32?null:(ny=!0,ty);case"textInput":return t=e.data,t===ty&&ny?null:t;default:return null}}function iR(t,e){if(Wi)return t==="compositionend"||!hm&&_w(t,e)?(t=mw(),lu=lm=er=null,Wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gw&&e.locale!=="ko"?null:e.data;default:return null}}var sR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ry(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sR[t.type]:e==="textarea"}function vw(t,e,n,r){Y1(r),e=Nu(e,"onChange"),0<e.length&&(n=new um("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Do=null,na=null;function oR(t){xw(t,0)}function Pc(t){var e=Gi(t);if(B1(e))return t}function aR(t,e){if(t==="change")return e}var ww=!1;if(Dn){var Hh;if(Dn){var Gh="oninput"in document;if(!Gh){var iy=document.createElement("div");iy.setAttribute("oninput","return;"),Gh=typeof iy.oninput=="function"}Hh=Gh}else Hh=!1;ww=Hh&&(!document.documentMode||9<document.documentMode)}function sy(){Do&&(Do.detachEvent("onpropertychange",Ew),na=Do=null)}function Ew(t){if(t.propertyName==="value"&&Pc(na)){var e=[];vw(e,na,t,rm(t)),ew(oR,e)}}function lR(t,e,n){t==="focusin"?(sy(),Do=e,na=n,Do.attachEvent("onpropertychange",Ew)):t==="focusout"&&sy()}function uR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pc(na)}function cR(t,e){if(t==="click")return Pc(e)}function hR(t,e){if(t==="input"||t==="change")return Pc(e)}function fR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rn=typeof Object.is=="function"?Object.is:fR;function ra(t,e){if(rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wf.call(e,i)||!rn(t[i],e[i]))return!1}return!0}function oy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ay(t,e){var n=oy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oy(n)}}function Tw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sw(){for(var t=window,e=Iu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Iu(t.document)}return e}function fm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dR(t){var e=Sw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tw(n.ownerDocument.documentElement,n)){if(r!==null&&fm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ay(n,s);var o=ay(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pR=Dn&&"documentMode"in document&&11>=document.documentMode,qi=null,cd=null,Oo=null,hd=!1;function ly(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hd||qi==null||qi!==Iu(r)||(r=qi,"selectionStart"in r&&fm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oo&&ra(Oo,r)||(Oo=r,r=Nu(cd,"onSelect"),0<r.length&&(e=new um("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qi)))}function Rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hi={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},Qh={},Iw={};Dn&&(Iw=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function xc(t){if(Qh[t])return Qh[t];if(!Hi[t])return t;var e=Hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Iw)return Qh[t]=e[n];return t}var Cw=xc("animationend"),Aw=xc("animationiteration"),kw=xc("animationstart"),Rw=xc("transitionend"),Pw=new Map,uy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){Pw.set(t,e),Si(e,[t])}for(var Kh=0;Kh<uy.length;Kh++){var Yh=uy[Kh],mR=Yh.toLowerCase(),gR=Yh[0].toUpperCase()+Yh.slice(1);Nr(mR,"on"+gR)}Nr(Cw,"onAnimationEnd");Nr(Aw,"onAnimationIteration");Nr(kw,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(Rw,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Si("onBeforeInput",["compositionend","keypress","textInput","paste"]);Si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_R=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function cy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,mk(r,e,void 0,t),t.currentTarget=null}function xw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;cy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;cy(i,a,u),s=l}}}if(Au)throw t=od,Au=!1,od=null,t}function ue(t,e){var n=e[gd];n===void 0&&(n=e[gd]=new Set);var r=t+"__bubble";n.has(r)||(Nw(e,t,2,!1),n.add(r))}function Xh(t,e,n){var r=0;e&&(r|=4),Nw(n,t,r,e)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function ia(t){if(!t[Pl]){t[Pl]=!0,F1.forEach(function(n){n!=="selectionchange"&&(_R.has(n)||Xh(n,!1,t),Xh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pl]||(e[Pl]=!0,Xh("selectionchange",!1,e))}}function Nw(t,e,n,r){switch(pw(e)){case 1:var i=Nk;break;case 4:i=bk;break;default:i=am}n=i.bind(null,e,n,t),i=void 0,!sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}ew(function(){var u=s,c=rm(n),h=[];e:{var f=Pw.get(t);if(f!==void 0){var d=um,_=t;switch(t){case"keypress":if(uu(n)===0)break e;case"keydown":case"keyup":d=Gk;break;case"focusin":_="focus",d=qh;break;case"focusout":_="blur",d=qh;break;case"beforeblur":case"afterblur":d=qh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=J_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Lk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Yk;break;case Cw:case Aw:case kw:d=Fk;break;case Rw:d=Jk;break;case"scroll":d=Dk;break;case"wheel":d=eR;break;case"copy":case"cut":case"paste":d=jk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=ey}var v=(e&4)!==0,w=!v&&t==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var p=u,g;p!==null;){g=p;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,m!==null&&(E=Jo(p,m),E!=null&&v.push(sa(p,E,g)))),w)break;p=p.return}0<v.length&&(f=new d(f,_,null,n,c),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",d=t==="mouseout"||t==="pointerout",f&&n!==nd&&(_=n.relatedTarget||n.fromElement)&&(Gr(_)||_[On]))break e;if((d||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,d?(_=n.relatedTarget||n.toElement,d=u,_=_?Gr(_):null,_!==null&&(w=Ii(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(d=null,_=u),d!==_)){if(v=J_,E="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=ey,E="onPointerLeave",m="onPointerEnter",p="pointer"),w=d==null?f:Gi(d),g=_==null?f:Gi(_),f=new v(E,p+"leave",d,n,c),f.target=w,f.relatedTarget=g,E=null,Gr(c)===u&&(v=new v(m,p+"enter",_,n,c),v.target=g,v.relatedTarget=w,E=v),w=E,d&&_)t:{for(v=d,m=_,p=0,g=v;g;g=Oi(g))p++;for(g=0,E=m;E;E=Oi(E))g++;for(;0<p-g;)v=Oi(v),p--;for(;0<g-p;)m=Oi(m),g--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=Oi(v),m=Oi(m)}v=null}else v=null;d!==null&&hy(h,f,d,v,!1),_!==null&&w!==null&&hy(h,w,_,v,!0)}}e:{if(f=u?Gi(u):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var C=aR;else if(ry(f))if(ww)C=hR;else{C=uR;var k=lR}else(d=f.nodeName)&&d.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=cR);if(C&&(C=C(t,u))){vw(h,C,n,c);break e}k&&k(t,f,u),t==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&Xf(f,"number",f.value)}switch(k=u?Gi(u):window,t){case"focusin":(ry(k)||k.contentEditable==="true")&&(qi=k,cd=u,Oo=null);break;case"focusout":Oo=cd=qi=null;break;case"mousedown":hd=!0;break;case"contextmenu":case"mouseup":case"dragend":hd=!1,ly(h,n,c);break;case"selectionchange":if(pR)break;case"keydown":case"keyup":ly(h,n,c)}var N;if(hm)e:{switch(t){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Wi?_w(t,n)&&(V="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(V="onCompositionStart");V&&(gw&&n.locale!=="ko"&&(Wi||V!=="onCompositionStart"?V==="onCompositionEnd"&&Wi&&(N=mw()):(er=c,lm="value"in er?er.value:er.textContent,Wi=!0)),k=Nu(u,V),0<k.length&&(V=new Z_(V,t,null,n,c),h.push({event:V,listeners:k}),N?V.data=N:(N=yw(n),N!==null&&(V.data=N)))),(N=nR?rR(t,n):iR(t,n))&&(u=Nu(u,"onBeforeInput"),0<u.length&&(c=new Z_("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}xw(h,e)})}function sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Jo(t,n),s!=null&&r.unshift(sa(t,s,i)),s=Jo(t,e),s!=null&&r.push(sa(t,s,i))),t=t.return}return r}function Oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Jo(n,s),l!=null&&o.unshift(sa(n,l,a))):i||(l=Jo(n,s),l!=null&&o.push(sa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yR=/\r\n?/g,vR=/\u0000|\uFFFD/g;function fy(t){return(typeof t=="string"?t:""+t).replace(yR,`
`).replace(vR,"")}function xl(t,e,n){if(e=fy(e),fy(t)!==e&&n)throw Error(A(425))}function bu(){}var fd=null,dd=null;function pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var md=typeof setTimeout=="function"?setTimeout:void 0,wR=typeof clearTimeout=="function"?clearTimeout:void 0,dy=typeof Promise=="function"?Promise:void 0,ER=typeof queueMicrotask=="function"?queueMicrotask:typeof dy<"u"?function(t){return dy.resolve(null).then(t).catch(TR)}:md;function TR(t){setTimeout(function(){throw t})}function Zh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ta(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ta(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function py(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),un="__reactFiber$"+Us,oa="__reactProps$"+Us,On="__reactContainer$"+Us,gd="__reactEvents$"+Us,SR="__reactListeners$"+Us,IR="__reactHandles$"+Us;function Gr(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[On]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=py(t);t!==null;){if(n=t[un])return n;t=py(t)}return e}t=n,n=t.parentNode}return null}function qa(t){return t=t[un]||t[On],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Nc(t){return t[oa]||null}var _d=[],Qi=-1;function br(t){return{current:t}}function me(t){0>Qi||(t.current=_d[Qi],_d[Qi]=null,Qi--)}function le(t,e){Qi++,_d[Qi]=t.current,t.current=e}var Er={},ht=br(Er),Et=br(!1),ai=Er;function vs(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(t){return t=t.childContextTypes,t!=null}function Du(){me(Et),me(ht)}function my(t,e,n){if(ht.current!==Er)throw Error(A(168));le(ht,e),le(Et,n)}function bw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,lk(t)||"Unknown",i));return Ee({},n,r)}function Ou(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,ai=ht.current,le(ht,t),le(Et,Et.current),!0}function gy(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=bw(t,e,ai),r.__reactInternalMemoizedMergedChildContext=t,me(Et),me(ht),le(ht,t)):me(Et),le(Et,n)}var In=null,bc=!1,ef=!1;function Dw(t){In===null?In=[t]:In.push(t)}function CR(t){bc=!0,Dw(t)}function Dr(){if(!ef&&In!==null){ef=!0;var t=0,e=ie;try{var n=In;for(ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,bc=!1}catch(i){throw In!==null&&(In=In.slice(t+1)),iw(im,Dr),i}finally{ie=e,ef=!1}}return null}var Ki=[],Yi=0,Lu=null,Mu=0,Lt=[],Mt=0,li=null,Cn=1,An="";function Ur(t,e){Ki[Yi++]=Mu,Ki[Yi++]=Lu,Lu=t,Mu=e}function Ow(t,e,n){Lt[Mt++]=Cn,Lt[Mt++]=An,Lt[Mt++]=li,li=t;var r=Cn;t=An;var i=32-Zt(r)-1;r&=~(1<<i),n+=1;var s=32-Zt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Cn=1<<32-Zt(e)+i|n<<i|r,An=s+t}else Cn=1<<s|n<<i|r,An=t}function dm(t){t.return!==null&&(Ur(t,1),Ow(t,1,0))}function pm(t){for(;t===Lu;)Lu=Ki[--Yi],Ki[Yi]=null,Mu=Ki[--Yi],Ki[Yi]=null;for(;t===li;)li=Lt[--Mt],Lt[Mt]=null,An=Lt[--Mt],Lt[Mt]=null,Cn=Lt[--Mt],Lt[Mt]=null}var Rt=null,kt=null,ye=!1,Qt=null;function Lw(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _y(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,kt=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=li!==null?{id:Cn,overflow:An}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,kt=null,!0):!1;default:return!1}}function yd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vd(t){if(ye){var e=kt;if(e){var n=e;if(!_y(t,e)){if(yd(t))throw Error(A(418));e=lr(n.nextSibling);var r=Rt;e&&_y(t,e)?Lw(r,n):(t.flags=t.flags&-4097|2,ye=!1,Rt=t)}}else{if(yd(t))throw Error(A(418));t.flags=t.flags&-4097|2,ye=!1,Rt=t}}}function yy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function Nl(t){if(t!==Rt)return!1;if(!ye)return yy(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pd(t.type,t.memoizedProps)),e&&(e=kt)){if(yd(t))throw Mw(),Error(A(418));for(;e;)Lw(t,e),e=lr(e.nextSibling)}if(yy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=Rt?lr(t.stateNode.nextSibling):null;return!0}function Mw(){for(var t=kt;t;)t=lr(t.nextSibling)}function ws(){kt=Rt=null,ye=!1}function mm(t){Qt===null?Qt=[t]:Qt.push(t)}var AR=zn.ReactCurrentBatchConfig;function Ht(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Vu=br(null),Fu=null,Xi=null,gm=null;function _m(){gm=Xi=Fu=null}function ym(t){var e=Vu.current;me(Vu),t._currentValue=e}function wd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){Fu=t,gm=Xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if(gm!==t)if(t={context:t,memoizedValue:e,next:null},Xi===null){if(Fu===null)throw Error(A(308));Xi=t,Fu.dependencies={lanes:0,firstContext:t}}else Xi=Xi.next=t;return e}var Qr=null;function vm(t){Qr===null?Qr=[t]:Qr.push(t)}function Vw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ln(t,r)}function Ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Kn=!1;function wm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ln(t,n)}return i=r.interleaved,i===null?(e.next=e,vm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ln(t,n)}function cu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sm(t,n)}}function vy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $u(t,e,n,r){var i=t.updateQueue;Kn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,d=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(f=e,d=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){h=_.call(d,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,f=typeof _=="function"?_.call(d,h,f):_,f==null)break e;h=Ee({},h,f);break e;case 2:Kn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else d={eventTime:d,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=d,l=h):c=c.next=d,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ci|=o,t.lanes=o,t.memoizedState=h}}function wy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var $w=new V1.Component().refs;function Ed(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dc={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=hr(t),s=xn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,i),e!==null&&(en(e,t,i,r),cu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=hr(t),s=xn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,i),e!==null&&(en(e,t,i,r),cu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=hr(t),i=xn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ur(t,i,r),e!==null&&(en(e,t,r,n),cu(e,t,r))}};function Ey(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,r)||!ra(i,s):!0}function jw(t,e,n){var r=!1,i=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Ut(s):(i=Tt(e)?ai:ht.current,r=e.contextTypes,s=(r=r!=null)?vs(t,i):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ty(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dc.enqueueReplaceState(e,e.state,null)}function Td(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=$w,wm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ut(s):(s=Tt(e)?ai:ht.current,i.context=vs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ed(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dc.enqueueReplaceState(i,i.state,null),$u(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===$w&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function bl(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sy(t){var e=t._init;return e(t._payload)}function Uw(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=fr(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,E){return p===null||p.tag!==6?(p=lf(g,m.mode,E),p.return=m,p):(p=i(p,g),p.return=m,p)}function l(m,p,g,E){var C=g.type;return C===Bi?c(m,p,g.props.children,E,g.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Qn&&Sy(C)===p.type)?(E=i(p,g.props),E.ref=uo(m,p,g),E.return=m,E):(E=gu(g.type,g.key,g.props,null,m.mode,E),E.ref=uo(m,p,g),E.return=m,E)}function u(m,p,g,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=uf(g,m.mode,E),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function c(m,p,g,E,C){return p===null||p.tag!==7?(p=ii(g,m.mode,E,C),p.return=m,p):(p=i(p,g),p.return=m,p)}function h(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=lf(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case El:return g=gu(p.type,p.key,p.props,null,m.mode,g),g.ref=uo(m,null,p),g.return=m,g;case zi:return p=uf(p,m.mode,g),p.return=m,p;case Qn:var E=p._init;return h(m,E(p._payload),g)}if(Eo(p)||io(p))return p=ii(p,m.mode,g,null),p.return=m,p;bl(m,p)}return null}function f(m,p,g,E){var C=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(m,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case El:return g.key===C?l(m,p,g,E):null;case zi:return g.key===C?u(m,p,g,E):null;case Qn:return C=g._init,f(m,p,C(g._payload),E)}if(Eo(g)||io(g))return C!==null?null:c(m,p,g,E,null);bl(m,g)}return null}function d(m,p,g,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(g)||null,a(p,m,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case El:return m=m.get(E.key===null?g:E.key)||null,l(p,m,E,C);case zi:return m=m.get(E.key===null?g:E.key)||null,u(p,m,E,C);case Qn:var k=E._init;return d(m,p,g,k(E._payload),C)}if(Eo(E)||io(E))return m=m.get(g)||null,c(p,m,E,C,null);bl(p,E)}return null}function _(m,p,g,E){for(var C=null,k=null,N=p,V=p=0,te=null;N!==null&&V<g.length;V++){N.index>V?(te=N,N=null):te=N.sibling;var W=f(m,N,g[V],E);if(W===null){N===null&&(N=te);break}t&&N&&W.alternate===null&&e(m,N),p=s(W,p,V),k===null?C=W:k.sibling=W,k=W,N=te}if(V===g.length)return n(m,N),ye&&Ur(m,V),C;if(N===null){for(;V<g.length;V++)N=h(m,g[V],E),N!==null&&(p=s(N,p,V),k===null?C=N:k.sibling=N,k=N);return ye&&Ur(m,V),C}for(N=r(m,N);V<g.length;V++)te=d(N,m,V,g[V],E),te!==null&&(t&&te.alternate!==null&&N.delete(te.key===null?V:te.key),p=s(te,p,V),k===null?C=te:k.sibling=te,k=te);return t&&N.forEach(function(Wt){return e(m,Wt)}),ye&&Ur(m,V),C}function v(m,p,g,E){var C=io(g);if(typeof C!="function")throw Error(A(150));if(g=C.call(g),g==null)throw Error(A(151));for(var k=C=null,N=p,V=p=0,te=null,W=g.next();N!==null&&!W.done;V++,W=g.next()){N.index>V?(te=N,N=null):te=N.sibling;var Wt=f(m,N,W.value,E);if(Wt===null){N===null&&(N=te);break}t&&N&&Wt.alternate===null&&e(m,N),p=s(Wt,p,V),k===null?C=Wt:k.sibling=Wt,k=Wt,N=te}if(W.done)return n(m,N),ye&&Ur(m,V),C;if(N===null){for(;!W.done;V++,W=g.next())W=h(m,W.value,E),W!==null&&(p=s(W,p,V),k===null?C=W:k.sibling=W,k=W);return ye&&Ur(m,V),C}for(N=r(m,N);!W.done;V++,W=g.next())W=d(N,m,V,W.value,E),W!==null&&(t&&W.alternate!==null&&N.delete(W.key===null?V:W.key),p=s(W,p,V),k===null?C=W:k.sibling=W,k=W);return t&&N.forEach(function(no){return e(m,no)}),ye&&Ur(m,V),C}function w(m,p,g,E){if(typeof g=="object"&&g!==null&&g.type===Bi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case El:e:{for(var C=g.key,k=p;k!==null;){if(k.key===C){if(C=g.type,C===Bi){if(k.tag===7){n(m,k.sibling),p=i(k,g.props.children),p.return=m,m=p;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Qn&&Sy(C)===k.type){n(m,k.sibling),p=i(k,g.props),p.ref=uo(m,k,g),p.return=m,m=p;break e}n(m,k);break}else e(m,k);k=k.sibling}g.type===Bi?(p=ii(g.props.children,m.mode,E,g.key),p.return=m,m=p):(E=gu(g.type,g.key,g.props,null,m.mode,E),E.ref=uo(m,p,g),E.return=m,m=E)}return o(m);case zi:e:{for(k=g.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=uf(g,m.mode,E),p.return=m,m=p}return o(m);case Qn:return k=g._init,w(m,p,k(g._payload),E)}if(Eo(g))return _(m,p,g,E);if(io(g))return v(m,p,g,E);bl(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=lf(g,m.mode,E),p.return=m,m=p),o(m)):n(m,p)}return w}var Es=Uw(!0),zw=Uw(!1),Ha={},gn=br(Ha),aa=br(Ha),la=br(Ha);function Kr(t){if(t===Ha)throw Error(A(174));return t}function Em(t,e){switch(le(la,e),le(aa,t),le(gn,Ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zf(e,t)}me(gn),le(gn,e)}function Ts(){me(gn),me(aa),me(la)}function Bw(t){Kr(la.current);var e=Kr(gn.current),n=Zf(e,t.type);e!==n&&(le(aa,t),le(gn,n))}function Tm(t){aa.current===t&&(me(gn),me(aa))}var ve=br(0);function ju(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tf=[];function Sm(){for(var t=0;t<tf.length;t++)tf[t]._workInProgressVersionPrimary=null;tf.length=0}var hu=zn.ReactCurrentDispatcher,nf=zn.ReactCurrentBatchConfig,ui=0,we=null,De=null,je=null,Uu=!1,Lo=!1,ua=0,kR=0;function et(){throw Error(A(321))}function Im(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rn(t[n],e[n]))return!1;return!0}function Cm(t,e,n,r,i,s){if(ui=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hu.current=t===null||t.memoizedState===null?NR:bR,t=n(r,i),Lo){s=0;do{if(Lo=!1,ua=0,25<=s)throw Error(A(301));s+=1,je=De=null,e.updateQueue=null,hu.current=DR,t=n(r,i)}while(Lo)}if(hu.current=zu,e=De!==null&&De.next!==null,ui=0,je=De=we=null,Uu=!1,e)throw Error(A(300));return t}function Am(){var t=ua!==0;return ua=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?we.memoizedState=je=t:je=je.next=t,je}function zt(){if(De===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=je===null?we.memoizedState:je.next;if(e!==null)je=e,De=t;else{if(t===null)throw Error(A(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},je===null?we.memoizedState=je=t:je=je.next=t}return je}function ca(t,e){return typeof e=="function"?e(t):e}function rf(t){var e=zt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ui&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,we.lanes|=c,ci|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,rn(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,ci|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sf(t){var e=zt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);rn(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ww(){}function qw(t,e){var n=we,r=zt(),i=e(),s=!rn(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,km(Qw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,ha(9,Gw.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(A(349));ui&30||Hw(n,e,i)}return i}function Hw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gw(t,e,n,r){e.value=n,e.getSnapshot=r,Kw(e)&&Yw(t)}function Qw(t,e,n){return n(function(){Kw(e)&&Yw(t)})}function Kw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!rn(t,n)}catch{return!0}}function Yw(t){var e=Ln(t,1);e!==null&&en(e,t,1,-1)}function Iy(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=xR.bind(null,we,t),[e.memoizedState,t]}function ha(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xw(){return zt().memoizedState}function fu(t,e,n,r){var i=ln();we.flags|=t,i.memoizedState=ha(1|e,n,void 0,r===void 0?null:r)}function Oc(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&Im(r,o.deps)){i.memoizedState=ha(e,n,s,r);return}}we.flags|=t,i.memoizedState=ha(1|e,n,s,r)}function Cy(t,e){return fu(8390656,8,t,e)}function km(t,e){return Oc(2048,8,t,e)}function Jw(t,e){return Oc(4,2,t,e)}function Zw(t,e){return Oc(4,4,t,e)}function eE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tE(t,e,n){return n=n!=null?n.concat([t]):null,Oc(4,4,eE.bind(null,e,t),n)}function Rm(){}function nE(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Im(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function rE(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Im(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function iE(t,e,n){return ui&21?(rn(n,e)||(n=aw(),we.lanes|=n,ci|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function RR(t,e){var n=ie;ie=n!==0&&4>n?n:4,t(!0);var r=nf.transition;nf.transition={};try{t(!1),e()}finally{ie=n,nf.transition=r}}function sE(){return zt().memoizedState}function PR(t,e,n){var r=hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},oE(t))aE(e,n);else if(n=Vw(t,e,n,r),n!==null){var i=mt();en(n,t,r,i),lE(n,e,r)}}function xR(t,e,n){var r=hr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(oE(t))aE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,rn(a,o)){var l=e.interleaved;l===null?(i.next=i,vm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Vw(t,e,i,r),n!==null&&(i=mt(),en(n,t,r,i),lE(n,e,r))}}function oE(t){var e=t.alternate;return t===we||e!==null&&e===we}function aE(t,e){Lo=Uu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sm(t,n)}}var zu={readContext:Ut,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},NR={readContext:Ut,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:Cy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fu(4194308,4,eE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fu(4194308,4,t,e)},useInsertionEffect:function(t,e){return fu(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=PR.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:Iy,useDebugValue:Rm,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=Iy(!1),e=t[0];return t=RR.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=ln();if(ye){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Be===null)throw Error(A(349));ui&30||Hw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Cy(Qw.bind(null,r,s,t),[t]),r.flags|=2048,ha(9,Gw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ln(),e=Be.identifierPrefix;if(ye){var n=An,r=Cn;n=(r&~(1<<32-Zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bR={readContext:Ut,useCallback:nE,useContext:Ut,useEffect:km,useImperativeHandle:tE,useInsertionEffect:Jw,useLayoutEffect:Zw,useMemo:rE,useReducer:rf,useRef:Xw,useState:function(){return rf(ca)},useDebugValue:Rm,useDeferredValue:function(t){var e=zt();return iE(e,De.memoizedState,t)},useTransition:function(){var t=rf(ca)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Ww,useSyncExternalStore:qw,useId:sE,unstable_isNewReconciler:!1},DR={readContext:Ut,useCallback:nE,useContext:Ut,useEffect:km,useImperativeHandle:tE,useInsertionEffect:Jw,useLayoutEffect:Zw,useMemo:rE,useReducer:sf,useRef:Xw,useState:function(){return sf(ca)},useDebugValue:Rm,useDeferredValue:function(t){var e=zt();return De===null?e.memoizedState=t:iE(e,De.memoizedState,t)},useTransition:function(){var t=sf(ca)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Ww,useSyncExternalStore:qw,useId:sE,unstable_isNewReconciler:!1};function Ss(t,e){try{var n="",r=e;do n+=ak(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function of(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OR=typeof WeakMap=="function"?WeakMap:Map;function uE(t,e,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wu||(Wu=!0,Dd=r),Sd(t,e)},n}function cE(t,e,n){n=xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Sd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sd(t,e),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ay(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new OR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=QR.bind(null,t,e,n),e.then(t,t))}function ky(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ry(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xn(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var LR=zn.ReactCurrentOwner,vt=!1;function dt(t,e,n,r){e.child=t===null?zw(e,null,n,r):Es(e,t.child,n,r)}function Py(t,e,n,r,i){n=n.render;var s=e.ref;return cs(e,i),r=Cm(t,e,n,r,s,i),n=Am(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(ye&&n&&dm(e),e.flags|=1,dt(t,e,r,i),e.child)}function xy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hE(t,e,s,r,i)):(t=gu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,r)&&t.ref===e.ref)return Mn(t,e,i)}return e.flags|=1,t=fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function hE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ra(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,Mn(t,e,i)}return Id(t,e,n,r,i)}function fE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Zi,Ct),Ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(Zi,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(Zi,Ct),Ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(Zi,Ct),Ct|=r;return dt(t,e,i,n),e.child}function dE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Id(t,e,n,r,i){var s=Tt(n)?ai:ht.current;return s=vs(e,s),cs(e,i),n=Cm(t,e,n,r,s,i),r=Am(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(ye&&r&&dm(e),e.flags|=1,dt(t,e,n,i),e.child)}function Ny(t,e,n,r,i){if(Tt(n)){var s=!0;Ou(e)}else s=!1;if(cs(e,i),e.stateNode===null)du(t,e),jw(e,n,r),Td(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ut(u):(u=Tt(n)?ai:ht.current,u=vs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ty(e,o,r,u),Kn=!1;var f=e.memoizedState;o.state=f,$u(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Et.current||Kn?(typeof c=="function"&&(Ed(e,n,c,r),l=e.memoizedState),(a=Kn||Ey(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Fw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ht(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ut(l):(l=Tt(n)?ai:ht.current,l=vs(e,l));var d=n.getDerivedStateFromProps;(c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Ty(e,o,r,l),Kn=!1,f=e.memoizedState,o.state=f,$u(e,r,o,i);var _=e.memoizedState;a!==h||f!==_||Et.current||Kn?(typeof d=="function"&&(Ed(e,n,d,r),_=e.memoizedState),(u=Kn||Ey(e,n,u,r,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Cd(t,e,n,r,s,i)}function Cd(t,e,n,r,i,s){dE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gy(e,n,!1),Mn(t,e,s);r=e.stateNode,LR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Es(e,t.child,null,s),e.child=Es(e,null,a,s)):dt(t,e,a,s),e.memoizedState=r.state,i&&gy(e,n,!0),e.child}function pE(t){var e=t.stateNode;e.pendingContext?my(t,e.pendingContext,e.pendingContext!==e.context):e.context&&my(t,e.context,!1),Em(t,e.containerInfo)}function by(t,e,n,r,i){return ws(),mm(i),e.flags|=256,dt(t,e,n,r),e.child}var Ad={dehydrated:null,treeContext:null,retryLane:0};function kd(t){return{baseLanes:t,cachePool:null,transitions:null}}function mE(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(ve,i&1),t===null)return vd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Vc(o,r,0,null),t=ii(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kd(n),e.memoizedState=Ad,t):Pm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return MR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=fr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=fr(a,s):(s=ii(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?kd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ad,r}return s=t.child,t=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Pm(t,e){return e=Vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Dl(t,e,n,r){return r!==null&&mm(r),Es(e,t.child,null,n),t=Pm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function MR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=of(Error(A(422))),Dl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Vc({mode:"visible",children:r.children},i,0,null),s=ii(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Es(e,t.child,null,o),e.child.memoizedState=kd(o),e.memoizedState=Ad,s);if(!(e.mode&1))return Dl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=of(s,r,void 0),Dl(t,e,o,r)}if(a=(o&t.childLanes)!==0,vt||a){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ln(t,i),en(r,t,i,-1))}return Lm(),r=of(Error(A(421))),Dl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=KR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,kt=lr(i.nextSibling),Rt=e,ye=!0,Qt=null,t!==null&&(Lt[Mt++]=Cn,Lt[Mt++]=An,Lt[Mt++]=li,Cn=t.id,An=t.overflow,li=e),e=Pm(e,r.children),e.flags|=4096,e)}function Dy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wd(t.return,e,n)}function af(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dy(t,n,e);else if(t.tag===19)Dy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ju(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),af(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ju(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}af(e,!0,n,null,s);break;case"together":af(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function du(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ci|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VR(t,e,n){switch(e.tag){case 3:pE(e),ws();break;case 5:Bw(e);break;case 1:Tt(e.type)&&Ou(e);break;case 4:Em(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(Vu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?mE(t,e,n):(le(ve,ve.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);le(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,fE(t,e,n)}return Mn(t,e,n)}var _E,Rd,yE,vE;_E=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rd=function(){};yE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kr(gn.current);var s=null;switch(n){case"input":i=Kf(t,i),r=Kf(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Jf(t,i),r=Jf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bu)}ed(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ue("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};vE=function(t,e,n,r){n!==r&&(e.flags|=4)};function co(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function FR(t,e,n){var r=e.pendingProps;switch(pm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return Tt(e.type)&&Du(),tt(e),null;case 3:return r=e.stateNode,Ts(),me(Et),me(ht),Sm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(Md(Qt),Qt=null))),Rd(t,e),tt(e),null;case 5:Tm(e);var i=Kr(la.current);if(n=e.type,t!==null&&e.stateNode!=null)yE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return tt(e),null}if(t=Kr(gn.current),Nl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[un]=e,r[oa]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<So.length;i++)ue(So[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":z_(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":W_(r,s),ue("invalid",r)}ed(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&xl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xl(r.textContent,a,t),i=["children",""+a]):Yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":Tl(r),B_(r,s,!0);break;case"textarea":Tl(r),q_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=H1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[un]=e,t[oa]=r,_E(t,e,!1,!1),e.stateNode=t;e:{switch(o=td(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<So.length;i++)ue(So[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":z_(t,r),i=Kf(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),ue("invalid",t);break;case"textarea":W_(t,r),i=Jf(t,r),ue("invalid",t);break;default:i=r}ed(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?K1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&G1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xo(t,l):typeof l=="number"&&Xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ue("scroll",t):l!=null&&Zp(t,s,l,o))}switch(n){case"input":Tl(t),B_(t,r,!1);break;case"textarea":Tl(t),q_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?os(t,!!r.multiple,s,!1):r.defaultValue!=null&&os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)vE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=Kr(la.current),Kr(gn.current),Nl(e)){if(r=e.stateNode,n=e.memoizedProps,r[un]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:xl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=e,e.stateNode=r}return tt(e),null;case 13:if(me(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&kt!==null&&e.mode&1&&!(e.flags&128))Mw(),ws(),e.flags|=98560,s=!1;else if(s=Nl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[un]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),s=!1}else Qt!==null&&(Md(Qt),Qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?Oe===0&&(Oe=3):Lm())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return Ts(),Rd(t,e),t===null&&ia(e.stateNode.containerInfo),tt(e),null;case 10:return ym(e.type._context),tt(e),null;case 17:return Tt(e.type)&&Du(),tt(e),null;case 19:if(me(ve),s=e.memoizedState,s===null)return tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)co(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ju(t),o!==null){for(e.flags|=128,co(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Is&&(e.flags|=128,r=!0,co(s,!1),e.lanes=4194304)}else{if(!r)if(t=ju(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return tt(e),null}else 2*Ae()-s.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,r=!0,co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ve.current,le(ve,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return Om(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function $R(t,e){switch(pm(e),e.tag){case 1:return Tt(e.type)&&Du(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ts(),me(Et),me(ht),Sm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tm(e),null;case 13:if(me(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(ve),null;case 4:return Ts(),null;case 10:return ym(e.type._context),null;case 22:case 23:return Om(),null;case 24:return null;default:return null}}var Ol=!1,it=!1,jR=typeof WeakSet=="function"?WeakSet:Set,O=null;function Ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function Pd(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Oy=!1;function UR(t,e){if(fd=Pu,t=Sw(),fm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var d;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(d=h.firstChild)!==null;)f=h,h=d;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(d=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=d}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(dd={focusedElem:t,selectionRange:n},Pu=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,w=_.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:Ht(e.type,v),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(E){Te(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return _=Oy,Oy=!1,_}function Mo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pd(e,n,s)}i=i.next}while(i!==r)}}function Lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wE(t){var e=t.alternate;e!==null&&(t.alternate=null,wE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[un],delete e[oa],delete e[gd],delete e[SR],delete e[IR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function EE(t){return t.tag===5||t.tag===3||t.tag===4}function Ly(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||EE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bu));else if(r!==4&&(t=t.child,t!==null))for(Nd(t,e,n),t=t.sibling;t!==null;)Nd(t,e,n),t=t.sibling}function bd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}var He=null,Gt=!1;function qn(t,e,n){for(n=n.child;n!==null;)TE(t,e,n),n=n.sibling}function TE(t,e,n){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(kc,n)}catch{}switch(n.tag){case 5:it||Ji(n,e);case 6:var r=He,i=Gt;He=null,qn(t,e,n),He=r,Gt=i,He!==null&&(Gt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Gt?(t=He,n=n.stateNode,t.nodeType===8?Zh(t.parentNode,n):t.nodeType===1&&Zh(t,n),ta(t)):Zh(He,n.stateNode));break;case 4:r=He,i=Gt,He=n.stateNode.containerInfo,Gt=!0,qn(t,e,n),He=r,Gt=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pd(n,e,o),i=i.next}while(i!==r)}qn(t,e,n);break;case 1:if(!it&&(Ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,e,a)}qn(t,e,n);break;case 21:qn(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,qn(t,e,n),it=r):qn(t,e,n);break;default:qn(t,e,n)}}function My(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jR),e.forEach(function(r){var i=YR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,Gt=!1;break e;case 3:He=a.stateNode.containerInfo,Gt=!0;break e;case 4:He=a.stateNode.containerInfo,Gt=!0;break e}a=a.return}if(He===null)throw Error(A(160));TE(s,o,i),He=null,Gt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)SE(e,t),e=e.sibling}function SE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),an(t),r&4){try{Mo(3,t,t.return),Lc(3,t)}catch(v){Te(t,t.return,v)}try{Mo(5,t,t.return)}catch(v){Te(t,t.return,v)}}break;case 1:qt(e,t),an(t),r&512&&n!==null&&Ji(n,n.return);break;case 5:if(qt(e,t),an(t),r&512&&n!==null&&Ji(n,n.return),t.flags&32){var i=t.stateNode;try{Xo(i,"")}catch(v){Te(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&W1(i,s),td(a,o);var u=td(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?K1(i,h):c==="dangerouslySetInnerHTML"?G1(i,h):c==="children"?Xo(i,h):Zp(i,c,h,u)}switch(a){case"input":Yf(i,s);break;case"textarea":q1(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var d=s.value;d!=null?os(i,!!s.multiple,d,!1):f!==!!s.multiple&&(s.defaultValue!=null?os(i,!!s.multiple,s.defaultValue,!0):os(i,!!s.multiple,s.multiple?[]:"",!1))}i[oa]=s}catch(v){Te(t,t.return,v)}}break;case 6:if(qt(e,t),an(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Te(t,t.return,v)}}break;case 3:if(qt(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(v){Te(t,t.return,v)}break;case 4:qt(e,t),an(t);break;case 13:qt(e,t),an(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bm=Ae())),r&4&&My(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(it=(u=it)||c,qt(e,t),it=u):qt(e,t),an(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(h=O=c;O!==null;){switch(f=O,d=f.child,f.tag){case 0:case 11:case 14:case 15:Mo(4,f,f.return);break;case 1:Ji(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){Te(r,n,v)}}break;case 5:Ji(f,f.return);break;case 22:if(f.memoizedState!==null){Fy(h);continue}}d!==null?(d.return=f,O=d):Fy(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Q1("display",o))}catch(v){Te(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Te(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:qt(e,t),an(t),r&4&&My(t);break;case 21:break;default:qt(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(EE(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xo(i,""),r.flags&=-33);var s=Ly(t);bd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ly(t);Nd(t,a,o);break;default:throw Error(A(161))}}catch(l){Te(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zR(t,e,n){O=t,IE(t)}function IE(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ol;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||it;a=Ol;var u=it;if(Ol=o,(it=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?$y(i):l!==null?(l.return=o,O=l):$y(i);for(;s!==null;)O=s,IE(s),s=s.sibling;O=i,Ol=a,it=u}Vy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):Vy(t)}}function Vy(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||Lc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ht(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ta(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}it||e.flags&512&&xd(e)}catch(f){Te(e,e.return,f)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Fy(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function $y(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lc(4,e)}catch(l){Te(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Te(e,i,l)}}var s=e.return;try{xd(e)}catch(l){Te(e,s,l)}break;case 5:var o=e.return;try{xd(e)}catch(l){Te(e,o,l)}}}catch(l){Te(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var BR=Math.ceil,Bu=zn.ReactCurrentDispatcher,xm=zn.ReactCurrentOwner,jt=zn.ReactCurrentBatchConfig,ee=0,Be=null,Pe=null,Ye=0,Ct=0,Zi=br(0),Oe=0,fa=null,ci=0,Mc=0,Nm=0,Vo=null,yt=null,bm=0,Is=1/0,Sn=null,Wu=!1,Dd=null,cr=null,Ll=!1,tr=null,qu=0,Fo=0,Od=null,pu=-1,mu=0;function mt(){return ee&6?Ae():pu!==-1?pu:pu=Ae()}function hr(t){return t.mode&1?ee&2&&Ye!==0?Ye&-Ye:AR.transition!==null?(mu===0&&(mu=aw()),mu):(t=ie,t!==0||(t=window.event,t=t===void 0?16:pw(t.type)),t):1}function en(t,e,n,r){if(50<Fo)throw Fo=0,Od=null,Error(A(185));Ba(t,n,r),(!(ee&2)||t!==Be)&&(t===Be&&(!(ee&2)&&(Mc|=n),Oe===4&&Xn(t,Ye)),St(t,r),n===1&&ee===0&&!(e.mode&1)&&(Is=Ae()+500,bc&&Dr()))}function St(t,e){var n=t.callbackNode;Ak(t,e);var r=Ru(t,t===Be?Ye:0);if(r===0)n!==null&&Q_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Q_(n),e===1)t.tag===0?CR(jy.bind(null,t)):Dw(jy.bind(null,t)),ER(function(){!(ee&6)&&Dr()}),n=null;else{switch(lw(r)){case 1:n=im;break;case 4:n=sw;break;case 16:n=ku;break;case 536870912:n=ow;break;default:n=ku}n=bE(n,CE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function CE(t,e){if(pu=-1,mu=0,ee&6)throw Error(A(327));var n=t.callbackNode;if(hs()&&t.callbackNode!==n)return null;var r=Ru(t,t===Be?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Hu(t,r);else{e=r;var i=ee;ee|=2;var s=kE();(Be!==t||Ye!==e)&&(Sn=null,Is=Ae()+500,ri(t,e));do try{HR();break}catch(a){AE(t,a)}while(!0);_m(),Bu.current=s,ee=i,Pe!==null?e=0:(Be=null,Ye=0,e=Oe)}if(e!==0){if(e===2&&(i=ad(t),i!==0&&(r=i,e=Ld(t,i))),e===1)throw n=fa,ri(t,0),Xn(t,r),St(t,Ae()),n;if(e===6)Xn(t,r);else{if(i=t.current.alternate,!(r&30)&&!WR(i)&&(e=Hu(t,r),e===2&&(s=ad(t),s!==0&&(r=s,e=Ld(t,s))),e===1))throw n=fa,ri(t,0),Xn(t,r),St(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:zr(t,yt,Sn);break;case 3:if(Xn(t,r),(r&130023424)===r&&(e=bm+500-Ae(),10<e)){if(Ru(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=md(zr.bind(null,t,yt,Sn),e);break}zr(t,yt,Sn);break;case 4:if(Xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Zt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*BR(r/1960))-r,10<r){t.timeoutHandle=md(zr.bind(null,t,yt,Sn),r);break}zr(t,yt,Sn);break;case 5:zr(t,yt,Sn);break;default:throw Error(A(329))}}}return St(t,Ae()),t.callbackNode===n?CE.bind(null,t):null}function Ld(t,e){var n=Vo;return t.current.memoizedState.isDehydrated&&(ri(t,e).flags|=256),t=Hu(t,e),t!==2&&(e=yt,yt=n,e!==null&&Md(e)),t}function Md(t){yt===null?yt=t:yt.push.apply(yt,t)}function WR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e){for(e&=~Nm,e&=~Mc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zt(e),r=1<<n;t[n]=-1,e&=~r}}function jy(t){if(ee&6)throw Error(A(327));hs();var e=Ru(t,0);if(!(e&1))return St(t,Ae()),null;var n=Hu(t,e);if(t.tag!==0&&n===2){var r=ad(t);r!==0&&(e=r,n=Ld(t,r))}if(n===1)throw n=fa,ri(t,0),Xn(t,e),St(t,Ae()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,yt,Sn),St(t,Ae()),null}function Dm(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(Is=Ae()+500,bc&&Dr())}}function hi(t){tr!==null&&tr.tag===0&&!(ee&6)&&hs();var e=ee;ee|=1;var n=jt.transition,r=ie;try{if(jt.transition=null,ie=1,t)return t()}finally{ie=r,jt.transition=n,ee=e,!(ee&6)&&Dr()}}function Om(){Ct=Zi.current,me(Zi)}function ri(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wR(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(pm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Du();break;case 3:Ts(),me(Et),me(ht),Sm();break;case 5:Tm(r);break;case 4:Ts();break;case 13:me(ve);break;case 19:me(ve);break;case 10:ym(r.type._context);break;case 22:case 23:Om()}n=n.return}if(Be=t,Pe=t=fr(t.current,null),Ye=Ct=e,Oe=0,fa=null,Nm=Mc=ci=0,yt=Vo=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qr=null}return t}function AE(t,e){do{var n=Pe;try{if(_m(),hu.current=zu,Uu){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Uu=!1}if(ui=0,je=De=we=null,Lo=!1,ua=0,xm.current=null,n===null||n.return===null){Oe=1,fa=e,Pe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var d=ky(o);if(d!==null){d.flags&=-257,Ry(d,o,a,s,e),d.mode&1&&Ay(s,u,e),e=d,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){Ay(s,u,e),Lm();break e}l=Error(A(426))}}else if(ye&&a.mode&1){var w=ky(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Ry(w,o,a,s,e),mm(Ss(l,a));break e}}s=l=Ss(l,a),Oe!==4&&(Oe=2),Vo===null?Vo=[s]:Vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=uE(s,l,e);vy(s,m);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(cr===null||!cr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=cE(s,a,e);vy(s,E);break e}}s=s.return}while(s!==null)}PE(n)}catch(C){e=C,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function kE(){var t=Bu.current;return Bu.current=zu,t===null?zu:t}function Lm(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Be===null||!(ci&268435455)&&!(Mc&268435455)||Xn(Be,Ye)}function Hu(t,e){var n=ee;ee|=2;var r=kE();(Be!==t||Ye!==e)&&(Sn=null,ri(t,e));do try{qR();break}catch(i){AE(t,i)}while(!0);if(_m(),ee=n,Bu.current=r,Pe!==null)throw Error(A(261));return Be=null,Ye=0,Oe}function qR(){for(;Pe!==null;)RE(Pe)}function HR(){for(;Pe!==null&&!_k();)RE(Pe)}function RE(t){var e=NE(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?PE(t):Pe=e,xm.current=null}function PE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$R(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Pe=null;return}}else if(n=FR(n,e,Ct),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);Oe===0&&(Oe=5)}function zr(t,e,n){var r=ie,i=jt.transition;try{jt.transition=null,ie=1,GR(t,e,n,r)}finally{jt.transition=i,ie=r}return null}function GR(t,e,n,r){do hs();while(tr!==null);if(ee&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kk(t,s),t===Be&&(Pe=Be=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ll||(Ll=!0,bE(ku,function(){return hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=ie;ie=1;var a=ee;ee|=4,xm.current=null,UR(t,n),SE(n,t),dR(dd),Pu=!!fd,dd=fd=null,t.current=n,zR(n),yk(),ee=a,ie=o,jt.transition=s}else t.current=n;if(Ll&&(Ll=!1,tr=t,qu=i),s=t.pendingLanes,s===0&&(cr=null),Ek(n.stateNode),St(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wu)throw Wu=!1,t=Dd,Dd=null,t;return qu&1&&t.tag!==0&&hs(),s=t.pendingLanes,s&1?t===Od?Fo++:(Fo=0,Od=t):Fo=0,Dr(),null}function hs(){if(tr!==null){var t=lw(qu),e=jt.transition,n=ie;try{if(jt.transition=null,ie=16>t?16:t,tr===null)var r=!1;else{if(t=tr,tr=null,qu=0,ee&6)throw Error(A(331));var i=ee;for(ee|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:Mo(8,c,s)}var h=c.child;if(h!==null)h.return=c,O=h;else for(;O!==null;){c=O;var f=c.sibling,d=c.return;if(wE(c),c===u){O=null;break}if(f!==null){f.return=d,O=f;break}O=d}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Mo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,O=m;break e}O=s.return}}var p=t.current;for(O=p;O!==null;){o=O;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,O=g;else e:for(o=p;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Lc(9,a)}}catch(C){Te(a,a.return,C)}if(a===o){O=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,O=E;break e}O=a.return}}if(ee=i,Dr(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(kc,t)}catch{}r=!0}return r}finally{ie=n,jt.transition=e}}return!1}function Uy(t,e,n){e=Ss(n,e),e=uE(t,e,1),t=ur(t,e,1),e=mt(),t!==null&&(Ba(t,1,e),St(t,e))}function Te(t,e,n){if(t.tag===3)Uy(t,t,n);else for(;e!==null;){if(e.tag===3){Uy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){t=Ss(n,t),t=cE(e,t,1),e=ur(e,t,1),t=mt(),e!==null&&(Ba(e,1,t),St(e,t));break}}e=e.return}}function QR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Ye&n)===n&&(Oe===4||Oe===3&&(Ye&130023424)===Ye&&500>Ae()-bm?ri(t,0):Nm|=n),St(t,e)}function xE(t,e){e===0&&(t.mode&1?(e=Cl,Cl<<=1,!(Cl&130023424)&&(Cl=4194304)):e=1);var n=mt();t=Ln(t,e),t!==null&&(Ba(t,e,n),St(t,n))}function KR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xE(t,n)}function YR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),xE(t,n)}var NE;NE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,VR(t,e,n);vt=!!(t.flags&131072)}else vt=!1,ye&&e.flags&1048576&&Ow(e,Mu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;du(t,e),t=e.pendingProps;var i=vs(e,ht.current);cs(e,n),i=Cm(null,e,r,t,i,n);var s=Am();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tt(r)?(s=!0,Ou(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wm(e),i.updater=Dc,e.stateNode=i,i._reactInternals=e,Td(e,r,t,n),e=Cd(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&dm(e),dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(du(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=JR(r),t=Ht(r,t),i){case 0:e=Id(null,e,r,t,n);break e;case 1:e=Ny(null,e,r,t,n);break e;case 11:e=Py(null,e,r,t,n);break e;case 14:e=xy(null,e,r,Ht(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Id(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Ny(t,e,r,i,n);case 3:e:{if(pE(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Fw(t,e),$u(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ss(Error(A(423)),e),e=by(t,e,r,n,i);break e}else if(r!==i){i=Ss(Error(A(424)),e),e=by(t,e,r,n,i);break e}else for(kt=lr(e.stateNode.containerInfo.firstChild),Rt=e,ye=!0,Qt=null,n=zw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ws(),r===i){e=Mn(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return Bw(e),t===null&&vd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,pd(r,i)?o=null:s!==null&&pd(r,s)&&(e.flags|=32),dE(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&vd(e),null;case 13:return mE(t,e,n);case 4:return Em(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Es(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Py(t,e,r,i,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le(Vu,r._currentValue),r._currentValue=o,s!==null)if(rn(s.value,o)){if(s.children===i.children&&!Et.current){e=Mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=xn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,cs(e,n),i=Ut(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,i=Ht(r,e.pendingProps),i=Ht(r.type,i),xy(t,e,r,i,n);case 15:return hE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),du(t,e),e.tag=1,Tt(r)?(t=!0,Ou(e)):t=!1,cs(e,n),jw(e,r,i),Td(e,r,i,n),Cd(null,e,r,!0,t,n);case 19:return gE(t,e,n);case 22:return fE(t,e,n)}throw Error(A(156,e.tag))};function bE(t,e){return iw(t,e)}function XR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new XR(t,e,n,r)}function Mm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JR(t){if(typeof t=="function")return Mm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tm)return 11;if(t===nm)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bi:return ii(n.children,i,s,e);case em:o=8,i|=8;break;case qf:return t=Ft(12,n,e,i|2),t.elementType=qf,t.lanes=s,t;case Hf:return t=Ft(13,n,e,i),t.elementType=Hf,t.lanes=s,t;case Gf:return t=Ft(19,n,e,i),t.elementType=Gf,t.lanes=s,t;case U1:return Vc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $1:o=10;break e;case j1:o=9;break e;case tm:o=11;break e;case nm:o=14;break e;case Qn:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ii(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function Vc(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=U1,t.lanes=n,t.stateNode={isHidden:!1},t}function lf(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function uf(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zh(0),this.expirationTimes=zh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vm(t,e,n,r,i,s,o,a,l){return t=new ZR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wm(s),t}function eP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function DE(t){if(!t)return Er;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(Tt(n))return bw(t,n,e)}return e}function OE(t,e,n,r,i,s,o,a,l){return t=Vm(n,r,!0,t,i,s,o,a,l),t.context=DE(null),n=t.current,r=mt(),i=hr(n),s=xn(r,i),s.callback=e??null,ur(n,s,i),t.current.lanes=i,Ba(t,i,r),St(t,r),t}function Fc(t,e,n,r){var i=e.current,s=mt(),o=hr(i);return n=DE(n),e.context===null?e.context=n:e.pendingContext=n,e=xn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ur(i,e,o),t!==null&&(en(t,i,o,s),cu(t,i,o)),o}function Gu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fm(t,e){zy(t,e),(t=t.alternate)&&zy(t,e)}function tP(){return null}var LE=typeof reportError=="function"?reportError:function(t){console.error(t)};function $m(t){this._internalRoot=t}$c.prototype.render=$m.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Fc(t,e,null,null)};$c.prototype.unmount=$m.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hi(function(){Fc(null,t,null,null)}),e[On]=null}};function $c(t){this._internalRoot=t}$c.prototype.unstable_scheduleHydration=function(t){if(t){var e=hw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yn.length&&e!==0&&e<Yn[n].priority;n++);Yn.splice(n,0,t),n===0&&dw(t)}};function jm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function By(){}function nP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Gu(o);s.call(u)}}var o=OE(e,r,t,0,null,!1,!1,"",By);return t._reactRootContainer=o,t[On]=o.current,ia(t.nodeType===8?t.parentNode:t),hi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Gu(l);a.call(u)}}var l=Vm(t,0,!1,null,null,!1,!1,"",By);return t._reactRootContainer=l,t[On]=l.current,ia(t.nodeType===8?t.parentNode:t),hi(function(){Fc(e,l,n,r)}),l}function Uc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Gu(o);a.call(l)}}Fc(e,o,t,i)}else o=nP(n,e,t,i,r);return Gu(o)}uw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=To(e.pendingLanes);n!==0&&(sm(e,n|1),St(e,Ae()),!(ee&6)&&(Is=Ae()+500,Dr()))}break;case 13:hi(function(){var r=Ln(t,1);if(r!==null){var i=mt();en(r,t,1,i)}}),Fm(t,1)}};om=function(t){if(t.tag===13){var e=Ln(t,134217728);if(e!==null){var n=mt();en(e,t,134217728,n)}Fm(t,134217728)}};cw=function(t){if(t.tag===13){var e=hr(t),n=Ln(t,e);if(n!==null){var r=mt();en(n,t,e,r)}Fm(t,e)}};hw=function(){return ie};fw=function(t,e){var n=ie;try{return ie=t,e()}finally{ie=n}};rd=function(t,e,n){switch(e){case"input":if(Yf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nc(r);if(!i)throw Error(A(90));B1(r),Yf(r,i)}}}break;case"textarea":q1(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};J1=Dm;Z1=hi;var rP={usingClientEntryPoint:!1,Events:[qa,Gi,Nc,Y1,X1,Dm]},ho={findFiberByHostInstance:Gr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iP={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nw(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||tP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{kc=Ml.inject(iP),mn=Ml}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rP;bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jm(e))throw Error(A(200));return eP(t,e,null,n)};bt.createRoot=function(t,e){if(!jm(t))throw Error(A(299));var n=!1,r="",i=LE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vm(t,1,!1,null,null,n,!1,r,i),t[On]=e.current,ia(t.nodeType===8?t.parentNode:t),new $m(e)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=nw(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return hi(t)};bt.hydrate=function(t,e,n){if(!jc(e))throw Error(A(200));return Uc(null,t,e,!0,n)};bt.hydrateRoot=function(t,e,n){if(!jm(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=LE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=OE(e,null,t,1,n??null,i,!1,s,o),t[On]=e.current,ia(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $c(e)};bt.render=function(t,e,n){if(!jc(e))throw Error(A(200));return Uc(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!jc(t))throw Error(A(40));return t._reactRootContainer?(hi(function(){Uc(null,null,t,!1,function(){t._reactRootContainer=null,t[On]=null})}),!0):!1};bt.unstable_batchedUpdates=Dm;bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!jc(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return Uc(t,e,n,!1,r)};bt.version="18.2.0-next-9e3b772b8-20220608";function ME(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ME)}catch(t){console.error(t)}}ME(),O1.exports=bt;var sP=O1.exports,Wy=sP;Bf.createRoot=Wy.createRoot,Bf.hydrateRoot=Wy.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},da.apply(this,arguments)}var nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nr||(nr={}));const qy="popstate";function oP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Vd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Qu(i)}return lP(e,n,null,t)}function Ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function VE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aP(){return Math.random().toString(36).substr(2,8)}function Hy(t,e){return{usr:t.state,key:t.key,idx:e}}function Vd(t,e,n,r){return n===void 0&&(n=null),da({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?zs(e):e,{state:n,key:e&&e.key||r||aP()})}function Qu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function zs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function lP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=nr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(da({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=nr.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:m})}function f(w,m){a=nr.Push;let p=Vd(v.location,w,m);n&&n(p,w),u=c()+1;let g=Hy(p,u),E=v.createHref(p);try{o.pushState(g,"",E)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function d(w,m){a=nr.Replace;let p=Vd(v.location,w,m);n&&n(p,w),u=c();let g=Hy(p,u),E=v.createHref(p);o.replaceState(g,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function _(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:Qu(w);return p=p.replace(/ $/,"%20"),Ne(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let v={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(qy,h),l=w,()=>{i.removeEventListener(qy,h),l=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let m=_(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:d,go(w){return o.go(w)}};return v}var Gy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Gy||(Gy={}));function uP(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?zs(e):e,i=Um(r.pathname||"/",n);if(i==null)return null;let s=FE(t);cP(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=TP(i);o=vP(s[a],l)}return o}function FE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=dr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),FE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:_P(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of $E(s.path))i(s,o,l)}),e}function $E(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=$E(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function cP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hP=/^:[\w-]+$/,fP=3,dP=2,pP=1,mP=10,gP=-2,Qy=t=>t==="*";function _P(t,e){let n=t.split("/"),r=n.length;return n.some(Qy)&&(r+=gP),e&&(r+=dP),n.filter(i=>!Qy(i)).reduce((i,s)=>i+(hP.test(s)?fP:s===""?pP:mP),r)}function yP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function vP(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=wP({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:dr([i,c.pathname]),pathnameBase:AP(dr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=dr([i,c.pathnameBase]))}return s}function wP(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=EP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:f,isOptional:d}=c;if(f==="*"){let v=a[h]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const _=a[h];return d&&!_?u[f]=void 0:u[f]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function EP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),VE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function TP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return VE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Um(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function SP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?zs(t):t;return{pathname:n?n.startsWith("/")?n:IP(n,e):e,search:kP(r),hash:RP(i)}}function IP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function cf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function CP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function jE(t,e){let n=CP(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function UE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=zs(t):(i=da({},t),Ne(!i.pathname||!i.pathname.includes("?"),cf("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),cf("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),cf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=SP(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const dr=t=>t.join("/").replace(/\/\/+/g,"/"),AP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,RP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function PP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const zE=["post","put","patch","delete"];new Set(zE);const xP=["get",...zE];new Set(xP);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pa(){return pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pa.apply(this,arguments)}const zm=I.createContext(null),NP=I.createContext(null),Ci=I.createContext(null),zc=I.createContext(null),Or=I.createContext({outlet:null,matches:[],isDataRoute:!1}),BE=I.createContext(null);function bP(t,e){let{relative:n}=e===void 0?{}:e;Ga()||Ne(!1);let{basename:r,navigator:i}=I.useContext(Ci),{hash:s,pathname:o,search:a}=HE(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:dr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ga(){return I.useContext(zc)!=null}function Bs(){return Ga()||Ne(!1),I.useContext(zc).location}function WE(t){I.useContext(Ci).static||I.useLayoutEffect(t)}function Ai(){let{isDataRoute:t}=I.useContext(Or);return t?qP():DP()}function DP(){Ga()||Ne(!1);let t=I.useContext(zm),{basename:e,future:n,navigator:r}=I.useContext(Ci),{matches:i}=I.useContext(Or),{pathname:s}=Bs(),o=JSON.stringify(jE(i,n.v7_relativeSplatPath)),a=I.useRef(!1);return WE(()=>{a.current=!0}),I.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=UE(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:dr([e,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[e,r,o,s,t])}function qE(){let{matches:t}=I.useContext(Or),e=t[t.length-1];return e?e.params:{}}function HE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=I.useContext(Ci),{matches:i}=I.useContext(Or),{pathname:s}=Bs(),o=JSON.stringify(jE(i,r.v7_relativeSplatPath));return I.useMemo(()=>UE(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function OP(t,e){return LP(t,e)}function LP(t,e,n,r){Ga()||Ne(!1);let{navigator:i}=I.useContext(Ci),{matches:s}=I.useContext(Or),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Bs(),c;if(e){var h;let w=typeof e=="string"?zs(e):e;l==="/"||(h=w.pathname)!=null&&h.startsWith(l)||Ne(!1),c=w}else c=u;let f=c.pathname||"/",d=f;if(l!=="/"){let w=l.replace(/^\//,"").split("/");d="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let _=uP(t,{pathname:d}),v=jP(_&&_.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:dr([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:dr([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&v?I.createElement(zc.Provider,{value:{location:pa({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:nr.Pop}},v):v}function MP(){let t=WP(),e=PP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,null)}const VP=I.createElement(MP,null);class FP extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?I.createElement(Or.Provider,{value:this.props.routeContext},I.createElement(BE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $P(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(zm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Or.Provider,{value:e},r)}function jP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));c>=0||Ne(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let h=o[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:f,errors:d}=n,_=h.route.loader&&f[h.route.id]===void 0&&(!d||d[h.route.id]===void 0);if(h.route.lazy||_){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,h,f)=>{let d,_=!1,v=null,w=null;n&&(d=a&&h.route.id?a[h.route.id]:void 0,v=h.route.errorElement||VP,l&&(u<0&&f===0?(HP("route-fallback",!1),_=!0,w=null):u===f&&(_=!0,w=h.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),p=()=>{let g;return d?g=v:_?g=w:h.route.Component?g=I.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=c,I.createElement($P,{match:h,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?I.createElement(FP,{location:n.location,revalidation:n.revalidation,component:v,error:d,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var GE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(GE||{}),Ku=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ku||{});function UP(t){let e=I.useContext(zm);return e||Ne(!1),e}function zP(t){let e=I.useContext(NP);return e||Ne(!1),e}function BP(t){let e=I.useContext(Or);return e||Ne(!1),e}function QE(t){let e=BP(),n=e.matches[e.matches.length-1];return n.route.id||Ne(!1),n.route.id}function WP(){var t;let e=I.useContext(BE),n=zP(Ku.UseRouteError),r=QE(Ku.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function qP(){let{router:t}=UP(GE.UseNavigateStable),e=QE(Ku.UseNavigateStable),n=I.useRef(!1);return WE(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,pa({fromRouteId:e},s)))},[t,e])}const Ky={};function HP(t,e,n){!e&&!Ky[t]&&(Ky[t]=!0)}function $i(t){Ne(!1)}function GP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nr.Pop,navigator:s,static:o=!1,future:a}=t;Ga()&&Ne(!1);let l=e.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:l,navigator:s,static:o,future:pa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=zs(r));let{pathname:c="/",search:h="",hash:f="",state:d=null,key:_="default"}=r,v=I.useMemo(()=>{let w=Um(c,l);return w==null?null:{location:{pathname:w,search:h,hash:f,state:d,key:_},navigationType:i}},[l,c,h,f,d,_,i]);return v==null?null:I.createElement(Ci.Provider,{value:u},I.createElement(zc.Provider,{children:n,value:v}))}function QP(t){let{children:e,location:n}=t;return OP(Fd(e),n)}new Promise(()=>{});function Fd(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,Fd(r.props.children,s));return}r.type!==$i&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Fd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $d(){return $d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$d.apply(this,arguments)}function KP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function YP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function XP(t,e){return t.button===0&&(!e||e==="_self")&&!YP(t)}function jd(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function JP(t,e){let n=jd(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const ZP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ex="6";try{window.__reactRouterVersion=ex}catch{}const tx="startTransition",Yy=KA[tx];function nx(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=oP({window:i,v5Compat:!0}));let o=s.current,[a,l]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=I.useCallback(h=>{u&&Yy?Yy(()=>l(h)):l(h)},[l,u]);return I.useLayoutEffect(()=>o.listen(c),[o,c]),I.createElement(GP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const rx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ix=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jn=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,f=KP(e,ZP),{basename:d}=I.useContext(Ci),_,v=!1;if(typeof u=="string"&&ix.test(u)&&(_=u,rx))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),C=Um(E.pathname,d);E.origin===g.origin&&C!=null?u=C+E.search+E.hash:v=!0}catch{}let w=bP(u,{relative:i}),m=sx(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function p(g){r&&r(g),g.defaultPrevented||m(g)}return I.createElement("a",$d({},f,{href:_||w,onClick:v||s?r:p,ref:n,target:l}))});var Xy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Xy||(Xy={}));var Jy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Jy||(Jy={}));function sx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Ai(),u=Bs(),c=HE(t,{relative:o});return I.useCallback(h=>{if(XP(h,n)){h.preventDefault();let f=r!==void 0?r:Qu(u)===Qu(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function ox(t){let e=I.useRef(jd(t)),n=I.useRef(!1),r=Bs(),i=I.useMemo(()=>JP(r.search,n.current?null:e.current),[r.search]),s=Ai(),o=I.useCallback((a,l)=>{const u=jd(typeof a=="function"?a(i):a);n.current=!0,s("?"+u,l)},[s,i]);return[i,o]}const ax="_page_1so91_1",lx={page:ax},ux="_carousel_12x11_1",cx="_container_12x11_23",hx="_prev_12x11_31",fx="_next_12x11_32",dx="_dots_12x11_44",px="_dot_12x11_44",mx="_thumbnails_12x11_56",gx="_thumbnail_12x11_56",Hn={carousel:ux,container:cx,prev:hx,next:fx,dots:dx,dot:px,thumbnails:mx,thumbnail:gx},_x="_slide_16sqq_1",yx="_fade_16sqq_1",vx={slide:_x,fade:yx},wx=({imgSrc:t,index:e,total:n,caption:r})=>y.jsxs("div",{className:vx.slide,children:[y.jsx("img",{src:t,alt:r}),r&&y.jsx("p",{children:r})]}),KE=({products:t,isAutoSliding:e=!1,showThumbnails:n=!1})=>{const[r,i]=I.useState(0);return I.useEffect(()=>{if(e){const s=setTimeout(()=>{i((r+1)%t.length)},3e3);return()=>{clearTimeout(s)}}},[r]),y.jsxs("div",{className:Hn.carousel,children:[y.jsx("h4",{children:"Products of the Month"}),y.jsxs("div",{className:Hn.container,style:{height:n?"calc(100% - 80px)":"calc(100% - 20px)"},children:[y.jsx("button",{className:Hn.prev,disabled:r===0,onClick:()=>i(r-1),children:"❮"}),y.jsx(wx,{imgSrc:t[r].thumbnail,total:t.length,index:r+1,caption:t[r].title}),y.jsx("button",{className:Hn.next,disabled:r===t.length-1,onClick:()=>i(r+1),children:"❯"})]}),!n&&y.jsx("div",{className:Hn.dots,children:t.map((s,o)=>y.jsx("div",{style:o!==r?{backgroundColor:"darkgray"}:{backgroundColor:"black"},className:Hn.dot,onClick:()=>i(o)},o))}),n&&y.jsx("div",{className:Hn.thumbnails,children:t.map((s,o)=>y.jsx("div",{style:o!==r?{opacity:.5}:{opacity:1},className:Hn.thumbnail,onClick:()=>i(o),children:y.jsx("img",{src:s.thumbnail})},o))})]})},Ex="_container_116r6_1",Tx="_grid_116r6_14",Sx="_sort_116r6_27",hf={container:Ex,grid:Tx,sort:Sx},Ix="_paging_info_1s5lb_1",Cx={paging_info:Ix},Ax=({startIndex:t,endIndex:e,totalNumberOfProducts:n})=>y.jsx("div",{className:Cx.paging_info,children:y.jsxs("small",{children:["Showing ",t," - ",e," of ",n," Products"]})}),kx="_paging_eg7bf_1",Rx="_wrapper_eg7bf_28",Px="_page_nav_eg7bf_34",ff={paging:kx,wrapper:Rx,page_nav:Px},xx=({numberOfPages:t,currentPage:e,fetchPage:n})=>{const r=[],i=e===1||t<=5,s=e===t||t-e<5;let o=e;for(s&&(o=t-4),i&&(o=1);o<e+5&&o<=t;++o)r.push(o);const a=()=>{n(e+1)},l=c=>{n(c)},u=()=>{n(e-1)};return y.jsx("div",{className:ff.wrapper,children:y.jsxs("div",{className:ff.page_nav,children:[y.jsx("button",{onClick:u,disabled:e===1,children:"❮"}),y.jsxs("ol",{className:ff.paging,children:[i?null:y.jsxs("li",{onClick:()=>l(1),children:["1 ",e>2&&"..."]},1),r.map(c=>y.jsx("li",{style:e===c?{textDecoration:"underline",color:"green"}:{},onClick:()=>l(c),children:c},c)),s?null:y.jsx("li",{onClick:()=>l(t),children:e<=t-5&&"..."+t},t)]}),y.jsx("button",{onClick:a,disabled:e===t,children:"❯"})]})})},Nx="_card_w8h6a_1",bx="_icon_w8h6a_44",Dx="_badge_w8h6a_56",Ox="_overlay_w8h6a_72",Vl={card:Nx,icon:bx,badge:Dx,overlay:Ox};var Zy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw Ws(e)},Ws=function(t){return new Error("Firebase Database ("+YE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Lx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;l||(d=64,o||(f=64)),r.push(n[c],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(XE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Lx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Mx;const f=s<<2|a>>4;if(r.push(f),u!==64){const d=a<<4&240|u>>2;if(r.push(d),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Mx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const JE=function(t){const e=XE(t);return Bm.encodeByteArray(e,!0)},Yu=function(t){return JE(t).replace(/\./g,"")},Ud=function(t){try{return Bm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t){return ZE(void 0,t)}function ZE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Fx(n)||(t[n]=ZE(t[n],e[n]));return t}function Fx(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=()=>$x().__FIREBASE_DEFAULTS__,Ux=()=>{if(typeof process>"u"||typeof Zy>"u")return;const t=Zy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ud(t[1]);return e&&JSON.parse(e)},Wm=()=>{try{return jx()||Ux()||zx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bx=t=>{var e,n;return(n=(e=Wm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Wx=t=>{const e=Bx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},eT=()=>{var t;return(t=Wm())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Yu(JSON.stringify(n)),Yu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ma())}function Hx(){var t;const e=(t=Wm())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nT(){return YE.NODE_ADMIN===!0}function Qx(){return!Hx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rT(){try{return typeof indexedDB=="object"}catch{return!1}}function Kx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx="FirebaseError";class qs extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Yx,Object.setPrototypeOf(this,qs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,iT.prototype.create)}}class iT{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Xx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qs(i,a,r)}}function Xx(t,e){return t.replace(Jx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Jx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){return JSON.parse(t)}function Qe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ga(Ud(s[0])||""),n=ga(Ud(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Zx=function(t){const e=sT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},e2=function(t){const e=sT(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ev(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function zd(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(tv(s)&&tv(o)){if(!zd(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function tv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function r2(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t){return t&&t._delegate?t._delegate:t}class As{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a2(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:o2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o2(t){return t===Br?void 0:t}function a2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new s2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const u2={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},c2=X.INFO,h2={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},f2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=h2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hm{constructor(e){this.name=e,this._logLevel=c2,this._logHandler=f2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?u2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const d2=(t,e)=>e.some(n=>t instanceof n);let nv,rv;function p2(){return nv||(nv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m2(){return rv||(rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oT=new WeakMap,Bd=new WeakMap,aT=new WeakMap,df=new WeakMap,Gm=new WeakMap;function g2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oT.set(n,t)}).catch(()=>{}),Gm.set(e,t),e}function _2(t){if(Bd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bd.set(t,e)}let Wd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function y2(t){Wd=t(Wd)}function v2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pf(this),e,...n);return aT.set(r,e.sort?e.sort():[e]),pr(r)}:m2().includes(t)?function(...e){return t.apply(pf(this),e),pr(oT.get(this))}:function(...e){return pr(t.apply(pf(this),e))}}function w2(t){return typeof t=="function"?v2(t):(t instanceof IDBTransaction&&_2(t),d2(t,p2())?new Proxy(t,Wd):t)}function pr(t){if(t instanceof IDBRequest)return g2(t);if(df.has(t))return df.get(t);const e=w2(t);return e!==t&&(df.set(t,e),Gm.set(e,t)),e}const pf=t=>Gm.get(t);function E2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=pr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(pr(o.result),l.oldVersion,l.newVersion,pr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const T2=["get","getKey","getAll","getAllKeys","count"],S2=["put","add","delete","clear"],mf=new Map;function iv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mf.get(e))return mf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=S2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||T2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return mf.set(e,s),s}y2(t=>({...t,get:(e,n,r)=>iv(e,n)||t.get(e,n,r),has:(e,n)=>!!iv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(C2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function C2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qd="@firebase/app",sv="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new Hm("@firebase/app"),A2="@firebase/app-compat",k2="@firebase/analytics-compat",R2="@firebase/analytics",P2="@firebase/app-check-compat",x2="@firebase/app-check",N2="@firebase/auth",b2="@firebase/auth-compat",D2="@firebase/database",O2="@firebase/database-compat",L2="@firebase/functions",M2="@firebase/functions-compat",V2="@firebase/installations",F2="@firebase/installations-compat",$2="@firebase/messaging",j2="@firebase/messaging-compat",U2="@firebase/performance",z2="@firebase/performance-compat",B2="@firebase/remote-config",W2="@firebase/remote-config-compat",q2="@firebase/storage",H2="@firebase/storage-compat",G2="@firebase/firestore",Q2="@firebase/firestore-compat",K2="firebase",Y2="10.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="[DEFAULT]",X2={[qd]:"fire-core",[A2]:"fire-core-compat",[R2]:"fire-analytics",[k2]:"fire-analytics-compat",[x2]:"fire-app-check",[P2]:"fire-app-check-compat",[N2]:"fire-auth",[b2]:"fire-auth-compat",[D2]:"fire-rtdb",[O2]:"fire-rtdb-compat",[L2]:"fire-fn",[M2]:"fire-fn-compat",[V2]:"fire-iid",[F2]:"fire-iid-compat",[$2]:"fire-fcm",[j2]:"fire-fcm-compat",[U2]:"fire-perf",[z2]:"fire-perf-compat",[B2]:"fire-rc",[W2]:"fire-rc-compat",[q2]:"fire-gcs",[H2]:"fire-gcs-compat",[G2]:"fire-fst",[Q2]:"fire-fst-compat","fire-js":"fire-js",[K2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=new Map,J2=new Map,Gd=new Map;function ov(t,e){try{t.container.addComponent(e)}catch(n){fi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _a(t){const e=t.name;if(Gd.has(e))return fi.debug(`There were multiple attempts to register component ${e}.`),!1;Gd.set(e,t);for(const n of Ju.values())ov(n,t);for(const n of J2.values())ov(n,t);return!0}function Z2(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mr=new iT("app","Firebase",eN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new As("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=Y2;function uT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mr.create("bad-app-name",{appName:String(i)});if(n||(n=eT()),!n)throw mr.create("no-options");const s=Ju.get(i);if(s){if(zd(n,s.options)&&zd(r,s.config))return s;throw mr.create("duplicate-app",{appName:i})}const o=new l2(i);for(const l of Gd.values())o.addComponent(l);const a=new tN(n,r,o);return Ju.set(i,a),a}function nN(t=Hd){const e=Ju.get(t);if(!e&&t===Hd&&eT())return uT();if(!e)throw mr.create("no-app",{appName:t});return e}function gr(t,e,n){var r;let i=(r=X2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fi.warn(a.join(" "));return}_a(new As(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN="firebase-heartbeat-database",iN=1,ya="firebase-heartbeat-store";let gf=null;function cT(){return gf||(gf=E2(rN,iN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ya)}catch(n){console.warn(n)}}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),gf}async function sN(t){try{const n=(await cT()).transaction(ya),r=await n.objectStore(ya).get(hT(t));return await n.done,r}catch(e){if(e instanceof qs)fi.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fi.warn(n.message)}}}async function av(t,e){try{const r=(await cT()).transaction(ya,"readwrite");await r.objectStore(ya).put(e,hT(t)),await r.done}catch(n){if(n instanceof qs)fi.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fi.warn(r.message)}}}function hT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=1024,aN=30*24*60*60*1e3;class lN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=aN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lv(),{heartbeatsToSend:r,unsentEntries:i}=uN(this._heartbeatsCache.heartbeats),s=Yu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function lv(){return new Date().toISOString().substring(0,10)}function uN(t,e=oN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),uv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),uv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rT()?Kx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return av(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return av(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function uv(t){return Yu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(t){_a(new As("platform-logger",e=>new I2(e),"PRIVATE")),_a(new As("heartbeat",e=>new lN(e),"PRIVATE")),gr(qd,sv,t),gr(qd,sv,"esm2017"),gr("fire-js","")}hN("");var fN="firebase",dN="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gr(fN,dN,"app");var pN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Qm=Qm||{},j=pN||self;function Wc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function mN(t){return Object.prototype.hasOwnProperty.call(t,_f)&&t[_f]||(t[_f]=++gN)}var _f="closure_uid_"+(1e9*Math.random()>>>0),gN=0;function _N(t,e,n){return t.call.apply(t.bind,arguments)}function yN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=_N:ut=yN,ut.apply(null,arguments)}function Fl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Lr(){this.s=this.s,this.o=this.o}var vN=0;Lr.prototype.s=!1;Lr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),vN!=0)&&mN(this)};Lr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Km(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function cv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Wc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var wN=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};j.addEventListener("test",n,e),j.removeEventListener("test",n,e)}catch{}return t}();function va(t){return/^[\s\xa0]*$/.test(t)}function qc(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function cn(t){return qc().indexOf(t)!=-1}function Ym(t){return Ym[" "](t),t}Ym[" "]=function(){};function EN(t,e){var n=db;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var TN=cn("Opera"),ks=cn("Trident")||cn("MSIE"),dT=cn("Edge"),Qd=dT||ks,pT=cn("Gecko")&&!(qc().toLowerCase().indexOf("webkit")!=-1&&!cn("Edge"))&&!(cn("Trident")||cn("MSIE"))&&!cn("Edge"),SN=qc().toLowerCase().indexOf("webkit")!=-1&&!cn("Edge");function mT(){var t=j.document;return t?t.documentMode:void 0}var Kd;e:{var yf="",vf=function(){var t=qc();if(pT)return/rv:([^\);]+)(\)|;)/.exec(t);if(dT)return/Edge\/([\d\.]+)/.exec(t);if(ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(SN)return/WebKit\/(\S+)/.exec(t);if(TN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(vf&&(yf=vf?vf[1]:""),ks){var wf=mT();if(wf!=null&&wf>parseFloat(yf)){Kd=String(wf);break e}}Kd=yf}var Yd;if(j.document&&ks){var hv=mT();Yd=hv||parseInt(Kd,10)||void 0}else Yd=void 0;var IN=Yd;function wa(t,e){if(ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pT){e:{try{Ym(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:CN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wa.$.h.call(this)}}qe(wa,ct);var CN={2:"touch",3:"pen",4:"mouse"};wa.prototype.h=function(){wa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ka="closure_listenable_"+(1e6*Math.random()|0),AN=0;function kN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++AN,this.fa=this.ia=!1}function Hc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Xm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function RN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function gT(t){const e={};for(const n in t)e[n]=t[n];return e}const fv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _T(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<fv.length;s++)n=fv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Gc(t){this.src=t,this.g={},this.h=0}Gc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Jd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new kN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Xd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=fT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Hc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Jd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Jm="closure_lm_"+(1e6*Math.random()|0),Ef={};function yT(t,e,n,r,i){if(r&&r.once)return wT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)yT(t,e[s],n,r,i);return null}return n=tg(n),t&&t[Ka]?t.O(e,n,Qa(r)?!!r.capture:!!r,i):vT(t,e,n,!1,r,i)}function vT(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Qa(i)?!!i.capture:!!i,a=eg(t);if(a||(t[Jm]=a=new Gc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=PN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)wN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(TT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function PN(){function t(n){return e.call(t.src,t.listener,n)}const e=xN;return t}function wT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)wT(t,e[s],n,r,i);return null}return n=tg(n),t&&t[Ka]?t.P(e,n,Qa(r)?!!r.capture:!!r,i):vT(t,e,n,!0,r,i)}function ET(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)ET(t,e[s],n,r,i);else r=Qa(r)?!!r.capture:!!r,n=tg(n),t&&t[Ka]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Jd(s,n,r,i),-1<n&&(Hc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=eg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Jd(e,n,r,i)),(n=-1<t?e[t]:null)&&Zm(n))}function Zm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ka])Xd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(TT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=eg(e))?(Xd(n,t),n.h==0&&(n.src=null,e[Jm]=null)):Hc(t)}}}function TT(t){return t in Ef?Ef[t]:Ef[t]="on"+t}function xN(t,e){if(t.fa)t=!0;else{e=new wa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Zm(t),t=n.call(r,e)}return t}function eg(t){return t=t[Jm],t instanceof Gc?t:null}var Tf="__closure_events_fn_"+(1e9*Math.random()>>>0);function tg(t){return typeof t=="function"?t:(t[Tf]||(t[Tf]=function(e){return t.handleEvent(e)}),t[Tf])}function We(){Lr.call(this),this.i=new Gc(this),this.S=this,this.J=null}qe(We,Lr);We.prototype[Ka]=!0;We.prototype.removeEventListener=function(t,e,n,r){ET(this,t,e,n,r)};function Xe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ct(e,t);else if(e instanceof ct)e.target=e.target||t;else{var i=e;e=new ct(r,t),_T(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=$l(o,r,!0,e)&&i}if(o=e.g=t,i=$l(o,r,!0,e)&&i,i=$l(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=$l(o,r,!1,e)&&i}We.prototype.N=function(){if(We.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Hc(n[r]);delete t.g[e],t.h--}}this.J=null};We.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};We.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function $l(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Xd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var ng=j.JSON.stringify;class NN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function bN(){var t=rg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class DN{constructor(){this.h=this.g=null}add(e,n){const r=ST.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ST=new NN(()=>new ON,t=>t.reset());class ON{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function LN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function MN(t){j.setTimeout(()=>{throw t},0)}let Ea,Ta=!1,rg=new DN,IT=()=>{const t=j.Promise.resolve(void 0);Ea=()=>{t.then(VN)}};var VN=()=>{for(var t;t=bN();){try{t.h.call(t.g)}catch(n){MN(n)}var e=ST;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ta=!1};function Qc(t,e){We.call(this),this.h=t||1,this.g=e||j,this.j=ut(this.qb,this),this.l=Date.now()}qe(Qc,We);x=Qc.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Xe(this,"tick"),this.ga&&(ig(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ig(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){Qc.$.N.call(this),ig(this),delete this.g};function sg(t,e,n){if(typeof t=="function")n&&(t=ut(t,n));else if(t&&typeof t.handleEvent=="function")t=ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function CT(t){t.g=sg(()=>{t.g=null,t.i&&(t.i=!1,CT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class FN extends Lr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:CT(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sa(t){Lr.call(this),this.h=t,this.g={}}qe(Sa,Lr);var dv=[];function AT(t,e,n,r){Array.isArray(n)||(n&&(dv[0]=n.toString()),n=dv);for(var i=0;i<n.length;i++){var s=yT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function kT(t){Xm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Zm(e)},t),t.g={}}Sa.prototype.N=function(){Sa.$.N.call(this),kT(this)};Sa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Kc(){this.g=!0}Kc.prototype.Ea=function(){this.g=!1};function $N(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function jN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function es(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zN(t,n)+(r?" "+r:"")})}function UN(t,e){t.info(function(){return"TIMEOUT: "+e})}Kc.prototype.info=function(){};function zN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ng(n)}catch{return e}}var ki={},pv=null;function Yc(){return pv=pv||new We}ki.Ta="serverreachability";function RT(t){ct.call(this,ki.Ta,t)}qe(RT,ct);function Ia(t){const e=Yc();Xe(e,new RT(e))}ki.STAT_EVENT="statevent";function PT(t,e){ct.call(this,ki.STAT_EVENT,t),this.stat=e}qe(PT,ct);function pt(t){const e=Yc();Xe(e,new PT(e,t))}ki.Ua="timingevent";function xT(t,e){ct.call(this,ki.Ua,t),this.size=e}qe(xT,ct);function Ya(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var Xc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},NT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function og(){}og.prototype.h=null;function mv(t){return t.h||(t.h=t.i())}function bT(){}var Xa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ag(){ct.call(this,"d")}qe(ag,ct);function lg(){ct.call(this,"c")}qe(lg,ct);var Zd;function Jc(){}qe(Jc,og);Jc.prototype.g=function(){return new XMLHttpRequest};Jc.prototype.i=function(){return{}};Zd=new Jc;function Ja(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Sa(this),this.P=BN,t=Qd?125:void 0,this.V=new Qc(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new DT}function DT(){this.i=null,this.g="",this.h=!1}var BN=45e3,OT={},ep={};x=Ja.prototype;x.setTimeout=function(t){this.P=t};function tp(t,e,n){t.L=1,t.A=eh(Vn(e)),t.u=n,t.S=!0,LT(t,null)}function LT(t,e){t.G=Date.now(),Za(t),t.B=Vn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),BT(n.i,"t",r),t.o=0,n=t.l.J,t.h=new DT,t.g=cS(t.l,n?e:null,!t.u),0<t.O&&(t.M=new FN(ut(t.Pa,t,t.g),t.O)),AT(t.U,t.g,"readystatechange",t.nb),e=t.I?gT(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ia(),$N(t.j,t.v,t.B,t.m,t.W,t.u)}x.nb=function(t){t=t.target;const e=this.M;e&&hn(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const c=hn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Qd||this.g&&(this.h.h||this.g.ja()||vv(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ia(3):Ia(2)),Zc(this);var n=this.g.da();this.ca=n;t:if(MT(this)){var r=vv(this.g);t="";var i=r.length,s=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yr(this),$o(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,jN(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!va(a)){var u=a;break t}}u=null}if(n=u)es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,np(this,n);else{this.i=!1,this.s=3,pt(12),Yr(this),$o(this);break e}}this.S?(VT(this,c,o),Qd&&this.i&&c==3&&(AT(this.U,this.V,"tick",this.mb),this.V.start())):(es(this.j,this.m,o,null),np(this,o)),c==4&&Yr(this),this.i&&!this.J&&(c==4?oS(this.l,this):(this.i=!1,Za(this)))}else cb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Yr(this),$o(this)}}}catch{}finally{}};function MT(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function VT(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=WN(t,n),i==ep){e==4&&(t.s=4,pt(14),r=!1),es(t.j,t.m,null,"[Incomplete Response]");break}else if(i==OT){t.s=4,pt(15),es(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else es(t.j,t.m,i,null),np(t,i);MT(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),pg(e),e.M=!0,pt(11))):(es(t.j,t.m,n,"[Invalid Chunked Response]"),Yr(t),$o(t))}x.mb=function(){if(this.g){var t=hn(this.g),e=this.g.ja();this.o<e.length&&(Zc(this),VT(this,t,e),this.i&&t!=4&&Za(this))}};function WN(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?ep:(n=Number(e.substring(n,r)),isNaN(n)?OT:(r+=1,r+n>e.length?ep:(e=e.slice(r,r+n),t.o=r+n,e)))}x.cancel=function(){this.J=!0,Yr(this)};function Za(t){t.Y=Date.now()+t.P,FT(t,t.P)}function FT(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ya(ut(t.lb,t),e)}function Zc(t){t.C&&(j.clearTimeout(t.C),t.C=null)}x.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(UN(this.j,this.B),this.L!=2&&(Ia(),pt(17)),Yr(this),this.s=2,$o(this)):FT(this,this.Y-t)};function $o(t){t.l.H==0||t.J||oS(t.l,t)}function Yr(t){Zc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,ig(t.V),kT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function np(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||rp(n.i,t))){if(!t.K&&rp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)tc(n),ih(n);else break e;dg(n),pt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ya(ut(n.ib,n),6e3));if(1>=HT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Xr(n,11)}else if((t.K||n.g==t)&&tc(n),!va(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const _=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ug(s,s.h),s.h=null))}if(r.F){const v=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,de(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=uS(r,r.J?r.pa:null,r.Y),o.K){GT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Zc(a),Za(a)),r.g=o}else iS(r);0<n.j.length&&sh(n)}else u[0]!="stop"&&u[0]!="close"||Xr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Xr(n,7):fg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ia(4)}catch{}}function qN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Wc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function HN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Wc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function $T(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Wc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=HN(t),r=qN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var jT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function si(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof si){this.h=t.h,Zu(this,t.j),this.s=t.s,this.g=t.g,ec(this,t.m),this.l=t.l;var e=t.i,n=new Ca;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),gv(this,n),this.o=t.o}else t&&(e=String(t).match(jT))?(this.h=!1,Zu(this,e[1]||"",!0),this.s=Io(e[2]||""),this.g=Io(e[3]||"",!0),ec(this,e[4]),this.l=Io(e[5]||"",!0),gv(this,e[6]||"",!0),this.o=Io(e[7]||"")):(this.h=!1,this.i=new Ca(null,this.h))}si.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Co(e,_v,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Co(e,_v,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Co(n,n.charAt(0)=="/"?YN:KN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Co(n,JN)),t.join("")};function Vn(t){return new si(t)}function Zu(t,e,n){t.j=n?Io(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ec(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function gv(t,e,n){e instanceof Ca?(t.i=e,ZN(t.i,t.h)):(n||(e=Co(e,XN)),t.i=new Ca(e,t.h))}function de(t,e,n){t.i.set(e,n)}function eh(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Io(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Co(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,QN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function QN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _v=/[#\/\?@]/g,KN=/[#\?:]/g,YN=/[#\?]/g,XN=/[#\?@]/g,JN=/#/g;function Ca(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Mr(t){t.g||(t.g=new Map,t.h=0,t.i&&GN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Ca.prototype;x.add=function(t,e){Mr(this),this.i=null,t=Hs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function UT(t,e){Mr(t),e=Hs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function zT(t,e){return Mr(t),e=Hs(t,e),t.g.has(e)}x.forEach=function(t,e){Mr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};x.ta=function(){Mr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};x.Z=function(t){Mr(this);let e=[];if(typeof t=="string")zT(this,t)&&(e=e.concat(this.g.get(Hs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return Mr(this),this.i=null,t=Hs(this,t),zT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function BT(t,e,n){UT(t,e),0<n.length&&(t.i=null,t.g.set(Hs(t,e),Km(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Hs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ZN(t,e){e&&!t.j&&(Mr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(UT(this,r),BT(this,i,n))},t)),t.j=e}var eb=class{constructor(t,e){this.g=t,this.map=e}};function WT(t){this.l=t||tb,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tb=10;function qT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function HT(t){return t.h?1:t.g?t.g.size:0}function rp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ug(t,e){t.g?t.g.add(e):t.h=e}function GT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}WT.prototype.cancel=function(){if(this.i=QT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function QT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Km(t.i)}var nb=class{stringify(t){return j.JSON.stringify(t,void 0)}parse(t){return j.JSON.parse(t,void 0)}};function rb(){this.g=new nb}function ib(t,e,n){const r=n||"";try{$T(t,function(i,s){let o=i;Qa(i)&&(o=ng(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function sb(t,e){const n=new Kc;if(j.Image){const r=new Image;r.onload=Fl(jl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Fl(jl,n,r,"TestLoadImage: error",!1,e),r.onabort=Fl(jl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Fl(jl,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function jl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function th(t){this.l=t.ec||null,this.j=t.ob||!1}qe(th,og);th.prototype.g=function(){return new nh(this.l,this.j)};th.prototype.i=function(t){return function(){return t}}({});function nh(t,e){We.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=cg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(nh,We);var cg=0;x=nh.prototype;x.open=function(t,e){if(this.readyState!=cg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Aa(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||j).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,el(this)),this.readyState=cg};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Aa(this)),this.g&&(this.readyState=3,Aa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;KT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function KT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?el(this):Aa(this),this.readyState==3&&KT(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,el(this))};x.Ya=function(t){this.g&&(this.response=t,el(this))};x.ka=function(){this.g&&el(this)};function el(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Aa(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Aa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(nh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ob=j.JSON.parse;function Ie(t){We.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=YT,this.L=this.M=!1}qe(Ie,We);var YT="",ab=/^https?$/i,lb=["POST","PUT"];x=Ie.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Zd.g(),this.C=this.u?mv(this.u):mv(Zd),this.g.onreadystatechange=ut(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){yv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=j.FormData&&t instanceof j.FormData,!(0<=fT(lb,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ZT(this),0<this.B&&((this.L=ub(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.ua,this)):this.A=sg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){yv(this,s)}};function ub(t){return ks&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof Qm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xe(this,"timeout"),this.abort(8))};function yv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,XT(t),rh(t)}function XT(t){t.F||(t.F=!0,Xe(t,"complete"),Xe(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xe(this,"complete"),Xe(this,"abort"),rh(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rh(this,!0)),Ie.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?JT(this):this.kb())};x.kb=function(){JT(this)};function JT(t){if(t.h&&typeof Qm<"u"&&(!t.C[1]||hn(t)!=4||t.da()!=2)){if(t.v&&hn(t)==4)sg(t.La,0,t);else if(Xe(t,"readystatechange"),hn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(jT)[1]||null;!i&&j.self&&j.self.location&&(i=j.self.location.protocol.slice(0,-1)),r=!ab.test(i?i.toLowerCase():"")}n=r}if(n)Xe(t,"complete"),Xe(t,"success");else{t.m=6;try{var s=2<hn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",XT(t)}}finally{rh(t)}}}}function rh(t,e){if(t.g){ZT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Xe(t,"ready");try{n.onreadystatechange=r}catch{}}}function ZT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function hn(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ob(e)}};function vv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case YT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function cb(t){const e={};t=(t.g&&2<=hn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(va(t[r]))continue;var n=LN(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}RN(e,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function eS(t){let e="";return Xm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function hg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=eS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function fo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function tS(t){this.Ga=0,this.j=[],this.l=new Kc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=fo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=fo("baseRetryDelayMs",5e3,t),this.hb=fo("retryDelaySeedMs",1e4,t),this.eb=fo("forwardChannelMaxRetries",2,t),this.xa=fo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new WT(t&&t.concurrentRequestLimit),this.Ja=new rb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=tS.prototype;x.ra=8;x.H=1;function fg(t){if(nS(t),t.H==3){var e=t.W++,n=Vn(t.I);if(de(n,"SID",t.K),de(n,"RID",e),de(n,"TYPE","terminate"),tl(t,n),e=new Ja(t,t.l,e),e.L=2,e.A=eh(Vn(n)),n=!1,j.navigator&&j.navigator.sendBeacon)try{n=j.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&j.Image&&(new Image().src=e.A,n=!0),n||(e.g=cS(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Za(e)}lS(t)}function ih(t){t.g&&(pg(t),t.g.cancel(),t.g=null)}function nS(t){ih(t),t.u&&(j.clearTimeout(t.u),t.u=null),tc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function sh(t){if(!qT(t.i)&&!t.m){t.m=!0;var e=t.Na;Ea||IT(),Ta||(Ea(),Ta=!0),rg.add(e,t),t.C=0}}function hb(t,e){return HT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ya(ut(t.Na,t,e),aS(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ja(this,this.l,t);let s=this.s;if(this.U&&(s?(s=gT(s),_T(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=rS(this,i,e),n=Vn(this.I),de(n,"RID",t),de(n,"CVER",22),this.F&&de(n,"X-HTTP-Session-Id",this.F),tl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(eS(s)))+"&"+e:this.o&&hg(n,this.o,s)),ug(this.i,i),this.bb&&de(n,"TYPE","init"),this.P?(de(n,"$req",e),de(n,"SID","null"),i.aa=!0,tp(i,n,null)):tp(i,n,e),this.H=2}}else this.H==3&&(t?wv(this,t):this.j.length==0||qT(this.i)||wv(this))};function wv(t,e){var n;e?n=e.m:n=t.W++;const r=Vn(t.I);de(r,"SID",t.K),de(r,"RID",n),de(r,"AID",t.V),tl(t,r),t.o&&t.s&&hg(r,t.o,t.s),n=new Ja(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=rS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ug(t.i,n),tp(n,r,e)}function tl(t,e){t.na&&Xm(t.na,function(n,r){de(e,r,n)}),t.h&&$T({},function(n,r){de(e,r,n)})}function rS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ut(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{ib(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function iS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ea||IT(),Ta||(Ea(),Ta=!0),rg.add(e,t),t.A=0}}function dg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ya(ut(t.Ma,t),aS(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,sS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ya(ut(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,pt(10),ih(this),sS(this))};function pg(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function sS(t){t.g=new Ja(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Vn(t.wa);de(e,"RID","rpc"),de(e,"SID",t.K),de(e,"AID",t.V),de(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&de(e,"TO",t.qa),de(e,"TYPE","xmlhttp"),tl(t,e),t.o&&t.s&&hg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=eh(Vn(e)),n.u=null,n.S=!0,LT(n,t)}x.ib=function(){this.v!=null&&(this.v=null,ih(this),dg(this),pt(19))};function tc(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function oS(t,e){var n=null;if(t.g==e){tc(t),pg(t),t.g=null;var r=2}else if(rp(t.i,e))n=e.F,GT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Yc(),Xe(r,new xT(r,n)),sh(t)}else iS(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&hb(t,e)||r==2&&dg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Xr(t,5);break;case 4:Xr(t,10);break;case 3:Xr(t,6);break;default:Xr(t,2)}}}function aS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Xr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ut(t.pb,t);n||(n=new si("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Zu(n,"https"),eh(n)),sb(n.toString(),r)}else pt(2);t.H=0,t.h&&t.h.za(e),lS(t),nS(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),pt(2)):(this.l.info("Failed to ping google.com"),pt(1))};function lS(t){if(t.H=0,t.ma=[],t.h){const e=QT(t.i);(e.length!=0||t.j.length!=0)&&(cv(t.ma,e),cv(t.ma,t.j),t.i.i.length=0,Km(t.j),t.j.length=0),t.h.ya()}}function uS(t,e,n){var r=n instanceof si?Vn(n):new si(n);if(r.g!="")e&&(r.g=e+"."+r.g),ec(r,r.m);else{var i=j.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new si(null);r&&Zu(s,r),e&&(s.g=e),i&&ec(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&de(r,n,e),de(r,"VER",t.ra),tl(t,r),r}function cS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ie(new th({ob:n})):new Ie(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function hS(){}x=hS.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function nc(){if(ks&&!(10<=Number(IN)))throw Error("Environmental error: no available transport.")}nc.prototype.g=function(t,e){return new Nt(t,e)};function Nt(t,e){We.call(this),this.g=new tS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!va(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!va(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gs(this)}qe(Nt,We);Nt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=uS(t,null,t.Y),sh(t)};Nt.prototype.close=function(){fg(this.g)};Nt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ng(t),t=n);e.j.push(new eb(e.fb++,t)),e.H==3&&sh(e)};Nt.prototype.N=function(){this.g.h=null,delete this.j,fg(this.g),delete this.g,Nt.$.N.call(this)};function fS(t){ag.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(fS,ag);function dS(){lg.call(this),this.status=1}qe(dS,lg);function Gs(t){this.g=t}qe(Gs,hS);Gs.prototype.Ba=function(){Xe(this.g,"a")};Gs.prototype.Aa=function(t){Xe(this.g,new fS(t))};Gs.prototype.za=function(t){Xe(this.g,new dS)};Gs.prototype.ya=function(){Xe(this.g,"b")};function fb(){this.blockSize=-1}function sn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}qe(sn,fb);sn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Sf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}sn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Sf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Sf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Sf(this,r),i=0;break}}this.h=i,this.i+=e};sn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function se(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var db={};function mg(t){return-128<=t&&128>t?EN(t,function(e){return new se([e|0],0>e?-1:0)}):new se([t|0],0>t?-1:0)}function fn(t){if(isNaN(t)||!isFinite(t))return fs;if(0>t)return Ge(fn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ip;return new se(e,0)}function pS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ge(pS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=fn(Math.pow(e,8)),r=fs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=fn(Math.pow(e,s)),r=r.R(s).add(fn(o))):(r=r.R(n),r=r.add(fn(o)))}return r}var ip=4294967296,fs=mg(0),sp=mg(1),Ev=mg(16777216);x=se.prototype;x.ea=function(){if(Vt(this))return-Ge(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ip+r)*e,e*=ip}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(kn(this))return"0";if(Vt(this))return"-"+Ge(this).toString(t);for(var e=fn(Math.pow(t,6)),n=this,r="";;){var i=ic(n,e).g;n=rc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,kn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function kn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Vt(t){return t.h==-1}x.X=function(t){return t=rc(this,t),Vt(t)?-1:kn(t)?0:1};function Ge(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new se(n,~t.h).add(sp)}x.abs=function(){return Vt(this)?Ge(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new se(n,n[n.length-1]&-2147483648?-1:0)};function rc(t,e){return t.add(Ge(e))}x.R=function(t){if(kn(this)||kn(t))return fs;if(Vt(this))return Vt(t)?Ge(this).R(Ge(t)):Ge(Ge(this).R(t));if(Vt(t))return Ge(this.R(Ge(t)));if(0>this.X(Ev)&&0>t.X(Ev))return fn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Ul(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ul(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ul(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ul(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new se(n,0)};function Ul(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function po(t,e){this.g=t,this.h=e}function ic(t,e){if(kn(e))throw Error("division by zero");if(kn(t))return new po(fs,fs);if(Vt(t))return e=ic(Ge(t),e),new po(Ge(e.g),Ge(e.h));if(Vt(e))return e=ic(t,Ge(e)),new po(Ge(e.g),e.h);if(30<t.g.length){if(Vt(t)||Vt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=sp,r=e;0>=r.X(t);)n=Tv(n),r=Tv(r);var i=Li(n,1),s=Li(r,1);for(r=Li(r,2),n=Li(n,2);!kn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Li(r,1),n=Li(n,1)}return e=rc(t,i.R(e)),new po(i,e)}for(i=fs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=fn(n),o=s.R(e);Vt(o)||0<o.X(t);)n-=r,s=fn(n),o=s.R(e);kn(s)&&(s=sp),i=i.add(s),t=rc(t,o)}return new po(i,t)}x.gb=function(t){return ic(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new se(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new se(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new se(n,this.h^t.h)};function Tv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new se(n,t.h)}function Li(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new se(i,t.h)}nc.prototype.createWebChannel=nc.prototype.g;Nt.prototype.send=Nt.prototype.u;Nt.prototype.open=Nt.prototype.m;Nt.prototype.close=Nt.prototype.close;Xc.NO_ERROR=0;Xc.TIMEOUT=8;Xc.HTTP_ERROR=6;NT.COMPLETE="complete";bT.EventType=Xa;Xa.OPEN="a";Xa.CLOSE="b";Xa.ERROR="c";Xa.MESSAGE="d";We.prototype.listen=We.prototype.O;Ie.prototype.listenOnce=Ie.prototype.P;Ie.prototype.getLastError=Ie.prototype.Sa;Ie.prototype.getLastErrorCode=Ie.prototype.Ia;Ie.prototype.getStatus=Ie.prototype.da;Ie.prototype.getResponseJson=Ie.prototype.Wa;Ie.prototype.getResponseText=Ie.prototype.ja;Ie.prototype.send=Ie.prototype.ha;Ie.prototype.setWithCredentials=Ie.prototype.Oa;sn.prototype.digest=sn.prototype.l;sn.prototype.reset=sn.prototype.reset;sn.prototype.update=sn.prototype.j;se.prototype.add=se.prototype.add;se.prototype.multiply=se.prototype.R;se.prototype.modulo=se.prototype.gb;se.prototype.compare=se.prototype.X;se.prototype.toNumber=se.prototype.ea;se.prototype.toString=se.prototype.toString;se.prototype.getBits=se.prototype.D;se.fromNumber=fn;se.fromString=pS;var pb=function(){return new nc},mb=function(){return Yc()},If=Xc,gb=NT,_b=ki,Sv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},zl=bT,yb=Ie,vb=sn,ds=se;const Iv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs="10.11.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new Hm("@firebase/firestore");function mo(){return di.logLevel}function R(t,...e){if(di.logLevel<=X.DEBUG){const n=e.map(gg);di.debug(`Firestore (${Qs}): ${t}`,...n)}}function wn(t,...e){if(di.logLevel<=X.ERROR){const n=e.map(gg);di.error(`Firestore (${Qs}): ${t}`,...n)}}function Rs(t,...e){if(di.logLevel<=X.WARN){const n=e.map(gg);di.warn(`Firestore (${Qs}): ${t}`,...n)}}function gg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t="Unexpected state"){const e=`FIRESTORE (${Qs}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function ae(t,e){t||$()}function U(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends qs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class Eb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Tb{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new tn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new mS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new rt(e)}}class Sb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ib{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Sb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ab{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new Cb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=kb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function Ps(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new b(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new b(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new b(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new Le(0,0))}static max(){return new z(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ka.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ka?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends ka{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new b(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const Rb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends ka{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return Rb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new b(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new b(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new b(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new b(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(pe.fromString(e))}static fromName(e){return new F(pe.fromString(e).popFirst(5))}static empty(){return new F(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new pe(e.slice()))}}function Pb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new Tr(i,F.empty(),e)}function xb(t){return new Tr(t.readTime,t.key,-1)}class Tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Tr(z.min(),F.empty(),-1)}static max(){return new Tr(z.max(),F.empty(),-1)}}function Nb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Db{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==bb)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new tn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new jo(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=yg(r.target.error);this.V.reject(new jo(e,i))}}static open(e,n,r,i){try{return new _g(n,e.transaction(i,r))}catch(s){throw new jo(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new Lb(n)}}class Jr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Jr.S(ma())===12.2&&wn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),qr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!rT())return!1;if(Jr.C())return!0;const e=ma(),n=Jr.S(e),r=0<n&&n<10,i=Jr.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new jo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new b(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new b(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new jo(e,o))},i.onupgradeneeded=s=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=_g.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),S.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Ob{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return qr(this.k.delete())}}class jo extends b{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function rl(t){return t.name==="IndexedDbTransactionError"}class Lb{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(R("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),qr(r)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),qr(this.store.add(e))}get(e){return qr(this.store.get(e)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),qr(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),qr(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new S((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new S((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new S((r,i)=>{n.onerror=s=>{const o=yg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new S((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new Ob(a),u=n(a.primaryKey,a.value,l);if(u instanceof S){const c=u.catch(h=>(l.done(),S.reject(h)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>S.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function qr(t){return new S((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=yg(r.target.error);n(i)}})}let Cv=!1;function yg(t){const e=Jr.S(ma());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new b("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Cv||(Cv=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}vg._e=-1;function oh(t){return t==null}function sc(t){return t===0&&1/t==-1/0}function Mb(t){return typeof t=="number"&&Number.isInteger(t)&&!sc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ri(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _S(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let be=class op{constructor(e,n){this.comparator=e,this.root=n||_r.EMPTY}insert(e,n){return new op(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_r.BLACK,null,null))}remove(e){return new op(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_r.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bl(this.root,e,this.comparator,!0)}},Bl=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},_r=class Tn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Tn.RED,this.left=i??Tn.EMPTY,this.right=s??Tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Tn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Tn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Tn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}};_r.EMPTY=null,_r.RED=!0,_r.BLACK=!1;_r.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(e,n,r,i,s){return this}insert(e,n,r){return new _r(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kv(this.data.getIterator())}getIteratorFrom(e){return new kv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class kv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new Je(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yS("Invalid base64 string: "+s):s}}(e);return new ft(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const Vb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(ae(!!t),typeof t=="string"){let e=0;const n=Vb.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function pi(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Eg(t){const e=t.mapValue.fields.__previous_value__;return wg(e)?Eg(e):e}function Ra(t){const e=Sr(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Pa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wg(t)?4:$b(t)?9007199254740991:10:$()}function En(t,e){if(t===e)return!0;const n=mi(t);if(n!==mi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ra(t).isEqual(Ra(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Sr(i.timestampValue),a=Sr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return pi(i.bytesValue).isEqual(pi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Re(i.geoPointValue.latitude)===Re(s.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Re(i.integerValue)===Re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Re(i.doubleValue),a=Re(s.doubleValue);return o===a?sc(o)===sc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ps(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Av(o)!==Av(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!En(o[l],a[l])))return!1;return!0}(t,e);default:return $()}}function xa(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function xs(t,e){if(t===e)return 0;const n=mi(t),r=mi(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Re(s.integerValue||s.doubleValue),l=Re(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Rv(t.timestampValue,e.timestampValue);case 4:return Rv(Ra(t),Ra(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(s,o){const a=pi(s),l=pi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ne(a[u],l[u]);if(c!==0)return c}return ne(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ne(Re(s.latitude),Re(o.latitude));return a!==0?a:ne(Re(s.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=xs(a[u],l[u]);if(c)return c}return ne(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Wl.mapValue&&o===Wl.mapValue)return 0;if(s===Wl.mapValue)return 1;if(o===Wl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const f=ne(l[h],c[h]);if(f!==0)return f;const d=xs(a[l[h]],u[c[h]]);if(d!==0)return d}return ne(l.length,c.length)}(t.mapValue,e.mapValue);default:throw $()}}function Rv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Sr(t),r=Sr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function Ns(t){return ap(t)}function ap(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return pi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return F.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ap(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ap(n.fields[o])}`;return i+"}"}(t.mapValue):$()}function Pv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function lp(t){return!!t&&"integerValue"in t}function Tg(t){return!!t&&"arrayValue"in t}function xv(t){return!!t&&"nullValue"in t}function Nv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _u(t){return!!t&&"mapValue"in t}function Uo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ri(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Uo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Uo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $b(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_u(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Uo(n)}setAll(e){let n=Ke.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Uo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());_u(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];_u(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ri(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new At(Uo(this.value))}}function vS(t){const e=[];return Ri(t.fields,(n,r)=>{const i=new Ke([n]);if(_u(r)){const s=vS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new st(e,0,z.min(),z.min(),z.min(),At.empty(),0)}static newFoundDocument(e,n,r,i){return new st(e,1,n,z.min(),r,i,0)}static newNoDocument(e,n){return new st(e,2,n,z.min(),z.min(),At.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,z.min(),z.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n){this.position=e,this.inclusive=n}}function bv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),n.key):r=xs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n="asc"){this.field=e,this.dir=n}}function jb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{}class xe extends wS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zb(e,n,r):n==="array-contains"?new qb(e,r):n==="in"?new Hb(e,r):n==="not-in"?new Gb(e,r):n==="array-contains-any"?new Qb(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Bb(e,r):new Wb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xs(n,this.value)):n!==null&&mi(this.value)===mi(n)&&this.matchesComparison(xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class on extends wS{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new on(e,n)}matches(e){return ES(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ES(t){return t.op==="and"}function TS(t){return Ub(t)&&ES(t)}function Ub(t){for(const e of t.filters)if(e instanceof on)return!1;return!0}function up(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+Ns(t.value);if(TS(t))return t.filters.map(e=>up(e)).join(",");{const e=t.filters.map(n=>up(n)).join(",");return`${t.op}(${e})`}}function SS(t,e){return t instanceof xe?function(r,i){return i instanceof xe&&r.op===i.op&&r.field.isEqual(i.field)&&En(r.value,i.value)}(t,e):t instanceof on?function(r,i){return i instanceof on&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&SS(o,i.filters[a]),!0):!1}(t,e):void $()}function IS(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ns(n.value)}`}(t):t instanceof on?function(n){return n.op.toString()+" {"+n.getFilters().map(IS).join(" ,")+"}"}(t):"Filter"}class zb extends xe{constructor(e,n,r){super(e,n,r),this.key=F.fromName(r.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.matchesComparison(n)}}class Bb extends xe{constructor(e,n){super(e,"in",n),this.keys=CS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Wb extends xe{constructor(e,n){super(e,"not-in",n),this.keys=CS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function CS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>F.fromName(r.referenceValue))}class qb extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tg(n)&&xa(n.arrayValue,this.value)}}class Hb extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xa(this.value.arrayValue,n)}}class Gb extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(xa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xa(this.value.arrayValue,n)}}class Qb extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Ov(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Kb(t,e,n,r,i,s,o)}function Sg(t){const e=U(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>up(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),oh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ns(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ns(r)).join(",")),e.ce=n}return e.ce}function Ig(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!SS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dv(t.startAt,e.startAt)&&Dv(t.endAt,e.endAt)}function cp(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Yb(t,e,n,r,i,s,o,a){return new Ks(t,e,n,r,i,s,o,a)}function Cg(t){return new Ks(t)}function Lv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function AS(t){return t.collectionGroup!==null}function zo(t){const e=U(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Je(Ke.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Na(s,r))}),n.has(Ke.keyField().canonicalString())||e.le.push(new Na(Ke.keyField(),r))}return e.le}function _n(t){const e=U(t);return e.he||(e.he=kS(e,zo(t))),e.he}function kS(t,e){if(t.limitType==="F")return Ov(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Na(i.field,s)});const n=t.endAt?new oc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new oc(t.startAt.position,t.startAt.inclusive):null;return Ov(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hp(t,e){const n=t.filters.concat([e]);return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ac(t,e,n){return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ah(t,e){return Ig(_n(t),_n(e))&&t.limitType===e.limitType}function RS(t){return`${Sg(_n(t))}|lt:${t.limitType}`}function ji(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>IS(i)).join(", ")}]`),oh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ns(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ns(i)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function lh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):F.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of zo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=bv(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,zo(r),i)||r.endAt&&!function(o,a,l){const u=bv(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,zo(r),i))}(t,e)}function Xb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function PS(t){return(e,n)=>{let r=!1;for(const i of zo(t)){const s=Jb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Jb(t,e,n){const r=t.field.isKeyField()?F.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?xs(l,u):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ri(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return _S(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=new be(F.comparator);function Fn(){return Zb}const xS=new be(F.comparator);function Ao(...t){let e=xS;for(const n of t)e=e.insert(n.key,n);return e}function NS(t){let e=xS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zr(){return Bo()}function bS(){return Bo()}function Bo(){return new Ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const eD=new be(F.comparator),tD=new Je(F.comparator);function G(...t){let e=tD;for(const n of t)e=e.add(n);return e}const nD=new Je(ne);function rD(){return nD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sc(e)?"-0":e}}function OS(t){return{integerValue:""+t}}function iD(t,e){return Mb(e)?OS(e):DS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this._=void 0}}function sD(t,e,n){return t instanceof lc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&wg(s)&&(s=Eg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ba?MS(t,e):t instanceof Da?VS(t,e):function(i,s){const o=LS(i,s),a=Mv(o)+Mv(i.Ie);return lp(o)&&lp(i.Ie)?OS(a):DS(i.serializer,a)}(t,e)}function oD(t,e,n){return t instanceof ba?MS(t,e):t instanceof Da?VS(t,e):n}function LS(t,e){return t instanceof uc?function(r){return lp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class lc extends uh{}class ba extends uh{constructor(e){super(),this.elements=e}}function MS(t,e){const n=FS(e);for(const r of t.elements)n.some(i=>En(i,r))||n.push(r);return{arrayValue:{values:n}}}class Da extends uh{constructor(e){super(),this.elements=e}}function VS(t,e){let n=FS(e);for(const r of t.elements)n=n.filter(i=>!En(i,r));return{arrayValue:{values:n}}}class uc extends uh{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Mv(t){return Re(t.integerValue||t.doubleValue)}function FS(t){return Tg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function aD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ba&&i instanceof ba||r instanceof Da&&i instanceof Da?Ps(r.elements,i.elements,En):r instanceof uc&&i instanceof uc?En(r.Ie,i.Ie):r instanceof lc&&i instanceof lc}(t.transform,e.transform)}class lD{constructor(e,n){this.version=e,this.transformResults=n}}class Nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ch{}function $S(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new US(t.key,Nn.none()):new hh(t.key,t.data,Nn.none());{const n=t.data,r=At.empty();let i=new Je(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pi(t.key,r,new Yt(i.toArray()),Nn.none())}}function uD(t,e,n){t instanceof hh?function(i,s,o){const a=i.value.clone(),l=Fv(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Pi?function(i,s,o){if(!yu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Fv(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(jS(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Wo(t,e,n,r){return t instanceof hh?function(s,o,a,l){if(!yu(s.precondition,o))return a;const u=s.value.clone(),c=$v(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pi?function(s,o,a,l){if(!yu(s.precondition,o))return a;const u=$v(s.fieldTransforms,l,o),c=o.data;return c.setAll(jS(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return yu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function cD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=LS(r.transform,i||null);s!=null&&(n===null&&(n=At.empty()),n.set(r.field,s))}return n||null}function Vv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ps(r,i,(s,o)=>aD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class hh extends ch{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pi extends ch{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function jS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Fv(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,oD(o,a,n[i]))}return r}function $v(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,sD(s,o,e))}return r}class US extends ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hD extends ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&uD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Wo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Wo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=$S(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),G())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,(n,r)=>Vv(n,r))&&Ps(this.baseMutations,e.baseMutations,(n,r)=>Vv(n,r))}}class Ag{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return eD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ag(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,Y;function gD(t){switch(t){default:return $();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function zS(t){if(t===void 0)return wn("GRPC error has no .code"),T.UNKNOWN;switch(t){case ke.OK:return T.OK;case ke.CANCELLED:return T.CANCELLED;case ke.UNKNOWN:return T.UNKNOWN;case ke.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case ke.INTERNAL:return T.INTERNAL;case ke.UNAVAILABLE:return T.UNAVAILABLE;case ke.UNAUTHENTICATED:return T.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case ke.NOT_FOUND:return T.NOT_FOUND;case ke.ALREADY_EXISTS:return T.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return T.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case ke.ABORTED:return T.ABORTED;case ke.OUT_OF_RANGE:return T.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return T.UNIMPLEMENTED;case ke.DATA_LOSS:return T.DATA_LOSS;default:return $()}}(Y=ke||(ke={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=new ds([4294967295,4294967295],0);function jv(t){const e=_D().encode(t),n=new vb;return n.update(e),new Uint8Array(n.digest())}function Uv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ds([n,r],0),new ds([i,s],0)]}class kg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ko(`Invalid padding: ${n}`);if(r<0)throw new ko(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ko(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ko(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=ds.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(ds.fromNumber(r)));return i.compare(yD)===1&&(i=new ds([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=jv(e),[r,i]=Uv(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new kg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=jv(e),[r,i]=Uv(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ko extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,il.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fh(z.min(),i,new be(ne),Fn(),G())}}class il{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new il(r,n,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class BS{constructor(e,n){this.targetId=e,this.fe=n}}class WS{constructor(e,n,r=ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class zv{constructor(){this.ge=0,this.pe=Wv(),this.ye=ft.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=G(),n=G(),r=G();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new il(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Wv()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ae(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class vD{constructor(e){this.Be=e,this.ke=new Map,this.qe=Fn(),this.Qe=Bv(),this.Ke=new be(ne)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(cp(s))if(r===0){const o=new F(s.path);this.We(n,o,st.newNoDocument(o,z.min()))}else ae(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=pi(r).toUint8Array()}catch(l){if(l instanceof yS)return Rs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new kg(o,i,s)}catch(l){return Rs(l instanceof ko?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&cp(a.target)){const l=new F(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,st.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=G();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new fh(e,n,this.Ke,this.qe,r);return this.qe=Fn(),this.Qe=Bv(),this.Ke=new be(ne),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new zv,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Je(ne),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new zv),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function Bv(){return new be(F.comparator)}function Wv(){return new be(F.comparator)}const wD={asc:"ASCENDING",desc:"DESCENDING"},ED={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TD={and:"AND",or:"OR"};class SD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fp(t,e){return t.useProto3Json||oh(e)?e:{value:e}}function cc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ID(t,e){return cc(t,e.toTimestamp())}function yn(t){return ae(!!t),z.fromTimestamp(function(n){const r=Sr(n);return new Le(r.seconds,r.nanos)}(t))}function Rg(t,e){return dp(t,e).canonicalString()}function dp(t,e){const n=function(i){return new pe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function HS(t){const e=pe.fromString(t);return ae(JS(e)),e}function pp(t,e){return Rg(t.databaseId,e.path)}function Cf(t,e){const n=HS(e);if(n.get(1)!==t.databaseId.projectId)throw new b(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new b(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(QS(n))}function GS(t,e){return Rg(t.databaseId,e)}function CD(t){const e=HS(t);return e.length===4?pe.emptyPath():QS(e)}function mp(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function QS(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function qv(t,e,n){return{name:pp(t,e),fields:n.value.mapValue.fields}}function AD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ae(c===void 0||typeof c=="string"),ft.fromBase64String(c||"")):(ae(c===void 0||c instanceof Buffer||c instanceof Uint8Array),ft.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?T.UNKNOWN:zS(u.code);return new b(c,u.message||"")}(o);n=new WS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cf(t,r.document.name),s=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):z.min(),a=new At({mapValue:{fields:r.document.fields}}),l=st.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new vu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cf(t,r.document),s=r.readTime?yn(r.readTime):z.min(),o=st.newNoDocument(i,s),a=r.removedTargetIds||[];n=new vu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cf(t,r.document),s=r.removedTargetIds||[];n=new vu([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new mD(i,s),a=r.targetId;n=new BS(a,o)}}return n}function kD(t,e){let n;if(e instanceof hh)n={update:qv(t,e.key,e.value)};else if(e instanceof US)n={delete:pp(t,e.key)};else if(e instanceof Pi)n={update:qv(t,e.key,e.data),updateMask:LD(e.fieldMask)};else{if(!(e instanceof hD))return $();n={verify:pp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof lc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ba)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Da)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof uc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ID(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:$()}(t,e.precondition)),n}function RD(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?yn(i.updateTime):yn(s);return o.isEqual(z.min())&&(o=yn(s)),new lD(o,i.transformResults||[])}(n,e))):[]}function PD(t,e){return{documents:[GS(t,e.path)]}}function KS(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=GS(t,i);const s=function(u){if(u.length!==0)return XS(on.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(f){return{field:Zn(f.field),direction:bD(f.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=fp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function xD(t){let e=CD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const f=YS(h);return f instanceof on&&TS(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(_){return new Na(Ui(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,oh(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new oc(d,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,d=h.values||[];return new oc(d,f)}(n.endAt)),Yb(e,i,o,s,a,"F",l,u)}function ND(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function YS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ui(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ui(n.unaryFilter.field);return xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ui(n.unaryFilter.field);return xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ui(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(n){return xe.create(Ui(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return on.create(n.compositeFilter.filters.map(r=>YS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return $()}}(n.compositeFilter.op))}(t):$()}function bD(t){return wD[t]}function DD(t){return ED[t]}function OD(t){return TD[t]}function Zn(t){return{fieldPath:t.canonicalString()}}function Ui(t){return Ke.fromServerFormat(t.fieldPath)}function XS(t){return t instanceof xe?function(n){if(n.op==="=="){if(Nv(n.value))return{unaryFilter:{field:Zn(n.field),op:"IS_NAN"}};if(xv(n.value))return{unaryFilter:{field:Zn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Nv(n.value))return{unaryFilter:{field:Zn(n.field),op:"IS_NOT_NAN"}};if(xv(n.value))return{unaryFilter:{field:Zn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zn(n.field),op:DD(n.op),value:n.value}}}(t):t instanceof on?function(n){const r=n.getFilters().map(i=>XS(i));return r.length===1?r[0]:{compositeFilter:{op:OD(n.op),filters:r}}}(t):$()}function LD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function JS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r,i,s=z.min(),o=z.min(),a=ft.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.ct=e}}function VD(t){const e=xD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ac(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(){this._n=new $D}addToCollectionParentIndex(e,n){return this._n.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Tr.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Tr.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class $D{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new bs(0)}static Ln(){return new bs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(){this.changes=new Ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Wo(r.mutation,i,Yt.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,n,r=G()){const i=Zr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ao();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,G()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Fn();const o=Bo(),a=function(){return Bo()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Pi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Wo(c.mutation,u,c.mutation.getFieldMask(),Le.now())):o.set(u.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new UD(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Bo();let i=new be((o,a)=>o-a),s=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Yt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||G()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=bS();c.forEach(f=>{if(!s.has(f)){const d=$S(n.get(f),r.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return F.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):AS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(Zr());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,G())).next(c=>({batchId:a,changes:NS(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(r=>{let i=Ao();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ao();return this.indexManager.getCollectionParents(e,s).next(a=>S.forEach(a,l=>{const u=function(h,f){return new Ks(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,st.newInvalidDocument(c)))});let a=Ao();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Wo(c.mutation,u,Yt.empty(),Le.now()),lh(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return S.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:yn(i.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:VD(i.bundledQuery),readTime:yn(i.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(){this.overlays=new be(F.comparator),this.hr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zr();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=Zr(),s=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new be((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Zr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Zr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dD(n,r));let s=this.hr.get(n);s===void 0&&(s=G(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.Pr=new Je($e.Ir),this.Tr=new Je($e.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new $e(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new F(new pe([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new F(new pe([])),r=new $e(n,e),i=new $e(n,e+1);let s=G();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return F.comparator(e.key,n.key)||ne(e.pr,n.pr)}static Er(e,n){return ne(e.pr,n.pr)||F.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Je($e.Ir)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new $e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ne);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),S.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const o=new $e(new F(s),0);let a=new Je(ne);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),S.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return S.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new $e(n,0),i=this.wr.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.vr=e,this.docs=function(){return new be(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Fn();const o=n.path,a=new F(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Nb(xb(c),r)<=0||(i.has(c.key)||lh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,n,r,i){$()}Fr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GD(this)}getSize(e){return S.resolve(this.size)}}class GD extends jD{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e){this.persistence=e,this.Mr=new Ys(n=>Sg(n),Ig),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Pg,this.targetCount=0,this.Lr=bs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),S.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new bs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.qn(n),S.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,n){this.Br={},this.overlays={},this.kr=new vg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new QD(this),this.indexManager=new FD,this.remoteDocumentCache=function(i){return new HD(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new MD(n),this.$r=new BD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new qD(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const i=new YD(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return S.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class YD extends Db{constructor(e){super(),this.currentSequenceNumber=e}}class xg{constructor(e){this.persistence=e,this.zr=new Pg,this.jr=null}static Hr(e){return new xg(e)}get Jr(){if(this.jr)return this.jr;throw $()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),S.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Jr,r=>{const i=F.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,z.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return S.or([()=>S.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=G(),i=G();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ng(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Qx()?8:Jr.v(ma())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new XD;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(mo()<=X.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),S.resolve()):(mo()<=X.DEBUG&&R("QueryEngine","Query:",ji(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(mo()<=X.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):S.resolve())}ji(e,n){if(Lv(n))return S.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ac(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=G(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,ac(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return Lv(n)||i.isEqual(z.min())?S.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?S.resolve(null):(mo()<=X.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ji(n)),this.es(e,o,n,Pb(i,-1)).next(a=>a))})}Zi(e,n){let r=new Je(PS(e));return n.forEach((i,s)=>{lh(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return mo()<=X.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",ji(n)),this.zi.getDocumentsMatchingQuery(e,n,Tr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new be(ne),this.rs=new Ys(s=>Sg(s),Ig),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zD(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function eO(t,e,n,r){return new ZD(t,e,n,r)}async function ZS(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=G();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function tO(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,f=h.keys();let d=S.resolve();return f.forEach(_=>{d=d.next(()=>c.getEntry(l,_)).next(v=>{const w=u.docVersions.get(_);ae(w!==null),v.version.compareTo(w)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=G();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function eI(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function nO(t,e){const n=U(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(ft.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):c.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(c.resumeToken,r)),i=i.insert(h,d),function(v,w,m){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,d,c)&&a.push(n.Qr.updateTargetData(s,d))});let l=Fn(),u=G();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(rO(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(z.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function rO(t,e,n){let r=G(),i=G();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Fn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function iO(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sO(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function gp(t,e,n){const r=U(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!rl(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Hv(t,e,n){const r=U(t);let i=z.min(),s=G();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=U(l),f=h.rs.get(c);return f!==void 0?S.resolve(h.ns.get(f)):h.Qr.getTargetData(u,c)}(r,o,_n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?s:G())).next(a=>(oO(r,Xb(e),a),{documents:a,hs:s})))}function oO(t,e,n){let r=t.ss.get(e)||z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Gv{constructor(){this.activeTargetIds=rD()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aO{constructor(){this.no=new Gv,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Gv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql=null;function Af(){return ql===null?ql=function(){return 268435456+Math.round(2147483648*Math.random())}():ql++,"0x"+ql.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="WebChannelConnection";class hO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Af(),l=this.bo(n,r.toUriEncodedString());R("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(R("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Rs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=uO[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=Af();return new Promise((o,a)=>{const l=new yb;l.setWithCredentials(!0),l.listenOnce(gb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case If.NO_ERROR:const c=l.getResponseJson();R(nt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case If.TIMEOUT:R(nt,`RPC '${e}' ${s} timed out`),a(new b(T.DEADLINE_EXCEEDED,"Request time out"));break;case If.HTTP_ERROR:const h=l.getStatus();if(R(nt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const _=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(m)>=0?m:T.UNKNOWN}(d.status);a(new b(_,d.message))}else a(new b(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new b(T.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{R(nt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);R(nt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=Af(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pb(),a=mb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");R(nt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,d=!1;const _=new cO({lo:w=>{d?R(nt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(f||(R(nt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),R(nt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},ho:()=>h.close()}),v=(w,m,p)=>{w.listen(m,g=>{try{p(g)}catch(E){setTimeout(()=>{throw E},0)}})};return v(h,zl.EventType.OPEN,()=>{d||R(nt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,zl.EventType.CLOSE,()=>{d||(d=!0,R(nt,`RPC '${e}' stream ${i} transport closed`),_.Vo())}),v(h,zl.EventType.ERROR,w=>{d||(d=!0,Rs(nt,`RPC '${e}' stream ${i} transport errored:`,w),_.Vo(new b(T.UNAVAILABLE,"The operation could not be completed")))}),v(h,zl.EventType.MESSAGE,w=>{var m;if(!d){const p=w.data[0];ae(!!p);const g=p,E=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(E){R(nt,`RPC '${e}' stream ${i} received error:`,E);const C=E.status;let k=function(te){const W=ke[te];if(W!==void 0)return zS(W)}(C),N=E.message;k===void 0&&(k=T.INTERNAL,N="Unknown error status: "+C+" with message "+E.message),d=!0,_.Vo(new b(k,N)),h.close()}else R(nt,`RPC '${e}' stream ${i} received:`,p),_.mo(p)}}),v(a,_b.STAT_EVENT,w=>{w.stat===Sv.PROXY?R(nt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===Sv.NOPROXY&&R(nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Ro()},0),_}}function kf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t){return new SD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new tI(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new b(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fO extends nI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=AD(this.serializer,e),r=function(s){if(!("targetChange"in s))return z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?yn(o.readTime):z.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=mp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=cp(l)?{documents:PD(s,l)}:{query:KS(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=qS(s,o.resumeToken);const u=fp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(z.min())>0){a.readTime=cc(s,o.snapshotVersion.toTimestamp());const u=fp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=ND(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=mp(this.serializer),n.removeTarget=e,this.t_(n)}}class dO extends nI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=RD(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.T_(r,n)}return ae(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=mp(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kD(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new b(T.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,dp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new b(T.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,dp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new b(T.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}async function mO(t,e,n){var r;const i=U(t),{request:s,V_:o,parent:a}=function(h,f,d){const{ut:_,parent:v}=KS(h,f),w={},m=[];let p=0;return d.forEach(g=>{const E="aggregate_"+p++;w[E]=g.alias,g.aggregateType==="count"?m.push({alias:E,count:{}}):g.aggregateType==="avg"?m.push({alias:E,avg:{field:Zn(g.fieldPath)}}):g.aggregateType==="sum"&&m.push({alias:E,sum:{field:Zn(g.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:m,structuredQuery:_.structuredQuery},parent:_.parent},V_:w,parent:v}}(i.serializer,function(h){const f=U(h);return f.Pe||(f.Pe=kS(f,h.explicitOrderBy)),f.Pe}(e),n);i.connection.wo||delete s.parent;const l=(await i.vo("RunAggregationQuery",i.serializer.databaseId,a,s,1)).filter(c=>!!c.result);ae(l.length===1);const u=(r=l[0].result)===null||r===void 0?void 0:r.aggregateFields;return Object.keys(u).reduce((c,h)=>(c[o[h]]=u[h],c),{})}class gO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(wn(n),this.g_=!1):R("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{xi(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=U(l);u.v_.add(4),await sl(u),u.x_.set("Unknown"),u.v_.delete(4),await ph(u)}(this))})}),this.x_=new gO(r,i)}}async function ph(t){if(xi(t))for(const e of t.F_)await e(!0)}async function sl(t){for(const e of t.F_)await e(!1)}function rI(t,e){const n=U(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Lg(n)?Og(n):Xs(n).Jo()&&Dg(n,e))}function bg(t,e){const n=U(t),r=Xs(n);n.C_.delete(e),r.Jo()&&iI(n,e),n.C_.size===0&&(r.Jo()?r.Xo():xi(n)&&n.x_.set("Unknown"))}function Dg(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Xs(t).c_(e)}function iI(t,e){t.O_.Oe(e),Xs(t).l_(e)}function Og(t){t.O_=new vD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Xs(t).start(),t.x_.p_()}function Lg(t){return xi(t)&&!Xs(t).Ho()&&t.C_.size>0}function xi(t){return U(t).v_.size===0}function sI(t){t.O_=void 0}async function yO(t){t.C_.forEach((e,n)=>{Dg(t,e)})}async function vO(t,e){sI(t),Lg(t)?(t.x_.S_(e),Og(t)):t.x_.set("Unknown")}async function wO(t,e,n){if(t.x_.set("Online"),e instanceof WS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hc(t,r)}else if(e instanceof vu?t.O_.$e(e):e instanceof BS?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(z.min()))try{const r=await eI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(ft.EMPTY_BYTE_STRING,c.snapshotVersion)),iI(s,l);const h=new rr(c.target,l,u,c.sequenceNumber);Dg(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await hc(t,r)}}async function hc(t,e,n){if(!rl(e))throw e;t.v_.add(1),await sl(t),t.x_.set("Offline"),n||(n=()=>eI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await ph(t)})}function oI(t,e){return e().catch(n=>hc(t,n,e))}async function mh(t){const e=U(t),n=Ir(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;EO(e);)try{const i=await iO(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,TO(e,i)}catch(i){await hc(e,i)}aI(e)&&lI(e)}function EO(t){return xi(t)&&t.D_.length<10}function TO(t,e){t.D_.push(e);const n=Ir(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function aI(t){return xi(t)&&!Ir(t).Ho()&&t.D_.length>0}function lI(t){Ir(t).start()}async function SO(t){Ir(t).d_()}async function IO(t){const e=Ir(t);for(const n of t.D_)e.I_(n.mutations)}async function CO(t,e,n){const r=t.D_.shift(),i=Ag.from(r,e,n);await oI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await mh(t)}async function AO(t,e){e&&Ir(t).P_&&await async function(r,i){if(function(o){return gD(o)&&o!==T.ABORTED}(i.code)){const s=r.D_.shift();Ir(r).Zo(),await oI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await mh(r)}}(t,e),aI(t)&&lI(t)}async function Kv(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=xi(n);n.v_.add(3),await sl(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await ph(n)}async function kO(t,e){const n=U(t);e?(n.v_.delete(2),await ph(n)):e||(n.v_.add(2),await sl(n),n.x_.set("Unknown"))}function Xs(t){return t.N_||(t.N_=function(n,r,i){const s=U(n);return s.R_(),new fO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:yO.bind(null,t),To:vO.bind(null,t),u_:wO.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Lg(t)?Og(t):t.x_.set("Unknown")):(await t.N_.stop(),sI(t))})),t.N_}function Ir(t){return t.L_||(t.L_=function(n,r,i){const s=U(n);return s.R_(),new dO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:SO.bind(null,t),To:AO.bind(null,t),E_:IO.bind(null,t),T_:CO.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await mh(t)):(await t.L_.stop(),t.D_.length>0&&(R("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Mg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vg(t,e){if(wn("AsyncQueue",`${e}: ${t}`),rl(t))return new b(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.comparator=e?(n,r)=>e(n,r)||F.comparator(n.key,r.key):(n,r)=>F.comparator(n.key,r.key),this.keyedMap=Ao(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new ps(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.B_=new be(F.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):$():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ds{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ds(e,n,ps.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ah(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class PO{constructor(){this.queries=new Ys(e=>RS(e),ah),this.onlineState="Unknown",this.W_=new Set}}async function uI(t,e){const n=U(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.K_()&&e.U_()&&(r=2):(s=new RO,r=e.U_()?0:1);try{switch(r){case 0:s.q_=await n.onListen(i,!0);break;case 1:s.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Vg(o,`Initialization of query '${ji(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Q_.push(e),e.G_(n.onlineState),s.q_&&e.z_(s.q_)&&Fg(n)}async function cI(t,e){const n=U(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),s.Q_.length===0?i=e.U_()?0:1:!s.K_()&&e.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function xO(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.z_(i)&&(r=!0);o.q_=i}}r&&Fg(n)}function NO(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function Fg(t){t.W_.forEach(e=>{e.next()})}var _p,Xv;(Xv=_p||(_p={})).j_="default",Xv.Cache="cache";class hI{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=Ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==_p.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.key=e}}class dI{constructor(e){this.key=e}}class bO{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=G(),this.mutatedKeys=G(),this.ha=PS(e),this.Pa=new ps(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new Yv,i=n?n.Pa:this.Pa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),d=lh(this.query,h)?h:null,_=!!f&&this.mutatedKeys.has(f.key),v=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let w=!1;f&&d?f.data.isEqual(d.data)?_!==v&&(r.track({type:3,doc:d}),w=!0):this.da(f,d)||(r.track({type:2,doc:d}),w=!0,(l&&this.ha(d,l)>0||u&&this.ha(d,u)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),w=!0):f&&!d&&(r.track({type:1,doc:f}),w=!0,(l||u)&&(a=!0)),w&&(d?(o=o.add(d),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:s}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((c,h)=>function(d,_){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return v(d)-v(_)}(c.type,h.type)||this.ha(c.doc,h.doc)),this.Aa(r),i=i!=null&&i;const a=n&&!i?this.Ra():[],l=this.la.size===0&&this.current&&!i?1:0,u=l!==this.ca;return this.ca=l,o.length!==0||u?{snapshot:new Ds(this.query,e.Pa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Yv,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=G(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new dI(r))}),this.la.forEach(r=>{e.has(r)||n.push(new fI(r))}),n}fa(e){this.ua=e.hs,this.la=G();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return Ds.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class DO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OO{constructor(e){this.key=e,this.pa=!1}}class LO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Ys(a=>RS(a),ah),this.Sa=new Map,this.ba=new Set,this.Da=new be(F.comparator),this.Ca=new Map,this.va=new Pg,this.Fa={},this.Ma=new Map,this.xa=bs.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function MO(t,e,n=!0){const r=vI(t);let i;const s=r.wa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await pI(r,e,n,!0),i}async function VO(t,e){const n=vI(t);await pI(n,e,!0,!1)}async function pI(t,e,n,r){const i=await sO(t.localStore,_n(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await FO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&rI(t.remoteStore,i),a}async function FO(t,e,n,r,i){t.Na=(h,f,d)=>async function(v,w,m,p){let g=w.view.Ta(m);g.Xi&&(g=await Hv(v.localStore,w.query,!1).then(({documents:N})=>w.view.Ta(N,g)));const E=p&&p.targetChanges.get(w.targetId),C=p&&p.targetMismatches.get(w.targetId)!=null,k=w.view.applyChanges(g,v.isPrimaryClient,E,C);return Zv(v,w.targetId,k.Va),k.snapshot}(t,h,f,d);const s=await Hv(t.localStore,e,!0),o=new bO(e,s.hs),a=o.Ta(s.documents),l=il.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Zv(t,n,u.Va);const c=new DO(e,n,o);return t.wa.set(e,c),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),u.snapshot}async function $O(t,e,n){const r=U(t),i=r.wa.get(e),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter(o=>!ah(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await gp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&bg(r.remoteStore,i.targetId),yp(r,i.targetId)}).catch(nl)):(yp(r,i.targetId),await gp(r.localStore,i.targetId,!0))}async function jO(t,e){const n=U(t),r=n.wa.get(e),i=n.Sa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),bg(n.remoteStore,r.targetId))}async function UO(t,e,n){const r=QO(t);try{const i=await function(o,a){const l=U(o),u=Le.now(),c=a.reduce((d,_)=>d.add(_.key),G());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let _=Fn(),v=G();return l.os.getEntries(d,c).next(w=>{_=w,_.forEach((m,p)=>{p.isValidDocument()||(v=v.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,_)).next(w=>{h=w;const m=[];for(const p of a){const g=cD(p,h.get(p.key).overlayedDocument);g!=null&&m.push(new Pi(p.key,g,vS(g.value.mapValue),Nn.exists(!0)))}return l.mutationQueue.addMutationBatch(d,u,m,a)}).next(w=>{f=w;const m=w.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(d,w.batchId,m)})}).then(()=>({batchId:f.batchId,changes:NS(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Fa[o.currentUser.toKey()];u||(u=new be(ne)),u=u.insert(a,l),o.Fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await ol(r,i.changes),await mh(r.remoteStore)}catch(i){const s=Vg(i,"Failed to persist write");n.reject(s)}}async function mI(t,e){const n=U(t);try{const r=await nO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ca.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?ae(o.pa):i.removedDocuments.size>0&&(ae(o.pa),o.pa=!1))}),await ol(n,r,e)}catch(r){await nl(r)}}function Jv(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wa.forEach((s,o)=>{const a=o.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=U(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const f of h.Q_)f.G_(a)&&(u=!0)}),u&&Fg(l)}(r.eventManager,e),i.length&&r.ya.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zO(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ca.get(e),s=i&&i.key;if(s){let o=new be(F.comparator);o=o.insert(s,st.newNoDocument(s,z.min()));const a=G().add(s),l=new fh(z.min(),new Map,new be(ne),o,a);await mI(r,l),r.Da=r.Da.remove(s),r.Ca.delete(e),$g(r)}else await gp(r.localStore,e,!1).then(()=>yp(r,e,n)).catch(nl)}async function BO(t,e){const n=U(t),r=e.batch.batchId;try{const i=await tO(n.localStore,e);_I(n,r,null),gI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ol(n,i)}catch(i){await nl(i)}}async function WO(t,e,n){const r=U(t);try{const i=await function(o,a){const l=U(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ae(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);_I(r,e,n),gI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ol(r,i)}catch(i){await nl(i)}}function gI(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function _I(t,e,n){const r=U(t);let i=r.Fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Fa[r.currentUser.toKey()]=i}}function yp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||yI(t,r)})}function yI(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(bg(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),$g(t))}function Zv(t,e,n){for(const r of n)r instanceof fI?(t.va.addReference(r.key,e),qO(t,r)):r instanceof dI?(R("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||yI(t,r.key)):$()}function qO(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(R("SyncEngine","New document in limbo: "+n),t.ba.add(r),$g(t))}function $g(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new F(pe.fromString(e)),r=t.xa.next();t.Ca.set(r,new OO(n)),t.Da=t.Da.insert(n,r),rI(t.remoteStore,new rr(_n(Cg(n.path)),r,"TargetPurposeLimboResolution",vg._e))}}async function ol(t,e,n){const r=U(t),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Ng.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ya.u_(i),await async function(l,u){const c=U(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(u,f=>S.forEach(f.qi,d=>c.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>S.forEach(f.Qi,d=>c.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!rl(h))throw h;R("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const d=c.ns.get(f),_=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(_);c.ns=c.ns.insert(f,v)}}}(r.localStore,s))}async function HO(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await ZS(n.localStore,e);n.currentUser=e,function(s,o){s.Ma.forEach(a=>{a.forEach(l=>{l.reject(new b(T.CANCELLED,o))})}),s.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ol(n,r.us)}}function GO(t,e){const n=U(t),r=n.Ca.get(e);if(r&&r.pa)return G().add(r.key);{let i=G();const s=n.Sa.get(e);if(!s)return i;for(const o of s){const a=n.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}function vI(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zO.bind(null,e),e.ya.u_=xO.bind(null,e.eventManager),e.ya.La=NO.bind(null,e.eventManager),e}function QO(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WO.bind(null,e),e}class e0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=dh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return eO(this.persistence,new JD,e.initialUser,this.serializer)}createPersistence(e){return new KD(xg.Hr,this.serializer)}createSharedClientState(e){return new aO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class KO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HO.bind(null,this.syncEngine),await kO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PO}()}createDatastore(e){const n=dh(e.databaseInfo.databaseId),r=function(s){return new hO(s)}(e.databaseInfo);return function(s,o,a,l){return new pO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new _O(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Jv(this.syncEngine,n,0),function(){return Qv.D()?new Qv:new lO}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new LO(i,s,o,a,l,u);return c&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=U(r);R("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await sl(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=gS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Vg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rf(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ZS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function t0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await JO(t);R("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Kv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Kv(e.remoteStore,i)),t._onlineComponents=e}function XO(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function JO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!XO(n))throw n;Rs("Error using user provided cache. Falling back to memory cache: "+n),await Rf(t,new e0)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await Rf(t,new e0);return t._offlineComponents}async function jg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await t0(t,t._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await t0(t,new KO))),t._onlineComponents}function ZO(t){return jg(t).then(e=>e.syncEngine)}function e4(t){return jg(t).then(e=>e.datastore)}async function EI(t){const e=await jg(t),n=e.eventManager;return n.onListen=MO.bind(null,e.syncEngine),n.onUnlisten=$O.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=VO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jO.bind(null,e.syncEngine),n}function t4(t,e,n={}){const r=new tn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new wI({next:f=>{o.enqueueAndForget(()=>cI(s,h));const d=f.docs.has(a);!d&&f.fromCache?u.reject(new b(T.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?u.reject(new b(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new hI(Cg(a.path),c,{includeMetadataChanges:!0,ta:!0});return uI(s,h)}(await EI(t),t.asyncQueue,e,n,r)),r.promise}function n4(t,e,n={}){const r=new tn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new wI({next:f=>{o.enqueueAndForget(()=>cI(s,h)),f.fromCache&&l.source==="server"?u.reject(new b(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new hI(a,c,{includeMetadataChanges:!0,ta:!0});return uI(s,h)}(await EI(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t,e,n){if(!n)throw new b(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function r4(t,e,n,r){if(e===!0&&r===!0)throw new b(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function r0(t){if(!F.isDocumentKey(t))throw new b(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function i0(t){if(F.isDocumentKey(t))throw new b(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function Cr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gh(t);throw new b(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function i4(t,e){if(e<=0)throw new b(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new b(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new b(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}r4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new b(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new b(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new b(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _h{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new s0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new b(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new s0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wb;switch(r.type){case"firstParty":return new Ib(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new b(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=n0.get(n);r&&(R("ComponentProvider","Removing Datastore"),n0.delete(n),r.terminate())}(this),Promise.resolve()}}function s4(t,e,n,r={}){var i;const s=(t=Cr(t,_h))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=rt.MOCK_USER;else{a=qx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new b(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new rt(u)}t._authCredentials=new Eb(new mS(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class yr extends Vr{constructor(e,n,r){super(e,n,Cg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new F(e))}withConverter(e){return new yr(this.firestore,e,this._path)}}function al(t,e,...n){if(t=vn(t),SI("collection","path",e),t instanceof _h){const r=pe.fromString(e,...n);return i0(r),new yr(t,null,r)}{if(!(t instanceof It||t instanceof yr))throw new b(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return i0(r),new yr(t.firestore,null,r)}}function II(t,e,...n){if(t=vn(t),arguments.length===1&&(e=gS.newId()),SI("doc","path",e),t instanceof _h){const r=pe.fromString(e,...n);return r0(r),new It(t,null,new F(r))}{if(!(t instanceof It||t instanceof yr))throw new b(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return r0(r),new It(t.firestore,t instanceof yr?t.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new tI(this,"async_queue_retry"),this.cu=()=>{const n=kf();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=kf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=kf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new tn;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!rl(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=Mg.createAndSchedule(this,e,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&$()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class ll extends _h{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new o4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||CI(this),this._firestoreClient.terminate()}}function a4(t,e){const n=typeof t=="object"?t:nN(),r=typeof t=="string"?t:e||"(default)",i=Z2(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Wx("firestore");s&&s4(i,...s)}return i}function yh(t){return t._firestoreClient||CI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function CI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new Fb(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,TI(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new YO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class u4{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Os(ft.fromBase64String(e))}catch(n){throw new b(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Os(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new b(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new b(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new b(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4=/^__.*__$/;class AI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Pi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function kI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Bg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new Bg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.pu(e),i}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return fc(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(kI(this.Vu)&&c4.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class h4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dh(e)}Cu(e,n,r,i=!1){return new Bg({Vu:e,methodName:n,Du:r,path:Ke.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function RI(t){const e=t._freezeSettings(),n=dh(t._databaseId);return new h4(t._databaseId,!!e.ignoreUndefinedProperties,n)}class wh extends Ug{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wh}}function f4(t,e,n,r){const i=t.Cu(1,e,n);xI("Data must be an object, but it was:",i,r);const s=[],o=At.empty();Ri(r,(l,u)=>{const c=Wg(e,l,n);u=vn(u);const h=i.yu(c);if(u instanceof wh)s.push(c);else{const f=ul(u,h);f!=null&&(s.push(c),o.set(c,f))}});const a=new Yt(s);return new AI(o,a,i.fieldTransforms)}function d4(t,e,n,r,i,s){const o=t.Cu(1,e,n),a=[o0(e,r,n)],l=[i];if(s.length%2!=0)throw new b(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(o0(e,s[f])),l.push(s[f+1]);const u=[],c=At.empty();for(let f=a.length-1;f>=0;--f)if(!_4(u,a[f])){const d=a[f];let _=l[f];_=vn(_);const v=o.yu(d);if(_ instanceof wh)u.push(d);else{const w=ul(_,v);w!=null&&(u.push(d),c.set(d,w))}}const h=new Yt(u);return new AI(c,h,o.fieldTransforms)}function p4(t,e,n,r=!1){return ul(n,t.Cu(r?4:3,e))}function ul(t,e){if(PI(t=vn(t)))return xI("Unsupported field value:",e,t),m4(t,e);if(t instanceof Ug)return function(r,i){if(!kI(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ul(a,i.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=vn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:cc(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cc(i.serializer,s)}}if(r instanceof zg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Os)return{bytesValue:qS(i.serializer,r._byteString)};if(r instanceof It){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Rg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${gh(r)}`)}(t,e)}function m4(t,e){const n={};return _S(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ri(t,(r,i)=>{const s=ul(i,e.fu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function PI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof zg||t instanceof Os||t instanceof It||t instanceof Ug)}function xI(t,e,n){if(!PI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=gh(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function o0(t,e,n){if((e=vn(e))instanceof vh)return e._internalPath;if(typeof e=="string")return Wg(t,e);throw fc("Field path arguments must be of type string or ",t,!1,void 0,n)}const g4=new RegExp("[~\\*/\\[\\]]");function Wg(t,e,n){if(e.search(g4)>=0)throw fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vh(...e.split("."))._internalPath}catch{throw fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new b(T.INVALID_ARGUMENT,a+t+l)}function _4(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new y4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Eh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class y4 extends NI{data(){return super.data()}}function Eh(t,e){return typeof e=="string"?Wg(t,e):e instanceof vh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new b(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qg{}class Hg extends qg{}function Rn(t,e,...n){let r=[];e instanceof qg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Gg).length,a=s.filter(l=>l instanceof Th).length;if(o>1||o>0&&a>0)throw new b(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Th extends Hg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Th(e,n,r)}_apply(e){const n=this._parse(e);return bI(e._query,n),new Vr(e.firestore,e.converter,hp(e._query,n))}_parse(e){const n=RI(e.firestore);return function(s,o,a,l,u,c,h){let f;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new b(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){u0(h,c);const d=[];for(const _ of h)d.push(l0(l,s,_));f={arrayValue:{values:d}}}else f=l0(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||u0(h,c),f=p4(a,o,h,c==="in"||c==="not-in");return xe.create(u,c,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ls(t,e,n){const r=e,i=Eh("where",t);return Th._create(i,r,n)}class Gg extends qg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:on.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)bI(o,l),o=hp(o,l)}(e._query,n),new Vr(e.firestore,e.converter,hp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qg extends Hg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Qg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new b(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new b(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Na(s,o)}(e._query,this._field,this._direction);return new Vr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ks(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function a0(t,e="asc"){const n=e,r=Eh("orderBy",t);return Qg._create(r,n)}class Kg extends Hg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Kg(e,n,r)}_apply(e){return new Vr(e.firestore,e.converter,ac(e._query,this._limit,this._limitType))}}function Hl(t){return i4("limit",t),Kg._create("limit",t,"F")}function l0(t,e,n){if(typeof(n=vn(n))=="string"){if(n==="")throw new b(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!AS(e)&&n.indexOf("/")!==-1)throw new b(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!F.isDocumentKey(r))throw new b(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pv(t,new F(r))}if(n instanceof It)return Pv(t,n._key);throw new b(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gh(n)}.`)}function u0(t,e){if(!Array.isArray(t)||t.length===0)throw new b(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bI(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new b(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new b(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class w4{convertValue(e,n="none"){switch(mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ri(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new zg(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Eg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ra(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);ae(JS(r));const i=new Pa(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(n)||wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}function E4(){return new l4("count")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class DI extends NI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Eh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class wu extends DI{data(e={}){return super.data(e)}}class T4{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ro(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wu(this._firestore,this._userDataWriter,r.key,r,new Ro(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new b(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new wu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ro(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new wu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ro(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:S4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function S4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I4(t){t=Cr(t,It);const e=Cr(t.firestore,ll);return t4(yh(e),t._key).then(n=>k4(e,t,n))}class Yg extends w4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function Xg(t){t=Cr(t,Vr);const e=Cr(t.firestore,ll),n=yh(e),r=new Yg(e);return v4(t._query),n4(n,t._query).then(i=>new T4(e,r,t,i))}function C4(t,e,n,...r){t=Cr(t,It);const i=Cr(t.firestore,ll),s=RI(i);let o;return o=typeof(e=vn(e))=="string"||e instanceof vh?d4(s,"updateDoc",t._key,e,n,r):f4(s,"updateDoc",t._key,e),A4(i,[o.toMutation(t._key,Nn.exists(!0))])}function A4(t,e){return function(r,i){const s=new tn;return r.asyncQueue.enqueueAndForget(async()=>UO(await ZO(r),i,s)),s.promise}(yh(t),e)}function k4(t,e,n){const r=n.docs.get(e._key),i=new Yg(t);return new DI(t,i,e._key,r,new Ro(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t){return R4(t,{count:E4()})}function R4(t,e){const n=Cr(t.firestore,ll),r=yh(n),i=function(o,a){const l=[];for(const u in o)Object.prototype.hasOwnProperty.call(o,u)&&l.push(a(o[u],u,o));return l}(e,(s,o)=>new pD(o,s.aggregateType,s._internalFieldPath));return function(o,a,l){const u=new tn;return o.asyncQueue.enqueueAndForget(async()=>{try{const c=await e4(o);u.resolve(mO(c,a,l))}catch(c){u.reject(c)}}),u.promise}(r,t._query,i).then(s=>function(a,l,u){const c=new Yg(a);return new u4(l,c,u)}(n,t,s))}(function(e,n=!0){(function(i){Qs=i})(lT),_a(new As("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ll(new Tb(r.getProvider("auth-internal")),new Ab(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new b(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pa(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),gr(Iv,"4.6.0",e),gr(Iv,"4.6.0","esm2017")})();var P4={BASE_URL:"/eshop",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const x4=P4.REACT_APP_API_KEY,Sh={apiKey:x4,authDomain:"eshop-314a2.firebaseapp.com",projectId:"eshop-314a2",storageBucket:"eshop-314a2.appspot.com",messagingSenderId:"26394570701",appId:"1:26394570701:web:dfa8542e078407c0f21e84"};console.log(Sh);const N4=uT(Sh);console.log(Sh);const Ni=a4(N4);console.log(Sh);const b4=async t=>{const e=II(Ni,"products",t),n=await I4(e);if(!n.exists())throw new Error("Could not find product with id "+id);return console.log(n.data()),{...n.data(),docId:n.id}},LI=async(t,e)=>{console.log("updating..",t,"favourite:",e);const n=II(Ni,"products",t);await C4(n,{favourite:e})},D4=async()=>{const t=al(Ni,"products");let e=Rn(t,Ls("favourite","==",!0));return(await Xg(e)).docs.map(i=>({...i.data(),docId:i.id}))},Pf=async()=>{const t=al(Ni,"products");let e=Rn(t,Ls("favourite","==",!0));const n=await OI(e);return console.log("count: ",n.data().count),n.data().count},O4=async()=>{const t=al(Ni,"products");let e=Rn(t,Ls("featured","==",!0));return(await Xg(e)).docs.map(i=>({...i.data(),docId:i.id}))},MI=async t=>{const e=al(Ni,"products"),n=t?Rn(e,Ls("category","==",t)):Rn(e),r=await OI(n);return console.log("count: ",r.data().count),r.data().count},VI=async(t=1,e=20,n="",r="")=>{const i=t*e;console.log("pg",t,"results",i,"pp",e,"cat",n,"order",r);const s=al(Ni,"products");let o;n&&r?o=Rn(s,Ls("category","==",n),a0(r),Hl(i)):n?o=Rn(s,Ls("category","==",n),Hl(i)):r?o=Rn(s,a0(r),Hl(i)):o=Rn(s,Hl(i));const l=(await Xg(o)).docs.map(u=>({...u.data(),docId:u.id}));return console.log(l.length,(t-1)*e+1,t*e),l.slice((t-1)*e,t*e)},L4=async(t=20)=>{const e=await VI(),n=await O4();console.log("featured",n);const r=await MI();return{products:e,featured:n,totalCount:r}},M4=async(t,e,n="",r="")=>{const i=await VI(t,e,r,n),s=await MI(r);return{products:i,totalCount:s}},V4=t=>{let e="";switch(t){case"tote-bag":e="Tote Bag";break;case"crossbody-bag":e="Crossbody Bag";break;case"clutch-bag":e="Clutch Bag";break}return e},F4=(t,e)=>(e&&(t+="?filter="+e.toLowerCase().replace(" ","-")),t),FI=t=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t),$4=(t,e)=>FI(Number(t)-Number(e)*Number(t)/100),$I=(t,e=20)=>Math.ceil(t/e),Jg=(t,e="black",n=1)=>{window.sessionStorage.getItem("cart")||window.sessionStorage.setItem("cart",JSON.stringify([]));const r=JSON.parse(window.sessionStorage.getItem("cart")),i=r.findIndex(s=>s.product.docId===t.docId&&s.color===e);if(i===-1)r.push({product:t,color:e,quantity:n});else if(r[i].quantity+n<=r[i].product.stock)r[i].quantity=Number(r[i].quantity)+n;else throw new Error("No more stock !");return window.sessionStorage.setItem("cart",JSON.stringify(r)),r},j4=(t,e)=>{const n=JSON.parse(window.sessionStorage.getItem("cart")),r=n.findIndex(i=>i.product.docId===t&&i.color===e);console.log("delettttttttttt",r),r!==-1&&(Number(n[r].quantity)===1?window.sessionStorage.setItem("cart",JSON.stringify(n.filter(i=>i.product.docId!==t||i.color!==e))):(n[r].quantity=Number(n[r].quantity)-1,window.sessionStorage.setItem("cart",JSON.stringify(n))),console.log("new qtyyyyyyyyy",n[r].product))},Eu=()=>(window.sessionStorage.getItem("cart")||window.sessionStorage.setItem("cart",JSON.stringify([])),JSON.parse(window.sessionStorage.getItem("cart"))),U4=()=>window.sessionStorage.getItem("cart")?JSON.parse(window.sessionStorage.getItem("cart")).reduce((e,n)=>(console.log("acc",e,"cur",n.product.price),e+n.quantity*Number(n.product.price)*((100-Number(n.product.discountPercentage))/100)),0):0,Gl=()=>Eu().reduce((t,e)=>t+e.quantity,0),z4="_btn_o8we6_1",B4={btn:z4},jI=({isLiked:t,setLikedStatus:e,className:n})=>y.jsx("button",{className:B4.btn,children:y.jsx("small",{className:n,onClick:e,children:t?"♥":"♡"})}),W4="_price_1ph02_1",q4="_discounted_1ph02_6",H4="_discount_1ph02_6",xf={price:W4,discounted:q4,discount:H4},Oa=({price:t,discount:e=0})=>{const n=`${xf.price} ${e?xf.discounted:""}`;return y.jsxs("p",{children:[y.jsx("span",{className:n,children:FI(t)}),e!==0&&y.jsx("span",{className:xf.discount,children:$4(t,e)})]})},G4="_message_kx9yi_1",Q4="_popup_kx9yi_8",K4="_fade_kx9yi_1",c0={message:G4,popup:Q4,fade:K4},gi=({message:t,type:e="message"})=>{const n=e==="message"?`${c0.message}`:`${c0.popup}`;return y.jsx("div",{className:n,children:y.jsx("p",{children:t})})},Y4=({product:t})=>{const[e,n]=I.useState(t.favourite),[r,i]=I.useState(!1),[s,o]=I.useState(!1),a=()=>{LI(t.docId,!e),n(!e)},l=Ai(),u=()=>{console.log("display page of ",t),l("/products/"+t.docId)},c=()=>{try{Jg(t),i(!0),setTimeout(()=>i(!1),1e3)}catch{o(!0),setTimeout(()=>o(!1),1e3)}};return y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:Vl.card,children:[y.jsx("img",{onClick:u,src:t.thumbnail,alt:"Denim Jeans"}),y.jsx(jI,{className:Vl.icon,setLikedStatus:a,isLiked:e}),y.jsxs("h2",{children:[t.title," (",y.jsx("small",{children:t.category}),")"]}),y.jsx(Oa,{price:t.price,discount:t.discountPercentage}),y.jsx("button",{disabled:t.stock===0,onClick:c,children:"Add to bag"}),!t.stock&&y.jsx("div",{className:Vl.overlay,children:y.jsx("p",{children:"Sold Out"})}),t.discountPercentage>50&&y.jsx("div",{className:Vl.badge,children:y.jsxs("p",{children:[t.discountPercentage,"% off"]})})]}),r&&y.jsx(gi,{message:"Added to Cart !",type:"popup"}),s&&y.jsx(gi,{message:"No more stock left !",type:"popup"})]})},Zg=({products:t,currentPage:e,numberOfPages:n,totalCount:r,heading:i="All Bags",needsPaging:s=!0,sortProducts:o,sortBy:a,filter:l})=>{const u=Ai(),c=v=>{let w=`/${Number(v)}`;l&&(w+="?filter="+l.toLowerCase().replace(" ","-")),u(w,{replace:!0,state:{sortBy:a}})},h=20,f=1+(e-1)*h;let d=f+h-1;d=d>r?r:d;const _=["title","price"];return console.log("sortby",a),y.jsxs("div",{className:hf.container,children:[y.jsx("h3",{children:i}),t.length!==0&&y.jsxs(y.Fragment,{children:[s&&y.jsxs("div",{className:hf.sort,children:[y.jsx("label",{htmlFor:"sortBy",children:"Sort By:"}),y.jsx("select",{onChange:v=>o(v.target.value),id:"sortBy",defaultValue:a,children:_.map((v,w)=>y.jsx("option",{value:v,children:v},w))})]}),s&&y.jsx(Ax,{startIndex:f,endIndex:d,totalNumberOfProducts:r}),y.jsx("div",{className:hf.grid,children:t.map(v=>y.jsx(Y4,{product:v},v.docId))}),s&&y.jsx(xx,{numberOfPages:n,currentPage:e,fetchPage:c})]}),t.length===0&&y.jsx(gi,{message:"No Products to Display"})]})},X4="_spinner_lpi3d_1",J4="_wrapper_lpi3d_8",h0={spinner:X4,wrapper:J4};function f0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?f0(Object(n),!0).forEach(function(r){Me(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function dc(t){"@babel/helpers - typeof";return dc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dc(t)}function Z4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function eL(t,e,n){return e&&d0(t.prototype,e),n&&d0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Me(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e_(t,e){return nL(t)||iL(t,e)||UI(t,e)||oL()}function cl(t){return tL(t)||rL(t)||UI(t)||sL()}function tL(t){if(Array.isArray(t))return vp(t)}function nL(t){if(Array.isArray(t))return t}function rL(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function iL(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function UI(t,e){if(t){if(typeof t=="string")return vp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vp(t,e)}}function vp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function sL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var p0=function(){},t_={},zI={},BI=null,WI={mark:p0,measure:p0};try{typeof window<"u"&&(t_=window),typeof document<"u"&&(zI=document),typeof MutationObserver<"u"&&(BI=MutationObserver),typeof performance<"u"&&(WI=performance)}catch{}var aL=t_.navigator||{},m0=aL.userAgent,g0=m0===void 0?"":m0,Ar=t_,ge=zI,_0=BI,Ql=WI;Ar.document;var Wn=!!ge.documentElement&&!!ge.head&&typeof ge.addEventListener=="function"&&typeof ge.createElement=="function",qI=~g0.indexOf("MSIE")||~g0.indexOf("Trident/"),Kl,Yl,Xl,Jl,Zl,$n="___FONT_AWESOME___",wp=16,HI="fa",GI="svg-inline--fa",_i="data-fa-i2svg",Ep="data-fa-pseudo-element",lL="data-fa-pseudo-element-pending",n_="data-prefix",r_="data-icon",y0="fontawesome-i2svg",uL="async",cL=["HTML","HEAD","STYLE","SCRIPT"],QI=function(){try{return!0}catch{return!1}}(),fe="classic",Se="sharp",i_=[fe,Se];function hl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[fe]}})}var La=hl((Kl={},Me(Kl,fe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Me(Kl,Se,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Kl)),Ma=hl((Yl={},Me(Yl,fe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Me(Yl,Se,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Yl)),Va=hl((Xl={},Me(Xl,fe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Me(Xl,Se,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Xl)),hL=hl((Jl={},Me(Jl,fe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Me(Jl,Se,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Jl)),fL=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,KI="fa-layers-text",dL=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,pL=hl((Zl={},Me(Zl,fe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Me(Zl,Se,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Zl)),YI=[1,2,3,4,5,6,7,8,9,10],mL=YI.concat([11,12,13,14,15,16,17,18,19,20]),gL=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ei={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fa=new Set;Object.keys(Ma[fe]).map(Fa.add.bind(Fa));Object.keys(Ma[Se]).map(Fa.add.bind(Fa));var _L=[].concat(i_,cl(Fa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ei.GROUP,ei.SWAP_OPACITY,ei.PRIMARY,ei.SECONDARY]).concat(YI.map(function(t){return"".concat(t,"x")})).concat(mL.map(function(t){return"w-".concat(t)})),qo=Ar.FontAwesomeConfig||{};function yL(t){var e=ge.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function vL(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ge&&typeof ge.querySelector=="function"){var wL=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];wL.forEach(function(t){var e=e_(t,2),n=e[0],r=e[1],i=vL(yL(n));i!=null&&(qo[r]=i)})}var XI={styleDefault:"solid",familyDefault:"classic",cssPrefix:HI,replacementClass:GI,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};qo.familyPrefix&&(qo.cssPrefix=qo.familyPrefix);var Ms=D(D({},XI),qo);Ms.autoReplaceSvg||(Ms.observeMutations=!1);var M={};Object.keys(XI).forEach(function(t){Object.defineProperty(M,t,{enumerable:!0,set:function(n){Ms[t]=n,Ho.forEach(function(r){return r(M)})},get:function(){return Ms[t]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(e){Ms.cssPrefix=e,Ho.forEach(function(n){return n(M)})},get:function(){return Ms.cssPrefix}});Ar.FontAwesomeConfig=M;var Ho=[];function EL(t){return Ho.push(t),function(){Ho.splice(Ho.indexOf(t),1)}}var Gn=wp,dn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function TL(t){if(!(!t||!Wn)){var e=ge.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ge.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ge.head.insertBefore(e,r),t}}var SL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $a(){for(var t=12,e="";t-- >0;)e+=SL[Math.random()*62|0];return e}function Js(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function s_(t){return t.classList?Js(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function JI(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function IL(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(JI(t[n]),'" ')},"").trim()}function Ih(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function o_(t){return t.size!==dn.size||t.x!==dn.x||t.y!==dn.y||t.rotate!==dn.rotate||t.flipX||t.flipY}function CL(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function AL(t){var e=t.transform,n=t.width,r=n===void 0?wp:n,i=t.height,s=i===void 0?wp:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&qI?l+="translate(".concat(e.x/Gn-r/2,"em, ").concat(e.y/Gn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Gn,"em), calc(-50% + ").concat(e.y/Gn,"em)) "):l+="translate(".concat(e.x/Gn,"em, ").concat(e.y/Gn,"em) "),l+="scale(".concat(e.size/Gn*(e.flipX?-1:1),", ").concat(e.size/Gn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var kL=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ZI(){var t=HI,e=GI,n=M.cssPrefix,r=M.replacementClass,i=kL;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var v0=!1;function Nf(){M.autoAddCss&&!v0&&(TL(ZI()),v0=!0)}var RL={mixout:function(){return{dom:{css:ZI,insertCss:Nf}}},hooks:function(){return{beforeDOMElementCreation:function(){Nf()},beforeI2svg:function(){Nf()}}}},jn=Ar||{};jn[$n]||(jn[$n]={});jn[$n].styles||(jn[$n].styles={});jn[$n].hooks||(jn[$n].hooks={});jn[$n].shims||(jn[$n].shims=[]);var Xt=jn[$n],eC=[],PL=function t(){ge.removeEventListener("DOMContentLoaded",t),pc=1,eC.map(function(e){return e()})},pc=!1;Wn&&(pc=(ge.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ge.readyState),pc||ge.addEventListener("DOMContentLoaded",PL));function xL(t){Wn&&(pc?setTimeout(t,0):eC.push(t))}function fl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?JI(t):"<".concat(e," ").concat(IL(r),">").concat(s.map(fl).join(""),"</").concat(e,">")}function w0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var NL=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},bf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?NL(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function bL(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Tp(t){var e=bL(t);return e.length===1?e[0].toString(16):null}function DL(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function E0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Sp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=E0(e);typeof Xt.hooks.addPack=="function"&&!i?Xt.hooks.addPack(t,E0(e)):Xt.styles[t]=D(D({},Xt.styles[t]||{}),s),t==="fas"&&Sp("fa",e)}var eu,tu,nu,ts=Xt.styles,OL=Xt.shims,LL=(eu={},Me(eu,fe,Object.values(Va[fe])),Me(eu,Se,Object.values(Va[Se])),eu),a_=null,tC={},nC={},rC={},iC={},sC={},ML=(tu={},Me(tu,fe,Object.keys(La[fe])),Me(tu,Se,Object.keys(La[Se])),tu);function VL(t){return~_L.indexOf(t)}function FL(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!VL(i)?i:null}var oC=function(){var e=function(s){return bf(ts,function(o,a,l){return o[l]=bf(a,s,{}),o},{})};tC=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),nC=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),sC=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in ts||M.autoFetchSvg,r=bf(OL,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});rC=r.names,iC=r.unicodes,a_=Ch(M.styleDefault,{family:M.familyDefault})};EL(function(t){a_=Ch(t.styleDefault,{family:M.familyDefault})});oC();function l_(t,e){return(tC[t]||{})[e]}function $L(t,e){return(nC[t]||{})[e]}function ti(t,e){return(sC[t]||{})[e]}function aC(t){return rC[t]||{prefix:null,iconName:null}}function jL(t){var e=iC[t],n=l_("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function kr(){return a_}var u_=function(){return{prefix:null,iconName:null,rest:[]}};function Ch(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?fe:n,i=La[r][t],s=Ma[r][t]||Ma[r][i],o=t in Xt.styles?t:null;return s||o||null}var T0=(nu={},Me(nu,fe,Object.keys(Va[fe])),Me(nu,Se,Object.keys(Va[Se])),nu);function Ah(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Me(e,fe,"".concat(M.cssPrefix,"-").concat(fe)),Me(e,Se,"".concat(M.cssPrefix,"-").concat(Se)),e),o=null,a=fe;(t.includes(s[fe])||t.some(function(u){return T0[fe].includes(u)}))&&(a=fe),(t.includes(s[Se])||t.some(function(u){return T0[Se].includes(u)}))&&(a=Se);var l=t.reduce(function(u,c){var h=FL(M.cssPrefix,c);if(ts[c]?(c=LL[a].includes(c)?hL[a][c]:c,o=c,u.prefix=c):ML[a].indexOf(c)>-1?(o=c,u.prefix=Ch(c,{family:a})):h?u.iconName=h:c!==M.replacementClass&&c!==s[fe]&&c!==s[Se]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?aC(u.iconName):{},d=ti(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||d||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!ts.far&&ts.fas&&!M.autoFetchSvg&&(u.prefix="fas")}return u},u_());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Se&&(ts.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=ti(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=kr()||"fas"),l}var UL=function(){function t(){Z4(this,t),this.definitions={}}return eL(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),o[a]),Sp(a,o[a]);var l=Va[fe][a];l&&Sp(l,o[a]),oC()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][l]=u}),n}}]),t}(),S0=[],ns={},ms={},zL=Object.keys(ms);function BL(t,e){var n=e.mixoutsTo;return S0=t,ns={},Object.keys(ms).forEach(function(r){zL.indexOf(r)===-1&&delete ms[r]}),S0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),dc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){ns[o]||(ns[o]=[]),ns[o].push(s[o])})}r.provides&&r.provides(ms)}),n}function Ip(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=ns[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function yi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ns[t]||[];i.forEach(function(s){s.apply(null,n)})}function Un(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ms[t]?ms[t].apply(null,e):void 0}function Cp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||kr();if(e)return e=ti(n,e)||e,w0(lC.definitions,n,e)||w0(Xt.styles,n,e)}var lC=new UL,WL=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,yi("noAuto")},qL={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wn?(yi("beforeI2svg",e),Un("pseudoElements2svg",e),Un("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,xL(function(){GL({autoReplaceSvgRoot:n}),yi("watch",e)})}},HL={icon:function(e){if(e===null)return null;if(dc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ti(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Ch(e[0]);return{prefix:r,iconName:ti(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(M.cssPrefix,"-"))>-1||e.match(fL))){var i=Ah(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||kr(),iconName:ti(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=kr();return{prefix:s,iconName:ti(s,e)||e}}}},Ot={noAuto:WL,config:M,dom:qL,parse:HL,library:lC,findIconDefinition:Cp,toHtml:fl},GL=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ge:n;(Object.keys(Xt.styles).length>0||M.autoFetchSvg)&&Wn&&M.autoReplaceSvg&&Ot.dom.i2svg({node:r})};function kh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return fl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Wn){var r=ge.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function QL(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(o_(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Ih(D(D({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function KL(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(M.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:o}),children:r}]}]}function c_(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,_=r.found?r:n,v=_.width,w=_.height,m=i==="fak",p=[M.replacementClass,s?"".concat(M.cssPrefix,"-").concat(s):""].filter(function(te){return h.classes.indexOf(te)===-1}).filter(function(te){return te!==""||!!te}).concat(h.classes).join(" "),g={children:[],attributes:D(D({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(w)})},E=m&&!~h.classes.indexOf("fa-fw")?{width:"".concat(v/w*16*.0625,"em")}:{};d&&(g.attributes[_i]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||$a())},children:[l]}),delete g.attributes.title);var C=D(D({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:D(D({},E),h.styles)}),k=r.found&&n.found?Un("generateAbstractMask",C)||{children:[],attributes:{}}:Un("generateAbstractIcon",C)||{children:[],attributes:{}},N=k.children,V=k.attributes;return C.children=N,C.attributes=V,a?KL(C):QL(C)}function I0(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=D(D(D({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[_i]="");var c=D({},o.styles);o_(i)&&(c.transform=AL({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var h=Ih(c);h.length>0&&(u.style=h);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function YL(t){var e=t.content,n=t.title,r=t.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Ih(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Df=Xt.styles;function Ap(t){var e=t[0],n=t[1],r=t.slice(4),i=e_(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(ei.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(ei.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(ei.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var XL={found:!1,width:512,height:512};function JL(t,e){!QI&&!M.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function kp(t,e){var n=e;return e==="fa"&&M.styleDefault!==null&&(e=kr()),new Promise(function(r,i){if(Un("missingIconAbstract"),n==="fa"){var s=aC(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Df[e]&&Df[e][t]){var o=Df[e][t];return r(Ap(o))}JL(t,e),r(D(D({},XL),{},{icon:M.showMissingIcons&&t?Un("missingIconAbstract")||{}:{}}))})}var C0=function(){},Rp=M.measurePerformance&&Ql&&Ql.mark&&Ql.measure?Ql:{mark:C0,measure:C0},Po='FA "6.5.2"',ZL=function(e){return Rp.mark("".concat(Po," ").concat(e," begins")),function(){return uC(e)}},uC=function(e){Rp.mark("".concat(Po," ").concat(e," ends")),Rp.measure("".concat(Po," ").concat(e),"".concat(Po," ").concat(e," begins"),"".concat(Po," ").concat(e," ends"))},h_={begin:ZL,end:uC},Tu=function(){};function A0(t){var e=t.getAttribute?t.getAttribute(_i):null;return typeof e=="string"}function eM(t){var e=t.getAttribute?t.getAttribute(n_):null,n=t.getAttribute?t.getAttribute(r_):null;return e&&n}function tM(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(M.replacementClass)}function nM(){if(M.autoReplaceSvg===!0)return Su.replace;var t=Su[M.autoReplaceSvg];return t||Su.replace}function rM(t){return ge.createElementNS("http://www.w3.org/2000/svg",t)}function iM(t){return ge.createElement(t)}function cC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?rM:iM:n;if(typeof t=="string")return ge.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(cC(o,{ceFn:r}))}),i}function sM(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Su={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(cC(i),n)}),n.getAttribute(_i)===null&&M.keepOriginalSource){var r=ge.createComment(sM(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~s_(n).indexOf(M.replacementClass))return Su.replace(e);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===M.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return fl(a)}).join(`
`);n.setAttribute(_i,""),n.innerHTML=o}};function k0(t){t()}function hC(t,e){var n=typeof e=="function"?e:Tu;if(t.length===0)n();else{var r=k0;M.mutateApproach===uL&&(r=Ar.requestAnimationFrame||k0),r(function(){var i=nM(),s=h_.begin("mutate");t.map(i),s(),n()})}}var f_=!1;function fC(){f_=!0}function Pp(){f_=!1}var mc=null;function R0(t){if(_0&&M.observeMutations){var e=t.treeCallback,n=e===void 0?Tu:e,r=t.nodeCallback,i=r===void 0?Tu:r,s=t.pseudoElementsCallback,o=s===void 0?Tu:s,a=t.observeMutationsRoot,l=a===void 0?ge:a;mc=new _0(function(u){if(!f_){var c=kr();Js(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!A0(h.addedNodes[0])&&(M.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&M.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&A0(h.target)&&~gL.indexOf(h.attributeName))if(h.attributeName==="class"&&eM(h.target)){var f=Ah(s_(h.target)),d=f.prefix,_=f.iconName;h.target.setAttribute(n_,d||c),_&&h.target.setAttribute(r_,_)}else tM(h.target)&&i(h.target)})}}),Wn&&mc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function oM(){mc&&mc.disconnect()}function aM(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function lM(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Ah(s_(t));return i.prefix||(i.prefix=kr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=$L(i.prefix,t.innerText)||l_(i.prefix,Tp(t.innerText))),!i.iconName&&M.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function uM(t){var e=Js(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return M.autoA11y&&(n?e["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||$a()):(e["aria-hidden"]="true",e.focusable="false")),e}function cM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:dn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function P0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=lM(t),r=n.iconName,i=n.prefix,s=n.rest,o=uM(t),a=Ip("parseNodeAttributes",{},t),l=e.styleParser?aM(t):[];return D({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:dn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var hM=Xt.styles;function dC(t){var e=M.autoReplaceSvg==="nest"?P0(t,{styleParser:!1}):P0(t);return~e.extra.classes.indexOf(KI)?Un("generateLayersText",t,e):Un("generateSvgReplacementMutation",t,e)}var Rr=new Set;i_.map(function(t){Rr.add("fa-".concat(t))});Object.keys(La[fe]).map(Rr.add.bind(Rr));Object.keys(La[Se]).map(Rr.add.bind(Rr));Rr=cl(Rr);function x0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Wn)return Promise.resolve();var n=ge.documentElement.classList,r=function(h){return n.add("".concat(y0,"-").concat(h))},i=function(h){return n.remove("".concat(y0,"-").concat(h))},s=M.autoFetchSvg?Rr:i_.map(function(c){return"fa-".concat(c)}).concat(Object.keys(hM));s.includes("fa")||s.push("fa");var o=[".".concat(KI,":not([").concat(_i,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(_i,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Js(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=h_.begin("onTree"),u=a.reduce(function(c,h){try{var f=dC(h);f&&c.push(f)}catch(d){QI||d.name==="MissingIcon"&&console.error(d)}return c},[]);return new Promise(function(c,h){Promise.all(u).then(function(f){hC(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),h(f)})})}function fM(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;dC(t).then(function(n){n&&hC([n],e)})}function dM(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Cp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Cp(i||{})),t(r,D(D({},n),{},{mask:i}))}}var pM=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?dn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,h=n.title,f=h===void 0?null:h,d=n.titleId,_=d===void 0?null:d,v=n.classes,w=v===void 0?[]:v,m=n.attributes,p=m===void 0?{}:m,g=n.styles,E=g===void 0?{}:g;if(e){var C=e.prefix,k=e.iconName,N=e.icon;return kh(D({type:"icon"},e),function(){return yi("beforeDOMElementCreation",{iconDefinition:e,params:n}),M.autoA11y&&(f?p["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(_||$a()):(p["aria-hidden"]="true",p.focusable="false")),c_({icons:{main:Ap(N),mask:l?Ap(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:k,transform:D(D({},dn),i),symbol:o,title:f,maskId:c,titleId:_,extra:{attributes:p,styles:E,classes:w}})})}},mM={mixout:function(){return{icon:dM(pM)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=x0,n.nodeCallback=fM,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ge:r,s=n.callback,o=s===void 0?function(){}:s;return x0(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,h=r.maskId,f=r.extra;return new Promise(function(d,_){Promise.all([kp(i,a),c.iconName?kp(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var w=e_(v,2),m=w[0],p=w[1];d([n,c_({icons:{main:m,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Ih(a);l.length>0&&(i.style=l);var u;return o_(o)&&(u=Un("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},gM={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return kh({type:"layer"},function(){yi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(cl(s)).join(" ")},children:o}]})}}}},_M={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,h=c===void 0?{}:c;return kh({type:"counter",content:n},function(){return yi("beforeDOMElementCreation",{content:n,params:r}),YL({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(cl(a))}})})}}}},yM={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?dn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,h=c===void 0?{}:c,f=r.styles,d=f===void 0?{}:f;return kh({type:"text",content:n},function(){return yi("beforeDOMElementCreation",{content:n,params:r}),I0({content:n,transform:D(D({},dn),s),title:a,extra:{attributes:h,styles:d,classes:["".concat(M.cssPrefix,"-layers-text")].concat(cl(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(qI){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return M.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,I0({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},vM=new RegExp('"',"ug"),N0=[1105920,1112319];function wM(t){var e=t.replace(vM,""),n=DL(e,0),r=n>=N0[0]&&n<=N0[1],i=e.length===2?e[0]===e[1]:!1;return{value:Tp(i?e[0]:e),isSecondary:r||i}}function b0(t,e){var n="".concat(lL).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Js(t.children),o=s.filter(function(N){return N.getAttribute(Ep)===e})[0],a=Ar.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(dL),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Se:fe,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ma[f][l[2].toLowerCase()]:pL[f][u],_=wM(h),v=_.value,w=_.isSecondary,m=l[0].startsWith("FontAwesome"),p=l_(d,v),g=p;if(m){var E=jL(v);E.iconName&&E.prefix&&(p=E.iconName,d=E.prefix)}if(p&&!w&&(!o||o.getAttribute(n_)!==d||o.getAttribute(r_)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var C=cM(),k=C.extra;k.attributes[Ep]=e,kp(p,d).then(function(N){var V=c_(D(D({},C),{},{icons:{main:N,mask:u_()},prefix:d,iconName:g,extra:k,watchable:!0})),te=ge.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(te,t.firstChild):t.appendChild(te),te.outerHTML=V.map(function(W){return fl(W)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function EM(t){return Promise.all([b0(t,"::before"),b0(t,"::after")])}function TM(t){return t.parentNode!==document.head&&!~cL.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ep)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function D0(t){if(Wn)return new Promise(function(e,n){var r=Js(t.querySelectorAll("*")).filter(TM).map(EM),i=h_.begin("searchPseudoElements");fC(),Promise.all(r).then(function(){i(),Pp(),e()}).catch(function(){i(),Pp(),n()})})}var SM={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=D0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ge:r;M.searchPseudoElements&&D0(i)}}},O0=!1,IM={mixout:function(){return{dom:{unwatch:function(){fC(),O0=!0}}}},hooks:function(){return{bootstrap:function(){R0(Ip("mutationObserverCallbacks",{}))},noAuto:function(){oM()},watch:function(n){var r=n.observeMutationsRoot;O0?Pp():R0(Ip("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},L0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},CM={mixout:function(){return{parse:{transform:function(n){return L0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=L0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:D({},d.outer),children:[{tag:"g",attributes:D({},d.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),d.path)}]}]}}}},Of={x:0,y:0,width:"100%",height:"100%"};function M0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function AM(t){return t.tag==="g"?t.children:[t]}var kM={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Ah(i.split(" ").map(function(o){return o.trim()})):u_();return s.prefix||(s.prefix=kr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,h=o.width,f=o.icon,d=CL({transform:l,containerWidth:h,iconWidth:u}),_={tag:"rect",attributes:D(D({},Of),{},{fill:"white"})},v=c.children?{children:c.children.map(M0)}:{},w={tag:"g",attributes:D({},d.inner),children:[M0(D({tag:c.tag,attributes:D(D({},c.attributes),d.path)},v))]},m={tag:"g",attributes:D({},d.outer),children:[w]},p="mask-".concat(a||$a()),g="clip-".concat(a||$a()),E={tag:"mask",attributes:D(D({},Of),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,m]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:AM(f)},E]};return r.push(C,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(p,")")},Of)}),{children:r,attributes:i}}}},RM={provides:function(e){var n=!1;Ar.matchMedia&&(n=Ar.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=D(D({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},PM={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},xM=[RL,mM,gM,_M,yM,SM,IM,CM,kM,RM,PM];BL(xM,{mixoutsTo:Ot});Ot.noAuto;Ot.config;Ot.library;Ot.dom;var xp=Ot.parse;Ot.findIconDefinition;Ot.toHtml;var NM=Ot.icon;Ot.layer;Ot.text;Ot.counter;var pC={exports:{}},bM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",DM=bM,OM=DM;function mC(){}function gC(){}gC.resetWarningCache=mC;var LM=function(){function t(r,i,s,o,a,l){if(l!==OM){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:gC,resetWarningCache:mC};return n.PropTypes=n,n};pC.exports=LM();var MM=pC.exports;const H=S1(MM);function V0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ir(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?V0(Object(n),!0).forEach(function(r){rs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function gc(t){"@babel/helpers - typeof";return gc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gc(t)}function rs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function VM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function FM(t,e){if(t==null)return{};var n=VM(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Np(t){return $M(t)||jM(t)||UM(t)||zM()}function $M(t){if(Array.isArray(t))return bp(t)}function jM(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function UM(t,e){if(t){if(typeof t=="string")return bp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bp(t,e)}}function bp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function zM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function BM(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,h=t.pulse,f=t.fixedWidth,d=t.inverse,_=t.border,v=t.listItem,w=t.flip,m=t.size,p=t.rotation,g=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":f,"fa-inverse":d,"fa-border":_,"fa-li":v,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},rs(e,"fa-".concat(m),typeof m<"u"&&m!==null),rs(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),rs(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),rs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(C){return E[C]?C:null}).filter(function(C){return C})}function WM(t){return t=t-0,t===t}function _C(t){return WM(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var qM=["style"];function HM(t){return t.charAt(0).toUpperCase()+t.slice(1)}function GM(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=_C(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[HM(i)]=s:e[i]=s,e},{})}function yC(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return yC(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=GM(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[_C(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=FM(n,qM);return i.attrs.style=ir(ir({},i.attrs.style),o),t.apply(void 0,[e.tag,ir(ir({},i.attrs),a)].concat(Np(r)))}var vC=!1;try{vC=!0}catch{}function QM(){if(!vC&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function F0(t){if(t&&gc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(xp.icon)return xp.icon(t);if(t===null)return null;if(t&&gc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Lf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?rs({},t,e):{}}var Pr=Ac.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=F0(n),c=Lf("classes",[].concat(Np(BM(t)),Np(s.split(" ")))),h=Lf("transform",typeof t.transform=="string"?xp.transform(t.transform):t.transform),f=Lf("mask",F0(r)),d=NM(u,ir(ir(ir(ir({},c),h),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!d)return QM("Could not find icon",u),null;var _=d.abstract,v={ref:e};return Object.keys(t).forEach(function(w){Pr.defaultProps.hasOwnProperty(w)||(v[w]=t[w])}),KM(_[0],v)});Pr.displayName="FontAwesomeIcon";Pr.propTypes={beat:H.bool,border:H.bool,beatFade:H.bool,bounce:H.bool,className:H.string,fade:H.bool,flash:H.bool,mask:H.oneOfType([H.object,H.array,H.string]),maskId:H.string,fixedWidth:H.bool,inverse:H.bool,flip:H.oneOf([!0,!1,"horizontal","vertical","both"]),icon:H.oneOfType([H.object,H.array,H.string]),listItem:H.bool,pull:H.oneOf(["right","left"]),pulse:H.bool,rotation:H.oneOf([0,90,180,270]),shake:H.bool,size:H.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:H.bool,spinPulse:H.bool,spinReverse:H.bool,symbol:H.oneOfType([H.bool,H.string]),title:H.string,titleId:H.string,transform:H.oneOfType([H.string,H.object]),swapOpacity:H.bool};Pr.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var KM=yC.bind(null,Ac.createElement),YM={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},XM={prefix:"fas",iconName:"bag-shopping",icon:[448,512,["shopping-bag"],"f290","M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},JM=XM,ZM={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},eV={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]};const Rh=()=>y.jsx("div",{className:h0.wrapper,children:y.jsx(Pr,{icon:eV,className:h0.spinner,size:"lg"})}),tV="_error_m8piy_1",nV={error:tV},d_=({errMsg:t})=>y.jsxs("div",{className:nV.error,children:[y.jsx("h2",{children:t}),y.jsx("h4",{children:"Sorry...something went wrong !"}),y.jsxs("ul",{children:["Here are a few tips to get what ypu want:",y.jsx("li",{children:"Try a different link"}),y.jsx("li",{children:"Check the spellings"}),y.jsx("li",{children:"...or just try again after a break!"})]})]}),rV=()=>{const[t,e]=I.useState(!1),[n,r]=I.useState(null),[i,s]=I.useState([]),[o,a]=I.useState([]),[l,u]=I.useState(0),c=20;I.useEffect(()=>{r(null),e(!0),L4().then(d=>{s(d.products),a(d.featured),u(d.totalCount)}).catch(d=>{console.error(d.message),r(d.message)}).finally(()=>{e(!1)})},[]);const h=Ai(),f=d=>{h("/1",{state:{sortBy:d}})};return y.jsxs("div",{className:lx.page,children:[n&&y.jsx(d_,{errMsg:n}),t&&y.jsx(Rh,{}),!n&&!t&&i.length>0&&y.jsxs(y.Fragment,{children:[y.jsx(KE,{products:o,isAutoSliding:!0}),y.jsx(Zg,{products:i,numberOfPages:$I(l,c),currentPage:1,totalCount:l,sortProducts:f})]})]})},iV="_header_u99a6_1",sV="_link_u99a6_10",oV="_icon_container_u99a6_22",aV="_icon_u99a6_22",lV="_icon_wrapper_u99a6_31",jr={header:iV,link:sV,icon_container:oV,icon:aV,icon_wrapper:lV},uV="_open_btn_y0hl5_1",cV="_overlay_y0hl5_14",hV="_nav_y0hl5_31",fV="_link_y0hl5_49",dV="_close_btn_y0hl5_60",Hr={open_btn:uV,overlay:cV,nav:hV,link:fV,close_btn:dV},pV="_nav_15aw1_1",mV="_link_15aw1_8",$0={nav:pV,link:mV},wC=({mode:t})=>{const e=t==="mobile"?`${Hr.nav}`:`${$0.nav}`,n=t==="mobile"?`${Hr.link}`:`${$0.link}`;return y.jsxs("div",{className:e,children:[y.jsx(Jn,{className:n,to:"/",children:"Home"}),y.jsx(Jn,{className:n,to:"/1",children:"All Bags"}),y.jsx(Jn,{className:n,to:"/1?filter=tote-bag",children:"Tote Bags"}),y.jsx(Jn,{className:n,to:"/1?filter=clutch-bag",children:"Clutch Bags"}),y.jsx(Jn,{className:n,to:"/1?filter=crossbody-bag",children:"Crossbody Bags"})]})},gV=()=>{const t=I.useRef(),e=()=>{console.log("open up a menu"),t.current.style.display="block"},n=()=>{console.log("close menu",t.current),t.current.style.display="none"},r=()=>{t.current.style.display="none"};return y.jsxs("div",{className:Hr.wrapper,children:[y.jsx("button",{className:Hr.open_btn,onClick:e,children:y.jsx(Pr,{icon:YM,className:Hr.mob_nav,siz:"lg"})}),y.jsxs("div",{onClick:r,className:Hr.overlay,ref:t,children:[y.jsx(wC,{mode:"mobile"}),y.jsx("button",{onClick:n,className:Hr.close_btn,children:"X"})]})]})},_V=()=>{const[t,e]=I.useState(0),[n,r]=I.useState(0);return I.useEffect(()=>{e(Gl()),Pf().then(r);const i=()=>{console.log("click",Gl()),e(Gl()),Pf().then(r)},s=()=>{console.log("mousedown",n),e(Gl()),Pf().then(r)};return window.addEventListener("mousedown",s),window.addEventListener("click",i),()=>{window.removeEventListener("mousedown",s),window.removeEventListener("click",i)}},[]),y.jsxs("div",{className:jr.header,children:[y.jsx(gV,{}),y.jsx(Jn,{className:jr.link,to:"/",children:y.jsxs("h1",{children:[y.jsx("span",{children:"VRB"}),"ags"]})}),y.jsxs("div",{className:jr.icon_container,children:[y.jsx(Jn,{to:"/wishlist",children:y.jsxs("div",{className:jr.icon_wrapper,children:[y.jsx(Pr,{className:jr.icon,icon:ZM,siz:"lg"}),y.jsx("small",{children:n})]})}),y.jsx(Jn,{to:"/cart",children:y.jsxs("div",{className:jr.icon_wrapper,children:[y.jsx(Pr,{className:jr.icon,icon:JM,siz:"lg"}),y.jsx("small",{children:t})]})})]})]})},yV="_footer_16ir7_1",vV={footer:yV},wV=()=>y.jsxs("footer",{className:vV.footer,children:["© ",new Date().getFullYear()," Ammara Haroon"]}),EV="_page_143hw_1",TV={page:EV},SV=()=>{const[t,e]=I.useState(!1),[n,r]=I.useState(null),[i,s]=I.useState([]);return I.useEffect(()=>{r(null),e(!0),D4().then(o=>{s(o)}).catch(o=>{r(err.message)}).finally(()=>{e(!1)})},[]),y.jsxs("div",{className:TV.page,children:[n&&y.jsx(ErrorMessage,{errMsg:n}),t&&y.jsx(Rh,{}),!n&&!t&&y.jsx(Zg,{products:i,heading:"My Wish List",needsPaging:!1})]})},IV="_page_143hw_1",CV={page:IV},AV="_wrapper_13d16_1",kV="_information_13d16_13",RV="_cart_button_13d16_30",PV="_header_13d16_58",xV="_container_13d16_62",NV="_icon_13d16_73",Mi={wrapper:AV,information:kV,cart_button:RV,header:PV,container:xV,icon:NV},bV="_pink_tb614_34",DV="_brown_tb614_38",OV="_beige_tb614_42",LV="_black_tb614_47",MV="_wrapper_tb614_51",j0={pink:bV,brown:DV,beige:OV,black:LV,wrapper:MV},VV=({colors:t,label:e,defaultColor:n,onChange:r})=>y.jsxs("div",{className:j0.wrapper,children:[y.jsxs("label",{htmlFor:"color",children:[e," "]}),t.map(i=>y.jsx("input",{type:"radio",name:"color",className:j0[[i]],value:i,onChange:r,checked:i===n},i))]});var U0={};const z0="@firebase/database",B0="1.0.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EC="";function FV(t){EC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $V{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ga(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Bn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $V(e)}}catch{}return new jV},ni=TC("localStorage"),Dp=TC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Hm("@firebase/database"),UV=function(){let t=1;return function(){return t++}}(),SC=function(t){const e=i2(t),n=new n2;n.update(e);const r=n.digest();return Bm.encodeByteArray(r)},dl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=dl.apply(null,r):typeof r=="object"?e+=Qe(r):e+=r,e+=" "}return e};let oi=null,W0=!0;const zV=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(gs.logLevel=X.VERBOSE,oi=gs.log.bind(gs),e&&Dp.set("logging_enabled",!0)):typeof t=="function"?oi=t:(oi=null,Dp.remove("logging_enabled"))},ot=function(...t){if(W0===!0&&(W0=!1,oi===null&&Dp.get("logging_enabled")===!0&&zV(!0)),oi){const e=dl.apply(null,t);oi(e)}},pl=function(t){return function(...e){ot(t,...e)}},Op=function(...t){const e="FIREBASE INTERNAL ERROR: "+dl(...t);gs.error(e)},vi=function(...t){const e=`FIREBASE FATAL ERROR: ${dl(...t)}`;throw gs.error(e),new Error(e)},Pt=function(...t){const e="FIREBASE WARNING: "+dl(...t);gs.warn(e)},BV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},IC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},WV=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vs="[MIN_NAME]",wi="[MAX_NAME]",Zs=function(t,e){if(t===e)return 0;if(t===Vs||e===wi)return-1;if(e===Vs||t===wi)return 1;{const n=q0(t),r=q0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},qV=function(t,e){return t===e?0:t<e?-1:1},go=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Qe(e))},p_=function(t){if(typeof t!="object"||t===null)return Qe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Qe(e[r]),n+=":",n+=p_(t[e[r]]);return n+="}",n},CC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Bt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const AC=function(t){P(!IC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},HV=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},GV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},QV=new RegExp("^-?(0*)\\d{1,10}$"),KV=-2147483648,YV=2147483647,q0=function(t){if(QV.test(t)){const e=Number(t);if(e>=KV&&e<=YV)return e}return null},ml=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pt("Exception was thrown by user callback.",n),e},Math.floor(0))}},XV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Go=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Pt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pt(e)}}class Lp{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Lp.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="5",kC="v",RC="s",PC="r",xC="f",NC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bC="ls",DC="p",Mp="ac",OC="websocket",LC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ni.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ni.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function tF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function MC(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===OC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===LC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);tF(t)&&(n.ns=t.namespace);const i=[];return Bt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(){this.counters_={}}incrementCounter(e,n=1){Bn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Vx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf={},Vf={};function g_(t){const e=t.toString();return Mf[e]||(Mf[e]=new nF),Mf[e]}function rF(t,e){const n=t.toString();return Vf[n]||(Vf[n]=e()),Vf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ml(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="start",sF="close",oF="pLPCommand",aF="pRTLPCB",VC="id",FC="pw",$C="ser",lF="cb",uF="seg",cF="ts",hF="d",fF="dframe",jC=1870,UC=30,dF=jC-UC,pF=25e3,mF=3e4;class is{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pl(e),this.stats_=g_(n),this.urlFn=l=>(this.appCheckToken&&(l[Mp]=this.appCheckToken),MC(n,LC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new iF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(mF)),WV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new __((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===H0)this.id=a,this.password=l;else if(o===sF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[H0]="t",r[$C]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[lF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[kC]=m_,this.transportSessionId&&(r[RC]=this.transportSessionId),this.lastSessionId&&(r[bC]=this.lastSessionId),this.applicationId&&(r[DC]=this.applicationId),this.appCheckToken&&(r[Mp]=this.appCheckToken),typeof location<"u"&&location.hostname&&NC.test(location.hostname)&&(r[PC]=xC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){is.forceAllow_=!0}static forceDisallow(){is.forceDisallow_=!0}static isAvailable(){return is.forceAllow_?!0:!is.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!HV()&&!GV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=JE(n),i=CC(r,dF);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[fF]="t",r[VC]=e,r[FC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class __{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=UV(),window[oF+this.uniqueCallbackIdentifier]=e,window[aF+this.uniqueCallbackIdentifier]=n,this.myIFrame=__.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ot("frame writing exception"),a.stack&&ot(a.stack),ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ot("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[VC]=this.myID,e[FC]=this.myPW,e[$C]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+UC+r.length<=jC;){const o=this.pendingSegs.shift();r=r+"&"+uF+i+"="+o.seg+"&"+cF+i+"="+o.ts+"&"+hF+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(pF)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF=16384,_F=45e3;let _c=null;typeof MozWebSocket<"u"?_c=MozWebSocket:typeof WebSocket<"u"&&(_c=WebSocket);class Kt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pl(this.connId),this.stats_=g_(n),this.connURL=Kt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[kC]=m_,typeof location<"u"&&location.hostname&&NC.test(location.hostname)&&(o[PC]=xC),n&&(o[RC]=n),r&&(o[bC]=r),i&&(o[Mp]=i),s&&(o[DC]=s),MC(e,OC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ni.set("previous_websocket_failure",!0);try{let r;nT(),this.mySock=new _c(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&_c!==null&&!Kt.forceDisallow_}static previouslyFailed(){return ni.isInMemoryStorage||ni.get("previous_websocket_failure")===!0}markConnectionHealthy(){ni.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ga(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=CC(n,gF);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(_F))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kt.responsesRequiredToBeHealthy=2;Kt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[is,Kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Kt&&Kt.isAvailable();let r=n&&!Kt.previouslyFailed();if(e.webSocketOnly&&(n||Pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Kt];else{const i=this.transports_=[];for(const s of ja.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ja.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ja.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yF=6e4,vF=5e3,wF=10*1024,EF=100*1024,Ff="t",G0="d",TF="s",Q0="r",SF="e",K0="o",Y0="a",X0="n",J0="p",IF="h";class CF{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pl("c:"+this.id+":"),this.transportManager_=new ja(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Go(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>EF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ff in e){const n=e[Ff];n===Y0?this.upgradeIfSecondaryHealthy_():n===Q0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===K0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=go("t",e),r=go("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:J0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Y0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:X0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=go("t",e),r=go("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=go(Ff,e);if(G0 in e){const r=e[G0];if(n===IF){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===X0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===TF?this.onConnectionShutdown_(r):n===Q0?this.onReset_(r):n===SF?Op("Server Error: "+r):n===K0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Op("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),m_!==r&&Pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Go(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Go(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(vF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:J0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ni.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends BC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!tT()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new yc}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=32,e1=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new _e("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function xr(t){return t.pieces_.length-t.pieceNum_}function he(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function WC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function AF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function HC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function ze(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof _e)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new _e(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function $t(t,e){const n=J(t),r=J(e);if(n===null)return e;if(n===r)return $t(he(t),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function GC(t,e){if(xr(t)!==xr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Jt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(xr(t)>xr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class kF{constructor(e,n){this.errorPrefix_=n,this.parts_=qC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Bc(this.parts_[r]);QC(this)}}function RF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bc(e),QC(t)}function PF(t){const e=t.parts_.pop();t.byteLength_-=Bc(e),t.parts_.length>0&&(t.byteLength_-=1)}function QC(t){if(t.byteLength_>e1)throw new Error(t.errorPrefix_+"has a key path longer than "+e1+" bytes ("+t.byteLength_+").");if(t.parts_.length>Z0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Z0+") or object contains a cycle "+Wr(t))}function Wr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_ extends BC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new y_}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=1e3,xF=60*5*1e3,t1=30*1e3,NF=1.3,bF=3e4,DF="server_kill",n1=3;class bn extends zC{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=bn.nextPersistentConnectionId_++,this.log_=pl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_o,this.maxReconnectDelay_=xF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!nT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");y_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Qe(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new qm,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;bn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Bn(e,"w")){const r=Cs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||e2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=t1)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Zx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Qe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Op("Unrecognized action received from server: "+Qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bF&&(this.reconnectDelay_=_o),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*NF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+bn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new CF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,d=>{Pt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(DF)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Pt(h),l())}}}interrupt(e){ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ev(this.interruptReasons_)&&(this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>p_(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new _e(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=n1&&(this.reconnectDelay_=t1,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=n1&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+EC.replace(/\./g,"-")]=1,tT()?e["framework.cordova"]=1:Gx()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yc.getInstance().currentlyOnline();return ev(this.interruptReasons_)&&e}}bn.nextPersistentConnectionId_=0;bn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Z(Vs,e),i=new Z(Vs,n);return this.compare(r,i)!==0}minPost(){return Z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru;class KC extends Ph{static get __EMPTY_NODE(){return ru}static set __EMPTY_NODE(e){ru=e}compare(e,n){return Zs(e.name,n.name)}isDefinedOn(e){throw Ws("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(wi,ru)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,ru)}toString(){return".key"}}const _s=new KC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??wt.EMPTY_NODE,this.right=s??wt.EMPTY_NODE}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return wt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return wt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class OF{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class wt{constructor(e,n=wt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new wt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new iu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new iu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new iu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new iu(this.root_,null,this.comparator_,!0,e)}}wt.EMPTY_NODE=new OF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LF(t,e){return Zs(t.name,e.name)}function v_(t,e){return Zs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vp;function MF(t){Vp=t}const YC=function(t){return typeof t=="number"?"number:"+AC(t):"string:"+t},XC=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Bn(e,".sv"),"Priority must be a string or number.")}else P(t===Vp||t.isEmpty(),"priority of unexpected type.");P(t===Vp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r1;class Fe{constructor(e,n=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),XC(this.priorityNode_)}static set __childrenNodeConstructor(e){r1=e}static get __childrenNodeConstructor(){return r1}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:J(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=J(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||xr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+YC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=AC(this.value_):e+=this.value_,this.lazyHash_=SC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Fe.VALUE_TYPE_ORDER.indexOf(n),s=Fe.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let JC,ZC;function VF(t){JC=t}function FF(t){ZC=t}class $F extends Ph{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Zs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(wi,new Fe("[PRIORITY-POST]",ZC))}makePost(e,n){const r=JC(e);return new Z(n,new Fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const lt=new $F;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jF=Math.log(2);class UF{constructor(e){const n=s=>parseInt(Math.log(s)/jF,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vc=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,f;if(c===0)return null;if(c===1)return h=t[l],f=n?n(h):h,new Ue(f,h.node,Ue.BLACK,null,null);{const d=parseInt(c/2,10)+l,_=i(l,d),v=i(d+1,u);return h=t[d],f=n?n(h):h,new Ue(f,h.node,Ue.BLACK,_,v)}},s=function(l){let u=null,c=null,h=t.length;const f=function(_,v){const w=h-_,m=h;h-=_;const p=i(w+1,m),g=t[w],E=n?n(g):g;d(new Ue(E,g.node,v,null,p))},d=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),w=Math.pow(2,l.count-(_+1));v?f(w,Ue.BLACK):(f(w,Ue.BLACK),f(w,Ue.RED))}return c},o=new UF(t.length),a=s(o);return new wt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $f;const Vi={};class Pn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Vi&&lt,"ChildrenNode.ts has not been loaded"),$f=$f||new Pn({".priority":Vi},{".priority":lt}),$f}get(e){const n=Cs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof wt?n:null}hasIndex(e){return Bn(this.indexSet_,e.toString())}addIndex(e,n){P(e!==_s,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=vc(r,e.getCompare()):a=Vi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Pn(c,u)}addToIndexes(e,n){const r=Xu(this.indexes_,(i,s)=>{const o=Cs(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===Vi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Z.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),vc(a,o.getCompare())}else return Vi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Z(e.name,a))),l.insert(e,e.node)}});return new Pn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Xu(this.indexes_,i=>{if(i===Vi)return i;{const s=n.get(e.name);return s?i.remove(new Z(e.name,s)):i}});return new Pn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo;class re{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&XC(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yo||(yo=new re(new wt(v_),null,Pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yo}updatePriority(e){return this.children_.isEmpty()?this:new re(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?yo:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?yo:this.priorityNode_;return new re(i,o,s)}}updateChild(e,n){const r=J(e);if(r===null)return n;{P(J(e)!==".priority"||xr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(he(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(lt,(o,a)=>{n[o]=a.val(e),r++,s&&re.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+YC(this.getPriority().val())+":"),this.forEachChild(lt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":SC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gl?-1:0}withIndex(e){if(e===_s||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new re(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===_s||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(lt),i=n.getIterator(lt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_s?null:this.indexMap_.get(e.toString())}}re.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class zF extends re{constructor(){super(new wt(v_),re.EMPTY_NODE,Pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return re.EMPTY_NODE}isEmpty(){return!1}}const gl=new zF;Object.defineProperties(Z,{MIN:{value:new Z(Vs,re.EMPTY_NODE)},MAX:{value:new Z(wi,gl)}});KC.__EMPTY_NODE=re.EMPTY_NODE;Fe.__childrenNodeConstructor=re;MF(gl);FF(gl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BF=!0;function at(t,e=null){if(t===null)return re.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Fe(n,at(e))}if(!(t instanceof Array)&&BF){const n=[];let r=!1;if(Bt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=at(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Z(o,l)))}}),n.length===0)return re.EMPTY_NODE;const s=vc(n,LF,o=>o.name,v_);if(r){const o=vc(n,lt.getCompare());return new re(s,at(e),new Pn({".priority":o},{".priority":lt}))}else return new re(s,at(e),Pn.Default)}else{let n=re.EMPTY_NODE;return Bt(t,(r,i)=>{if(Bn(t,r)&&r.substring(0,1)!=="."){const s=at(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(at(e))}}VF(at);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF extends Ph{constructor(e){super(),this.indexPath_=e,P(!K(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Zs(e.name,n.name):s}makePost(e,n){const r=at(e),i=re.EMPTY_NODE.updateChild(this.indexPath_,r);return new Z(n,i)}maxPost(){const e=re.EMPTY_NODE.updateChild(this.indexPath_,gl);return new Z(wi,e)}toString(){return qC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qF extends Ph{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Zs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const r=at(e);return new Z(n,r)}toString(){return".value"}}const HF=new qF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GF(t){return{type:"value",snapshotNode:t}}function QF(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function KF(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function i1(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function YF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=lt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vs}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===lt}copy(){const e=new w_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function s1(t){const e={};if(t.isDefault())return e;let n;if(t.index_===lt?n="$priority":t.index_===HF?n="$value":t.index_===_s?n="$key":(P(t.index_ instanceof WF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Qe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Qe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Qe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Qe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Qe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function o1(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==lt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends zC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=pl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=wc.getListenId_(e,r),a={};this.listens_[o]=a;const l=s1(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),Cs(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=wc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=s1(e._queryParams),r=e._path.toString(),i=new qm;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+t2(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ga(a.responseText)}catch{Pt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Pt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XF{constructor(){this.rootNode_=re.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(){return{value:null,children:new Map}}function eA(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=J(e);t.children.has(r)||t.children.set(r,Ec());const i=t.children.get(r);e=he(e),eA(i,e,n)}}function Fp(t,e,n){t.value!==null?n(e,t.value):JF(t,(r,i)=>{const s=new _e(e.toString()+"/"+r);Fp(i,s,n)})}function JF(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Bt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=10*1e3,e3=30*1e3,t3=5*60*1e3;class n3{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ZF(e);const r=a1+(e3-a1)*Math.random();Go(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Bt(e,(i,s)=>{s>0&&Bn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Go(this.reportStats_.bind(this),Math.floor(Math.random()*2*t3))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pn||(pn={}));function tA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rA(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=pn.ACK_USER_WRITE,this.source=tA()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new Tc(oe(),n,this.revert)}}else return P(J(this.path)===e,"operationForChild called for unrelated child."),new Tc(he(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=pn.OVERWRITE}operationForChild(e){return K(this.path)?new Ei(this.source,oe(),this.snap.getImmediateChild(e)):new Ei(this.source,he(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=pn.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new Ei(this.source,oe(),n.value):new Ua(this.source,oe(),n)}else return P(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ua(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function r3(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(YF(o.childName,o.snapshotNode))}),vo(t,i,"child_removed",e,r,n),vo(t,i,"child_added",e,r,n),vo(t,i,"child_moved",s,r,n),vo(t,i,"child_changed",e,r,n),vo(t,i,"value",e,r,n),i}function vo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>s3(t,a,l)),o.forEach(a=>{const l=i3(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function i3(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function s3(t,e,n){if(e.childName==null||n.childName==null)throw Ws("Should only compare child_ events.");const r=new Z(e.childName,e.snapshotNode),i=new Z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(t,e){return{eventCache:t,serverCache:e}}function Qo(t,e,n,r){return iA(new E_(e,n,r),t.serverCache)}function sA(t,e,n,r){return iA(t.eventCache,new E_(e,n,r))}function $p(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ti(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jf;const o3=()=>(jf||(jf=new wt(qV)),jf);class ce{constructor(e,n=o3()){this.value=e,this.children=n}static fromObject(e){let n=new ce(null);return Bt(e,(r,i)=>{n=n.set(new _e(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(K(e))return null;{const r=J(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(he(e),n);return s!=null?{path:ze(new _e(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=J(e),r=this.children.get(n);return r!==null?r.subtree(he(e)):new ce(null)}}set(e,n){if(K(e))return new ce(n,this.children);{const r=J(e),s=(this.children.get(r)||new ce(null)).set(he(e),n),o=this.children.insert(r,s);return new ce(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=J(e),r=this.children.get(n);if(r){const i=r.remove(he(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ce(null):new ce(this.value,s)}else return this}}get(e){if(K(e))return this.value;{const n=J(e),r=this.children.get(n);return r?r.get(he(e)):null}}setTree(e,n){if(K(e))return n;{const r=J(e),s=(this.children.get(r)||new ce(null)).setTree(he(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ce(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ze(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(K(e))return null;{const s=J(e),o=this.children.get(s);return o?o.findOnPath_(he(e),ze(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,r){if(K(e))return this;{this.value&&r(n,this.value);const i=J(e),s=this.children.get(i);return s?s.foreachOnPath_(he(e),ze(n,i),r):new ce(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ze(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.writeTree_=e}static empty(){return new nn(new ce(null))}}function Ko(t,e,n){if(K(e))return new nn(new ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=$t(i,e);return s=s.updateChild(o,n),new nn(t.writeTree_.set(i,s))}else{const i=new ce(n),s=t.writeTree_.setTree(e,i);return new nn(s)}}}function l1(t,e,n){let r=t;return Bt(n,(i,s)=>{r=Ko(r,ze(e,i),s)}),r}function u1(t,e){if(K(e))return nn.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new nn(n)}}function jp(t,e){return bi(t,e)!=null}function bi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($t(n.path,e)):null}function c1(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(lt,(r,i)=>{e.push(new Z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Z(r,i.value))}),e}function vr(t,e){if(K(e))return t;{const n=bi(t,e);return n!=null?new nn(new ce(n)):new nn(t.writeTree_.subtree(e))}}function Up(t){return t.writeTree_.isEmpty()}function Fs(t,e){return oA(oe(),t.writeTree_,e)}function oA(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=oA(ze(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ze(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t,e){return fA(e,t)}function a3(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ko(t.visibleWrites,e,n)),t.lastWriteId=r}function l3(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function u3(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&c3(a,r.path)?i=!1:Jt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return h3(t),!0;if(r.snap)t.visibleWrites=u1(t.visibleWrites,r.path);else{const a=r.children;Bt(a,l=>{t.visibleWrites=u1(t.visibleWrites,ze(r.path,l))})}return!0}else return!1}function c3(t,e){if(t.snap)return Jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Jt(ze(t.path,n),e))return!0;return!1}function h3(t){t.visibleWrites=lA(t.allWrites,f3,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function f3(t){return t.visible}function lA(t,e,n){let r=nn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Jt(n,o)?(a=$t(n,o),r=Ko(r,a,s.snap)):Jt(o,n)&&(a=$t(o,n),r=Ko(r,oe(),s.snap.getChild(a)));else if(s.children){if(Jt(n,o))a=$t(n,o),r=l1(r,a,s.children);else if(Jt(o,n))if(a=$t(o,n),K(a))r=l1(r,oe(),s.children);else{const l=Cs(s.children,J(a));if(l){const u=l.getChild(he(a));r=Ko(r,oe(),u)}}}else throw Ws("WriteRecord should have .snap or .children")}}return r}function uA(t,e,n,r,i){if(!r&&!i){const s=bi(t.visibleWrites,e);if(s!=null)return s;{const o=vr(t.visibleWrites,e);if(Up(o))return n;if(n==null&&!jp(o,oe()))return null;{const a=n||re.EMPTY_NODE;return Fs(o,a)}}}else{const s=vr(t.visibleWrites,e);if(!i&&Up(s))return n;if(!i&&n==null&&!jp(s,oe()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Jt(u.path,e)||Jt(e,u.path))},a=lA(t.allWrites,o,e),l=n||re.EMPTY_NODE;return Fs(a,l)}}}function d3(t,e,n){let r=re.EMPTY_NODE;const i=bi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(lt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=vr(t.visibleWrites,e);return n.forEachChild(lt,(o,a)=>{const l=Fs(vr(s,new _e(o)),a);r=r.updateImmediateChild(o,l)}),c1(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=vr(t.visibleWrites,e);return c1(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function p3(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ze(e,n);if(jp(t.visibleWrites,s))return null;{const o=vr(t.visibleWrites,s);return Up(o)?i.getChild(n):Fs(o,i.getChild(n))}}function m3(t,e,n,r){const i=ze(e,n),s=bi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=vr(t.visibleWrites,i);return Fs(o,r.getNode().getImmediateChild(n))}else return null}function g3(t,e){return bi(t.visibleWrites,e)}function _3(t,e,n,r,i,s,o){let a;const l=vr(t.visibleWrites,e),u=bi(l,oe());if(u!=null)a=u;else if(n!=null)a=Fs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let d=f.getNext();for(;d&&c.length<i;)h(d,r)!==0&&c.push(d),d=f.getNext();return c}else return[]}function y3(){return{visibleWrites:nn.empty(),allWrites:[],lastWriteId:-1}}function zp(t,e,n,r){return uA(t.writeTree,t.treePath,e,n,r)}function cA(t,e){return d3(t.writeTree,t.treePath,e)}function h1(t,e,n,r){return p3(t.writeTree,t.treePath,e,n,r)}function Sc(t,e){return g3(t.writeTree,ze(t.treePath,e))}function v3(t,e,n,r,i,s){return _3(t.writeTree,t.treePath,e,n,r,i,s)}function T_(t,e,n){return m3(t.writeTree,t.treePath,e,n)}function hA(t,e){return fA(ze(t.treePath,e),t.writeTree)}function fA(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w3{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,i1(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,KF(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,QF(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,i1(r,e.snapshotNode,i.oldSnap));else throw Ws("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E3{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const dA=new E3;class S_{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new E_(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return T_(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ti(this.viewCache_),s=v3(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function T3(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function S3(t,e,n,r,i){const s=new w3;let o,a;if(n.type===pn.OVERWRITE){const u=n;u.source.fromUser?o=Bp(t,e,u.path,u.snap,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!K(u.path),o=Ic(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===pn.MERGE){const u=n;u.source.fromUser?o=C3(t,e,u.path,u.children,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Wp(t,e,u.path,u.children,r,i,a,s))}else if(n.type===pn.ACK_USER_WRITE){const u=n;u.revert?o=R3(t,e,u.path,r,i,s):o=A3(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===pn.LISTEN_COMPLETE)o=k3(t,e,n.path,r,s);else throw Ws("Unknown operation type: "+n.type);const l=s.getChanges();return I3(e,o,l),{viewCache:o,changes:l}}function I3(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$p(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(GF($p(e)))}}function pA(t,e,n,r,i,s){const o=e.eventCache;if(Sc(r,n)!=null)return e;{let a,l;if(K(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ti(e),c=u instanceof re?u:re.EMPTY_NODE,h=cA(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=zp(r,Ti(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=J(n);if(u===".priority"){P(xr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=h1(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=he(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=h1(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(u).updateChild(c,f):h=o.getNode().getImmediateChild(u)}else h=T_(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return Qo(e,a,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function Ic(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(K(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),d,null)}else{const d=J(n);if(!l.isCompleteForPath(n)&&xr(n)>1)return e;const _=he(n),w=l.getNode().getImmediateChild(d).updateChild(_,r);d===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),d,w,_,dA,null)}const h=sA(e,u,l.isFullyInitialized()||K(n),c.filtersNodes()),f=new S_(i,h,s);return pA(t,h,n,i,f,a)}function Bp(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new S_(i,e,s);if(K(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Qo(e,u,!0,t.filter.filtersNodes());else{const h=J(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Qo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=he(n),d=a.getNode().getImmediateChild(h);let _;if(K(f))_=r;else{const v=c.getCompleteChild(h);v!=null?WC(f)===".priority"&&v.getChild(HC(f)).isEmpty()?_=v:_=v.updateChild(f,r):_=re.EMPTY_NODE}if(d.equals(_))l=e;else{const v=t.filter.updateChild(a.getNode(),h,_,f,c,o);l=Qo(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function f1(t,e){return t.eventCache.isCompleteForChild(e)}function C3(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=ze(n,l);f1(e,J(c))&&(a=Bp(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=ze(n,l);f1(e,J(c))||(a=Bp(t,a,c,u,i,s,o))}),a}function d1(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Wp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;K(n)?u=r:u=new ce(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,f)=>{if(c.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),_=d1(t,d,f);l=Ic(t,l,new _e(h),_,i,s,o,a)}}),u.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!c.hasChild(h)&&!d){const _=e.serverCache.getNode().getImmediateChild(h),v=d1(t,_,f);l=Ic(t,l,new _e(h),v,i,s,o,a)}}),l}function A3(t,e,n,r,i,s,o){if(Sc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(K(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ic(t,e,n,l.getNode().getChild(n),i,s,a,o);if(K(n)){let u=new ce(null);return l.getNode().forEachChild(_s,(c,h)=>{u=u.set(new _e(c),h)}),Wp(t,e,n,u,i,s,a,o)}else return e}else{let u=new ce(null);return r.foreach((c,h)=>{const f=ze(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),Wp(t,e,n,u,i,s,a,o)}}function k3(t,e,n,r,i){const s=e.serverCache,o=sA(e,s.getNode(),s.isFullyInitialized()||K(n),s.isFiltered());return pA(t,o,n,r,dA,i)}function R3(t,e,n,r,i,s){let o;if(Sc(r,n)!=null)return e;{const a=new S_(r,e,i),l=e.eventCache.getNode();let u;if(K(n)||J(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=zp(r,Ti(e));else{const h=e.serverCache.getNode();P(h instanceof re,"serverChildren would be complete if leaf node"),c=cA(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=J(n);let h=T_(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,he(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,re.EMPTY_NODE,he(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zp(r,Ti(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Sc(r,oe())!=null,Qo(e,u,o,t.filter.filtersNodes())}}function P3(t,e){const n=Ti(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function p1(t,e,n,r){e.type===pn.MERGE&&e.source.queryId!==null&&(P(Ti(t.viewCache_),"We should always have a full cache before handling merges"),P($p(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=S3(t.processor_,i,e,n,r);return T3(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,x3(t,s.changes,s.viewCache.eventCache.getNode(),null)}function x3(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return r3(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m1;function N3(t){P(!m1,"__referenceConstructor has already been defined"),m1=t}function I_(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),p1(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(p1(o,e,n,r));return s}}function C_(t,e){let n=null;for(const r of t.views.values())n=n||P3(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g1;function b3(t){P(!g1,"__referenceConstructor has already been defined"),g1=t}class _1{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=y3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function D3(t,e,n,r,i){return a3(t.pendingWriteTree_,e,n,r,i),i?Nh(t,new Ei(tA(),e,n)):[]}function ss(t,e,n=!1){const r=l3(t.pendingWriteTree_,e);if(u3(t.pendingWriteTree_,e)){let s=new ce(null);return r.snap!=null?s=s.set(oe(),!0):Bt(r.children,o=>{s=s.set(new _e(o),!0)}),Nh(t,new Tc(r.path,s,n))}else return[]}function xh(t,e,n){return Nh(t,new Ei(nA(),e,n))}function O3(t,e,n){const r=ce.fromObject(n);return Nh(t,new Ua(nA(),e,r))}function L3(t,e,n,r){const i=yA(t,r);if(i!=null){const s=vA(i),o=s.path,a=s.queryId,l=$t(o,e),u=new Ei(rA(a),l,n);return wA(t,o,u)}else return[]}function M3(t,e,n,r){const i=yA(t,r);if(i){const s=vA(i),o=s.path,a=s.queryId,l=$t(o,e),u=ce.fromObject(n),c=new Ua(rA(a),l,u);return wA(t,o,c)}else return[]}function mA(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=$t(o,e),u=C_(a,l);if(u)return u});return uA(i,e,s,n,!0)}function Nh(t,e){return gA(e,t.syncPointTree_,null,aA(t.pendingWriteTree_,oe()))}function gA(t,e,n,r){if(K(t.path))return _A(t,e,n,r);{const i=e.get(oe());n==null&&i!=null&&(n=C_(i,oe()));let s=[];const o=J(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=hA(r,o);s=s.concat(gA(a,l,u,c))}return i&&(s=s.concat(I_(i,t,r,n))),s}}function _A(t,e,n,r){const i=e.get(oe());n==null&&i!=null&&(n=C_(i,oe()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=hA(r,o),c=t.operationForChild(o);c&&(s=s.concat(_A(c,a,l,u)))}),i&&(s=s.concat(I_(i,t,r,n))),s}function yA(t,e){return t.tagToQueryMap.get(e)}function vA(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function wA(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=aA(t.pendingWriteTree_,e);return I_(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new A_(n)}node(){return this.node_}}class k_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ze(this.path_,e);return new k_(this.syncTree_,n)}node(){return mA(this.syncTree_,this.path_)}}const V3=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},y1=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return F3(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $3(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},F3=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},$3=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},j3=function(t,e,n,r){return R_(e,new k_(n,t),r)},U3=function(t,e,n){return R_(t,new A_(e),n)};function R_(t,e,n){const r=t.getPriority().val(),i=y1(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=y1(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Fe(a,at(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Fe(i))),o.forEachChild(lt,(a,l)=>{const u=R_(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function x_(t,e){let n=e instanceof _e?e:new _e(e),r=t,i=J(n);for(;i!==null;){const s=Cs(r.node.children,i)||{children:{},childCount:0};r=new P_(i,r,s),n=he(n),i=J(n)}return r}function eo(t){return t.node.value}function EA(t,e){t.node.value=e,qp(t)}function TA(t){return t.node.childCount>0}function z3(t){return eo(t)===void 0&&!TA(t)}function bh(t,e){Bt(t.node.children,(n,r)=>{e(new P_(n,t,r))})}function SA(t,e,n,r){n&&!r&&e(t),bh(t,i=>{SA(i,e,!0,r)}),n&&r&&e(t)}function B3(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function _l(t){return new _e(t.parent===null?t.name:_l(t.parent)+"/"+t.name)}function qp(t){t.parent!==null&&W3(t.parent,t.name,t)}function W3(t,e,n){const r=z3(n),i=Bn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,qp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,qp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q3=/[\[\].#$\/\u0000-\u001F\u007F]/,H3=/[\[\].#$\u0000-\u001F\u007F]/,Uf=10*1024*1024,IA=function(t){return typeof t=="string"&&t.length!==0&&!q3.test(t)},G3=function(t){return typeof t=="string"&&t.length!==0&&!H3.test(t)},Q3=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),G3(t)},CA=function(t,e,n){const r=n instanceof _e?new kF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Wr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Wr(r)+" with contents = "+e.toString());if(IC(e))throw new Error(t+"contains "+e.toString()+" "+Wr(r));if(typeof e=="string"&&e.length>Uf/3&&Bc(e)>Uf)throw new Error(t+"contains a string greater than "+Uf+" utf8 bytes "+Wr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Bt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!IA(o)))throw new Error(t+" contains an invalid key ("+o+") "+Wr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);RF(r,o),CA(t,a,r),PF(r)}),i&&s)throw new Error(t+' contains ".value" child '+Wr(r)+" in addition to actual children.")}},K3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!IA(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Q3(n))throw new Error(r2(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function X3(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!GC(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Di(t,e,n){X3(t,n),J3(t,r=>Jt(r,e)||Jt(e,r))}function J3(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Z3(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Z3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();oi&&ot("event: "+n.toString()),ml(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e9="repo_interrupt",t9=25;class n9{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Y3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ec(),this.transactionQueueTree_=new P_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function r9(t,e,n){if(t.stats_=g_(t.repoInfo_),t.forceRestClient_||XV())t.server_=new wc(t.repoInfo_,(r,i,s,o)=>{v1(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>w1(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new bn(t.repoInfo_,e,(r,i,s,o)=>{v1(t,r,i,s,o)},r=>{w1(t,r)},r=>{s9(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=rF(t.repoInfo_,()=>new n3(t.stats_,t.server_)),t.infoData_=new XF,t.infoSyncTree_=new _1({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=xh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),N_(t,"connected",!1),t.serverSyncTree_=new _1({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Di(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function i9(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function AA(t){return V3({timestamp:i9(t)})}function v1(t,e,n,r,i){t.dataUpdateCount++;const s=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Xu(n,u=>at(u));o=M3(t.serverSyncTree_,s,l,i)}else{const l=at(n);o=L3(t.serverSyncTree_,s,l,i)}else if(r){const l=Xu(n,u=>at(u));o=O3(t.serverSyncTree_,s,l)}else{const l=at(n);o=xh(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=D_(t,s)),Di(t.eventQueue_,a,o)}function w1(t,e){N_(t,"connected",e),e===!1&&a9(t)}function s9(t,e){Bt(e,(n,r)=>{N_(t,n,r)})}function N_(t,e,n){const r=new _e("/.info/"+e),i=at(n);t.infoData_.updateSnapshot(r,i);const s=xh(t.infoSyncTree_,r,i);Di(t.eventQueue_,r,s)}function o9(t){return t.nextWriteId_++}function a9(t){kA(t,"onDisconnectEvents");const e=AA(t),n=Ec();Fp(t.onDisconnect_,oe(),(i,s)=>{const o=j3(i,s,t.serverSyncTree_,e);eA(n,i,o)});let r=[];Fp(n,oe(),(i,s)=>{r=r.concat(xh(t.serverSyncTree_,i,s));const o=h9(t,i);D_(t,o)}),t.onDisconnect_=Ec(),Di(t.eventQueue_,oe(),r)}function l9(t){t.persistentConnection_&&t.persistentConnection_.interrupt(e9)}function kA(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ot(n,...e)}function RA(t,e,n){return mA(t.serverSyncTree_,e,n)||re.EMPTY_NODE}function b_(t,e=t.transactionQueueTree_){if(e||Dh(t,e),eo(e)){const n=xA(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&u9(t,_l(e),n)}else TA(e)&&bh(e,n=>{b_(t,n)})}function u9(t,e,n){const r=n.map(u=>u.currentWriteId),i=RA(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];P(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=$t(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{kA(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(ss(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Dh(t,x_(t.transactionQueueTree_,e)),b_(t,t.transactionQueueTree_),Di(t.eventQueue_,e,c);for(let f=0;f<h.length;f++)ml(h[f])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Pt("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}D_(t,e)}},o)}function D_(t,e){const n=PA(t,e),r=_l(n),i=xA(t,n);return c9(t,i,r),r}function c9(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=$t(n,l.path);let c=!1,h;if(P(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(ss(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=t9)c=!0,h="maxretry",i=i.concat(ss(t.serverSyncTree_,l.currentWriteId,!0));else{const f=RA(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){CA("transaction failed: Data returned ",d,l.path);let _=at(d);typeof d=="object"&&d!=null&&Bn(d,".priority")||(_=_.updatePriority(f.getPriority()));const w=l.currentWriteId,m=AA(t),p=U3(_,f,m);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=p,l.currentWriteId=o9(t),o.splice(o.indexOf(w),1),i=i.concat(D3(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(ss(t.serverSyncTree_,w,!0))}else c=!0,h="nodata",i=i.concat(ss(t.serverSyncTree_,l.currentWriteId,!0))}Di(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Dh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ml(r[a]);b_(t,t.transactionQueueTree_)}function PA(t,e){let n,r=t.transactionQueueTree_;for(n=J(e);n!==null&&eo(r)===void 0;)r=x_(r,n),e=he(e),n=J(e);return r}function xA(t,e){const n=[];return NA(t,e,n),n.sort((r,i)=>r.order-i.order),n}function NA(t,e,n){const r=eo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);bh(e,i=>{NA(t,i,n)})}function Dh(t,e){const n=eo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,EA(e,n.length>0?n:void 0)}bh(e,r=>{Dh(t,r)})}function h9(t,e){const n=_l(PA(t,e)),r=x_(t.transactionQueueTree_,e);return B3(r,i=>{zf(t,i)}),zf(t,r),SA(r,i=>{zf(t,i)}),n}function zf(t,e){const n=eo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ss(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?EA(e,void 0):n.length=s+1,Di(t.eventQueue_,_l(e),i);for(let o=0;o<r.length;o++)ml(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f9(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function d9(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Pt(`Invalid query segment '${n}' in query '${t}'`)}return e}const E1=function(t,e){const n=p9(t),r=n.namespace;n.domain==="firebase.com"&&vi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&vi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||BV();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new eF(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new _e(n.pathString)}},p9=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=f9(t.substring(c,h)));const f=d9(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const d=e.slice(0,u);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return K(this._path)?null:WC(this._path)}get ref(){return new to(this._repo,this._path)}get _queryIdentifier(){const e=o1(this._queryParams),n=p_(e);return n==="{}"?"default":n}get _queryObject(){return o1(this._queryParams)}isEqual(e){if(e=vn(e),!(e instanceof O_))return!1;const n=this._repo===e._repo,r=GC(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+AF(this._path)}}class to extends O_{constructor(e,n){super(e,n,new w_,!1)}get parent(){const e=HC(this._path);return e===null?null:new to(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}N3(to);b3(to);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m9="FIREBASE_DATABASE_EMULATOR_HOST",Hp={};let g9=!1;function _9(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||vi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=E1(s,i),a=o.repoInfo,l,u;typeof process<"u"&&U0&&(u=U0[m9]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=E1(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Lp(Lp.OWNER):new ZV(t.name,t.options,e);K3("Invalid Firebase Database URL",o),K(o.path)||vi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=v9(a,t,c,new JV(t.name,n));return new w9(h,t)}function y9(t,e){const n=Hp[e];(!n||n[t.key]!==t)&&vi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),l9(t),delete n[t.key]}function v9(t,e,n,r){let i=Hp[e.name];i||(i={},Hp[e.name]=i);let s=i[t.toURLString()];return s&&vi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new n9(t,g9,n,r),i[t.toURLString()]=s,s}class w9{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(r9(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new to(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(y9(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&vi("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E9(t){FV(lT),_a(new As("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return _9(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),gr(z0,B0,t),gr(z0,B0,"esm2017")}bn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};bn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};E9();const T9=({product:t})=>{const[e,n]=I.useState(t.favourite),r=t.color,[i,s]=I.useState(1),[o,a]=I.useState("black"),[l,u]=I.useState(!1),[c,h]=I.useState(!1);Ai(),I.useEffect(()=>{h(!1)},[]);const f=w=>{console.log(w.target.value),Number(w.target.value)===t.stock&&(u(!0),console.log(w.target.value,"no more true")),l&&Number(w.target.value)===t.stock-1&&(console.log(w.target.value,"no more false"),u(!1)),Number(w.target.value)>0&&Number(w.target.value)<=t.stock&&s(w.target.value)},d=w=>{LI(t.docId,!e),n(!e)},_=w=>{try{Jg(t,o,Number(i)),h(!0)}catch{u(!0),w.preventDefault(),setTimeout(()=>u(!1),7e3)}},v=w=>{a(w.target.value)};return y.jsxs("div",{className:Mi.wrapper,children:[y.jsx(KE,{products:t.images.map(w=>({thumbnail:w})),isAutoSliding:!1,showThumbnails:!0}),y.jsxs("div",{className:Mi.information,children:[y.jsxs("div",{className:Mi.header,children:[y.jsx("h2",{children:t.title}),y.jsx(jI,{className:Mi.icon,setLikedStatus:d,isLiked:e})]}),y.jsx(Oa,{price:t.price,discount:t.discountPercentage}),y.jsx("p",{children:t.description}),y.jsxs("form",{onSubmit:_,children:[y.jsx("div",{className:Mi.container,children:y.jsxs("div",{children:[y.jsx("label",{htmlFor:"quantity",children:"Quantity: "}),y.jsx("input",{onChange:f,step:"1",type:"number",id:"quantity",min:"1",name:"quantity",pattern:"[0-9]*",inputMode:"numeric",value:i}),y.jsx(VV,{onChange:v,colors:r,label:"Available in:",defaultColor:o})]})}),y.jsx("button",{className:Mi.cart_button,disabled:t.stock===0,children:"ADD TO BAG"})]}),y.jsxs("p",{children:[y.jsx("label",{children:"SKU: "}),t.sku]}),y.jsxs("p",{children:[y.jsx("label",{children:"Brand: "}),t.brand]}),y.jsxs("p",{children:[y.jsx("label",{children:"Category: "}),t.category]}),y.jsxs("p",{children:[y.jsx("label",{children:"Discount: "}),t.discountPercentage]}),y.jsxs("p",{children:[y.jsx("label",{children:"Rating: "}),t.rating]}),y.jsxs("p",{children:[y.jsx("label",{children:"Qty: "}),t.stock]})]}),l&&y.jsx(gi,{message:"No more stock left !",type:"popup"}),c&&y.jsx(gi,{message:"Added to Cart !",type:"popup"})]})},S9=()=>{const{id:t}=qE(),[e,n]=I.useState(null),[r,i]=I.useState(!1),[s,o]=I.useState(null);return console.log(t),I.useEffect(()=>{o(null),i(!0),b4(t).then(a=>{n(a)}).catch(a=>{o(a.message)}).finally(()=>{i(!1)})},[]),y.jsxs("div",{className:CV.page,children:[s&&y.jsx(d_,{errMsg:s}),r&&y.jsx(Rh,{}),!s&&!r&&e&&y.jsx(T9,{product:e})]})},I9="_item_gwdjb_1",C9="_thumbnail_gwdjb_18",A9="_title_gwdjb_22",k9="_price_gwdjb_38",R9="_qty_gwdjb_42",P9="_total_price_gwdjb_51",Fi={item:I9,thumbnail:C9,title:A9,price:k9,qty:R9,total_price:P9},x9=({item:t,handleDelete:e,handleAdd:n})=>{const[r,i]=I.useState(!1),s=()=>{console.log(t.quantity,t.product.stock),t.quantity+1===t.product.stock&&(i(!0),console.log("no moree")),n(t.product,t.color)},o=()=>{console.log(t.quantity,t.product.stock),t.quantity===t.product.stock&&(i(!1),console.log("no moree false")),e(t.product.docId,t.color)};return y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:Fi.item,children:[y.jsx("img",{className:Fi.thumbnail,src:t.product.thumbnail,alt:t.product.title}),y.jsx("p",{className:Fi.title,children:t.product.title}),y.jsx("p",{style:{color:t.color,border:"1px solid lightgrey"},children:"■"}),y.jsxs("div",{className:Fi.qty,children:[y.jsx("button",{disabled:t.quantity>=t.product.stock,onClick:s,children:"+"}),y.jsx("p",{children:t.quantity}),y.jsx("button",{disabled:t.quantity<=0,onClick:o,children:"-"})]}),y.jsx("div",{className:Fi.price,children:y.jsx(Oa,{price:t.product.price,discount:t.product.discountPercentage})}),y.jsxs("small",{children:["x",t.quantity]}),y.jsx("div",{className:Fi.total_price,children:y.jsx(Oa,{price:Number(t.product.price)*Number(t.quantity)*((100-Number(t.product.discountPercentage))/100),discount:0})})]}),r&&y.jsx(gi,{message:"No more stock left !",type:"popup"})]})},N9="_page_1rnjj_1",b9="_total_1rnjj_10",T1={page:N9,total:b9},D9=()=>{const[t,e]=I.useState(Eu()),n=(i,s)=>{j4(i,s),e(Eu())},r=(i,s)=>{Jg(i,s),e(Eu())};return y.jsxs("div",{className:T1.page,children:[y.jsx("h3",{children:"My Cart"}),(!t||t.length===0)&&y.jsx(gi,{message:"Cart is Empty"}),y.jsx("div",{children:t&&t.map((i,s)=>y.jsx(x9,{item:i,handleDelete:n,handleAdd:r},s))}),t.length!==0&&y.jsxs("div",{className:T1.total,children:[y.jsx("p",{children:"Grand Total:"}),y.jsx(Oa,{price:U4()})]})]})},O9="_page_143hw_1",L9={page:O9},M9=()=>{var C;const{page:t}=qE(),e=Bs(),[n]=ox(),r=n.get("filter"),[i,s]=I.useState(null);let o=V4(r);o!=i&&s(o);const[a,l]=I.useState((C=e.state)==null?void 0:C.sortBy),[u,c]=I.useState(!1),[h,f]=I.useState(null),[d,_]=I.useState([]),[v,w]=I.useState(0),m=20;I.useEffect(()=>{f(null),c(!0),M4(t,m,a,i).then(k=>{_(k.products),w(k.totalCount),console.log(d)}).catch(k=>{f(k.message)}).finally(()=>{c(!1)})},[t,a,i]);const p=Ai(),g=k=>{l(k);const N=F4("/1",i);p(N,{state:{sortBy:k}})},E=i?i+"s":"All Bags";return y.jsxs("div",{className:L9.page,children:[h&&y.jsx(d_,{errMsg:h}),u&&y.jsx(Rh,{}),!h&&!u&&d.length>0&&y.jsx(Zg,{products:d,numberOfPages:$I(v),currentPage:Number(t),totalCount:v,sortBy:a,filter:i,sortProducts:g,heading:E})]})},V9="_animated_1217z_1",F9={animated:V9,"banner-motion":"_banner-motion_1217z_1"},$9=({message:t})=>y.jsx("h4",{className:F9.animated,children:t});function j9(){return y.jsx(y.Fragment,{children:y.jsxs(nx,{children:[y.jsx($9,{message:"Big Sale Tomorrow -- 40% OFF on ALL ITEMS"}),y.jsx(_V,{}),y.jsx(wC,{}),y.jsxs(QP,{children:[y.jsx($i,{path:"/",element:y.jsx(rV,{})}),y.jsx($i,{path:"/:page",element:y.jsx(M9,{})}),y.jsx($i,{path:"/wishlist",element:y.jsx(SV,{})}),y.jsx($i,{path:"/products/:id",element:y.jsx(S9,{})}),y.jsx($i,{path:"/cart",element:y.jsx(D9,{})})]}),y.jsx(wV,{})]})})}Bf.createRoot(document.getElementById("root")).render(y.jsx(Ac.StrictMode,{children:y.jsx(j9,{})}));
