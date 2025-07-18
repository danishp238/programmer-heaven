(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xs(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const cn={},Ae=[],Zn=()=>{},lo=()=>!1,zt=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),vs=n=>n.startsWith("onUpdate:"),En=Object.assign,ws=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},co=Object.prototype.hasOwnProperty,sn=(n,e)=>co.call(n,e),q=Array.isArray,ze=n=>Mt(n)==="[object Map]",Br=n=>Mt(n)==="[object Set]",Y=n=>typeof n=="function",gn=n=>typeof n=="string",xe=n=>typeof n=="symbol",pn=n=>n!==null&&typeof n=="object",Wr=n=>(pn(n)||Y(n))&&Y(n.then)&&Y(n.catch),Hr=Object.prototype.toString,Mt=n=>Hr.call(n),po=n=>Mt(n).slice(8,-1),Ur=n=>Mt(n)==="[object Object]",ys=n=>gn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$e=xs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),It=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},uo=/-(\w)/g,Hn=It(n=>n.replace(uo,(e,t)=>t?t.toUpperCase():"")),fo=/\B([A-Z])/g,_e=It(n=>n.replace(fo,"-$1").toLowerCase()),Ot=It(n=>n.charAt(0).toUpperCase()+n.slice(1)),Gt=It(n=>n?`on${Ot(n)}`:""),me=(n,e)=>!Object.is(n,e),$t=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Nr=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},mo=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Gs;const Ft=()=>Gs||(Gs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Re(n){if(q(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],r=gn(s)?xo(s):Re(s);if(r)for(const a in r)e[a]=r[a]}return e}else if(gn(n)||pn(n))return n}const ho=/;(?![^(]*\))/g,go=/:([^]+)/,bo=/\/\*[^]*?\*\//g;function xo(n){const e={};return n.replace(bo,"").split(ho).forEach(t=>{if(t){const s=t.split(go);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ke(n){let e="";if(gn(n))e=n;else if(q(n))for(let t=0;t<n.length;t++){const s=ke(n[t]);s&&(e+=s+" ")}else if(pn(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const vo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wo=xs(vo);function qr(n){return!!n||n===""}const Gr=n=>!!(n&&n.__v_isRef===!0),Xn=n=>gn(n)?n:n==null?"":q(n)||pn(n)&&(n.toString===Hr||!Y(n.toString))?Gr(n)?Xn(n.value):JSON.stringify(n,$r,2):String(n),$r=(n,e)=>Gr(e)?$r(n,e.value):ze(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,r],a)=>(t[Yt(s,a)+" =>"]=r,t),{})}:Br(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Yt(t))}:xe(e)?Yt(e):pn(e)&&!q(e)&&!Ur(e)?String(e):e,Yt=(n,e="")=>{var t;return xe(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let In;class yo{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=In,!e&&In&&(this.index=(In.scopes||(In.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=In;try{return In=this,e()}finally{In=t}}}on(){++this._on===1&&(this.prevScope=In,In=this)}off(){this._on>0&&--this._on===0&&(In=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ko(){return In}let ln;const Vt=new WeakSet;class Yr{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,In&&In.active&&In.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vt.has(this)&&(Vt.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$s(this),Jr(this);const e=ln,t=Nn;ln=this,Nn=!0;try{return this.fn()}finally{Qr(this),ln=e,Nn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ts(e);this.deps=this.depsTail=void 0,$s(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vt.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rs(this)&&this.run()}get dirty(){return rs(this)}}let Vr=0,Ye,Ve;function Kr(n,e=!1){if(n.flags|=8,e){n.next=Ve,Ve=n;return}n.next=Ye,Ye=n}function ks(){Vr++}function Ss(){if(--Vr>0)return;if(Ve){let e=Ve;for(Ve=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ye;){let e=Ye;for(Ye=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function Jr(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qr(n){let e,t=n.depsTail,s=t;for(;s;){const r=s.prevDep;s.version===-1?(s===t&&(t=r),Ts(s),So(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}n.deps=e,n.depsTail=t}function rs(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xr(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Xr(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===et)||(n.globalVersion=et,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!rs(n))))return;n.flags|=2;const e=n.dep,t=ln,s=Nn;ln=n,Nn=!0;try{Jr(n);const r=n.fn(n._value);(e.version===0||me(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ln=t,Nn=s,Qr(n),n.flags&=-3}}function Ts(n,e=!1){const{dep:t,prevSub:s,nextSub:r}=n;if(s&&(s.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let a=t.computed.deps;a;a=a.nextDep)Ts(a,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function So(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Nn=!0;const Zr=[];function oe(){Zr.push(Nn),Nn=!1}function ie(){const n=Zr.pop();Nn=n===void 0?!0:n}function $s(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ln;ln=void 0;try{e()}finally{ln=t}}}let et=0;class To{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _s{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ln||!Nn||ln===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ln)t=this.activeLink=new To(ln,this),ln.deps?(t.prevDep=ln.depsTail,ln.depsTail.nextDep=t,ln.depsTail=t):ln.deps=ln.depsTail=t,na(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=ln.depsTail,t.nextDep=void 0,ln.depsTail.nextDep=t,ln.depsTail=t,ln.deps===t&&(ln.deps=s)}return t}trigger(e){this.version++,et++,this.notify(e)}notify(e){ks();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ss()}}}function na(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)na(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const as=new WeakMap,Se=Symbol(""),os=Symbol(""),tt=Symbol("");function Tn(n,e,t){if(Nn&&ln){let s=as.get(n);s||as.set(n,s=new Map);let r=s.get(t);r||(s.set(t,r=new _s),r.map=s,r.key=t),r.track()}}function ae(n,e,t,s,r,a){const o=as.get(n);if(!o){et++;return}const l=i=>{i&&i.trigger()};if(ks(),e==="clear")o.forEach(l);else{const i=q(n),d=i&&ys(t);if(i&&t==="length"){const p=Number(s);o.forEach((c,m)=>{(m==="length"||m===tt||!xe(m)&&m>=p)&&l(c)})}else switch((t!==void 0||o.has(void 0))&&l(o.get(t)),d&&l(o.get(tt)),e){case"add":i?d&&l(o.get("length")):(l(o.get(Se)),ze(n)&&l(o.get(os)));break;case"delete":i||(l(o.get(Se)),ze(n)&&l(o.get(os)));break;case"set":ze(n)&&l(o.get(Se));break}}Ss()}function Ce(n){const e=tn(n);return e===n?e:(Tn(e,"iterate",tt),Wn(n)?e:e.map(Sn))}function Rt(n){return Tn(n=tn(n),"iterate",tt),n}const _o={__proto__:null,[Symbol.iterator](){return Kt(this,Symbol.iterator,Sn)},concat(...n){return Ce(this).concat(...n.map(e=>q(e)?Ce(e):e))},entries(){return Kt(this,"entries",n=>(n[1]=Sn(n[1]),n))},every(n,e){return te(this,"every",n,e,void 0,arguments)},filter(n,e){return te(this,"filter",n,e,t=>t.map(Sn),arguments)},find(n,e){return te(this,"find",n,e,Sn,arguments)},findIndex(n,e){return te(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return te(this,"findLast",n,e,Sn,arguments)},findLastIndex(n,e){return te(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return te(this,"forEach",n,e,void 0,arguments)},includes(...n){return Jt(this,"includes",n)},indexOf(...n){return Jt(this,"indexOf",n)},join(n){return Ce(this).join(n)},lastIndexOf(...n){return Jt(this,"lastIndexOf",n)},map(n,e){return te(this,"map",n,e,void 0,arguments)},pop(){return He(this,"pop")},push(...n){return He(this,"push",n)},reduce(n,...e){return Ys(this,"reduce",n,e)},reduceRight(n,...e){return Ys(this,"reduceRight",n,e)},shift(){return He(this,"shift")},some(n,e){return te(this,"some",n,e,void 0,arguments)},splice(...n){return He(this,"splice",n)},toReversed(){return Ce(this).toReversed()},toSorted(n){return Ce(this).toSorted(n)},toSpliced(...n){return Ce(this).toSpliced(...n)},unshift(...n){return He(this,"unshift",n)},values(){return Kt(this,"values",Sn)}};function Kt(n,e,t){const s=Rt(n),r=s[e]();return s!==n&&!Wn(n)&&(r._next=r.next,r.next=()=>{const a=r._next();return a.value&&(a.value=t(a.value)),a}),r}const Co=Array.prototype;function te(n,e,t,s,r,a){const o=Rt(n),l=o!==n&&!Wn(n),i=o[e];if(i!==Co[e]){const c=i.apply(n,a);return l?Sn(c):c}let d=t;o!==n&&(l?d=function(c,m){return t.call(this,Sn(c),m,n)}:t.length>2&&(d=function(c,m){return t.call(this,c,m,n)}));const p=i.call(o,d,s);return l&&r?r(p):p}function Ys(n,e,t,s){const r=Rt(n);let a=t;return r!==n&&(Wn(n)?t.length>3&&(a=function(o,l,i){return t.call(this,o,l,i,n)}):a=function(o,l,i){return t.call(this,o,Sn(l),i,n)}),r[e](a,...s)}function Jt(n,e,t){const s=tn(n);Tn(s,"iterate",tt);const r=s[e](...t);return(r===-1||r===!1)&&Ps(t[0])?(t[0]=tn(t[0]),s[e](...t)):r}function He(n,e,t=[]){oe(),ks();const s=tn(n)[e].apply(n,t);return Ss(),ie(),s}const Eo=xs("__proto__,__v_isRef,__isVue"),ea=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(xe));function Po(n){xe(n)||(n=String(n));const e=tn(this);return Tn(e,"has",n),e.hasOwnProperty(n)}class ta{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,a=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return a;if(t==="__v_raw")return s===(r?a?Lo:oa:a?aa:ra).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=q(e);if(!r){let i;if(o&&(i=_o[t]))return i;if(t==="hasOwnProperty")return Po}const l=Reflect.get(e,t,Cn(e)?e:s);return(xe(t)?ea.has(t):Eo(t))||(r||Tn(e,"get",t),a)?l:Cn(l)?o&&ys(t)?l:l.value:pn(l)?r?la(l):Dt(l):l}}class sa extends ta{constructor(e=!1){super(!1,e)}set(e,t,s,r){let a=e[t];if(!this._isShallow){const i=ge(a);if(!Wn(s)&&!ge(s)&&(a=tn(a),s=tn(s)),!q(e)&&Cn(a)&&!Cn(s))return i?!1:(a.value=s,!0)}const o=q(e)&&ys(t)?Number(t)<e.length:sn(e,t),l=Reflect.set(e,t,s,Cn(e)?e:r);return e===tn(r)&&(o?me(s,a)&&ae(e,"set",t,s):ae(e,"add",t,s)),l}deleteProperty(e,t){const s=sn(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&s&&ae(e,"delete",t,void 0),r}has(e,t){const s=Reflect.has(e,t);return(!xe(t)||!ea.has(t))&&Tn(e,"has",t),s}ownKeys(e){return Tn(e,"iterate",q(e)?"length":Se),Reflect.ownKeys(e)}}class jo extends ta{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ao=new sa,zo=new jo,Mo=new sa(!0);const is=n=>n,dt=n=>Reflect.getPrototypeOf(n);function Io(n,e,t){return function(...s){const r=this.__v_raw,a=tn(r),o=ze(a),l=n==="entries"||n===Symbol.iterator&&o,i=n==="keys"&&o,d=r[n](...s),p=t?is:e?St:Sn;return!e&&Tn(a,"iterate",i?os:Se),{next(){const{value:c,done:m}=d.next();return m?{value:c,done:m}:{value:l?[p(c[0]),p(c[1])]:p(c),done:m}},[Symbol.iterator](){return this}}}}function ut(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Oo(n,e){const t={get(r){const a=this.__v_raw,o=tn(a),l=tn(r);n||(me(r,l)&&Tn(o,"get",r),Tn(o,"get",l));const{has:i}=dt(o),d=e?is:n?St:Sn;if(i.call(o,r))return d(a.get(r));if(i.call(o,l))return d(a.get(l));a!==o&&a.get(r)},get size(){const r=this.__v_raw;return!n&&Tn(tn(r),"iterate",Se),Reflect.get(r,"size",r)},has(r){const a=this.__v_raw,o=tn(a),l=tn(r);return n||(me(r,l)&&Tn(o,"has",r),Tn(o,"has",l)),r===l?a.has(r):a.has(r)||a.has(l)},forEach(r,a){const o=this,l=o.__v_raw,i=tn(l),d=e?is:n?St:Sn;return!n&&Tn(i,"iterate",Se),l.forEach((p,c)=>r.call(a,d(p),d(c),o))}};return En(t,n?{add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear")}:{add(r){!e&&!Wn(r)&&!ge(r)&&(r=tn(r));const a=tn(this);return dt(a).has.call(a,r)||(a.add(r),ae(a,"add",r,r)),this},set(r,a){!e&&!Wn(a)&&!ge(a)&&(a=tn(a));const o=tn(this),{has:l,get:i}=dt(o);let d=l.call(o,r);d||(r=tn(r),d=l.call(o,r));const p=i.call(o,r);return o.set(r,a),d?me(a,p)&&ae(o,"set",r,a):ae(o,"add",r,a),this},delete(r){const a=tn(this),{has:o,get:l}=dt(a);let i=o.call(a,r);i||(r=tn(r),i=o.call(a,r)),l&&l.call(a,r);const d=a.delete(r);return i&&ae(a,"delete",r,void 0),d},clear(){const r=tn(this),a=r.size!==0,o=r.clear();return a&&ae(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Io(r,n,e)}),t}function Cs(n,e){const t=Oo(n,e);return(s,r,a)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?s:Reflect.get(sn(t,r)&&r in s?t:s,r,a)}const Fo={get:Cs(!1,!1)},Ro={get:Cs(!1,!0)},Do={get:Cs(!0,!1)};const ra=new WeakMap,aa=new WeakMap,oa=new WeakMap,Lo=new WeakMap;function Bo(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wo(n){return n.__v_skip||!Object.isExtensible(n)?0:Bo(po(n))}function Dt(n){return ge(n)?n:Es(n,!1,Ao,Fo,ra)}function ia(n){return Es(n,!1,Mo,Ro,aa)}function la(n){return Es(n,!0,zo,Do,oa)}function Es(n,e,t,s,r){if(!pn(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const a=Wo(n);if(a===0)return n;const o=r.get(n);if(o)return o;const l=new Proxy(n,a===2?s:t);return r.set(n,l),l}function Me(n){return ge(n)?Me(n.__v_raw):!!(n&&n.__v_isReactive)}function ge(n){return!!(n&&n.__v_isReadonly)}function Wn(n){return!!(n&&n.__v_isShallow)}function Ps(n){return n?!!n.__v_raw:!1}function tn(n){const e=n&&n.__v_raw;return e?tn(e):n}function Ho(n){return!sn(n,"__v_skip")&&Object.isExtensible(n)&&Nr(n,"__v_skip",!0),n}const Sn=n=>pn(n)?Dt(n):n,St=n=>pn(n)?la(n):n;function Cn(n){return n?n.__v_isRef===!0:!1}function Te(n){return ca(n,!1)}function Uo(n){return ca(n,!0)}function ca(n,e){return Cn(n)?n:new No(n,e)}class No{constructor(e,t){this.dep=new _s,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tn(e),this._value=t?e:Sn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||Wn(e)||ge(e);e=s?e:tn(e),me(e,t)&&(this._rawValue=e,this._value=s?e:Sn(e),this.dep.trigger())}}function ne(n){return Cn(n)?n.value:n}const qo={get:(n,e,t)=>e==="__v_raw"?n:ne(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const r=n[e];return Cn(r)&&!Cn(t)?(r.value=t,!0):Reflect.set(n,e,t,s)}};function pa(n){return Me(n)?n:new Proxy(n,qo)}class Go{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new _s(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=et-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ln!==this)return Kr(this,!0),!0}get value(){const e=this.dep.track();return Xr(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function $o(n,e,t=!1){let s,r;return Y(n)?s=n:(s=n.get,r=n.set),new Go(s,r,t)}const ft={},Tt=new WeakMap;let ye;function Yo(n,e=!1,t=ye){if(t){let s=Tt.get(t);s||Tt.set(t,s=[]),s.push(n)}}function Vo(n,e,t=cn){const{immediate:s,deep:r,once:a,scheduler:o,augmentJob:l,call:i}=t,d=E=>r?E:Wn(E)||r===!1||r===0?fe(E,1):fe(E);let p,c,m,h,b=!1,x=!1;if(Cn(n)?(c=()=>n.value,b=Wn(n)):Me(n)?(c=()=>d(n),b=!0):q(n)?(x=!0,b=n.some(E=>Me(E)||Wn(E)),c=()=>n.map(E=>{if(Cn(E))return E.value;if(Me(E))return d(E);if(Y(E))return i?i(E,2):E()})):Y(n)?e?c=i?()=>i(n,2):n:c=()=>{if(m){oe();try{m()}finally{ie()}}const E=ye;ye=p;try{return i?i(n,3,[h]):n(h)}finally{ye=E}}:c=Zn,e&&r){const E=c,U=r===!0?1/0:r;c=()=>fe(E(),U)}const S=ko(),z=()=>{p.stop(),S&&S.active&&ws(S.effects,p)};if(a&&e){const E=e;e=(...U)=>{E(...U),z()}}let M=x?new Array(n.length).fill(ft):ft;const D=E=>{if(!(!(p.flags&1)||!p.dirty&&!E))if(e){const U=p.run();if(r||b||(x?U.some((G,J)=>me(G,M[J])):me(U,M))){m&&m();const G=ye;ye=p;try{const J=[U,M===ft?void 0:x&&M[0]===ft?[]:M,h];M=U,i?i(e,3,J):e(...J)}finally{ye=G}}}else p.run()};return l&&l(D),p=new Yr(c),p.scheduler=o?()=>o(D,!1):D,h=E=>Yo(E,!1,p),m=p.onStop=()=>{const E=Tt.get(p);if(E){if(i)i(E,4);else for(const U of E)U();Tt.delete(p)}},e?s?D(!0):M=p.run():o?o(D.bind(null,!0),!0):p.run(),z.pause=p.pause.bind(p),z.resume=p.resume.bind(p),z.stop=z,z}function fe(n,e=1/0,t){if(e<=0||!pn(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Cn(n))fe(n.value,e,t);else if(q(n))for(let s=0;s<n.length;s++)fe(n[s],e,t);else if(Br(n)||ze(n))n.forEach(s=>{fe(s,e,t)});else if(Ur(n)){for(const s in n)fe(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&fe(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lt(n,e,t,s){try{return s?n(...s):n()}catch(r){Lt(r,e,t)}}function ee(n,e,t,s){if(Y(n)){const r=lt(n,e,t,s);return r&&Wr(r)&&r.catch(a=>{Lt(a,e,t)}),r}if(q(n)){const r=[];for(let a=0;a<n.length;a++)r.push(ee(n[a],e,t,s));return r}}function Lt(n,e,t,s=!0){const r=e?e.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||cn;if(e){let l=e.parent;const i=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const p=l.ec;if(p){for(let c=0;c<p.length;c++)if(p[c](n,i,d)===!1)return}l=l.parent}if(a){oe(),lt(a,null,10,[n,i,d]),ie();return}}Ko(n,t,r,s,o)}function Ko(n,e,t,s=!0,r=!1){if(r)throw n;console.error(n)}const An=[];let Jn=-1;const Ie=[];let pe=null,Pe=0;const da=Promise.resolve();let _t=null;function js(n){const e=_t||da;return n?e.then(this?n.bind(this):n):e}function Jo(n){let e=Jn+1,t=An.length;for(;e<t;){const s=e+t>>>1,r=An[s],a=st(r);a<n||a===n&&r.flags&2?e=s+1:t=s}return e}function As(n){if(!(n.flags&1)){const e=st(n),t=An[An.length-1];!t||!(n.flags&2)&&e>=st(t)?An.push(n):An.splice(Jo(e),0,n),n.flags|=1,ua()}}function ua(){_t||(_t=da.then(ma))}function Qo(n){q(n)?Ie.push(...n):pe&&n.id===-1?pe.splice(Pe+1,0,n):n.flags&1||(Ie.push(n),n.flags|=1),ua()}function Vs(n,e,t=Jn+1){for(;t<An.length;t++){const s=An[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;An.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function fa(n){if(Ie.length){const e=[...new Set(Ie)].sort((t,s)=>st(t)-st(s));if(Ie.length=0,pe){pe.push(...e);return}for(pe=e,Pe=0;Pe<pe.length;Pe++){const t=pe[Pe];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}pe=null,Pe=0}}const st=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ma(n){try{for(Jn=0;Jn<An.length;Jn++){const e=An[Jn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),lt(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Jn<An.length;Jn++){const e=An[Jn];e&&(e.flags&=-2)}Jn=-1,An.length=0,fa(),_t=null,(An.length||Ie.length)&&ma()}}let Un=null,ha=null;function Ct(n){const e=Un;return Un=n,ha=n&&n.type.__scopeId||null,e}function he(n,e=Un,t){if(!e||n._n)return n;const s=(...r)=>{s._d&&rr(-1);const a=Ct(e);let o;try{o=n(...r)}finally{Ct(a),s._d&&rr(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ve(n,e,t,s){const r=n.dirs,a=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];a&&(l.oldValue=a[o].value);let i=l.dir[s];i&&(oe(),ee(i,t,8,[n.el,l,n,e]),ie())}}const Xo=Symbol("_vte"),Zo=n=>n.__isTeleport;function zs(n,e){n.shapeFlag&6&&n.component?(n.transition=e,zs(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ga(n,e){return Y(n)?En({name:n.name},e,{setup:n}):n}function ba(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Et(n,e,t,s,r=!1){if(q(n)){n.forEach((b,x)=>Et(b,e&&(q(e)?e[x]:e),t,s,r));return}if(Ke(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Et(n,e,t,s.component.subTree);return}const a=s.shapeFlag&4?Rs(s.component):s.el,o=r?null:a,{i:l,r:i}=n,d=e&&e.r,p=l.refs===cn?l.refs={}:l.refs,c=l.setupState,m=tn(c),h=c===cn?()=>!1:b=>sn(m,b);if(d!=null&&d!==i&&(gn(d)?(p[d]=null,h(d)&&(c[d]=null)):Cn(d)&&(d.value=null)),Y(i))lt(i,l,12,[o,p]);else{const b=gn(i),x=Cn(i);if(b||x){const S=()=>{if(n.f){const z=b?h(i)?c[i]:p[i]:i.value;r?q(z)&&ws(z,a):q(z)?z.includes(a)||z.push(a):b?(p[i]=[a],h(i)&&(c[i]=p[i])):(i.value=[a],n.k&&(p[n.k]=i.value))}else b?(p[i]=o,h(i)&&(c[i]=o)):x&&(i.value=o,n.k&&(p[n.k]=o))};o?(S.id=-1,Ln(S,t)):S()}}}Ft().requestIdleCallback;Ft().cancelIdleCallback;const Ke=n=>!!n.type.__asyncLoader,xa=n=>n.type.__isKeepAlive;function ni(n,e){va(n,"a",e)}function ei(n,e){va(n,"da",e)}function va(n,e,t=_n){const s=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Bt(e,s,t),t){let r=t.parent;for(;r&&r.parent;)xa(r.parent.vnode)&&ti(s,e,t,r),r=r.parent}}function ti(n,e,t,s){const r=Bt(e,n,s,!0);ya(()=>{ws(s[e],r)},t)}function Bt(n,e,t=_n,s=!1){if(t){const r=t[n]||(t[n]=[]),a=e.__weh||(e.__weh=(...o)=>{oe();const l=pt(t),i=ee(e,t,n,o);return l(),ie(),i});return s?r.unshift(a):r.push(a),a}}const le=n=>(e,t=_n)=>{(!at||n==="sp")&&Bt(n,(...s)=>e(...s),t)},si=le("bm"),ct=le("m"),ri=le("bu"),ai=le("u"),wa=le("bum"),ya=le("um"),oi=le("sp"),ii=le("rtg"),li=le("rtc");function ci(n,e=_n){Bt("ec",n,e)}const pi="components";function ka(n,e){return ui(pi,n,!0,e)||n}const di=Symbol.for("v-ndc");function ui(n,e,t=!0,s=!1){const r=Un||_n;if(r){const a=r.type;{const l=Xi(a,!1);if(l&&(l===e||l===Hn(e)||l===Ot(Hn(e))))return a}const o=Ks(r[n]||a[n],e)||Ks(r.appContext[n],e);return!o&&s?a:o}}function Ks(n,e){return n&&(n[e]||n[Hn(e)]||n[Ot(Hn(e))])}function Oe(n,e,t,s){let r;const a=t,o=q(n);if(o||gn(n)){const l=o&&Me(n);let i=!1,d=!1;l&&(i=!Wn(n),d=ge(n),n=Rt(n)),r=new Array(n.length);for(let p=0,c=n.length;p<c;p++)r[p]=e(i?d?St(Sn(n[p])):Sn(n[p]):n[p],p,void 0,a)}else if(typeof n=="number"){r=new Array(n);for(let l=0;l<n;l++)r[l]=e(l+1,l,void 0,a)}else if(pn(n))if(n[Symbol.iterator])r=Array.from(n,(l,i)=>e(l,i,void 0,a));else{const l=Object.keys(n);r=new Array(l.length);for(let i=0,d=l.length;i<d;i++){const p=l[i];r[i]=e(n[p],p,i,a)}}else r=[];return r}const ls=n=>n?Ua(n)?Rs(n):ls(n.parent):null,Je=En(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ls(n.parent),$root:n=>ls(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ta(n),$forceUpdate:n=>n.f||(n.f=()=>{As(n.update)}),$nextTick:n=>n.n||(n.n=js.bind(n.proxy)),$watch:n=>Ii.bind(n)}),Qt=(n,e)=>n!==cn&&!n.__isScriptSetup&&sn(n,e),fi={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:r,props:a,accessCache:o,type:l,appContext:i}=n;let d;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return s[e];case 2:return r[e];case 4:return t[e];case 3:return a[e]}else{if(Qt(s,e))return o[e]=1,s[e];if(r!==cn&&sn(r,e))return o[e]=2,r[e];if((d=n.propsOptions[0])&&sn(d,e))return o[e]=3,a[e];if(t!==cn&&sn(t,e))return o[e]=4,t[e];cs&&(o[e]=0)}}const p=Je[e];let c,m;if(p)return e==="$attrs"&&Tn(n.attrs,"get",""),p(n);if((c=l.__cssModules)&&(c=c[e]))return c;if(t!==cn&&sn(t,e))return o[e]=4,t[e];if(m=i.config.globalProperties,sn(m,e))return m[e]},set({_:n},e,t){const{data:s,setupState:r,ctx:a}=n;return Qt(r,e)?(r[e]=t,!0):s!==cn&&sn(s,e)?(s[e]=t,!0):sn(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(a[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:r,propsOptions:a}},o){let l;return!!t[o]||n!==cn&&sn(n,o)||Qt(e,o)||(l=a[0])&&sn(l,o)||sn(s,o)||sn(Je,o)||sn(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:sn(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Js(n){return q(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let cs=!0;function mi(n){const e=Ta(n),t=n.proxy,s=n.ctx;cs=!1,e.beforeCreate&&Qs(e.beforeCreate,n,"bc");const{data:r,computed:a,methods:o,watch:l,provide:i,inject:d,created:p,beforeMount:c,mounted:m,beforeUpdate:h,updated:b,activated:x,deactivated:S,beforeDestroy:z,beforeUnmount:M,destroyed:D,unmounted:E,render:U,renderTracked:G,renderTriggered:J,errorCaptured:$,serverPrefetch:mn,expose:bn,inheritAttrs:L,components:F,directives:V,filters:H}=e;if(d&&hi(d,s,null),o)for(const Q in o){const K=o[Q];Y(K)&&(s[Q]=K.bind(t))}if(r){const Q=r.call(t,t);pn(Q)&&(n.data=Dt(Q))}if(cs=!0,a)for(const Q in a){const K=a[Q],yn=Y(K)?K.bind(t,t):Y(K.get)?K.get.bind(t,t):Zn,Fn=!Y(K)&&Y(K.set)?K.set.bind(t):Zn,zn=On({get:yn,set:Fn});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>zn.value,set:hn=>zn.value=hn})}if(l)for(const Q in l)Sa(l[Q],s,t,Q);if(i){const Q=Y(i)?i.call(t):i;Reflect.ownKeys(Q).forEach(K=>{ht(K,Q[K])})}p&&Qs(p,n,"c");function nn(Q,K){q(K)?K.forEach(yn=>Q(yn.bind(t))):K&&Q(K.bind(t))}if(nn(si,c),nn(ct,m),nn(ri,h),nn(ai,b),nn(ni,x),nn(ei,S),nn(ci,$),nn(li,G),nn(ii,J),nn(wa,M),nn(ya,E),nn(oi,mn),q(bn))if(bn.length){const Q=n.exposed||(n.exposed={});bn.forEach(K=>{Object.defineProperty(Q,K,{get:()=>t[K],set:yn=>t[K]=yn})})}else n.exposed||(n.exposed={});U&&n.render===Zn&&(n.render=U),L!=null&&(n.inheritAttrs=L),F&&(n.components=F),V&&(n.directives=V),mn&&ba(n)}function hi(n,e,t=Zn){q(n)&&(n=ps(n));for(const s in n){const r=n[s];let a;pn(r)?"default"in r?a=qn(r.from||s,r.default,!0):a=qn(r.from||s):a=qn(r),Cn(a)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[s]=a}}function Qs(n,e,t){ee(q(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function Sa(n,e,t,s){let r=s.includes(".")?Da(t,s):()=>t[s];if(gn(n)){const a=e[n];Y(a)&&Qe(r,a)}else if(Y(n))Qe(r,n.bind(t));else if(pn(n))if(q(n))n.forEach(a=>Sa(a,e,t,s));else{const a=Y(n.handler)?n.handler.bind(t):e[n.handler];Y(a)&&Qe(r,a,n)}}function Ta(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:r,optionsCache:a,config:{optionMergeStrategies:o}}=n.appContext,l=a.get(e);let i;return l?i=l:!r.length&&!t&&!s?i=e:(i={},r.length&&r.forEach(d=>Pt(i,d,o,!0)),Pt(i,e,o)),pn(e)&&a.set(e,i),i}function Pt(n,e,t,s=!1){const{mixins:r,extends:a}=e;a&&Pt(n,a,t,!0),r&&r.forEach(o=>Pt(n,o,t,!0));for(const o in e)if(!(s&&o==="expose")){const l=gi[o]||t&&t[o];n[o]=l?l(n[o],e[o]):e[o]}return n}const gi={data:Xs,props:Zs,emits:Zs,methods:Ge,computed:Ge,beforeCreate:jn,created:jn,beforeMount:jn,mounted:jn,beforeUpdate:jn,updated:jn,beforeDestroy:jn,beforeUnmount:jn,destroyed:jn,unmounted:jn,activated:jn,deactivated:jn,errorCaptured:jn,serverPrefetch:jn,components:Ge,directives:Ge,watch:xi,provide:Xs,inject:bi};function Xs(n,e){return e?n?function(){return En(Y(n)?n.call(this,this):n,Y(e)?e.call(this,this):e)}:e:n}function bi(n,e){return Ge(ps(n),ps(e))}function ps(n){if(q(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function jn(n,e){return n?[...new Set([].concat(n,e))]:e}function Ge(n,e){return n?En(Object.create(null),n,e):e}function Zs(n,e){return n?q(n)&&q(e)?[...new Set([...n,...e])]:En(Object.create(null),Js(n),Js(e??{})):e}function xi(n,e){if(!n)return e;if(!e)return n;const t=En(Object.create(null),n);for(const s in e)t[s]=jn(n[s],e[s]);return t}function _a(){return{app:null,config:{isNativeTag:lo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vi=0;function wi(n,e){return function(s,r=null){Y(s)||(s=En({},s)),r!=null&&!pn(r)&&(r=null);const a=_a(),o=new WeakSet,l=[];let i=!1;const d=a.app={_uid:vi++,_component:s,_props:r,_container:null,_context:a,_instance:null,version:nl,get config(){return a.config},set config(p){},use(p,...c){return o.has(p)||(p&&Y(p.install)?(o.add(p),p.install(d,...c)):Y(p)&&(o.add(p),p(d,...c))),d},mixin(p){return a.mixins.includes(p)||a.mixins.push(p),d},component(p,c){return c?(a.components[p]=c,d):a.components[p]},directive(p,c){return c?(a.directives[p]=c,d):a.directives[p]},mount(p,c,m){if(!i){const h=d._ceVNode||an(s,r);return h.appContext=a,m===!0?m="svg":m===!1&&(m=void 0),n(h,p,m),i=!0,d._container=p,p.__vue_app__=d,Rs(h.component)}},onUnmount(p){l.push(p)},unmount(){i&&(ee(l,d._instance,16),n(null,d._container),delete d._container.__vue_app__)},provide(p,c){return a.provides[p]=c,d},runWithContext(p){const c=Fe;Fe=d;try{return p()}finally{Fe=c}}};return d}}let Fe=null;function ht(n,e){if(_n){let t=_n.provides;const s=_n.parent&&_n.parent.provides;s===t&&(t=_n.provides=Object.create(s)),t[n]=e}}function qn(n,e,t=!1){const s=_n||Un;if(s||Fe){let r=Fe?Fe._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Y(e)?e.call(s&&s.proxy):e}}const Ca={},Ea=()=>Object.create(Ca),Pa=n=>Object.getPrototypeOf(n)===Ca;function yi(n,e,t,s=!1){const r={},a=Ea();n.propsDefaults=Object.create(null),ja(n,e,r,a);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=s?r:ia(r):n.type.props?n.props=r:n.props=a,n.attrs=a}function ki(n,e,t,s){const{props:r,attrs:a,vnode:{patchFlag:o}}=n,l=tn(r),[i]=n.propsOptions;let d=!1;if((s||o>0)&&!(o&16)){if(o&8){const p=n.vnode.dynamicProps;for(let c=0;c<p.length;c++){let m=p[c];if(Wt(n.emitsOptions,m))continue;const h=e[m];if(i)if(sn(a,m))h!==a[m]&&(a[m]=h,d=!0);else{const b=Hn(m);r[b]=ds(i,l,b,h,n,!1)}else h!==a[m]&&(a[m]=h,d=!0)}}}else{ja(n,e,r,a)&&(d=!0);let p;for(const c in l)(!e||!sn(e,c)&&((p=_e(c))===c||!sn(e,p)))&&(i?t&&(t[c]!==void 0||t[p]!==void 0)&&(r[c]=ds(i,l,c,void 0,n,!0)):delete r[c]);if(a!==l)for(const c in a)(!e||!sn(e,c))&&(delete a[c],d=!0)}d&&ae(n.attrs,"set","")}function ja(n,e,t,s){const[r,a]=n.propsOptions;let o=!1,l;if(e)for(let i in e){if($e(i))continue;const d=e[i];let p;r&&sn(r,p=Hn(i))?!a||!a.includes(p)?t[p]=d:(l||(l={}))[p]=d:Wt(n.emitsOptions,i)||(!(i in s)||d!==s[i])&&(s[i]=d,o=!0)}if(a){const i=tn(t),d=l||cn;for(let p=0;p<a.length;p++){const c=a[p];t[c]=ds(r,i,c,d[c],n,!sn(d,c))}}return o}function ds(n,e,t,s,r,a){const o=n[t];if(o!=null){const l=sn(o,"default");if(l&&s===void 0){const i=o.default;if(o.type!==Function&&!o.skipFactory&&Y(i)){const{propsDefaults:d}=r;if(t in d)s=d[t];else{const p=pt(r);s=d[t]=i.call(null,e),p()}}else s=i;r.ce&&r.ce._setProp(t,s)}o[0]&&(a&&!l?s=!1:o[1]&&(s===""||s===_e(t))&&(s=!0))}return s}const Si=new WeakMap;function Aa(n,e,t=!1){const s=t?Si:e.propsCache,r=s.get(n);if(r)return r;const a=n.props,o={},l=[];let i=!1;if(!Y(n)){const p=c=>{i=!0;const[m,h]=Aa(c,e,!0);En(o,m),h&&l.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(p),n.extends&&p(n.extends),n.mixins&&n.mixins.forEach(p)}if(!a&&!i)return pn(n)&&s.set(n,Ae),Ae;if(q(a))for(let p=0;p<a.length;p++){const c=Hn(a[p]);nr(c)&&(o[c]=cn)}else if(a)for(const p in a){const c=Hn(p);if(nr(c)){const m=a[p],h=o[c]=q(m)||Y(m)?{type:m}:En({},m),b=h.type;let x=!1,S=!0;if(q(b))for(let z=0;z<b.length;++z){const M=b[z],D=Y(M)&&M.name;if(D==="Boolean"){x=!0;break}else D==="String"&&(S=!1)}else x=Y(b)&&b.name==="Boolean";h[0]=x,h[1]=S,(x||sn(h,"default"))&&l.push(c)}}const d=[o,l];return pn(n)&&s.set(n,d),d}function nr(n){return n[0]!=="$"&&!$e(n)}const Ms=n=>n[0]==="_"||n==="$stable",Is=n=>q(n)?n.map(Qn):[Qn(n)],Ti=(n,e,t)=>{if(e._n)return e;const s=he((...r)=>Is(e(...r)),t);return s._c=!1,s},za=(n,e,t)=>{const s=n._ctx;for(const r in n){if(Ms(r))continue;const a=n[r];if(Y(a))e[r]=Ti(r,a,s);else if(a!=null){const o=Is(a);e[r]=()=>o}}},Ma=(n,e)=>{const t=Is(e);n.slots.default=()=>t},Ia=(n,e,t)=>{for(const s in e)(t||!Ms(s))&&(n[s]=e[s])},_i=(n,e,t)=>{const s=n.slots=Ea();if(n.vnode.shapeFlag&32){const r=e._;r?(Ia(s,e,t),t&&Nr(s,"_",r,!0)):za(e,s)}else e&&Ma(n,e)},Ci=(n,e,t)=>{const{vnode:s,slots:r}=n;let a=!0,o=cn;if(s.shapeFlag&32){const l=e._;l?t&&l===1?a=!1:Ia(r,e,t):(a=!e.$stable,za(e,r)),o=e}else e&&(Ma(n,e),o={default:1});if(a)for(const l in r)!Ms(l)&&o[l]==null&&delete r[l]},Ln=Wi;function Ei(n){return Pi(n)}function Pi(n,e){const t=Ft();t.__VUE__=!0;const{insert:s,remove:r,patchProp:a,createElement:o,createText:l,createComment:i,setText:d,setElementText:p,parentNode:c,nextSibling:m,setScopeId:h=Zn,insertStaticContent:b}=n,x=(u,f,g,w=null,y=null,k=null,I=void 0,j=null,P=!!f.dynamicChildren)=>{if(u===f)return;u&&!Ue(u,f)&&(w=v(u),hn(u,y,k,!0),u=null),f.patchFlag===-2&&(P=!1,f.dynamicChildren=null);const{type:T,ref:W,shapeFlag:O}=f;switch(T){case Ht:S(u,f,g,w);break;case be:z(u,f,g,w);break;case gt:u==null&&M(f,g,w,I);break;case wn:F(u,f,g,w,y,k,I,j,P);break;default:O&1?U(u,f,g,w,y,k,I,j,P):O&6?V(u,f,g,w,y,k,I,j,P):(O&64||O&128)&&T.process(u,f,g,w,y,k,I,j,P,R)}W!=null&&y&&Et(W,u&&u.ref,k,f||u,!f)},S=(u,f,g,w)=>{if(u==null)s(f.el=l(f.children),g,w);else{const y=f.el=u.el;f.children!==u.children&&d(y,f.children)}},z=(u,f,g,w)=>{u==null?s(f.el=i(f.children||""),g,w):f.el=u.el},M=(u,f,g,w)=>{[u.el,u.anchor]=b(u.children,f,g,w,u.el,u.anchor)},D=({el:u,anchor:f},g,w)=>{let y;for(;u&&u!==f;)y=m(u),s(u,g,w),u=y;s(f,g,w)},E=({el:u,anchor:f})=>{let g;for(;u&&u!==f;)g=m(u),r(u),u=g;r(f)},U=(u,f,g,w,y,k,I,j,P)=>{f.type==="svg"?I="svg":f.type==="math"&&(I="mathml"),u==null?G(f,g,w,y,k,I,j,P):mn(u,f,y,k,I,j,P)},G=(u,f,g,w,y,k,I,j)=>{let P,T;const{props:W,shapeFlag:O,transition:B,dirs:N}=u;if(P=u.el=o(u.type,k,W&&W.is,W),O&8?p(P,u.children):O&16&&$(u.children,P,null,w,y,Xt(u,k),I,j),N&&ve(u,null,w,"created"),J(P,u,u.scopeId,I,w),W){for(const on in W)on!=="value"&&!$e(on)&&a(P,on,null,W[on],k,w);"value"in W&&a(P,"value",null,W.value,k),(T=W.onVnodeBeforeMount)&&Kn(T,w,u)}N&&ve(u,null,w,"beforeMount");const Z=ji(y,B);Z&&B.beforeEnter(P),s(P,f,g),((T=W&&W.onVnodeMounted)||Z||N)&&Ln(()=>{T&&Kn(T,w,u),Z&&B.enter(P),N&&ve(u,null,w,"mounted")},y)},J=(u,f,g,w,y)=>{if(g&&h(u,g),w)for(let k=0;k<w.length;k++)h(u,w[k]);if(y){let k=y.subTree;if(f===k||Ba(k.type)&&(k.ssContent===f||k.ssFallback===f)){const I=y.vnode;J(u,I,I.scopeId,I.slotScopeIds,y.parent)}}},$=(u,f,g,w,y,k,I,j,P=0)=>{for(let T=P;T<u.length;T++){const W=u[T]=j?de(u[T]):Qn(u[T]);x(null,W,f,g,w,y,k,I,j)}},mn=(u,f,g,w,y,k,I)=>{const j=f.el=u.el;let{patchFlag:P,dynamicChildren:T,dirs:W}=f;P|=u.patchFlag&16;const O=u.props||cn,B=f.props||cn;let N;if(g&&we(g,!1),(N=B.onVnodeBeforeUpdate)&&Kn(N,g,f,u),W&&ve(f,u,g,"beforeUpdate"),g&&we(g,!0),(O.innerHTML&&B.innerHTML==null||O.textContent&&B.textContent==null)&&p(j,""),T?bn(u.dynamicChildren,T,j,g,w,Xt(f,y),k):I||K(u,f,j,null,g,w,Xt(f,y),k,!1),P>0){if(P&16)L(j,O,B,g,y);else if(P&2&&O.class!==B.class&&a(j,"class",null,B.class,y),P&4&&a(j,"style",O.style,B.style,y),P&8){const Z=f.dynamicProps;for(let on=0;on<Z.length;on++){const rn=Z[on],Rn=O[rn],Mn=B[rn];(Mn!==Rn||rn==="value")&&a(j,rn,Rn,Mn,y,g)}}P&1&&u.children!==f.children&&p(j,f.children)}else!I&&T==null&&L(j,O,B,g,y);((N=B.onVnodeUpdated)||W)&&Ln(()=>{N&&Kn(N,g,f,u),W&&ve(f,u,g,"updated")},w)},bn=(u,f,g,w,y,k,I)=>{for(let j=0;j<f.length;j++){const P=u[j],T=f[j],W=P.el&&(P.type===wn||!Ue(P,T)||P.shapeFlag&198)?c(P.el):g;x(P,T,W,null,w,y,k,I,!0)}},L=(u,f,g,w,y)=>{if(f!==g){if(f!==cn)for(const k in f)!$e(k)&&!(k in g)&&a(u,k,f[k],null,y,w);for(const k in g){if($e(k))continue;const I=g[k],j=f[k];I!==j&&k!=="value"&&a(u,k,j,I,y,w)}"value"in g&&a(u,"value",f.value,g.value,y)}},F=(u,f,g,w,y,k,I,j,P)=>{const T=f.el=u?u.el:l(""),W=f.anchor=u?u.anchor:l("");let{patchFlag:O,dynamicChildren:B,slotScopeIds:N}=f;N&&(j=j?j.concat(N):N),u==null?(s(T,g,w),s(W,g,w),$(f.children||[],g,W,y,k,I,j,P)):O>0&&O&64&&B&&u.dynamicChildren?(bn(u.dynamicChildren,B,g,y,k,I,j),(f.key!=null||y&&f===y.subTree)&&Oa(u,f,!0)):K(u,f,g,W,y,k,I,j,P)},V=(u,f,g,w,y,k,I,j,P)=>{f.slotScopeIds=j,u==null?f.shapeFlag&512?y.ctx.activate(f,g,w,I,P):H(f,g,w,y,k,I,P):dn(u,f,P)},H=(u,f,g,w,y,k,I)=>{const j=u.component=Yi(u,w,y);if(xa(u)&&(j.ctx.renderer=R),Vi(j,!1,I),j.asyncDep){if(y&&y.registerDep(j,nn,I),!u.el){const P=j.subTree=an(be);z(null,P,f,g)}}else nn(j,u,f,g,y,k,I)},dn=(u,f,g)=>{const w=f.component=u.component;if(Li(u,f,g))if(w.asyncDep&&!w.asyncResolved){Q(w,f,g);return}else w.next=f,w.update();else f.el=u.el,w.vnode=f},nn=(u,f,g,w,y,k,I)=>{const j=()=>{if(u.isMounted){let{next:O,bu:B,u:N,parent:Z,vnode:on}=u;{const Yn=Fa(u);if(Yn){O&&(O.el=on.el,Q(u,O,I)),Yn.asyncDep.then(()=>{u.isUnmounted||j()});return}}let rn=O,Rn;we(u,!1),O?(O.el=on.el,Q(u,O,I)):O=on,B&&$t(B),(Rn=O.props&&O.props.onVnodeBeforeUpdate)&&Kn(Rn,Z,O,on),we(u,!0);const Mn=tr(u),$n=u.subTree;u.subTree=Mn,x($n,Mn,c($n.el),v($n),u,y,k),O.el=Mn.el,rn===null&&Bi(u,Mn.el),N&&Ln(N,y),(Rn=O.props&&O.props.onVnodeUpdated)&&Ln(()=>Kn(Rn,Z,O,on),y)}else{let O;const{el:B,props:N}=f,{bm:Z,m:on,parent:rn,root:Rn,type:Mn}=u,$n=Ke(f);we(u,!1),Z&&$t(Z),!$n&&(O=N&&N.onVnodeBeforeMount)&&Kn(O,rn,f),we(u,!0);{Rn.ce&&Rn.ce._injectChildStyle(Mn);const Yn=u.subTree=tr(u);x(null,Yn,g,w,u,y,k),f.el=Yn.el}if(on&&Ln(on,y),!$n&&(O=N&&N.onVnodeMounted)){const Yn=f;Ln(()=>Kn(O,rn,Yn),y)}(f.shapeFlag&256||rn&&Ke(rn.vnode)&&rn.vnode.shapeFlag&256)&&u.a&&Ln(u.a,y),u.isMounted=!0,f=g=w=null}};u.scope.on();const P=u.effect=new Yr(j);u.scope.off();const T=u.update=P.run.bind(P),W=u.job=P.runIfDirty.bind(P);W.i=u,W.id=u.uid,P.scheduler=()=>As(W),we(u,!0),T()},Q=(u,f,g)=>{f.component=u;const w=u.vnode.props;u.vnode=f,u.next=null,ki(u,f.props,w,g),Ci(u,f.children,g),oe(),Vs(u),ie()},K=(u,f,g,w,y,k,I,j,P=!1)=>{const T=u&&u.children,W=u?u.shapeFlag:0,O=f.children,{patchFlag:B,shapeFlag:N}=f;if(B>0){if(B&128){Fn(T,O,g,w,y,k,I,j,P);return}else if(B&256){yn(T,O,g,w,y,k,I,j,P);return}}N&8?(W&16&&un(T,y,k),O!==T&&p(g,O)):W&16?N&16?Fn(T,O,g,w,y,k,I,j,P):un(T,y,k,!0):(W&8&&p(g,""),N&16&&$(O,g,w,y,k,I,j,P))},yn=(u,f,g,w,y,k,I,j,P)=>{u=u||Ae,f=f||Ae;const T=u.length,W=f.length,O=Math.min(T,W);let B;for(B=0;B<O;B++){const N=f[B]=P?de(f[B]):Qn(f[B]);x(u[B],N,g,null,y,k,I,j,P)}T>W?un(u,y,k,!0,!1,O):$(f,g,w,y,k,I,j,P,O)},Fn=(u,f,g,w,y,k,I,j,P)=>{let T=0;const W=f.length;let O=u.length-1,B=W-1;for(;T<=O&&T<=B;){const N=u[T],Z=f[T]=P?de(f[T]):Qn(f[T]);if(Ue(N,Z))x(N,Z,g,null,y,k,I,j,P);else break;T++}for(;T<=O&&T<=B;){const N=u[O],Z=f[B]=P?de(f[B]):Qn(f[B]);if(Ue(N,Z))x(N,Z,g,null,y,k,I,j,P);else break;O--,B--}if(T>O){if(T<=B){const N=B+1,Z=N<W?f[N].el:w;for(;T<=B;)x(null,f[T]=P?de(f[T]):Qn(f[T]),g,Z,y,k,I,j,P),T++}}else if(T>B)for(;T<=O;)hn(u[T],y,k,!0),T++;else{const N=T,Z=T,on=new Map;for(T=Z;T<=B;T++){const Dn=f[T]=P?de(f[T]):Qn(f[T]);Dn.key!=null&&on.set(Dn.key,T)}let rn,Rn=0;const Mn=B-Z+1;let $n=!1,Yn=0;const We=new Array(Mn);for(T=0;T<Mn;T++)We[T]=0;for(T=N;T<=O;T++){const Dn=u[T];if(Rn>=Mn){hn(Dn,y,k,!0);continue}let Vn;if(Dn.key!=null)Vn=on.get(Dn.key);else for(rn=Z;rn<=B;rn++)if(We[rn-Z]===0&&Ue(Dn,f[rn])){Vn=rn;break}Vn===void 0?hn(Dn,y,k,!0):(We[Vn-Z]=T+1,Vn>=Yn?Yn=Vn:$n=!0,x(Dn,f[Vn],g,null,y,k,I,j,P),Rn++)}const Ns=$n?Ai(We):Ae;for(rn=Ns.length-1,T=Mn-1;T>=0;T--){const Dn=Z+T,Vn=f[Dn],qs=Dn+1<W?f[Dn+1].el:w;We[T]===0?x(null,Vn,g,qs,y,k,I,j,P):$n&&(rn<0||T!==Ns[rn]?zn(Vn,g,qs,2):rn--)}}},zn=(u,f,g,w,y=null)=>{const{el:k,type:I,transition:j,children:P,shapeFlag:T}=u;if(T&6){zn(u.component.subTree,f,g,w);return}if(T&128){u.suspense.move(f,g,w);return}if(T&64){I.move(u,f,g,R);return}if(I===wn){s(k,f,g);for(let O=0;O<P.length;O++)zn(P[O],f,g,w);s(u.anchor,f,g);return}if(I===gt){D(u,f,g);return}if(w!==2&&T&1&&j)if(w===0)j.beforeEnter(k),s(k,f,g),Ln(()=>j.enter(k),y);else{const{leave:O,delayLeave:B,afterLeave:N}=j,Z=()=>{u.ctx.isUnmounted?r(k):s(k,f,g)},on=()=>{O(k,()=>{Z(),N&&N()})};B?B(k,Z,on):on()}else s(k,f,g)},hn=(u,f,g,w=!1,y=!1)=>{const{type:k,props:I,ref:j,children:P,dynamicChildren:T,shapeFlag:W,patchFlag:O,dirs:B,cacheIndex:N}=u;if(O===-2&&(y=!1),j!=null&&(oe(),Et(j,null,g,u,!0),ie()),N!=null&&(f.renderCache[N]=void 0),W&256){f.ctx.deactivate(u);return}const Z=W&1&&B,on=!Ke(u);let rn;if(on&&(rn=I&&I.onVnodeBeforeUnmount)&&Kn(rn,f,u),W&6)Pn(u.component,g,w);else{if(W&128){u.suspense.unmount(g,w);return}Z&&ve(u,null,f,"beforeUnmount"),W&64?u.type.remove(u,f,g,R,w):T&&!T.hasOnce&&(k!==wn||O>0&&O&64)?un(T,f,g,!1,!0):(k===wn&&O&384||!y&&W&16)&&un(P,f,g),w&&kn(u)}(on&&(rn=I&&I.onVnodeUnmounted)||Z)&&Ln(()=>{rn&&Kn(rn,f,u),Z&&ve(u,null,f,"unmounted")},g)},kn=u=>{const{type:f,el:g,anchor:w,transition:y}=u;if(f===wn){xn(g,w);return}if(f===gt){E(u);return}const k=()=>{r(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:I,delayLeave:j}=y,P=()=>I(g,k);j?j(u.el,k,P):P()}else k()},xn=(u,f)=>{let g;for(;u!==f;)g=m(u),r(u),u=g;r(f)},Pn=(u,f,g)=>{const{bum:w,scope:y,job:k,subTree:I,um:j,m:P,a:T,parent:W,slots:{__:O}}=u;er(P),er(T),w&&$t(w),W&&q(O)&&O.forEach(B=>{W.renderCache[B]=void 0}),y.stop(),k&&(k.flags|=8,hn(I,u,f,g)),j&&Ln(j,f),Ln(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},un=(u,f,g,w=!1,y=!1,k=0)=>{for(let I=k;I<u.length;I++)hn(u[I],f,g,w,y)},v=u=>{if(u.shapeFlag&6)return v(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const f=m(u.anchor||u.el),g=f&&f[Xo];return g?m(g):f};let _=!1;const C=(u,f,g)=>{u==null?f._vnode&&hn(f._vnode,null,null,!0):x(f._vnode||null,u,f,null,null,null,g),f._vnode=u,_||(_=!0,Vs(),fa(),_=!1)},R={p:x,um:hn,m:zn,r:kn,mt:H,mc:$,pc:K,pbc:bn,n:v,o:n};return{render:C,hydrate:void 0,createApp:wi(C)}}function Xt({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function we({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ji(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Oa(n,e,t=!1){const s=n.children,r=e.children;if(q(s)&&q(r))for(let a=0;a<s.length;a++){const o=s[a];let l=r[a];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[a]=de(r[a]),l.el=o.el),!t&&l.patchFlag!==-2&&Oa(o,l)),l.type===Ht&&(l.el=o.el),l.type===be&&!l.el&&(l.el=o.el)}}function Ai(n){const e=n.slice(),t=[0];let s,r,a,o,l;const i=n.length;for(s=0;s<i;s++){const d=n[s];if(d!==0){if(r=t[t.length-1],n[r]<d){e[s]=r,t.push(s);continue}for(a=0,o=t.length-1;a<o;)l=a+o>>1,n[t[l]]<d?a=l+1:o=l;d<n[t[a]]&&(a>0&&(e[s]=t[a-1]),t[a]=s)}}for(a=t.length,o=t[a-1];a-- >0;)t[a]=o,o=e[o];return t}function Fa(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fa(e)}function er(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const zi=Symbol.for("v-scx"),Mi=()=>qn(zi);function Qe(n,e,t){return Ra(n,e,t)}function Ra(n,e,t=cn){const{immediate:s,deep:r,flush:a,once:o}=t,l=En({},t),i=e&&s||!e&&a!=="post";let d;if(at){if(a==="sync"){const h=Mi();d=h.__watcherHandles||(h.__watcherHandles=[])}else if(!i){const h=()=>{};return h.stop=Zn,h.resume=Zn,h.pause=Zn,h}}const p=_n;l.call=(h,b,x)=>ee(h,p,b,x);let c=!1;a==="post"?l.scheduler=h=>{Ln(h,p&&p.suspense)}:a!=="sync"&&(c=!0,l.scheduler=(h,b)=>{b?h():As(h)}),l.augmentJob=h=>{e&&(h.flags|=4),c&&(h.flags|=2,p&&(h.id=p.uid,h.i=p))};const m=Vo(n,e,l);return at&&(d?d.push(m):i&&m()),m}function Ii(n,e,t){const s=this.proxy,r=gn(n)?n.includes(".")?Da(s,n):()=>s[n]:n.bind(s,s);let a;Y(e)?a=e:(a=e.handler,t=e);const o=pt(this),l=Ra(r,a.bind(s),t);return o(),l}function Da(n,e){const t=e.split(".");return()=>{let s=n;for(let r=0;r<t.length&&s;r++)s=s[t[r]];return s}}const Oi=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Hn(e)}Modifiers`]||n[`${_e(e)}Modifiers`];function Fi(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||cn;let r=t;const a=e.startsWith("update:"),o=a&&Oi(s,e.slice(7));o&&(o.trim&&(r=t.map(p=>gn(p)?p.trim():p)),o.number&&(r=t.map(mo)));let l,i=s[l=Gt(e)]||s[l=Gt(Hn(e))];!i&&a&&(i=s[l=Gt(_e(e))]),i&&ee(i,n,6,r);const d=s[l+"Once"];if(d){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,ee(d,n,6,r)}}function La(n,e,t=!1){const s=e.emitsCache,r=s.get(n);if(r!==void 0)return r;const a=n.emits;let o={},l=!1;if(!Y(n)){const i=d=>{const p=La(d,e,!0);p&&(l=!0,En(o,p))};!t&&e.mixins.length&&e.mixins.forEach(i),n.extends&&i(n.extends),n.mixins&&n.mixins.forEach(i)}return!a&&!l?(pn(n)&&s.set(n,null),null):(q(a)?a.forEach(i=>o[i]=null):En(o,a),pn(n)&&s.set(n,o),o)}function Wt(n,e){return!n||!zt(e)?!1:(e=e.slice(2).replace(/Once$/,""),sn(n,e[0].toLowerCase()+e.slice(1))||sn(n,_e(e))||sn(n,e))}function tr(n){const{type:e,vnode:t,proxy:s,withProxy:r,propsOptions:[a],slots:o,attrs:l,emit:i,render:d,renderCache:p,props:c,data:m,setupState:h,ctx:b,inheritAttrs:x}=n,S=Ct(n);let z,M;try{if(t.shapeFlag&4){const E=r||s,U=E;z=Qn(d.call(U,E,p,c,h,m,b)),M=l}else{const E=e;z=Qn(E.length>1?E(c,{attrs:l,slots:o,emit:i}):E(c,null)),M=e.props?l:Ri(l)}}catch(E){Xe.length=0,Lt(E,n,1),z=an(be)}let D=z;if(M&&x!==!1){const E=Object.keys(M),{shapeFlag:U}=D;E.length&&U&7&&(a&&E.some(vs)&&(M=Di(M,a)),D=De(D,M,!1,!0))}return t.dirs&&(D=De(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(t.dirs):t.dirs),t.transition&&zs(D,t.transition),z=D,Ct(S),z}const Ri=n=>{let e;for(const t in n)(t==="class"||t==="style"||zt(t))&&((e||(e={}))[t]=n[t]);return e},Di=(n,e)=>{const t={};for(const s in n)(!vs(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function Li(n,e,t){const{props:s,children:r,component:a}=n,{props:o,children:l,patchFlag:i}=e,d=a.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&i>=0){if(i&1024)return!0;if(i&16)return s?sr(s,o,d):!!o;if(i&8){const p=e.dynamicProps;for(let c=0;c<p.length;c++){const m=p[c];if(o[m]!==s[m]&&!Wt(d,m))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?sr(s,o,d):!0:!!o;return!1}function sr(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let r=0;r<s.length;r++){const a=s[r];if(e[a]!==n[a]&&!Wt(t,a))return!0}return!1}function Bi({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ba=n=>n.__isSuspense;function Wi(n,e){e&&e.pendingBranch?q(n)?e.effects.push(...n):e.effects.push(n):Qo(n)}const wn=Symbol.for("v-fgt"),Ht=Symbol.for("v-txt"),be=Symbol.for("v-cmt"),gt=Symbol.for("v-stc"),Xe=[];let Bn=null;function fn(n=!1){Xe.push(Bn=n?null:[])}function Hi(){Xe.pop(),Bn=Xe[Xe.length-1]||null}let rt=1;function rr(n,e=!1){rt+=n,n<0&&Bn&&e&&(Bn.hasOnce=!0)}function Wa(n){return n.dynamicChildren=rt>0?Bn||Ae:null,Hi(),rt>0&&Bn&&Bn.push(n),n}function vn(n,e,t,s,r,a){return Wa(A(n,e,t,s,r,a,!0))}function Os(n,e,t,s,r){return Wa(an(n,e,t,s,r,!0))}function jt(n){return n?n.__v_isVNode===!0:!1}function Ue(n,e){return n.type===e.type&&n.key===e.key}const Ha=({key:n})=>n??null,bt=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?gn(n)||Cn(n)||Y(n)?{i:Un,r:n,k:e,f:!!t}:n:null);function A(n,e=null,t=null,s=0,r=null,a=n===wn?0:1,o=!1,l=!1){const i={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ha(e),ref:e&&bt(e),scopeId:ha,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Un};return l?(Fs(i,t),a&128&&n.normalize(i)):t&&(i.shapeFlag|=gn(t)?8:16),rt>0&&!o&&Bn&&(i.patchFlag>0||a&6)&&i.patchFlag!==32&&Bn.push(i),i}const an=Ui;function Ui(n,e=null,t=null,s=0,r=null,a=!1){if((!n||n===di)&&(n=be),jt(n)){const l=De(n,e,!0);return t&&Fs(l,t),rt>0&&!a&&Bn&&(l.shapeFlag&6?Bn[Bn.indexOf(n)]=l:Bn.push(l)),l.patchFlag=-2,l}if(Zi(n)&&(n=n.__vccOpts),e){e=Ni(e);let{class:l,style:i}=e;l&&!gn(l)&&(e.class=ke(l)),pn(i)&&(Ps(i)&&!q(i)&&(i=En({},i)),e.style=Re(i))}const o=gn(n)?1:Ba(n)?128:Zo(n)?64:pn(n)?4:Y(n)?2:0;return A(n,e,t,s,r,o,a,!0)}function Ni(n){return n?Ps(n)||Pa(n)?En({},n):n:null}function De(n,e,t=!1,s=!1){const{props:r,ref:a,patchFlag:o,children:l,transition:i}=n,d=e?qi(r||{},e):r,p={__v_isVNode:!0,__v_skip:!0,type:n.type,props:d,key:d&&Ha(d),ref:e&&e.ref?t&&a?q(a)?a.concat(bt(e)):[a,bt(e)]:bt(e):a,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==wn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:i,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&De(n.ssContent),ssFallback:n.ssFallback&&De(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return i&&s&&zs(p,i.clone(p)),p}function us(n=" ",e=0){return an(Ht,null,n,e)}function xt(n,e){const t=an(gt,null,n);return t.staticCount=e,t}function ar(n="",e=!1){return e?(fn(),Os(be,null,n)):an(be,null,n)}function Qn(n){return n==null||typeof n=="boolean"?an(be):q(n)?an(wn,null,n.slice()):jt(n)?de(n):an(Ht,null,String(n))}function de(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:De(n)}function Fs(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(q(e))t=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Fs(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Pa(e)?e._ctx=Un:r===3&&Un&&(Un.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:Un},t=32):(e=String(e),s&64?(t=16,e=[us(e)]):t=8);n.children=e,n.shapeFlag|=t}function qi(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ke([e.class,s.class]));else if(r==="style")e.style=Re([e.style,s.style]);else if(zt(r)){const a=e[r],o=s[r];o&&a!==o&&!(q(a)&&a.includes(o))&&(e[r]=a?[].concat(a,o):o)}else r!==""&&(e[r]=s[r])}return e}function Kn(n,e,t,s=null){ee(n,e,7,[t,s])}const Gi=_a();let $i=0;function Yi(n,e,t){const s=n.type,r=(e?e.appContext:n.appContext)||Gi,a={uid:$i++,vnode:n,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Aa(s,r),emitsOptions:La(s,r),emit:null,emitted:null,propsDefaults:cn,inheritAttrs:s.inheritAttrs,ctx:cn,data:cn,props:cn,attrs:cn,slots:cn,refs:cn,setupState:cn,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Fi.bind(null,a),n.ce&&n.ce(a),a}let _n=null,At,fs;{const n=Ft(),e=(t,s)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(s),a=>{r.length>1?r.forEach(o=>o(a)):r[0](a)}};At=e("__VUE_INSTANCE_SETTERS__",t=>_n=t),fs=e("__VUE_SSR_SETTERS__",t=>at=t)}const pt=n=>{const e=_n;return At(n),n.scope.on(),()=>{n.scope.off(),At(e)}},or=()=>{_n&&_n.scope.off(),At(null)};function Ua(n){return n.vnode.shapeFlag&4}let at=!1;function Vi(n,e=!1,t=!1){e&&fs(e);const{props:s,children:r}=n.vnode,a=Ua(n);yi(n,s,a,e),_i(n,r,t||e);const o=a?Ki(n,e):void 0;return e&&fs(!1),o}function Ki(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,fi);const{setup:s}=t;if(s){oe();const r=n.setupContext=s.length>1?Qi(n):null,a=pt(n),o=lt(s,n,0,[n.props,r]),l=Wr(o);if(ie(),a(),(l||n.sp)&&!Ke(n)&&ba(n),l){if(o.then(or,or),e)return o.then(i=>{ir(n,i)}).catch(i=>{Lt(i,n,0)});n.asyncDep=o}else ir(n,o)}else Na(n)}function ir(n,e,t){Y(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pn(e)&&(n.setupState=pa(e)),Na(n)}function Na(n,e,t){const s=n.type;n.render||(n.render=s.render||Zn);{const r=pt(n);oe();try{mi(n)}finally{ie(),r()}}}const Ji={get(n,e){return Tn(n,"get",""),n[e]}};function Qi(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ji),slots:n.slots,emit:n.emit,expose:e}}function Rs(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(pa(Ho(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Je)return Je[t](n)},has(e,t){return t in e||t in Je}})):n.proxy}function Xi(n,e=!0){return Y(n)?n.displayName||n.name:n.name||e&&n.__name}function Zi(n){return Y(n)&&"__vccOpts"in n}const On=(n,e)=>$o(n,e,at);function qa(n,e,t){const s=arguments.length;return s===2?pn(e)&&!q(e)?jt(e)?an(n,null,[e]):an(n,e):an(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&jt(t)&&(t=[t]),an(n,e,t))}const nl="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ms;const lr=typeof window<"u"&&window.trustedTypes;if(lr)try{ms=lr.createPolicy("vue",{createHTML:n=>n})}catch{}const Ga=ms?n=>ms.createHTML(n):n=>n,el="http://www.w3.org/2000/svg",tl="http://www.w3.org/1998/Math/MathML",re=typeof document<"u"?document:null,cr=re&&re.createElement("template"),sl={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const r=e==="svg"?re.createElementNS(el,n):e==="mathml"?re.createElementNS(tl,n):t?re.createElement(n,{is:t}):re.createElement(n);return n==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:n=>re.createTextNode(n),createComment:n=>re.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>re.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,r,a){const o=t?t.previousSibling:e.lastChild;if(r&&(r===a||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===a||!(r=r.nextSibling)););else{cr.innerHTML=Ga(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const l=cr.content;if(s==="svg"||s==="mathml"){const i=l.firstChild;for(;i.firstChild;)l.appendChild(i.firstChild);l.removeChild(i)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},rl=Symbol("_vtc");function al(n,e,t){const s=n[rl];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const pr=Symbol("_vod"),ol=Symbol("_vsh"),il=Symbol(""),ll=/(^|;)\s*display\s*:/;function cl(n,e,t){const s=n.style,r=gn(t);let a=!1;if(t&&!r){if(e)if(gn(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&vt(s,l,"")}else for(const o in e)t[o]==null&&vt(s,o,"");for(const o in t)o==="display"&&(a=!0),vt(s,o,t[o])}else if(r){if(e!==t){const o=s[il];o&&(t+=";"+o),s.cssText=t,a=ll.test(t)}}else e&&n.removeAttribute("style");pr in n&&(n[pr]=a?s.display:"",n[ol]&&(s.display="none"))}const dr=/\s*!important$/;function vt(n,e,t){if(q(t))t.forEach(s=>vt(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=pl(n,e);dr.test(t)?n.setProperty(_e(s),t.replace(dr,""),"important"):n[s]=t}}const ur=["Webkit","Moz","ms"],Zt={};function pl(n,e){const t=Zt[e];if(t)return t;let s=Hn(e);if(s!=="filter"&&s in n)return Zt[e]=s;s=Ot(s);for(let r=0;r<ur.length;r++){const a=ur[r]+s;if(a in n)return Zt[e]=a}return e}const fr="http://www.w3.org/1999/xlink";function mr(n,e,t,s,r,a=wo(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(fr,e.slice(6,e.length)):n.setAttributeNS(fr,e,t):t==null||a&&!qr(t)?n.removeAttribute(e):n.setAttribute(e,a?"":xe(t)?String(t):t)}function hr(n,e,t,s,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ga(t):t);return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?n.getAttribute("value")||"":n.value,i=t==null?n.type==="checkbox"?"on":"":String(t);(l!==i||!("_value"in n))&&(n.value=i),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=qr(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function dl(n,e,t,s){n.addEventListener(e,t,s)}function ul(n,e,t,s){n.removeEventListener(e,t,s)}const gr=Symbol("_vei");function fl(n,e,t,s,r=null){const a=n[gr]||(n[gr]={}),o=a[e];if(s&&o)o.value=s;else{const[l,i]=ml(e);if(s){const d=a[e]=bl(s,r);dl(n,l,d,i)}else o&&(ul(n,l,o,i),a[e]=void 0)}}const br=/(?:Once|Passive|Capture)$/;function ml(n){let e;if(br.test(n)){e={};let s;for(;s=n.match(br);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):_e(n.slice(2)),e]}let ns=0;const hl=Promise.resolve(),gl=()=>ns||(hl.then(()=>ns=0),ns=Date.now());function bl(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;ee(xl(s,t.value),e,5,[s])};return t.value=n,t.attached=gl(),t}function xl(n,e){if(q(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const xr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,vl=(n,e,t,s,r,a)=>{const o=r==="svg";e==="class"?al(n,s,o):e==="style"?cl(n,t,s):zt(e)?vs(e)||fl(n,e,t,s,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wl(n,e,s,o))?(hr(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&mr(n,e,s,o,a,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!gn(s))?hr(n,Hn(e),s,a,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),mr(n,e,s,o))};function wl(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&xr(e)&&Y(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return xr(e)&&gn(t)?!1:e in n}const yl=En({patchProp:vl},sl);let vr;function kl(){return vr||(vr=Ei(yl))}const Sl=(...n)=>{const e=kl().createApp(...n),{mount:t}=e;return e.mount=s=>{const r=_l(s);if(!r)return;const a=e._component;!Y(a)&&!a.render&&!a.template&&(a.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Tl(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Tl(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function _l(n){return gn(n)?document.querySelector(n):n}function $a(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var wt={exports:{}},Cl=wt.exports,wr;function El(){return wr||(wr=1,function(n,e){(function(t,s){n.exports=s()})(Cl,function(){return function(t){function s(a){if(r[a])return r[a].exports;var o=r[a]={exports:{},id:a,loaded:!1};return t[a].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}var r={};return s.m=t,s.c=r,s.p="dist/",s(0)}([function(t,s,r){function a(H){return H&&H.__esModule?H:{default:H}}var o=Object.assign||function(H){for(var dn=1;dn<arguments.length;dn++){var nn=arguments[dn];for(var Q in nn)Object.prototype.hasOwnProperty.call(nn,Q)&&(H[Q]=nn[Q])}return H},l=r(1),i=(a(l),r(6)),d=a(i),p=r(7),c=a(p),m=r(8),h=a(m),b=r(9),x=a(b),S=r(10),z=a(S),M=r(11),D=a(M),E=r(14),U=a(E),G=[],J=!1,$={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},mn=function(){var H=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(H&&(J=!0),J)return G=(0,D.default)(G,$),(0,z.default)(G,$.once),G},bn=function(){G=(0,U.default)(),mn()},L=function(){G.forEach(function(H,dn){H.node.removeAttribute("data-aos"),H.node.removeAttribute("data-aos-easing"),H.node.removeAttribute("data-aos-duration"),H.node.removeAttribute("data-aos-delay")})},F=function(H){return H===!0||H==="mobile"&&x.default.mobile()||H==="phone"&&x.default.phone()||H==="tablet"&&x.default.tablet()||typeof H=="function"&&H()===!0},V=function(H){$=o($,H),G=(0,U.default)();var dn=document.all&&!window.atob;return F($.disable)||dn?L():($.disableMutationObserver||h.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),$.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",$.easing),document.querySelector("body").setAttribute("data-aos-duration",$.duration),document.querySelector("body").setAttribute("data-aos-delay",$.delay),$.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?mn(!0):$.startEvent==="load"?window.addEventListener($.startEvent,function(){mn(!0)}):document.addEventListener($.startEvent,function(){mn(!0)}),window.addEventListener("resize",(0,c.default)(mn,$.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(mn,$.debounceDelay,!0)),window.addEventListener("scroll",(0,d.default)(function(){(0,z.default)(G,$.once)},$.throttleDelay)),$.disableMutationObserver||h.default.ready("[data-aos]",bn),G)};t.exports={init:V,refresh:mn,refreshHard:bn}},function(t,s){},,,,,function(t,s){(function(r){function a(F,V,H){function dn(g){var w=xn,y=Pn;return xn=Pn=void 0,R=g,v=F.apply(y,w)}function nn(g){return R=g,_=setTimeout(yn,V),X?dn(g):v}function Q(g){var w=g-C,y=g-R,k=V-w;return u?bn(k,un-y):k}function K(g){var w=g-C,y=g-R;return C===void 0||w>=V||w<0||u&&y>=un}function yn(){var g=L();return K(g)?Fn(g):void(_=setTimeout(yn,Q(g)))}function Fn(g){return _=void 0,f&&xn?dn(g):(xn=Pn=void 0,v)}function zn(){_!==void 0&&clearTimeout(_),R=0,xn=C=Pn=_=void 0}function hn(){return _===void 0?v:Fn(L())}function kn(){var g=L(),w=K(g);if(xn=arguments,Pn=this,C=g,w){if(_===void 0)return nn(C);if(u)return _=setTimeout(yn,V),dn(C)}return _===void 0&&(_=setTimeout(yn,V)),v}var xn,Pn,un,v,_,C,R=0,X=!1,u=!1,f=!0;if(typeof F!="function")throw new TypeError(m);return V=p(V)||0,l(H)&&(X=!!H.leading,u="maxWait"in H,un=u?mn(p(H.maxWait)||0,V):un,f="trailing"in H?!!H.trailing:f),kn.cancel=zn,kn.flush=hn,kn}function o(F,V,H){var dn=!0,nn=!0;if(typeof F!="function")throw new TypeError(m);return l(H)&&(dn="leading"in H?!!H.leading:dn,nn="trailing"in H?!!H.trailing:nn),a(F,V,{leading:dn,maxWait:V,trailing:nn})}function l(F){var V=typeof F>"u"?"undefined":c(F);return!!F&&(V=="object"||V=="function")}function i(F){return!!F&&(typeof F>"u"?"undefined":c(F))=="object"}function d(F){return(typeof F>"u"?"undefined":c(F))=="symbol"||i(F)&&$.call(F)==b}function p(F){if(typeof F=="number")return F;if(d(F))return h;if(l(F)){var V=typeof F.valueOf=="function"?F.valueOf():F;F=l(V)?V+"":V}if(typeof F!="string")return F===0?F:+F;F=F.replace(x,"");var H=z.test(F);return H||M.test(F)?D(F.slice(2),H?2:8):S.test(F)?h:+F}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(F){return typeof F}:function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},m="Expected a function",h=NaN,b="[object Symbol]",x=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,M=/^0o[0-7]+$/i,D=parseInt,E=(typeof r>"u"?"undefined":c(r))=="object"&&r&&r.Object===Object&&r,U=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,G=E||U||Function("return this")(),J=Object.prototype,$=J.toString,mn=Math.max,bn=Math.min,L=function(){return G.Date.now()};t.exports=o}).call(s,function(){return this}())},function(t,s){(function(r){function a(L,F,V){function H(f){var g=kn,w=xn;return kn=xn=void 0,C=f,un=L.apply(w,g)}function dn(f){return C=f,v=setTimeout(K,F),R?H(f):un}function nn(f){var g=f-_,w=f-C,y=F-g;return X?mn(y,Pn-w):y}function Q(f){var g=f-_,w=f-C;return _===void 0||g>=F||g<0||X&&w>=Pn}function K(){var f=bn();return Q(f)?yn(f):void(v=setTimeout(K,nn(f)))}function yn(f){return v=void 0,u&&kn?H(f):(kn=xn=void 0,un)}function Fn(){v!==void 0&&clearTimeout(v),C=0,kn=_=xn=v=void 0}function zn(){return v===void 0?un:yn(bn())}function hn(){var f=bn(),g=Q(f);if(kn=arguments,xn=this,_=f,g){if(v===void 0)return dn(_);if(X)return v=setTimeout(K,F),H(_)}return v===void 0&&(v=setTimeout(K,F)),un}var kn,xn,Pn,un,v,_,C=0,R=!1,X=!1,u=!0;if(typeof L!="function")throw new TypeError(c);return F=d(F)||0,o(V)&&(R=!!V.leading,X="maxWait"in V,Pn=X?$(d(V.maxWait)||0,F):Pn,u="trailing"in V?!!V.trailing:u),hn.cancel=Fn,hn.flush=zn,hn}function o(L){var F=typeof L>"u"?"undefined":p(L);return!!L&&(F=="object"||F=="function")}function l(L){return!!L&&(typeof L>"u"?"undefined":p(L))=="object"}function i(L){return(typeof L>"u"?"undefined":p(L))=="symbol"||l(L)&&J.call(L)==h}function d(L){if(typeof L=="number")return L;if(i(L))return m;if(o(L)){var F=typeof L.valueOf=="function"?L.valueOf():L;L=o(F)?F+"":F}if(typeof L!="string")return L===0?L:+L;L=L.replace(b,"");var V=S.test(L);return V||z.test(L)?M(L.slice(2),V?2:8):x.test(L)?m:+L}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},c="Expected a function",m=NaN,h="[object Symbol]",b=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,z=/^0o[0-7]+$/i,M=parseInt,D=(typeof r>"u"?"undefined":p(r))=="object"&&r&&r.Object===Object&&r,E=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,U=D||E||Function("return this")(),G=Object.prototype,J=G.toString,$=Math.max,mn=Math.min,bn=function(){return U.Date.now()};t.exports=a}).call(s,function(){return this}())},function(t,s){function r(p){var c=void 0,m=void 0;for(c=0;c<p.length;c+=1)if(m=p[c],m.dataset&&m.dataset.aos||m.children&&r(m.children))return!0;return!1}function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!a()}function l(p,c){var m=window.document,h=a(),b=new h(i);d=c,b.observe(m.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function i(p){p&&p.forEach(function(c){var m=Array.prototype.slice.call(c.addedNodes),h=Array.prototype.slice.call(c.removedNodes),b=m.concat(h);if(r(b))return d()})}Object.defineProperty(s,"__esModule",{value:!0});var d=function(){};s.default={isSupported:o,ready:l}},function(t,s){function r(m,h){if(!(m instanceof h))throw new TypeError("Cannot call a class as a function")}function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var o=function(){function m(h,b){for(var x=0;x<b.length;x++){var S=b[x];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(h,S.key,S)}}return function(h,b,x){return b&&m(h.prototype,b),x&&m(h,x),h}}(),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function m(){r(this,m)}return o(m,[{key:"phone",value:function(){var h=a();return!(!l.test(h)&&!i.test(h.substr(0,4)))}},{key:"mobile",value:function(){var h=a();return!(!d.test(h)&&!p.test(h.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),m}();s.default=new c},function(t,s){Object.defineProperty(s,"__esModule",{value:!0});var r=function(o,l,i){var d=o.node.getAttribute("data-aos-once");l>o.position?o.node.classList.add("aos-animate"):typeof d<"u"&&(d==="false"||!i&&d!=="true")&&o.node.classList.remove("aos-animate")},a=function(o,l){var i=window.pageYOffset,d=window.innerHeight;o.forEach(function(p,c){r(p,d+i,l)})};s.default=a},function(t,s,r){function a(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(s,"__esModule",{value:!0});var o=r(12),l=a(o),i=function(d,p){return d.forEach(function(c,m){c.node.classList.add("aos-init"),c.position=(0,l.default)(c.node,p.offset)}),d};s.default=i},function(t,s,r){function a(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(s,"__esModule",{value:!0});var o=r(13),l=a(o),i=function(d,p){var c=0,m=0,h=window.innerHeight,b={offset:d.getAttribute("data-aos-offset"),anchor:d.getAttribute("data-aos-anchor"),anchorPlacement:d.getAttribute("data-aos-anchor-placement")};switch(b.offset&&!isNaN(b.offset)&&(m=parseInt(b.offset)),b.anchor&&document.querySelectorAll(b.anchor)&&(d=document.querySelectorAll(b.anchor)[0]),c=(0,l.default)(d).top,b.anchorPlacement){case"top-bottom":break;case"center-bottom":c+=d.offsetHeight/2;break;case"bottom-bottom":c+=d.offsetHeight;break;case"top-center":c+=h/2;break;case"bottom-center":c+=h/2+d.offsetHeight;break;case"center-center":c+=h/2+d.offsetHeight/2;break;case"top-top":c+=h;break;case"bottom-top":c+=d.offsetHeight+h;break;case"center-top":c+=d.offsetHeight/2+h}return b.anchorPlacement||b.offset||isNaN(p)||(m=p),c+m};s.default=i},function(t,s){Object.defineProperty(s,"__esModule",{value:!0});var r=function(a){for(var o=0,l=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)o+=a.offsetLeft-(a.tagName!="BODY"?a.scrollLeft:0),l+=a.offsetTop-(a.tagName!="BODY"?a.scrollTop:0),a=a.offsetParent;return{top:l,left:o}};s.default=r},function(t,s){Object.defineProperty(s,"__esModule",{value:!0});var r=function(a){return a=a||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(a,function(o){return{node:o}})};s.default=r}])})}(wt)),wt.exports}var Pl=El();const Ds=$a(Pl);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const je=typeof document<"u";function Ya(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function jl(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Ya(n.default)}const en=Object.assign;function es(n,e){const t={};for(const s in e){const r=e[s];t[s]=Gn(r)?r.map(n):n(r)}return t}const Ze=()=>{},Gn=Array.isArray,Va=/#/g,Al=/&/g,zl=/\//g,Ml=/=/g,Il=/\?/g,Ka=/\+/g,Ol=/%5B/g,Fl=/%5D/g,Ja=/%5E/g,Rl=/%60/g,Qa=/%7B/g,Dl=/%7C/g,Xa=/%7D/g,Ll=/%20/g;function Ls(n){return encodeURI(""+n).replace(Dl,"|").replace(Ol,"[").replace(Fl,"]")}function Bl(n){return Ls(n).replace(Qa,"{").replace(Xa,"}").replace(Ja,"^")}function hs(n){return Ls(n).replace(Ka,"%2B").replace(Ll,"+").replace(Va,"%23").replace(Al,"%26").replace(Rl,"`").replace(Qa,"{").replace(Xa,"}").replace(Ja,"^")}function Wl(n){return hs(n).replace(Ml,"%3D")}function Hl(n){return Ls(n).replace(Va,"%23").replace(Il,"%3F")}function Ul(n){return n==null?"":Hl(n).replace(zl,"%2F")}function ot(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Nl=/\/$/,ql=n=>n.replace(Nl,"");function ts(n,e,t="/"){let s,r={},a="",o="";const l=e.indexOf("#");let i=e.indexOf("?");return l<i&&l>=0&&(i=-1),i>-1&&(s=e.slice(0,i),a=e.slice(i+1,l>-1?l:e.length),r=n(a)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Vl(s??e,t),{fullPath:s+(a&&"?")+a+o,path:s,query:r,hash:ot(o)}}function Gl(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function yr(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function $l(n,e,t){const s=e.matched.length-1,r=t.matched.length-1;return s>-1&&s===r&&Le(e.matched[s],t.matched[r])&&Za(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Le(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Za(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Yl(n[t],e[t]))return!1;return!0}function Yl(n,e){return Gn(n)?kr(n,e):Gn(e)?kr(e,n):n===e}function kr(n,e){return Gn(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function Vl(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let a=t.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")a>1&&a--;else break;return t.slice(0,a).join("/")+"/"+s.slice(o).join("/")}const ce={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var it;(function(n){n.pop="pop",n.push="push"})(it||(it={}));var nt;(function(n){n.back="back",n.forward="forward",n.unknown=""})(nt||(nt={}));function Kl(n){if(!n)if(je){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ql(n)}const Jl=/^[^#]+#/;function Ql(n,e){return n.replace(Jl,"#")+e}function Xl(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const Ut=()=>({left:window.scrollX,top:window.scrollY});function Zl(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Xl(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Sr(n,e){return(history.state?history.state.position-e:-1)+n}const gs=new Map;function nc(n,e){gs.set(n,e)}function ec(n){const e=gs.get(n);return gs.delete(n),e}let tc=()=>location.protocol+"//"+location.host;function no(n,e){const{pathname:t,search:s,hash:r}=e,a=n.indexOf("#");if(a>-1){let l=r.includes(n.slice(a))?n.slice(a).length:1,i=r.slice(l);return i[0]!=="/"&&(i="/"+i),yr(i,"")}return yr(t,n)+s+r}function sc(n,e,t,s){let r=[],a=[],o=null;const l=({state:m})=>{const h=no(n,location),b=t.value,x=e.value;let S=0;if(m){if(t.value=h,e.value=m,o&&o===b){o=null;return}S=x?m.position-x.position:0}else s(h);r.forEach(z=>{z(t.value,b,{delta:S,type:it.pop,direction:S?S>0?nt.forward:nt.back:nt.unknown})})};function i(){o=t.value}function d(m){r.push(m);const h=()=>{const b=r.indexOf(m);b>-1&&r.splice(b,1)};return a.push(h),h}function p(){const{history:m}=window;m.state&&m.replaceState(en({},m.state,{scroll:Ut()}),"")}function c(){for(const m of a)m();a=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:i,listen:d,destroy:c}}function Tr(n,e,t,s=!1,r=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:r?Ut():null}}function rc(n){const{history:e,location:t}=window,s={value:no(n,t)},r={value:e.state};r.value||a(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function a(i,d,p){const c=n.indexOf("#"),m=c>-1?(t.host&&document.querySelector("base")?n:n.slice(c))+i:tc()+n+i;try{e[p?"replaceState":"pushState"](d,"",m),r.value=d}catch(h){console.error(h),t[p?"replace":"assign"](m)}}function o(i,d){const p=en({},e.state,Tr(r.value.back,i,r.value.forward,!0),d,{position:r.value.position});a(i,p,!0),s.value=i}function l(i,d){const p=en({},r.value,e.state,{forward:i,scroll:Ut()});a(p.current,p,!0);const c=en({},Tr(s.value,i,null),{position:p.position+1},d);a(i,c,!1),s.value=i}return{location:s,state:r,push:l,replace:o}}function ac(n){n=Kl(n);const e=rc(n),t=sc(n,e.state,e.location,e.replace);function s(a,o=!0){o||t.pauseListeners(),history.go(a)}const r=en({location:"",base:n,go:s,createHref:Ql.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function oc(n){return typeof n=="string"||n&&typeof n=="object"}function eo(n){return typeof n=="string"||typeof n=="symbol"}const to=Symbol("");var _r;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(_r||(_r={}));function Be(n,e){return en(new Error,{type:n,[to]:!0},e)}function se(n,e){return n instanceof Error&&to in n&&(e==null||!!(n.type&e))}const Cr="[^/]+?",ic={sensitive:!1,strict:!1,start:!0,end:!0},lc=/[.+*?^${}()[\]/\\]/g;function cc(n,e){const t=en({},ic,e),s=[];let r=t.start?"^":"";const a=[];for(const d of n){const p=d.length?[]:[90];t.strict&&!d.length&&(r+="/");for(let c=0;c<d.length;c++){const m=d[c];let h=40+(t.sensitive?.25:0);if(m.type===0)c||(r+="/"),r+=m.value.replace(lc,"\\$&"),h+=40;else if(m.type===1){const{value:b,repeatable:x,optional:S,regexp:z}=m;a.push({name:b,repeatable:x,optional:S});const M=z||Cr;if(M!==Cr){h+=10;try{new RegExp(`(${M})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${b}" (${M}): `+E.message)}}let D=x?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;c||(D=S&&d.length<2?`(?:/${D})`:"/"+D),S&&(D+="?"),r+=D,h+=20,S&&(h+=-8),x&&(h+=-20),M===".*"&&(h+=-50)}p.push(h)}s.push(p)}if(t.strict&&t.end){const d=s.length-1;s[d][s[d].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function l(d){const p=d.match(o),c={};if(!p)return null;for(let m=1;m<p.length;m++){const h=p[m]||"",b=a[m-1];c[b.name]=h&&b.repeatable?h.split("/"):h}return c}function i(d){let p="",c=!1;for(const m of n){(!c||!p.endsWith("/"))&&(p+="/"),c=!1;for(const h of m)if(h.type===0)p+=h.value;else if(h.type===1){const{value:b,repeatable:x,optional:S}=h,z=b in d?d[b]:"";if(Gn(z)&&!x)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const M=Gn(z)?z.join("/"):z;if(!M)if(S)m.length<2&&(p.endsWith("/")?p=p.slice(0,-1):c=!0);else throw new Error(`Missing required param "${b}"`);p+=M}}return p||"/"}return{re:o,score:s,keys:a,parse:l,stringify:i}}function pc(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function so(n,e){let t=0;const s=n.score,r=e.score;for(;t<s.length&&t<r.length;){const a=pc(s[t],r[t]);if(a)return a;t++}if(Math.abs(r.length-s.length)===1){if(Er(s))return 1;if(Er(r))return-1}return r.length-s.length}function Er(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const dc={type:0,value:""},uc=/[a-zA-Z0-9_]/;function fc(n){if(!n)return[[]];if(n==="/")return[[dc]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${d}": ${h}`)}let t=0,s=t;const r=[];let a;function o(){a&&r.push(a),a=[]}let l=0,i,d="",p="";function c(){d&&(t===0?a.push({type:0,value:d}):t===1||t===2||t===3?(a.length>1&&(i==="*"||i==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:d,regexp:p,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):e("Invalid state to consume buffer"),d="")}function m(){d+=i}for(;l<n.length;){if(i=n[l++],i==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:i==="/"?(d&&c(),o()):i===":"?(c(),t=1):m();break;case 4:m(),t=s;break;case 1:i==="("?t=2:uc.test(i)?m():(c(),t=0,i!=="*"&&i!=="?"&&i!=="+"&&l--);break;case 2:i===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+i:t=3:p+=i;break;case 3:c(),t=0,i!=="*"&&i!=="?"&&i!=="+"&&l--,p="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${d}"`),c(),o(),r}function mc(n,e,t){const s=cc(fc(n.path),t),r=en(s,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function hc(n,e){const t=[],s=new Map;e=zr({strict:!1,end:!0,sensitive:!1},e);function r(c){return s.get(c)}function a(c,m,h){const b=!h,x=jr(c);x.aliasOf=h&&h.record;const S=zr(e,c),z=[x];if("alias"in c){const E=typeof c.alias=="string"?[c.alias]:c.alias;for(const U of E)z.push(jr(en({},x,{components:h?h.record.components:x.components,path:U,aliasOf:h?h.record:x})))}let M,D;for(const E of z){const{path:U}=E;if(m&&U[0]!=="/"){const G=m.record.path,J=G[G.length-1]==="/"?"":"/";E.path=m.record.path+(U&&J+U)}if(M=mc(E,m,S),h?h.alias.push(M):(D=D||M,D!==M&&D.alias.push(M),b&&c.name&&!Ar(M)&&o(c.name)),ro(M)&&i(M),x.children){const G=x.children;for(let J=0;J<G.length;J++)a(G[J],M,h&&h.children[J])}h=h||M}return D?()=>{o(D)}:Ze}function o(c){if(eo(c)){const m=s.get(c);m&&(s.delete(c),t.splice(t.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=t.indexOf(c);m>-1&&(t.splice(m,1),c.record.name&&s.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function l(){return t}function i(c){const m=xc(c,t);t.splice(m,0,c),c.record.name&&!Ar(c)&&s.set(c.record.name,c)}function d(c,m){let h,b={},x,S;if("name"in c&&c.name){if(h=s.get(c.name),!h)throw Be(1,{location:c});S=h.record.name,b=en(Pr(m.params,h.keys.filter(D=>!D.optional).concat(h.parent?h.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),c.params&&Pr(c.params,h.keys.map(D=>D.name))),x=h.stringify(b)}else if(c.path!=null)x=c.path,h=t.find(D=>D.re.test(x)),h&&(b=h.parse(x),S=h.record.name);else{if(h=m.name?s.get(m.name):t.find(D=>D.re.test(m.path)),!h)throw Be(1,{location:c,currentLocation:m});S=h.record.name,b=en({},m.params,c.params),x=h.stringify(b)}const z=[];let M=h;for(;M;)z.unshift(M.record),M=M.parent;return{name:S,path:x,params:b,matched:z,meta:bc(z)}}n.forEach(c=>a(c));function p(){t.length=0,s.clear()}return{addRoute:a,resolve:d,removeRoute:o,clearRoutes:p,getRoutes:l,getRecordMatcher:r}}function Pr(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function jr(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:gc(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function gc(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function Ar(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function bc(n){return n.reduce((e,t)=>en(e,t.meta),{})}function zr(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function xc(n,e){let t=0,s=e.length;for(;t!==s;){const a=t+s>>1;so(n,e[a])<0?s=a:t=a+1}const r=vc(n);return r&&(s=e.lastIndexOf(r,s-1)),s}function vc(n){let e=n;for(;e=e.parent;)if(ro(e)&&so(n,e)===0)return e}function ro({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function wc(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<s.length;++r){const a=s[r].replace(Ka," "),o=a.indexOf("="),l=ot(o<0?a:a.slice(0,o)),i=o<0?null:ot(a.slice(o+1));if(l in e){let d=e[l];Gn(d)||(d=e[l]=[d]),d.push(i)}else e[l]=i}return e}function Mr(n){let e="";for(let t in n){const s=n[t];if(t=Wl(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(Gn(s)?s.map(a=>a&&hs(a)):[s&&hs(s)]).forEach(a=>{a!==void 0&&(e+=(e.length?"&":"")+t,a!=null&&(e+="="+a))})}return e}function yc(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=Gn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const kc=Symbol(""),Ir=Symbol(""),Nt=Symbol(""),Bs=Symbol(""),bs=Symbol("");function Ne(){let n=[];function e(s){return n.push(s),()=>{const r=n.indexOf(s);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ue(n,e,t,s,r,a=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,i)=>{const d=m=>{m===!1?i(Be(4,{from:t,to:e})):m instanceof Error?i(m):oc(m)?i(Be(2,{from:e,to:m})):(o&&s.enterCallbacks[r]===o&&typeof m=="function"&&o.push(m),l())},p=a(()=>n.call(s&&s.instances[r],e,t,d));let c=Promise.resolve(p);n.length<3&&(c=c.then(d)),c.catch(m=>i(m))})}function ss(n,e,t,s,r=a=>a()){const a=[];for(const o of n)for(const l in o.components){let i=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Ya(i)){const p=(i.__vccOpts||i)[e];p&&a.push(ue(p,t,s,o,l,r))}else{let d=i();a.push(()=>d.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const c=jl(p)?p.default:p;o.mods[l]=p,o.components[l]=c;const h=(c.__vccOpts||c)[e];return h&&ue(h,t,s,o,l,r)()}))}}return a}function Or(n){const e=qn(Nt),t=qn(Bs),s=On(()=>{const i=ne(n.to);return e.resolve(i)}),r=On(()=>{const{matched:i}=s.value,{length:d}=i,p=i[d-1],c=t.matched;if(!p||!c.length)return-1;const m=c.findIndex(Le.bind(null,p));if(m>-1)return m;const h=Fr(i[d-2]);return d>1&&Fr(p)===h&&c[c.length-1].path!==h?c.findIndex(Le.bind(null,i[d-2])):m}),a=On(()=>r.value>-1&&Cc(t.params,s.value.params)),o=On(()=>r.value>-1&&r.value===t.matched.length-1&&Za(t.params,s.value.params));function l(i={}){if(_c(i)){const d=e[ne(n.replace)?"replace":"push"](ne(n.to)).catch(Ze);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:s,href:On(()=>s.value.href),isActive:a,isExactActive:o,navigate:l}}function Sc(n){return n.length===1?n[0]:n}const Tc=ga({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Or,setup(n,{slots:e}){const t=Dt(Or(n)),{options:s}=qn(Nt),r=On(()=>({[Rr(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[Rr(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const a=e.default&&Sc(e.default(t));return n.custom?a:qa("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},a)}}}),ao=Tc;function _c(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Cc(n,e){for(const t in e){const s=e[t],r=n[t];if(typeof s=="string"){if(s!==r)return!1}else if(!Gn(r)||r.length!==s.length||s.some((a,o)=>a!==r[o]))return!1}return!0}function Fr(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Rr=(n,e,t)=>n??e??t,Ec=ga({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=qn(bs),r=On(()=>n.route||s.value),a=qn(Ir,0),o=On(()=>{let d=ne(a);const{matched:p}=r.value;let c;for(;(c=p[d])&&!c.components;)d++;return d}),l=On(()=>r.value.matched[o.value]);ht(Ir,On(()=>o.value+1)),ht(kc,l),ht(bs,r);const i=Te();return Qe(()=>[i.value,l.value,n.name],([d,p,c],[m,h,b])=>{p&&(p.instances[c]=d,h&&h!==p&&d&&d===m&&(p.leaveGuards.size||(p.leaveGuards=h.leaveGuards),p.updateGuards.size||(p.updateGuards=h.updateGuards))),d&&p&&(!h||!Le(p,h)||!m)&&(p.enterCallbacks[c]||[]).forEach(x=>x(d))},{flush:"post"}),()=>{const d=r.value,p=n.name,c=l.value,m=c&&c.components[p];if(!m)return Dr(t.default,{Component:m,route:d});const h=c.props[p],b=h?h===!0?d.params:typeof h=="function"?h(d):h:null,S=qa(m,en({},b,e,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(c.instances[p]=null)},ref:i}));return Dr(t.default,{Component:S,route:d})||S}}});function Dr(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const oo=Ec;function Pc(n){const e=hc(n.routes,n),t=n.parseQuery||wc,s=n.stringifyQuery||Mr,r=n.history,a=Ne(),o=Ne(),l=Ne(),i=Uo(ce);let d=ce;je&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=es.bind(null,v=>""+v),c=es.bind(null,Ul),m=es.bind(null,ot);function h(v,_){let C,R;return eo(v)?(C=e.getRecordMatcher(v),R=_):R=v,e.addRoute(R,C)}function b(v){const _=e.getRecordMatcher(v);_&&e.removeRoute(_)}function x(){return e.getRoutes().map(v=>v.record)}function S(v){return!!e.getRecordMatcher(v)}function z(v,_){if(_=en({},_||i.value),typeof v=="string"){const g=ts(t,v,_.path),w=e.resolve({path:g.path},_),y=r.createHref(g.fullPath);return en(g,w,{params:m(w.params),hash:ot(g.hash),redirectedFrom:void 0,href:y})}let C;if(v.path!=null)C=en({},v,{path:ts(t,v.path,_.path).path});else{const g=en({},v.params);for(const w in g)g[w]==null&&delete g[w];C=en({},v,{params:c(g)}),_.params=c(_.params)}const R=e.resolve(C,_),X=v.hash||"";R.params=p(m(R.params));const u=Gl(s,en({},v,{hash:Bl(X),path:R.path})),f=r.createHref(u);return en({fullPath:u,hash:X,query:s===Mr?yc(v.query):v.query||{}},R,{redirectedFrom:void 0,href:f})}function M(v){return typeof v=="string"?ts(t,v,i.value.path):en({},v)}function D(v,_){if(d!==v)return Be(8,{from:_,to:v})}function E(v){return J(v)}function U(v){return E(en(M(v),{replace:!0}))}function G(v){const _=v.matched[v.matched.length-1];if(_&&_.redirect){const{redirect:C}=_;let R=typeof C=="function"?C(v):C;return typeof R=="string"&&(R=R.includes("?")||R.includes("#")?R=M(R):{path:R},R.params={}),en({query:v.query,hash:v.hash,params:R.path!=null?{}:v.params},R)}}function J(v,_){const C=d=z(v),R=i.value,X=v.state,u=v.force,f=v.replace===!0,g=G(C);if(g)return J(en(M(g),{state:typeof g=="object"?en({},X,g.state):X,force:u,replace:f}),_||C);const w=C;w.redirectedFrom=_;let y;return!u&&$l(s,R,C)&&(y=Be(16,{to:w,from:R}),zn(R,R,!0,!1)),(y?Promise.resolve(y):bn(w,R)).catch(k=>se(k)?se(k,2)?k:Fn(k):K(k,w,R)).then(k=>{if(k){if(se(k,2))return J(en({replace:f},M(k.to),{state:typeof k.to=="object"?en({},X,k.to.state):X,force:u}),_||w)}else k=F(w,R,!0,f,X);return L(w,R,k),k})}function $(v,_){const C=D(v,_);return C?Promise.reject(C):Promise.resolve()}function mn(v){const _=xn.values().next().value;return _&&typeof _.runWithContext=="function"?_.runWithContext(v):v()}function bn(v,_){let C;const[R,X,u]=jc(v,_);C=ss(R.reverse(),"beforeRouteLeave",v,_);for(const g of R)g.leaveGuards.forEach(w=>{C.push(ue(w,v,_))});const f=$.bind(null,v,_);return C.push(f),un(C).then(()=>{C=[];for(const g of a.list())C.push(ue(g,v,_));return C.push(f),un(C)}).then(()=>{C=ss(X,"beforeRouteUpdate",v,_);for(const g of X)g.updateGuards.forEach(w=>{C.push(ue(w,v,_))});return C.push(f),un(C)}).then(()=>{C=[];for(const g of u)if(g.beforeEnter)if(Gn(g.beforeEnter))for(const w of g.beforeEnter)C.push(ue(w,v,_));else C.push(ue(g.beforeEnter,v,_));return C.push(f),un(C)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),C=ss(u,"beforeRouteEnter",v,_,mn),C.push(f),un(C))).then(()=>{C=[];for(const g of o.list())C.push(ue(g,v,_));return C.push(f),un(C)}).catch(g=>se(g,8)?g:Promise.reject(g))}function L(v,_,C){l.list().forEach(R=>mn(()=>R(v,_,C)))}function F(v,_,C,R,X){const u=D(v,_);if(u)return u;const f=_===ce,g=je?history.state:{};C&&(R||f?r.replace(v.fullPath,en({scroll:f&&g&&g.scroll},X)):r.push(v.fullPath,X)),i.value=v,zn(v,_,C,f),Fn()}let V;function H(){V||(V=r.listen((v,_,C)=>{if(!Pn.listening)return;const R=z(v),X=G(R);if(X){J(en(X,{replace:!0,force:!0}),R).catch(Ze);return}d=R;const u=i.value;je&&nc(Sr(u.fullPath,C.delta),Ut()),bn(R,u).catch(f=>se(f,12)?f:se(f,2)?(J(en(M(f.to),{force:!0}),R).then(g=>{se(g,20)&&!C.delta&&C.type===it.pop&&r.go(-1,!1)}).catch(Ze),Promise.reject()):(C.delta&&r.go(-C.delta,!1),K(f,R,u))).then(f=>{f=f||F(R,u,!1),f&&(C.delta&&!se(f,8)?r.go(-C.delta,!1):C.type===it.pop&&se(f,20)&&r.go(-1,!1)),L(R,u,f)}).catch(Ze)}))}let dn=Ne(),nn=Ne(),Q;function K(v,_,C){Fn(v);const R=nn.list();return R.length?R.forEach(X=>X(v,_,C)):console.error(v),Promise.reject(v)}function yn(){return Q&&i.value!==ce?Promise.resolve():new Promise((v,_)=>{dn.add([v,_])})}function Fn(v){return Q||(Q=!v,H(),dn.list().forEach(([_,C])=>v?C(v):_()),dn.reset()),v}function zn(v,_,C,R){const{scrollBehavior:X}=n;if(!je||!X)return Promise.resolve();const u=!C&&ec(Sr(v.fullPath,0))||(R||!C)&&history.state&&history.state.scroll||null;return js().then(()=>X(v,_,u)).then(f=>f&&Zl(f)).catch(f=>K(f,v,_))}const hn=v=>r.go(v);let kn;const xn=new Set,Pn={currentRoute:i,listening:!0,addRoute:h,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:x,resolve:z,options:n,push:E,replace:U,go:hn,back:()=>hn(-1),forward:()=>hn(1),beforeEach:a.add,beforeResolve:o.add,afterEach:l.add,onError:nn.add,isReady:yn,install(v){const _=this;v.component("RouterLink",ao),v.component("RouterView",oo),v.config.globalProperties.$router=_,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ne(i)}),je&&!kn&&i.value===ce&&(kn=!0,E(r.location).catch(X=>{}));const C={};for(const X in ce)Object.defineProperty(C,X,{get:()=>i.value[X],enumerable:!0});v.provide(Nt,_),v.provide(Bs,ia(C)),v.provide(bs,i);const R=v.unmount;xn.add(v),v.unmount=function(){xn.delete(v),xn.size<1&&(d=ce,V&&V(),V=null,i.value=ce,kn=!1,Q=!1),R()}}};function un(v){return v.reduce((_,C)=>_.then(()=>mn(C)),Promise.resolve())}return Pn}function jc(n,e){const t=[],s=[],r=[],a=Math.max(e.matched.length,n.matched.length);for(let o=0;o<a;o++){const l=e.matched[o];l&&(n.matched.find(d=>Le(d,l))?s.push(l):t.push(l));const i=n.matched[o];i&&(e.matched.find(d=>Le(d,i))||r.push(i))}return[t,s,r]}function Ac(){return qn(Nt)}function zc(n){return qn(Bs)}const Mc={__name:"App",setup(n){return(e,t)=>(fn(),Os(ne(oo)))}},Ic="/programmer-heaven/images/logo.jpeg",Ws=(n,e)=>{const t=n.__vccOpts||n;for(const[s,r]of e)t[s]=r;return t},Oc={},Fc={class:"flex items-center justify-between animate-slide-up animate-delay"},Rc={class:"w-20 relative left-5 sm:left-5 sm:w-32"},Dc={class:"flex justify-between w-36 sm:w-48 relative right-3 sm:right-6"};function Lc(n,e){const t=ka("router-link");return fn(),vn("header",null,[A("nav",Fc,[A("div",Rc,[an(t,{to:"/"},{default:he(()=>e[0]||(e[0]=[A("img",{src:Ic,class:"cursor-pointer mt-4 rounded-full hover:scale-110 transition duration-150 ease-in-out",alt:"Logo"},null,-1)])),_:1,__:[0]})]),A("div",Dc,[an(t,{to:"/about-us"},{default:he(()=>e[1]||(e[1]=[A("p",{class:"cursor-pointer"},"About Us",-1)])),_:1,__:[1]}),an(t,{to:"/contact-us"},{default:he(()=>e[2]||(e[2]=[A("p",{class:"cursor-pointer"},"Contact",-1)])),_:1,__:[2]})])])])}const qt=Ws(Oc,[["render",Lc]]),Bc={class:"min-h-20"},Wc={__name:"Typewriter",setup(n){const e=[["Create. Explore.","All in the Coder's Heaven"],["Your Ideas,","Powered by Coder's Heaven"],["Code Freely,","With Coder's Heaven Magic!"],["One App,","Endless Demos."],["Test. Tweak.","Repeat with Coder's Heaven"],["Less Hassle,","More Demos."],["Start Simple,","Build Big with Coder's Heaven"],["Let's Elevate","With Coder's Heaven"],["Prototype Fast,","With Coder's Heaven Power"],["Where Code Meets Creativity","That’s Coder's Heaven!"]],t=Te(null),s=Te(null);let r=0,a;const o=()=>{const[l,i]=e[r];t.value.classList.remove("opacity-100"),s.value.classList.remove("opacity-100"),t.value.classList.add("opacity-0"),s.value.classList.add("opacity-0"),setTimeout(()=>{t.value.textContent=l,s.value.textContent="",t.value.classList.remove("opacity-0"),t.value.classList.add("opacity-100"),setTimeout(()=>{s.value.textContent=i,s.value.classList.remove("opacity-0"),s.value.classList.add("opacity-100")},500)},500),r=(r+1)%e.length,setTimeout(()=>{t.value.classList.remove("opacity-100"),t.value.classList.add("opacity-0"),s.value.classList.remove("opacity-100"),s.value.classList.add("opacity-0")},3e3)};return ct(()=>{o(),a=setInterval(o,4e3)}),wa(()=>{clearInterval(a)}),(l,i)=>(fn(),vn("div",Bc,[A("h2",{class:"font-serif text-center text-xl sm:text-2xl mt-2 opacity-0 transition-opacity duration-700 ease-in-out",ref_key:"part1",ref:t},null,512),A("h2",{class:"font-serif text-center text-xl sm:text-2xl mt-2 opacity-0 transition-opacity duration-700 ease-in-out",ref_key:"part2",ref:s},null,512)]))}},Hc={class:"w-full animate-slide-up animate-delay border-4 border-emerald-500 rounded-2xl p-5"},Uc={class:"mb-6 cursor-pointer"},Nc=["src"],qc={class:"mt-2 sm:mt-1"},Gc={__name:"BlogCard",props:{title:String,image:String,description:String,href:String},setup(n){return(e,t)=>{const s=ka("router-link");return fn(),vn("div",Hc,[an(s,{to:n.href},{default:he(()=>[A("p",Uc,[A("strong",null,Xn(n.title),1)])]),_:1},8,["to"]),an(s,{to:n.href},{default:he(()=>[A("img",{src:n.image,alt:"main image",class:"w-full object-cover rounded-3xl hover:brightness-75"},null,8,Nc)]),_:1},8,["to"]),A("p",qc,Xn(n.description),1),an(s,{to:n.href},{default:he(()=>t[0]||(t[0]=[A("button",{class:"bg-gradient-to-b from-cyan-300 to-emerald-500 px-6 sm:px-10 py-2 sm:py-3 rounded-2xl mt-3 relative cursor-pointer"},[A("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6 absolute left-2 top-1/2 transform -translate-y-1/2"},[A("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})]),A("span",{class:"pl-6"},"Read More")],-1)])),_:1,__:[0]},8,["to"])])}}},$c=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
  <meta charset="UTF-8">\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
  <meta name="description"\r
    content="Learn how to create a modern glassmorphism login form using HTML, Tailwind CSS, and AOS scroll animation. Step-by-step guide for beginners with full source code." />\r
  <meta name="keywords"\r
    content="glassmorphism login form, tailwind css login form, aos scroll animation, modern html form, responsive form, beginner frontend project, html css animation, stylish login design" />\r
  <meta name="author" content="Danny" />\r
  <title>Modern Glassmorphism Contact Form</title>\r
  <!-- AOS CSS -->\r
  <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">\r
      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>\r
\r
  <!-- <link rel="stylesheet" href="glassmorphism-form.css"> -->\r
\r
  <style>\r
\r
    a {\r
      cursor: pointer;\r
    }\r
\r
pre {\r
    background: #f1f5f9;\r
    padding: 1rem;\r
    overflow-x: auto;\r
    border-radius: 0.5rem;\r
}\r
\r
code {\r
    font-family: monospace;\r
}\r
\r
h1,\r
h2,\r
h3 {\r
    margin-top: 2rem;\r
    margin-bottom: 1rem;\r
    font-weight: bold;\r
}\r
\r
ul {\r
    list-style: disc;\r
    margin-left: 1.5rem;\r
}\r
\r
li {\r
    margin-bottom: 0.5rem;\r
}\r
\r
  </style>\r
\r
</head>\r
\r
<body>\r
    <article>\r
  <h1>Create a Stylish Glassmorphism Login Form with Tailwind CSS & AOS</h1>\r
  <p>\r
    Welcome to this beginner-friendly frontend tutorial! In this guide, you'll learn how to build a <strong>beautiful glassmorphism-style login form</strong> using <strong>HTML</strong>, <strong>Tailwind CSS</strong>, and <strong>AOS scroll animation</strong>. This modern UI design is not only eye-catching but also responsive and smooth.\r
  </p>\r
\r
  <h2>💡 What Is Glassmorphism?</h2>\r
  <p>\r
    <strong>Glassmorphism</strong> is a design trend that mimics the look of frosted glass. If you're curious about real-world implementations, check out <a data-router-link="modern-glassmorphism-contact-form-real-world-examples" class="text-blue-400 hover:text-blue-600 underline transition-colors">5 Real-World Websites Using Glassmorphism Design (And Why It Works) 🌐</a>. It features:\r
  </p>\r
  <ul>\r
    <li>A semi-transparent background</li>\r
    <li>A blurred backdrop</li>\r
    <li>Soft rounded corners</li>\r
  </ul>\r
  <p>You'll see this effect in apps like macOS, iOS, and modern web UIs.</p>\r
\r
  <h2>🛠️ Project Requirements</h2>\r
  <ul>\r
    <li>A simple HTML file</li>\r
    <li><a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> via CDN</li>\r
    <li><a href="https://michalsnik.github.io/aos/" target="_blank">AOS Library</a> for animation</li>\r
    <li>A background image (e.g. <code>bg.jpeg</code>)</li>\r
  </ul>\r
\r
  <h2>🧱 Structure and Code Walkthrough</h2>\r
  <h3>1. Page Heading</h3>\r
  <pre><code>&lt;h1 class="text-center text-3xl mt-8"&gt;Modern Glassmorphism Contact Form&lt;/h1&gt;</code></pre>\r
  <ul>\r
    <li><code>text-center</code>: Centers the heading</li>\r
    <li><code>text-3xl</code>: Increases font size</li>\r
    <li><code>mt-8</code>: Adds top margin</li>\r
  </ul>\r
\r
  <h3>2. Background Container</h3>\r
  <pre><code>&lt;div class="flex justify-center items-center h-[80vh] bg-[url('../images/bg.jpeg')] bg-cover bg-center rounded-4xl border-4"&gt;</code></pre>\r
  <ul>\r
    <li>Flexbox centers the form inside</li>\r
    <li><code>bg-[url()]</code> sets background image</li>\r
    <li><code>rounded-4xl</code> adds curves</li>\r
    <li><code>border-4</code> adds a frame</li>\r
  </ul>\r
\r
  <h3>3. The Form Block</h3>\r
  <p>Want to take your form to the next level? Learn how in <a data-router-link="modern-glassmorphism-contact-form-micro-interactions" class="text-purple-400 hover:text-purple-600 underline transition-colors">From Static to Animated: Adding Micro-Interactions to Your Glassmorphism Form ✨</a>.</p>\r
  <pre><code>&lt;form class="w-[60%] backdrop-blur-sm p-6 rounded-3xl" data-aos="fade-up"&gt;</code></pre>\r
  <ul>\r
    <li><code>backdrop-blur-sm</code>: Gives frosted glass effect</li>\r
    <li><code>data-aos="fade-up"</code>: Enables scroll animation</li>\r
  </ul>\r
\r
  <h3>4. Input Fields</h3>\r
  <pre><code>&lt;input type="text" class="bg-white/25 hover:bg-white/40 p-2 text-xl outline-none"&gt;</code></pre>\r
  <ul>\r
    <li><code>bg-white/25</code>: Transparent white background</li>\r
    <li><code>hover:bg-white/40</code>: More visible on hover</li>\r
    <li><code>outline-none</code>: Removes blue focus border</li>\r
  </ul>\r
\r
  <h3>5. Submit Button</h3>\r
  <pre><code>&lt;button class="bg-white/25 hover:bg-white/50 p-4 w-1/2 rounded-full text-xl transition delay-50"&gt;Submit&lt;/button&gt;</code></pre>\r
\r
  <h2>🎞️ Scroll Animation with AOS</h2>\r
  <p>\r
    AOS (Animate On Scroll) is a lightweight library to animate elements as you scroll down. \r
  </p>\r
  <h3>Include the CDN</h3>\r
  <pre><code>&lt;link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"&gt; &lt;script src="https://unpkg.com/aos@2.3.1/dist/aos.js"&gt;&lt;/script&gt; &lt;script&gt;AOS.init();&lt;/script&gt; </code></pre>\r
\r
  <h2>🌟 Why Tailwind CSS?</h2>\r
  <p>\r
    Tailwind CSS is perfect for beginners. It uses utility-first classes so you don't have to write custom CSS. You just combine pre-built classes to style elements directly in your HTML.\r
  </p>\r
\r
  <h2>📦 Complete Source Code</h2>\r
  <pre><code>&lt;!DOCTYPE html&gt; &lt;html lang="en"&gt; &lt;head&gt; &lt;meta charset="UTF-8" /&gt; &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt; &lt;title&gt;Glassmorphism Login Form&lt;/title&gt; &lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt; &lt;link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"&gt; &lt;/head&gt; &lt;body class="bg-gray-100"&gt; &lt;main&gt; &lt;h1 class="text-center text-xl sm:text-3xl mt-8"&gt; Modern Glassmorphism Contact Form Using HTML & Tailwind CSS &lt;/h1&gt; &lt;div class="flex justify-center items-center h-[80vh] mx-auto mt-10 rounded-4xl bg-[url('../images/bg.jpeg')] bg-cover bg-center border-4"&gt; &lt;form class="w-[60%] backdrop-blur-sm flex flex-col rounded-3xl p-6" data-aos="fade-up"&gt; &lt;h2 class="text-center text-2xl mb-8"&gt;Login Form&lt;/h2&gt; &lt;label class="text-xl"&gt;Name&lt;/label&gt; &lt;input type="text" class="p-2 bg-white/25 hover:bg-white/40 mt-2 text-xl outline-none"&gt; &lt;label class="text-xl mt-4"&gt;Email&lt;/label&gt; &lt;input type="email" class="p-2 bg-white/25 hover:bg-white/40 mt-2 text-xl outline-none"&gt; &lt;label class="text-xl mt-4"&gt;Password&lt;/label&gt; &lt;input type="password" class="p-2 bg-white/25 hover:bg-white/40 mt-2 text-xl outline-none"&gt; &lt;button class="p-4 mt-8 w-1/2 mx-auto rounded-full text-xl bg-white/25 hover:bg-white/50 transition delay-50 ease-in-out"&gt;Submit&lt;/button&gt; &lt;/form&gt; &lt;/div&gt; &lt;/main&gt; &lt;script src="https://unpkg.com/aos@2.3.1/dist/aos.js"&gt;&lt;/script&gt; &lt;script&gt;AOS.init();&lt;/script&gt; &lt;/body&gt; &lt;/html&gt; </code></pre>\r
\r
  <h2>📢 Final Words</h2>\r
  <p>\r
    You now have a fully responsive, animated, and modern login form using Tailwind CSS and AOS. You learned about glassmorphism, styling best practices, and how to animate elements on scroll.\r
  </p>\r
  <p>If you're curious about design alternatives, explore <a data-router-link="modern-glassmorphism-contact-form-neurmorphism-comparison" class="text-indigo-400 hover:text-indigo-600 underline transition-colors">Glassmorphism vs. Neumorphism: Which One Should You Choose? 🧐</a></p>\r
  \r
  <div class="bg-white/20 p-6 rounded-xl mt-8 backdrop-blur-sm border border-white/30">\r
    <h3 class="text-xl font-bold mb-4">🔍 More Glassmorphism Resources</h3>\r
    <ul class="space-y-3">\r
      <li>• <a data-router-link="modern-glassmorphism-contact-form-bug-fixes" class="text-amber-500 hover:text-amber-700 underline">How I Fixed 3 Common Glassmorphism Bugs (And How You Can Too!) 🐛</a></li>\r
      <li>• <a data-router-link="modern-glassmorphism-contact-form-fun-facts" class="text-green-500 hover:text-green-700 underline">Fun Facts About Blur Effects in Web Design (You've Never Heard Of!) 🤯</a></li>\r
    </ul>\r
  </div>\r
</article>\r
\r
\r
\r
  </main>\r
\r
  <!-- AOS JS -->\r
  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
  <script>\r
    AOS.init();\r
  <\/script>\r
\r
\r
</body>\r
\r
</html>`,Yc=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <meta name="description"\r
        content="Learn how to create a modern glassmorphism login form using HTML, Tailwind CSS, and AOS scroll animation. Step-by-step guide for beginners with full source code." />\r
    <meta name="keywords"\r
        content="glassmorphism login form, tailwind css login form, aos scroll animation, modern html form, responsive form, beginner frontend project, html css animation, stylish login design" />\r
    <meta name="author" content="Danny" />\r
    <title>Modern Glassmorphism Contact Form</title>\r
    <link rel="stylesheet" href="glassmorphism-form.css">\r
    <style>\r
\r
    a {\r
      cursor: pointer;\r
    }\r
\r
pre {\r
    background: #f1f5f9;\r
    padding: 1rem;\r
    overflow-x: auto;\r
    border-radius: 0.5rem;\r
}\r
\r
code {\r
    font-family: monospace;\r
}\r
\r
h1,\r
h2,\r
h3 {\r
    margin-top: 2rem;\r
    margin-bottom: 1rem;\r
    font-weight: bold;\r
}\r
\r
ul {\r
    list-style: disc;\r
    margin-left: 1.5rem;\r
}\r
\r
li {\r
    margin-bottom: 0.5rem;\r
}\r
\r
  </style>\r
</head>\r
\r
<body>\r
\r
    <main>\r
        <h1 class="text-center text-xl sm:text-3xl mt-8 px-4">\r
            Modern Glassmorphism Contact Form Using HTML & Tailwind CSS | Stylish Static Form Design\r
        </h1>\r
\r
        <article class="text-lg w-1/2 mx-auto">\r
            <h1><strong>📌 Blog 1: 5 Real-World Websites Using Glassmorphism Design (And Why It Works)</strong></h1>\r
            <h2><strong>✨ Introduction</strong></h2>\r
            <p class="ds-markdown-paragraph">Glassmorphism is taking the web design world by storm 🌪️&mdash;a sleek,\r
                modern aesthetic that combines&nbsp;<strong>frosted glass effects, vibrant colors, and subtle\r
                    blur</strong>&nbsp;to create depth and sophistication. But is it just a trend, or does it actually\r
                improve user experience?</p>\r
            <p class="ds-markdown-paragraph">In this post, we&rsquo;ll explore&nbsp;<strong>five real-world\r
                    examples</strong>&nbsp;of websites and apps that use Glassmorphism effectively&mdash;and why this\r
                design choice works so well. Plus, we&rsquo;ll see how you can apply these principles to your own\r
                projects (like the&nbsp;<a href="https://link-to-your-tutorial/" target="_blank"\r
                    rel="noreferrer">Glassmorphism Login Form</a>&nbsp;we built earlier!).</p>\r
            <hr />\r
            <h2><strong>🔍 Why Big Brands Love Glassmorphism</strong></h2>\r
            <p class="ds-markdown-paragraph">Before diving into examples, let&rsquo;s\r
                understand&nbsp;<strong>why</strong>&nbsp;Glassmorphism is so appealing:</p>\r
            <p class="ds-markdown-paragraph">✅&nbsp;<strong>Modern &amp; Futuristic</strong>&nbsp;&ndash; Feels fresh\r
                compared to flat design.<br />✅&nbsp;<strong>Enhances Depth</strong>&nbsp;&ndash; Layers create a\r
                3D-like illusion.<br />✅&nbsp;<strong>Focuses Attention</strong>&nbsp;&ndash; Blurred backgrounds keep\r
                users engaged with content.<br />✅&nbsp;<strong>Works with Vibrancy</strong>&nbsp;&ndash; Perfect for\r
                dark/light mode designs.</p>\r
            <p class="ds-markdown-paragraph">Now, let&rsquo;s see who&rsquo;s nailing it!</p>\r
            <hr />\r
            <h2><strong>🌐 Case Study 1: Apple&rsquo;s macOS Big Sur &amp; iOS Design</strong></h2>\r
            <h3><strong>🍏 Why It Works</strong></h3>\r
            <p class="ds-markdown-paragraph">Apple has always been a pioneer in UI design, and their&nbsp;<strong>Big\r
                    Sur update</strong>&nbsp;introduced&nbsp;<strong>semi-transparent menus, control centers, and\r
                    widgets</strong>&nbsp;with subtle blur effects.</p>\r
            <p class="ds-markdown-paragraph">🔹&nbsp;<strong>Key Features:</strong></p>\r
            <ul>\r
                <li>\r
                    <p class="ds-markdown-paragraph"><strong>Frosted toolbar panels</strong></p>\r
                </li>\r
                <li>\r
                    <p class="ds-markdown-paragraph"><strong>Dynamic blur intensity</strong>&nbsp;(changes based on\r
                        background)</p>\r
                </li>\r
                <li>\r
                    <p class="ds-markdown-paragraph"><strong>Vibrant accent colors</strong>&nbsp;that pop against\r
                        blurred layers</p>\r
                </li>\r
            </ul>\r
            <p class="ds-markdown-paragraph">💡&nbsp;<strong>Takeaway:</strong>&nbsp;Glassmorphism works best when\r
                paired with&nbsp;<strong>minimalist layouts</strong>&nbsp;and bold typography.</p>\r
            <hr />\r
            <h2><strong>🎮 Case Study 2: Discord&rsquo;s User Interface</strong></h2>\r
            <h3><strong>🤖 Why It Works</strong></h3>\r
            <p class="ds-markdown-paragraph">Discord&rsquo;s UI uses&nbsp;<strong>soft blur effects</strong>&nbsp;in\r
                modals, pop-ups, and server menus to keep focus on conversations while maintaining a sleek, modern look.\r
            </p>\r
            <p class="ds-markdown-paragraph">🔹&nbsp;<strong>Key Features:</strong></p>\r
            <ul>\r
                <li>\r
                    <p class="ds-markdown-paragraph"><strong>Blurred chat backgrounds</strong>&nbsp;(reduces visual\r
                        noise)</p>\r
                </li>\r
                <li>\r
                    <p class="ds-markdown-paragraph"><strong>Semi-transparent notification panels</strong></p>\r
                </li>\r
                <li>\r
                    <p class="ds-markdown-paragraph"><strong>Customizable accent colors</strong>&nbsp;that blend\r
                        smoothly</p>\r
                </li>\r
            </ul>\r
            <p class="ds-markdown-paragraph">💡&nbsp;<strong>Takeaway:</strong>&nbsp;Glassmorphism\r
                helps&nbsp;<strong>reduce UI clutter</strong>&nbsp;while keeping interactions smooth.</p>\r
            <hr />\r
            <h2><strong>🎨 Case Study 3: Dribbble&rsquo;s Design Showcases</strong></h2>\r
            <h3><strong>🖌️ Why It Works</strong></h3>\r
            <p class="ds-markdown-paragraph">Many designers on Dribbble experiment with Glassmorphism to\r
                create&nbsp;<strong>eye-catching portfolios and concept UIs</strong>.</p>\r
            <p class="ds-markdown-paragraph">🔹&nbsp;<strong>Key Features:</strong></p>\r
            <ul>\r
                <li>\r
                    <p class="ds-markdown-paragraph"><strong>Card-based layouts</strong>&nbsp;with frosted glass effects\r
                    </p>\r
                </li>\r
                <li>\r
                    <p class="ds-markdown-paragraph"><strong>Animated hover states</strong>&nbsp;(enhances\r
                        interactivity)</p>\r
                </li>\r
                <li>\r
                    <p class="ds-markdown-paragraph"><strong>Gradient overlays</strong>&nbsp;for extra depth</p>\r
                </li>\r
            </ul>\r
            <p class="ds-markdown-paragraph">💡&nbsp;<strong>Takeaway:</strong>&nbsp;Glassmorphism\r
                is&nbsp;<strong>perfect for creative portfolios</strong>&nbsp;where visual appeal matters.</p>\r
            <hr />\r
            <h2><strong>🚀 How to Adapt Glassmorphism for Your Projects</strong></h2>\r
            <p class="ds-markdown-paragraph">Now that you&rsquo;ve seen real-world examples, here&rsquo;s how you can\r
                implement it effectively:</p>\r
            <h3><strong>✔ Do&rsquo;s:</strong></h3>\r
            <ul>\r
                <li>\r
                    <p class="ds-markdown-paragraph">Use&nbsp;<strong>vibrant backgrounds</strong>&nbsp;(gradients,\r
                        dynamic wallpapers)</p>\r
                </li>\r
                <li>\r
                    <p class="ds-markdown-paragraph">Keep text&nbsp;<strong>high-contrast</strong>&nbsp;for readability\r
                    </p>\r
                </li>\r
                <li>\r
                    <p class="ds-markdown-paragraph">Add&nbsp;<strong>subtle shadows</strong>&nbsp;for extra depth</p>\r
                </li>\r
            </ul>\r
            <h3><strong>❌ Don&rsquo;ts:</strong></h3>\r
            <ul>\r
                <li>\r
                    <p class="ds-markdown-paragraph">Overuse blur (can slow down performance)</p>\r
                </li>\r
                <li>\r
                    <p class="ds-markdown-paragraph">Forget mobile optimization (test on all devices!)</p>\r
                </li>\r
                <li>\r
                    <p class="ds-markdown-paragraph">Ignore accessibility (ensure text remains legible)</p>\r
                </li>\r
            </ul>\r
            <hr />\r
            <h2><strong>🎯 Final Thoughts</strong></h2>\r
            <p class="ds-markdown-paragraph">Glassmorphism isn&rsquo;t just a trend&mdash;it&rsquo;s\r
                a&nbsp;<strong>powerful design tool</strong>&nbsp;when used correctly. By studying how top brands\r
                implement it, you can create stunning UIs that stand out.</p>\r
            <p class="ds-markdown-paragraph"><strong>Want to try it yourself?</strong>&nbsp;Check out our&nbsp;<a\r
                    href="https://link/" target="_blank" rel="noreferrer">Glassmorphism Login Form Tutorial</a>&nbsp;to\r
                start building! 🚀</p>\r
            <!-- Comments are visible in the HTML source only -->\r
        </article>\r
\r
\r
\r
    </main>\r
\r
    <!-- AOS JS -->\r
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
    <script>\r
        AOS.init();\r
    <\/script>\r
\r
\r
</body>\r
\r
</html>`,Ee=`<div\r
      class="flex justify-center items-center min-h-[70vh] mx-auto mt-10 rounded-[2rem] bg-[url('/images/bg.jpeg')] bg-cover bg-center border-4 max-w-[95%] sm:max-w-[80%] lg:max-w-[60%] px-4">\r
        <form action="#"\r
        class="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl p-6 flex flex-col text-white shadow-xl">\r
        <h2 class="text-center text-2xl sm:text-3xl mb-10 font-semibold">Login Form</h2>\r
\r
        <label for="name" class="text-lg sm:text-xl mb-1">Name</label>\r
        <input id="name" type="text" placeholder="Enter your name"\r
          class="p-2 bg-white/20 hover:bg-white/30 rounded-md mb-4 text-base sm:text-lg placeholder-white/70 outline-none focus:ring-2 focus:ring-white/30 transition" />\r
\r
        <label for="email" class="text-lg sm:text-xl mb-1">Email</label>\r
        <input id="email" type="email" placeholder="Enter your email"\r
          class="p-2 bg-white/20 hover:bg-white/30 rounded-md mb-4 text-base sm:text-lg placeholder-white/70 outline-none focus:ring-2 focus:ring-white/30 transition" />\r
\r
        <label for="password" class="text-lg sm:text-xl mb-1">Password</label>\r
        <input id="password" type="password" placeholder="Enter your password"\r
          class="p-2 bg-white/20 hover:bg-white/30 rounded-md mb-6 text-base sm:text-lg placeholder-white/70 outline-none focus:ring-2 focus:ring-white/30 transition" />\r
\r
        <button type="submit"\r
          class="bg-white/20 hover:bg-white/40 text-white rounded-full px-6 py-3 w-2/3 mx-auto text-base sm:text-lg transition-all duration-300">\r
          Submit\r
        </button>\r
      </form>\r
    </div>`,Vc=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
\r
    a {\r
      cursor: pointer;\r
    }\r
\r
pre {\r
    background: #f1f5f9;\r
    padding: 1rem;\r
    overflow-x: auto;\r
    border-radius: 0.5rem;\r
}\r
\r
code {\r
    font-family: monospace;\r
}\r
\r
h1,\r
h2,\r
h3 {\r
    margin-top: 2rem;\r
    margin-bottom: 1rem;\r
    font-weight: bold;\r
}\r
\r
ul {\r
    list-style: disc;\r
    margin-left: 1.5rem;\r
}\r
\r
li {\r
    margin-bottom: 0.5rem;\r
}\r
\r
  </style>\r
</head>\r
\r
<body>\r
    <article>\r
        <h1><strong>From Static to Animated: Adding Micro-Interactions to Your Glassmorphism Form ✨</strong></h1>\r
        <p class="ds-markdown-paragraph">Micro-interactions are small animations or feedback effects that make your UI\r
            feel alive. When combined with&nbsp;<strong>glassmorphism</strong>&mdash;a design trend featuring frosted\r
            glass effects&mdash;they can transform a static form into an engaging, modern experience.</p>\r
        <p class="ds-markdown-paragraph">In this&nbsp;<strong>beginner-friendly guide</strong>, you&rsquo;ll\r
            learn:<br />✅&nbsp;<strong>What micro-interactions are</strong>&nbsp;and why they\r
            matter<br />✅&nbsp;<strong>How to implement them</strong>&nbsp;in a glassmorphism\r
            form<br />✅&nbsp;<strong>Practical code examples</strong>&nbsp;using CSS &amp;\r
            JavaScript<br />✅&nbsp;<strong>Best practices</strong>&nbsp;for smooth, performant animations</p>\r
        <p class="ds-markdown-paragraph">By the end, you&rsquo;ll have a&nbsp;<strong>fully interactive glassmorphism\r
                form</strong>&nbsp;with subtle but effective animations.</p>\r
        <hr />\r
        <h2><strong>🔍 What Are Micro-Interactions? (And Why Do They Matter?)</strong></h2>\r
        <p class="ds-markdown-paragraph">Micro-interactions are small UI animations that respond to user actions, such\r
            as:</p>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Hover effects</strong>&nbsp;(buttons changing color)</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Focus states</strong>&nbsp;(input fields glowing when selected)\r
                </p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Loading animations</strong>&nbsp;(spinners, progress bars)</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Success/error feedback</strong>&nbsp;(subtle shakes or color\r
                    changes)</p>\r
            </li>\r
        </ul>\r
        <h3><strong>Why Add Them to Glassmorphism?</strong></h3>\r
        <p class="ds-markdown-paragraph">Glassmorphism already looks sleek with its&nbsp;<strong>blurred\r
                backgrounds</strong>&nbsp;and&nbsp;<strong>semi-transparency</strong>, but adding\r
            micro-interactions:<br />✔&nbsp;<strong>Improves usability</strong>&nbsp;(users get instant\r
            feedback)<br />✔&nbsp;<strong>Feels more premium</strong>&nbsp;(polished, modern\r
            UX)<br />✔&nbsp;<strong>Boosts engagement</strong>&nbsp;(makes forms less boring)</p>\r
        <hr />\r
        <h2><strong>🛠️ Setting Up Our Glassmorphism Form</strong></h2>\r
        <p class="ds-markdown-paragraph">Before adding animations, let&rsquo;s set up a basic glassmorphism login form\r
            with&nbsp;<strong>HTML &amp; Tailwind CSS</strong>:</p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">html</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Animated Glassmorphism Form<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.tailwindcss.com<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\r
    <span class="token selector">body</span> <span class="token punctuation">{</span>\r
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'bg.jpg'</span><span class="token punctuation">)</span></span> no-repeat center center fixed<span class="token punctuation">;</span>\r
      <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>min-h-screen flex items-center justify-center<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-xl border border-white/30 w-96<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-2xl font-bold text-center mb-6 text-white<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Welcome Back!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>\r
    \r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block text-white mb-2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\r
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-full p-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white placeholder-white/70<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
    \r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block text-white mb-2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Password<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\r
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-full p-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white placeholder-white/70<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
    \r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-full py-3 bg-white/30 hover:bg-white/40 rounded-lg text-white font-semibold transition-all duration-300<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
      Sign In\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></pre>\r
        </div>\r
        <h3><strong>Key Glassmorphism Elements:</strong></h3>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><code>backdrop-blur-lg</code>&nbsp;&rarr; Creates the frosted glass\r
                    effect</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><code>bg-white/20</code>&nbsp;&rarr; Semi-transparent white background\r
                </p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><code>border border-white/30</code>&nbsp;&rarr; Soft border for depth\r
                </p>\r
            </li>\r
        </ul>\r
        <hr />\r
        <h2><strong>🎨 Adding Micro-Interactions (Step-by-Step)</strong></h2>\r
        <h3><strong>1. Input Field Focus Effects</strong></h3>\r
        <p class="ds-markdown-paragraph">When a user clicks an input, let&rsquo;s make it&nbsp;<strong>glow\r
                slightly</strong>&nbsp;with a soft shadow.</p>\r
        <p class="ds-markdown-paragraph"><strong>CSS (Add inside&nbsp;<code>&lt;style&gt;</code>&nbsp;tag):</strong></p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">css</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token selector">input:focus</span> <span class="token punctuation">{</span>\r
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 0 3px <span class="token function">rgba</span><span class="token punctuation">(</span>96<span class="token punctuation">,</span> 165<span class="token punctuation">,</span> 250<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s ease<span class="token punctuation">;</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <h3><strong>2. Button Hover &amp; Active Effects</strong></h3>\r
        <p class="ds-markdown-paragraph">Make the button&nbsp;<strong>pulse slightly</strong>&nbsp;on hover\r
            and&nbsp;<strong>press down</strong>&nbsp;when clicked.</p>\r
        <p class="ds-markdown-paragraph"><strong>Update the button class:</strong></p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">html</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>... hover:scale-105 active:scale-95 transition-transform duration-200<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
  Sign In\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></pre>\r
        </div>\r
        <h3><strong>3. Form Submission Feedback</strong></h3>\r
        <p class="ds-markdown-paragraph">When the user submits, show a&nbsp;<strong>success\r
                animation</strong>&nbsp;or&nbsp;<strong>error shake</strong>.</p>\r
        <p class="ds-markdown-paragraph"><strong>JavaScript (Add before&nbsp;<code>&lt;/body&gt;</code>):</strong></p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">javascript</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token keyword">const</span> form <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'form'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
form<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  \r
  <span class="token comment">// Simulate loading</span>\r
  <span class="token keyword">const</span> button <span class="token operator">=</span> form<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  button<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">'Signing In...'</span><span class="token punctuation">;</span>\r
  \r
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
    button<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">'Success! ✅'</span><span class="token punctuation">;</span>\r
    button<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'bg-green-400/30'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    \r
    <span class="token comment">// Reset after 2 seconds</span>\r
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
      button<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">'Sign In'</span><span class="token punctuation">;</span>\r
      button<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'bg-green-400/30'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\r
        </div>\r
        <h3><strong>4. Floating Label Animation</strong></h3>\r
        <p class="ds-markdown-paragraph">Make labels&nbsp;<strong>float up</strong>&nbsp;when the input is focused.</p>\r
        <p class="ds-markdown-paragraph"><strong>Update HTML &amp; CSS:</strong></p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">html</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>relative mb-4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>... peer<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span> <span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>absolute left-3 top-3 text-white/70 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-300 transition-all duration-200<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></pre>\r
        </div>\r
        <hr />\r
        <h2><strong>🌟 Advanced Micro-Interactions (Optional)</strong></h2>\r
        <h3><strong>1. Password Strength Indicator</strong></h3>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">javascript</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token keyword">const</span> passwordInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'input[type="password"]'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
passwordInput<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">const</span> strength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token keyword">const</span> strengthBar <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  strengthBar<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">'h-1 mt-2 bg-blue-400'</span><span class="token punctuation">;</span>\r
  strengthBar<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>strength <span class="token operator">*</span> <span class="token number">100</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>\r
  \r
  <span class="token comment">// Update or create the strength bar</span>\r
  <span class="token keyword">const</span> existingBar <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>parentElement<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.strength-bar'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token keyword">if</span> <span class="token punctuation">(</span>existingBar<span class="token punctuation">)</span> existingBar<span class="token punctuation">.</span><span class="token function">replaceWith</span><span class="token punctuation">(</span>strengthBar<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token keyword">else</span> <span class="token punctuation">{</span>\r
    strengthBar<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'strength-bar'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>parentElement<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>strengthBar<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\r
        </div>\r
        <h3><strong>2. Background Particle Animation</strong></h3>\r
        <p class="ds-markdown-paragraph">Add floating particles for extra polish (using&nbsp;<a\r
                href="https://vincentgarreau.com/particles.js/" target="_blank" rel="noreferrer">Particles.js</a>).</p>\r
        <hr />\r
        <h2><strong>📌 Best Practices for Glassmorphism Micro-Interactions</strong></h2>\r
        <p class="ds-markdown-paragraph">✔&nbsp;<strong>Keep animations subtle</strong>&nbsp;(avoid distracting\r
            users)<br />✔&nbsp;<strong>Use smooth\r
                transitions</strong>&nbsp;(<code>transition: all 0.3s ease</code>)<br />✔&nbsp;<strong>Prioritize\r
                performance</strong>&nbsp;(avoid heavy animations on mobile)<br />✔&nbsp;<strong>Test on real\r
                devices</strong>&nbsp;(some blur effects can be GPU-heavy)</p>\r
        <hr />\r
        <h2><strong>🎉 Final Result &amp; Full Code</strong></h2>\r
        <p class="ds-markdown-paragraph">You now have a&nbsp;<strong>fully animated glassmorphism\r
                form</strong>&nbsp;with:</p>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Focus-triggered input glow</strong></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Pulsing button effects</strong></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Submission feedback</strong></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Floating labels</strong></p>\r
            </li>\r
        </ul>\r
        <p class="ds-markdown-paragraph"><a target="_blank" rel="noreferrer"><strong>View Live\r
                    Demo</strong></a>&nbsp;|&nbsp;<a target="_blank" rel="noreferrer"><strong>Download Full\r
                    Code</strong></a></p>\r
        <hr />\r
        <h2><strong>🚀 What&rsquo;s Next?</strong></h2>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">Explore&nbsp;<strong>3D\r
                        glassmorphism</strong>&nbsp;with&nbsp;<code>transform-style: preserve-3d</code></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Learn&nbsp;<strong>advanced animations</strong>&nbsp;with GSAP</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Check out&nbsp;<strong><a\r
                            href="https://fixing-common-glassmorphism-bugs.html/" target="_blank" rel="noreferrer">How I\r
                            Fixed 3 Common Glassmorphism Bugs</a></strong></p>\r
            </li>\r
        </ul>\r
        <hr />\r
        <h3><strong>💬 Your Turn!</strong></h3>\r
        <p class="ds-markdown-paragraph">Which micro-interaction will you implement first?</p>\r
    </article>\r
</body>\r
\r
</html>`,Kc=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
\r
    a {\r
      cursor: pointer;\r
    }\r
\r
pre {\r
    background: #f1f5f9;\r
    padding: 1rem;\r
    overflow-x: auto;\r
    border-radius: 0.5rem;\r
}\r
\r
code {\r
    font-family: monospace;\r
}\r
\r
h1,\r
h2,\r
h3 {\r
    margin-top: 2rem;\r
    margin-bottom: 1rem;\r
    font-weight: bold;\r
}\r
\r
ul {\r
    list-style: disc;\r
    margin-left: 1.5rem;\r
}\r
\r
li {\r
    margin-bottom: 0.5rem;\r
}\r
\r
  </style>\r
</head>\r
\r
<body>\r
    <article>\r
        <h1><strong>Glassmorphism vs. Neumorphism: Which One Should You Choose? 🧐</strong></h1>\r
        <h2><strong>🔍 Introduction: The Battle of Modern UI Trends</strong></h2>\r
        <p class="ds-markdown-paragraph">Two of the most popular design trends in recent years\r
            are&nbsp;<strong>Glassmorphism</strong>&nbsp;and&nbsp;<strong>Neumorphism</strong>. Both\r
            create&nbsp;<strong>depth</strong>&nbsp;and&nbsp;<strong>realism</strong>&nbsp;in interfaces, but they\r
            achieve this in very different ways.</p>\r
        <p class="ds-markdown-paragraph">If you're wondering:</p>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Which one is better for your project?</strong></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>What are the pros and cons of each?</strong></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>How do they impact usability and performance?</strong></p>\r
            </li>\r
        </ul>\r
        <p class="ds-markdown-paragraph">This&nbsp;<strong>1,500+ word guide</strong>&nbsp;will break it all down\r
            with&nbsp;<strong>code examples, comparisons, and real-world use cases</strong>.</p>\r
        <hr />\r
        <h2><strong>💡 What Is Glassmorphism?</strong></h2>\r
        <p class="ds-markdown-paragraph">Glassmorphism mimics&nbsp;<strong>frosted glass</strong>,\r
            featuring:<br />✔&nbsp;<strong>Semi-transparent\r
                backgrounds</strong>&nbsp;(<code>background: rgba(255, 255, 255, 0.2)</code>)<br />✔&nbsp;<strong>Backdrop\r
                blur</strong>&nbsp;(<code>backdrop-filter: blur(10px)</code>)<br />✔&nbsp;<strong>Soft\r
                borders</strong>&nbsp;(<code>border: 1px solid rgba(255, 255, 255, 0.3)</code>)</p>\r
        <h3><strong>Where You&rsquo;ve Seen It:</strong></h3>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">macOS Big Sur &amp; iOS</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Windows 11 Acrylic effect</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Modern web dashboards (e.g.,&nbsp;<a href="https://dribbble.com/"\r
                        target="_blank" rel="noreferrer">Dribbble</a>)</p>\r
            </li>\r
        </ul>\r
        <h3><strong>Pros:</strong></h3>\r
        <p class="ds-markdown-paragraph">✅&nbsp;<strong>Feels modern and sleek</strong><br />✅&nbsp;<strong>Works well\r
                with vibrant backgrounds</strong><br />✅&nbsp;<strong>Lightweight if optimized</strong></p>\r
        <h3><strong>Cons:</strong></h3>\r
        <p class="ds-markdown-paragraph">❌&nbsp;<strong>Blur effects can hurt performance on low-end\r
                devices</strong><br />❌&nbsp;<strong>Text legibility issues if transparency isn&rsquo;t\r
                balanced</strong></p>\r
        <hr />\r
        <h2><strong>💡 What Is Neumorphism?</strong></h2>\r
        <p class="ds-markdown-paragraph">Neumorphism (Soft UI) mimics&nbsp;<strong>pressed-in or extruded\r
                shapes</strong>, featuring:<br />✔&nbsp;<strong>Subtle\r
                shadows</strong>&nbsp;(<code>box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff</code>)<br />✔&nbsp;<strong>Minimal\r
                color contrast</strong>&nbsp;(usually light gray backgrounds)<br />✔&nbsp;<strong>Soft, embossed\r
                buttons</strong></p>\r
        <h3><strong>Where You&rsquo;ve Seen It:</strong></h3>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">Banking apps (e.g.,&nbsp;<a href="https://cash.app/" target="_blank"\r
                        rel="noreferrer">Cash App</a>)</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Smart home interfaces</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Minimalist portfolios</p>\r
            </li>\r
        </ul>\r
        <h3><strong>Pros:</strong></h3>\r
        <p class="ds-markdown-paragraph">✅&nbsp;<strong>Great for tactile, button-heavy\r
                UIs</strong><br />✅&nbsp;<strong>No transparency issues (better accessibility)</strong></p>\r
        <h3><strong>Cons:</strong></h3>\r
        <p class="ds-markdown-paragraph">❌&nbsp;<strong>Low contrast can hurt\r
                usability</strong><br />❌&nbsp;<strong>Harder to implement responsively</strong></p>\r
        <hr />\r
        <h2><strong>🆚 Glassmorphism vs. Neumorphism: Key Differences</strong></h2>\r
        <div class="markdown-table-wrapper">\r
            <table>\r
                <thead>\r
                    <tr>\r
                        <th>Feature</th>\r
                        <th>Glassmorphism</th>\r
                        <th>Neumorphism</th>\r
                    </tr>\r
                </thead>\r
                <tbody>\r
                    <tr>\r
                        <td><strong>Depth</strong></td>\r
                        <td>Layered glass</td>\r
                        <td>Pressed/extruded plastic</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>Blur</strong></td>\r
                        <td>Heavy blur (<code>backdrop-filter</code>)</td>\r
                        <td>No blur</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>Shadows</strong></td>\r
                        <td>Minimal</td>\r
                        <td>Extreme (inset/outset)</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>Accessibility</strong></td>\r
                        <td>Can be poor (transparency)</td>\r
                        <td>Better (but low contrast)</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>Performance</strong></td>\r
                        <td>GPU-heavy</td>\r
                        <td>CPU-friendly</td>\r
                    </tr>\r
                </tbody>\r
            </table>\r
        </div>\r
        <hr />\r
        <h2><strong>🎨 Code Comparison</strong></h2>\r
        <h3><strong>Glassmorphism Card (CSS)</strong></h3>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">css</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token selector">.glass-card</span> <span class="token punctuation">{</span>\r
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <h3><strong>Neumorphism Card (CSS)</strong></h3>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">css</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token selector">.neumorph-card</span> <span class="token punctuation">{</span>\r
  <span class="token property">background</span><span class="token punctuation">:</span> #e0e5ec<span class="token punctuation">;</span>\r
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\r
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> \r
    8px 8px 16px #d1d9e6<span class="token punctuation">,</span> \r
    -8px -8px 16px #ffffff<span class="token punctuation">;</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <hr />\r
        <h2><strong>🚀 Which One Should You Choose?</strong></h2>\r
        <h3><strong>Pick Glassmorphism If:</strong></h3>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">You want a&nbsp;<strong>modern, "luxury" feel</strong></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Your app has&nbsp;<strong>vibrant backgrounds</strong></p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Performance isn&rsquo;t a concern (e.g., desktop-only)</p>\r
            </li>\r
        </ul>\r
        <h3><strong>Pick Neumorphism If:</strong></h3>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">You need&nbsp;<strong>tactile buttons</strong>&nbsp;(e.g., calculator,\r
                    smart home UI)</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Accessibility is a priority (no transparency issues)</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">You&rsquo;re targeting&nbsp;<strong>low-end devices</strong></p>\r
            </li>\r
        </ul>\r
        <hr />\r
        <h2><strong>💡 Hybrid Approach: "Neumorphic Glass"</strong></h2>\r
        <p class="ds-markdown-paragraph">Some designers combine both:</p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">css</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token selector">.hybrid-card</span> <span class="token punctuation">{</span>\r
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> \r
    4px 4px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">,</span>\r
    -4px -4px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <hr />\r
        <h2><strong>📌 Final Verdict</strong></h2>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Glassmorphism</strong>&nbsp;= Best for&nbsp;<strong>visual\r
                        appeal</strong>&nbsp;(landing pages, dashboards)</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Neumorphism</strong>&nbsp;= Best for&nbsp;<strong>tactile\r
                        interfaces</strong>&nbsp;(apps, IoT devices)</p>\r
            </li>\r
        </ul>\r
        <p class="ds-markdown-paragraph"><strong>Experiment with both</strong>&nbsp;in your next project!</p>\r
    </article>\r
</body>\r
\r
</html>`,Jc=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
\r
    a {\r
      cursor: pointer;\r
    }\r
\r
pre {\r
    background: #f1f5f9;\r
    padding: 1rem;\r
    overflow-x: auto;\r
    border-radius: 0.5rem;\r
}\r
\r
code {\r
    font-family: monospace;\r
}\r
\r
h1,\r
h2,\r
h3 {\r
    margin-top: 2rem;\r
    margin-bottom: 1rem;\r
    font-weight: bold;\r
}\r
\r
ul {\r
    list-style: disc;\r
    margin-left: 1.5rem;\r
}\r
\r
li {\r
    margin-bottom: 0.5rem;\r
}\r
\r
  </style>\r
</head>\r
\r
<body>\r
    <article>\r
        <h1><strong>How I Fixed 3 Common Glassmorphism Bugs (And How You Can Too!) 🐛</strong></h1>\r
        <h2><strong>🔍 Introduction: The Dark Side of Glassmorphism</strong></h2>\r
        <p class="ds-markdown-paragraph">Glassmorphism looks stunning, but it comes with&nbsp;<strong>performance\r
                quirks, blur issues, and cross-browser headaches</strong>. After building 10+ glassmorphic UIs,\r
            here&rsquo;s how I solved the&nbsp;<strong>most frustrating bugs</strong>.</p>\r
        <hr />\r
        <h2><strong>🐛 Bug #1: Blur Doesn&rsquo;t Work on Some Browsers</strong></h2>\r
        <h3><strong>The Problem:</strong></h3>\r
        <p class="ds-markdown-paragraph"><code>backdrop-filter</code>&nbsp;isn&rsquo;t supported in&nbsp;<strong>Firefox\r
                by default</strong>&nbsp;and fails in some Safari versions.</p>\r
        <h3><strong>The Fix:</strong></h3>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">css</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token selector">.glass-element</span> <span class="token punctuation">{</span>\r
  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token property">-webkit-backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* Safari */</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token comment">/* Fallback for Firefox */</span>\r
<span class="token atrule"><span class="token rule">@supports</span> <span class="token keyword">not</span> <span class="token punctuation">(</span><span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\r
  <span class="token selector">.glass-element</span> <span class="token punctuation">{</span>\r
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* Opaque fallback */</span>\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <hr />\r
        <h2><strong>🐛 Bug #2: Text Legibility Issues</strong></h2>\r
        <h3><strong>The Problem:</strong></h3>\r
        <p class="ds-markdown-paragraph">Text becomes&nbsp;<strong>hard to read</strong>&nbsp;over busy backgrounds.</p>\r
        <h3><strong>The Fix:</strong></h3>\r
        <ol start="1">\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Add a semi-opaque underlay:</strong></p>\r
                <div class="md-code-block md-code-block-dark">\r
                    <div class="md-code-block-banner-wrap">\r
                        <div class="md-code-block-banner md-code-block-banner-lite">\r
                            <div class="_121d384">\r
                                <div class="d2a24f03"><span class="d813de27">css</span></div>\r
                                <div class="d2a24f03">&nbsp;</div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <pre><span class="token selector">.text-container</span> <span class="token punctuation">{</span>\r
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* Dark underlay */</span>\r
  <span class="token property">padding</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>\r
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>\r
<span class="token punctuation">}</span></pre>\r
                </div>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Use thicker\r
                        fonts</strong>&nbsp;(<code>font-weight: 600</code>).</p>\r
            </li>\r
        </ol>\r
        <hr />\r
        <h2><strong>🐛 Bug #3: Performance Lag on Mobile</strong></h2>\r
        <h3><strong>The Problem:</strong></h3>\r
        <p class="ds-markdown-paragraph">Blur effects&nbsp;<strong>crash low-end phones</strong>.</p>\r
        <h3><strong>The Fix:</strong></h3>\r
        <ol start="1">\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Reduce blur\r
                        intensity</strong>&nbsp;(<code>blur(5px)</code>&nbsp;instead of&nbsp;<code>blur(20px)</code>).\r
                </p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Disable blur on mobile:</strong></p>\r
                <div class="md-code-block md-code-block-dark">\r
                    <div class="md-code-block-banner-wrap">\r
                        <div class="md-code-block-banner md-code-block-banner-lite">\r
                            <div class="_121d384">\r
                                <div class="d2a24f03"><span class="d813de27">css</span></div>\r
                                <div class="d2a24f03">&nbsp;</div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    <pre><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\r
  <span class="token selector">.glass-element</span> <span class="token punctuation">{</span>\r
    <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\r
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span></pre>\r
                </div>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Use&nbsp;<code>will-change: transform</code></strong>&nbsp;to\r
                    optimize GPU rendering.</p>\r
            </li>\r
        </ol>\r
        <hr />\r
        <h2><strong>🚀 Bonus: Debugging Checklist</strong></h2>\r
        <p class="ds-markdown-paragraph">✔ Test in&nbsp;<strong>Firefox, Safari, and Chrome</strong><br />✔\r
            Use&nbsp;<strong>CSS transitions</strong>&nbsp;instead of JavaScript animations<br />✔\r
            Avoid&nbsp;<strong>nested blur effects</strong>&nbsp;(they compound performance costs)</p>\r
        <hr />\r
        <h2><strong>🎉 Final Thoughts</strong></h2>\r
        <p class="ds-markdown-paragraph">Glassmorphism is&nbsp;<strong>worth the effort</strong>&mdash;if you optimize\r
            it. Now you know how to&nbsp;<strong>dodge the biggest pitfalls</strong>!</p>\r
        <p class="ds-markdown-paragraph"><strong>Which bug frustrated you the most?</strong></p>\r
    </article>\r
</body>\r
\r
</html>`,Qc=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
\r
    a {\r
      cursor: pointer;\r
    }\r
\r
pre {\r
    background: #f1f5f9;\r
    padding: 1rem;\r
    overflow-x: auto;\r
    border-radius: 0.5rem;\r
}\r
\r
code {\r
    font-family: monospace;\r
}\r
\r
h1,\r
h2,\r
h3 {\r
    margin-top: 2rem;\r
    margin-bottom: 1rem;\r
    font-weight: bold;\r
}\r
\r
ul {\r
    list-style: disc;\r
    margin-left: 1.5rem;\r
}\r
\r
li {\r
    margin-bottom: 0.5rem;\r
}\r
\r
  </style>\r
</head>\r
\r
<body>\r
    <article>\r
        <h1><strong>Fun Facts About Blur Effects in Web Design (You&rsquo;ve Never Heard Of!) 🤯</strong></h1>\r
        <h2><strong>🔍 Introduction: The Magic of Blur in UI</strong></h2>\r
        <p class="ds-markdown-paragraph">Blur effects are everywhere&mdash;from&nbsp;<strong>frosted glass\r
                UIs</strong>&nbsp;to&nbsp;<strong>depth-creating overlays</strong>. But did you know the first CSS blur\r
            was inspired by&nbsp;<strong>camera lenses</strong>? Or that excessive blur can&nbsp;<strong>slow down your\r
                GPU</strong>?</p>\r
        <p class="ds-markdown-paragraph">In this&nbsp;<strong>1,200+ word deep dive</strong>, you&rsquo;ll\r
            discover:<br />✅&nbsp;<strong>The surprising history of blur\r
                effects</strong><br />✅&nbsp;<strong>Mind-blowing technical tricks</strong>&nbsp;(like "fake blur"\r
            hacks)<br />✅&nbsp;<strong>Weird browser quirks</strong>&nbsp;(Safari vs. Firefox\r
            drama)<br />✅&nbsp;<strong>UX secrets</strong>&nbsp;from top designers</p>\r
        <hr />\r
        <h2><strong>📜 Fact #1: Blur Effects Date Back to the 1800s</strong></h2>\r
        <h3><strong>The First "Blur" Was an Accident</strong></h3>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">In 1826,&nbsp;<strong>Joseph Nic&eacute;phore\r
                        Ni&eacute;pce</strong>&nbsp;took the first photograph&mdash;but it\r
                    was&nbsp;<strong>blurry</strong>&nbsp;due to long exposure.</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Artists later&nbsp;<strong>intentionally\r
                        blurred</strong>&nbsp;backgrounds (bokeh effect) to mimic human eye focus.</p>\r
            </li>\r
        </ul>\r
        <h3><strong>Digital Blur Was Born in 1984</strong></h3>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">Apple&rsquo;s&nbsp;<strong>MacPaint</strong>&nbsp;(1984) introduced the\r
                    first digital blur tool.</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Early web designers faked blur with&nbsp;<strong>low-resolution\r
                        images</strong>&nbsp;(before CSS filters existed).</p>\r
            </li>\r
        </ul>\r
        <hr />\r
        <h2><strong>💻 Fact #2: CSS&nbsp;<code>backdrop-filter</code>&nbsp;Almost Didn&rsquo;t Exist</strong></h2>\r
        <h3><strong>The 10-Year Browser War</strong></h3>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">Apple\r
                    proposed&nbsp;<code>backdrop-filter</code>&nbsp;in&nbsp;<strong>2014</strong>&nbsp;for Safari.</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Google/Firefox&nbsp;<strong>blocked it</strong>&nbsp;for years\r
                    over&nbsp;<strong>performance concerns</strong>.</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph">Firefox finally enabled it in&nbsp;<strong>2023</strong>&mdash;but only\r
                    behind a flag (<code>layout.css.backdrop-filter.enabled</code>).</p>\r
            </li>\r
        </ul>\r
        <h3><strong>Pro Tip: The "Fake Blur" Hack</strong></h3>\r
        <p class="ds-markdown-paragraph">Before cross-browser support, devs used:</p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">css</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token selector">.fake-blur</span> <span class="token punctuation">{</span>\r
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\r
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token selector">.fake-blur::before</span> <span class="token punctuation">{</span>\r
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>\r
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"bg-image.jpg"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\r
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\r
  <span class="token property">inset</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\r
  <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <hr />\r
        <h2><strong>🎨 Fact #3: Blur Impacts Emotions (Seriously!)</strong></h2>\r
        <h3><strong>Psychology of Blurred UIs</strong></h3>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Soft blurs</strong>&nbsp;(5px&ndash;10px)\r
                    feel&nbsp;<strong>calm and premium</strong>&nbsp;(used in meditation apps).</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Heavy blurs</strong>&nbsp;(20px+)\r
                    create&nbsp;<strong>mystery/disorientation</strong>&nbsp;(common in horror games).</p>\r
            </li>\r
        </ul>\r
        <h3><strong>Case Study: Apple vs. Microsoft</strong></h3>\r
        <div class="markdown-table-wrapper">\r
            <table>\r
                <thead>\r
                    <tr>\r
                        <th>Company</th>\r
                        <th>Blur Style</th>\r
                        <th>Emotional Effect</th>\r
                    </tr>\r
                </thead>\r
                <tbody>\r
                    <tr>\r
                        <td><strong>Apple</strong></td>\r
                        <td>Light (8px)</td>\r
                        <td>"Sleek, futuristic"</td>\r
                    </tr>\r
                    <tr>\r
                        <td><strong>Microsoft</strong></td>\r
                        <td>Acrylic (30px)</td>\r
                        <td>"Depth, layered workflow"</td>\r
                    </tr>\r
                </tbody>\r
            </table>\r
        </div>\r
        <hr />\r
        <h2><strong>⚡ Fact #4: Blur Can Crash Your GPU</strong></h2>\r
        <h3><strong>The Dark Side of&nbsp;<code>backdrop-filter</code></strong></h3>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph">Each blur layer&nbsp;<strong>doubles rendering work</strong>.</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Nested blurs</strong>&nbsp;(e.g., blurring a blurred parent)\r
                    can&nbsp;<strong>freeze mobile devices</strong>.</p>\r
            </li>\r
        </ul>\r
        <h3><strong>Fix: The "Blur Budget" Rule</strong></h3>\r
        <p class="ds-markdown-paragraph">✔&nbsp;<strong>1&ndash;2 blur max</strong>&nbsp;per\r
            viewport<br />✔&nbsp;<strong>Use&nbsp;<code>will-change: transform</code></strong>&nbsp;for GPU\r
            optimization<br />✔&nbsp;<strong>Disable blur on\r
                scroll</strong>&nbsp;with&nbsp;<code>@media (prefers-reduced-motion)</code></p>\r
        <hr />\r
        <h2><strong>🌐 Fact #5: Secret Browser-Specific Tricks</strong></h2>\r
        <h3><strong>Safari&rsquo;s Exclusive&nbsp;<code>-webkit-backdrop-filter</code></strong></h3>\r
        <p class="ds-markdown-paragraph">Works&nbsp;<strong>smoother</strong>&nbsp;than\r
            standard&nbsp;<code>backdrop-filter</code>&nbsp;on Macs.</p>\r
        <h3><strong>Firefox&rsquo;s&nbsp;<code>filter: blur()</code>&nbsp;Workaround</strong></h3>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">css</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token comment">/* Targets ONLY Firefox */</span>\r
<span class="token atrule"><span class="token rule">@-moz-document</span> <span class="token function">url-prefix</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\r
  <span class="token selector">.firefox-blur</span> <span class="token punctuation">{</span>\r
    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <h3><strong>Chromium&rsquo;s Hidden&nbsp;<code>paint()</code>&nbsp;Function</strong></h3>\r
        <p class="ds-markdown-paragraph">Experimental Houdini API for&nbsp;<strong>animated blurs</strong>:</p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">javascript</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token constant">CSS</span><span class="token punctuation">.</span>paintWorklet<span class="token punctuation">.</span><span class="token function">addModule</span><span class="token punctuation">(</span><span class="token string">'blur-animator.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\r
        </div>\r
        <hr />\r
        <h2><strong>🚀 Fact #6: The Future of Blur Effects</strong></h2>\r
        <h3><strong>Coming Soon:&nbsp;<code>@property</code>&nbsp;Animations</strong></h3>\r
        <p class="ds-markdown-paragraph">Chromium is testing&nbsp;<strong>smooth blur transitions</strong>:</p>\r
        <div class="md-code-block md-code-block-dark">\r
            <div class="md-code-block-banner-wrap">\r
                <div class="md-code-block-banner md-code-block-banner-lite">\r
                    <div class="_121d384">\r
                        <div class="d2a24f03"><span class="d813de27">css</span></div>\r
                        <div class="d2a24f03">&nbsp;</div>\r
                    </div>\r
                </div>\r
            </div>\r
            <pre><span class="token atrule"><span class="token rule">@property</span> --blur-amount</span> <span class="token punctuation">{</span>\r
  <span class="token property">syntax</span><span class="token punctuation">:</span> <span class="token string">"&lt;length&gt;"</span><span class="token punctuation">;</span>\r
  <span class="token property">inherits</span><span class="token punctuation">:</span> false<span class="token punctuation">;</span>\r
  <span class="token property">initial-value</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token selector">.animated-blur</span> <span class="token punctuation">{</span>\r
  <span class="token property">--blur-amount</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>\r
  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--blur-amount<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
  <span class="token property">transition</span><span class="token punctuation">:</span> --blur-amount 0.5s<span class="token punctuation">;</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token selector">.animated-blur:hover</span> <span class="token punctuation">{</span>\r
  <span class="token property">--blur-amount</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>\r
<span class="token punctuation">}</span></pre>\r
        </div>\r
        <h3><strong>AI-Powered "Smart Blur"</strong></h3>\r
        <p class="ds-markdown-paragraph">Adobe&rsquo;s&nbsp;<strong>Sensei AI</strong>&nbsp;can\r
            now&nbsp;<strong>selectively blur</strong>&nbsp;UI elements based on eye-tracking data.</p>\r
        <hr />\r
        <h2><strong>🎉 Final Thoughts</strong></h2>\r
        <p class="ds-markdown-paragraph">From&nbsp;<strong>19th-century\r
                photography</strong>&nbsp;to&nbsp;<strong>GPU-pushing CSS</strong>, blur effects have\r
            a&nbsp;<strong>wild history</strong>. Next time you use&nbsp;<code>backdrop-filter</code>, remember:</p>\r
        <ul>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Less is more</strong>&nbsp;(performance matters!)</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Browser hacks exist</strong>&nbsp;(RIP Firefox)</p>\r
            </li>\r
            <li>\r
                <p class="ds-markdown-paragraph"><strong>Blur = emotion control</strong></p>\r
            </li>\r
        </ul>\r
        <p class="ds-markdown-paragraph"><strong>What&rsquo;s your favorite blur trick?</strong></p>\r
    </article>\r
</body>\r
\r
</html>`,Xc=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <meta name="description"\r
        content="Learn how to create a stunning transparent text effect over a background image using Tailwind CSS. Fully responsive and beginner-friendly with source code." />\r
    <meta name="keywords"\r
        content="Transparent Text CSS, Tailwind Transparent Text, HTML Background Image Text Effect, Responsive Text Overlay, Tailwind CSS Projects" />\r
    <meta name="author" content="Danny" />\r
    <title>Responsive Transparent Text</title>\r
    <style>\r
        a:hover {\r
            cursor: pointer;\r
        }\r
    </style>\r
</head>\r
\r
<body class="min-h-screen bg-gradient-to-br from-violet-500 to-f\r
uchsia-500">\r
    <main class="px-4 sm:px-8 lg:px-20">\r
        <!-- <h1 class="text-3xl sm:text-4xl font-bold text-center mt-10 mb-4" data-aos="fade-up">\r
            How to Create a Transparent Text Effect with Tailwind CSS\r
        </h1> -->\r
\r
        <!-- <section\r
            class="flex justify-center items-center min-h-[70vh] mx-auto mt-10 rounded-3xl bg-[url('/images/form-bg.jpeg')] bg-cover bg-center border-4 max-w-[95%] sm:max-w-[80%] lg:max-w-[60%] px-4"\r
            data-aos="fade-up" data-aos-delay="200">\r
            <p\r
                class="text-4xl sm:text-6xl lg:text-8xl font-extrabold mix-blend-overlay shadow-2xl text-center leading-tight">\r
                Beautiful Porsche in Rain\r
            </p>\r
        </section> -->\r
        <!-- \r
        <article class="mt-10">\r
            <h2 class="text-3xl font-bold mb-6">How to Make Transparent Text Over an Image with Tailwind CSS</h2>\r
\r
            <p class="mb-6">\r
                Transparent text effects look stylish and eye-catching, especially when placed over high-quality\r
                background images.\r
                In this mini project, we used Tailwind CSS to create a clean and responsive transparent text layout with\r
                just a few lines of code.\r
                Let’s break it down so you can understand exactly how it works and try it on your own website!\r
            </p>\r
\r
            <h3 class="text-2xl font-semibold mt-8 mb-4">🖼️ What Is Transparent Text and Why Use It?</h3>\r
            <p class="mb-6">\r
                Transparent text is text that appears to "blend" with the image behind it. It lets the background image\r
                shine through\r
                while still displaying the message. This is often used in portfolio banners, fashion websites,\r
                automotive showcases, and\r
                anywhere you want a dramatic and modern look.\r
                <a href="fun-facts.html">\r
                    <p class="italic text-white/70">\r
                        5 Fun Facts About Transparent Text Effects You Probably Didn’t Know!\r
                    </p>\r
                    \r
                </a>\r
            </p>\r
\r
            <h3 class="text-2xl font-semibold mt-8 mb-4">🔍 How the Code Works</h3>\r
            <p class="mb-4">Let’s go step by step:</p>\r
            <ul class="list-disc pl-5 space-y-3 mb-6">\r
                <li><strong>Container Div:</strong> We created a <code>&lt;div&gt;</code> with Tailwind classes like\r
                    <code>flex</code>, <code>justify-center</code>, <code>items-center</code>, and\r
                    <code>min-h-[70vh]</code> to center the text both horizontally and vertically inside the box.\r
                </li>\r
\r
                <li><strong>Background Image:</strong> The background image is applied directly with Tailwind’s custom\r
                    class <code>bg-[url('...')]</code>. We used <code>bg-cover</code> and <code>bg-center</code> to\r
                    ensure the image fills the container nicely.</li>\r
\r
                <li><strong>Rounded Borders and Responsiveness:</strong> Classes like <code>rounded-3xl</code>,\r
                    <code>max-w-[95%]</code>, <code>sm:max-w-[80%]</code>, and <code>lg:max-w-[60%]</code> make the\r
                    layout responsive and look smooth on all screen sizes.\r
                </li>\r
\r
                <li><strong>Transparent Text:</strong> The real magic comes from <code>mix-blend-overlay</code>. This\r
                    makes the text blend with the background image, creating that transparent, see-through effect. We\r
                    also used <code>text-8xl</code> and <code>font-extrabold</code> to make the text large and dramatic.\r
                </li>\r
\r
                <li><strong>Animations:</strong> With the help of AOS (Animate on Scroll), we added a fade-up effect to\r
                    make the section feel more interactive as users scroll down.</li>\r
            </ul>\r
            <a href="problem-solving-approaches.html">\r
                <p class="italic text-white/70">\r
                    Troubleshooting Transparent Text in Tailwind: Common Issues & Fixes\r
                </p>\r
            </a>\r
            \r
\r
            <h3 class="text-2xl font-semibold mt-8 mb-4">📱 Making It Responsive</h3>\r
            <p class="mb-6">\r
                Tailwind makes responsiveness super easy. By using prefixes like <code>sm:</code> and <code>lg:</code>,\r
                we can change styles\r
                for small, medium, and large screens. For example, <code>text-4xl sm:text-6xl lg:text-8xl</code> ensures\r
                the text size adjusts\r
                according to screen size, so it doesn’t break on mobile.\r
            </p>\r
\r
            <h3 class="text-2xl font-semibold mt-8 mb-4">🧠 Where You Can Use This Effect</h3>\r
            <ul class="list-disc pl-5 space-y-3 mb-6">\r
                <li>Hero sections on a landing page</li>\r
                <li>Portfolio showcases with background imagery</li>\r
                <li>Creative titles on automotive, fashion, or photography sites</li>\r
                <li>Even as a welcome banner on a personal blog!</li>\r
            </ul>\r
\r
            <a href="real-world-examples.html">\r
                <p class="italic text-white/70">\r
                    Real-World Uses of Transparent Text in Web Design\r
                </p>\r
            </a>\r
\r
            <h3 class="text-2xl font-semibold mt-8 mb-4">💻 Source Code</h3>\r
            <p class="mb-4">Here’s the exact code used for this transparent text effect:</p>\r
\r
            <pre class="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;div\r
  class="flex justify-center items-center min-h-[70vh] mx-auto mt-10 rounded-[2rem] bg-[url('../images/form-bg.jpeg')] bg-cover bg-center border-4 max-w-[95%] sm:max-w-[80%] lg:max-w-[60%] px-4"\r
  data-aos="fade-up" data-aos-delay="200"&gt;\r
  &lt;p class="text-4xl sm:text-6xl lg:text-8xl font-serif font-extrabold shadow-2xl mix-blend-overlay text-center"&gt;\r
    Beautiful Porsche in Rain\r
  &lt;/p&gt;\r
&lt;/div&gt;</code></pre>\r
\r
            <h3 class="text-2xl font-semibold mt-8 mb-4">🚀 Final Tips</h3>\r
            <ul class="list-disc pl-5 space-y-2 mb-8">\r
                <li>Pick a background image that has good contrast with text for visibility.</li>\r
                <li>Test on mobile and tablet views to ensure text isn’t too large or small.</li>\r
                <li>Experiment with other blend modes like <code>mix-blend-multiply</code> or <code>difference</code>\r
                    for creative results!</li>\r
            </ul>\r
\r
            <a href="enhance.html">\r
                <p class="italic text-white/70">\r
                    Level Up: Enhancing the Transparent Text Effect With Tailwind Add-ons\r
                </p>\r
            </a>\r
\r
            <p class="mt-10 font-serif">\r
                Hope this tutorial helped you learn something new today. Stay creative and keep building cool stuff!\r
            </p>\r
\r
        </article> -->\r
\r
        <article class="mt-10">\r
            <h2 class="text-3xl font-bold mb-6">How to Make Transparent Text Over an Image with Tailwind CSS</h2>\r
\r
            <p class="mb-6">\r
                Transparent text effects look stylish and eye-catching, especially when placed over high-quality\r
                background images.\r
                In this mini project, we used Tailwind CSS to create a clean and responsive transparent text layout with\r
                just a few lines of code.\r
                Let's break it down so you can understand exactly how it works and try it on your own website!\r
            </p>\r
\r
            <h3 class="text-2xl font-semibold mt-8 mb-4">🖼️ What Is Transparent Text and Why Use It?</h3>\r
            <p class="mb-6">\r
                Transparent text is text that appears to "blend" with the image behind it. It lets the background image\r
                shine through\r
                while still displaying the message. This is often used in portfolio banners, fashion websites,\r
                automotive showcases, and\r
                anywhere you want a dramatic and modern look.\r
                <a data-router-link="transparent-text-effect-fun-facts">\r
                    <p class="italic text-white/70">\r
                        5 Fun Facts About Transparent Text Effects You Probably Didn't Know!\r
                    </p>\r
\r
                </a>\r
            </p>\r
\r
            <h3 class="text-2xl font-semibold mt-8 mb-4">🔍 How the Code Works</h3>\r
            <p class="mb-4">Let's go step by step:</p>\r
            <ul class="list-disc pl-5 space-y-3 mb-6">\r
                <li><strong>Container Div:</strong> We created a <code>&lt;div&gt;</code> with Tailwind classes like\r
                    <code>flex</code>, <code>justify-center</code>, <code>items-center</code>, and\r
                    <code>min-h-[70vh]</code> to center the text both horizontally and vertically inside the box.\r
                </li>\r
\r
                <li><strong>Background Image:</strong> The background image is applied directly with Tailwind's custom\r
                    class <code>bg-[url('...')]</code>. We used <code>bg-cover</code> and <code>bg-center</code> to\r
                    ensure the image fills the container nicely.</li>\r
\r
                <li><strong>Rounded Borders and Responsiveness:</strong> Classes like <code>rounded-3xl</code>,\r
                    <code>max-w-[95%]</code>, <code>sm:max-w-[80%]</code>, and <code>lg:max-w-[60%]</code> make the\r
                    layout responsive and look smooth on all screen sizes.\r
                </li>\r
\r
                <li><strong>Transparent Text:</strong> The real magic comes from <code>mix-blend-overlay</code>. This\r
                    makes the text blend with the background image, creating that transparent, see-through effect. We\r
                    also used <code>text-8xl</code> and <code>font-extrabold</code> to make the text large and dramatic.\r
                </li>\r
\r
                <li><strong>Animations:</strong> With the help of AOS (Animate on Scroll), we added a fade-up effect to\r
                    make the section feel more interactive as users scroll down.</li>\r
            </ul>\r
            <a data-router-link="transparent-text-effect-problem-solving-approaches">\r
                <p class="italic text-white/70">\r
                    Troubleshooting Transparent Text in Tailwind: Common Issues & Fixes\r
                </p>\r
            </a>\r
\r
\r
            <h3 class="text-2xl font-semibold mt-8 mb-4">📱 Making It Responsive</h3>\r
            <p class="mb-6">\r
                Tailwind makes responsiveness super easy. By using prefixes like <code>sm:</code> and <code>lg:</code>,\r
                we can change styles\r
                for small, medium, and large screens. For example, <code>text-4xl sm:text-6xl lg:text-8xl</code> ensures\r
                the text size adjusts\r
                according to screen size, so it doesn't break on mobile.\r
            </p>\r
\r
            <h3 class="text-2xl font-semibold mt-8 mb-4">🧠 Where You Can Use This Effect</h3>\r
            <ul class="list-disc pl-5 space-y-3 mb-6">\r
                <li>Hero sections on a landing page</li>\r
                <li>Portfolio showcases with background imagery</li>\r
                <li>Creative titles on automotive, fashion, or photography sites</li>\r
                <li>Even as a welcome banner on a personal blog!</li>\r
            </ul>\r
\r
            <a data-router-link="transparent-text-effect-real-world-examples">\r
                <p class="italic text-white/70">\r
                    Real-World Uses of Transparent Text in Web Design\r
                </p>\r
            </a>\r
\r
            <h3 class="text-2xl font-semibold mt-8 mb-4">💻 Source Code</h3>\r
            <p class="mb-4">Here's the exact code used for this transparent text effect:</p>\r
\r
            <pre class="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;div\r
  class="flex justify-center items-center min-h-[70vh] mx-auto mt-10 rounded-[2rem] bg-[url('../images/form-bg.jpeg')] bg-cover bg-center border-4 max-w-[95%] sm:max-w-[80%] lg:max-w-[60%] px-4"\r
  data-aos="fade-up" data-aos-delay="200"&gt;\r
  &lt;p class="text-4xl sm:text-6xl lg:text-8xl font-serif font-extrabold shadow-2xl mix-blend-overlay text-center"&gt;\r
    Beautiful Porsche in Rain\r
  &lt;/p&gt;\r
&lt;/div&gt;</code></pre>\r
\r
            <h3 class="text-2xl font-semibold mt-8 mb-4">🚀 Final Tips</h3>\r
            <ul class="list-disc pl-5 space-y-2 mb-8">\r
                <li>Pick a background image that has good contrast with text for visibility.</li>\r
                <li>Test on mobile and tablet views to ensure text isn't too large or small.</li>\r
                <li>Experiment with other blend modes like <code>mix-blend-multiply</code> or <code>difference</code>\r
                    for creative results!</li>\r
            </ul>\r
\r
            <a data-router-link="transparent-text-effect-enhance">\r
                <p class="italic text-white/70">\r
                    Level Up: Enhancing the Transparent Text Effect With Tailwind Add-ons\r
                </p>\r
            </a>\r
\r
            <p class="mt-10 font-serif">\r
                Hope this tutorial helped you learn something new today. Stay creative and keep building cool stuff!\r
            </p>\r
        </article>\r
\r
    </main>\r
</body>\r
\r
</html>`,qe=`<section\r
            class="flex justify-center items-center min-h-[70vh] mx-auto mt-10 rounded-3xl bg-[url('/images/form-bg.jpeg')] bg-cover bg-center border-4 max-w-[95%] sm:max-w-[80%] lg:max-w-[60%] px-4"\r
            data-aos="fade-up" data-aos-delay="200">\r
            <p\r
                class="text-4xl sm:text-6xl lg:text-8xl font-extrabold mix-blend-overlay shadow-2xl text-center leading-tight">\r
                Beautiful Porsche in Rain\r
            </p>\r
        </section>`,Zc=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Enhancing Transparent Text Effects With Tailwind Add-ons</title>\r
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">\r
\r
\r
</head>\r
\r
<body class="min-h-screen bg-gradient-to-br from-violet-500 to-f\r
uchsia-500">\r
\r
    <main>\r
\r
        <article class="mt-16 px-4 sm:px-10 lg:px-20 max-w-5xl mx-auto text-white/90">\r
            <h2 class="text-3xl font-bold mb-6">Level Up: Enhancing Transparent Text Effects With Tailwind Add-ons</h2>\r
\r
            <p class="mb-4">Once you’ve mastered the basic transparent text effect, it’s time to take things to the next\r
                level. With a few Tailwind tools and creative add-ons, you can build immersive, dynamic text sections\r
                that feel modern and professional. Let’s explore how.</p>\r
\r
            <h3 class="text-2xl font-semibold mt-6 mb-2">1. Add Animations With AOS or Tailwind Plugins</h3>\r
            <p class="mb-4">You can use <a href="https://michalsnik.github.io/aos/" class="underline">AOS (Animate On\r
                    Scroll)</a> to animate the text as users scroll down your site. This draws attention and improves\r
                engagement.</p>\r
            <p class="text-6xl font-bold mix-blend-overlay" data-aos="fade-up" data-aos-delay="100">Inspire with Style\r
            </p>\r
            <p class="mb-4">Tailwind's built-in classes like <code>animate-fade-in</code> (if extended in your config)\r
                can also be used to bring your content to life.</p>\r
            <h3 class="text-2xl font-semibold mt-6 mb-2">2. Apply Gradient Overlays for More Depth</h3>\r
            <p class="mb-4">To improve contrast and visual harmony, add a subtle gradient layer over your background\r
                image. This also helps the transparent text pop better without needing to darken the image manually.</p>\r
            <div class="relative">\r
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>\r
                <p class="relative text-7xl font-bold mix-blend-overlay">Smooth Gradients</p>\r
            </div>\r
            <h3 class="text-2xl font-semibold mt-6 mb-2">3. Use Better Fonts</h3>\r
            <p class="mb-4">Transparent text works best with strong fonts. Use a font from Google Fonts like\r
                <code>Merriweather</code>, <code>Playfair Display</code>, or <code>Bebas Neue</code> for visual impact.\r
            </p>\r
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"\r
                rel="stylesheet">\r
            <p class="font-['Playfair_Display'] text-6xl mix-blend-overlay">Elegance in Every Pixel</p>\r
            <h3 class="text-2xl font-semibold mt-6 mb-2">4. Make It Interactive</h3>\r
            <p class="mb-4">Want to turn it into a clickable area? Wrap the text in a link and apply hover effects:</p>\r
            <a href="/projects" class="block transition hover:scale-105">\r
                <p class="text-7xl mix-blend-overlay">View Projects</p>\r
            </a>\r
            <h3 class="text-2xl font-semibold mt-6 mb-2">5. Try Background Videos</h3>\r
            <p class="mb-4">For a modern look, use a muted video background behind your transparent text. This works\r
                especially well on headers or hero sections.</p>\r
            <div class="relative overflow-hidden">\r
                <video autoplay muted loop class="absolute w-full h-full object-cover">\r
                    <source src="video.mp4" type="video/mp4" />\r
                </video>\r
                <p class="relative text-8xl font-bold mix-blend-overlay z-10">Create Motion</p>\r
            </div>\r
            <p class="italic mt-6 text-white/70">Remember: subtlety is key. Don't overdo the effects — instead, use them\r
                to draw attention where it matters most.</p>\r
        </article>\r
\r
    </main>\r
\r
\r
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
    <script>\r
        AOS.init();\r
    <\/script>\r
</body>\r
\r
</html>`,np=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Troubleshooting Transparent Text in Tailwind</title>\r
    <link href="/src/output.css" rel="stylesheet">\r
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">\r
\r
\r
</head>\r
\r
<body class="min-h-screen bg-gradient-to-br from-violet-500 to-f\r
uchsia-500">\r
\r
\r
    <main>\r
        <article class="mt-16 px-4 sm:px-10 lg:px-20 max-w-5xl mx-auto text-white/90">\r
  <h2 class="text-3xl font-bold mb-6">Troubleshooting Transparent Text in Tailwind: Common Issues & Fixes</h2>\r
\r
  <p class="mb-4">Transparent text effects look great, but getting them to work perfectly can be tricky—especially for beginners. This article walks through some common issues you might face when implementing transparent text using Tailwind CSS and how to solve them step by step.</p>\r
\r
  <h3 class="text-2xl font-semibold mt-6 mb-2">1. Transparent Text Doesn’t Look Transparent</h3>\r
  <p class="mb-4">This is the most common issue! The text might look like a solid color instead of blending with the background image. That usually means you're missing the <code>mix-blend-mode</code> class.</p>\r
  <p class="mb-4">✅ <strong>Fix:</strong> Add <code>mix-blend-overlay</code>, <code>mix-blend-multiply</code>, or <code>mix-blend-screen</code> depending on your desired effect.</p>\r
\r
  <h3 class="text-2xl font-semibold mt-6 mb-2">2. Text Is Hard to Read</h3>\r
  <p class="mb-4">Transparent text can sometimes lose visibility depending on your background image. This is common when the image has light and dark patches.</p>\r
  <p class="mb-4">✅ <strong>Fix:</strong> Add <code>shadow-xl</code> or <code>drop-shadow-lg</code> to the text for better contrast. You can also darken the image slightly using a semi-transparent black overlay.</p>\r
\r
  \`\`\`html\r
  <div class="relative p-5">\r
    <img src="/images/card1.jpeg" class="absolute inset-0 w-full h-full object-cover opacity-80" />\r
    <div class="absolute inset-0 bg-black/30"></div>\r
    <p class="relative text-7xl font-extrabold mix-blend-overlay shadow-2xl">Stunning Design</p>\r
  </div>\r
<h3 class="text-2xl font-semibold mt-6 mb-2">3. Background Image Not Displaying</h3> <p class="mb-4">If the background image isn't loading, the transparent effect won't work at all. This can happen due to incorrect image paths or missing Tailwind support for arbitrary values.</p> <p class="mb-4">✅ <strong>Fix:</strong> Ensure the file path is correct and that your Tailwind config allows arbitrary values or use custom classes if needed. If using local images, confirm the file is in the right folder relative to your HTML or component file.</p> <h3 class="text-2xl font-semibold mt-6 mb-2">4. Responsive Problems on Smaller Screens</h3> <p class="mb-4">Large transparent text may overflow or become unreadable on mobile screens if you don’t adjust font sizes responsively.</p> <p class="mb-4">✅ <strong>Fix:</strong> Use Tailwind’s responsive font utilities like <code>text-4xl sm:text-6xl lg:text-8xl</code> to scale text based on screen size.</p> <h3 class="text-2xl font-semibold mt-6 mb-2">Final Tip</h3> <p class="mb-4 italic">Always test your design on real devices or in Chrome DevTools. What looks great on desktop might need tweaks on mobile!</p> </article> \`\`\`\r
    </main>\r
\r
\r
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
    <script>\r
        AOS.init();\r
    <\/script>\r
</body>\r
\r
</html>`,ep=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Real-World Uses of Transparent Text in Web Design</title>\r
    <link href="/src/output.css" rel="stylesheet">\r
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">\r
\r
\r
</head>\r
\r
<body class="min-h-screen bg-gradient-to-br from-violet-500 to-f\r
uchsia-500">\r
\r
    <main>\r
\r
        <article class="mt-16 px-4 sm:px-10 lg:px-20 max-w-5xl mx-auto text-white/90">\r
  <h2 class="text-3xl font-bold mb-6">Real-World Uses of Transparent Text in Web Design</h2>\r
\r
  <p class="mb-4">Transparent text isn’t just a trendy design trick—it’s a powerful visual technique used across various industries to create high-impact, elegant, and immersive websites. In this article, we’ll look at some real-life scenarios where transparent text makes a real difference.</p>\r
\r
  <h3 class="text-2xl font-semibold mt-6 mb-2">1. Car Dealership and Automotive Landing Pages</h3>\r
  <p class="mb-4">Luxury car brands like Porsche or Tesla use transparent text on top of high-resolution car images. It gives a futuristic, glossy appearance while keeping the visual focus on the product.</p>\r
  <p class="mb-4">Transparent headers like <em>"Feel the Power"</em> or <em>"Driven by Innovation"</em> are common, paired with dark overlays or background videos for cinematic vibes.</p>\r
\r
  <h3 class="text-2xl font-semibold mt-6 mb-2">2. Photography and Portfolio Websites</h3>\r
  <p class="mb-4">Photographers often want to showcase their work without obstruction. Transparent text helps them label images, titles, or themes without taking away from the image’s beauty.</p>\r
  <p class="mb-4">In wedding or travel portfolios, you might see transparent text like <em>"Moments in Morocco"</em> gently overlaying an emotional photo, telling a story subtly.</p>\r
\r
  <h3 class="text-2xl font-semibold mt-6 mb-2">3. Fashion and Luxury Brands</h3>\r
  <p class="mb-4">Brands like Gucci, Balenciaga, or Chanel use serif transparent text over minimalist visuals to create a classy, editorial-style layout.</p>\r
  <p class="mb-4">Fonts like Playfair Display or Didot are popular choices here to maintain elegance and readability.</p>\r
\r
  <h3 class="text-2xl font-semibold mt-6 mb-2">4. Travel Agency Websites</h3>\r
  <p class="mb-4">Transparent text effects on background images of destinations give users a teaser of experiences. You may see text like <em>“Explore Iceland”</em> floating on a mountain range or waterfall image with a CTA button below.</p>\r
\r
  <h3 class="text-2xl font-semibold mt-6 mb-2">5. Web Design & Creative Agencies</h3>\r
  <p class="mb-4">Design portfolios often use large, animated transparent typography to wow potential clients. It shows their creativity and mastery of modern CSS features like blend modes and AOS animations.</p>\r
\r
  <p class="italic mt-6 text-white/70">Whether you're building a commercial site or personal project, transparent text helps elevate the look and feel—especially when paired with strong visuals and great typography.</p>\r
</article>\r
\r
\r
    </main>\r
\r
\r
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
    <script>\r
        AOS.init();\r
    <\/script>\r
</body>\r
\r
</html>`,tp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>5 Fun Facts About Transparent Text Effects</title>\r
    <link href="/src/output.css" rel="stylesheet">\r
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">\r
\r
\r
</head>\r
\r
<body class="min-h-screen bg-gradient-to-br from-violet-500 to-f\r
uchsia-500">\r
    <main>\r
\r
        <article class="mt-16 px-4 sm:px-10 lg:px-20 max-w-5xl mx-auto text-white/90" data-aos="fade-up">\r
            <h1 class="text-3xl font-bold mb-6">Fun Facts About Transparent Text Effects You Probably Didn’t Know!</h1>\r
\r
            <p>Transparent text effects are a popular design trend that adds a sleek, modern touch to websites, social\r
                media graphics, and branding materials. But beyond their aesthetic appeal, there are some fascinating\r
                things about transparent text that might surprise you. Let’s dive into some fun facts you probably\r
                didn’t know!</p>\r
\r
            <h2 class="text-2xl font-bold mb-6">1. Transparent Text Isn’t Actually “See-Through”</h2>\r
            <p>You might think transparent text lets the background show through, but in reality, it’s often created\r
                using blending modes like <strong>Multiply, Screen, or Overlay</strong> in design software. These modes\r
                interact with layers beneath them to create the illusion of transparency without actually reducing\r
                opacity to zero.</p>\r
\r
            <h2 class="text-2xl font-bold mb-6">2. It Dates Back to Early Print Design</h2>\r
            <p>While transparent text effects are trendy in digital design today, the concept originated in\r
                <strong>print media</strong>. Designers used techniques like <strong>knockout text</strong> and\r
                <strong>overprinting</strong> to create layered, semi-transparent effects in magazines and posters long\r
                before Photoshop existed.</p>\r
\r
            <h2 class="text-2xl font-bold mb-6">3. CSS Makes It Easy to Create Transparent Text on Websites</h2>\r
            <p>Want to add transparent text to your website? With CSS, you can use:</p>\r
            <code>\r
        .transparent-text {<br>\r
        &nbsp;&nbsp;color: rgba(255, 255, 255, 0.5); /* Adjust opacity with the last value */<br>\r
        &nbsp;&nbsp;mix-blend-mode: overlay;<br>\r
        }\r
    </code>\r
            <p>This allows text to blend seamlessly with background images or gradients.</p>\r
\r
            <h2 class="text-2xl font-bold mb-6">4. Some Fonts Work Better Than Others</h2>\r
            <p>Not all fonts look great with transparency. <strong>Bold, sans-serif fonts</strong> (like Helvetica or\r
                Montserrat) tend to work best because their thick strokes maintain readability even when partially\r
                see-through. Delicate or script fonts may become hard to read.</p>\r
\r
            <h2 class="text-2xl font-bold mb-6">5. Transparent Text Can Improve Visual Hierarchy</h2>\r
            <p>By adjusting transparency, designers can <strong>guide the viewer’s attention</strong>. For example,\r
                semi-transparent text over a busy background can make other elements (like buttons or headlines) stand\r
                out more.</p>\r
\r
            <h2 class="text-2xl font-bold mb-6">6. It Was a Big Trend in 2010s UI Design</h2>\r
            <p>Remember the <strong>frosted glass (glassmorphism)</strong> trend? Apple’s iOS 7 popularized translucent\r
                text and elements, making interfaces feel more layered and dynamic. This style is still used today in\r
                apps and web design.</p>\r
\r
            <h2 class="text-2xl font-bold mb-6">7. You Can Create Transparent Text in Just 3 Steps</h2>\r
            <p>Want to try it yourself? Here’s a quick Photoshop method:</p>\r
            <ul>\r
                <li>Type your text.</li>\r
                <li>Lower the layer opacity (e.g., 50%).</li>\r
                <li>Set the blending mode to <strong>Overlay</strong> or <strong>Soft Light</strong> for a smooth\r
                    effect.</li>\r
            </ul>\r
\r
            <h2 class="text-2xl font-bold mb-6">8. It’s Not Always About Aesthetics—Sometimes It’s Functional</h2>\r
            <p>Transparent text isn’t just for looks. In <strong>video editing</strong>, semi-transparent subtitles\r
                improve readability without fully blocking the scene. Similarly, watermarks use transparency to deter\r
                theft while remaining unobtrusive.</p>\r
\r
            <h2 class="text-2xl font-bold mb-6">9. Some Logos Use Transparent Text Tricks</h2>\r
            <p>Brands like <strong>FedEx and Sony</strong> have used subtle transparency effects in their logos to\r
                create hidden meanings or layered visuals. For example, the negative space in the FedEx logo forms an\r
                arrow, while some Sony ads use translucent text for a futuristic feel.</p>\r
\r
            <h2 class="text-2xl font-bold mb-6">10. AI Tools Can Generate Transparent Text Instantly</h2>\r
            <p>With AI-powered design tools like <strong>Canva, Figma plugins, and Adobe Firefly</strong>, you can now\r
                generate transparent text effects with just a few clicks—no manual blending required!</p>\r
\r
            <div class="final-thoughts">\r
                <h3>Final Thoughts</h3>\r
                <p>Transparent text effects are more than just a visual trick—they’re a blend of design history,\r
                    psychology, and modern tech. Whether you’re a graphic designer, web developer, or just a curious\r
                    creative, experimenting with transparency can open up new possibilities for your projects.</p>\r
                <p>Have you tried using transparent text in your designs? Share your favorite technique in the comments!\r
                    🚀</p>\r
            </div>\r
\r
            <p><strong>Enjoyed this article?</strong> Follow for more design tips and fun facts! #DesignTrends\r
                #TransparentText #GraphicDesign</p>\r
        </article>\r
\r
    </main>\r
\r
\r
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
    <script>\r
        AOS.init();\r
    <\/script>\r
</body>\r
\r
</html>`,sp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
  <meta charset="UTF-8">\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
  <title>Crazy Neon Hover Effect on Icons</title>\r
  <!-- <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet"> -->\r
   <!-- public/index.html -->\r
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />\r
\r
</head>\r
\r
<body class="min-h-screen bg-gradient-to-br from-violet-500 to-f font-serif">\r
\r
  <main>\r
    <h1 class="text-center text-3xl sm:text-4xl mt-8 px-4" data-aos="fade-up">\r
      Crazy Neon Hover Effect on Icons\r
    </h1>\r
\r
\r
    <div\r
      class="flex justify-center overflow-hidden items-center min-h-[70vh] mx-auto mt-10 rounded-[2rem] bg-gradient-to-br from-purple-800 to-blue-800 bg-cover bg-center border-4 max-w-[95%] sm:max-w-[90%] lg:max-w-[90%] px-4"\r
      data-aos="fade-up" data-aos-delay="200">\r
\r
      <div\r
        class="flex flex-wrap justify-center items-center w-full gap-4 sm:gap-6 md:gap-8 min-h-[30vh] text-green-700 p-2 sm:p-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"\r
        id="icon-container">\r
      </div>\r
    </div>\r
\r
    <article class="max-w-5xl mx-auto p-4 sm:p-6 text-white font-sans">\r
      <header class="text-center mb-12">\r
        <h1 class="text-3xl sm:text-5xl font-bold text-lime-300 drop-shadow-lg mb-4" data-aos="fade-up">\r
          🌟 Create a Neon Hover Icon Grid with Tailwind CSS & JavaScript\r
        </h1>\r
        <p class="text-lg sm:text-xl text-gray-200 mb-6 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">\r
          Learn how to build an interactive, glowing icon grid using Tailwind CSS and Vanilla JavaScript. Perfect for\r
          beginners looking to explore hover effects, responsive design, and Font Awesome icons.\r
        </p>\r
        <div class="flex justify-center gap-4 mb-8">\r
         \r
          <a href="#code" class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-all"\r
            data-aos="fade-up" data-aos-delay="300">Get Code</a>\r
        </div>\r
      </header>\r
\r
      <section class="mb-12 bg-white/10 p-6 rounded-xl border border-lime-300/20" data-aos="fade-up">\r
        <h2 class="text-2xl font-semibold mb-4 text-lime-400 flex items-center">\r
          <span class="bg-lime-500 text-white p-2 rounded-full mr-3">🎯</span> Project Overview\r
        </h2>\r
        <div class="grid md:grid-cols-2 gap-6">\r
          <div>\r
            <p class="text-gray-100 mb-4">\r
              This tutorial teaches you to create a responsive grid of icons with a stunning neon glow effect that works\r
              on both desktop (hover) and mobile (tap). The effect uses Tailwind's drop-shadow utilities to create a\r
              realistic neon lighting appearance.\r
            </p>\r
            <p class="text-gray-100">\r
              We'll walk through the HTML structure, CSS styling with Tailwind, and JavaScript implementation to\r
              dynamically generate the icons. The final result is a visually striking component you can add to any\r
              project.\r
            </p>\r
          </div>\r
          <div class="bg-gray-900 p-4 rounded-lg border border-lime-300/10">\r
            <h3 class="text-lg font-medium text-lime-300 mb-2">Key Features:</h3>\r
            <ul class="list-disc list-inside space-y-2 text-gray-200">\r
              <li>Responsive grid layout</li>\r
              <li>Neon glow hover/tap effects</li>\r
              <li>60+ Font Awesome icons</li>\r
              <li>Subtle animations with AOS</li>\r
              <li>Mobile-friendly interactions</li>\r
            </ul>\r
          </div>\r
        </div>\r
      </section>\r
\r
\r
\r
      <section class="mb-12" data-aos="fade-up">\r
        <h2 class="text-2xl font-semibold mb-6 text-lime-400 flex items-center">\r
          <span class="bg-lime-500 text-white p-2 rounded-full mr-3">🛠️</span> Step-by-Step Implementation\r
        </h2>\r
\r
        <div class="space-y-8">\r
          <!-- Step 1 -->\r
          <div class="bg-white/5 p-6 rounded-xl border-l-4 border-lime-400">\r
            <h3 class="text-xl font-semibold mb-3 text-lime-300">1. HTML Structure Setup</h3>\r
            <p class="text-gray-100 mb-4">First, we set up the basic HTML structure with a container for our icons:</p>\r
            <div class="overflow-x-auto w-full max-w-full">\r
\r
            \r
            <pre class="bg-gray-900 p-4 rounded-md overflow-x-auto text-sm text-green-400"><code>&lt;!DOCTYPE html&gt;\r
&lt;html lang="en"&gt;\r
&lt;head&gt;\r
  &lt;meta charset="UTF-8"&gt;\r
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;\r
  &lt;title&gt;Neon Icon Grid&lt;/title&gt;\r
  &lt;!-- Tailwind CSS --&gt;\r
  &lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;\r
  &lt;!-- Font Awesome --&gt;\r
  &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"&gt;\r
&lt;/head&gt;\r
&lt;body class="bg-gradient-to-br from-violet-900 to-fuchsia-900 min-h-screen"&gt;\r
  &lt;main class="container mx-auto p-4"&gt;\r
    &lt;h1 class="text-4xl font-bold text-center text-lime-300 mb-8"&gt;Neon Icon Grid&lt;/h1&gt;\r
    &lt;div id="icon-container" class="flex flex-wrap justify-center gap-6 p-4"&gt;&lt;/div&gt;\r
  &lt;/main&gt;\r
  &lt;script src="icons.js"&gt;&lt;/script&gt;\r
&lt;/body&gt;\r
&lt;/html&gt;</code></pre>\r
          </div>\r
          </div>\r
\r
          <!-- Step 2 -->\r
          <div class="bg-white/5 p-6 rounded-xl border-l-4 border-lime-400">\r
            <h3 class="text-xl font-semibold mb-3 text-lime-300">2. JavaScript Implementation</h3>\r
            <p class="text-gray-100 mb-4">Create a JavaScript file to generate our icons dynamically:</p>\r
            <pre class="bg-gray-900 p-4 rounded-md overflow-auto text-sm text-green-400"><code>// icons.js\r
const iconClasses = [\r
  // Technology\r
  'fas fa-laptop', 'fas fa-mobile-alt', 'fas fa-headphones',\r
  'fas fa-gamepad', 'fas fa-server', 'fas fa-database',\r
  // Emotions\r
  'fas fa-smile', 'fas fa-laugh-squint', 'fas fa-grin-hearts',\r
  'fas fa-grin-stars', 'fas fa-grin-squint-tears',\r
  // Food\r
  'fas fa-coffee', 'fas fa-pizza-slice', 'fas fa-ice-cream',\r
  // Activities\r
  'fas fa-music', 'fas fa-paint-brush', 'fas fa-dice',\r
  // Objects\r
  'fas fa-rocket', 'fas fa-bolt', 'fas fa-trophy',\r
  // Repeat some for more variety\r
  'fas fa-camera', 'fas fa-video', 'fas fa-volume-up'\r
];\r
\r
const container = document.getElementById('icon-container');\r
\r
iconClasses.forEach(iconClass => {\r
  const icon = document.createElement('i');\r
  icon.className = \`\${iconClass} text-4xl md:text-5xl text-green-600 \r
    transition-all duration-300 cursor-pointer\r
    hover:text-lime-300 hover:scale-125\r
    hover:drop-shadow-[0_0_5px_#4ade80]\r
    hover:drop-shadow-[0_0_10px_#4ade80,0_0_20px_#22c55e,0_0_40px_#16a34a]\r
    focus:text-lime-300 focus:scale-125\r
    focus:drop-shadow-[0_0_5px_#4ade80]\r
    active:text-lime-300 active:scale-125\r
    active:drop-shadow-[0_0_10px_#4ade80,0_0_20px_#22c55e,0_0_40px_#16a34a]\`;\r
  \r
  // Make icons keyboard accessible\r
  icon.setAttribute('tabindex', '0');\r
  container.appendChild(icon);\r
});</code></pre>\r
          </div>\r
\r
          <!-- Step 3 -->\r
          <div class="bg-white/5 p-6 rounded-xl border-l-4 border-lime-400">\r
            <h3 class="text-xl font-semibold mb-3 text-lime-300">3. Enhancing the Design</h3>\r
            <p class="text-gray-100 mb-4">Let's improve the visual appeal with these Tailwind enhancements:</p>\r
            <pre class="bg-gray-900 p-4 rounded-md overflow-auto text-sm text-green-400"><code>/* Add to your container div */\r
#icon-container {\r
  @apply flex flex-wrap justify-center items-center \r
    gap-4 sm:gap-6 md:gap-8\r
    min-h-[50vh] p-6\r
    text-green-600\r
    text-3xl sm:text-4xl md:text-5xl;\r
}\r
\r
/* Container styling */\r
.container {\r
  @apply max-w-6xl mx-auto px-4 py-12;\r
}\r
\r
/* Background gradient */\r
body {\r
  @apply bg-gradient-to-br from-violet-900 to-fuchsia-900 min-h-screen;\r
}</code></pre>\r
          </div>\r
        </div>\r
      </section>\r
\r
      <section class="bg-gray-900/50 p-8 rounded-xl border border-lime-300/20 my-12" data-aos="fade-up">\r
        <article class="prose prose-invert max-w-none">\r
          <h2 class="text-3xl sm:text-4xl font-bold text-lime-300 mb-6">The Evolution of Web Animations: From GIFs to\r
            GPU-Accelerated Effects</h2>\r
\r
          <div class="flex items-center mb-8 bg-white/5 p-4 rounded-lg">\r
            <div class="mr-4">\r
              <span class="text-4xl">✨</span>\r
            </div>\r
            <div>\r
              <p class="text-gray-200 italic">"Animation isn't the art of drawings that move but the art of movements\r
                that are drawn." - Norman McLaren</p>\r
            </div>\r
          </div>\r
\r
          <h3 class="text-2xl font-semibold text-lime-400 mt-8 mb-4">The Early Days: Bringing Life to the Web</h3>\r
          <p>In 1998, the first animated GIFs appeared on GeoCities pages, blinking and flashing in 256 colors. These\r
            primitive animations revolutionized static web design but came with severe limitations - large file sizes,\r
            limited color palettes, and no interactivity. Developers quickly sought better solutions as the web evolved.\r
          </p>\r
\r
          <div\r
            class="my-8 p-6 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl border-l-4 border-lime-400">\r
            <h4 class="text-xl font-semibold text-lime-300 mb-3">Key Milestones in Web Animation</h4>\r
            <ul class="space-y-3">\r
              <li><strong>1996:</strong> First animated GIFs appear on websites</li>\r
              <li><strong>2001:</strong> Flash becomes the dominant animation platform</li>\r
              <li><strong>2005:</strong> jQuery introduces simple DOM animations</li>\r
              <li><strong>2011:</strong> CSS3 transitions and animations specification</li>\r
              <li><strong>2014:</strong> Web Animations API draft published</li>\r
              <li><strong>2016:</strong> CSS Grid and widespread GPU acceleration</li>\r
              <li><strong>2020:</strong> Motion One and other performant JS libraries emerge</li>\r
            </ul>\r
          </div>\r
\r
          <h3 class="text-2xl font-semibold text-lime-400 mt-8 mb-4">Modern Animation Techniques</h3>\r
          <p>Today's web animations leverage several advanced technologies that our neon icon grid demonstrates\r
            beautifully:</p>\r
\r
          <h4 class="text-xl font-semibold text-lime-300 mt-6 mb-3">1. CSS Transitions and Transforms</h4>\r
          <p>The <code>transition</code> and <code>transform</code> properties used in our icon grid allow smooth\r
            animations without JavaScript. When we scale icons on hover with <code>hover:scale-125</code>, we're using\r
            hardware-accelerated transforms that render efficiently.</p>\r
\r
          <pre class="bg-gray-800 p-4 rounded-md my-4 overflow-auto"><code class="language-css">.icon {\r
  transition: transform 0.3s ease, color 0.2s linear;\r
  transform: scale(1);\r
}\r
.icon:hover {\r
  transform: scale(1.25);\r
}</code></pre>\r
\r
          <h4 class="text-xl font-semibold text-lime-300 mt-6 mb-3">2. Advanced Filter Effects</h4>\r
          <p>Our neon glow uses Tailwind's <code>drop-shadow</code> utilities which leverage CSS filter effects. Modern\r
            browsers implement these using GPU acceleration, making them performant even with multiple layered shadows.\r
          </p>\r
\r
          <div class="grid md:grid-cols-2 gap-6 my-8">\r
            <div class="bg-white/5 p-4 rounded-lg">\r
              <h5 class="font-semibold text-lime-200">Performance Considerations</h5>\r
              <p class="text-sm">While filter effects are GPU-accelerated, they trigger paint operations. For 60fps\r
                animations, limit:</p>\r
              <ul class="list-disc list-inside text-sm mt-2 space-y-1">\r
                <li>Number of simultaneous filters</li>\r
                <li>Filter complexity (blur radius)</li>\r
                <li>Animated filter properties</li>\r
              </ul>\r
            </div>\r
            <div class="bg-white/5 p-4 rounded-lg">\r
              <h5 class="font-semibold text-lime-200">Accessibility Benefits</h5>\r
              <p class="text-sm">Our hover/focus/active states provide:</p>\r
              <ul class="list-disc list-inside text-sm mt-2 space-y-1">\r
                <li>Visual feedback for interactive elements</li>\r
                <li>Keyboard navigation support</li>\r
                <li>Clear affordances for touch devices</li>\r
              </ul>\r
            </div>\r
          </div>\r
\r
          <h3 class="text-2xl font-semibold text-lime-400 mt-8 mb-4">The Psychology of Motion</h3>\r
          <p>Effective animations serve functional purposes beyond aesthetics. Our neon icon grid implements several\r
            psychological principles:</p>\r
\r
          <div class="my-8">\r
            <div class="flex flex-col md:flex-row gap-6">\r
              <div class="flex-1 bg-white/5 p-6 rounded-lg">\r
                <h4 class="font-semibold text-lime-300 mb-2">Affordance Signaling</h4>\r
                <p>The glow effect clearly indicates interactive elements, reducing user hesitation and improving\r
                  engagement rates by up to 25% according to NNGroup research.</p>\r
              </div>\r
              <div class="flex-1 bg-white/5 p-6 rounded-lg">\r
                <h4 class="font-semibold text-lime-300 mb-2">Reward Feedback</h4>\r
                <p>Visual responses to user actions trigger dopamine release, creating positive reinforcement. Our 300ms\r
                  animation hits the sweet spot for perceived responsiveness.</p>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <h3 class="text-2xl font-semibold text-lime-400 mt-8 mb-4">Optimizing Animation Performance</h3>\r
          <p>To achieve buttery-smooth animations like in our icon grid, follow these performance guidelines:</p>\r
\r
          <ol class="list-decimal list-inside space-y-3 my-6">\r
            <li><strong>Prefer transforms and opacity:</strong> These properties can be composited by the GPU without\r
              repaints</li>\r
            <li><strong>Use will-change sparingly:</strong> Hint upcoming transformations with\r
              <code>will-change: transform</code>\r
            </li>\r
            <li><strong>Limit simultaneous animations:</strong> Chrome can handle about 100-150 animated properties at\r
              60fps</li>\r
            <li><strong>Debounce rapid events:</strong> Throttle hover animations when users quickly move across\r
              multiple items</li>\r
            <li><strong>Test on low-end devices:</strong> Use Chrome's CPU throttling to simulate mobile performance\r
            </li>\r
          </ol>\r
\r
          <div class="my-8 p-6 bg-gradient-to-br from-lime-900/30 to-green-900/30 rounded-xl">\r
            <h4 class="text-xl font-semibold text-lime-300 mb-3">Real-World Impact</h4>\r
            <p>Google's research shows pages with well-implemented animations see:</p>\r
            <ul class="list-disc list-inside space-y-2 mt-2">\r
              <li>15-20% lower bounce rates</li>\r
              <li>30% higher perceived performance</li>\r
              <li>40% better interaction recall</li>\r
            </ul>\r
            <p class="mt-4">Our neon icon grid exemplifies these principles through its responsive, performant\r
              animations that work across all device types.</p>\r
          </div>\r
\r
          <h3 class="text-2xl font-semibold text-lime-400 mt-8 mb-4">Future of Web Animations</h3>\r
          <p>Emerging technologies will build upon techniques like those used in our project:</p>\r
\r
          <div class="grid md:grid-cols-2 gap-6 my-8">\r
            <div class="bg-white/5 p-6 rounded-lg">\r
              <h4 class="font-semibold text-lime-300">WebGL & WebGPU</h4>\r
              <p>Next-generation graphics APIs will enable cinematic-quality animations directly in the browser, with\r
                particles, lighting effects, and physics simulations far beyond our current capabilities.</p>\r
            </div>\r
            <div class="bg-white/5 p-6 rounded-lg">\r
              <h4 class="font-semibold text-lime-300">Scroll-Driven Animations</h4>\r
              <p>New CSS features will allow animations tied to scroll position without JavaScript, enabling\r
                sophisticated storytelling techniques.</p>\r
            </div>\r
          </div>\r
\r
          <div class="border-t border-lime-300/20 pt-6 mt-8">\r
            <h3 class="text-2xl font-semibold text-lime-400 mb-4">Conclusion</h3>\r
            <p>From our humble neon icon grid to future WebGPU implementations, web animations continue evolving to\r
              create more engaging, intuitive interfaces. By understanding the technical foundations and psychological\r
              principles behind effective motion design, developers can create experiences that are not just visually\r
              stunning but genuinely improve usability.</p>\r
            <p class="mt-4">The techniques demonstrated in this project - GPU-accelerated transforms, thoughtful timing,\r
              and accessible interactions - represent current best practices that will remain relevant even as new\r
              technologies emerge.</p>\r
          </div>\r
        </article>\r
      </section>\r
\r
      <section id="code" class="mb-12" data-aos="fade-up">\r
        <h2 class="text-2xl font-semibold mb-6 text-lime-400 flex items-center">\r
          <span class="bg-lime-500 text-white p-2 rounded-full mr-3">📦</span> Complete Source Code\r
        </h2>\r
\r
        <div class="grid md:grid-cols-2 gap-6">\r
          <!-- HTML File -->\r
          <div class="bg-gray-900/50 p-6 rounded-xl border border-lime-300/10 overflow-auto">\r
            <h3 class="text-xl font-semibold mb-4 text-lime-300">index.html</h3>\r
            <pre class="bg-gray-900 p-4 rounded-md overflow-auto text-sm text-green-400"><code>&lt;!DOCTYPE html&gt;\r
&lt;html lang="en"&gt;\r
&lt;head&gt;\r
  &lt;meta charset="UTF-8"&gt;\r
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;\r
  &lt;title&gt;Neon Icon Grid&lt;/title&gt;\r
  &lt;link href="/src/output.css" rel="stylesheet"&gt;\r
  &lt;link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet"&gt;\r
  &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"&gt;\r
&lt;/head&gt;\r
&lt;body class="min-h-screen bg-gradient-to-br from-violet-900 to-fuchsia-900 font-serif"&gt;\r
  &lt;header&gt;\r
    &lt;nav class="flex items-center justify-between py-4 px-6"&gt;\r
      &lt;div class="w-20"&gt;\r
        &lt;a href="/"&gt;\r
          &lt;img src="logo.png" class="rounded-full hover:scale-110 transition duration-150" alt="Logo"&gt;\r
        &lt;/a&gt;\r
      &lt;/div&gt;\r
      &lt;div class="flex gap-6"&gt;\r
        &lt;a href="#" class="text-white hover:text-lime-300 transition"&gt;About&lt;/a&gt;\r
        &lt;a href="#" class="text-white hover:text-lime-300 transition"&gt;Contact&lt;/a&gt;\r
      &lt;/div&gt;\r
    &lt;/nav&gt;\r
  &lt;/header&gt;\r
\r
  &lt;main class="container mx-auto px-4 py-12"&gt;\r
    &lt;h1 class="text-4xl sm:text-5xl font-bold text-center text-lime-300 mb-12" data-aos="fade-up"&gt;\r
      Neon Icon Grid\r
    &lt;/h1&gt;\r
\r
    &lt;div id="icon-container" class="flex flex-wrap justify-center items-center \r
      gap-4 sm:gap-6 md:gap-8 min-h-[50vh] p-6\r
      text-green-600 text-3xl sm:text-4xl md:text-5xl\r
      rounded-2xl bg-gradient-to-br from-purple-800/50 to-blue-800/50\r
      border-2 border-lime-300/20" data-aos="fade-up" data-aos-delay="200"&gt;\r
    &lt;/div&gt;\r
  &lt;/main&gt;\r
\r
  &lt;script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"&gt;&lt;/script&gt;\r
  &lt;script&gt;\r
    AOS.init();\r
  &lt;/script&gt;\r
  &lt;script src="icons.js"&gt;&lt;/script&gt;\r
&lt;/body&gt;\r
&lt;/html&gt;</code></pre>\r
          </div>\r
\r
          <!-- JS File -->\r
          <div class="bg-gray-900/50 p-6 rounded-xl border border-lime-300/10 overflow-auto">\r
            <h3 class="text-xl font-semibold mb-4 text-lime-300">icons.js</h3>\r
            <pre class="bg-gray-900 p-4 rounded-md overflow-x-auto text-sm text-green-400"><code>// icons.js - Complete Version\r
const fontAwesomeClasses = [\r
  // Technology Icons\r
  'fas fa-laptop', 'fas fa-mobile-alt', 'fas fa-tablet-alt',\r
  'fas fa-desktop', 'fas fa-server', 'fas fa-database',\r
  'fas fa-microchip', 'fas fa-memory', 'fas fa-hdd',\r
  'fas fa-keyboard', 'fas fa-mouse', 'fas fa-headphones',\r
  'fas fa-gamepad', 'fas fa-vr-cardboard', 'fas fa-robot',\r
  \r
  // Communication Icons\r
  'fas fa-phone', 'fas fa-phone-alt', 'fas fa-envelope',\r
  'fas fa-comment', 'fas fa-comments', 'fas fa-comment-alt',\r
  \r
  // Creative Icons\r
  'fas fa-paint-brush', 'fas fa-palette', 'fas fa-music',\r
  'fas fa-film', 'fas fa-camera', 'fas fa-camera-retro',\r
  'fas fa-video', 'fas fa-microphone', 'fas fa-podcast',\r
  \r
  // Food Icons\r
  'fas fa-utensils', 'fas fa-pizza-slice', 'fas fa-hamburger',\r
  'fas fa-ice-cream', 'fas fa-cookie', 'fas fa-coffee',\r
  'fas fa-wine-glass-alt', 'fas fa-cocktail', 'fas fa-beer',\r
  \r
  // Activity Icons\r
  'fas fa-running', 'fas fa-biking', 'fas fa-swimmer',\r
  'fas fa-volleyball-ball', 'fas fa-football-ball', 'fas fa-basketball-ball',\r
  'fas fa-baseball-ball', 'fas fa-dumbbell', 'fas fa-golf-ball',\r
  \r
  // Emotion Icons\r
  'fas fa-smile', 'fas fa-smile-beam', 'fas fa-laugh-squint',\r
  'fas fa-grin-hearts', 'fas fa-grin-stars', 'fas fa-grin-squint-tears',\r
  'fas fa-meh', 'fas fa-frown', 'fas fa-sad-tear',\r
  \r
  // Weather Icons\r
  'fas fa-sun', 'fas fa-moon', 'fas fa-cloud',\r
  'fas fa-cloud-sun', 'fas fa-cloud-moon', 'fas fa-cloud-rain',\r
  'fas fa-snowflake', 'fas fa-wind', 'fas fa-bolt',\r
  \r
  // Other Fun Icons\r
  'fas fa-rocket', 'fas fa-ufo', 'fas fa-atom',\r
  'fas fa-user-astronaut', 'fas fa-space-shuttle', 'fas fa-meteor'\r
];\r
\r
const container = document.getElementById('icon-container');\r
\r
fontAwesomeClasses.forEach(className => {\r
  const iconElement = document.createElement('i');\r
  \r
  // Base classes for all icons\r
  iconElement.className = \`\${className} transition-all duration-300 cursor-pointer\r
    text-green-600 hover:text-lime-300 focus:text-lime-300 active:text-lime-300\r
    hover:scale-125 focus:scale-125 active:scale-125\r
    hover:drop-shadow-[0_0_5px_#4ade80] focus:drop-shadow-[0_0_5px_#4ade80]\r
    hover:drop-shadow-[0_0_10px_#4ade80,0_0_20px_#22c55e,0_0_40px_#16a34a]\r
    active:drop-shadow-[0_0_10px_#4ade80,0_0_20px_#22c55e,0_0_40px_#16a34a]\`;\r
  \r
  // Make icons keyboard accessible\r
  iconElement.setAttribute('tabindex', '0');\r
  iconElement.setAttribute('aria-label', className.replace('fas fa-', '') + ' icon');\r
  \r
  container.appendChild(iconElement);\r
});\r
\r
// Add click effect\r
container.addEventListener('click', (e) => {\r
  if (e.target.tagName === 'I') {\r
    e.target.classList.add('animate-ping');\r
    setTimeout(() => {\r
      e.target.classList.remove('animate-ping');\r
    }, 500);\r
  }\r
});</code></pre>\r
          </div>\r
        </div>\r
      </section>\r
\r
      <section class="mb-12" data-aos="fade-up">\r
        <h2 class="text-2xl font-semibold mb-6 text-lime-400 flex items-center">\r
          <span class="bg-lime-500 text-white p-2 rounded-full mr-3">🚀</span> Taking It Further\r
        </h2>\r
\r
        <div class="grid md:grid-cols-2 gap-6">\r
          <div class="bg-white/5 p-6 rounded-xl">\r
            <h3 class="text-xl font-semibold mb-3 text-lime-300">Enhancements Ideas</h3>\r
            <ul class="list-disc list-inside space-y-2 text-gray-100">\r
              <li>Add a search/filter functionality for icons</li>\r
              <li>Implement drag-and-drop to rearrange icons</li>\r
              <li>Create categories and tabs for different icon types</li>\r
              <li>Add sound effects on hover/click</li>\r
              <li>Implement a "dark mode" toggle</li>\r
            </ul>\r
          </div>\r
\r
          <div class="bg-white/5 p-6 rounded-xl">\r
            <h3 class="text-xl font-semibold mb-3 text-lime-300">Learning Resources</h3>\r
            <ul class="list-disc list-inside space-y-2 text-gray-100">\r
              <li><a href="https://tailwindcss.com/docs" class="text-lime-300 hover:underline">Tailwind CSS\r
                  Documentation</a></li>\r
              <li><a href="https://fontawesome.com/icons" class="text-lime-300 hover:underline">Font Awesome Icons</a>\r
              </li>\r
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"\r
                  class="text-lime-300 hover:underline">MDN JavaScript Guide</a></li>\r
              <li><a href="https://github.com/michalsnik/aos" class="text-lime-300 hover:underline">AOS Animation\r
                  Library</a></li>\r
            </ul>\r
          </div>\r
        </div>\r
      </section>\r
\r
      <footer class="mt-12 pt-6 border-t border-lime-300/20">\r
        <div class="text-center">\r
          <p class="text-gray-300 mb-4">\r
            Built with 💚 using Tailwind CSS, JavaScript, and Font Awesome.\r
          </p>\r
          <div class="flex justify-center gap-4">\r
            <a href="#" class="text-lime-300 hover:text-lime-200 transition">GitHub Repo</a>\r
            <a href="#" class="text-lime-300 hover:text-lime-200 transition">Twitter</a>\r
            <a href="#" class="text-lime-300 hover:text-lime-200 transition">Portfolio</a>\r
          </div>\r
        </div>\r
      </footer>\r
    </article>\r
\r
  </main>\r
\r
  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
  <script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js"><\/script>\r
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js"><\/script>\r
  <script>\r
    AOS.init();\r
  <\/script>\r
\r
  <script src="icons.js"><\/script>\r
\r
</body>\r
\r
</html>`,rp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
  <meta charset="UTF-8">\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
  <meta name="description"\r
    content="Create an interactive drag-and-drop puzzle game using Tailwind CSS and JavaScript. Fully responsive and mobile-friendly with smooth animations and source code included." />\r
\r
  <meta name="keywords"\r
    content="Drag and Drop Puzzle Game, Tailwind CSS Puzzle, JavaScript Puzzle Game, Interactive Grid Game, Responsive Puzzle Layout, HTML Puzzle Project, Beginner JavaScript Game, SortableJS Puzzle, Tailwind Grid Game" />\r
  <title>Puzzle game using javascript</title>\r
  <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">\r
  <style>\r
    a {cursor: pointer;}\r
  </style>\r
</head>\r
\r
<body class="min-h-screen bg-gradient-to-br from-violet-500 to-f font-serif">\r
\r
  <main>\r
    <h1 class="text-center text-3xl sm:text-4xl mt-8 px-4" data-aos="fade-up">\r
      Puzzle game using javascript\r
    </h1>\r
\r
\r
    <div class="container mx-auto px-4 py-8">\r
  <!-- Blog Content (responsive width) -->\r
  <div class="text-lg w-full md:w-3/4 lg:w-1/2 mx-auto mb-12" v-html="blog.content" ref="htmlContainer"></div>\r
  \r
  <!-- Puzzle Game Container -->\r
  <div class="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12">\r
    <!-- Puzzle Pieces -->\r
    <section\r
      id="puzzle-pieces"\r
      class="grid grid-cols-3 w-full max-w-[90vw] sm:max-w-[75vw] md:max-w-[50vw] lg:max-w-[30vw] aspect-square gap-2 sm:gap-3 md:gap-4"\r
    ></section>\r
    \r
    <!-- Dropzone -->\r
    <section\r
      id="dropzone"\r
      class="grid grid-cols-3 w-full max-w-[90vw] sm:max-w-[75vw] md:max-w-[50vw] lg:max-w-[30vw] aspect-square gap-2 sm:gap-3 md:gap-4"\r
    ></section>\r
  </div>\r
</div>\r
\r
\r
    <div class="text-center relative top-4 sm:bottom-20">\r
      <button class="px-6 py-3 bg-emerald-400 text-white rounded-2xl" onclick="location.reload()">Reset &\r
        Shuffle</button>\r
    </div>\r
\r
    <article class="mt-16 px-4 sm:px-10 lg:px-20 max-w-5xl mx-auto text-white/90">\r
\r
      <h1 class="text-4xl font-bold text-center mb-6">🧩 Build a Fun Drag-and-Drop Puzzle Game Using HTML, Tailwind CSS\r
        & JavaScript</h1>\r
\r
      <p>\r
        Looking for a simple yet exciting project to level up your frontend skills? This drag-and-drop puzzle game is a\r
        great way to practice your knowledge of HTML, Tailwind CSS, and JavaScript. Not only will it sharpen your DOM\r
        manipulation skills, but you'll also get to see how animations, drag-and-drop events, and styling come together\r
        in a real-world mini project.\r
      </p>\r
      <a data-router-link="drag-and-drop-puzzle-game-fun-facts" class="mt-6">\r
        <p class="text-cyan-300 italic">\r
          Fun Facts About Puzzle Games and Why They Boost Your Brain\r
        </p>\r
      </a>\r
\r
      <h2 class="text-2xl font-semibold mt-8">✨ What Will You Build?</h2>\r
      <p>\r
        You'll create a 3x3 puzzle grid, where shuffled image pieces can be dragged and dropped into the correct slots.\r
        The background image is split into 9 parts, and your task is to reassemble them by dragging the pieces into the\r
        correct layout.\r
      </p>\r
\r
      <a data-router-link="drag-and-drop-puzzle-game-real-world-examples" class="mt-6">\r
        <p class="text-cyan-300 italic">\r
          Real-World Uses of Puzzle Logic in Tech and Business\r
        </p>\r
      </a>\r
\r
      <h2 class="text-2xl font-semibold mt-8">🧱 Project Structure</h2>\r
      <p>This project contains the following files:</p>\r
      <ul class="list-disc pl-6">\r
        <pre class="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">\r
          <li><code>index.html</code> – The main HTML structure</li>\r
        <li><code>puzzle-game.js</code> – JavaScript logic for the game</li>\r
        <li><code>/images/puzzle-image-split/</code> – Folder with 9 split puzzle images</li>\r
        <li><code>/src/output.css</code> – Tailwind-generated stylesheet</li>\r
      </ul>\r
        </pre>\r
\r
\r
        <h2 class="text-2xl font-semibold mt-8">🔧 How It Works: Code Explanation</h2>\r
\r
        <h3 class="text-xl font-semibold mt-6">📄 HTML Structure</h3>\r
        <p>\r
          The HTML uses Tailwind classes to set up a responsive layout, a navigation bar with a logo, and two sections:\r
          one for draggable puzzle pieces and one for drop zones.\r
        </p>\r
\r
        <pre class="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;section class="grid grid-cols-3 grid-rows-3" id="puzzle-pieces"&gt;&lt;/section&gt;\r
&lt;section class="grid grid-cols-3 grid-rows-3" id="dropzone"&gt;&lt;/section&gt;</code></pre>\r
\r
        <h3 class="text-xl font-semibold mt-6">🖼️ Puzzle Initialization (JavaScript)</h3>\r
        <p>\r
          This block dynamically creates 9 puzzle pieces and assigns them a specific part of the full image using\r
          background images. Each image is draggable.\r
        </p>\r
\r
        <pre class="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm"><code>for (let i = 0; i &lt; 9; i++) {\r
  const row = Math.floor(i / 3) + 1;\r
  const column = (i % 3) + 1;\r
\r
  const cell = document.createElement('div');\r
  cell.classList = 'bg-white/40 min-h-[100px] w-full';\r
\r
  const puzzleImage = document.createElement('div');\r
  puzzleImage.classList = 'h-[100px] w-full bg-center bg-no-repeat bg-cover';\r
  puzzleImage.setAttribute('draggable', 'true');\r
  puzzleImage.setAttribute('ondragstart', 'drag(event)');\r
  puzzleImage.id = \`piece-\${row}-\${column}\`;\r
  puzzleImage.style.backgroundImage = \`url('/images/puzzle-image-split/row-\${row}-column-\${column}.jpg')\`;\r
\r
  cell.appendChild(puzzleImage);\r
  puzzle_pieces.appendChild(cell);\r
}</code></pre>\r
\r
        <h3 class="text-xl font-semibold mt-6">📦 Drop Zone Setup</h3>\r
        <p>\r
          The drop zone consists of empty grid cells that listen for drop events.\r
        </p>\r
\r
        <pre class="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm"><code>for (let i = 0; i &lt; 9; i++) {\r
  const cell = document.createElement('div');\r
  cell.classList = 'bg-white/40 min-h-[100px]';\r
  cell.setAttribute('ondrop', 'drop(event)');\r
  cell.setAttribute('ondragover', 'dropOver(event)');\r
  dropzone.appendChild(cell);\r
}</code></pre>\r
\r
        <h3 class="text-xl font-semibold mt-6">🧲 Drag-and-Drop Logic</h3>\r
        <p>\r
          These functions manage how pieces are picked up and placed into drop zones.\r
        </p>\r
\r
        <pre class="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm"><code>function drag(event) {\r
  event.dataTransfer.setData("text", event.target.id);\r
}\r
\r
function dropOver(event) {\r
  event.preventDefault(); // Required to allow dropping\r
}\r
\r
function drop(event) {\r
  event.preventDefault();\r
  const data = event.dataTransfer.getData("text/plain");\r
  const draggedElement = document.getElementById(data);\r
  event.target.appendChild(draggedElement);\r
}</code></pre>\r
\r
        <h3 class="text-xl font-semibold mt-6">🔁 Shuffle Button</h3>\r
        <p>\r
          This button reloads the page, which triggers the puzzle pieces to be shuffled.\r
        </p>\r
\r
        <pre\r
          class="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;button onclick="location.reload()"&gt;Reset &amp; Shuffle&lt;/button&gt;</code></pre>\r
\r
        <h2 class="text-2xl font-semibold mt-8">🌟 Final Output</h2>\r
        <p>\r
          When you open the HTML file in your browser, you'll see a beautiful interface with animated elements thanks to\r
          the AOS library and Tailwind CSS. Drag and drop the puzzle pieces into place and challenge yourself to solve\r
          the\r
          picture!\r
        </p>\r
\r
        <a data-router-link="drag-and-drop-puzzle-game-debugging" class="mt-6">\r
          <p class="text-cyan-300 italic">\r
            How We Solved the Puzzle Game with JavaScript: Step-by-Step Breakdown\r
          </p>\r
        </a>\r
\r
        <h2 class="text-2xl font-semibold mt-8">💻 Full Source Code</h2>\r
        <p>Here's the complete code for your reference:</p>\r
\r
        <h3 class="text-xl font-bold mt-6">🔹 <code>index.html</code></h3>\r
\r
        <pre class="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm"><code>\r
&lt;div\r
      class="flex justify-center items-center min-h-[70vh] mx-auto mt-10 rounded-[2rem] bg-[url('../images/puzzle-background.jpeg')] bg-cover bg-center border-4 max-w-[95%] sm:max-w-[90%] lg:max-w-[90%] px-4"\r
      data-aos="fade-up" data-aos-delay="200"&gt;\r
\r
  &lt;div class="flex flex-col md:flex-row justify-center items-center min-h-[80vh] w-full gap-8 p-4"&gt;\r
    &lt;section class="grid grid-cols-3 w-full max-w-[350px] aspect-square gap-3 sm:gap-3 md:gap-4" id="puzzle-pieces"&gt;\r
    &lt;/section&gt;\r
\r
    &lt;section class="grid grid-cols-3 w-full max-w-[350px] aspect-square gap-2 sm:gap-3 md:gap-4" id="dropzone"&gt;\r
    &lt;/section&gt;\r
  &lt;/div&gt;\r
&lt;/div&gt;\r
</code></pre>\r
\r
\r
        <h3 class="text-xl font-bold mt-6">🔹 <code>puzzle-game.js</code></h3>\r
        <pre class="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm"><code>onload = function reset_puzzle () {\r
  let parent = this.document.querySelector('#puzzle-pieces');\r
  let shuffledPieces = this.document.createDocumentFragment();\r
\r
  while (parent.children.length) {\r
    shuffledPieces.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);\r
  }\r
\r
  parent.appendChild(shuffledPieces);\r
}\r
\r
function drag(event) {\r
  event.dataTransfer.setData("text", event.target.id);\r
}\r
\r
function dropOver(event) {\r
  event.preventDefault();\r
}\r
\r
function drop(event) {\r
  event.preventDefault();\r
  const data = event.dataTransfer.getData("text/plain");\r
  const draggedElement = document.getElementById(data);\r
  event.target.appendChild(draggedElement);\r
}\r
\r
const puzzle_pieces = document.querySelector('#puzzle-pieces');\r
const dropzone = document.querySelector('#dropzone');\r
\r
for (let i = 0; i &lt; 9; i++) {\r
  const row = Math.floor(i / 3) + 1;\r
  const column = (i % 3) + 1;\r
\r
  const cell = document.createElement('div');\r
  cell.classList = 'bg-white/40 min-h-[100px] w-full';\r
\r
  const puzzleImage = document.createElement('div');\r
  puzzleImage.classList = 'h-[100px] w-full bg-center bg-no-repeat bg-cover';\r
  puzzleImage.setAttribute('draggable', 'true');\r
  puzzleImage.setAttribute('ondragstart', 'drag(event)');\r
  puzzleImage.id = \`piece-\${row}-\${column}\`;\r
  puzzleImage.style.backgroundImage = \`url('/images/puzzle-image-split/row-\${row}-column-\${column}.jpg')\`;\r
\r
  cell.appendChild(puzzleImage);\r
  puzzle_pieces.appendChild(cell);\r
}\r
\r
for (let i = 0; i &lt; 9; i++) {\r
  const cell = document.createElement('div');\r
  cell.classList = 'bg-white/40 min-h-[100px]';\r
  cell.setAttribute('ondrop', 'drop(event)');\r
  cell.setAttribute('ondragover', 'dropOver(event)');\r
  dropzone.appendChild(cell);\r
}</code></pre>\r
\r
        <h2 class="text-2xl font-semibold mt-8">📢 Final Thoughts</h2>\r
        <p>\r
          Puzzle games are a fantastic way to understand how events, DOM elements, and styling interact. Once you're\r
          comfortable with this project, you can enhance it by adding sound effects, timer functions, or even a win\r
          condition detector. Keep building, keep experimenting, and most importantly—have fun coding!\r
        </p>\r
\r
        <a data-router-link="drag-and-drop-puzzle-game-enhancements" class="mt-6">\r
          <p class="text-cyan-300 italic">\r
            5 Cool Enhancements to Level Up Your Puzzle Game\r
          </p>\r
        </a>\r
\r
    </article>\r
\r
\r
  </main>\r
\r
  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
  <script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js"><\/script>\r
  <!-- <script src="puzzle-game.js"><\/script> -->\r
  <script>\r
    AOS.init();\r
  <\/script>\r
\r
</body>\r
\r
</html>`,mt=`!<div class="container mx-auto px-4 py-8">\r
  <!-- Blog Content (responsive width) -->\r
  <div class="text-lg w-full md:w-3/4 lg:w-1/2 mx-auto mb-12" v-html="blog.content" ref="htmlContainer"></div>\r
  \r
  <!-- Puzzle Game Container -->\r
  <div class="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12">\r
    <!-- Puzzle Pieces -->\r
    <section\r
      id="puzzle-pieces"\r
      class="grid grid-cols-3 w-full max-w-[90vw] sm:max-w-[75vw] md:max-w-[50vw] lg:max-w-[30vw] aspect-square gap-2 sm:gap-3 md:gap-4"\r
    ></section>\r
    \r
    <!-- Dropzone -->\r
    <section\r
      id="dropzone"\r
      class="grid grid-cols-3 w-full max-w-[90vw] sm:max-w-[75vw] md:max-w-[50vw] lg:max-w-[30vw] aspect-square gap-2 sm:gap-3 md:gap-4"\r
    ></section>\r
  </div>\r
</div>\r
\r
\r
    <div class="text-center relative top-4 sm:bottom-20">\r
      <button class="px-6 py-3 bg-emerald-400 text-white rounded-2xl" onclick="location.reload()">Reset &\r
        Shuffle</button>\r
    </div>`,ap=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>5 Cool Enhancements to Level Up Your Puzzle Game</title>\r
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">\r
</head>\r
\r
<body>\r
\r
    <main>\r
        <h1 class="text-center text-xl sm:text-3xl mt-8 px-4">\r
            Puzzle game using javascript\r
        </h1>\r
\r
\r
        <article class="prose w-1/2 lg:prose-xl mx-auto p-4 text-white">\r
            <h1 class="text-3xl font-bold text-center mb-4">5 Cool Enhancements to Level Up Your Puzzle Game</h1>\r
\r
            <p>You've created a basic drag-and-drop puzzle game — awesome start! But what if you want to make it more\r
                engaging, rewarding, or even viral? Here are five creative enhancements you can add using HTML, CSS, and\r
                JavaScript.</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">⏱️ 1. Add a Countdown Timer</h2>\r
            <p>Challenge your players with a time limit. A simple timer using <code>setInterval()</code> and DOM\r
                manipulation can increase tension and excitement.</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">🏆 2. Show Player Score and Moves</h2>\r
            <p>Track how many moves a player takes to solve the puzzle. Display a score based on time and moves to\r
                create replay value and friendly competition.</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">🔊 3. Add Sound Effects</h2>\r
            <p>Use simple sound clips for dragging, dropping, and completing the puzzle. A bit of audio feedback makes\r
                the game more dynamic and fun.</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">📱 4. Make It Mobile Responsive</h2>\r
            <p>With Tailwind CSS and flex/grid layout, you can make sure the game adjusts beautifully on all devices.\r
                Don’t forget touch events for mobile drag support!</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">🌎 5. Shareable Scoreboard</h2>\r
            <p>Create a backend using Firebase or Supabase to store high scores. Display top players and allow users to\r
                enter their name. Sharing on social media can make your game viral!</p>\r
\r
            <p class="mt-6">Bonus tip: Add a difficulty selector with 3x3, 4x4, or 5x5 grids! The more flexible your\r
                game is, the more users will return to challenge themselves.</p>\r
\r
            <p class="mt-4">Keep coding, keep improving, and turn your simple puzzle project into a polished,\r
                interactive experience loved by many!</p>\r
        </article>\r
\r
\r
\r
\r
\r
    </main>\r
\r
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
    <script src="puzzle-game.js"><\/script>\r
    <script>\r
        AOS.init();\r
    <\/script>\r
\r
</body>\r
\r
</html>`,op=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Fun Facts About Puzzle Games</title>\r
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">\r
</head>\r
\r
<body class="min-h-screen bg-gradient-to-br from-violet-500 to-f font-serif">\r
\r
    <main>\r
        <h1 class="text-center text-xl sm:text-3xl mt-8 px-4">\r
            Puzzle game using javascript\r
        </h1>\r
\r
        <article class="prose w-1/2 lg:prose-xl mx-auto p-4 text-white">\r
            <h1 class="text-3xl font-bold text-center mb-4">Fun Facts About Puzzle Games and Why They Boost Your Brain\r
            </h1>\r
            <p>Puzzle games aren’t just fun to play — they’re secretly training your brain like a champ! Whether you’re\r
                matching shapes, solving logic sequences, or dragging puzzle pieces into place, these little games pack\r
                a big cognitive punch.</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">🧠 Puzzle Games Improve Memory</h2>\r
            <p>While playing puzzle games, your brain recalls the shapes, strategies, or patterns needed to solve the\r
                puzzle. This repetition strengthens neural connections, making it easier to retain information over\r
                time.</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">🎯 Enhances Focus and Patience</h2>\r
            <p>Unlike action games, puzzles require sustained concentration. You often need to sit and think about each\r
                piece. This helps develop patience, an essential trait for coding and problem-solving in real life.</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">📊 Puzzle Solving Is a Workout for the Mind</h2>\r
            <p>Just like lifting weights builds muscle, solving puzzles challenges areas of the brain responsible for\r
                logic, reasoning, and spatial awareness. That’s why puzzles are used in cognitive therapy, classrooms,\r
                and even job interviews!</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">🤹‍♀️ It Boosts Your Mood</h2>\r
            <p>Completing a puzzle releases dopamine, the feel-good chemical. That’s why you often feel satisfied after\r
                solving a level — your brain is literally rewarding you for your effort!</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">🎮 Why Developers Love Puzzle Games</h2>\r
            <ul class="list-disc pl-6">\r
                <li>They’re beginner-friendly to build</li>\r
                <li>Great way to learn DOM manipulation</li>\r
                <li>Drag-and-drop logic introduces event handling smoothly</li>\r
                <li>They can be styled in so many creative ways!</li>\r
            </ul>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">💡 Bonus: Famous Puzzle Games</h2>\r
            <ul class="list-disc pl-6">\r
                <li><strong>Tetris</strong> – A classic that teaches spatial reasoning</li>\r
                <li><strong>Sudoku</strong> – Improves numerical logic</li>\r
                <li><strong>Portal</strong> – Combines puzzles with physics and storytelling</li>\r
            </ul>\r
\r
            <p class="mt-6">So the next time you play or build a puzzle game, remember — you’re not just having fun.\r
                You’re building a smarter brain too!</p>\r
        </article>\r
\r
\r
\r
    </main>\r
\r
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
    <script src="puzzle-game.js"><\/script>\r
    <script>\r
        AOS.init();\r
    <\/script>\r
\r
</body>\r
\r
</html>`,ip=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Puzzle Game: Problem-Solving Approaches</title>\r
    <link href="/src/output.css" rel="stylesheet">\r
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">\r
</head>\r
\r
<body class="min-h-screen bg-gradient-to-br from-violet-500 to-f font-serif">\r
\r
    <main>\r
        <h1 class="text-center text-xl sm:text-3xl mt-8 px-4">\r
            Puzzle game using javascript\r
        </h1>\r
\r
        <article class="prose w-1/2 lg:prose-xl mx-auto p-4 text-white">\r
            <h1 class="text-3xl font-bold text-center mb-4">How We Solved the Puzzle Game with JavaScript: Step-by-Step\r
                Breakdown</h1>\r
\r
            <p>In this article, let’s break down the logic behind the drag-and-drop puzzle game you saw earlier. We’ll\r
                cover the flow, thought process, and techniques used to solve real-world challenges, making it\r
                beginner-friendly.</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">🔍 Problem Overview</h2>\r
            <p>The idea was to split one image into 9 pieces, shuffle them, and allow the user to drag and place each\r
                piece into a drop zone. The player would solve the puzzle by rearranging the tiles in the correct grid.\r
            </p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">1. 🧩 Image Splitting</h2>\r
            <p>Instead of slicing the image manually, we pre-cut the image into 9 equal sections and saved them as files\r
                named <code>row-1-column-1.jpg</code> and so on. This made it easy to render each image block with CSS\r
                using <code>background-image</code>.</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">2. 🔀 Shuffling the Pieces</h2>\r
            <p>Using <code>appendChild</code> and <code>Math.random()</code>, we randomized the order of children inside\r
                the puzzle container so each game starts differently.</p>\r
\r
            <pre class="bg-gray-800 overflow-x-auto text-white p-4 rounded-xl"><code>while (parent.children.length) {\r
  shuffledPieces.appendChild(\r
    parent.children[Math.floor(Math.random() * parent.children.length)]\r
  );\r
}</code></pre>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">3. 🖱️ Drag and Drop Events</h2>\r
            <p>We added drag-and-drop functionality by using:</p>\r
            <ul class="list-disc pl-6">\r
                <li><code>ondragstart</code> to trigger dragging</li>\r
                <li><code>ondrop</code> and <code>ondragover</code> to handle dropping</li>\r
            </ul>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">4. 🔄 Reset Button</h2>\r
            <p>We added a simple button that reloads the page using <code>location.reload()</code> to reset the puzzle\r
                state and reshuffle the pieces.</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">🧠 Lessons Learned</h2>\r
            <ul class="list-disc pl-6">\r
                <li>DOM manipulation is powerful and interactive!</li>\r
                <li>Drag-and-drop is beginner-friendly once you understand the event flow.</li>\r
                <li>Structuring your code logically helps solve complex UI challenges step-by-step.</li>\r
            </ul>\r
\r
            <p class="mt-6">This approach is a great base to build on for any game or interactive UI project. You can\r
                now confidently tackle similar challenges using JavaScript!</p>\r
        </article>\r
\r
\r
\r
\r
    </main>\r
\r
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
    <script src="puzzle-game.js"><\/script>\r
    <script>\r
        AOS.init();\r
    <\/script>\r
\r
</body>\r
\r
</html>`,lp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">\r
</head>\r
\r
<body class="min-h-screen bg-gradient-to-br from-violet-500 to-f font-serif">\r
\r
    <main>\r
        <h1 class="text-center text-xl sm:text-3xl mt-8 px-4">\r
            Puzzle game using javascript\r
        </h1>\r
\r
        <article class="prose w-1/2 lg:prose-xl mx-auto p-4 text-white">\r
            <h1 class="text-3xl font-bold text-center mb-4">Real-World Uses of Puzzle Logic in Tech and Business</h1>\r
\r
            <p>At first glance, a drag-and-drop puzzle game may look like simple fun. But behind that simplicity lies\r
                logic that mirrors real-world software applications. Let’s explore how puzzle-like problem-solving is\r
                used in everyday tech and business fields.</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">🔄 1. Drag-and-Drop in UI Builders</h2>\r
            <p>Ever used tools like WordPress, Wix, or Webflow? Their interfaces allow you to drag and drop elements to\r
                build a site. The underlying tech works almost exactly like our puzzle game’s logic: draggable elements\r
                + droppable targets + position tracking.</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">🏗️ 2. Construction and Architecture</h2>\r
            <p>3D modeling tools for architects and engineers use puzzle-style placement logic to snap walls, doors, or\r
                furniture into place. These tools rely on grid-based layouts and snapping logic — just like a puzzle\r
                board!</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">📦 3. Warehouse and Inventory Optimization</h2>\r
            <p>Companies like Amazon use algorithms similar to puzzle-solving to decide where to place items in a\r
                warehouse for quick retrieval. Think of each product as a puzzle piece needing the perfect slot for\r
                efficiency.</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">🧠 4. AI and Machine Learning</h2>\r
            <p>Solving logic puzzles helps train algorithms. Developers feed neural networks logical puzzles to\r
                strengthen pattern recognition. For example, visual CAPTCHA tests are essentially a puzzle for AI to\r
                solve.</p>\r
\r
            <h2 class="text-2xl font-semibold mt-6 mb-2">🚗 5. Navigation Systems</h2>\r
            <p>When Google Maps calculates a route, it's essentially solving a puzzle of connected roads, finding the\r
                most efficient path among many. It applies similar logic to piecing together the shortest, fastest\r
                combination.</p>\r
\r
            <p class="mt-6">Next time you build a puzzle game, remember: you're not just coding a toy — you're\r
                simulating real-world logic used in some of the biggest industries in the world!</p>\r
        </article>\r
\r
\r
\r
\r
\r
    </main>\r
\r
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
    <script>\r
        AOS.init();\r
    <\/script>\r
\r
</body>\r
\r
</html>`,cp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <meta name="author" content="Danny" />\r
    <title>Awesome Design Using Matter.js</title>\r
    <style>\r
        a {\r
            cursor: pointer;\r
        }\r
    </style>\r
</head>\r
\r
<body class="min-h-screen bg-gradient-to-br from-violet-500 to-f\r
uchsia-500">\r
\r
    <main class="px-4 sm:px-8 lg:px-20">\r
        <h1 class="text-3xl sm:text-4xl font-bold text-center mt-10 mb-4" data-aos="fade-up">\r
            Awesome Design Using Matter.js\r
        </h1>\r
\r
        <section\r
            class="flex justify-center items-center overflow-hidden min-h-[70vh] mx-auto mt-10 rounded-[2rem] border-4 max-w-[95%] sm:max-w-[90%] lg:max-w-[90%] px-4"\r
            data-aos="fade-up" data-aos-delay="200" id="effect">\r
        </section>\r
\r
        <article\r
            class="prose prose-lg prose-invert mx-auto px-4 sm:px-6 lg:px-12 py-10 max-w-5xl  text-white rounded-2xl shadow-xl"\r
            data-aos="fade-up">\r
\r
            <h1 class="text-4xl sm:text-5xl font-bold text-center mb-8">\r
                💥 How to Create a Stunning Transparent Text Background Animation using Tailwind CSS and Matter.js\r
            </h1>\r
\r
            <p class="text-lg text-white/80 text-center mb-6">\r
                Learn how to combine Tailwind CSS with Matter.js to build a transparent text effect over an animated\r
                physics-based background. This tutorial is perfect for beginners looking to make modern, interactive\r
                designs.\r
            </p>\r
            <a data-router-link="awesome-matterjs-design-fun-facts">\r
                <p class="italic text-white/90">\r
                    -> 🎉 10 Fun Facts About Color and Light in Digital Interfaces\r
                </p>\r
            </a>\r
\r
\r
            <section class="mb-10">\r
                <h2 class="text-2xl font-semibold mb-2">🌟 Why Use Transparent Text Over Animated Background?</h2>\r
                <ul class="list-disc list-inside">\r
                    <li>✅ Visually striking</li>\r
                    <li>✅ Lightweight & responsive</li>\r
                    <li>✅ Beginner-friendly with simple libraries</li>\r
                    <li>✅ Great for interactive hero sections or splash pages</li>\r
                </ul>\r
            </section>\r
\r
            <section class="mb-10">\r
                <h2 class="text-2xl font-semibold mb-2">🛠️ Tools We'll Use</h2>\r
                <ul class="list-disc list-inside">\r
                    <li><strong>HTML5</strong> — Structure of the webpage</li>\r
                    <li><strong>Tailwind CSS</strong> — For utility-first styling and layout</li>\r
                    <li><strong>Matter.js</strong> — A 2D physics engine for animations</li>\r
                    <li><strong>AOS (Animate On Scroll)</strong> — For smooth scroll-based animations</li>\r
                </ul>\r
                <a data-router-link="awesome-matterjs-design-real-world-examples">\r
                    <p class="italic text-white/90">\r
                        -> 🌍 Real-World Uses of Transparent UI Effects\r
                    </p>\r
                </a>\r
\r
            </section>\r
\r
            <section class="mb-10">\r
                <h2 class="text-2xl font-semibold mb-4">🚧 Step-by-Step Code Breakdown</h2>\r
\r
                <h3 class="text-xl font-semibold mb-2">🧱 1. The HTML Structure</h3>\r
                <pre class="bg-gray-800 text-sm text-green-200 rounded p-4 overflow-x-auto"><code>&lt;!DOCTYPE html&gt;\r
&lt;html lang="en"&gt;\r
&lt;head&gt;\r
  ...\r
  &lt;meta name="description" content="Learn how to create a stunning transparent text effect..." /&gt;\r
  &lt;link href="/src/output.css" rel="stylesheet" /&gt;\r
  &lt;link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet" /&gt;\r
&lt;/head&gt;\r
</code></pre>\r
\r
                <h3 class="text-xl font-semibold mt-6 mb-2">🔗 Navigation Header</h3>\r
                <pre class="bg-gray-800 text-sm text-green-200 rounded p-4 overflow-x-auto"><code>&lt;nav class="flex items-center justify-between"&gt;\r
  &lt;div class="w-20 sm:w-32"&gt;\r
    &lt;a href="/"&gt;\r
      &lt;img src="/images/logo.jpeg" class="rounded-full hover:scale-110 transition duration-150" /&gt;\r
    &lt;/a&gt;\r
  &lt;/div&gt;\r
  &lt;div class="flex justify-between w-48 sm:w-60"&gt;\r
    &lt;a href="#"&gt;About Us&lt;/a&gt;\r
    &lt;a href="#"&gt;Contact&lt;/a&gt;\r
    &lt;a href="#"&gt;More&lt;/a&gt;\r
  &lt;/div&gt;\r
&lt;/nav&gt;\r
</code></pre>\r
\r
                <h3 class="text-xl font-semibold mt-6 mb-2">📝 Main Section with Transparent Text</h3>\r
                <pre class="bg-gray-800 text-sm text-green-200 rounded p-4 overflow-x-auto"><code>&lt;main class="px-4 sm:px-8 lg:px-20"&gt;\r
  &lt;h1 class="text-3xl sm:text-4xl font-bold text-center mt-10 mb-4"&gt;...&lt;/h1&gt;\r
  &lt;p class="text-center text-lg text-white/80 mb-10 max-w-3xl mx-auto"&gt;...&lt;/p&gt;\r
  &lt;section id="effect" class="flex justify-center items-center overflow-hidden min-h-[70vh] mx-auto mt-10 rounded-[2rem] border-4 max-w-[90%] px-4"&gt;&lt;/section&gt;\r
&lt;/main&gt;\r
</code></pre>\r
            </section>\r
\r
            <section class="mb-10">\r
                <h3 class="text-xl font-semibold mb-2">📦 Adding the Scripts</h3>\r
                <pre class="bg-gray-800 text-sm text-green-200 rounded p-4 overflow-x-auto"><code>&lt;script src="https://cdn.jsdelivr.net/npm/matter-js@0.19.0/build/matter.min.js"&gt;&lt;/script&gt;\r
&lt;script src="matterjs.js"&gt;&lt;/script&gt;\r
&lt;script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"&gt;&lt;/script&gt;\r
&lt;script&gt;AOS.init();&lt;/script&gt;\r
</code></pre>\r
            </section>\r
\r
            <section class="mb-10">\r
                <h2 class="text-2xl font-semibold mb-4">⚙️ Matter.js Physics Script Explained</h2>\r
\r
                <h3 class="text-xl font-semibold mb-2">1. Setup Engine and Renderer</h3>\r
                <pre class="bg-gray-800 text-sm text-green-200 rounded p-4 overflow-x-auto"><code>const engine = Matter.Engine.create();\r
const render = Matter.Render.create({\r
  element: document.getElementById("effect"),\r
  engine: engine,\r
  options: {\r
    width: window.innerWidth,\r
    height: window.innerHeight,\r
    wireframes: false,\r
    background: '#222'\r
  }\r
});\r
Matter.Render.run(render);\r
Matter.Engine.run(engine);\r
</code></pre>\r
                <a data-router-link="awesome-matterjs-design-beginners-guide">\r
                    <p class="italic text-white/90">\r
                        -> 🚀 Beginner's Guide to JavaScript Physics Engines (Like Matter.js)\r
                    </p>\r
                </a>\r
\r
\r
                <h3 class="text-xl font-semibold mt-6 mb-2">2. Create Ground and Slides</h3>\r
                <pre class="bg-gray-800 text-sm text-green-200 rounded p-4 overflow-x-auto"><code>const ground = Matter.Bodies.rectangle(...);\r
const slides = [\r
  Matter.Bodies.rectangle(400, 500, 400, 20, { angle: -0.5 }),\r
  ...\r
];\r
Matter.World.add(engine.world, [ground, ...slides]);\r
</code></pre>\r
\r
                <h3 class="text-xl font-semibold mt-6 mb-2">3. Drop Bouncing Balls</h3>\r
                <pre class="bg-gray-800 text-sm text-green-200 rounded p-4 overflow-x-auto"><code>function dropBalls() {\r
  for (let i = 0; i &lt; 30; i++) {\r
    const ball = Matter.Bodies.circle(...);\r
    Matter.World.add(engine.world, ball);\r
  }\r
}\r
dropBalls();\r
setInterval(dropBalls, 1000);\r
</code></pre>\r
            </section>\r
\r
            <section class="mb-10">\r
                <h2 class="text-2xl font-semibold mb-2">📱 Responsive and SEO Tips</h2>\r
                <ul class="list-disc list-inside">\r
                    <li>✅ Use Tailwind's responsive utilities (\`sm:\`, \`md:\`, etc.)</li>\r
                    <li>✅ Add meta keywords and description</li>\r
                    <li>✅ Optimize performance with light JS and no videos</li>\r
                </ul>\r
\r
                <a data-router-link="awesome-matterjs-design-problem-solving">\r
                    <p class="italic text-white/90">\r
                        -> 🎉 Problem Solving with Visual Thinking in Web Design\r
                    </p>\r
                </a>\r
            </section>\r
\r
            <section class="mb-10">\r
                <h2 class="text-2xl font-semibold mb-2">💡 Final Thoughts</h2>\r
                <p>\r
                    This project blends <strong>modern animation</strong> and <strong>responsive design</strong> using\r
                    Tailwind CSS and Matter.js. It's perfect for hero sections, landing pages, or portfolio sites.\r
                </p>\r
                <p class="mt-4 italic">\r
                    Want to extend it? Try:\r
                </p>\r
                <ul class="list-disc list-inside">\r
                    <li>💡 Adding SVG icons instead of circles</li>\r
                    <li>💡 Mouse-controlled interactions</li>\r
                    <li>💡 Using mix-blend-mode for true transparent masking</li>\r
                </ul>\r
\r
                <a data-router-link="awesome-matterjs-design-planning">\r
                    <p class="italic text-white/90">\r
                        -> 🛠️ From Sketch to Code: Planning Your UI Animation\r
                    </p>\r
                </a>\r
\r
            </section>\r
\r
            <section>\r
                <h2 class="text-2xl font-semibold mb-2">📌 SEO Keywords Targeted</h2>\r
                <ul class="list-disc list-inside">\r
                    <li>Transparent text CSS</li>\r
                    <li>Tailwind CSS hero section</li>\r
                    <li>Matter.js background animation</li>\r
                    <li>Responsive transparent text overlay</li>\r
                    <li>Modern HTML CSS animation effects</li>\r
                </ul>\r
            </section>\r
\r
        </article>\r
\r
\r
    </main>\r
\r
\r
    <script src="https://cdn.jsdelivr.net/npm/matter-js@0.19.0/build/matter.min.js"><\/script>\r
\r
    <script src="matterjs.js"><\/script>\r
\r
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
    <script>\r
        AOS.init();\r
    <\/script>\r
</body>\r
\r
</html>`,pp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <meta name="author" content="Danny" />\r
    <title>💡Fun Physics Facts About Matter-js</title>\r
    <style>\r
        ul li {\r
            overflow: auto;\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
\r
    <main class="px-4 sm:px-8 lg:px-20">\r
        <h1 class="text-3xl sm:text-4xl font-bold text-center mt-10 mb-4" data-aos="fade-up">\r
            How to Create a Transparent Text Effect with Tailwind CSS\r
        </h1>\r
        <p class="text-center text-lg sm:text-xl text-white/80 mb-10 max-w-3xl mx-auto" data-aos="fade-up"\r
            data-aos-delay="100">\r
            This tutorial teaches you how to achieve a beautiful transparent text overlay effect on a background image\r
            using Tailwind CSS. It's lightweight, responsive, and perfect for portfolios and hero sections.\r
        </p>\r
\r
        <section\r
            class="flex justify-center items-center overflow-hidden min-h-[70vh] mx-auto mt-10 rounded-[2rem] border-4 max-w-[95%] sm:max-w-[90%] lg:max-w-[90%] px-4"\r
            data-aos="fade-up" data-aos-delay="200" id="effect">\r
        </section>\r
\r
        <article class="px-6 py-12 max-w-5xl mx-auto text-white">\r
            <h2 class="text-3xl sm:text-4xl font-bold mb-6">💡 Fun Physics Facts You Didn't Know</h2>\r
\r
            <div class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl mb-8">\r
                <p class="text-lg text-white/90 mb-4">\r
                    Physics isn't just textbook formulas—it's full of mind-bending phenomena that power our everyday\r
                    experiences and game mechanics. Let's explore some fascinating facts that will change how you see\r
                    the digital and physical worlds!\r
                </p>\r
            </div>\r
\r
            <div class="grid md:grid-cols-2 gap-6 mb-8">\r
                <div class="bg-white/5 p-6 rounded-xl border-l-4 border-blue-400">\r
                    <h3 class="text-2xl font-semibold mb-4 flex items-center">\r
                        <span class="bg-blue-500 text-white p-2 rounded-full mr-3">1</span>\r
                        Bouncing Behavior\r
                    </h3>\r
                    <ul class="space-y-3 text-white/90">\r
                        <li class="flex items-start">\r
                            <span class="bg-blue-500/20 p-1 rounded mr-2">•</span>\r
                            <strong>Bouncing balls slow down:</strong> Even if a ball looks like it bounces forever, in\r
                            physics terms it loses energy with each bounce—thanks to something called <em>inelastic\r
                                collisions</em>.\r
                        </li>\r
                        <li class="flex items-start">\r
                            <span class="bg-blue-500/20 p-1 rounded mr-2">•</span>\r
                            <strong>The "restitution" secret:</strong> In Matter.js, the <code>restitution</code> value\r
                            (between 0 and 1) controls bounce energy. At 1, objects bounce forever; at 0, they don't\r
                            bounce at all.\r
                        </li>\r
                        <li class="flex items-start">\r
                            <span class="bg-blue-500/20 p-1 rounded mr-2">•</span>\r
                            <strong>Real-world example:</strong> A basketball has about 0.75-0.85 restitution, while a\r
                            lump of clay has nearly 0.\r
                        </li>\r
                    </ul>\r
                </div>\r
\r
                <div class="bg-white/5 p-6 rounded-xl border-l-4 border-purple-400">\r
                    <h3 class="text-2xl font-semibold mb-4 flex items-center">\r
                        <span class="bg-purple-500 text-white p-2 rounded-full mr-3">2</span>\r
                        Gravity Mysteries\r
                    </h3>\r
                    <ul class="space-y-3 text-white/90">\r
                        <li class="flex items-start">\r
                            <span class="bg-purple-500/20 p-1 rounded mr-2">•</span>\r
                            <strong>Objects fall at the same speed:</strong> A feather and a bowling ball would fall at\r
                            the same rate in a vacuum. It's air resistance that makes the feather fall slower on Earth.\r
                        </li>\r
                        <li class="flex items-start">\r
                            <span class="bg-purple-500/20 p-1 rounded mr-2">•</span>\r
                            <strong>Low gravity = fun physics:</strong> Setting gravity to a lower value in your game\r
                            can simulate space-like environments. Try changing <code>gravity.y</code> to 0.1 and see\r
                            what happens!\r
                        </li>\r
                        <li class="flex items-start">\r
                            <span class="bg-purple-500/20 p-1 rounded mr-2">•</span>\r
                            <strong>Gravity isn't constant:</strong> On the Moon, gravity is 1/6th of Earth's. In\r
                            Matter.js, you can simulate this with <code>engine.gravity.y = 0.16</code> (Earth's is ~1).\r
                        </li>\r
                    </ul>\r
                </div>\r
            </div>\r
\r
            <div class="bg-yellow-500/10 p-6 rounded-xl mb-8 border border-yellow-500/30">\r
                <h3 class="text-2xl font-semibold mb-4">🎮 Game Physics vs Real Physics</h3>\r
                <div class="grid md:grid-cols-2 gap-6">\r
                    <div>\r
                        <h4 class="text-xl font-medium mb-2 flex items-center">\r
                            <span class="bg-yellow-500 text-white p-2 rounded-full mr-3 text-sm">A</span>\r
                            Friction Facts\r
                        </h4>\r
                        <ul class="space-y-2 text-white/90">\r
                            <li class="flex items-start">\r
                                <span class="bg-yellow-500/20 p-1 rounded mr-2">•</span>\r
                                <strong>Simulated friction vs real friction:</strong> In engines like Matter.js,\r
                                friction is programmable. You can have ice-like surfaces or super sticky ones, all with\r
                                just a single number tweak!\r
                            </li>\r
                            <li class="flex items-start">\r
                                <span class="bg-yellow-500/20 p-1 rounded mr-2">•</span>\r
                                <strong>Static vs dynamic:</strong> Real objects need more force to start moving (static\r
                                friction) than to keep moving (dynamic friction). Most game engines combine these into\r
                                one value.\r
                            </li>\r
                        </ul>\r
                    </div>\r
                    <div>\r
                        <h4 class="text-xl font-medium mb-2 flex items-center">\r
                            <span class="bg-yellow-500 text-white p-2 rounded-full mr-3 text-sm">B</span>\r
                            Collision Quirks\r
                        </h4>\r
                        <ul class="space-y-2 text-white/90">\r
                            <li class="flex items-start">\r
                                <span class="bg-yellow-500/20 p-1 rounded mr-2">•</span>\r
                                <strong>Perfectly elastic collisions</strong> (where no energy is lost) don't exist in\r
                                reality but are common in games for dramatic effects.\r
                            </li>\r
                            <li class="flex items-start">\r
                                <span class="bg-yellow-500/20 p-1 rounded mr-2">•</span>\r
                                <strong>Collision detection</strong> in games uses simplified "hitboxes" rather than\r
                                exact shapes for better performance.\r
                            </li>\r
                        </ul>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <div class="grid md:grid-cols-2 gap-6 mb-8">\r
                <div class="bg-white/5 p-6 rounded-xl">\r
                    <h3 class="text-2xl font-semibold mb-4 flex items-center">\r
                        <span class="bg-green-500 text-white p-2 rounded-full mr-3">3</span>\r
                        Angular Oddities\r
                    </h3>\r
                    <ul class="space-y-3 text-white/90">\r
                        <li class="flex items-start">\r
                            <span class="bg-green-500/20 p-1 rounded mr-2">•</span>\r
                            <strong>Shape affects rotation:</strong> A rectangle spins differently than a circle because\r
                            of its <em>moment of inertia</em>—a physics property Matter.js calculates automatically.\r
                        </li>\r
                        <li class="flex items-start">\r
                            <span class="bg-green-500/20 p-1 rounded mr-2">•</span>\r
                            <strong>Center of mass magic:</strong> In Matter.js, you can offset an object's center of\r
                            mass to make it tumble unpredictably—great for creating "wonky" game objects!\r
                        </li>\r
                        <li class="flex items-start">\r
                            <span class="bg-green-500/20 p-1 rounded mr-2">•</span>\r
                            <strong>Real-world example:</span> Figure skaters pull arms in to spin faster—this conserves\r
                                angular momentum, just like in physics engines!\r
                        </li>\r
                    </ul>\r
                </div>\r
\r
                <div class="bg-white/5 p-6 rounded-xl">\r
                    <h3 class="text-2xl font-semibold mb-4 flex items-center">\r
                        <span class="bg-red-500 text-white p-2 rounded-full mr-3">4</span>\r
                        Fluid Phenomena\r
                    </h3>\r
                    <ul class="space-y-3 text-white/90">\r
                        <li class="flex items-start">\r
                            <span class="bg-red-500/20 p-1 rounded mr-2">•</span>\r
                            <strong>Buoyancy isn't just for water:</strong> In physics terms, any fluid (including air)\r
                            creates buoyant forces. Matter.js can simulate this with custom forces.\r
                        </li>\r
                        <li class="flex items-start">\r
                            <span class="bg-red-500/20 p-1 rounded mr-2">•</span>\r
                            <strong>Terminal velocity:</strong> In games, we often simplify air resistance, but real\r
                            falling objects stop accelerating when drag equals gravity.\r
                        </li>\r
                        <li class="flex items-start">\r
                            <span class="bg-red-500/20 p-1 rounded mr-2">•</span>\r
                            <strong>Try this:</strong> Set <code>airFriction: 0.01</code> on a Matter.js body to see air\r
                            resistance effects!\r
                        </li>\r
                    </ul>\r
                </div>\r
            </div>\r
\r
            <div class="bg-pink-500/10 p-6 rounded-xl mb-8">\r
                <h3 class="text-2xl font-semibold mb-4">🔧 Physics Hacks for Game Developers</h3>\r
                <div class="grid md:grid-cols-2 gap-6">\r
                    <div>\r
                        <h4 class="text-xl font-medium mb-2 flex items-center">\r
                            <span class="bg-pink-500 text-white p-2 rounded-full mr-3 text-sm">X</span>\r
                            Cheat the System\r
                        </h4>\r
                        <ul class="space-y-2 text-white/90">\r
                            <li class="flex items-start">\r
                                <span class="bg-pink-500/20 p-1 rounded mr-2">•</span>\r
                                <strong>Fake heavy objects:</strong> Make objects <em>look</em> heavy by increasing\r
                                their size but keeping mass moderate—players will perceive them as heavier!\r
                            </li>\r
                            <li class="flex items-start">\r
                                <span class="bg-pink-500/20 p-1 rounded mr-2">•</span>\r
                                <strong>Camera tricks:</strong> Add slight camera shake when heavy objects land to\r
                                enhance the feeling of weight.\r
                            </li>\r
                        </ul>\r
                    </div>\r
                    <div>\r
                        <h4 class="text-xl font-medium mb-2 flex items-center">\r
                            <span class="bg-pink-500 text-white p-2 rounded-full mr-3 text-sm">Y</span>\r
                            Performance Tips\r
                        </h4>\r
                        <ul class="space-y-2 text-white/90">\r
                            <li class="flex items-start">\r
                                <span class="bg-pink-500/20 p-1 rounded mr-2">•</span>\r
                                <strong>Sleeping bodies:</strong> Matter.js can "sleep" inactive objects to save\r
                                CPU—enable with <code>enableSleeping: true</code>.\r
                            </li>\r
                            <li class="flex items-start">\r
                                <span class="bg-pink-500/20 p-1 rounded mr-2">•</span>\r
                                <strong>Simple shapes:</strong> Use circles and rectangles instead of complex polygons\r
                                when possible—they calculate collisions faster.\r
                            </li>\r
                        </ul>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <div class="bg-white/10 p-6 rounded-xl">\r
                <h3 class="text-2xl font-semibold mb-4">🧪 Try These Fun Experiments</h3>\r
                <p class="mb-4 text-lg text-white/90">\r
                    Ready to see these physics facts in action? Try these in your Matter.js projects:\r
                </p>\r
                <ol class="list-decimal pl-6 space-y-3 text-white/90">\r
                    <li>\r
                        <strong>Anti-gravity zone:</strong> Create an area where <code>gravity.y</code> is\r
                        negative—objects will float upward!\r
                    </li>\r
                    <li>\r
                        <strong>Bouncy world:</strong> Set <code>restitution: 1</code> on all bodies and watch the chaos\r
                        unfold.\r
                    </li>\r
                    <li>\r
                        <strong>No friction challenge:</strong> Set <code>friction: 0</code> on all surfaces—can you\r
                        control anything?\r
                    </li>\r
                    <li>\r
                        <strong>Mass confusion:</strong> Give two identical-looking objects very different masses and\r
                        watch players' reactions.\r
                    </li>\r
                </ol>\r
                <p class="mt-4 text-lg text-white/90">\r
                    These experiments aren't just fun—they'll give you a deeper understanding of how physics engines\r
                    work and how to manipulate them for game mechanics!\r
                </p>\r
            </div>\r
        </article>\r
\r
    </main>\r
\r
\r
    <script src="https://cdn.jsdelivr.net/npm/matter-js@0.19.0/build/matter.min.js"><\/script>\r
\r
    <script src="matterjs.js"><\/script>\r
\r
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
    <script>\r
        AOS.init();\r
    <\/script>\r
</body>\r
\r
</html>`,dp=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
</head>\r
<body>\r
    \r
</body>\r
</html>`,up=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <meta name="author" content="Danny" />\r
    <title>Responsive Transparent Text</title>\r
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">\r
</head>\r
\r
<body class="min-h-screen bg-gradient-to-br from-violet-500 to-f\r
uchsia-500">\r
\r
    <main class="px-4 sm:px-8 lg:px-20">\r
        <h1 class="text-3xl sm:text-4xl font-bold text-center mt-10 mb-4" data-aos="fade-up">\r
            How to Create a Transparent Text Effect with Tailwind CSS\r
        </h1>\r
        <p class="text-center text-lg sm:text-xl text-white/80 mb-10 max-w-3xl mx-auto" data-aos="fade-up"\r
            data-aos-delay="100">\r
            This tutorial teaches you how to achieve a beautiful transparent text overlay effect on a background image\r
            using Tailwind CSS. It's lightweight, responsive, and perfect for portfolios and hero sections.\r
        </p>\r
\r
        <section\r
            class="flex justify-center items-center overflow-hidden min-h-[70vh] mx-auto mt-10 rounded-[2rem] border-4 max-w-[95%] sm:max-w-[90%] lg:max-w-[90%] px-4"\r
            data-aos="fade-up" data-aos-delay="200" id="effect">\r
        </section>\r
\r
\r
    </main>\r
\r
\r
    <script src="https://cdn.jsdelivr.net/npm/matter-js@0.19.0/build/matter.min.js"><\/script>\r
\r
    <script src="matterjs.js"><\/script>\r
\r
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
    <script>\r
        AOS.init();\r
    <\/script>\r
</body>\r
\r
</html>`,fp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>🧠 Problem Solving with Physics Engines</title>\r
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">\r
</head>\r
\r
<body class="min-h-screen bg-gradient-to-br from-violet-500 to-f\r
uchsia-500">\r
\r
    <main class="px-4 sm:px-8 lg:px-20">\r
        <h1 class="text-3xl sm:text-4xl font-bold text-center mt-10 mb-4" data-aos="fade-up">\r
            How to Create a Transparent Text Effect with Tailwind CSS\r
        </h1>\r
        <p class="text-center text-lg sm:text-xl text-white/80 mb-10 max-w-3xl mx-auto" data-aos="fade-up"\r
            data-aos-delay="100">\r
            This tutorial teaches you how to achieve a beautiful transparent text overlay effect on a background image\r
            using Tailwind CSS. It's lightweight, responsive, and perfect for portfolios and hero sections.\r
        </p>\r
\r
        <section\r
            class="flex justify-center items-center overflow-hidden min-h-[70vh] mx-auto mt-10 rounded-[2rem] border-4 max-w-[95%] sm:max-w-[90%] lg:max-w-[90%] px-4"\r
            data-aos="fade-up" data-aos-delay="200" id="effect">\r
        </section>\r
\r
        <article class="px-6 py-12 max-w-5xl mx-auto text-white">\r
  <h2 class="text-3xl sm:text-4xl font-bold mb-6">🧠 Problem Solving with Physics Engines: How Games Use Real-World Logic</h2>\r
  <p class="mb-4 text-lg text-white/90">\r
    Physics engines like Matter.js are not just eye candy—they are powerful tools that bring realism into the gaming world. But did you know they also help improve critical thinking and problem-solving skills? Developers use physics simulations to model real-world behavior. Whether it's bouncing balls, falling objects, or sloped surfaces, each element forces the player—or even the designer—to think logically.\r
  </p>\r
  \r
  <div class="bg-white/10 p-6 rounded-xl mb-6 border-l-4 border-blue-400">\r
    <h3 class="text-2xl font-semibold mb-3">🔍 The Science Behind the Fun</h3>\r
    <p class="mb-4 text-lg text-white/90">\r
      Physics engines simulate fundamental concepts like:\r
    </p>\r
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">\r
      <li class="flex items-start"><span class="bg-blue-500/20 p-1 rounded mr-2">✓</span> Newton's Laws of Motion</li>\r
      <li class="flex items-start"><span class="bg-blue-500/20 p-1 rounded mr-2">✓</span> Conservation of Momentum</li>\r
      <li class="flex items-start"><span class="bg-blue-500/20 p-1 rounded mr-2">✓</span> Gravity and Acceleration</li>\r
      <li class="flex items-start"><span class="bg-blue-500/20 p-1 rounded mr-2">✓</span> Friction and Elasticity</li>\r
    </ul>\r
    <p class="text-lg text-white/90">\r
      These aren't just abstract concepts—they're the building blocks that make digital worlds feel tangible. When a character jumps in a platformer, it's gravity that brings them back down. When objects collide, it's physics calculating the resulting motion.\r
    </p>\r
  </div>\r
\r
  <p class="mb-4 text-lg text-white/90">\r
    For instance, games like <strong>Angry Birds</strong> or <strong>Cut the Rope</strong> use principles of gravity, tension, and momentum. When developers design levels using a physics engine, they essentially solve puzzles themselves: "Where should the obstacle go so it causes the player to ricochet? How can I make this chain fall just right?" Solving such logic-based layout puzzles trains your mind in spatial reasoning.\r
  </p>\r
\r
  <div class="my-8 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl">\r
    <h3 class="text-2xl font-semibold mb-4">🎮 Real-World Applications in Popular Games</h3>\r
    <div class="grid md:grid-cols-2 gap-6">\r
      <div>\r
        <h4 class="text-xl font-medium mb-2 flex items-center">\r
          <span class="bg-yellow-500 text-white p-2 rounded-full mr-3 text-sm">1</span>\r
          Portal Series\r
        </h4>\r
        <p class="text-white/90">\r
          Valve's Portal games take physics to another level with their portal mechanics. Players must calculate trajectories considering momentum conservation when exiting portals, teaching advanced physics concepts through gameplay.\r
        </p>\r
      </div>\r
      <div>\r
        <h4 class="text-xl font-medium mb-2 flex items-center">\r
          <span class="bg-yellow-500 text-white p-2 rounded-full mr-3 text-sm">2</span>\r
          Human: Fall Flat\r
        </h4>\r
        <p class="text-white/90">\r
          This hilarious physics-based puzzle game perfectly demonstrates ragdoll physics and the challenges of controlling a body in a physical space, improving players' understanding of weight distribution and balance.\r
        </p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <p class="mb-4 text-lg text-white/90">\r
    As a beginner learning Matter.js, experimenting with bodies, constraints, and forces introduces basic engineering-like skills. You learn how angles affect movement, how mass affects momentum, and how constraints simulate pulleys or ropes. All these experiences train your brain to think step-by-step, debug errors, and visualize consequences—skills that are invaluable in both programming and real life.\r
  </p>\r
\r
  <div class="bg-white/5 p-6 rounded-xl my-8">\r
    <h3 class="text-2xl font-semibold mb-4">💡 Beginner-Friendly Physics Concepts to Explore</h3>\r
    <div class="space-y-4">\r
      <div class="p-4 bg-white/10 rounded-lg">\r
        <h4 class="font-medium text-lg mb-2">1. Rigid Body Dynamics</h4>\r
        <p class="text-white/90">\r
          Start with simple shapes like rectangles and circles. Observe how they respond to gravity and collisions. Notice how density affects their behavior—a "heavier" object will push lighter ones when they collide.\r
        </p>\r
      </div>\r
      <div class="p-4 bg-white/10 rounded-lg">\r
        <h4 class="font-medium text-lg mb-2">2. Constraints and Joints</h4>\r
        <p class="text-white/90">\r
          Try connecting objects with different types of constraints. A "revolute" joint acts like a hinge, while a "distance" constraint keeps objects separated by a fixed length, similar to a rope or chain.\r
        </p>\r
      </div>\r
      <div class="p-4 bg-white/10 rounded-lg">\r
        <h4 class="font-medium text-lg mb-2">3. Force Application</h4>\r
        <p class="text-white/90">\r
          Experiment with applying forces at different points on an object. You'll quickly learn that force applied off-center creates rotation, demonstrating the principle of torque.\r
        </p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <h3 class="text-2xl font-semibold mt-10 mb-4">🚀 Taking Your First Steps with Matter.js</h3>\r
  <p class="mb-4 text-lg text-white/90">\r
    Getting started with physics programming is easier than you might think. Here's a simple roadmap:\r
  </p>\r
  <ol class="list-decimal pl-6 space-y-3 mb-6 text-lg text-white/90">\r
    <li><strong>Set up a basic HTML canvas</strong> - This will be your physics playground</li>\r
    <li><strong>Create an engine instance</strong> - The core of your physics simulation</li>\r
    <li><strong>Add some bodies</strong> - Start with simple rectangles and circles</li>\r
    <li><strong>Apply forces or constraints</strong> - Make things move and interact</li>\r
    <li><strong>Add user interaction</strong> - Let players click or drag objects</li>\r
  </ol>\r
\r
  <div class="bg-blue-500/10 p-6 rounded-xl border border-blue-500/30">\r
    <h3 class="text-2xl font-semibold mb-3">🧩 Beyond Games: Practical Applications</h3>\r
    <p class="mb-4 text-lg text-white/90">\r
      Physics engines aren't just for games. They're used in:\r
    </p>\r
    <ul class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">\r
      <li class="flex items-center bg-white/5 p-3 rounded-lg">🏗️ Architectural simulations</li>\r
      <li class="flex items-center bg-white/5 p-3 rounded-lg">🚗 Automotive crash testing</li>\r
      <li class="flex items-center bg-white/5 p-3 rounded-lg">🛰️ Space mission planning</li>\r
    </ul>\r
    <p class="text-lg text-white/90">\r
      Learning physics programming gives you skills applicable across multiple industries, making it one of the most versatile areas of programming to explore.\r
    </p>\r
  </div>\r
\r
  <h3 class="text-2xl font-semibold mt-10 mb-4">🔮 The Future of Physics in Gaming</h3>\r
  <p class="mb-4 text-lg text-white/90">\r
    As hardware becomes more powerful, we're seeing increasingly sophisticated physics simulations. Modern games use physics for:\r
  </p>\r
  <ul class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-lg">\r
    <li class="flex items-start"><span class="bg-green-500/20 p-1 rounded mr-2">•</span> Destructible environments that react realistically</li>\r
    <li class="flex items-start"><span class="bg-green-500/20 p-1 rounded mr-2">•</span> Fluid and cloth simulations</li>\r
    <li class="flex items-start"><span class="bg-green-500/20 p-1 rounded mr-2">•</span> Procedural animation systems</li>\r
    <li class="flex items-start"><span class="bg-green-500/20 p-1 rounded mr-2">•</span> AI that understands physical space</li>\r
  </ul>\r
  <p class="text-lg text-white/90">\r
    By starting with simple physics engines today, you're building foundational skills that will remain relevant as these technologies advance. The problem-solving abilities you develop will help you adapt to whatever comes next in game development and beyond.\r
  </p>\r
</article>\r
\r
\r
    </main>\r
\r
\r
    <script src="https://cdn.jsdelivr.net/npm/matter-js@0.19.0/build/matter.min.js"><\/script>\r
\r
    <script src="matterjs.js"><\/script>\r
\r
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
    <script>\r
        AOS.init();\r
    <\/script>\r
</body>\r
\r
</html>`,mp=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <meta name="author" content="Danny" />\r
    <title>Responsive Transparent Text</title>\r
    <link href="/src/output.css" rel="stylesheet">\r
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">\r
</head>\r
\r
<body class="min-h-screen bg-gradient-to-br from-violet-500 to-f\r
uchsia-500">\r
    <main class="px-4 sm:px-8 lg:px-20">\r
        <h1 class="text-3xl sm:text-4xl font-bold text-center mt-10 mb-4" data-aos="fade-up">\r
            How to Create a Transparent Text Effect with Tailwind CSS\r
        </h1>\r
        <p class="text-center text-lg sm:text-xl text-white/80 mb-10 max-w-3xl mx-auto" data-aos="fade-up"\r
            data-aos-delay="100">\r
            This tutorial teaches you how to achieve a beautiful transparent text overlay effect on a background image\r
            using Tailwind CSS. It's lightweight, responsive, and perfect for portfolios and hero sections.\r
        </p>\r
\r
        <section\r
            class="flex justify-center items-center overflow-hidden min-h-[70vh] mx-auto mt-10 rounded-[2rem] border-4 max-w-[95%] sm:max-w-[90%] lg:max-w-[90%] px-4"\r
            data-aos="fade-up" data-aos-delay="200" id="effect">\r
        </section>\r
\r
        <article class="px-6 py-12 max-w-5xl mx-auto text-white">\r
            <h2 class="text-3xl sm:text-4xl font-bold mb-6">🎯 Real-World Uses of Physics Engines Beyond Games</h2>\r
            <p class="mb-4 text-lg text-white/90">\r
                While Matter.js and similar engines are most famous in gaming, they also have surprising real-world\r
                applications. In industries like robotics, automotive design, and architecture, physics simulations help\r
                model and test ideas before building them.\r
            </p>\r
\r
            <div\r
                class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl my-8 border-l-4 border-pink-400">\r
                <h3 class="text-2xl font-semibold mb-4">🏭 Industrial Applications of Physics Simulation</h3>\r
                <div class="grid md:grid-cols-2 gap-6">\r
                    <div>\r
                        <h4 class="text-xl font-medium mb-2 flex items-center">\r
                            <span class="bg-pink-500 text-white p-2 rounded-full mr-3 text-sm">1</span>\r
                            Manufacturing & Production\r
                        </h4>\r
                        <p class="text-white/90">\r
                            Assembly lines use physics engines to simulate conveyor belt systems, testing how products\r
                            will move through different stages of production. This helps identify potential bottlenecks\r
                            before building expensive physical systems.\r
                        </p>\r
                    </div>\r
                    <div>\r
                        <h4 class="text-xl font-medium mb-2 flex items-center">\r
                            <span class="bg-pink-500 text-white p-2 rounded-full mr-3 text-sm">2</span>\r
                            Product Design\r
                        </h4>\r
                        <p class="text-white/90">\r
                            From smartphones to furniture, designers simulate drop tests, stress points, and material\r
                            interactions. IKEA famously uses physics engines to test virtual furniture before\r
                            production.\r
                        </p>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <p class="mb-4 text-lg text-white/90">\r
                For example, <strong>robot engineers</strong> simulate how their machines will move across different\r
                terrains. Instead of physically testing each prototype, they can simulate it using physics engines,\r
                saving time and cost. Similarly, <strong>architects</strong> simulate how walls, beams, and floors would\r
                react under stress, wind, or weight.\r
            </p>\r
\r
            <div class="my-8 bg-white/5 p-6 rounded-xl">\r
                <h3 class="text-2xl font-semibold mb-4">🏗️ Architecture & Engineering Case Studies</h3>\r
                <div class="space-y-6">\r
                    <div class="flex flex-col md:flex-row gap-4">\r
                        <div class="md:w-1/3 bg-white/10 p-4 rounded-lg flex items-center justify-center">\r
                            <span class="text-5xl">🏙️</span>\r
                        </div>\r
                        <div class="md:w-2/3">\r
                            <h4 class="text-xl font-medium mb-2">Skyscraper Wind Resistance</h4>\r
                            <p class="text-white/90">\r
                                The Shanghai Tower's twisted design was extensively tested using physics simulations to\r
                                ensure it could withstand typhoon-force winds. Engineers simulated wind patterns at\r
                                different altitudes to optimize the building's shape.\r
                            </p>\r
                        </div>\r
                    </div>\r
                    <div class="flex flex-col md:flex-row gap-4">\r
                        <div class="md:w-1/3 bg-white/10 p-4 rounded-lg flex items-center justify-center">\r
                            <span class="text-5xl">🌉</span>\r
                        </div>\r
                        <div class="md:w-2/3">\r
                            <h4 class="text-xl font-medium mb-2">Bridge Construction</h4>\r
                            <p class="text-white/90">\r
                                The Millau Viaduct in France used physics simulations to test how the bridge would\r
                                respond to temperature changes, heavy loads, and high winds during its record-breaking\r
                                construction.\r
                            </p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <div class="bg-yellow-500/10 p-6 rounded-xl my-8 border border-yellow-500/30">\r
                <h3 class="text-2xl font-semibold mb-3">🚗 Automotive Industry Innovations</h3>\r
                <p class="mb-4 text-lg text-white/90">\r
                    Car manufacturers rely heavily on physics engines for:\r
                </p>\r
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">\r
                    <li class="flex items-center bg-white/5 p-3 rounded-lg">💥 Crash test simulations (saving thousands\r
                        of physical tests)</li>\r
                    <li class="flex items-center bg-white/5 p-3 rounded-lg">🛞 Tire traction and wear patterns</li>\r
                    <li class="flex items-center bg-white/5 p-3 rounded-lg">⚡ Aerodynamics for electric vehicles</li>\r
                    <li class="flex items-center bg-white/5 p-3 rounded-lg">🧭 Autonomous vehicle sensor testing</li>\r
                </ul>\r
                <p class="text-lg text-white/90">\r
                    Tesla uses physics simulations to test virtual prototypes, allowing them to iterate designs faster\r
                    than traditional automakers.\r
                </p>\r
            </div>\r
\r
            <p class="mb-4 text-lg text-white/90">\r
                Even education benefits! Physics teachers use visual simulations to demonstrate abstract ideas like\r
                gravity, inertia, and collisions in an interactive way that textbooks can't.\r
            </p>\r
\r
            <div class="bg-green-500/10 p-6 rounded-xl my-8">\r
                <h3 class="text-2xl font-semibold mb-4">📚 Educational Applications</h3>\r
                <div class="grid md:grid-cols-3 gap-4">\r
                    <div class="bg-white/10 p-4 rounded-lg">\r
                        <h4 class="font-medium text-lg mb-2 flex items-center">\r
                            <span class="bg-green-500 text-white p-2 rounded-full mr-2 text-sm">1</span>\r
                            Virtual Labs\r
                        </h4>\r
                        <p class="text-white/90 text-sm">\r
                            Students can conduct experiments with pendulum waves, projectile motion, or orbital\r
                            mechanics without physical equipment.\r
                        </p>\r
                    </div>\r
                    <div class="bg-white/10 p-4 rounded-lg">\r
                        <h4 class="font-medium text-lg mb-2 flex items-center">\r
                            <span class="bg-green-500 text-white p-2 rounded-full mr-2 text-sm">2</span>\r
                            Special Needs Education\r
                        </h4>\r
                        <p class="text-white/90 text-sm">\r
                            Interactive physics simulations help visually impaired students understand spatial concepts\r
                            through sound and haptic feedback.\r
                        </p>\r
                    </div>\r
                    <div class="bg-white/10 p-4 rounded-lg">\r
                        <h4 class="font-medium text-lg mb-2 flex items-center">\r
                            <span class="bg-green-500 text-white p-2 rounded-full mr-2 text-sm">3</span>\r
                            Medical Training\r
                            </text-white /90>\r
                            <p class="text-white/90 text-sm">\r
                                Future surgeons practice procedures in physics-based simulations that accurately model\r
                                tissue behavior and instrument interaction.\r
                            </p>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <h3 class="text-2xl font-semibold mt-10 mb-4">⚕️ Medical and Healthcare Breakthroughs</h3>\r
            <p class="mb-4 text-lg text-white/90">\r
                Physics engines are revolutionizing healthcare in unexpected ways:\r
            </p>\r
            <ul class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-lg">\r
                <li class="flex items-start"><span class="bg-blue-500/20 p-1 rounded mr-2">•</span> <strong>Prosthetic\r
                        development</strong> - Simulating how artificial limbs interact with different surfaces</li>\r
                <li class="flex items-start"><span class="bg-blue-500/20 p-1 rounded mr-2">•</span> <strong>Surgical\r
                        planning</strong> - Modeling how tumors will respond to different treatment approaches</li>\r
                <li class="flex items-start"><span class="bg-blue-500/20 p-1 rounded mr-2">•</span> <strong>Drug\r
                        delivery</strong> - Simulating how medications flow through bloodstreams</li>\r
                <li class="flex items-start"><span class="bg-blue-500/20 p-1 rounded mr-2">•</span> <strong>Physical\r
                        therapy</strong> - Creating personalized rehabilitation simulations</li>\r
            </ul>\r
\r
            <div class="bg-white/10 p-6 rounded-xl mt-8">\r
                <h3 class="text-2xl font-semibold mb-3">🌍 Environmental Science Applications</h3>\r
                <p class="mb-4 text-lg text-white/90">\r
                    Physic engines help model complex environmental systems:\r
                </p>\r
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">\r
                    <div class="bg-white/5 p-3 rounded-lg">🌊 Ocean current modeling</div>\r
                    <div class="bg-white/5 p-3 rounded-lg">🌪️ Hurricane path prediction</div>\r
                    <div class="bg-white/5 p-3 rounded-lg">🏔️ Glacier melt simulations</div>\r
                </div>\r
                <p class="text-lg text-white/90">\r
                    These simulations help scientists predict climate change impacts and test potential solutions in\r
                    virtual environments before implementing them in the real world.\r
                </p>\r
            </div>\r
\r
            <p class="mt-8 text-lg text-white/90">\r
                So, as you play around with balls rolling down slopes or dropping from the sky, remember: you're not\r
                just playing—you're tapping into a tool that helps build the future! The same physics principles\r
                powering your game prototypes are being used to design safer cars, more efficient buildings, and even\r
                life-saving medical technologies.\r
            </p>\r
\r
            <div class="bg-purple-500/10 p-6 rounded-xl mt-8 border border-purple-500/30">\r
                <h3 class="text-2xl font-semibold mb-3">🚀 Getting Started with Real-World Physics Programming</h3>\r
                <p class="mb-4 text-lg text-white/90">\r
                    Interested in applying physics engines beyond games? Here's how to begin:\r
                </p>\r
                <ol class="list-decimal pl-6 space-y-3 mb-4 text-lg text-white/90">\r
                    <li><strong>Explore Matter.js documentation</strong> - Focus on constraints and composite bodies\r
                    </li>\r
                    <li><strong>Try simulation challenges</strong> - Model a chair's stability or a bridge's load\r
                        capacity</li>\r
                    <li><strong>Join physics programming communities</strong> - Like the Matter.js GitHub discussions\r
                    </li>\r
                    <li><strong>Experiment with real data</strong> - Input actual material properties into your\r
                        simulations</li>\r
                </ol>\r
                <p class="text-lg text-white/90">\r
                    The skills you develop creating game physics can directly transfer to these real-world applications,\r
                    opening doors to exciting careers in multiple industries.\r
                </p>\r
            </div>\r
        </article>\r
\r
\r
    </main>\r
\r
\r
    <script src="https://cdn.jsdelivr.net/npm/matter-js@0.19.0/build/matter.min.js"><\/script>\r
\r
    <script src="matterjs.js"><\/script>\r
\r
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"><\/script>\r
    <script>\r
        AOS.init();\r
    <\/script>\r
</body>\r
\r
</html>`,yt=[{id:1,title:"Modern Glassmorphism Contact Form Using HTML & Tailwind CSS | Stylish Static Form Design",slug:"modern-glassmorphism-contact-form",image:new URL("/programmer-heaven/images/blog1.png",import.meta.url).href,excerpt:"In this guide, you'll learn how to build a beautiful glassmorphism-style login form using HTML, Tailwind CSS, and AOS scroll animation. This modern UI design is not only eye-catching but also responsive and smooth.",demo:Ee,content:$c,related:[{slug:"modern-glassmorphism-contact-form-real-world-examples",demo:Ee,content:Yc},{slug:"modern-glassmorphism-contact-form-micro-interactions",demo:Ee,content:Vc},{slug:"modern-glassmorphism-contact-form-neurmorphism-comparison",demo:Ee,content:Kc},{slug:"modern-glassmorphism-contact-form-bug-fixes",demo:Ee,content:Jc},{slug:"modern-glassmorphism-contact-form-fun-facts",demo:Ee,content:Qc}]},{id:2,title:"How to Create a Transparent Text Effect with Tailwind CSS",slug:"transparent-text-effect",image:new URL("/programmer-heaven/images/transparent-text.png",import.meta.url).href,excerpt:"This tutorial teaches you how to achieve a beautiful transparent text overlay effect on a background image using Tailwind CSS. It's lightweight, responsive, and perfect for portfolios and hero sections.",demo:qe,content:Xc,related:[{id:"transparent-text-enhancer",slug:"transparent-text-effect-enhance",demo:qe,content:Zc},{slug:"transparent-text-effect-real-world-examples",demo:qe,content:ep},{slug:"transparent-text-effect-fun-facts",demo:qe,content:tp},{slug:"transparent-text-effect-problem-solving-approaches",demo:qe,content:np}]},{id:3,title:"🧩 Build a Fun Drag-and-Drop Puzzle Game Using HTML, Tailwind CSS & JavaScript",slug:"drag-and-drop-puzzle-game",image:new URL("/programmer-heaven/images/puzzle-game.png",import.meta.url).href,excerpt:"Looking for a simple yet exciting project to level up your frontend skills? This drag-and-drop puzzle game is a great way to practice your knowledge of HTML, Tailwind CSS, and JavaScript.",content:rp,related:[{slug:"drag-and-drop-puzzle-game-fun-facts",demo:mt,content:op},{slug:"drag-and-drop-puzzle-game-real-world-examples",demo:mt,content:lp},{slug:"drag-and-drop-puzzle-game-enhancements",demo:mt,content:ap},{slug:"drag-and-drop-puzzle-game-debugging",demo:mt,content:ip}]},{id:3,title:"Crazy Neon Hover Effect on Icons",slug:"icons-hover-effect",image:new URL("/programmer-heaven/images/neon-icons-cover.png",import.meta.url).href,excerpt:"Learn how to build an interactive, glowing icon grid using Tailwind CSS and Vanilla JavaScript. Perfect for beginners looking to explore hover effects, responsive design, and Font Awesome icons.",content:sp},{id:4,title:"Awesome Design Using Matter.js",slug:"awesome-matterjs-design",image:new URL("/programmer-heaven/images/matterjs.png",import.meta.url).href,excerpt:"Learn how to combine Tailwind CSS with Matter.js to build a transparent text effect over an animated physics-based background. This tutorial is perfect for beginners looking to make modern, interactive designs.",content:cp,related:[{slug:"awesome-matterjs-design-fun-facts",content:pp},{slug:"awesome-matterjs-design-beginners-guide",content:dp},{slug:"awesome-matterjs-design-problem-solving",content:fp},{slug:"awesome-matterjs-design-planning",content:up},{slug:"awesome-matterjs-design-real-world-examples",content:mp}]}],hp={class:"max-w-7xl mx-auto"},gp={class:"grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-3 mt-12 sm:mt-24 gap-3 text-xl"},bp={__name:"Main",setup(n){return(e,t)=>(fn(),vn("main",null,[t[0]||(t[0]=A("h1",{class:"font-serif text-center text-2xl sm:text-3xl mt-6 animate-slide-up animate-delay sm:mt-1"}," Coder's Heaven ",-1)),an(Wc),A("div",hp,[A("div",gp,[(fn(!0),vn(wn,null,Oe(ne(yt),(s,r)=>(fn(),Os(Gc,{key:r,title:s.title,description:s.excerpt,image:s.image,href:`/blog-posts/${s.slug}`},null,8,["title","description","image","href"]))),128))])])]))}},xp={__name:"Index",setup(n){return(e,t)=>(fn(),vn(wn,null,[an(qt),an(bp)],64))}};function vp(){const n=document.querySelector("#puzzle-pieces"),e=document.querySelector("#dropzone");if(!n||!e)return;const t=new Map,s=c=>{c.dataTransfer.setData("text/plain",c.target.id),c.target.classList.add("opacity-50","scale-90");const m=c.target.id;t.has(m)||t.set(m,c.target.parentElement)},r=c=>{c.target.classList.remove("opacity-50","scale-90")},a=c=>{c.preventDefault(),c.currentTarget.classList.add("bg-white/60")},o=c=>{c.currentTarget.classList.remove("bg-white/60")},l=c=>{c.preventDefault(),c.currentTarget.classList.remove("bg-white/60");const m=c.dataTransfer.getData("text/plain"),h=document.getElementById(m);if(!h)return;if(c.currentTarget.firstChild){const x=c.currentTarget.firstChild,S=t.get(x.id);S&&S.appendChild(x)}c.currentTarget.innerHTML="";const b=document.createElement("div");b.className="w-full h-full flex items-center justify-center overflow-hidden p-1",h.className="max-w-full max-h-full object-contain",h.style.transform="",b.appendChild(h),c.currentTarget.appendChild(b),h.classList.remove("opacity-50","scale-90")},i=(c,m)=>{const h=document.createElement("div");h.className="relative aspect-square overflow-hidden rounded-lg shadow-md bg-white/40";const b=document.createElement("img");return b.className="w-full h-full object-contain cursor-grab active:cursor-grabbing",b.src=`/images/puzzle-image-split/row-${c}-column-${m}.jpg`,b.draggable=!0,b.id=`piece-${c}-${m}`,b.addEventListener("dragstart",s),b.addEventListener("dragend",r),h.appendChild(b),h},d=()=>{const c=document.createElement("div");return c.className="aspect-square bg-white/30 border-2 border-dashed border-white/50 rounded-lg transition-colors duration-200",c.addEventListener("dragover",a),c.addEventListener("dragleave",o),c.addEventListener("drop",l),c};(()=>{n.innerHTML="",e.innerHTML="";for(let m=0;m<9;m++){const h=Math.floor(m/3)+1,b=m%3+1;n.appendChild(i(h,b))}for(let m=0;m<9;m++)e.appendChild(d());const c=Array.from(n.children);c.sort(()=>Math.random()-.5),c.forEach(m=>n.appendChild(m))})()}function wp(){const n=["fas fa-headphones","fas fa-laptop","fas fa-mobile-alt","fas fa-desktop","fas fa-gamepad","fas fa-camera","fas fa-video","fas fa-volume-up","fas fa-heart","fas fa-heart-broken","fas fa-face-grin-squint-tears","fas fa-face-smile","fas fa-face-grin-hearts","fas fa-face-grin-stars","fas fa-face-laugh-squint","fas fa-code","fas fa-terminal","fas fa-plug","fas fa-computer-mouse","fas fa-lock","fas fa-server","fas fa-database","fas fa-link","fas fa-shield-alt","fas fa-rocket","fas fa-bolt","fas fa-sparkles","fas fa-trophy","fas fa-bullseye","fas fa-paint-brush","fas fa-music","fas fa-pizza-slice","fas fa-coffee","fas fa-dice","fas fa-computer-mouse","fas fa-lock","fas fa-server","fas fa-database","fas fa-link","fas fa-shield-alt","fas fa-rocket","fas fa-bolt","fas fa-sparkles","fas fa-trophy","fas fa-bullseye","fas fa-paint-brush","fas fa-music","fas fa-pizza-slice","fas fa-coffee","fas fa-dice","fas fa-headphones","fas fa-laptop","fas fa-mobile-alt","fas fa-desktop","fas fa-gamepad","fas fa-camera","fas fa-video","fas fa-volume-up","fas fa-heart","fas fa-heart-broken","fas fa-face-grin-squint-tears","fas fa-face-smile","fas fa-face-grin-hearts","fas fa-face-grin-stars","fas fa-face-laugh-squint","fas fa-code","fas fa-terminal","fas fa-plug","fas fa-computer-mouse","fas fa-lock","fas fa-server","fas fa-database","fas fa-link","fas fa-shield-alt","fas fa-rocket","fas fa-bolt","fas fa-sparkles","fas fa-trophy","fas fa-bullseye","fas fa-paint-brush","fas fa-music","fas fa-pizza-slice","fas fa-coffee","fas fa-dice","fas fa-computer-mouse","fas fa-lock","fas fa-server","fas fa-database","fas fa-link","fas fa-shield-alt","fas fa-rocket","fas fa-bolt","fas fa-sparkles","fas fa-trophy","fas fa-bullseye","fas fa-paint-brush","fas fa-music","fas fa-pizza-slice","fas fa-coffee","fas fa-dice"],e=document.querySelector("#icon-container");n.forEach(t=>{const s=document.createElement("i");s.className=`hover:scale-125 hover:text-lime-300  
  hover:drop-shadow-[0_0_5px_#4ade80] 
  hover:drop-shadow-[0_0_10px_#4ade80,0_0_20px_#22c55e,0_0_40px_#16a34a]
  focus:drop-shadow-[0_0_5px_#4ade80]
  active:drop-shadow-[0_0_10px_#4ade80,0_0_20px_#22c55e,0_0_40px_#16a34a]
  focus:text-lime-300
  active:text-lime-300
  hover:bg-transparent ${t}`,e.appendChild(s)})}function yp(){const n=document.getElementById("effect");n.clientWidth,n.clientHeight;const e=Matter.Engine,t=Matter.Render,s=Matter.World,r=Matter.Bodies;Matter.Body,Matter.Events;const a=e.create(),o=a.world,l=t.create({element:n,engine:a,options:{width:window.innerWidth,height:window.innerHeight,wireframes:!1,background:"#222"}});t.run(l),e.run(a);const i=r.rectangle(window.innerWidth/2,window.innerHeight+50,window.innerWidth,100,{isStatic:!0,render:{fillStyle:"#666"}}),d=[r.rectangle(400,500,400,20,{isStatic:!0,angle:-.5,render:{fillStyle:"#888"}}),r.rectangle(800,400,400,20,{isStatic:!0,angle:.5,render:{fillStyle:"#888"}}),r.rectangle(1200,300,400,20,{isStatic:!0,angle:-.4,render:{fillStyle:"#888"}})];s.add(o,[i,...d]);function p(){for(let c=0;c<30;c++){const m=r.circle(300+Math.random()*800,-100-Math.random()*500,15,{restitution:.6,friction:.05,density:.004,render:{fillStyle:"#f5f5f5"}});s.add(o,m)}}p(),setInterval(p,1e3)}const kp={key:0,class:""},Sp={class:"text-center text-xl sm:text-3xl mt-8 px-4"},Tp={class:"mt-10"},_p=["innerHTML"],Cp=["innerHTML"],Ep={key:1,class:"text-center py-24 text-2xl"},Pp={class:"mt-20 border-t border-white/20 pt-10"},jp={class:"space-y-8 max-w-3xl mx-auto px-4"},Ap=["onClick"],zp={class:"flex flex-col sm:flex-row gap-4 items-center"},Mp=["src"],Ip={class:"text-lg font-bold text-white"},Op={class:"text-sm text-white/80 mt-1"},Fp={__name:"BlogPage",setup(n){const e=zc(),t=Ac(),s=On(()=>e.params.slug);function r(p){var m;const c=yt.find(h=>h.slug===p);if(c)return c;for(const h of yt){const b=(m=h.related)==null?void 0:m.find(x=>x.slug===p);if(b)return{...h,...b,title:h.title+" - Related",image:h.image,excerpt:h.excerpt}}return null}const a=On(()=>r(s.value)),o=Te(null),l=On(()=>yt.filter(p=>{var c;return p.slug!==((c=a.value)==null?void 0:c.slug)}).slice(0,3));let i=null;function d(){js(()=>{var h;const p=(h=a.value)==null?void 0:h.slug;if(!o.value)return;o.value.querySelectorAll("script").forEach(b=>b.remove());const c=()=>{o.value.querySelectorAll("[data-router-link]").forEach(b=>{b.addEventListener("click",x=>{const S=x.currentTarget.getAttribute("data-router-link");S&&(x.preventDefault(),t.push(S))},{once:!0})})};c(),i&&i();const m=new MutationObserver(()=>{c()});m.observe(o.value,{childList:!0,subtree:!0}),i=()=>m.disconnect(),p!=null&&p.startsWith("drag-and-drop-puzzle-game")?vp():p==="awesome-matterjs-design"?yp():p==="icons-hover-effect"&&wp()})}return Qe(()=>s.value,()=>{d()}),ct(()=>{d()}),(p,c)=>(fn(),vn(wn,null,[an(qt),a.value?(fn(),vn("div",kp,[A("h1",Sp,Xn(a.value.title),1),A("div",Tp,[c[0]||(c[0]=A("h2",{class:"text-center text-md sm:text-3xl mt-8 px-4"},"Live Demo",-1)),a.value.demo?(fn(),vn("div",{key:0,innerHTML:a.value.demo},null,8,_p)):ar("",!0)]),a.value.content?(fn(),vn("div",{key:0,class:"text-lg w-1/2 mx-auto",innerHTML:a.value.content,ref_key:"htmlContainer",ref:o},null,8,Cp)):ar("",!0)])):(fn(),vn("div",Ep," Blog not found. ")),A("div",Pp,[c[1]||(c[1]=A("h2",{class:"text-2xl font-semibold text-white text-center mb-6"},"Read More",-1)),A("div",jp,[(fn(!0),vn(wn,null,Oe(l.value,m=>(fn(),vn("div",{key:m.slug,class:"bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer",onClick:h=>ne(t).push({name:"BlogPage",params:{slug:m.slug}})},[A("div",zp,[A("img",{src:m.image,alt:"blog image",class:"w-full sm:w-36 h-24 object-cover rounded-lg"},null,8,Mp),A("div",null,[A("h3",Ip,Xn(m.title),1),A("p",Op,Xn(m.excerpt),1)])])],8,Ap))),128))])])],64))}};var kt={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */var Rp=kt.exports,Lr;function Dp(){return Lr||(Lr=1,function(n,e){(function(t,s){n.exports=s()})(Rp,function(){var t={};t.version="0.2.0";var s=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(b){var x,S;for(x in b)S=b[x],S!==void 0&&b.hasOwnProperty(x)&&(s[x]=S);return this},t.status=null,t.set=function(b){var x=t.isStarted();b=r(b,s.minimum,1),t.status=b===1?null:b;var S=t.render(!x),z=S.querySelector(s.barSelector),M=s.speed,D=s.easing;return S.offsetWidth,l(function(E){s.positionUsing===""&&(s.positionUsing=t.getPositioningCSS()),i(z,o(b,M,D)),b===1?(i(S,{transition:"none",opacity:1}),S.offsetWidth,setTimeout(function(){i(S,{transition:"all "+M+"ms linear",opacity:0}),setTimeout(function(){t.remove(),E()},M)},M)):setTimeout(E,M)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var b=function(){setTimeout(function(){t.status&&(t.trickle(),b())},s.trickleSpeed)};return s.trickle&&b(),this},t.done=function(b){return!b&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(b){var x=t.status;return x?(typeof b!="number"&&(b=(1-x)*r(Math.random()*x,.1,.95)),x=r(x+b,0,.994),t.set(x)):t.start()},t.trickle=function(){return t.inc(Math.random()*s.trickleRate)},function(){var b=0,x=0;t.promise=function(S){return!S||S.state()==="resolved"?this:(x===0&&t.start(),b++,x++,S.always(function(){x--,x===0?(b=0,t.done()):t.set((b-x)/b)}),this)}}(),t.render=function(b){if(t.isRendered())return document.getElementById("nprogress");p(document.documentElement,"nprogress-busy");var x=document.createElement("div");x.id="nprogress",x.innerHTML=s.template;var S=x.querySelector(s.barSelector),z=b?"-100":a(t.status||0),M=document.querySelector(s.parent),D;return i(S,{transition:"all 0 linear",transform:"translate3d("+z+"%,0,0)"}),s.showSpinner||(D=x.querySelector(s.spinnerSelector),D&&h(D)),M!=document.body&&p(M,"nprogress-custom-parent"),M.appendChild(x),x},t.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(s.parent),"nprogress-custom-parent");var b=document.getElementById("nprogress");b&&h(b)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var b=document.body.style,x="WebkitTransform"in b?"Webkit":"MozTransform"in b?"Moz":"msTransform"in b?"ms":"OTransform"in b?"O":"";return x+"Perspective"in b?"translate3d":x+"Transform"in b?"translate":"margin"};function r(b,x,S){return b<x?x:b>S?S:b}function a(b){return(-1+b)*100}function o(b,x,S){var z;return s.positionUsing==="translate3d"?z={transform:"translate3d("+a(b)+"%,0,0)"}:s.positionUsing==="translate"?z={transform:"translate("+a(b)+"%,0)"}:z={"margin-left":a(b)+"%"},z.transition="all "+x+"ms "+S,z}var l=function(){var b=[];function x(){var S=b.shift();S&&S(x)}return function(S){b.push(S),b.length==1&&x()}}(),i=function(){var b=["Webkit","O","Moz","ms"],x={};function S(E){return E.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(U,G){return G.toUpperCase()})}function z(E){var U=document.body.style;if(E in U)return E;for(var G=b.length,J=E.charAt(0).toUpperCase()+E.slice(1),$;G--;)if($=b[G]+J,$ in U)return $;return E}function M(E){return E=S(E),x[E]||(x[E]=z(E))}function D(E,U,G){U=M(U),E.style[U]=G}return function(E,U){var G=arguments,J,$;if(G.length==2)for(J in U)$=U[J],$!==void 0&&U.hasOwnProperty(J)&&D(E,J,$);else D(E,G[1],G[2])}}();function d(b,x){var S=typeof b=="string"?b:m(b);return S.indexOf(" "+x+" ")>=0}function p(b,x){var S=m(b),z=S+x;d(S,x)||(b.className=z.substring(1))}function c(b,x){var S=m(b),z;d(b,x)&&(z=S.replace(" "+x+" "," "),b.className=z.substring(1,z.length-1))}function m(b){return(" "+(b.className||"")+" ").replace(/\s+/gi," ")}function h(b){b&&b.parentNode&&b.parentNode.removeChild(b)}return t})}(kt)),kt.exports}var Lp=Dp();const Hs=$a(Lp),Bp={class:""},Wp={class:"fixed inset-0 overflow-hidden pointer-events-none"},Hp={class:"max-w-7xl mx-auto relative z-10"},Up={class:"text-center","data-aos":"fade-up","data-aos-duration":"800"},Np={__name:"AboutUs",setup(n){return ct(()=>{Ds.init({once:!0,duration:800,easing:"ease-out-quart"})}),(e,t)=>(fn(),vn(wn,null,[an(qt),A("div",Bp,[A("div",Wp,[(fn(),vn(wn,null,Oe(12,s=>A("div",{key:s,class:ke(["absolute rounded-full bg-white/10 backdrop-blur-sm",[`w-${Math.floor(Math.random()*20)+10}`,`h-${Math.floor(Math.random()*20)+10}`,`top-${Math.floor(Math.random()*100)}`,`left-${Math.floor(Math.random()*100)}`,"animate-float"]]),style:Re({animationDuration:`${Math.random()*15+10}s`,animationDelay:`${Math.random()*5}s`})},null,6)),64))]),A("div",Hp,[t[3]||(t[3]=xt('<header class="text-center mb-16" data-aos="fade-down" data-aos-duration="800" data-v-c09c38e6><h1 class="text-4xl md:text-6xl font-bold text-white mb-6" data-v-c09c38e6> About <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-pink-300" data-v-c09c38e6>Our Mission</span></h1><div class="w-24 h-1 bg-white/50 mx-auto mb-8" data-v-c09c38e6></div><p class="text-xl text-white/80 max-w-3xl mx-auto" data-v-c09c38e6> We create beautiful, interactive web experiences with modern technologies. </p></header><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" data-v-c09c38e6><div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl" data-aos="fade-right" data-aos-duration="800" data-v-c09c38e6><div class="flex items-center mb-6" data-v-c09c38e6><div class="bg-gradient-to-r from-amber-400 to-pink-500 p-3 rounded-xl mr-4" data-v-c09c38e6><i class="fas fa-book-open text-white text-xl" data-v-c09c38e6></i></div><h2 class="text-2xl font-bold text-white" data-v-c09c38e6>Our Story</h2></div><p class="text-white/80 mb-6" data-v-c09c38e6> Founded in 2025, we started as a small team passionate about creating stunning UI components and sharing our knowledge with the developer community. </p><p class="text-white/80" data-v-c09c38e6> What began as a hobby quickly grew into a platform where we publish tutorials, free components, and design inspiration for developers worldwide. </p></div><div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200" data-v-c09c38e6><div class="flex items-center mb-6" data-v-c09c38e6><div class="bg-gradient-to-r from-blue-400 to-purple-500 p-3 rounded-xl mr-4" data-v-c09c38e6><i class="fas fa-code text-white text-xl" data-v-c09c38e6></i></div><h2 class="text-2xl font-bold text-white" data-v-c09c38e6>What We Do</h2></div><p class="text-white/80 mb-6" data-v-c09c38e6> We specialize in creating modern web interfaces using Vue.js, Tailwind CSS, and cutting-edge CSS techniques like glassmorphism, animations, and interactive effects. </p><ul class="space-y-3 text-white/80 font-bold" data-v-c09c38e6><li class="flex items-center" data-v-c09c38e6> ✅ Tutorials on modern UI effects </li><li class="flex items-center" data-v-c09c38e6> ✅ Free reusable components </li><li class="flex items-center" data-v-c09c38e6> ✅ Design inspiration </li><li class="flex items-center" data-v-c09c38e6> ✅ Fully functional javascript-based tutorials </li></ul></div></div>',2)),A("section",Up,[t[1]||(t[1]=A("h2",{class:"text-3xl font-bold text-white mb-6"},"Ready to Elevate Your UI Skills?",-1)),t[2]||(t[2]=A("p",{class:"text-white/80 max-w-2xl mx-auto mb-8"}," Join our community of developers creating beautiful, modern interfaces with our tutorials and components. ",-1)),an(ne(ao),{to:"/"},{default:he(()=>t[0]||(t[0]=[A("button",{class:"bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105"}," Explore Tutorials ",-1)])),_:1,__:[0]})])])])],64))}},qp=Ws(Np,[["__scopeId","data-v-c09c38e6"]]),Gp={class:"font-serif py-12 px-4 sm:px-6 lg:px-8"},$p={class:"fixed inset-0 overflow-hidden pointer-events-none"},Yp={class:"max-w-4xl mx-auto relative z-10"},Vp={class:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-16","data-aos":"fade-up"},Kp={class:"flex items-start mb-4"},Jp={class:"bg-gradient-to-r from-purple-400 to-pink-500 p-2 rounded-lg mr-4"},Qp={class:"text-xl font-bold text-white"},Xp={class:"text-white/80"},Zp={class:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl mb-16","data-aos":"zoom-in"},nd={class:"grid grid-cols-1 md:grid-cols-2 gap-8"},ed={class:"bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"},td={class:"bg-black/20 rounded-lg p-4 border border-white/10"},sd={class:"flex items-center justify-between"},rd={class:"bg-gradient-to-br from-indigo-600/30 to-blue-600/30 rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"},ad={class:"bg-black/20 rounded-lg p-4 border border-white/10"},od={class:"flex items-center justify-between"},id={class:"mb-16","data-aos":"fade-up"},ld={class:"space-y-4"},cd=["onClick"],pd={class:"text-lg font-medium text-white"},dd={class:"text-white/70"},ud={__name:"ContactUs",setup(n){const e=[{icon:"code",title:"Stuck on Code?",description:"Get help debugging, optimizing, or understanding tricky concepts in your projects."},{icon:"lightbulb",title:"Project Ideas",description:"Discuss potential projects, get feedback, or brainstorm new features."},{icon:"graduation-cap",title:"Learning Guidance",description:"Need advice on learning paths, resources, or career direction in frontend?"},{icon:"rocket",title:"Feature Suggestions",description:"Have ideas for new tutorials or components you'd like to see? We're all ears!"}],t=[{question:"How quickly can I expect a response?",answer:"Email responses typically come within 24 hours, while Discord messages are usually answered within a few hours during our active times (9AM-6PM UTC)."},{question:"Do you offer paid consulting or development?",answer:"Yes! For extensive projects or dedicated support, we offer consulting services. Contact us with your requirements."},{question:"Where can I find your free components?",answer:"All our free components are available in the end of each tutorial with detailed documentation for every chunk and live demos."}],s=Te(null),r=Te(!1),a=Te(""),o=i=>{s.value=s.value===i?null:i},l=i=>{navigator.clipboard.writeText(i),a.value=`Copied: ${i}`,r.value=!0,setTimeout(()=>{r.value=!1},3e3)};return ct(()=>{Ds.init({once:!0,duration:800,easing:"ease-out-quart"})}),(i,d)=>(fn(),vn(wn,null,[an(qt),A("div",Gp,[A("div",$p,[(fn(),vn(wn,null,Oe(12,p=>A("div",{key:p,class:ke(["absolute rounded-full bg-white/10 backdrop-blur-sm",[`w-${Math.floor(Math.random()*20)+10}`,`h-${Math.floor(Math.random()*20)+10}`,`top-${Math.floor(Math.random()*100)}`,`left-${Math.floor(Math.random()*100)}`,"animate-float"]]),style:Re({animationDuration:`${Math.random()*15+10}s`,animationDelay:`${Math.random()*5}s`})},null,6)),64))]),A("div",Yp,[d[10]||(d[10]=xt('<header class="text-center mb-16" data-aos="fade-down" data-aos-duration="800" data-v-11e6c38c><h1 class="text-4xl md:text-6xl font-bold text-white mb-6" data-v-11e6c38c> Let&#39;s <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-pink-300" data-v-11e6c38c>Connect</span></h1><div class="w-24 h-1 bg-white/50 mx-auto mb-8" data-v-11e6c38c></div><p class="text-xl text-white/80 max-w-3xl mx-auto" data-v-11e6c38c> Whether you need help, have ideas, or just want to chat about frontend magic </p></header>',1)),A("div",Vp,[(fn(),vn(wn,null,Oe(e,(p,c)=>A("div",{key:c,class:"bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl hover:border-white/40 transition-all duration-300"},[A("div",Kp,[A("div",Jp,[A("i",{class:ke(`fas fa-${p.icon} text-white text-lg`)},null,2)]),A("h3",Qp,Xn(p.title),1)]),A("p",Xp,Xn(p.description),1)])),64))]),A("div",Zp,[d[8]||(d[8]=A("h2",{class:"text-2xl font-bold text-white mb-8 text-center"},[us(" Choose Your Preferred "),A("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500"},"Contact Method")],-1)),A("div",nd,[A("div",ed,[d[4]||(d[4]=xt('<div class="flex items-center mb-4" data-v-11e6c38c><div class="bg-white/20 p-3 rounded-lg mr-4" data-v-11e6c38c><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" data-v-11e6c38c><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" data-v-11e6c38c></path></svg></div><h3 class="text-xl font-bold text-white" data-v-11e6c38c>Email Us</h3></div><p class="text-white/80 mb-6" data-v-11e6c38c> Perfect for detailed questions, code reviews, or project discussions. We typically respond within 24 hours. </p>',2)),A("div",td,[A("div",sd,[d[3]||(d[3]=A("span",{class:"text-white font-mono"},"example@gmail.com",-1)),A("button",{onClick:d[0]||(d[0]=p=>l("example@gmail.com")),class:"text-white/70 hover:text-white transition-colors"},d[2]||(d[2]=[A("i",{class:"far fa-copy"},null,-1)]))])])]),A("div",rd,[d[7]||(d[7]=xt('<div class="flex items-center mb-4" data-v-11e6c38c><div class="bg-white/20 p-3 rounded-lg mr-4" data-v-11e6c38c><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" class="w-6 h-6 text-white fill-current" data-v-11e6c38c><path d="M107.42 8.52A105.15 105.15 0 0082.4 1a72.26 72.26 0 00-3.48 7.16 97.2 97.2 0 00-29.59 0A72.26 72.26 0 0045.85 1 105.2 105.2 0 0020.83 8.53 110.54 110.54 0 00.5 89.53a105.7 105.7 0 0031.47 15.83 76.47 76.47 0 006.53-10.64 67.82 67.82 0 01-10.33-5 89.13 89.13 0 007.7-6.16c15.07 7.11 31.35 7.11 46.27 0a89.13 89.13 0 007.7 6.16 67.82 67.82 0 01-10.33 5 76.54 76.54 0 006.53 10.64 105.75 105.75 0 0031.47-15.83 110.61 110.61 0 00-20.92-81zm-65.17 62.7c-5.66 0-10.34-5.19-10.34-11.54s4.58-11.54 10.34-11.54 10.41 5.25 10.34 11.54c0 6.35-4.58 11.54-10.34 11.54zm42.64 0c-5.66 0-10.34-5.19-10.34-11.54s4.58-11.54 10.34-11.54S95.1 53.33 95 59.68c0 6.35-4.58 11.54-10.34 11.54z" data-v-11e6c38c></path></svg></div><h3 class="text-xl font-bold text-white" data-v-11e6c38c>Reach us on Discord</h3></div><p class="text-white/80 mb-6" data-v-11e6c38c> Great for quick questions, live discussions, and community support. Our most responsive channel. </p>',2)),A("div",ad,[A("div",od,[d[6]||(d[6]=A("span",{class:"text-white font-mono"},"professional_gamer20",-1)),A("button",{onClick:d[1]||(d[1]=p=>l("professional_gamer20")),class:"text-white/70 hover:text-white transition-colors"},d[5]||(d[5]=[A("i",{class:"far fa-copy"},null,-1)]))])])])])]),A("div",id,[d[9]||(d[9]=A("h2",{class:"text-2xl font-bold text-white mb-8 text-center"},[us(" Before You "),A("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400"},"Reach Out")],-1)),A("div",ld,[(fn(),vn(wn,null,Oe(t,(p,c)=>A("div",{key:c,class:"bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300"},[A("button",{class:"flex items-center justify-between w-full text-left",onClick:m=>o(c)},[A("h3",pd,Xn(p.question),1),A("i",{class:ke(`fas fa-chevron-${s.value===c?"up":"down"} text-white/50 transition-transform duration-300`)},null,2)],8,cd),A("div",{class:"overflow-hidden transition-all duration-300",style:Re({maxHeight:s.value===c?"200px":"0px",marginTop:s.value===c?"12px":"0px"})},[A("p",dd,Xn(p.answer),1)],4)])),64))])])])])],64))}},fd=Ws(ud,[["__scopeId","data-v-11e6c38c"]]);Hs.configure({showSpinner:!1});const Us=Pc({history:ac("/programmer-heaven/"),scrollBehavior(n,e,t){return{top:0}},routes:[{path:"/",name:"index",component:xp},{path:"/blog-posts/:slug",name:"blog",component:Fp},{path:"/about-us",name:"about-us",component:qp},{path:"/contact-us",name:"contact-us",component:fd}]});Us.beforeEach((n,e,t)=>{Hs.start(),t()});Us.afterEach(()=>{Hs.done()});Ds.init();const io=Sl(Mc);io.use(Us);io.mount("#app");
