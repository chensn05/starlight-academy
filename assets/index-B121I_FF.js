(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ic="185",df=0,Jc=1,uf=2,sa=1,zd=2,Ks=3,Si=0,cn=1,en=2,ii=0,Ms=1,ws=2,Kc=3,Qc=4,ff=5,Li=100,pf=101,mf=102,gf=103,vf=104,_f=200,xf=201,Mf=202,yf=203,Yo=204,$o=205,Sf=206,bf=207,Ef=208,wf=209,Tf=210,Af=211,Cf=212,Rf=213,Pf=214,Zo=0,Jo=1,Ko=2,Ts=3,Qo=4,jo=5,tl=6,el=7,kd=0,If=1,Lf=2,zn=0,Gd=1,Vd=2,Hd=3,Ha=4,Wd=5,Xd=6,qd=7,Yd=300,Bi=301,As=302,ra=303,eo=304,Wa=306,zi=1e3,ti=1001,nl=1002,$e=1003,Df=1004,yr=1005,nn=1006,no=1007,Ui=1008,vn=1009,$d=1010,Zd=1011,or=1012,sc=1013,Hn=1014,Rn=1015,ri=1016,rc=1017,ac=1018,lr=1020,Jd=35902,Kd=35899,Qd=1021,jd=1022,Pn=1023,ai=1026,Ni=1027,oc=1028,lc=1029,ki=1030,cc=1031,hc=1033,aa=33776,oa=33777,la=33778,ca=33779,il=35840,sl=35841,rl=35842,al=35843,ol=36196,ll=37492,cl=37496,hl=37488,dl=37489,ga=37490,ul=37491,fl=37808,pl=37809,ml=37810,gl=37811,vl=37812,_l=37813,xl=37814,Ml=37815,yl=37816,Sl=37817,bl=37818,El=37819,wl=37820,Tl=37821,Al=36492,Cl=36494,Rl=36495,Pl=36283,Il=36284,va=36285,Ll=36286,Ff=3200,Dl=0,Uf=1,_i="",_e="srgb",_a="srgb-linear",xa="linear",Se="srgb",Qi=7680,jc=519,Nf=512,Of=513,Bf=514,dc=515,zf=516,kf=517,uc=518,Gf=519,Fl=35044,th="300 es",Bn=2e3,cr=2001;function Vf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ma(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hf(){const n=Ma("canvas");return n.style.display="block",n}const eh={};function ya(...n){const t="THREE."+n.shift();console.log(t,...n)}function tu(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function jt(...n){n=tu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function he(...n){n=tu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ys(...n){const t=n.join(" ");t in eh||(eh[t]=!0,jt(...n))}function Wf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Xf={[Zo]:Jo,[Ko]:tl,[Qo]:el,[Ts]:jo,[Jo]:Zo,[tl]:Ko,[el]:Qo,[jo]:Ts};class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nh=1234567;const er=Math.PI/180,hr=180/Math.PI;function kn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function ce(n,t,e){return Math.max(t,Math.min(e,n))}function fc(n,t){return(n%t+t)%t}function qf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Yf(n,t,e){return n!==t?(e-n)/(t-n):0}function nr(n,t,e){return(1-e)*n+e*t}function $f(n,t,e,i){return nr(n,t,1-Math.exp(-e*i))}function Zf(n,t=1){return t-Math.abs(fc(n,t*2)-t)}function Jf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Kf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Qf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function jf(n,t){return n+Math.random()*(t-n)}function tp(n){return n*(.5-Math.random())}function ep(n){n!==void 0&&(nh=n);let t=nh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function np(n){return n*er}function ip(n){return n*hr}function sp(n){return(n&n-1)===0&&n!==0}function rp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ap(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function op(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),d=a((t+i)/2),p=r((t-i)/2),h=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*d,l*p,l*h,o*c);break;case"YZY":n.set(l*h,o*d,l*p,o*c);break;case"ZXZ":n.set(l*p,l*h,o*d,o*c);break;case"XZX":n.set(o*d,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*d,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*d,o*c);break;default:jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function be(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const bi={DEG2RAD:er,RAD2DEG:hr,generateUUID:kn,clamp:ce,euclideanModulo:fc,mapLinear:qf,inverseLerp:Yf,lerp:nr,damp:$f,pingpong:Zf,smoothstep:Jf,smootherstep:Kf,randInt:Qf,randFloat:jf,randFloatSpread:tp,seededRandom:ep,degToRad:np,radToDeg:ip,isPowerOfTwo:sp,ceilPowerOfTwo:rp,floorPowerOfTwo:ap,setQuaternionFromProperEuler:op,normalize:be,denormalize:Cn},zc=class zc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zc.prototype.isVector2=!0;let Et=zc;class Ds{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],p=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(p!==M||l!==h||c!==f||d!==g){let m=l*h+c*f+d*g+p*M;m<0&&(h=-h,f=-f,g=-g,M=-M,m=-m);let u=1-o;if(m<.9995){const y=Math.acos(m),S=Math.sin(y);u=Math.sin(u*y)/S,o=Math.sin(o*y)/S,l=l*u+h*o,c=c*u+f*o,d=d*u+g*o,p=p*u+M*o}else{l=l*u+h*o,c=c*u+f*o,d=d*u+g*o,p=p*u+M*o;const y=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=y,c*=y,d*=y,p*=y}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],p=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+d*p+l*f-c*h,t[e+1]=l*g+d*h+c*p-o*f,t[e+2]=c*g+d*f+o*h-l*p,t[e+3]=d*g-o*p-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),p=o(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*d*p+c*f*g,this._y=c*f*p-h*d*g,this._z=c*d*g+h*f*p,this._w=c*d*p-h*f*g;break;case"YXZ":this._x=h*d*p+c*f*g,this._y=c*f*p-h*d*g,this._z=c*d*g-h*f*p,this._w=c*d*p+h*f*g;break;case"ZXY":this._x=h*d*p-c*f*g,this._y=c*f*p+h*d*g,this._z=c*d*g+h*f*p,this._w=c*d*p-h*f*g;break;case"ZYX":this._x=h*d*p-c*f*g,this._y=c*f*p+h*d*g,this._z=c*d*g-h*f*p,this._w=c*d*p+h*f*g;break;case"YZX":this._x=h*d*p+c*f*g,this._y=c*f*p+h*d*g,this._z=c*d*g-h*f*p,this._w=c*d*p-h*f*g;break;case"XZY":this._x=h*d*p-c*f*g,this._y=c*f*p-h*d*g,this._z=c*d*g+h*f*p,this._w=c*d*p+h*f*g;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],p=e[10],h=i+o+p;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>p){const f=2*Math.sqrt(1+i-o-p);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>p){const f=2*Math.sqrt(1+o-i-p);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+p-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const kc=class kc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ih.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),d=2*(o*e-r*s),p=2*(r*i-a*e);return this.x=e+l*c+a*p-o*d,this.y=i+l*d+o*c-r*p,this.z=s+l*p+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kc.prototype.isVector3=!0;let O=kc;const io=new O,ih=new Ds,Gc=class Gc{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],h=i[2],f=i[5],g=i[8],M=s[0],m=s[3],u=s[6],y=s[1],S=s[4],x=s[7],w=s[2],E=s[5],A=s[8];return r[0]=a*M+o*y+l*w,r[3]=a*m+o*S+l*E,r[6]=a*u+o*x+l*A,r[1]=c*M+d*y+p*w,r[4]=c*m+d*S+p*E,r[7]=c*u+d*x+p*A,r[2]=h*M+f*y+g*w,r[5]=h*m+f*S+g*E,r[8]=h*u+f*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=d*a-o*c,h=o*l-d*r,f=c*r-a*l,g=e*p+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=p*M,t[1]=(s*c-d*i)*M,t[2]=(o*i-s*a)*M,t[3]=h*M,t[4]=(d*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(i*l-c*e)*M,t[8]=(a*e-i*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(so.makeScale(t,e)),this}rotate(t){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(so.makeRotation(-t)),this}translate(t,e){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(so.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Gc.prototype.isMatrix3=!0;let ie=Gc;const so=new ie,sh=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lp(){const n={enabled:!0,workingColorSpace:_a,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Se&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?xa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_a]:{primaries:t,whitePoint:i,transfer:xa,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_e},outputColorSpaceConfig:{drawingBufferColorSpace:_e}},[_e]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_e}}}),n}const fe=lp();function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ss(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ji;class cp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ji===void 0&&(ji=Ma("canvas")),ji.width=t.width,ji.height=t.height;const s=ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ji}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ma("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(si(e[i]/255)*255):e[i]=si(e[i]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hp=0;class pc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ro(s[a].image)):r.push(ro(s[a]))}else r=ro(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ro(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}let dp=0;const ao=new O;class sn extends Xi{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,i=ti,s=ti,r=nn,a=Ui,o=Pn,l=vn,c=sn.DEFAULT_ANISOTROPY,d=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=kn(),this.name="",this.source=new pc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ao).x}get height(){return this.source.getSize(ao).y}get depth(){return this.source.getSize(ao).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zi:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case nl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zi:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case nl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Yd;sn.DEFAULT_ANISOTROPY=1;const Vc=class Vc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],d=l[4],p=l[8],h=l[1],f=l[5],g=l[9],M=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(p-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(f+1)/2,w=(u+1)/2,E=(d+h)/4,A=(p+M)/4,_=(g+m)/4;return S>x&&S>w?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=E/i,r=A/i):x>w?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=E/s,r=_/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=A/r,s=_/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(p-M)*(p-M)+(h-d)*(h-d));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(p-M)/y,this.z=(h-d)/y,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vc.prototype.isVector4=!0;let De=Vc;class up extends Xi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new sn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new pc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends up{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class eu extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fp extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Va=class Va{constructor(t,e,i,s,r,a,o,l,c,d,p,h,f,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,d,p,h,f,g,M,m)}set(t,e,i,s,r,a,o,l,c,d,p,h,f,g,M,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=p,u[14]=h,u[3]=f,u[7]=g,u[11]=M,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Va().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),a=1/ts.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const h=a*d,f=a*p,g=o*d,M=o*p;e[0]=l*d,e[4]=-l*p,e[8]=c,e[1]=f+g*c,e[5]=h-M*c,e[9]=-o*l,e[2]=M-h*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*d,f=l*p,g=c*d,M=c*p;e[0]=h+M*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*p,e[5]=a*d,e[9]=-o,e[2]=f*o-g,e[6]=M+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*d,f=l*p,g=c*d,M=c*p;e[0]=h-M*o,e[4]=-a*p,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*d,e[9]=M-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*d,f=a*p,g=o*d,M=o*p;e[0]=l*d,e[4]=g*c-f,e[8]=h*c+M,e[1]=l*p,e[5]=M*c+h,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*d,e[4]=M-h*p,e[8]=g*p+f,e[1]=p,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=f*p+g,e[10]=h-M*p}else if(t.order==="XZY"){const h=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*d,e[4]=-p,e[8]=c*d,e[1]=h*p+M,e[5]=a*d,e[9]=f*p-g,e[2]=g*p-f,e[6]=o*d,e[10]=M*p+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pp,t,mp)}lookAt(t,e,i){const s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),di.crossVectors(i,pn),di.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),di.crossVectors(i,pn)),di.normalize(),Sr.crossVectors(pn,di),s[0]=di.x,s[4]=Sr.x,s[8]=pn.x,s[1]=di.y,s[5]=Sr.y,s[9]=pn.y,s[2]=di.z,s[6]=Sr.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],h=i[9],f=i[13],g=i[2],M=i[6],m=i[10],u=i[14],y=i[3],S=i[7],x=i[11],w=i[15],E=s[0],A=s[4],_=s[8],b=s[12],C=s[1],R=s[5],D=s[9],G=s[13],F=s[2],B=s[6],Y=s[10],k=s[14],it=s[3],st=s[7],ft=s[11],ht=s[15];return r[0]=a*E+o*C+l*F+c*it,r[4]=a*A+o*R+l*B+c*st,r[8]=a*_+o*D+l*Y+c*ft,r[12]=a*b+o*G+l*k+c*ht,r[1]=d*E+p*C+h*F+f*it,r[5]=d*A+p*R+h*B+f*st,r[9]=d*_+p*D+h*Y+f*ft,r[13]=d*b+p*G+h*k+f*ht,r[2]=g*E+M*C+m*F+u*it,r[6]=g*A+M*R+m*B+u*st,r[10]=g*_+M*D+m*Y+u*ft,r[14]=g*b+M*G+m*k+u*ht,r[3]=y*E+S*C+x*F+w*it,r[7]=y*A+S*R+x*B+w*st,r[11]=y*_+S*D+x*Y+w*ft,r[15]=y*b+S*G+x*k+w*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],p=t[6],h=t[10],f=t[14],g=t[3],M=t[7],m=t[11],u=t[15],y=l*f-c*h,S=o*f-c*p,x=o*h-l*p,w=a*f-c*d,E=a*h-l*d,A=a*p-o*d;return e*(M*y-m*S+u*x)-i*(g*y-m*w+u*E)+s*(g*S-M*w+u*A)-r*(g*x-M*E+m*A)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],d=t[10];return e*(a*d-o*c)-i*(r*d-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=t[9],h=t[10],f=t[11],g=t[12],M=t[13],m=t[14],u=t[15],y=e*o-i*a,S=e*l-s*a,x=e*c-r*a,w=i*l-s*o,E=i*c-r*o,A=s*c-r*l,_=d*M-p*g,b=d*m-h*g,C=d*u-f*g,R=p*m-h*M,D=p*u-f*M,G=h*u-f*m,F=y*G-S*D+x*R+w*C-E*b+A*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/F;return t[0]=(o*G-l*D+c*R)*B,t[1]=(s*D-i*G-r*R)*B,t[2]=(M*A-m*E+u*w)*B,t[3]=(h*E-p*A-f*w)*B,t[4]=(l*C-a*G-c*b)*B,t[5]=(e*G-s*C+r*b)*B,t[6]=(m*x-g*A-u*S)*B,t[7]=(d*A-h*x+f*S)*B,t[8]=(a*D-o*C+c*_)*B,t[9]=(i*C-e*D-r*_)*B,t[10]=(g*E-M*x+u*y)*B,t[11]=(p*x-d*E-f*y)*B,t[12]=(o*b-a*R-l*_)*B,t[13]=(e*R-i*b+s*_)*B,t[14]=(M*S-g*w-m*y)*B,t[15]=(d*w-p*S+h*y)*B,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,p=o+o,h=r*c,f=r*d,g=r*p,M=a*d,m=a*p,u=o*p,y=l*c,S=l*d,x=l*p,w=i.x,E=i.y,A=i.z;return s[0]=(1-(M+u))*w,s[1]=(f+x)*w,s[2]=(g-S)*w,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(h+u))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+S)*A,s[9]=(m-y)*A,s[10]=(1-(h+M))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=ts.set(s[0],s[1],s[2]).length();const o=ts.set(s[4],s[5],s[6]).length(),l=ts.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);const c=1/a,d=1/o,p=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=d,En.elements[5]*=d,En.elements[6]*=d,En.elements[8]*=p,En.elements[9]*=p,En.elements[10]*=p,e.setFromRotationMatrix(En),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Bn,l=!1){const c=this.elements,d=2*r/(e-t),p=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===Bn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===cr)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Bn,l=!1){const c=this.elements,d=2/(e-t),p=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===Bn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===cr)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Va.prototype.isMatrix4=!0;let Me=Va;const ts=new O,En=new Me,pp=new O(0,0,0),mp=new O(1,1,1),di=new O,Sr=new O,pn=new O,ah=new Me,oh=new Ds;let Cs=class nu{constructor(t=0,e=0,i=0,s=nu.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],p=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ah,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oh.setFromEuler(this),this.setFromQuaternion(oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cs.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gp=0;const lh=new O,es=new Ds,Yn=new Me,br=new O,Bs=new O,vp=new O,_p=new Ds,ch=new O(1,0,0),hh=new O(0,1,0),dh=new O(0,0,1),uh={type:"added"},xp={type:"removed"},ns={type:"childadded",child:null},oo={type:"childremoved",child:null};class Ue extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new O,e=new Cs,i=new Ds,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new ie}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(ch,t)}rotateY(t){return this.rotateOnAxis(hh,t)}rotateZ(t){return this.rotateOnAxis(dh,t)}translateOnAxis(t,e){return lh.copy(t).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ch,t)}translateY(t){return this.translateOnAxis(hh,t)}translateZ(t){return this.translateOnAxis(dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?br.copy(t):br.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Bs,br,this.up):Yn.lookAt(br,Bs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Yn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(he("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uh),ns.child=t,this.dispatchEvent(ns),ns.child=null):he("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xp),oo.child=t,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uh),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,_p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),p=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new O(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ae extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mp={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,i),u=this._getHandJoint(c,M);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=d.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ae;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Er={h:0,s:0,l:0};function co(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ht{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=i,fe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=fe.workingColorSpace){if(t=fc(t,1),e=ce(e,0,1),i=ce(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=co(a,r,t+1/3),this.g=co(a,r,t),this.b=co(a,r,t-1/3)}return fe.colorSpaceToWorking(this,s),this}setStyle(t,e=_e){function i(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){const i=iu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return fe.workingToColorSpace(Qe.copy(this),t),Math.round(ce(Qe.r*255,0,255))*65536+Math.round(ce(Qe.g*255,0,255))*256+Math.round(ce(Qe.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(Qe.copy(this),e);const i=Qe.r,s=Qe.g,r=Qe.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=d<=.5?p/(a+o):p/(2-a-o),a){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=_e){fe.workingToColorSpace(Qe.copy(this),t);const e=Qe.r,i=Qe.g,s=Qe.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Er);const i=nr(ui.h,Er.h,e),s=nr(ui.s,Er.s,e),r=nr(ui.l,Er.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new Ht;Ht.NAMES=iu;class gc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=i}clone(){return new gc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ul extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cs,this.environmentIntensity=1,this.environmentRotation=new Cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const wn=new O,$n=new O,ho=new O,Zn=new O,is=new O,ss=new O,fh=new O,uo=new O,fo=new O,po=new O,mo=new De,go=new De,vo=new De;let vs=class _s{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),wn.subVectors(t,e),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){wn.subVectors(s,e),$n.subVectors(i,e),ho.subVectors(t,e);const a=wn.dot(wn),o=wn.dot($n),l=wn.dot(ho),c=$n.dot($n),d=$n.dot(ho),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;const h=1/p,f=(c*l-o*d)*h,g=(a*d-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return mo.setScalar(0),go.setScalar(0),vo.setScalar(0),mo.fromBufferAttribute(t,e),go.fromBufferAttribute(t,i),vo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(mo,r.x),a.addScaledVector(go,r.y),a.addScaledVector(vo,r.z),a}static isFrontFacing(t,e,i,s){return wn.subVectors(i,e),$n.subVectors(t,e),wn.cross($n).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),wn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return _s.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return _s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;is.subVectors(s,i),ss.subVectors(r,i),uo.subVectors(t,i);const l=is.dot(uo),c=ss.dot(uo);if(l<=0&&c<=0)return e.copy(i);fo.subVectors(t,s);const d=is.dot(fo),p=ss.dot(fo);if(d>=0&&p<=d)return e.copy(s);const h=l*p-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(i).addScaledVector(is,a);po.subVectors(t,r);const f=is.dot(po),g=ss.dot(po);if(g>=0&&f<=g)return e.copy(r);const M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(ss,o);const m=d*g-f*p;if(m<=0&&p-d>=0&&f-g>=0)return fh.subVectors(r,s),o=(p-d)/(p-d+(f-g)),e.copy(s).addScaledVector(fh,o);const u=1/(m+M+h);return a=M*u,o=h*u,e.copy(i).addScaledVector(is,a).addScaledVector(ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}};class qi{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wr.copy(i.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),Tr.subVectors(this.max,zs),rs.subVectors(t.a,zs),as.subVectors(t.b,zs),os.subVectors(t.c,zs),fi.subVectors(as,rs),pi.subVectors(os,as),Ai.subVectors(rs,os);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ai.z,Ai.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ai.z,0,-Ai.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ai.y,Ai.x,0];return!_o(e,rs,as,os,Tr)||(e=[1,0,0,0,1,0,0,0,1],!_o(e,rs,as,os,Tr))?!1:(Ar.crossVectors(fi,pi),e=[Ar.x,Ar.y,Ar.z],_o(e,rs,as,os,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Jn=[new O,new O,new O,new O,new O,new O,new O,new O],Tn=new O,wr=new qi,rs=new O,as=new O,os=new O,fi=new O,pi=new O,Ai=new O,zs=new O,Tr=new O,Ar=new O,Ci=new O;function _o(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ci.fromArray(n,r);const o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),d=i.dot(Ci);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Ge=new O,Cr=new Et;let yp=0;class Ne extends Xi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Fl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Cr.fromBufferAttribute(this,e),Cr.applyMatrix3(t),this.setXY(e,Cr.x,Cr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Cn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fl&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class su extends Ne{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ru extends Ne{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ue extends Ne{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Sp=new qi,ks=new O,xo=new O;class Yi{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Sp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ks.subVectors(t,this.center);const e=ks.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ks,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ks.copy(t.center).add(xo)),this.expandByPoint(ks.copy(t.center).sub(xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let bp=0;const xn=new Me,Mo=new Ue,ls=new O,mn=new qi,Gs=new qi,qe=new O;class Ee extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vf(t)?ru:su)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ie().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,i){return xn.makeTranslation(t,e,i),this.applyMatrix4(xn),this}scale(t,e,i){return xn.makeScale(t,e,i),this.applyMatrix4(xn),this}lookAt(t){return Mo.lookAt(t),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&he('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(mn.min,Gs.min),mn.expandByPoint(qe),qe.addVectors(mn.max,Gs.max),mn.expandByPoint(qe)):(mn.expandByPoint(Gs.min),mn.expandByPoint(Gs.max))}mn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(qe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)qe.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(t,c),qe.add(ls)),s=Math.max(s,i.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&he('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){he("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ne(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new O,l[_]=new O;const c=new O,d=new O,p=new O,h=new Et,f=new Et,g=new Et,M=new O,m=new O;function u(_,b,C){c.fromBufferAttribute(i,_),d.fromBufferAttribute(i,b),p.fromBufferAttribute(i,C),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,C),d.sub(c),p.sub(c),f.sub(h),g.sub(h);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(M.copy(d).multiplyScalar(g.y).addScaledVector(p,-f.y).multiplyScalar(R),m.copy(p).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(R),o[_].add(M),o[b].add(M),o[C].add(M),l[_].add(m),l[b].add(m),l[C].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,b=y.length;_<b;++_){const C=y[_],R=C.start,D=C.count;for(let G=R,F=R+D;G<F;G+=3)u(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const S=new O,x=new O,w=new O,E=new O;function A(_){w.fromBufferAttribute(s,_),E.copy(w);const b=o[_];S.copy(b),S.sub(w.multiplyScalar(w.dot(b))).normalize(),x.crossVectors(E,b);const R=x.dot(l[_])<0?-1:1;a.setXYZW(_,S.x,S.y,S.z,R)}for(let _=0,b=y.length;_<b;++_){const C=y[_],R=C.start,D=C.count;for(let G=R,F=R+D;G<F;G+=3)A(t.getX(G+0)),A(t.getX(G+1)),A(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,d=new O,p=new O;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),M=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,p=o.normalized,h=new c.constructor(l.length*d);let f=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*d;for(let u=0;u<d;u++)h[g++]=c[f++]}return new Ne(h,d,p)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,p=c.length;d<p;d++){const h=c[d],f=t(h,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,h=c.length;p<h;p++){const f=c[p];d.push(f.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],p=r[c];for(let h=0,f=p.length;h<f;h++)d.push(p[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ep{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fl,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new O;class Sa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Cn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ya("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Sa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ya("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let wp=0;class Ti extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=Ms,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=$o,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yo&&(i.blendSrc=this.blendSrc),this.blendDst!==$o&&(i.blendDst=this.blendDst),this.blendEquation!==Li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Et().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class au extends Ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let cs;const Vs=new O,hs=new O,ds=new O,us=new Et,Hs=new Et,ou=new Me,Rr=new O,Ws=new O,Pr=new O,ph=new Et,yo=new Et,mh=new Et;class Tp extends Ue{constructor(t=new au){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ep(e,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new Sa(i,3,0,!1)),cs.setAttribute("uv",new Sa(i,2,3,!1))}this.geometry=cs,this.material=t,this.center=new Et(.5,.5),this.count=1}raycast(t,e){t.camera===null&&he('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hs.setFromMatrixScale(this.matrixWorld),ou.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-ds.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Ir(Rr.set(-.5,-.5,0),ds,a,hs,s,r),Ir(Ws.set(.5,-.5,0),ds,a,hs,s,r),Ir(Pr.set(.5,.5,0),ds,a,hs,s,r),ph.set(0,0),yo.set(1,0),mh.set(1,1);let o=t.ray.intersectTriangle(Rr,Ws,Pr,!1,Vs);if(o===null&&(Ir(Ws.set(-.5,.5,0),ds,a,hs,s,r),yo.set(0,1),o=t.ray.intersectTriangle(Rr,Pr,Ws,!1,Vs),o===null))return;const l=t.ray.origin.distanceTo(Vs);l<t.near||l>t.far||e.push({distance:l,point:Vs.clone(),uv:vs.getInterpolation(Vs,Rr,Ws,Pr,ph,yo,mh,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ir(n,t,e,i,s,r){us.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Hs.x=r*us.x-s*us.y,Hs.y=s*us.x+r*us.y):Hs.copy(us),n.copy(t),n.x+=Hs.x,n.y+=Hs.y,n.applyMatrix4(ou)}const Kn=new O,So=new O,Lr=new O,mi=new O,bo=new O,Dr=new O,Eo=new O;class Xa{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){So.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(So);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Lr),o=mi.dot(this.direction),l=-mi.dot(Lr),c=mi.lengthSq(),d=Math.abs(1-a*a);let p,h,f,g;if(d>0)if(p=a*l-o,h=a*o-l,g=r*d,p>=0)if(h>=-g)if(h<=g){const M=1/d;p*=M,h*=M,f=p*(p+a*h+2*o)+h*(a*p+h+2*l)+c}else h=r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*l)+c;else h=-r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*l)+c;else h<=-g?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+h*(h+2*l)+c):h<=g?(p=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+h*(h+2*l)+c);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(So).addScaledVector(Lr,h),f}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const i=Kn.dot(this.direction),s=Kn.dot(Kn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),d>=0?(r=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-h.z)*p,l=(t.max.z-h.z)*p):(o=(t.max.z-h.z)*p,l=(t.min.z-h.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,i,s,r){bo.subVectors(e,t),Dr.subVectors(i,t),Eo.crossVectors(bo,Dr);let a=this.direction.dot(Eo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,t);const l=o*this.direction.dot(Dr.crossVectors(mi,Dr));if(l<0)return null;const c=o*this.direction.dot(bo.cross(mi));if(c<0||l+c>a)return null;const d=-o*mi.dot(Eo);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gi extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cs,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gh=new Me,Ri=new Xa,Fr=new Yi,vh=new O,Ur=new O,Nr=new O,Or=new O,wo=new O,Br=new O,_h=new O,zr=new O;let rt=class extends Ue{constructor(t=new Ee,e=new Gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],p=r[l];d!==0&&(wo.fromBufferAttribute(p,t),a?Br.addScaledVector(wo,d):Br.addScaledVector(wo.sub(e),d))}e.add(Br)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(Fr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Fr,vh)===null||Ri.origin.distanceToSquared(vh)>(t.far-t.near)**2))&&(gh.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(gh),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){const m=h[g],u=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,w=S;x<w;x+=3){const E=o.getX(x),A=o.getX(x+1),_=o.getX(x+2);s=kr(this,u,t,i,c,d,p,E,A,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,u=M;m<u;m+=3){const y=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);s=kr(this,a,t,i,c,d,p,y,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){const m=h[g],u=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,w=S;x<w;x+=3){const E=x,A=x+1,_=x+2;s=kr(this,u,t,i,c,d,p,E,A,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=g,u=M;m<u;m+=3){const y=m,S=m+1,x=m+2;s=kr(this,a,t,i,c,d,p,y,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ap(n,t,e,i,s,r,a,o){let l;if(t.side===cn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Si,o),l===null)return null;zr.copy(o),zr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(zr);return c<e.near||c>e.far?null:{distance:c,point:zr.clone(),object:n}}function kr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Ur),n.getVertexPosition(l,Nr),n.getVertexPosition(c,Or);const d=Ap(n,t,e,i,Ur,Nr,Or,_h);if(d){const p=new O;vs.getBarycoord(_h,Ur,Nr,Or,p),s&&(d.uv=vs.getInterpolatedAttribute(s,o,l,c,p,new Et)),r&&(d.uv1=vs.getInterpolatedAttribute(r,o,l,c,p,new Et)),a&&(d.normal=vs.getInterpolatedAttribute(a,o,l,c,p,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new O,materialIndex:0};vs.getNormal(Ur,Nr,Or,h.normal),d.face=h,d.barycoord=p}return d}class lu extends sn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=$e,d=$e,p,h){super(null,a,o,l,c,d,s,r,p,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xh extends Ne{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const fs=new Me,Mh=new Me,Gr=[],yh=new qi,Cp=new Me,Xs=new rt,qs=new Yi;class dr extends rt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Cp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,fs),yh.copy(t.boundingBox).applyMatrix4(fs),this.boundingBox.union(yh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,fs),qs.copy(t.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(i),t.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fs),Mh.multiplyMatrices(i,fs),Xs.matrixWorld=Mh,Xs.raycast(t,Gr);for(let a=0,o=Gr.length;a<o;a++){const l=Gr[a];l.instanceId=r,l.object=this,e.push(l)}Gr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new xh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new lu(new Float32Array(s*this.count),s,this.count,oc,Rn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const To=new O,Rp=new O,Pp=new ie;class Ii{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=To.subVectors(i,e).cross(Rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(To),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Pp.getNormalMatrix(t),s=this.coplanarPoint(To).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Yi,Ip=new Et(.5,.5),Vr=new O;class vc{constructor(t=new Ii,e=new Ii,i=new Ii,s=new Ii,r=new Ii,a=new Ii){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],p=r[5],h=r[6],f=r[7],g=r[8],M=r[9],m=r[10],u=r[11],y=r[12],S=r[13],x=r[14],w=r[15];if(s[0].setComponents(c-a,f-d,u-g,w-y).normalize(),s[1].setComponents(c+a,f+d,u+g,w+y).normalize(),s[2].setComponents(c+o,f+p,u+M,w+S).normalize(),s[3].setComponents(c-o,f-p,u-M,w-S).normalize(),i)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,f-h,u-m,w-x).normalize();else if(s[4].setComponents(c-l,f-h,u-m,w-x).normalize(),e===Bn)s[5].setComponents(c+l,f+h,u+m,w+x).normalize();else if(e===cr)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);const e=Ip.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Vr.x=s.normal.x>0?t.max.x:t.min.x,Vr.y=s.normal.y>0?t.max.y:t.min.y,Vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _c extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ba=new O,Ea=new O,Sh=new Me,Ys=new Xa,Hr=new Yi,Ao=new O,bh=new O;class Lp extends Ue{constructor(t=new Ee,e=new _c){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ba.fromBufferAttribute(e,s-1),Ea.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ba.distanceTo(Ea);t.setAttribute("lineDistance",new ue(i,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=r,t.ray.intersectsSphere(Hr)===!1)return;Sh.copy(s).invert(),Ys.copy(t.ray).applyMatrix4(Sh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=c){const u=d.getX(M),y=d.getX(M+1),S=Wr(this,t,Ys,l,u,y,M);S&&e.push(S)}if(this.isLineLoop){const M=d.getX(g-1),m=d.getX(f),u=Wr(this,t,Ys,l,M,m,g-1);u&&e.push(u)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=c){const u=Wr(this,t,Ys,l,M,M+1,M);u&&e.push(u)}if(this.isLineLoop){const M=Wr(this,t,Ys,l,g-1,f,g-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Wr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(ba.fromBufferAttribute(o,s),Ea.fromBufferAttribute(o,r),e.distanceSqToSegment(ba,Ea,Ao,bh)>i)return;Ao.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ao);if(!(c<t.near||c>t.far))return{distance:c,point:bh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Eh=new O,wh=new O;class cu extends Lp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Eh.fromBufferAttribute(e,s),wh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Eh.distanceTo(wh);t.setAttribute("lineDistance",new ue(i,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vi extends Ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Th=new Me,Nl=new Xa,Xr=new Yi,qr=new O;class Hi extends Ue{constructor(t=new Ee,e=new Vi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,t.ray.intersectsSphere(Xr)===!1)return;Th.copy(s).invert(),Nl.copy(t.ray).applyMatrix4(Th);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,M=f;g<M;g++){const m=c.getX(g);qr.fromBufferAttribute(p,m),Ah(qr,m,l,s,t,e,this)}}else{const h=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let g=h,M=f;g<M;g++)qr.fromBufferAttribute(p,g),Ah(qr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ah(n,t,e,i,s,r,a){const o=Nl.distanceSqToPoint(n);if(o<e){const l=new O;Nl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class hu extends sn{constructor(t=[],e=Bi,i,s,r,a,o,l,c,d){super(t,e,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class He extends sn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rs extends sn{constructor(t,e,i=Hn,s,r,a,o=$e,l=$e,c,d=ai,p=1){if(d!==ai&&d!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:p};super(h,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Dp extends Rs{constructor(t,e=Hn,i=Bi,s,r,a=$e,o=$e,l,c=ai){const d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,e,i,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class du extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ye extends Ee{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],p=[];let h=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(p,2));function g(M,m,u,y,S,x,w,E,A,_,b){const C=x/A,R=w/_,D=x/2,G=w/2,F=E/2,B=A+1,Y=_+1;let k=0,it=0;const st=new O;for(let ft=0;ft<Y;ft++){const ht=ft*R-G;for(let _t=0;_t<B;_t++){const Xt=_t*C-D;st[M]=Xt*y,st[m]=ht*S,st[u]=F,c.push(st.x,st.y,st.z),st[M]=0,st[m]=0,st[u]=E>0?1:-1,d.push(st.x,st.y,st.z),p.push(_t/A),p.push(1-ft/_),k+=1}}for(let ft=0;ft<_;ft++)for(let ht=0;ht<A;ht++){const _t=h+ht+B*ft,Xt=h+ht+B*(ft+1),Wt=h+(ht+1)+B*(ft+1),Dt=h+(ht+1)+B*ft;l.push(_t,Xt,Dt),l.push(Xt,Wt,Dt),it+=6}o.addGroup(f,it,b),f+=it,h+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class tn extends Ee{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new O,d=new Et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,h=3;p<=e;p++,h+=3){const f=i+p/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[h]/t+1)/2,d.y=(a[h+1]/t+1)/2,l.push(d.x,d.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(o,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Re extends Ee{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],p=[],h=[],f=[];let g=0;const M=[],m=i/2;let u=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new ue(p,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(f,2));function y(){const x=new O,w=new O;let E=0;const A=(e-t)/i;for(let _=0;_<=r;_++){const b=[],C=_/r,R=C*(e-t)+t;for(let D=0;D<=s;D++){const G=D/s,F=G*l+o,B=Math.sin(F),Y=Math.cos(F);w.x=R*B,w.y=-C*i+m,w.z=R*Y,p.push(w.x,w.y,w.z),x.set(B,A,Y).normalize(),h.push(x.x,x.y,x.z),f.push(G,1-C),b.push(g++)}M.push(b)}for(let _=0;_<s;_++)for(let b=0;b<r;b++){const C=M[b][_],R=M[b+1][_],D=M[b+1][_+1],G=M[b][_+1];(t>0||b!==0)&&(d.push(C,R,G),E+=3),(e>0||b!==r-1)&&(d.push(R,D,G),E+=3)}c.addGroup(u,E,0),u+=E}function S(x){const w=g,E=new Et,A=new O;let _=0;const b=x===!0?t:e,C=x===!0?1:-1;for(let D=1;D<=s;D++)p.push(0,m*C,0),h.push(0,C,0),f.push(.5,.5),g++;const R=g;for(let D=0;D<=s;D++){const F=D/s*l+o,B=Math.cos(F),Y=Math.sin(F);A.x=b*Y,A.y=m*C,A.z=b*B,p.push(A.x,A.y,A.z),h.push(0,C,0),E.x=B*.5+.5,E.y=Y*.5*C+.5,f.push(E.x,E.y),g++}for(let D=0;D<s;D++){const G=w+D,F=R+D;x===!0?d.push(F,F+1,G):d.push(F+1,F,G),_+=3}c.addGroup(u,_,x===!0?1:2),u+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oi extends Re{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Oi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qa extends Ee{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),d(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new O,x=new O,w=new O;for(let E=0;E<e.length;E+=3)f(e[E+0],S),f(e[E+1],x),f(e[E+2],w),l(S,x,w,y)}function l(y,S,x,w){const E=w+1,A=[];for(let _=0;_<=E;_++){A[_]=[];const b=y.clone().lerp(x,_/E),C=S.clone().lerp(x,_/E),R=E-_;for(let D=0;D<=R;D++)D===0&&_===E?A[_][D]=b:A[_][D]=b.clone().lerp(C,D/R)}for(let _=0;_<E;_++)for(let b=0;b<2*(E-_)-1;b++){const C=Math.floor(b/2);b%2===0?(h(A[_][C+1]),h(A[_+1][C]),h(A[_][C])):(h(A[_][C+1]),h(A[_+1][C+1]),h(A[_+1][C]))}}function c(y){const S=new O;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(y),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function d(){const y=new O;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const x=m(y)/2/Math.PI+.5,w=u(y)/Math.PI+.5;a.push(x,1-w)}g(),p()}function p(){for(let y=0;y<a.length;y+=6){const S=a[y+0],x=a[y+2],w=a[y+4],E=Math.max(S,x,w),A=Math.min(S,x,w);E>.9&&A<.1&&(S<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),w<.2&&(a[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function f(y,S){const x=y*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function g(){const y=new O,S=new O,x=new O,w=new O,E=new Et,A=new Et,_=new Et;for(let b=0,C=0;b<r.length;b+=9,C+=6){y.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),E.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),w.copy(y).add(S).add(x).divideScalar(3);const R=m(w);M(E,C+0,y,R),M(A,C+2,S,R),M(_,C+4,x,R)}}function M(y,S,x,w){w<0&&y.x===1&&(a[S]=y.x-1),x.x===0&&x.z===0&&(a[S]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.vertices,t.indices,t.radius,t.detail)}}class xc extends qa{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xc(t.radius,t.detail)}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const d=i[s],h=i[s+1]-d,f=(a-d)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Et:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new O,s=[],r=[],a=[],o=new O,l=new Me;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const d=Math.abs(s[0].x),p=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=c&&(c=d,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ce(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ce(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Mc extends Xn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Et){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*p+this.aX,c=h*p+f*d+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Fp extends Mc{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function yc(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,p){let h=(a-r)/c-(o-r)/(c+d)+(o-a)/d,f=(o-a)/d-(l-a)/(d+p)+(l-o)/p;h*=d,f*=d,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const Ch=new O,Rh=new O,Co=new yc,Ro=new yc,Po=new yc;class Up extends Xn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(Rh.subVectors(s[0],s[1]).add(s[0]),c=Rh);const p=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(Ch.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Ch),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(p),f),M=Math.pow(p.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Co.initNonuniformCatmullRom(c.x,p.x,h.x,d.x,g,M,m),Ro.initNonuniformCatmullRom(c.y,p.y,h.y,d.y,g,M,m),Po.initNonuniformCatmullRom(c.z,p.z,h.z,d.z,g,M,m)}else this.curveType==="catmullrom"&&(Co.initCatmullRom(c.x,p.x,h.x,d.x,this.tension),Ro.initCatmullRom(c.y,p.y,h.y,d.y,this.tension),Po.initCatmullRom(c.z,p.z,h.z,d.z,this.tension));return i.set(Co.calc(l),Ro.calc(l),Po.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ph(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Np(n,t){const e=1-n;return e*e*t}function Op(n,t){return 2*(1-n)*n*t}function Bp(n,t){return n*n*t}function ir(n,t,e,i){return Np(n,t)+Op(n,e)+Bp(n,i)}function zp(n,t){const e=1-n;return e*e*e*t}function kp(n,t){const e=1-n;return 3*e*e*n*t}function Gp(n,t){return 3*(1-n)*n*n*t}function Vp(n,t){return n*n*n*t}function sr(n,t,e,i,s){return zp(n,t)+kp(n,e)+Gp(n,i)+Vp(n,s)}class uu extends Xn{constructor(t=new Et,e=new Et,i=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Et){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(sr(t,s.x,r.x,a.x,o.x),sr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hp extends Xn{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(sr(t,s.x,r.x,a.x,o.x),sr(t,s.y,r.y,a.y,o.y),sr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fu extends Xn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wp extends Xn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pu extends Xn{constructor(t=new Et,e=new Et,i=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Et){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ir(t,s.x,r.x,a.x),ir(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xp extends Xn{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ir(t,s.x,r.x,a.x),ir(t,s.y,r.y,a.y),ir(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mu extends Xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return i.set(Ph(o,l.x,c.x,d.x,p.x),Ph(o,l.y,c.y,d.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Et().fromArray(s))}return this}}var Ol=Object.freeze({__proto__:null,ArcCurve:Fp,CatmullRomCurve3:Up,CubicBezierCurve:uu,CubicBezierCurve3:Hp,EllipseCurve:Mc,LineCurve:fu,LineCurve3:Wp,QuadraticBezierCurve:pu,QuadraticBezierCurve3:Xp,SplineCurve:mu});class qp extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ol[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(e.push(d),i=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Ol[s.type]().fromJSON(s))}return this}}class Bl extends qp{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new fu(this.currentPoint.clone(),new Et(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new pu(this.currentPoint.clone(),new Et(t,e),new Et(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new uu(this.currentPoint.clone(),new Et(t,e),new Et(i,s),new Et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new mu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+c,e+d,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){const c=new Mc(t,e,i,s,r,a,o,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class yn extends Bl{constructor(t){super(t),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Bl().fromJSON(s))}return this}}function Yp(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=gu(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Qp(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let d=o,p=l;for(let h=e;h<s;h+=e){const f=n[h],g=n[h+1];f<o&&(o=f),g<l&&(l=g),f>d&&(d=f),g>p&&(p=g)}c=Math.max(d-o,p-l),c=c!==0?32767/c:0}return ur(r,a,e,o,l,c,0),a}function gu(n,t,e,i,s){let r;if(s===c0(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Ih(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Ih(a/i|0,n[a],n[a+1],r);return r&&Ps(r,r.next)&&(pr(r),r=r.next),r}function Wi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ps(e,e.next)||Fe(e.prev,e,e.next)===0)){if(pr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ur(n,t,e,i,s,r,a){if(!n)return;!a&&r&&i0(n,i,s,r);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Zp(n,i,s,r):$p(n)){t.push(l.i,n.i,c.i),pr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Jp(Wi(n),t),ur(n,t,e,i,s,r,2)):a===2&&Kp(n,t,e,i,s,r):ur(Wi(n),t,e,i,s,r,1);break}}}function $p(n){const t=n.prev,e=n,i=n.next;if(Fe(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,d=Math.min(s,r,a),p=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c);let g=i.next;for(;g!==t;){if(g.x>=d&&g.x<=h&&g.y>=p&&g.y<=f&&Qs(s,o,r,l,a,c,g.x,g.y)&&Fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zp(n,t,e,i){const s=n.prev,r=n,a=n.next;if(Fe(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,d=s.y,p=r.y,h=a.y,f=Math.min(o,l,c),g=Math.min(d,p,h),M=Math.max(o,l,c),m=Math.max(d,p,h),u=zl(f,g,t,e,i),y=zl(M,m,t,e,i);let S=n.prevZ,x=n.nextZ;for(;S&&S.z>=u&&x&&x.z<=y;){if(S.x>=f&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Qs(o,d,l,p,c,h,S.x,S.y)&&Fe(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Qs(o,d,l,p,c,h,x.x,x.y)&&Fe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=u;){if(S.x>=f&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Qs(o,d,l,p,c,h,S.x,S.y)&&Fe(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Qs(o,d,l,p,c,h,x.x,x.y)&&Fe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Jp(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Ps(i,s)&&_u(i,e,e.next,s)&&fr(i,s)&&fr(s,i)&&(t.push(i.i,e.i,s.i),pr(e),pr(e.next),e=n=s),e=e.next}while(e!==n);return Wi(e)}function Kp(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&a0(a,o)){let l=xu(a,o);a=Wi(a,a.next),l=Wi(l,l.next),ur(a,t,e,i,s,r,0),ur(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Qp(n,t,e,i){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=gu(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(r0(c))}s.sort(jp);for(let r=0;r<s.length;r++)e=t0(s[r],e);return e}function jp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function t0(n,t){const e=e0(n,t);if(!e)return t;const i=xu(e,n);return Wi(i,i.next),Wi(e,e.next)}function e0(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,a;if(Ps(n,e))return e;do{if(Ps(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=i&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let d=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&vu(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const p=Math.abs(s-e.y)/(i-e.x);fr(e,n)&&(p<d||p===d&&(e.x>a.x||e.x===a.x&&n0(a,e)))&&(a=e,d=p)}e=e.next}while(e!==o);return a}function n0(n,t){return Fe(n.prev,n,t.prev)<0&&Fe(t.next,n,n.next)<0}function i0(n,t,e,i){let s=n;do s.z===0&&(s.z=zl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,s0(s)}function s0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function zl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function r0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function vu(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Qs(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&vu(n,t,e,i,s,r,a,o)}function a0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!o0(n,t)&&(fr(n,t)&&fr(t,n)&&l0(n,t)&&(Fe(n.prev,n,t.prev)||Fe(n,t.prev,t))||Ps(n,t)&&Fe(n.prev,n,n.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ps(n,t){return n.x===t.x&&n.y===t.y}function _u(n,t,e,i){const s=$r(Fe(n,t,e)),r=$r(Fe(n,t,i)),a=$r(Fe(e,i,n)),o=$r(Fe(e,i,t));return!!(s!==r&&a!==o||s===0&&Yr(n,e,t)||r===0&&Yr(n,i,t)||a===0&&Yr(e,n,i)||o===0&&Yr(e,t,i))}function Yr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function $r(n){return n>0?1:n<0?-1:0}function o0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&_u(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function fr(n,t){return Fe(n.prev,n,n.next)<0?Fe(n,t,n.next)>=0&&Fe(n,n.prev,t)>=0:Fe(n,t,n.prev)<0||Fe(n,n.next,t)<0}function l0(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function xu(n,t){const e=kl(n.i,n.x,n.y),i=kl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Ih(n,t,e,i){const s=kl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function pr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function kl(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function c0(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class h0{static triangulate(t,e,i=2){return Yp(t,e,i)}}class ei{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return ei.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Lh(t),Dh(i,t);let a=t.length;e.forEach(Lh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Dh(i,e[l]);const o=h0.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Lh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Dh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Vn extends Ee{constructor(t=new yn([new Et(.5,.5),new Et(-.5,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const u=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:d0;let S,x=!1,w,E,A,_;if(u){S=u.getSpacedPoints(d),x=!0,h=!1;const at=u.isCatmullRomCurve3?u.closed:!1;w=u.computeFrenetFrames(d,at),E=new O,A=new O,_=new O}h||(m=0,f=0,g=0,M=0);const b=o.extractPoints(c);let C=b.shape;const R=b.holes;if(!ei.isClockWise(C)){C=C.reverse();for(let at=0,ut=R.length;at<ut;at++){const vt=R[at];ei.isClockWise(vt)&&(R[at]=vt.reverse())}}function G(at){const vt=10000000000000001e-36;let It=at[0];for(let Rt=1;Rt<=at.length;Rt++){const $t=Rt%at.length,qt=at[$t],Kt=qt.x-It.x,ee=qt.y-It.y,U=Kt*Kt+ee*ee,me=Math.max(Math.abs(qt.x),Math.abs(qt.y),Math.abs(It.x),Math.abs(It.y)),se=vt*me*me;if(U<=se){at.splice($t,1),Rt--;continue}It=qt}}G(C),R.forEach(G);const F=R.length,B=C;for(let at=0;at<F;at++){const ut=R[at];C=C.concat(ut)}function Y(at,ut,vt){return ut||he("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(ut,vt)}const k=C.length;function it(at,ut,vt){let It,Rt,$t;const qt=at.x-ut.x,Kt=at.y-ut.y,ee=vt.x-at.x,U=vt.y-at.y,me=qt*qt+Kt*Kt,se=qt*U-Kt*ee;if(Math.abs(se)>Number.EPSILON){const P=Math.sqrt(me),v=Math.sqrt(ee*ee+U*U),I=ut.x-Kt/P,L=ut.y+qt/P,W=vt.x-U/v,et=vt.y+ee/v,ot=((W-I)*U-(et-L)*ee)/(qt*U-Kt*ee);It=I+qt*ot-at.x,Rt=L+Kt*ot-at.y;const X=It*It+Rt*Rt;if(X<=2)return new Et(It,Rt);$t=Math.sqrt(X/2)}else{let P=!1;qt>Number.EPSILON?ee>Number.EPSILON&&(P=!0):qt<-Number.EPSILON?ee<-Number.EPSILON&&(P=!0):Math.sign(Kt)===Math.sign(U)&&(P=!0),P?(It=-Kt,Rt=qt,$t=Math.sqrt(me)):(It=qt,Rt=Kt,$t=Math.sqrt(me/2))}return new Et(It/$t,Rt/$t)}const st=[];for(let at=0,ut=B.length,vt=ut-1,It=at+1;at<ut;at++,vt++,It++)vt===ut&&(vt=0),It===ut&&(It=0),st[at]=it(B[at],B[vt],B[It]);const ft=[];let ht,_t=st.concat();for(let at=0,ut=F;at<ut;at++){const vt=R[at];ht=[];for(let It=0,Rt=vt.length,$t=Rt-1,qt=It+1;It<Rt;It++,$t++,qt++)$t===Rt&&($t=0),qt===Rt&&(qt=0),ht[It]=it(vt[It],vt[$t],vt[qt]);ft.push(ht),_t=_t.concat(ht)}let Xt;if(m===0)Xt=ei.triangulateShape(B,R);else{const at=[],ut=[];for(let vt=0;vt<m;vt++){const It=vt/m,Rt=f*Math.cos(It*Math.PI/2),$t=g*Math.sin(It*Math.PI/2)+M;for(let qt=0,Kt=B.length;qt<Kt;qt++){const ee=Y(B[qt],st[qt],$t);Ct(ee.x,ee.y,-Rt),It===0&&at.push(ee)}for(let qt=0,Kt=F;qt<Kt;qt++){const ee=R[qt];ht=ft[qt];const U=[];for(let me=0,se=ee.length;me<se;me++){const P=Y(ee[me],ht[me],$t);Ct(P.x,P.y,-Rt),It===0&&U.push(P)}It===0&&ut.push(U)}}Xt=ei.triangulateShape(at,ut)}const Wt=Xt.length,Dt=g+M;for(let at=0;at<k;at++){const ut=h?Y(C[at],_t[at],Dt):C[at];x?(A.copy(w.normals[0]).multiplyScalar(ut.x),E.copy(w.binormals[0]).multiplyScalar(ut.y),_.copy(S[0]).add(A).add(E),Ct(_.x,_.y,_.z)):Ct(ut.x,ut.y,0)}for(let at=1;at<=d;at++)for(let ut=0;ut<k;ut++){const vt=h?Y(C[ut],_t[ut],Dt):C[ut];x?(A.copy(w.normals[at]).multiplyScalar(vt.x),E.copy(w.binormals[at]).multiplyScalar(vt.y),_.copy(S[at]).add(A).add(E),Ct(_.x,_.y,_.z)):Ct(vt.x,vt.y,p/d*at)}for(let at=m-1;at>=0;at--){const ut=at/m,vt=f*Math.cos(ut*Math.PI/2),It=g*Math.sin(ut*Math.PI/2)+M;for(let Rt=0,$t=B.length;Rt<$t;Rt++){const qt=Y(B[Rt],st[Rt],It);Ct(qt.x,qt.y,p+vt)}for(let Rt=0,$t=R.length;Rt<$t;Rt++){const qt=R[Rt];ht=ft[Rt];for(let Kt=0,ee=qt.length;Kt<ee;Kt++){const U=Y(qt[Kt],ht[Kt],It);x?Ct(U.x,U.y+S[d-1].y,S[d-1].x+vt):Ct(U.x,U.y,p+vt)}}}tt(),pt();function tt(){const at=s.length/3;if(h){let ut=0,vt=k*ut;for(let It=0;It<Wt;It++){const Rt=Xt[It];Pt(Rt[2]+vt,Rt[1]+vt,Rt[0]+vt)}ut=d+m*2,vt=k*ut;for(let It=0;It<Wt;It++){const Rt=Xt[It];Pt(Rt[0]+vt,Rt[1]+vt,Rt[2]+vt)}}else{for(let ut=0;ut<Wt;ut++){const vt=Xt[ut];Pt(vt[2],vt[1],vt[0])}for(let ut=0;ut<Wt;ut++){const vt=Xt[ut];Pt(vt[0]+k*d,vt[1]+k*d,vt[2]+k*d)}}i.addGroup(at,s.length/3-at,0)}function pt(){const at=s.length/3;let ut=0;dt(B,ut),ut+=B.length;for(let vt=0,It=R.length;vt<It;vt++){const Rt=R[vt];dt(Rt,ut),ut+=Rt.length}i.addGroup(at,s.length/3-at,1)}function dt(at,ut){let vt=at.length;for(;--vt>=0;){const It=vt;let Rt=vt-1;Rt<0&&(Rt=at.length-1);for(let $t=0,qt=d+m*2;$t<qt;$t++){const Kt=k*$t,ee=k*($t+1),U=ut+It+Kt,me=ut+Rt+Kt,se=ut+Rt+ee,P=ut+It+ee;Ft(U,me,se,P)}}}function Ct(at,ut,vt){l.push(at),l.push(ut),l.push(vt)}function Pt(at,ut,vt){Qt(at),Qt(ut),Qt(vt);const It=s.length/3,Rt=y.generateTopUV(i,s,It-3,It-2,It-1);Vt(Rt[0]),Vt(Rt[1]),Vt(Rt[2])}function Ft(at,ut,vt,It){Qt(at),Qt(ut),Qt(It),Qt(ut),Qt(vt),Qt(It);const Rt=s.length/3,$t=y.generateSideWallUV(i,s,Rt-6,Rt-3,Rt-2,Rt-1);Vt($t[0]),Vt($t[1]),Vt($t[3]),Vt($t[1]),Vt($t[2]),Vt($t[3])}function Qt(at){s.push(l[at*3+0]),s.push(l[at*3+1]),s.push(l[at*3+2])}function Vt(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return u0(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ol[s.type]().fromJSON(s)),new Vn(i,t.options)}}const d0={generateTopUV:function(n,t,e,i,s){const r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],d=t[s*3+1];return[new Et(r,a),new Et(o,l),new Et(c,d)]},generateSideWallUV:function(n,t,e,i,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],d=t[i*3+1],p=t[i*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],u=t[r*3+2];return Math.abs(o-d)<Math.abs(a-c)?[new Et(a,1-l),new Et(c,1-p),new Et(h,1-g),new Et(M,1-u)]:[new Et(o,1-l),new Et(d,1-p),new Et(f,1-g),new Et(m,1-u)]}};function u0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ya extends qa{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ya(t.radius,t.detail)}}class In extends Ee{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,p=t/o,h=e/l,f=[],g=[],M=[],m=[];for(let u=0;u<d;u++){const y=u*h-a;for(let S=0;S<c;S++){const x=S*p-r;g.push(x,-y,0),M.push(0,0,1),m.push(S/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<o;y++){const S=y+c*u,x=y+c*(u+1),w=y+1+c*(u+1),E=y+1+c*u;f.push(S,x,E),f.push(x,w,E)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(M,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.width,t.height,t.widthSegments,t.heightSegments)}}class $a extends Ee{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let p=t;const h=(e-t)/s,f=new O,g=new Et;for(let M=0;M<=s;M++){for(let m=0;m<=i;m++){const u=r+m/i*a;f.x=p*Math.cos(u),f.y=p*Math.sin(u),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,d.push(g.x,g.y)}p+=h}for(let M=0;M<s;M++){const m=M*(i+1);for(let u=0;u<i;u++){const y=u+m,S=y,x=y+i+1,w=y+i+2,E=y+1;o.push(S,x,E),o.push(x,w,E)}}this.setIndex(o),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $a(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class bs extends Ee{constructor(t=new yn([new Et(0,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let d=0;d<t.length;d++)c(t[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new ue(s,3)),this.setAttribute("normal",new ue(r,3)),this.setAttribute("uv",new ue(a,2));function c(d){const p=s.length/3,h=d.extractPoints(e);let f=h.shape;const g=h.holes;ei.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,u=g.length;m<u;m++){const y=g[m];ei.isClockWise(y)===!0&&(g[m]=y.reverse())}const M=ei.triangulateShape(f,g);for(let m=0,u=g.length;m<u;m++){const y=g[m];f=f.concat(y)}for(let m=0,u=f.length;m<u;m++){const y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,u=M.length;m<u;m++){const y=M[m],S=y[0]+p,x=y[1]+p,w=y[2]+p;i.push(S,x,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return f0(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];i.push(a)}return new bs(i,t.curveSegments)}}function f0(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Te extends Ee{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],p=new O,h=new O,f=[],g=[],M=[],m=[];for(let u=0;u<=i;u++){const y=[],S=u/i,x=a+S*o,w=t*Math.cos(x),E=Math.sqrt(t*t-w*w);let A=0;u===0&&a===0?A=.5/e:u===i&&l===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){const b=_/e,C=s+b*r;p.x=-E*Math.cos(C),p.y=w,p.z=E*Math.sin(C),g.push(p.x,p.y,p.z),h.copy(p).normalize(),M.push(h.x,h.y,h.z),m.push(b+A,1-S),y.push(c++)}d.push(y)}for(let u=0;u<i;u++)for(let y=0;y<e;y++){const S=d[u][y+1],x=d[u][y],w=d[u+1][y],E=d[u+1][y+1];(u!==0||a>0)&&f.push(S,x,E),(u!==i-1||l<Math.PI)&&f.push(x,w,E)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(M,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ze extends Ee{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],d=[],p=[],h=new O,f=new O,g=new O;for(let M=0;M<=i;M++){const m=a+M/i*o;for(let u=0;u<=s;u++){const y=u/s*r;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),g.subVectors(f,h).normalize(),d.push(g.x,g.y,g.z),p.push(u/s),p.push(M/i)}}for(let M=1;M<=i;M++)for(let m=1;m<=s;m++){const u=(s+1)*M+m-1,y=(s+1)*(M-1)+m-1,S=(s+1)*(M-1)+m,x=(s+1)*M+m;l.push(u,y,x),l.push(y,S,x)}this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Is(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Fh(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Fh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function an(n){const t={};for(let e=0;e<n.length;e++){const i=Is(n[e]);for(const s in i)t[s]=i[s]}return t}function Fh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function p0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Mu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const m0={clone:Is,merge:an};var g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=p0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[i].value=new Et().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new De().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ie().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Me().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class _0 extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pe extends Ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $s extends pe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class x0 extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class M0 extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class yu extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Su extends yu{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Io=new Me,Uh=new O,Nh=new O;class y0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vc,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uh),Nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nh),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===cr||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zr=new O,Jr=new Ds,Fn=new O;class bu extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zr,Jr,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,Fn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Zr,Jr,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gi=new O,Oh=new Et,Bh=new Et;class gn extends bu{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Oh,Bh),e.subVectors(Bh,Oh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(er*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Sc extends bu{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class S0 extends y0{constructor(){super(new Sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wa extends yu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new S0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ps=-90,ms=1;class b0 extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(ps,ms,t,e);s.layers=this.layers,this.add(s);const r=new gn(ps,ms,t,e);r.layers=this.layers,this.add(r);const a=new gn(ps,ms,t,e);a.layers=this.layers,this.add(a);const o=new gn(ps,ms,t,e);o.layers=this.layers,this.add(o);const l=new gn(ps,ms,t,e);l.layers=this.layers,this.add(l);const c=new gn(ps,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,p=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(p,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class E0 extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const zh=new Me;class Eu{constructor(t,e,i=0,s=1/0){this.ray=new Xa(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):he("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zh),this}intersectObject(t,e=!0,i=[]){return Gl(t,this,i,e),i.sort(kh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Gl(t[s],this,i,e);return i.sort(kh),i}}function kh(n,t){return n.distance-t.distance}function Gl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Gl(r[a],t,e,!0)}}class wu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,jt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Hc=class Hc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Hc.prototype.isMatrix2=!0;let Gh=Hc;function Vh(n,t,e,i){const s=w0(i);switch(e){case Qd:return n*t;case oc:return n*t/s.components*s.byteLength;case lc:return n*t/s.components*s.byteLength;case ki:return n*t*2/s.components*s.byteLength;case cc:return n*t*2/s.components*s.byteLength;case jd:return n*t*3/s.components*s.byteLength;case Pn:return n*t*4/s.components*s.byteLength;case hc:return n*t*4/s.components*s.byteLength;case aa:case oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case la:case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sl:case al:return Math.max(n,16)*Math.max(t,8)/4;case il:case rl:return Math.max(n,8)*Math.max(t,8)/2;case ol:case ll:case hl:case dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case cl:case ga:case ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ml:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case bl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Al:case Cl:case Rl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Pl:case Il:return Math.ceil(n/4)*Math.ceil(t/4)*8;case va:case Ll:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function w0(n){switch(n){case vn:case $d:return{byteLength:1,components:1};case or:case Zd:case ri:return{byteLength:2,components:1};case rc:case ac:return{byteLength:2,components:4};case Hn:case sc:case Rn:return{byteLength:4,components:1};case Jd:case Kd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tu(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function T0(n){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,p=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const d=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,d);else{p.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<p.length;f++){const g=p[h],M=p[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,p[h]=M)}p.length=h+1;for(let f=0,g=p.length;f<g;f++){const M=p[f];n.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,G0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,J0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,K0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_m=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,xm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Om=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ng=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ug=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ug=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ng=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$g=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:A0,alphahash_pars_fragment:C0,alphamap_fragment:R0,alphamap_pars_fragment:P0,alphatest_fragment:I0,alphatest_pars_fragment:L0,aomap_fragment:D0,aomap_pars_fragment:F0,batching_pars_vertex:U0,batching_vertex:N0,begin_vertex:O0,beginnormal_vertex:B0,bsdfs:z0,iridescence_fragment:k0,bumpmap_pars_fragment:G0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:H0,clipping_planes_pars_vertex:W0,clipping_planes_vertex:X0,color_fragment:q0,color_pars_fragment:Y0,color_pars_vertex:$0,color_vertex:Z0,common:J0,cube_uv_reflection_fragment:K0,defaultnormal_vertex:Q0,displacementmap_pars_vertex:j0,displacementmap_vertex:tm,emissivemap_fragment:em,emissivemap_pars_fragment:nm,colorspace_fragment:im,colorspace_pars_fragment:sm,envmap_fragment:rm,envmap_common_pars_fragment:am,envmap_pars_fragment:om,envmap_pars_vertex:lm,envmap_physical_pars_fragment:xm,envmap_vertex:cm,fog_vertex:hm,fog_pars_vertex:dm,fog_fragment:um,fog_pars_fragment:fm,gradientmap_pars_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:vm,lights_pars_begin:_m,lights_toon_fragment:Mm,lights_toon_pars_fragment:ym,lights_phong_fragment:Sm,lights_phong_pars_fragment:bm,lights_physical_fragment:Em,lights_physical_pars_fragment:wm,lights_fragment_begin:Tm,lights_fragment_maps:Am,lights_fragment_end:Cm,lightprobes_pars_fragment:Rm,logdepthbuf_fragment:Pm,logdepthbuf_pars_fragment:Im,logdepthbuf_pars_vertex:Lm,logdepthbuf_vertex:Dm,map_fragment:Fm,map_pars_fragment:Um,map_particle_fragment:Nm,map_particle_pars_fragment:Om,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:zm,morphinstance_vertex:km,morphcolor_vertex:Gm,morphnormal_vertex:Vm,morphtarget_pars_vertex:Hm,morphtarget_vertex:Wm,normal_fragment_begin:Xm,normal_fragment_maps:qm,normal_pars_fragment:Ym,normal_pars_vertex:$m,normal_vertex:Zm,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:jm,iridescence_pars_fragment:tg,opaque_fragment:eg,packing:ng,premultiplied_alpha_fragment:ig,project_vertex:sg,dithering_fragment:rg,dithering_pars_fragment:ag,roughnessmap_fragment:og,roughnessmap_pars_fragment:lg,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:hg,shadowmap_vertex:dg,shadowmask_pars_fragment:ug,skinbase_vertex:fg,skinning_pars_vertex:pg,skinning_vertex:mg,skinnormal_vertex:gg,specularmap_fragment:vg,specularmap_pars_fragment:_g,tonemapping_fragment:xg,tonemapping_pars_fragment:Mg,transmission_fragment:yg,transmission_pars_fragment:Sg,uv_pars_fragment:bg,uv_pars_vertex:Eg,uv_vertex:wg,worldpos_vertex:Tg,background_vert:Ag,background_frag:Cg,backgroundCube_vert:Rg,backgroundCube_frag:Pg,cube_vert:Ig,cube_frag:Lg,depth_vert:Dg,depth_frag:Fg,distance_vert:Ug,distance_frag:Ng,equirect_vert:Og,equirect_frag:Bg,linedashed_vert:zg,linedashed_frag:kg,meshbasic_vert:Gg,meshbasic_frag:Vg,meshlambert_vert:Hg,meshlambert_frag:Wg,meshmatcap_vert:Xg,meshmatcap_frag:qg,meshnormal_vert:Yg,meshnormal_frag:$g,meshphong_vert:Zg,meshphong_frag:Jg,meshphysical_vert:Kg,meshphysical_frag:Qg,meshtoon_vert:jg,meshtoon_frag:tv,points_vert:ev,points_frag:nv,shadow_vert:iv,shadow_frag:sv,sprite_vert:rv,sprite_frag:av},Ut={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},On={basic:{uniforms:an([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:an([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:an([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:an([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:an([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Ht(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:an([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:an([Ut.points,Ut.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:an([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:an([Ut.common,Ut.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:an([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:an([Ut.sprite,Ut.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:an([Ut.common,Ut.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:an([Ut.lights,Ut.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};On.physical={uniforms:an([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const Kr={r:0,b:0,g:0},ov=new Me,Au=new ie;Au.set(-1,0,0,0,1,0,0,0,1);function lv(n,t,e,i,s,r){const a=new Ht(0);let o=s===!0?0:1,l,c,d=null,p=0,h=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){const x=y.backgroundBlurriness>0;S=t.get(S,x)}return S}function g(y){let S=!1;const x=f(y);x===null?m(a,o):x&&x.isColor&&(m(x,1),S=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(y,S){const x=f(S);x&&(x.isCubeTexture||x.mapping===Wa)?(c===void 0&&(c=new rt(new Ye(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Is(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ov.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Au),c.material.toneMapped=fe.getTransfer(x.colorSpace)!==Se,(d!==x||p!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,p=x.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new rt(new In(2,2),new bn({name:"BackgroundMaterial",uniforms:Is(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=fe.getTransfer(x.colorSpace)!==Se,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||p!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=x,p=x.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(Kr,Mu(n)),e.buffers.color.setClear(Kr.r,Kr.g,Kr.b,S,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:M,dispose:u}}function cv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(R,D,G,F,B){let Y=!1;const k=p(R,F,G,D);r!==k&&(r=k,c(r.object)),Y=f(R,F,G,B),Y&&g(R,F,G,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(R,D,G,F),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function d(R){return n.deleteVertexArray(R)}function p(R,D,G,F){const B=F.wireframe===!0;let Y=i[D.id];Y===void 0&&(Y={},i[D.id]=Y);const k=R.isInstancedMesh===!0?R.id:0;let it=Y[k];it===void 0&&(it={},Y[k]=it);let st=it[G.id];st===void 0&&(st={},it[G.id]=st);let ft=st[B];return ft===void 0&&(ft=h(l()),st[B]=ft),ft}function h(R){const D=[],G=[],F=[];for(let B=0;B<e;B++)D[B]=0,G[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:F,object:R,attributes:{},index:null}}function f(R,D,G,F){const B=r.attributes,Y=D.attributes;let k=0;const it=G.getAttributes();for(const st in it)if(it[st].location>=0){const ht=B[st];let _t=Y[st];if(_t===void 0&&(st==="instanceMatrix"&&R.instanceMatrix&&(_t=R.instanceMatrix),st==="instanceColor"&&R.instanceColor&&(_t=R.instanceColor)),ht===void 0||ht.attribute!==_t||_t&&ht.data!==_t.data)return!0;k++}return r.attributesNum!==k||r.index!==F}function g(R,D,G,F){const B={},Y=D.attributes;let k=0;const it=G.getAttributes();for(const st in it)if(it[st].location>=0){let ht=Y[st];ht===void 0&&(st==="instanceMatrix"&&R.instanceMatrix&&(ht=R.instanceMatrix),st==="instanceColor"&&R.instanceColor&&(ht=R.instanceColor));const _t={};_t.attribute=ht,ht&&ht.data&&(_t.data=ht.data),B[st]=_t,k++}r.attributes=B,r.attributesNum=k,r.index=F}function M(){const R=r.newAttributes;for(let D=0,G=R.length;D<G;D++)R[D]=0}function m(R){u(R,0)}function u(R,D){const G=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;G[R]=1,F[R]===0&&(n.enableVertexAttribArray(R),F[R]=1),B[R]!==D&&(n.vertexAttribDivisor(R,D),B[R]=D)}function y(){const R=r.newAttributes,D=r.enabledAttributes;for(let G=0,F=D.length;G<F;G++)D[G]!==R[G]&&(n.disableVertexAttribArray(G),D[G]=0)}function S(R,D,G,F,B,Y,k){k===!0?n.vertexAttribIPointer(R,D,G,B,Y):n.vertexAttribPointer(R,D,G,F,B,Y)}function x(R,D,G,F){M();const B=F.attributes,Y=G.getAttributes(),k=D.defaultAttributeValues;for(const it in Y){const st=Y[it];if(st.location>=0){let ft=B[it];if(ft===void 0&&(it==="instanceMatrix"&&R.instanceMatrix&&(ft=R.instanceMatrix),it==="instanceColor"&&R.instanceColor&&(ft=R.instanceColor)),ft!==void 0){const ht=ft.normalized,_t=ft.itemSize,Xt=t.get(ft);if(Xt===void 0)continue;const Wt=Xt.buffer,Dt=Xt.type,tt=Xt.bytesPerElement,pt=Dt===n.INT||Dt===n.UNSIGNED_INT||ft.gpuType===sc;if(ft.isInterleavedBufferAttribute){const dt=ft.data,Ct=dt.stride,Pt=ft.offset;if(dt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<st.locationSize;Ft++)u(st.location+Ft,dt.meshPerAttribute);R.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ft=0;Ft<st.locationSize;Ft++)m(st.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let Ft=0;Ft<st.locationSize;Ft++)S(st.location+Ft,_t/st.locationSize,Dt,ht,Ct*tt,(Pt+_t/st.locationSize*Ft)*tt,pt)}else{if(ft.isInstancedBufferAttribute){for(let dt=0;dt<st.locationSize;dt++)u(st.location+dt,ft.meshPerAttribute);R.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let dt=0;dt<st.locationSize;dt++)m(st.location+dt);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let dt=0;dt<st.locationSize;dt++)S(st.location+dt,_t/st.locationSize,Dt,ht,_t*tt,_t/st.locationSize*dt*tt,pt)}}else if(k!==void 0){const ht=k[it];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(st.location,ht);break;case 3:n.vertexAttrib3fv(st.location,ht);break;case 4:n.vertexAttrib4fv(st.location,ht);break;default:n.vertexAttrib1fv(st.location,ht)}}}}y()}function w(){b();for(const R in i){const D=i[R];for(const G in D){const F=D[G];for(const B in F){const Y=F[B];for(const k in Y)d(Y[k].object),delete Y[k];delete F[B]}}delete i[R]}}function E(R){if(i[R.id]===void 0)return;const D=i[R.id];for(const G in D){const F=D[G];for(const B in F){const Y=F[B];for(const k in Y)d(Y[k].object),delete Y[k];delete F[B]}}delete i[R.id]}function A(R){for(const D in i){const G=i[D];for(const F in G){const B=G[F];if(B[R.id]===void 0)continue;const Y=B[R.id];for(const k in Y)d(Y[k].object),delete Y[k];delete B[R.id]}}}function _(R){for(const D in i){const G=i[D],F=R.isInstancedMesh===!0?R.id:0,B=G[F];if(B!==void 0){for(const Y in B){const k=B[Y];for(const it in k)d(k[it].object),delete k[it];delete B[Y]}delete G[F],Object.keys(G).length===0&&delete i[D]}}}function b(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function hv(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),e.update(c,i,d))}function o(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let h=0;for(let f=0;f<d;f++)h+=c[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function dv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Pn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const _=A===ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==vn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Rn&&!_)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(jt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:x,maxSamples:w,samples:E}}function uv(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Ii,o=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const f=p.length!==0||h||i!==0||s;return s=h,i=p.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){e=d(p,h,0)},this.setState=function(p,h,f){const g=p.clippingPlanes,M=p.clipIntersection,m=p.clipShadows,u=n.get(p);if(!s||g===null||g.length===0||r&&!m)r?d(null):c();else{const y=r?0:i,S=y*4;let x=u.clippingState||null;l.value=x,x=d(g,h,S,f);for(let w=0;w!==S;++w)x[w]=e[w];u.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(p,h,f,g){const M=p!==null?p.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const u=f+M*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,x=f;S!==M;++S,x+=4)a.copy(p[S]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}const xi=4,Hh=[.125,.215,.35,.446,.526,.582],Di=20,fv=256,Zs=new Sc,Wh=new Ht;let Lo=null,Do=0,Fo=0,Uo=!1;const pv=new O;class Ta{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=pv}=r;Lo=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lo,Do,Fo),this._renderer.xr.enabled=Uo,t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lo=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ri,format:Pn,colorSpace:_a,depthBuffer:!1},s=Xh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xh(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mv(r)),this._blurMaterial=vv(r,t,e),this._ggxMaterial=gv(r,t,e)}return s}_compileMaterial(t){const e=new rt(new Ee,t);this._renderer.compile(e,Zs)}_sceneToCubeUV(t,e,i,s,r){const l=new gn(90,1,e,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,f=p.toneMapping;p.getClearColor(Wh),p.toneMapping=zn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new Ye,new Gi({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let u=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,u=!0):(m.color.copy(Wh),u=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[S]));const w=this._cubeSize;gs(s,x*w,S>2?w:0,w,w),p.setRenderTarget(s),u&&p.render(M,l),p.render(t,l)}p.toneMapping=f,p.autoClear=h,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Bi||t.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;gs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Zs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),h=0+c*1.25,f=p*h,{_lodMax:g}=this,M=this._sizeLods[i],m=3*M*(i>g-xi?i-g+xi:0),u=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,gs(r,m,u,3*M,2*M),s.setRenderTarget(r),s.render(o,Zs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,gs(t,m,u,3*M,2*M),s.setRenderTarget(t),s.render(o,Zs)}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&he("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[s];p.material=c;const h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Di-1),M=r/g,m=isFinite(r)?1+Math.floor(d*M):Di;m>Di&&jt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const u=[];let y=0;for(let A=0;A<Di;++A){const _=A/M,b=Math.exp(-_*_/2);u.push(b),A===0?y+=b:A<m&&(y+=2*b)}for(let A=0;A<u.length;A++)u[A]=u[A]/y;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;const x=this._sizeLods[s],w=3*x*(s>S-xi?s-S+xi:0),E=4*(this._cubeSize-x);gs(e,w,E,3*x,2*x),l.setRenderTarget(e),l.render(p,Zs)}}function mv(n){const t=[],e=[],i=[];let s=n;const r=n-xi+1+Hh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-xi?l=Hh[a-n+xi-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),d=-c,p=1+c,h=[d,d,p,d,p,p,d,d,p,p,d,p],f=6,g=6,M=3,m=2,u=1,y=new Float32Array(M*g*f),S=new Float32Array(m*g*f),x=new Float32Array(u*g*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,_=E>2?0:-1,b=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];y.set(b,M*g*E),S.set(h,m*g*E);const C=[E,E,E,E,E,E];x.set(C,u*g*E)}const w=new Ee;w.setAttribute("position",new Ne(y,M)),w.setAttribute("uv",new Ne(S,m)),w.setAttribute("faceIndex",new Ne(x,u)),i.push(new rt(w,null)),s>xi&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Xh(n,t,e){const i=new Gn(n,t,e);return i.texture.mapping=Wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function gv(n,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Za(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function vv(n,t,e){const i=new Float32Array(Di),s=new O(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function qh(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Yh(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Za(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Cu extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new hu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ye(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:ii});r.uniforms.tEquirect.value=e;const a=new rt(s,r),o=e.minFilter;return e.minFilter===Ui&&(e.minFilter=nn),new b0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function _v(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===ra||f===eo)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const M=new Cu(g.height);return M.fromEquirectangularTexture(n,h),t.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,g=f===ra||f===eo,M=f===Bi||f===As;if(g||M){let m=e.get(h);const u=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return i===null&&(i=new Ta(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return g&&y&&y.height>0||M&&y&&l(y)?(i===null&&(i=new Ta(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,f){return f===ra?h.mapping=Bi:f===eo&&(h.mapping=As),h}function l(h){let f=0;const g=6;for(let M=0;M<g;M++)h[M]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(h){const f=h.target;f.removeEventListener("dispose",d);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function xv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ys("WebGLRenderer: "+i+" extension not supported."),s}}}function Mv(n,t,e,i){const s={},r=new WeakMap;function a(p){const h=p.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(p){const h=p.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function c(p){const h=[],f=p.index,g=p.attributes.position;let M=0;if(g===void 0)return;if(f!==null){const y=f.array;M=f.version;for(let S=0,x=y.length;S<x;S+=3){const w=y[S+0],E=y[S+1],A=y[S+2];h.push(w,E,E,A,A,w)}}else{const y=g.array;M=g.version;for(let S=0,x=y.length/3-1;S<x;S+=3){const w=S+0,E=S+1,A=S+2;h.push(w,E,E,A,A,w)}}const m=new(g.count>=65535?ru:su)(h,1);m.version=M;const u=r.get(p);u&&t.remove(u),r.set(p,m)}function d(p){const h=r.get(p);if(h){const f=p.index;f!==null&&h.version<f.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function yv(n,t,e){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,h){n.drawElements(i,h,r,p*a),e.update(h,i,1)}function c(p,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,p*a,f),e.update(h,i,f))}function d(p,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,p,0,f);let M=0;for(let m=0;m<f;m++)M+=h[m];e.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Sv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:he("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function bv(n,t,e){const i=new WeakMap,s=new De;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==p){let C=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var f=C;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),M===!0&&(x=2),m===!0&&(x=3);let w=o.attributes.position.count*x,E=1;w>t.maxTextureSize&&(E=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const A=new Float32Array(w*E*4*p),_=new eu(A,w,E,p);_.type=Rn,_.needsUpdate=!0;const b=x*4;for(let R=0;R<p;R++){const D=u[R],G=y[R],F=S[R],B=w*E*4*R;for(let Y=0;Y<D.count;Y++){const k=Y*b;g===!0&&(s.fromBufferAttribute(D,Y),A[B+k+0]=s.x,A[B+k+1]=s.y,A[B+k+2]=s.z,A[B+k+3]=0),M===!0&&(s.fromBufferAttribute(G,Y),A[B+k+4]=s.x,A[B+k+5]=s.y,A[B+k+6]=s.z,A[B+k+7]=0),m===!0&&(s.fromBufferAttribute(F,Y),A[B+k+8]=s.x,A[B+k+9]=s.y,A[B+k+10]=s.z,A[B+k+11]=F.itemSize===4?s.w:1)}}h={count:p,texture:_,size:new Et(w,E)},i.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const M=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Ev(n,t,e,i,s){let r=new WeakMap;function a(c){const d=s.render.frame,p=c.geometry,h=t.get(c,p);if(r.get(h)!==d&&(t.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}const wv={[Gd]:"LINEAR_TONE_MAPPING",[Vd]:"REINHARD_TONE_MAPPING",[Hd]:"CINEON_TONE_MAPPING",[Ha]:"ACES_FILMIC_TONE_MAPPING",[Xd]:"AGX_TONE_MAPPING",[qd]:"NEUTRAL_TONE_MAPPING",[Wd]:"CUSTOM_TONE_MAPPING"};function Tv(n,t,e,i,s,r){const a=new Gn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Rs(t,e):void 0}),o=new Gn(t,e,{type:ri,depthBuffer:!1,stencilBuffer:!1}),l=new Ee;l.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ue([0,2,0,0,2,0],2));const c=new _0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new rt(l,c),p=new Sc(-1,1,1,-1,0,1);let h=null,f=null,g=!1,M,m=null,u=[],y=!1;this.setSize=function(S,x){a.setSize(S,x),o.setSize(S,x);for(let w=0;w<u.length;w++){const E=u[w];E.setSize&&E.setSize(S,x)}},this.setEffects=function(S){u=S,y=u.length>0&&u[0].isRenderPass===!0;const x=a.width,w=a.height;for(let E=0;E<u.length;E++){const A=u[E];A.setSize&&A.setSize(x,w)}},this.begin=function(S,x){if(g||S.toneMapping===zn&&u.length===0)return!1;if(m=x,x!==null){const w=x.width,E=x.height;(a.width!==w||a.height!==E)&&this.setSize(w,E)}return y===!1&&S.setRenderTarget(a),M=S.toneMapping,S.toneMapping=zn,!0},this.hasRenderPass=function(){return y},this.end=function(S,x){S.toneMapping=M,g=!0;let w=a,E=o;for(let A=0;A<u.length;A++){const _=u[A];if(_.enabled!==!1&&(_.render(S,E,w,x),_.needsSwap!==!1)){const b=w;w=E,E=b}}if(h!==S.outputColorSpace||f!==S.toneMapping){h=S.outputColorSpace,f=S.toneMapping,c.defines={},fe.getTransfer(h)===Se&&(c.defines.SRGB_TRANSFER="");const A=wv[f];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(m),S.render(d,p),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Ru=new sn,Vl=new Rs(1,1),Pu=new eu,Iu=new fp,Lu=new hu,$h=[],Zh=[],Jh=new Float32Array(16),Kh=new Float32Array(9),Qh=new Float32Array(4);function Fs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=$h[s];if(r===void 0&&(r=new Float32Array(s),$h[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function We(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Xe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ja(n,t){let e=Zh[t];e===void 0&&(e=new Int32Array(t),Zh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Av(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Cv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;n.uniform2fv(this.addr,t),Xe(e,t)}}function Rv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;n.uniform3fv(this.addr,t),Xe(e,t)}}function Pv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;n.uniform4fv(this.addr,t),Xe(e,t)}}function Iv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;Qh.set(i),n.uniformMatrix2fv(this.addr,!1,Qh),Xe(e,i)}}function Lv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;Kh.set(i),n.uniformMatrix3fv(this.addr,!1,Kh),Xe(e,i)}}function Dv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;Jh.set(i),n.uniformMatrix4fv(this.addr,!1,Jh),Xe(e,i)}}function Fv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Uv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;n.uniform2iv(this.addr,t),Xe(e,t)}}function Nv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;n.uniform3iv(this.addr,t),Xe(e,t)}}function Ov(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;n.uniform4iv(this.addr,t),Xe(e,t)}}function Bv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function zv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;n.uniform2uiv(this.addr,t),Xe(e,t)}}function kv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;n.uniform3uiv(this.addr,t),Xe(e,t)}}function Gv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;n.uniform4uiv(this.addr,t),Xe(e,t)}}function Vv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Vl.compareFunction=e.isReversedDepthBuffer()?uc:dc,r=Vl):r=Ru,e.setTexture2D(t||r,s)}function Hv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Iu,s)}function Wv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Lu,s)}function Xv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Pu,s)}function qv(n){switch(n){case 5126:return Av;case 35664:return Cv;case 35665:return Rv;case 35666:return Pv;case 35674:return Iv;case 35675:return Lv;case 35676:return Dv;case 5124:case 35670:return Fv;case 35667:case 35671:return Uv;case 35668:case 35672:return Nv;case 35669:case 35673:return Ov;case 5125:return Bv;case 36294:return zv;case 36295:return kv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Xv}}function Yv(n,t){n.uniform1fv(this.addr,t)}function $v(n,t){const e=Fs(t,this.size,2);n.uniform2fv(this.addr,e)}function Zv(n,t){const e=Fs(t,this.size,3);n.uniform3fv(this.addr,e)}function Jv(n,t){const e=Fs(t,this.size,4);n.uniform4fv(this.addr,e)}function Kv(n,t){const e=Fs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Qv(n,t){const e=Fs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function jv(n,t){const e=Fs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function t_(n,t){n.uniform1iv(this.addr,t)}function e_(n,t){n.uniform2iv(this.addr,t)}function n_(n,t){n.uniform3iv(this.addr,t)}function i_(n,t){n.uniform4iv(this.addr,t)}function s_(n,t){n.uniform1uiv(this.addr,t)}function r_(n,t){n.uniform2uiv(this.addr,t)}function a_(n,t){n.uniform3uiv(this.addr,t)}function o_(n,t){n.uniform4uiv(this.addr,t)}function l_(n,t,e){const i=this.cache,s=t.length,r=Ja(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Vl:a=Ru;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function c_(n,t,e){const i=this.cache,s=t.length,r=Ja(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Iu,r[a])}function h_(n,t,e){const i=this.cache,s=t.length,r=Ja(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Lu,r[a])}function d_(n,t,e){const i=this.cache,s=t.length,r=Ja(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Pu,r[a])}function u_(n){switch(n){case 5126:return Yv;case 35664:return $v;case 35665:return Zv;case 35666:return Jv;case 35674:return Kv;case 35675:return Qv;case 35676:return jv;case 5124:case 35670:return t_;case 35667:case 35671:return e_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return a_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return d_}}class f_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=qv(e.type)}}class p_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=u_(e.type)}}class m_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const No=/(\w+)(\])?(\[|\.)?/g;function jh(n,t){n.seq.push(t),n.map[t.id]=t}function g_(n,t,e){const i=n.name,s=i.length;for(No.lastIndex=0;;){const r=No.exec(i),a=No.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jh(e,c===void 0?new f_(o,n,t):new p_(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new m_(o),jh(e,p)),e=p}}}class ha{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);g_(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function td(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const v_=37297;let __=0;function x_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const ed=new ie;function M_(n){fe._getMatrix(ed,fe.workingColorSpace,n);const t=`mat3( ${ed.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(n)){case xa:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function nd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+x_(n.getShaderSource(t),o)}else return r}function y_(n,t){const e=M_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const S_={[Gd]:"Linear",[Vd]:"Reinhard",[Hd]:"Cineon",[Ha]:"ACESFilmic",[Xd]:"AgX",[qd]:"Neutral",[Wd]:"Custom"};function b_(n,t){const e=S_[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qr=new O;function E_(){fe.getLuminanceCoefficients(Qr);const n=Qr.x.toFixed(4),t=Qr.y.toFixed(4),e=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function T_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function A_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function js(n){return n!==""}function id(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(n){return n.replace(C_,P_)}const R_=new Map;function P_(n,t){let e=oe[t];if(e===void 0){const i=R_.get(t);if(i!==void 0)e=oe[i],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Hl(e)}const I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(n){return n.replace(I_,L_)}function L_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ad(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const D_={[sa]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function F_(n){return D_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const U_={[Bi]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[Wa]:"ENVMAP_TYPE_CUBE_UV"};function N_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":U_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const O_={[As]:"ENVMAP_MODE_REFRACTION"};function B_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":O_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const z_={[kd]:"ENVMAP_BLENDING_MULTIPLY",[If]:"ENVMAP_BLENDING_MIX",[Lf]:"ENVMAP_BLENDING_ADD"};function k_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":z_[n.combine]||"ENVMAP_BLENDING_NONE"}function G_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function V_(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=F_(e),c=N_(e),d=B_(e),p=k_(e),h=G_(e),f=w_(e),g=T_(r),M=s.createProgram();let m,u,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),u.length>0&&(u+=`
`)):(m=[ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),u=[ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?oe.tonemapping_pars_fragment:"",e.toneMapping!==zn?b_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,y_("linearToOutputTexel",e.outputColorSpace),E_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),a=Hl(a),a=id(a,e),a=sd(a,e),o=Hl(o),o=id(o,e),o=sd(o,e),a=rd(a),o=rd(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=y+m+a,x=y+u+o,w=td(s,s.VERTEX_SHADER,S),E=td(s,s.FRAGMENT_SHADER,x);s.attachShader(M,w),s.attachShader(M,E),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(R){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(M)||"",G=s.getShaderInfoLog(w)||"",F=s.getShaderInfoLog(E)||"",B=D.trim(),Y=G.trim(),k=F.trim();let it=!0,st=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,w,E);else{const ft=nd(s,w,"vertex"),ht=nd(s,E,"fragment");he("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+ft+`
`+ht)}else B!==""?jt("WebGLProgram: Program Info Log:",B):(Y===""||k==="")&&(st=!1);st&&(R.diagnostics={runnable:it,programLog:B,vertexShader:{log:Y,prefix:m},fragmentShader:{log:k,prefix:u}})}s.deleteShader(w),s.deleteShader(E),_=new ha(s,M),b=A_(s,M)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(M,v_)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=__++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=E,this}let H_=0;class W_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new X_(t),e.set(t,i)),i}}class X_{constructor(t){this.id=H_++,this.code=t,this.usedTimes=0}}function q_(n){return n===ki||n===ga||n===va}function Y_(n,t,e,i,s,r){const a=new mc,o=new W_,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,b,C,R,D,G){const F=R.fog,B=D.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,it=t.get(_.envMap||Y,k),st=it&&it.mapping===Wa?it.image.height:null,ft=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&jt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const ht=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_t=ht!==void 0?ht.length:0;let Xt=0;B.morphAttributes.position!==void 0&&(Xt=1),B.morphAttributes.normal!==void 0&&(Xt=2),B.morphAttributes.color!==void 0&&(Xt=3);let Wt,Dt,tt,pt;if(ft){const z=On[ft];Wt=z.vertexShader,Dt=z.fragmentShader}else{Wt=_.vertexShader,Dt=_.fragmentShader;const z=o.getVertexShaderStage(_),H=o.getFragmentShaderStage(_);o.update(_,z,H),tt=z.id,pt=H.id}const dt=n.getRenderTarget(),Ct=n.state.buffers.depth.getReversed(),Pt=D.isInstancedMesh===!0,Ft=D.isBatchedMesh===!0,Qt=!!_.map,Vt=!!_.matcap,at=!!it,ut=!!_.aoMap,vt=!!_.lightMap,It=!!_.bumpMap&&_.wireframe===!1,Rt=!!_.normalMap,$t=!!_.displacementMap,qt=!!_.emissiveMap,Kt=!!_.metalnessMap,ee=!!_.roughnessMap,U=_.anisotropy>0,me=_.clearcoat>0,se=_.dispersion>0,P=_.iridescence>0,v=_.sheen>0,I=_.transmission>0,L=U&&!!_.anisotropyMap,W=me&&!!_.clearcoatMap,et=me&&!!_.clearcoatNormalMap,ot=me&&!!_.clearcoatRoughnessMap,X=P&&!!_.iridescenceMap,Q=P&&!!_.iridescenceThicknessMap,St=v&&!!_.sheenColorMap,Tt=v&&!!_.sheenRoughnessMap,ct=!!_.specularMap,yt=!!_.specularColorMap,wt=!!_.specularIntensityMap,xt=I&&!!_.transmissionMap,Lt=I&&!!_.thicknessMap,N=!!_.gradientMap,gt=!!_.alphaMap,nt=_.alphaTest>0,bt=!!_.alphaHash,At=!!_.extensions;let lt=zn;_.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(lt=n.toneMapping);const zt={shaderID:ft,shaderType:_.type,shaderName:_.name,vertexShader:Wt,fragmentShader:Dt,defines:_.defines,customVertexShaderID:tt,customFragmentShaderID:pt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Ft,batchingColor:Ft&&D._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&D.instanceColor!==null,instancingMorph:Pt&&D.morphTexture!==null,outputColorSpace:dt===null?n.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Qt,matcap:Vt,envMap:at,envMapMode:at&&it.mapping,envMapCubeUVHeight:st,aoMap:ut,lightMap:vt,bumpMap:It,normalMap:Rt,displacementMap:$t,emissiveMap:qt,normalMapObjectSpace:Rt&&_.normalMapType===Uf,normalMapTangentSpace:Rt&&_.normalMapType===Dl,packedNormalMap:Rt&&_.normalMapType===Dl&&q_(_.normalMap.format),metalnessMap:Kt,roughnessMap:ee,anisotropy:U,anisotropyMap:L,clearcoat:me,clearcoatMap:W,clearcoatNormalMap:et,clearcoatRoughnessMap:ot,dispersion:se,iridescence:P,iridescenceMap:X,iridescenceThicknessMap:Q,sheen:v,sheenColorMap:St,sheenRoughnessMap:Tt,specularMap:ct,specularColorMap:yt,specularIntensityMap:wt,transmission:I,transmissionMap:xt,thicknessMap:Lt,gradientMap:N,opaque:_.transparent===!1&&_.blending===Ms&&_.alphaToCoverage===!1,alphaMap:gt,alphaTest:nt,alphaHash:bt,combine:_.combine,mapUv:Qt&&g(_.map.channel),aoMapUv:ut&&g(_.aoMap.channel),lightMapUv:vt&&g(_.lightMap.channel),bumpMapUv:It&&g(_.bumpMap.channel),normalMapUv:Rt&&g(_.normalMap.channel),displacementMapUv:$t&&g(_.displacementMap.channel),emissiveMapUv:qt&&g(_.emissiveMap.channel),metalnessMapUv:Kt&&g(_.metalnessMap.channel),roughnessMapUv:ee&&g(_.roughnessMap.channel),anisotropyMapUv:L&&g(_.anisotropyMap.channel),clearcoatMapUv:W&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:et&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:St&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&g(_.sheenRoughnessMap.channel),specularMapUv:ct&&g(_.specularMap.channel),specularColorMapUv:yt&&g(_.specularColorMap.channel),specularIntensityMapUv:wt&&g(_.specularIntensityMap.channel),transmissionMapUv:xt&&g(_.transmissionMap.channel),thicknessMapUv:Lt&&g(_.thicknessMap.channel),alphaMapUv:gt&&g(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Rt||U),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Qt||gt),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&Rt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ct,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Xt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:Qt&&_.map.isVideoTexture===!0&&fe.getTransfer(_.map.colorSpace)===Se,decodeVideoTextureEmissive:qt&&_.emissiveMap.isVideoTexture===!0&&fe.getTransfer(_.emissiveMap.colorSpace)===Se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===en,flipSided:_.side===cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:At&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&_.extensions.multiDraw===!0||Ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function m(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)b.push(C),b.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(u(b,_),y(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function u(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function y(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){const b=f[_.type];let C;if(b){const R=On[b];C=m0.clone(R.uniforms)}else C=_.uniforms;return C}function x(_,b){let C=d.get(b);return C!==void 0?++C.usedTimes:(C=new V_(n,b,_,s),c.push(C),d.set(b,C)),C}function w(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function A(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:S,acquireProgram:x,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:A}}function $_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Z_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function od(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ld(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,M,m,u){let y=n[t];return y===void 0?(y={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:u},n[t]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=g,y.materialVariant=a(h),y.groupOrder=M,y.renderOrder=h.renderOrder,y.z=m,y.group=u),t++,y}function l(h,f,g,M,m,u){const y=o(h,f,g,M,m,u);g.transmission>0?i.push(y):g.transparent===!0?s.push(y):e.push(y)}function c(h,f,g,M,m,u){const y=o(h,f,g,M,m,u);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function d(h,f,g){e.length>1&&e.sort(h||Z_),i.length>1&&i.sort(f||od),s.length>1&&s.sort(f||od),g&&(e.reverse(),i.reverse(),s.reverse())}function p(){for(let h=t,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:d}}function J_(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new ld,n.set(i,[a])):s>=r.length?(a=new ld,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function K_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Ht};break;case"SpotLight":e={position:new O,direction:new O,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function Q_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let j_=0;function tx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ex(n){const t=new K_,e=Q_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new Me,a=new Me;function o(c){let d=0,p=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,M=0,m=0,u=0,y=0,S=0,x=0,w=0,E=0,A=0;c.sort(tx);for(let b=0,C=c.length;b<C;b++){const R=c[b],D=R.color,G=R.intensity,F=R.distance;let B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ki?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=D.r*G,p+=D.g*G,h+=D.b*G;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(R.sh.coefficients[Y],G);A++}else if(R.isDirectionalLight){const Y=t.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const k=R.shadow,it=e.get(R);it.shadowIntensity=k.intensity,it.shadowBias=k.bias,it.shadowNormalBias=k.normalBias,it.shadowRadius=k.radius,it.shadowMapSize=k.mapSize,i.directionalShadow[f]=it,i.directionalShadowMap[f]=B,i.directionalShadowMatrix[f]=R.shadow.matrix,y++}i.directional[f]=Y,f++}else if(R.isSpotLight){const Y=t.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(D).multiplyScalar(G),Y.distance=F,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,i.spot[M]=Y;const k=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,k.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[M]=k.matrix,R.castShadow){const it=e.get(R);it.shadowIntensity=k.intensity,it.shadowBias=k.bias,it.shadowNormalBias=k.normalBias,it.shadowRadius=k.radius,it.shadowMapSize=k.mapSize,i.spotShadow[M]=it,i.spotShadowMap[M]=B,x++}M++}else if(R.isRectAreaLight){const Y=t.get(R);Y.color.copy(D).multiplyScalar(G),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=Y,m++}else if(R.isPointLight){const Y=t.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){const k=R.shadow,it=e.get(R);it.shadowIntensity=k.intensity,it.shadowBias=k.bias,it.shadowNormalBias=k.normalBias,it.shadowRadius=k.radius,it.shadowMapSize=k.mapSize,it.shadowCameraNear=k.camera.near,it.shadowCameraFar=k.camera.far,i.pointShadow[g]=it,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=R.shadow.matrix,S++}i.point[g]=Y,g++}else if(R.isHemisphereLight){const Y=t.get(R);Y.skyColor.copy(R.color).multiplyScalar(G),Y.groundColor.copy(R.groundColor).multiplyScalar(G),i.hemi[u]=Y,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ut.LTC_FLOAT_1,i.rectAreaLTC2=Ut.LTC_FLOAT_2):(i.rectAreaLTC1=Ut.LTC_HALF_1,i.rectAreaLTC2=Ut.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=h;const _=i.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==M||_.rectAreaLength!==m||_.hemiLength!==u||_.numDirectionalShadows!==y||_.numPointShadows!==S||_.numSpotShadows!==x||_.numSpotMaps!==w||_.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=M,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+w-E,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,_.directionalLength=f,_.pointLength=g,_.spotLength=M,_.rectAreaLength=m,_.hemiLength=u,_.numDirectionalShadows=y,_.numPointShadows=S,_.numSpotShadows=x,_.numSpotMaps=w,_.numLightProbes=A,i.version=j_++)}function l(c,d){let p=0,h=0,f=0,g=0,M=0;const m=d.matrixWorldInverse;for(let u=0,y=c.length;u<y;u++){const S=c[u];if(S.isDirectionalLight){const x=i.directional[p];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(S.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const x=i.hemi[M];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function cd(n){const t=new ex(n),e=[],i=[],s=[];function r(h){p.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function d(h){t.setupView(e,h)}const p={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function nx(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new cd(n),t.set(s,[o])):r>=a.length?(o=new cd(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rx=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],ax=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],hd=new Me,Js=new O,Oo=new O;function ox(n,t,e){let i=new vc;const s=new Et,r=new Et,a=new De,o=new x0,l=new M0,c={},d=e.maxTextureSize,p={[Si]:cn,[cn]:Si,[en]:en},h=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:ix,fragmentShader:sx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ee;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new rt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sa;let u=this.type;this.render=function(E,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===zd&&(jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sa);const b=n.getRenderTarget(),C=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ii),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const G=u!==this.type;G&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(B=>B.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,B=E.length;F<B;F++){const Y=E[F],k=Y.shadow;if(k===void 0){jt("WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const it=k.getFrameExtents();s.multiply(it),r.copy(k.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/it.x),s.x=r.x*it.x,k.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/it.y),s.y=r.y*it.y,k.mapSize.y=r.y));const st=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=st,k.map===null||G===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ks){if(Y.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Gn(s.x,s.y,{format:ki,type:ri,minFilter:nn,magFilter:nn,generateMipmaps:!1}),k.map.texture.name=Y.name+".shadowMap",k.map.depthTexture=new Rs(s.x,s.y,Rn),k.map.depthTexture.name=Y.name+".shadowMapDepth",k.map.depthTexture.format=ai,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=$e,k.map.depthTexture.magFilter=$e}else Y.isPointLight?(k.map=new Cu(s.x),k.map.depthTexture=new Dp(s.x,Hn)):(k.map=new Gn(s.x,s.y),k.map.depthTexture=new Rs(s.x,s.y,Hn)),k.map.depthTexture.name=Y.name+".shadowMap",k.map.depthTexture.format=ai,this.type===sa?(k.map.depthTexture.compareFunction=st?uc:dc,k.map.depthTexture.minFilter=nn,k.map.depthTexture.magFilter=nn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=$e,k.map.depthTexture.magFilter=$e);k.camera.updateProjectionMatrix()}const ft=k.map.isWebGLCubeRenderTarget?6:1;for(let ht=0;ht<ft;ht++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,ht),n.clear();else{ht===0&&(n.setRenderTarget(k.map),n.clear());const _t=k.getViewport(ht);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),D.viewport(a)}if(Y.isPointLight){const _t=k.camera,Xt=k.matrix,Wt=Y.distance||_t.far;Wt!==_t.far&&(_t.far=Wt,_t.updateProjectionMatrix()),Js.setFromMatrixPosition(Y.matrixWorld),_t.position.copy(Js),Oo.copy(_t.position),Oo.add(rx[ht]),_t.up.copy(ax[ht]),_t.lookAt(Oo),_t.updateMatrixWorld(),Xt.makeTranslation(-Js.x,-Js.y,-Js.z),hd.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),k._frustum.setFromProjectionMatrix(hd,_t.coordinateSystem,_t.reversedDepth)}else k.updateMatrices(Y);i=k.getFrustum(),x(A,_,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===Ks&&y(k,_),k.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(b,C,R)};function y(E,A){const _=t.update(M);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Gn(s.x,s.y,{format:ki,type:ri})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,_,h,M,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,_,f,M,null)}function S(E,A,_,b){let C=null;const R=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)C=R;else if(C=_.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=C.uuid,G=A.uuid;let F=c[D];F===void 0&&(F={},c[D]=F);let B=F[G];B===void 0&&(B=C.clone(),F[G]=B,A.addEventListener("dispose",w)),C=B}if(C.visible=A.visible,C.wireframe=A.wireframe,b===Ks?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:p[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const D=n.properties.get(C);D.light=_}return C}function x(E,A,_,b,C){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Ks)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const G=t.update(E),F=E.material;if(Array.isArray(F)){const B=G.groups;for(let Y=0,k=B.length;Y<k;Y++){const it=B[Y],st=F[it.materialIndex];if(st&&st.visible){const ft=S(E,st,b,C);E.onBeforeShadow(n,E,A,_,G,ft,it),n.renderBufferDirect(_,null,G,ft,E,it),E.onAfterShadow(n,E,A,_,G,ft,it)}}}else if(F.visible){const B=S(E,F,b,C);E.onBeforeShadow(n,E,A,_,G,B,null),n.renderBufferDirect(_,null,G,B,E,null),E.onAfterShadow(n,E,A,_,G,B,null)}}const D=E.children;for(let G=0,F=D.length;G<F;G++)x(D[G],A,_,b,C)}function w(E){E.target.removeEventListener("dispose",w);for(const _ in c){const b=c[_],C=E.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function lx(n,t){function e(){let N=!1;const gt=new De;let nt=null;const bt=new De(0,0,0,0);return{setMask:function(At){nt!==At&&!N&&(n.colorMask(At,At,At,At),nt=At)},setLocked:function(At){N=At},setClear:function(At,lt,zt,z,H){H===!0&&(At*=z,lt*=z,zt*=z),gt.set(At,lt,zt,z),bt.equals(gt)===!1&&(n.clearColor(At,lt,zt,z),bt.copy(gt))},reset:function(){N=!1,nt=null,bt.set(-1,0,0,0)}}}function i(){let N=!1,gt=!1,nt=null,bt=null,At=null;return{setReversed:function(lt){if(gt!==lt){const zt=t.get("EXT_clip_control");lt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),gt=lt;const z=At;At=null,this.setClear(z)}},getReversed:function(){return gt},setTest:function(lt){lt?dt(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(lt){nt!==lt&&!N&&(n.depthMask(lt),nt=lt)},setFunc:function(lt){if(gt&&(lt=Xf[lt]),bt!==lt){switch(lt){case Zo:n.depthFunc(n.NEVER);break;case Jo:n.depthFunc(n.ALWAYS);break;case Ko:n.depthFunc(n.LESS);break;case Ts:n.depthFunc(n.LEQUAL);break;case Qo:n.depthFunc(n.EQUAL);break;case jo:n.depthFunc(n.GEQUAL);break;case tl:n.depthFunc(n.GREATER);break;case el:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}bt=lt}},setLocked:function(lt){N=lt},setClear:function(lt){At!==lt&&(At=lt,gt&&(lt=1-lt),n.clearDepth(lt))},reset:function(){N=!1,nt=null,bt=null,At=null,gt=!1}}}function s(){let N=!1,gt=null,nt=null,bt=null,At=null,lt=null,zt=null,z=null,H=null;return{setTest:function(q){N||(q?dt(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(q){gt!==q&&!N&&(n.stencilMask(q),gt=q)},setFunc:function(q,Z,Ot){(nt!==q||bt!==Z||At!==Ot)&&(n.stencilFunc(q,Z,Ot),nt=q,bt=Z,At=Ot)},setOp:function(q,Z,Ot){(lt!==q||zt!==Z||z!==Ot)&&(n.stencilOp(q,Z,Ot),lt=q,zt=Z,z=Ot)},setLocked:function(q){N=q},setClear:function(q){H!==q&&(n.clearStencil(q),H=q)},reset:function(){N=!1,gt=null,nt=null,bt=null,At=null,lt=null,zt=null,z=null,H=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let d={},p={},h={},f=new WeakMap,g=[],M=null,m=!1,u=null,y=null,S=null,x=null,w=null,E=null,A=null,_=new Ht(0,0,0),b=0,C=!1,R=null,D=null,G=null,F=null,B=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,it=0;const st=n.getParameter(n.VERSION);st.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(st)[1]),k=it>=1):st.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),k=it>=2);let ft=null,ht={};const _t=n.getParameter(n.SCISSOR_BOX),Xt=n.getParameter(n.VIEWPORT),Wt=new De().fromArray(_t),Dt=new De().fromArray(Xt);function tt(N,gt,nt,bt){const At=new Uint8Array(4),lt=n.createTexture();n.bindTexture(N,lt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let zt=0;zt<nt;zt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(gt+zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return lt}const pt={};pt[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),pt[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pt[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(n.DEPTH_TEST),a.setFunc(Ts),It(!1),Rt(Jc),dt(n.CULL_FACE),ut(ii);function dt(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function Ct(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function Pt(N,gt){return h[N]!==gt?(n.bindFramebuffer(N,gt),h[N]=gt,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=gt),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ft(N,gt){let nt=g,bt=!1;if(N){nt=f.get(gt),nt===void 0&&(nt=[],f.set(gt,nt));const At=N.textures;if(nt.length!==At.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,zt=At.length;lt<zt;lt++)nt[lt]=n.COLOR_ATTACHMENT0+lt;nt.length=At.length,bt=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,bt=!0);bt&&n.drawBuffers(nt)}function Qt(N){return M!==N?(n.useProgram(N),M=N,!0):!1}const Vt={[Li]:n.FUNC_ADD,[pf]:n.FUNC_SUBTRACT,[mf]:n.FUNC_REVERSE_SUBTRACT};Vt[gf]=n.MIN,Vt[vf]=n.MAX;const at={[_f]:n.ZERO,[xf]:n.ONE,[Mf]:n.SRC_COLOR,[Yo]:n.SRC_ALPHA,[Tf]:n.SRC_ALPHA_SATURATE,[Ef]:n.DST_COLOR,[Sf]:n.DST_ALPHA,[yf]:n.ONE_MINUS_SRC_COLOR,[$o]:n.ONE_MINUS_SRC_ALPHA,[wf]:n.ONE_MINUS_DST_COLOR,[bf]:n.ONE_MINUS_DST_ALPHA,[Af]:n.CONSTANT_COLOR,[Cf]:n.ONE_MINUS_CONSTANT_COLOR,[Rf]:n.CONSTANT_ALPHA,[Pf]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(N,gt,nt,bt,At,lt,zt,z,H,q){if(N===ii){m===!0&&(Ct(n.BLEND),m=!1);return}if(m===!1&&(dt(n.BLEND),m=!0),N!==ff){if(N!==u||q!==C){if((y!==Li||w!==Li)&&(n.blendEquation(n.FUNC_ADD),y=Li,w=Li),q)switch(N){case Ms:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ws:n.blendFunc(n.ONE,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:he("WebGLState: Invalid blending: ",N);break}else switch(N){case Ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Kc:he("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qc:he("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:he("WebGLState: Invalid blending: ",N);break}S=null,x=null,E=null,A=null,_.set(0,0,0),b=0,u=N,C=q}return}At=At||gt,lt=lt||nt,zt=zt||bt,(gt!==y||At!==w)&&(n.blendEquationSeparate(Vt[gt],Vt[At]),y=gt,w=At),(nt!==S||bt!==x||lt!==E||zt!==A)&&(n.blendFuncSeparate(at[nt],at[bt],at[lt],at[zt]),S=nt,x=bt,E=lt,A=zt),(z.equals(_)===!1||H!==b)&&(n.blendColor(z.r,z.g,z.b,H),_.copy(z),b=H),u=N,C=!1}function vt(N,gt){N.side===en?Ct(n.CULL_FACE):dt(n.CULL_FACE);let nt=N.side===cn;gt&&(nt=!nt),It(nt),N.blending===Ms&&N.transparent===!1?ut(ii):ut(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const bt=N.stencilWrite;o.setTest(bt),bt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),qt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?dt(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function It(N){R!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),R=N)}function Rt(N){N!==df?(dt(n.CULL_FACE),N!==D&&(N===Jc?n.cullFace(n.BACK):N===uf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),D=N}function $t(N){N!==G&&(k&&n.lineWidth(N),G=N)}function qt(N,gt,nt){N?(dt(n.POLYGON_OFFSET_FILL),(F!==gt||B!==nt)&&(F=gt,B=nt,a.getReversed()&&(gt=-gt),n.polygonOffset(gt,nt))):Ct(n.POLYGON_OFFSET_FILL)}function Kt(N){N?dt(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function ee(N){N===void 0&&(N=n.TEXTURE0+Y-1),ft!==N&&(n.activeTexture(N),ft=N)}function U(N,gt,nt){nt===void 0&&(ft===null?nt=n.TEXTURE0+Y-1:nt=ft);let bt=ht[nt];bt===void 0&&(bt={type:void 0,texture:void 0},ht[nt]=bt),(bt.type!==N||bt.texture!==gt)&&(ft!==nt&&(n.activeTexture(nt),ft=nt),n.bindTexture(N,gt||pt[N]),bt.type=N,bt.texture=gt)}function me(){const N=ht[ft];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function se(){try{n.compressedTexImage2D(...arguments)}catch(N){he("WebGLState:",N)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(N){he("WebGLState:",N)}}function v(){try{n.texSubImage2D(...arguments)}catch(N){he("WebGLState:",N)}}function I(){try{n.texSubImage3D(...arguments)}catch(N){he("WebGLState:",N)}}function L(){try{n.compressedTexSubImage2D(...arguments)}catch(N){he("WebGLState:",N)}}function W(){try{n.compressedTexSubImage3D(...arguments)}catch(N){he("WebGLState:",N)}}function et(){try{n.texStorage2D(...arguments)}catch(N){he("WebGLState:",N)}}function ot(){try{n.texStorage3D(...arguments)}catch(N){he("WebGLState:",N)}}function X(){try{n.texImage2D(...arguments)}catch(N){he("WebGLState:",N)}}function Q(){try{n.texImage3D(...arguments)}catch(N){he("WebGLState:",N)}}function St(N){return p[N]!==void 0?p[N]:n.getParameter(N)}function Tt(N,gt){p[N]!==gt&&(n.pixelStorei(N,gt),p[N]=gt)}function ct(N){Wt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Wt.copy(N))}function yt(N){Dt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Dt.copy(N))}function wt(N,gt){let nt=c.get(gt);nt===void 0&&(nt=new WeakMap,c.set(gt,nt));let bt=nt.get(N);bt===void 0&&(bt=n.getUniformBlockIndex(gt,N.name),nt.set(N,bt))}function xt(N,gt){const bt=c.get(gt).get(N);l.get(gt)!==bt&&(n.uniformBlockBinding(gt,bt,N.__bindingPointIndex),l.set(gt,bt))}function Lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},p={},ft=null,ht={},h={},f=new WeakMap,g=[],M=null,m=!1,u=null,y=null,S=null,x=null,w=null,E=null,A=null,_=new Ht(0,0,0),b=0,C=!1,R=null,D=null,G=null,F=null,B=null,Wt.set(0,0,n.canvas.width,n.canvas.height),Dt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:Ct,bindFramebuffer:Pt,drawBuffers:Ft,useProgram:Qt,setBlending:ut,setMaterial:vt,setFlipSided:It,setCullFace:Rt,setLineWidth:$t,setPolygonOffset:qt,setScissorTest:Kt,activeTexture:ee,bindTexture:U,unbindTexture:me,compressedTexImage2D:se,compressedTexImage3D:P,texImage2D:X,texImage3D:Q,pixelStorei:Tt,getParameter:St,updateUBOMapping:wt,uniformBlockBinding:xt,texStorage2D:et,texStorage3D:ot,texSubImage2D:v,texSubImage3D:I,compressedTexSubImage2D:L,compressedTexSubImage3D:W,scissor:ct,viewport:yt,reset:Lt}}function cx(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,d=new WeakMap,p=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,v){return g?new OffscreenCanvas(P,v):Ma("canvas")}function m(P,v,I){let L=1;const W=se(P);if((W.width>I||W.height>I)&&(L=I/Math.max(W.width,W.height)),L<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const et=Math.floor(L*W.width),ot=Math.floor(L*W.height);h===void 0&&(h=M(et,ot));const X=v?M(et,ot):h;return X.width=et,X.height=ot,X.getContext("2d").drawImage(P,0,0,et,ot),jt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+et+"x"+ot+")."),X}else return"data"in P&&jt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),P;return P}function u(P){return P.generateMipmaps}function y(P){n.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(P,v,I,L,W,et=!1){if(P!==null){if(n[P]!==void 0)return n[P];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ot;L&&(ot=t.get("EXT_texture_norm16"),ot||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=v;if(v===n.RED&&(I===n.FLOAT&&(X=n.R32F),I===n.HALF_FLOAT&&(X=n.R16F),I===n.UNSIGNED_BYTE&&(X=n.R8),I===n.UNSIGNED_SHORT&&ot&&(X=ot.R16_EXT),I===n.SHORT&&ot&&(X=ot.R16_SNORM_EXT)),v===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.R8UI),I===n.UNSIGNED_SHORT&&(X=n.R16UI),I===n.UNSIGNED_INT&&(X=n.R32UI),I===n.BYTE&&(X=n.R8I),I===n.SHORT&&(X=n.R16I),I===n.INT&&(X=n.R32I)),v===n.RG&&(I===n.FLOAT&&(X=n.RG32F),I===n.HALF_FLOAT&&(X=n.RG16F),I===n.UNSIGNED_BYTE&&(X=n.RG8),I===n.UNSIGNED_SHORT&&ot&&(X=ot.RG16_EXT),I===n.SHORT&&ot&&(X=ot.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RG8UI),I===n.UNSIGNED_SHORT&&(X=n.RG16UI),I===n.UNSIGNED_INT&&(X=n.RG32UI),I===n.BYTE&&(X=n.RG8I),I===n.SHORT&&(X=n.RG16I),I===n.INT&&(X=n.RG32I)),v===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RGB8UI),I===n.UNSIGNED_SHORT&&(X=n.RGB16UI),I===n.UNSIGNED_INT&&(X=n.RGB32UI),I===n.BYTE&&(X=n.RGB8I),I===n.SHORT&&(X=n.RGB16I),I===n.INT&&(X=n.RGB32I)),v===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),I===n.UNSIGNED_INT&&(X=n.RGBA32UI),I===n.BYTE&&(X=n.RGBA8I),I===n.SHORT&&(X=n.RGBA16I),I===n.INT&&(X=n.RGBA32I)),v===n.RGB&&(I===n.UNSIGNED_SHORT&&ot&&(X=ot.RGB16_EXT),I===n.SHORT&&ot&&(X=ot.RGB16_SNORM_EXT),I===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),v===n.RGBA){const Q=et?xa:fe.getTransfer(W);I===n.FLOAT&&(X=n.RGBA32F),I===n.HALF_FLOAT&&(X=n.RGBA16F),I===n.UNSIGNED_BYTE&&(X=Q===Se?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT&&ot&&(X=ot.RGBA16_EXT),I===n.SHORT&&ot&&(X=ot.RGBA16_SNORM_EXT),I===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function w(P,v){let I;return P?v===null||v===Hn||v===lr?I=n.DEPTH24_STENCIL8:v===Rn?I=n.DEPTH32F_STENCIL8:v===or&&(I=n.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hn||v===lr?I=n.DEPTH_COMPONENT24:v===Rn?I=n.DEPTH_COMPONENT32F:v===or&&(I=n.DEPTH_COMPONENT16),I}function E(P,v){return u(P)===!0||P.isFramebufferTexture&&P.minFilter!==$e&&P.minFilter!==nn?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function A(P){const v=P.target;v.removeEventListener("dispose",A),b(v),v.isVideoTexture&&d.delete(v),v.isHTMLTexture&&p.delete(v)}function _(P){const v=P.target;v.removeEventListener("dispose",_),R(v)}function b(P){const v=i.get(P);if(v.__webglInit===void 0)return;const I=P.source,L=f.get(I);if(L){const W=L[v.__cacheKey];W.usedTimes--,W.usedTimes===0&&C(P),Object.keys(L).length===0&&f.delete(I)}i.remove(P)}function C(P){const v=i.get(P);n.deleteTexture(v.__webglTexture);const I=P.source,L=f.get(I);delete L[v.__cacheKey],a.memory.textures--}function R(P){const v=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(v.__webglFramebuffer[L]))for(let W=0;W<v.__webglFramebuffer[L].length;W++)n.deleteFramebuffer(v.__webglFramebuffer[L][W]);else n.deleteFramebuffer(v.__webglFramebuffer[L]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[L])}else{if(Array.isArray(v.__webglFramebuffer))for(let L=0;L<v.__webglFramebuffer.length;L++)n.deleteFramebuffer(v.__webglFramebuffer[L]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let L=0;L<v.__webglColorRenderbuffer.length;L++)v.__webglColorRenderbuffer[L]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[L]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const I=P.textures;for(let L=0,W=I.length;L<W;L++){const et=i.get(I[L]);et.__webglTexture&&(n.deleteTexture(et.__webglTexture),a.memory.textures--),i.remove(I[L])}i.remove(P)}let D=0;function G(){D=0}function F(){return D}function B(P){D=P}function Y(){const P=D;return P>=s.maxTextures&&jt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function k(P){const v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function it(P,v){const I=i.get(P);if(P.isVideoTexture&&U(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&I.__version!==P.version){const L=P.image;if(L===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(I,P,v);return}}else P.isExternalTexture&&(I.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+v)}function st(P,v){const I=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&I.__version!==P.version){Ct(I,P,v);return}else P.isExternalTexture&&(I.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+v)}function ft(P,v){const I=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&I.__version!==P.version){Ct(I,P,v);return}e.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+v)}function ht(P,v){const I=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&I.__version!==P.version){Pt(I,P,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+v)}const _t={[zi]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[nl]:n.MIRRORED_REPEAT},Xt={[$e]:n.NEAREST,[Df]:n.NEAREST_MIPMAP_NEAREST,[yr]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[no]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},Wt={[Nf]:n.NEVER,[Gf]:n.ALWAYS,[Of]:n.LESS,[dc]:n.LEQUAL,[Bf]:n.EQUAL,[uc]:n.GEQUAL,[zf]:n.GREATER,[kf]:n.NOTEQUAL};function Dt(P,v){if(v.type===Rn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===nn||v.magFilter===no||v.magFilter===yr||v.magFilter===Ui||v.minFilter===nn||v.minFilter===no||v.minFilter===yr||v.minFilter===Ui)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,_t[v.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,_t[v.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,_t[v.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Xt[v.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Xt[v.minFilter]),v.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Wt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===$e||v.minFilter!==yr&&v.minFilter!==Ui||v.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function tt(P,v){let I=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",A));const L=v.source;let W=f.get(L);W===void 0&&(W={},f.set(L,W));const et=k(v);if(et!==P.__cacheKey){W[et]===void 0&&(W[et]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),W[et].usedTimes++;const ot=W[P.__cacheKey];ot!==void 0&&(W[P.__cacheKey].usedTimes--,ot.usedTimes===0&&C(v)),P.__cacheKey=et,P.__webglTexture=W[et].texture}return I}function pt(P,v,I){return Math.floor(Math.floor(P/I)/v)}function dt(P,v,I,L){const et=P.updateRanges;if(et.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,I,L,v.data);else{et.sort((Tt,ct)=>Tt.start-ct.start);let ot=0;for(let Tt=1;Tt<et.length;Tt++){const ct=et[ot],yt=et[Tt],wt=ct.start+ct.count,xt=pt(yt.start,v.width,4),Lt=pt(ct.start,v.width,4);yt.start<=wt+1&&xt===Lt&&pt(yt.start+yt.count-1,v.width,4)===xt?ct.count=Math.max(ct.count,yt.start+yt.count-ct.start):(++ot,et[ot]=yt)}et.length=ot+1;const X=e.getParameter(n.UNPACK_ROW_LENGTH),Q=e.getParameter(n.UNPACK_SKIP_PIXELS),St=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Tt=0,ct=et.length;Tt<ct;Tt++){const yt=et[Tt],wt=Math.floor(yt.start/4),xt=Math.ceil(yt.count/4),Lt=wt%v.width,N=Math.floor(wt/v.width),gt=xt,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Lt),e.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,Lt,N,gt,nt,I,L,v.data)}P.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,X),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(n.UNPACK_SKIP_ROWS,St)}}function Ct(P,v,I){let L=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(L=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(L=n.TEXTURE_3D);const W=tt(P,v),et=v.source;e.bindTexture(L,P.__webglTexture,n.TEXTURE0+I);const ot=i.get(et);if(et.version!==ot.__version||W===!0){if(e.activeTexture(n.TEXTURE0+I),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const nt=fe.getPrimaries(fe.workingColorSpace),bt=v.colorSpace===_i?null:fe.getPrimaries(v.colorSpace),At=v.colorSpace===_i||nt===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=m(v.image,!1,s.maxTextureSize);Q=me(v,Q);const St=r.convert(v.format,v.colorSpace),Tt=r.convert(v.type);let ct=x(v.internalFormat,St,Tt,v.normalized,v.colorSpace,v.isVideoTexture);Dt(L,v);let yt;const wt=v.mipmaps,xt=v.isVideoTexture!==!0,Lt=ot.__version===void 0||W===!0,N=et.dataReady,gt=E(v,Q);if(v.isDepthTexture)ct=w(v.format===Ni,v.type),Lt&&(xt?e.texStorage2D(n.TEXTURE_2D,1,ct,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,ct,Q.width,Q.height,0,St,Tt,null));else if(v.isDataTexture)if(wt.length>0){xt&&Lt&&e.texStorage2D(n.TEXTURE_2D,gt,ct,wt[0].width,wt[0].height);for(let nt=0,bt=wt.length;nt<bt;nt++)yt=wt[nt],xt?N&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,yt.width,yt.height,St,Tt,yt.data):e.texImage2D(n.TEXTURE_2D,nt,ct,yt.width,yt.height,0,St,Tt,yt.data);v.generateMipmaps=!1}else xt?(Lt&&e.texStorage2D(n.TEXTURE_2D,gt,ct,Q.width,Q.height),N&&dt(v,Q,St,Tt)):e.texImage2D(n.TEXTURE_2D,0,ct,Q.width,Q.height,0,St,Tt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){xt&&Lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,ct,wt[0].width,wt[0].height,Q.depth);for(let nt=0,bt=wt.length;nt<bt;nt++)if(yt=wt[nt],v.format!==Pn)if(St!==null)if(xt){if(N)if(v.layerUpdates.size>0){const At=Vh(yt.width,yt.height,v.format,v.type);for(const lt of v.layerUpdates){const zt=yt.data.subarray(lt*At/yt.data.BYTES_PER_ELEMENT,(lt+1)*At/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,lt,yt.width,yt.height,1,St,zt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,yt.width,yt.height,Q.depth,St,yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,ct,yt.width,yt.height,Q.depth,0,yt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,yt.width,yt.height,Q.depth,St,Tt,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,ct,yt.width,yt.height,Q.depth,0,St,Tt,yt.data)}else{xt&&Lt&&e.texStorage2D(n.TEXTURE_2D,gt,ct,wt[0].width,wt[0].height);for(let nt=0,bt=wt.length;nt<bt;nt++)yt=wt[nt],v.format!==Pn?St!==null?xt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,yt.width,yt.height,St,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,ct,yt.width,yt.height,0,yt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?N&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,yt.width,yt.height,St,Tt,yt.data):e.texImage2D(n.TEXTURE_2D,nt,ct,yt.width,yt.height,0,St,Tt,yt.data)}else if(v.isDataArrayTexture)if(xt){if(Lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,ct,Q.width,Q.height,Q.depth),N)if(v.layerUpdates.size>0){const nt=Vh(Q.width,Q.height,v.format,v.type);for(const bt of v.layerUpdates){const At=Q.data.subarray(bt*nt/Q.data.BYTES_PER_ELEMENT,(bt+1)*nt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,bt,Q.width,Q.height,1,St,Tt,At)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,St,Tt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ct,Q.width,Q.height,Q.depth,0,St,Tt,Q.data);else if(v.isData3DTexture)xt?(Lt&&e.texStorage3D(n.TEXTURE_3D,gt,ct,Q.width,Q.height,Q.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,St,Tt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,ct,Q.width,Q.height,Q.depth,0,St,Tt,Q.data);else if(v.isFramebufferTexture){if(Lt)if(xt)e.texStorage2D(n.TEXTURE_2D,gt,ct,Q.width,Q.height);else{let nt=Q.width,bt=Q.height;for(let At=0;At<gt;At++)e.texImage2D(n.TEXTURE_2D,At,ct,nt,bt,0,St,Tt,null),nt>>=1,bt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),Q.parentNode!==nt){nt.appendChild(Q),p.add(v),nt.onpaint=bt=>{const At=bt.changedElements;for(const lt of p)At.includes(lt.image)&&(lt.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{const At=n.RGBA,lt=n.RGBA,zt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,At,lt,zt,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(wt.length>0){if(xt&&Lt){const nt=se(wt[0]);e.texStorage2D(n.TEXTURE_2D,gt,ct,nt.width,nt.height)}for(let nt=0,bt=wt.length;nt<bt;nt++)yt=wt[nt],xt?N&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,St,Tt,yt):e.texImage2D(n.TEXTURE_2D,nt,ct,St,Tt,yt);v.generateMipmaps=!1}else if(xt){if(Lt){const nt=se(Q);e.texStorage2D(n.TEXTURE_2D,gt,ct,nt.width,nt.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Tt,Q)}else e.texImage2D(n.TEXTURE_2D,0,ct,St,Tt,Q);u(v)&&y(L),ot.__version=et.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Pt(P,v,I){if(v.image.length!==6)return;const L=tt(P,v),W=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+I);const et=i.get(W);if(W.version!==et.__version||L===!0){e.activeTexture(n.TEXTURE0+I);const ot=fe.getPrimaries(fe.workingColorSpace),X=v.colorSpace===_i?null:fe.getPrimaries(v.colorSpace),Q=v.colorSpace===_i||ot===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const St=v.isCompressedTexture||v.image[0].isCompressedTexture,Tt=v.image[0]&&v.image[0].isDataTexture,ct=[];for(let lt=0;lt<6;lt++)!St&&!Tt?ct[lt]=m(v.image[lt],!0,s.maxCubemapSize):ct[lt]=Tt?v.image[lt].image:v.image[lt],ct[lt]=me(v,ct[lt]);const yt=ct[0],wt=r.convert(v.format,v.colorSpace),xt=r.convert(v.type),Lt=x(v.internalFormat,wt,xt,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,gt=et.__version===void 0||L===!0,nt=W.dataReady;let bt=E(v,yt);Dt(n.TEXTURE_CUBE_MAP,v);let At;if(St){N&&gt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,Lt,yt.width,yt.height);for(let lt=0;lt<6;lt++){At=ct[lt].mipmaps;for(let zt=0;zt<At.length;zt++){const z=At[zt];v.format!==Pn?wt!==null?N?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,zt,0,0,z.width,z.height,wt,z.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,zt,Lt,z.width,z.height,0,z.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,zt,0,0,z.width,z.height,wt,xt,z.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,zt,Lt,z.width,z.height,0,wt,xt,z.data)}}}else{if(At=v.mipmaps,N&&gt){At.length>0&&bt++;const lt=se(ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,Lt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Tt){N?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,ct[lt].width,ct[lt].height,wt,xt,ct[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Lt,ct[lt].width,ct[lt].height,0,wt,xt,ct[lt].data);for(let zt=0;zt<At.length;zt++){const H=At[zt].image[lt].image;N?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,zt+1,0,0,H.width,H.height,wt,xt,H.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,zt+1,Lt,H.width,H.height,0,wt,xt,H.data)}}else{N?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,wt,xt,ct[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Lt,wt,xt,ct[lt]);for(let zt=0;zt<At.length;zt++){const z=At[zt];N?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,zt+1,0,0,wt,xt,z.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,zt+1,Lt,wt,xt,z.image[lt])}}}u(v)&&y(n.TEXTURE_CUBE_MAP),et.__version=W.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Ft(P,v,I,L,W,et){const ot=r.convert(I.format,I.colorSpace),X=r.convert(I.type),Q=x(I.internalFormat,ot,X,I.normalized,I.colorSpace),St=i.get(v),Tt=i.get(I);if(Tt.__renderTarget=v,!St.__hasExternalTextures){const ct=Math.max(1,v.width>>et),yt=Math.max(1,v.height>>et);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?e.texImage3D(W,et,Q,ct,yt,v.depth,0,ot,X,null):e.texImage2D(W,et,Q,ct,yt,0,ot,X,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),ee(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,L,W,Tt.__webglTexture,0,Kt(v)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,L,W,Tt.__webglTexture,et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Qt(P,v,I){if(n.bindRenderbuffer(n.RENDERBUFFER,P),v.depthBuffer){const L=v.depthTexture,W=L&&L.isDepthTexture?L.type:null,et=w(v.stencilBuffer,W),ot=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ee(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Kt(v),et,v.width,v.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt(v),et,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,et,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,P)}else{const L=v.textures;for(let W=0;W<L.length;W++){const et=L[W],ot=r.convert(et.format,et.colorSpace),X=r.convert(et.type),Q=x(et.internalFormat,ot,X,et.normalized,et.colorSpace);ee(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Kt(v),Q,v.width,v.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt(v),Q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Q,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Vt(P,v,I){const L=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=i.get(v.depthTexture);if(W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),L){if(W.__webglInit===void 0&&(W.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),W.__webglTexture===void 0){W.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,v.depthTexture);const St=r.convert(v.depthTexture.format),Tt=r.convert(v.depthTexture.type);let ct;v.depthTexture.format===ai?ct=n.DEPTH_COMPONENT24:v.depthTexture.format===Ni&&(ct=n.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ct,v.width,v.height,0,St,Tt,null)}}else it(v.depthTexture,0);const et=W.__webglTexture,ot=Kt(v),X=L?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,Q=v.depthTexture.format===Ni?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===ai)ee(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,X,et,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,Q,X,et,0);else if(v.depthTexture.format===Ni)ee(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,X,et,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,Q,X,et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(P){const v=i.get(P),I=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){const L=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),L){const W=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,L.removeEventListener("dispose",W)};L.addEventListener("dispose",W),v.__depthDisposeCallback=W}v.__boundDepthTexture=L}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(I)for(let L=0;L<6;L++)Vt(v.__webglFramebuffer[L],P,L);else{const L=P.texture.mipmaps;L&&L.length>0?Vt(v.__webglFramebuffer[0],P,0):Vt(v.__webglFramebuffer,P,0)}else if(I){v.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[L]),v.__webglDepthbuffer[L]===void 0)v.__webglDepthbuffer[L]=n.createRenderbuffer(),Qt(v.__webglDepthbuffer[L],P,!1);else{const W=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=v.__webglDepthbuffer[L];n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,et)}}else{const L=P.texture.mipmaps;if(L&&L.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Qt(v.__webglDepthbuffer,P,!1);else{const W=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,et)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(P,v,I){const L=i.get(P);v!==void 0&&Ft(L.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&at(P)}function vt(P){const v=P.texture,I=i.get(P),L=i.get(v);P.addEventListener("dispose",_);const W=P.textures,et=P.isWebGLCubeRenderTarget===!0,ot=W.length>1;if(ot||(L.__webglTexture===void 0&&(L.__webglTexture=n.createTexture()),L.__version=v.version,a.memory.textures++),et){I.__webglFramebuffer=[];for(let X=0;X<6;X++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[X]=[];for(let Q=0;Q<v.mipmaps.length;Q++)I.__webglFramebuffer[X][Q]=n.createFramebuffer()}else I.__webglFramebuffer[X]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let X=0;X<v.mipmaps.length;X++)I.__webglFramebuffer[X]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(ot)for(let X=0,Q=W.length;X<Q;X++){const St=i.get(W[X]);St.__webglTexture===void 0&&(St.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&ee(P)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let X=0;X<W.length;X++){const Q=W[X];I.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[X]);const St=r.convert(Q.format,Q.colorSpace),Tt=r.convert(Q.type),ct=x(Q.internalFormat,St,Tt,Q.normalized,Q.colorSpace,P.isXRRenderTarget===!0),yt=Kt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,ct,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,I.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Qt(I.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(et){e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,v);for(let X=0;X<6;X++)if(v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Ft(I.__webglFramebuffer[X][Q],P,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Q);else Ft(I.__webglFramebuffer[X],P,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);u(v)&&y(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let X=0,Q=W.length;X<Q;X++){const St=W[X],Tt=i.get(St);let ct=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ct=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,Tt.__webglTexture),Dt(ct,St),Ft(I.__webglFramebuffer,P,St,n.COLOR_ATTACHMENT0+X,ct,0),u(St)&&y(ct)}e.unbindTexture()}else{let X=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(X=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(X,L.__webglTexture),Dt(X,v),v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Ft(I.__webglFramebuffer[Q],P,v,n.COLOR_ATTACHMENT0,X,Q);else Ft(I.__webglFramebuffer,P,v,n.COLOR_ATTACHMENT0,X,0);u(v)&&y(X),e.unbindTexture()}P.depthBuffer&&at(P)}function It(P){const v=P.textures;for(let I=0,L=v.length;I<L;I++){const W=v[I];if(u(W)){const et=S(P),ot=i.get(W).__webglTexture;e.bindTexture(et,ot),y(et),e.unbindTexture()}}}const Rt=[],$t=[];function qt(P){if(P.samples>0){if(ee(P)===!1){const v=P.textures,I=P.width,L=P.height;let W=n.COLOR_BUFFER_BIT;const et=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=i.get(P),X=v.length>1;if(X)for(let St=0;St<v.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);const Q=P.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let St=0;St<v.length;St++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ot.__webglColorRenderbuffer[St]);const Tt=i.get(v[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Tt,0)}n.blitFramebuffer(0,0,I,L,0,0,I,L,W,n.NEAREST),l===!0&&(Rt.length=0,$t.length=0,Rt.push(n.COLOR_ATTACHMENT0+St),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Rt.push(et),$t.push(et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$t)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Rt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let St=0;St<v.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,ot.__webglColorRenderbuffer[St]);const Tt=i.get(v[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const v=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Kt(P){return Math.min(s.maxSamples,P.samples)}function ee(P){const v=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(P){const v=a.render.frame;d.get(P)!==v&&(d.set(P,v),P.update())}function me(P,v){const I=P.colorSpace,L=P.format,W=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||I!==_a&&I!==_i&&(fe.getTransfer(I)===Se?(L!==Pn||W!==vn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):he("WebGLTextures: Unsupported texture color space:",I)),v}function se(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=G,this.getTextureUnits=F,this.setTextureUnits=B,this.setTexture2D=it,this.setTexture2DArray=st,this.setTexture3D=ft,this.setTextureCube=ht,this.rebindTextures=ut,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=ee,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function hx(n,t){function e(i,s=_i){let r;const a=fe.getTransfer(s);if(i===vn)return n.UNSIGNED_BYTE;if(i===rc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ac)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$d)return n.BYTE;if(i===Zd)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===sc)return n.INT;if(i===Hn)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===ri)return n.HALF_FLOAT;if(i===Qd)return n.ALPHA;if(i===jd)return n.RGB;if(i===Pn)return n.RGBA;if(i===ai)return n.DEPTH_COMPONENT;if(i===Ni)return n.DEPTH_STENCIL;if(i===oc)return n.RED;if(i===lc)return n.RED_INTEGER;if(i===ki)return n.RG;if(i===cc)return n.RG_INTEGER;if(i===hc)return n.RGBA_INTEGER;if(i===aa||i===oa||i===la||i===ca)if(a===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===il||i===sl||i===rl||i===al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ol||i===ll||i===cl||i===hl||i===dl||i===ga||i===ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ol||i===ll)return a===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===hl)return r.COMPRESSED_R11_EAC;if(i===dl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ga)return r.COMPRESSED_RG11_EAC;if(i===ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fl||i===pl||i===ml||i===gl||i===vl||i===_l||i===xl||i===Ml||i===yl||i===Sl||i===bl||i===El||i===wl||i===Tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ml)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_l)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ml)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===El)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===Cl||i===Rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Al)return a===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pl||i===Il||i===va||i===Ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ux=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new du(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new bn({vertexShader:dx,fragmentShader:ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new rt(new In(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class px extends Xi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,p=null,h=null,f=null,g=null;const M=typeof XRWebGLBinding<"u",m=new fx,u={},y=e.getContextAttributes();let S=null,x=null;const w=[],E=[],A=new Et;let _=null;const b=new gn;b.viewport=new De;const C=new gn;C.viewport=new De;const R=[b,C],D=new E0;let G=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let pt=w[tt];return pt===void 0&&(pt=new lo,w[tt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(tt){let pt=w[tt];return pt===void 0&&(pt=new lo,w[tt]=pt),pt.getGripSpace()},this.getHand=function(tt){let pt=w[tt];return pt===void 0&&(pt=new lo,w[tt]=pt),pt.getHandSpace()};function B(tt){const pt=E.indexOf(tt.inputSource);if(pt===-1)return;const dt=w[pt];dt!==void 0&&(dt.update(tt.inputSource,tt.frame,c||a),dt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function Y(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",k);for(let tt=0;tt<w.length;tt++){const pt=E[tt];pt!==null&&(E[tt]=null,w[tt].disconnect(pt))}G=null,F=null,m.reset();for(const tt in u)delete u[tt];t.setRenderTarget(S),f=null,h=null,p=null,s=null,x=null,Dt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,i.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Ct=null,Pt=null;y.depth&&(Pt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=y.stencil?Ni:ai,Ct=y.stencil?lr:Hn);const Ft={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(Ft),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new Gn(h.textureWidth,h.textureHeight,{format:Pn,type:vn,depthTexture:new Rs(h.textureWidth,h.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const dt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Gn(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Dt.setContext(s),Dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(tt){for(let pt=0;pt<tt.removed.length;pt++){const dt=tt.removed[pt],Ct=E.indexOf(dt);Ct>=0&&(E[Ct]=null,w[Ct].disconnect(dt))}for(let pt=0;pt<tt.added.length;pt++){const dt=tt.added[pt];let Ct=E.indexOf(dt);if(Ct===-1){for(let Ft=0;Ft<w.length;Ft++)if(Ft>=E.length){E.push(dt),Ct=Ft;break}else if(E[Ft]===null){E[Ft]=dt,Ct=Ft;break}if(Ct===-1)break}const Pt=w[Ct];Pt&&Pt.connect(dt)}}const it=new O,st=new O;function ft(tt,pt,dt){it.setFromMatrixPosition(pt.matrixWorld),st.setFromMatrixPosition(dt.matrixWorld);const Ct=it.distanceTo(st),Pt=pt.projectionMatrix.elements,Ft=dt.projectionMatrix.elements,Qt=Pt[14]/(Pt[10]-1),Vt=Pt[14]/(Pt[10]+1),at=(Pt[9]+1)/Pt[5],ut=(Pt[9]-1)/Pt[5],vt=(Pt[8]-1)/Pt[0],It=(Ft[8]+1)/Ft[0],Rt=Qt*vt,$t=Qt*It,qt=Ct/(-vt+It),Kt=qt*-vt;if(pt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Kt),tt.translateZ(qt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Pt[10]===-1)tt.projectionMatrix.copy(pt.projectionMatrix),tt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const ee=Qt+qt,U=Vt+qt,me=Rt-Kt,se=$t+(Ct-Kt),P=at*Vt/U*ee,v=ut*Vt/U*ee;tt.projectionMatrix.makePerspective(me,se,P,v,ee,U),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function ht(tt,pt){pt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(pt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let pt=tt.near,dt=tt.far;m.texture!==null&&(m.depthNear>0&&(pt=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),D.near=C.near=b.near=pt,D.far=C.far=b.far=dt,(G!==D.near||F!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),G=D.near,F=D.far),D.layers.mask=tt.layers.mask|6,b.layers.mask=D.layers.mask&-5,C.layers.mask=D.layers.mask&-3;const Ct=tt.parent,Pt=D.cameras;ht(D,Ct);for(let Ft=0;Ft<Pt.length;Ft++)ht(Pt[Ft],Ct);Pt.length===2?ft(D,b,C):D.projectionMatrix.copy(b.projectionMatrix),_t(tt,D,Ct)};function _t(tt,pt,dt){dt===null?tt.matrix.copy(pt.matrixWorld):(tt.matrix.copy(dt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(pt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(pt.projectionMatrix),tt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=hr*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(tt){l=tt,h!==null&&(h.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(tt){return u[tt]};let Xt=null;function Wt(tt,pt){if(d=pt.getViewerPose(c||a),g=pt,d!==null){const dt=d.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ct=!1;dt.length!==D.cameras.length&&(D.cameras.length=0,Ct=!0);for(let Vt=0;Vt<dt.length;Vt++){const at=dt[Vt];let ut=null;if(f!==null)ut=f.getViewport(at);else{const It=p.getViewSubImage(h,at);ut=It.viewport,Vt===0&&(t.setRenderTargetTextures(x,It.colorTexture,It.depthStencilTexture),t.setRenderTarget(x))}let vt=R[Vt];vt===void 0&&(vt=new gn,vt.layers.enable(Vt),vt.viewport=new De,R[Vt]=vt),vt.matrix.fromArray(at.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(at.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(ut.x,ut.y,ut.width,ut.height),Vt===0&&(D.matrix.copy(vt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ct===!0&&D.cameras.push(vt)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const Vt=p.getDepthInformation(dt[0]);Vt&&Vt.isValid&&Vt.texture&&m.init(Vt,s.renderState)}if(Pt&&Pt.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let Vt=0;Vt<dt.length;Vt++){const at=dt[Vt].camera;if(at){let ut=u[at];ut||(ut=new du,u[at]=ut);const vt=p.getCameraImage(at);ut.sourceTexture=vt}}}}for(let dt=0;dt<w.length;dt++){const Ct=E[dt],Pt=w[dt];Ct!==null&&Pt!==void 0&&Pt.update(Ct,pt,c||a)}Xt&&Xt(tt,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),g=null}const Dt=new Tu;Dt.setAnimationLoop(Wt),this.setAnimationLoop=function(tt){Xt=tt},this.dispose=function(){}}}const mx=new Me,Du=new ie;Du.set(-1,0,0,0,1,0,0,0,1);function gx(n,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Mu(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,y,S,x){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(m,u):u.isMeshLambertMaterial?(r(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(m,u),p(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(m,u),h(m,u),u.isMeshPhysicalMaterial&&f(m,u,x)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),M(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,y,S):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===cn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===cn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const y=t.get(u),S=y.envMap,x=y.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(mx.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Du),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,y,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=S*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===cn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function M(m,u){const y=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vx(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,w){const E=w.program;i.uniformBlockBinding(x,E)}function c(x,w){let E=s[x.id];E===void 0&&(m(x),E=d(x),s[x.id]=E,x.addEventListener("dispose",y));const A=w.program;i.updateUBOMapping(x,A);const _=t.render.frame;r[x.id]!==_&&(h(x),r[x.id]=_)}function d(x){const w=p();x.__bindingPointIndex=w;const E=n.createBuffer(),A=x.__size,_=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,E),E}function p(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return he("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const w=s[x.id],E=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let _=0,b=E.length;_<b;_++){const C=E[_];if(Array.isArray(C))for(let R=0,D=C.length;R<D;R++)f(C[R],_,R,A);else f(C,_,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,w,E,A){if(M(x,w,E,A)===!0){const _=x.__offset,b=x.value;if(Array.isArray(b)){let C=0;for(let R=0;R<b.length;R++){const D=b[R],G=u(D);g(D,x.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,x.__data)}}function g(x,w,E){typeof x=="number"||typeof x=="boolean"?w[0]=x:x.isMatrix3?(w[0]=x.elements[0],w[1]=x.elements[1],w[2]=x.elements[2],w[3]=0,w[4]=x.elements[3],w[5]=x.elements[4],w[6]=x.elements[5],w[7]=0,w[8]=x.elements[6],w[9]=x.elements[7],w[10]=x.elements[8],w[11]=0):ArrayBuffer.isView(x)?w.set(new x.constructor(x.buffer,x.byteOffset,w.length)):x.toArray(w,E)}function M(x,w,E,A){const _=x.value,b=w+"_"+E;if(A[b]===void 0)return typeof _=="number"||typeof _=="boolean"?A[b]=_:ArrayBuffer.isView(_)?A[b]=_.slice():A[b]=_.clone(),!0;{const C=A[b];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(x){const w=x.uniforms;let E=0;const A=16;for(let b=0,C=w.length;b<C;b++){const R=Array.isArray(w[b])?w[b]:[w[b]];for(let D=0,G=R.length;D<G;D++){const F=R[D],B=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,k=B.length;Y<k;Y++){const it=B[Y],st=u(it),ft=E%A,ht=ft%st.boundary,_t=ft+ht;E+=ht,_t!==0&&A-_t<st.storage&&(E+=A-_t),F.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=st.storage}}}const _=E%A;return _>0&&(E+=A-_),x.__size=E,x.__cache={},this}function u(x){const w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(w.boundary=16,w.storage=x.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",x),w}function y(x){const w=x.target;w.removeEventListener("dispose",y);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function S(){for(const x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:S}}const _x=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Un=null;function xx(){return Un===null&&(Un=new lu(_x,16,16,ki,ri),Un.name="DFG_LUT",Un.minFilter=nn,Un.magFilter=nn,Un.wrapS=ti,Un.wrapT=ti,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class Fu{constructor(t={}){const{canvas:e=Hf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:f=vn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const M=f,m=new Set([hc,cc,lc]),u=new Set([vn,Hn,or,lr,rc,ac]),y=new Uint32Array(4),S=new Int32Array(4),x=new O;let w=null,E=null;const A=[],_=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let R=!1,D=null,G=null,F=null,B=null;this._outputColorSpace=_e;let Y=0,k=0,it=null,st=-1,ft=null;const ht=new De,_t=new De;let Xt=null;const Wt=new Ht(0);let Dt=0,tt=e.width,pt=e.height,dt=1,Ct=null,Pt=null;const Ft=new De(0,0,tt,pt),Qt=new De(0,0,tt,pt);let Vt=!1;const at=new vc;let ut=!1,vt=!1;const It=new Me,Rt=new O,$t=new De,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function ee(){return it===null?dt:1}let U=i;function me(T,V){return e.getContext(T,V)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ic}`),e.addEventListener("webglcontextlost",H,!1),e.addEventListener("webglcontextrestored",q,!1),e.addEventListener("webglcontextcreationerror",Z,!1),U===null){const V="webgl2";if(U=me(V,T),U===null)throw me(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw he("WebGLRenderer: "+T.message),T}let se,P,v,I,L,W,et,ot,X,Q,St,Tt,ct,yt,wt,xt,Lt,N,gt,nt,bt,At,lt;function zt(){se=new xv(U),se.init(),bt=new hx(U,se),P=new dv(U,se,t,bt),v=new lx(U,se),P.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),G=U.createFramebuffer(),F=U.createFramebuffer(),B=U.createFramebuffer(),I=new Sv(U),L=new $_,W=new cx(U,se,v,L,P,bt,I),et=new _v(C),ot=new T0(U),At=new cv(U,ot),X=new Mv(U,ot,I,At),Q=new Ev(U,X,ot,At,I),N=new bv(U,P,W),wt=new uv(L),St=new Y_(C,et,se,P,At,wt),Tt=new gx(C,L),ct=new J_,yt=new nx(se),Lt=new lv(C,et,v,Q,g,l),xt=new ox(C,Q,P),lt=new vx(U,I,P,v),gt=new hv(U,se,I),nt=new yv(U,se,I),I.programs=St.programs,C.capabilities=P,C.extensions=se,C.properties=L,C.renderLists=ct,C.shadowMap=xt,C.state=v,C.info=I}zt(),M!==vn&&(b=new Tv(M,e.width,e.height,o,s,r));const z=new px(C,U);this.xr=z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(T){T!==void 0&&(dt=T,this.setSize(tt,pt,!1))},this.getSize=function(T){return T.set(tt,pt)},this.setSize=function(T,V,j=!0){if(z.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=T,pt=V,e.width=Math.floor(T*dt),e.height=Math.floor(V*dt),j===!0&&(e.style.width=T+"px",e.style.height=V+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(tt*dt,pt*dt).floor()},this.setDrawingBufferSize=function(T,V,j){tt=T,pt=V,dt=j,e.width=Math.floor(T*j),e.height=Math.floor(V*j),this.setViewport(0,0,T,V)},this.setEffects=function(T){if(M===vn){he("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let V=0;V<T.length;V++)if(T[V].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ht)},this.getViewport=function(T){return T.copy(Ft)},this.setViewport=function(T,V,j,$){T.isVector4?Ft.set(T.x,T.y,T.z,T.w):Ft.set(T,V,j,$),v.viewport(ht.copy(Ft).multiplyScalar(dt).round())},this.getScissor=function(T){return T.copy(Qt)},this.setScissor=function(T,V,j,$){T.isVector4?Qt.set(T.x,T.y,T.z,T.w):Qt.set(T,V,j,$),v.scissor(_t.copy(Qt).multiplyScalar(dt).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(T){v.setScissorTest(Vt=T)},this.setOpaqueSort=function(T){Ct=T},this.setTransparentSort=function(T){Pt=T},this.getClearColor=function(T){return T.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,j=!0){let $=0;if(T){let J=!1;if(it!==null){const Bt=it.texture.format;J=m.has(Bt)}if(J){const Bt=it.texture.type,Gt=u.has(Bt),Nt=Lt.getClearColor(),Yt=Lt.getClearAlpha(),Zt=Nt.r,re=Nt.g,le=Nt.b;Gt?(y[0]=Zt,y[1]=re,y[2]=le,y[3]=Yt,U.clearBufferuiv(U.COLOR,0,y)):(S[0]=Zt,S[1]=re,S[2]=le,S[3]=Yt,U.clearBufferiv(U.COLOR,0,S))}else $|=U.COLOR_BUFFER_BIT}V&&($|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){e.removeEventListener("webglcontextlost",H,!1),e.removeEventListener("webglcontextrestored",q,!1),e.removeEventListener("webglcontextcreationerror",Z,!1),Lt.dispose(),ct.dispose(),yt.dispose(),L.dispose(),et.dispose(),Q.dispose(),At.dispose(),lt.dispose(),St.dispose(),z.dispose(),z.removeEventListener("sessionstart",oi),z.removeEventListener("sessionend",Os),qn.stop()};function H(T){T.preventDefault(),ya("WebGLRenderer: Context Lost."),R=!0}function q(){ya("WebGLRenderer: Context Restored."),R=!1;const T=I.autoReset,V=xt.enabled,j=xt.autoUpdate,$=xt.needsUpdate,J=xt.type;zt(),I.autoReset=T,xt.enabled=V,xt.autoUpdate=j,xt.needsUpdate=$,xt.type=J}function Z(T){he("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ot(T){const V=T.target;V.removeEventListener("dispose",Ot),ne(V)}function ne(T){ye(T),L.remove(T)}function ye(T){const V=L.get(T).programs;V!==void 0&&(V.forEach(function(j){St.releaseProgram(j)}),T.isShaderMaterial&&St.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,j,$,J,Bt){V===null&&(V=qt);const Gt=J.isMesh&&J.matrixWorld.determinantAffine()<0,Nt=lf(T,V,j,$,J);v.setMaterial($,Gt);let Yt=j.index,Zt=1;if($.wireframe===!0){if(Yt=X.getWireframeAttribute(j),Yt===void 0)return;Zt=2}const re=j.drawRange,le=j.attributes.position;let Jt=re.start*Zt,we=(re.start+re.count)*Zt;Bt!==null&&(Jt=Math.max(Jt,Bt.start*Zt),we=Math.min(we,(Bt.start+Bt.count)*Zt)),Yt!==null?(Jt=Math.max(Jt,0),we=Math.min(we,Yt.count)):le!=null&&(Jt=Math.max(Jt,0),we=Math.min(we,le.count));const ze=we-Jt;if(ze<0||ze===1/0)return;At.setup(J,$,Nt,j,Yt);let Be,Ae=gt;if(Yt!==null&&(Be=ot.get(Yt),Ae=nt,Ae.setIndex(Be)),J.isMesh)$.wireframe===!0?(v.setLineWidth($.wireframeLinewidth*ee()),Ae.setMode(U.LINES)):Ae.setMode(U.TRIANGLES);else if(J.isLine){let Je=$.linewidth;Je===void 0&&(Je=1),v.setLineWidth(Je*ee()),J.isLineSegments?Ae.setMode(U.LINES):J.isLineLoop?Ae.setMode(U.LINE_LOOP):Ae.setMode(U.LINE_STRIP)}else J.isPoints?Ae.setMode(U.POINTS):J.isSprite&&Ae.setMode(U.TRIANGLES);if(J.isBatchedMesh)if(se.get("WEBGL_multi_draw"))Ae.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Je=J._multiDrawStarts,kt=J._multiDrawCounts,fn=J._multiDrawCount,ge=Yt?ot.get(Yt).bytesPerElement:1,_n=L.get($).currentProgram.getUniforms();for(let Dn=0;Dn<fn;Dn++)_n.setValue(U,"_gl_DrawID",Dn),Ae.render(Je[Dn]/ge,kt[Dn])}else if(J.isInstancedMesh)Ae.renderInstances(Jt,ze,J.count);else if(j.isInstancedBufferGeometry){const Je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,kt=Math.min(j.instanceCount,Je);Ae.renderInstances(Jt,ze,kt)}else Ae.render(Jt,ze)};function Pe(T,V,j){T.transparent===!0&&T.side===en&&T.forceSinglePass===!1?(T.side=cn,T.needsUpdate=!0,Mr(T,V,j),T.side=Si,T.needsUpdate=!0,Mr(T,V,j),T.side=en):Mr(T,V,j)}this.compile=function(T,V,j=null){j===null&&(j=T),E=yt.get(j),E.init(V),_.push(E),j.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(E.pushLight(J),J.castShadow&&E.pushShadow(J))}),T!==j&&T.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(E.pushLight(J),J.castShadow&&E.pushShadow(J))}),E.setupLights();const $=new Set;return T.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Bt=J.material;if(Bt)if(Array.isArray(Bt))for(let Gt=0;Gt<Bt.length;Gt++){const Nt=Bt[Gt];Pe(Nt,j,J),$.add(Nt)}else Pe(Bt,j,J),$.add(Bt)}),E=_.pop(),$},this.compileAsync=function(T,V,j=null){const $=this.compile(T,V,j);return new Promise(J=>{function Bt(){if($.forEach(function(Gt){L.get(Gt).currentProgram.isReady()&&$.delete(Gt)}),$.size===0){J(T);return}setTimeout(Bt,10)}se.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Oe=null;function un(T){Oe&&Oe(T)}function oi(){qn.stop()}function Os(){qn.start()}const qn=new Tu;qn.setAnimationLoop(un),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(T){Oe=T,z.setAnimationLoop(T),T===null?qn.stop():qn.start()},z.addEventListener("sessionstart",oi),z.addEventListener("sessionend",Os),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){he("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(T,V);const j=z.enabled===!0&&z.isPresenting===!0,$=b!==null&&(it===null||j)&&b.begin(C,it);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(z.cameraAutoUpdate===!0&&z.updateCamera(V),V=z.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,V,it),E=yt.get(T,_.length),E.init(V),E.state.textureUnits=W.getTextureUnits(),_.push(E),It.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),at.setFromProjectionMatrix(It,Bn,V.reversedDepth),vt=this.localClippingEnabled,ut=wt.init(this.clippingPlanes,vt),w=ct.get(T,A.length),w.init(),A.push(w),z.enabled===!0&&z.isPresenting===!0){const Gt=C.xr.getDepthSensingMesh();Gt!==null&&to(Gt,V,-1/0,C.sortObjects)}to(T,V,0,C.sortObjects),w.finish(),C.sortObjects===!0&&w.sort(Ct,Pt,V.reversedDepth),Kt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Kt&&Lt.addToRenderList(w,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&wt.beginShadows();const J=E.state.shadowsArray;if(xt.render(J,T,V),ut===!0&&wt.endShadows(),($&&b.hasRenderPass())===!1){const Gt=w.opaque,Nt=w.transmissive;if(E.setupLights(),V.isArrayCamera){const Yt=V.cameras;if(Nt.length>0)for(let Zt=0,re=Yt.length;Zt<re;Zt++){const le=Yt[Zt];Xc(Gt,Nt,T,le)}Kt&&Lt.render(T);for(let Zt=0,re=Yt.length;Zt<re;Zt++){const le=Yt[Zt];Wc(w,T,le,le.viewport)}}else Nt.length>0&&Xc(Gt,Nt,T,V),Kt&&Lt.render(T),Wc(w,T,V)}it!==null&&k===0&&(W.updateMultisampleRenderTarget(it),W.updateRenderTargetMipmap(it)),$&&b.end(C),T.isScene===!0&&T.onAfterRender(C,T,V),At.resetDefaultState(),st=-1,ft=null,_.pop(),_.length>0?(E=_[_.length-1],W.setTextureUnits(E.state.textureUnits),ut===!0&&wt.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,D!==null&&D.renderEnd()};function to(T,V,j,$){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||at.intersectsSprite(T)){$&&$t.setFromMatrixPosition(T.matrixWorld).applyMatrix4(It);const Gt=Q.update(T),Nt=T.material;Nt.visible&&w.push(T,Gt,Nt,j,$t.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||at.intersectsObject(T))){const Gt=Q.update(T),Nt=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$t.copy(T.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),$t.copy(Gt.boundingSphere.center)),$t.applyMatrix4(T.matrixWorld).applyMatrix4(It)),Array.isArray(Nt)){const Yt=Gt.groups;for(let Zt=0,re=Yt.length;Zt<re;Zt++){const le=Yt[Zt],Jt=Nt[le.materialIndex];Jt&&Jt.visible&&w.push(T,Gt,Jt,j,$t.z,le)}}else Nt.visible&&w.push(T,Gt,Nt,j,$t.z,null)}}const Bt=T.children;for(let Gt=0,Nt=Bt.length;Gt<Nt;Gt++)to(Bt[Gt],V,j,$)}function Wc(T,V,j,$){const{opaque:J,transmissive:Bt,transparent:Gt}=T;E.setupLightsView(j),ut===!0&&wt.setGlobalState(C.clippingPlanes,j),$&&v.viewport(ht.copy($)),J.length>0&&xr(J,V,j),Bt.length>0&&xr(Bt,V,j),Gt.length>0&&xr(Gt,V,j),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Xc(T,V,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[$.id]===void 0){const Jt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[$.id]=new Gn(1,1,{generateMipmaps:!0,type:Jt?ri:vn,minFilter:Ui,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace})}const Bt=E.state.transmissionRenderTarget[$.id],Gt=$.viewport||ht;Bt.setSize(Gt.z*C.transmissionResolutionScale,Gt.w*C.transmissionResolutionScale);const Nt=C.getRenderTarget(),Yt=C.getActiveCubeFace(),Zt=C.getActiveMipmapLevel();C.setRenderTarget(Bt),C.getClearColor(Wt),Dt=C.getClearAlpha(),Dt<1&&C.setClearColor(16777215,.5),C.clear(),Kt&&Lt.render(j);const re=C.toneMapping;C.toneMapping=zn;const le=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),E.setupLightsView($),ut===!0&&wt.setGlobalState(C.clippingPlanes,$),xr(T,j,$),W.updateMultisampleRenderTarget(Bt),W.updateRenderTargetMipmap(Bt),se.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let we=0,ze=V.length;we<ze;we++){const Be=V[we],{object:Ae,geometry:Je,material:kt,group:fn}=Be;if(kt.side===en&&Ae.layers.test($.layers)){const ge=kt.side;kt.side=cn,kt.needsUpdate=!0,qc(Ae,j,$,Je,kt,fn),kt.side=ge,kt.needsUpdate=!0,Jt=!0}}Jt===!0&&(W.updateMultisampleRenderTarget(Bt),W.updateRenderTargetMipmap(Bt))}C.setRenderTarget(Nt,Yt,Zt),C.setClearColor(Wt,Dt),le!==void 0&&($.viewport=le),C.toneMapping=re}function xr(T,V,j){const $=V.isScene===!0?V.overrideMaterial:null;for(let J=0,Bt=T.length;J<Bt;J++){const Gt=T[J],{object:Nt,geometry:Yt,group:Zt}=Gt;let re=Gt.material;re.allowOverride===!0&&$!==null&&(re=$),Nt.layers.test(j.layers)&&qc(Nt,V,j,Yt,re,Zt)}}function qc(T,V,j,$,J,Bt){T.onBeforeRender(C,V,j,$,J,Bt),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(C,V,j,$,T,Bt),J.transparent===!0&&J.side===en&&J.forceSinglePass===!1?(J.side=cn,J.needsUpdate=!0,C.renderBufferDirect(j,V,$,J,T,Bt),J.side=Si,J.needsUpdate=!0,C.renderBufferDirect(j,V,$,J,T,Bt),J.side=en):C.renderBufferDirect(j,V,$,J,T,Bt),T.onAfterRender(C,V,j,$,J,Bt)}function Mr(T,V,j){V.isScene!==!0&&(V=qt);const $=L.get(T),J=E.state.lights,Bt=E.state.shadowsArray,Gt=J.state.version,Nt=St.getParameters(T,J.state,Bt,V,j,E.state.lightProbeGridArray),Yt=St.getProgramCacheKey(Nt);let Zt=$.programs;$.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,$.fog=V.fog;const re=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;$.envMap=et.get(T.envMap||$.environment,re),$.envMapRotation=$.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Zt===void 0&&(T.addEventListener("dispose",Ot),Zt=new Map,$.programs=Zt);let le=Zt.get(Yt);if(le!==void 0){if($.currentProgram===le&&$.lightsStateVersion===Gt)return $c(T,Nt),le}else Nt.uniforms=St.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,j,Nt),T.onBeforeCompile(Nt,C),le=St.acquireProgram(Nt,Yt),Zt.set(Yt,le),$.uniforms=Nt.uniforms;const Jt=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Jt.clippingPlanes=wt.uniform),$c(T,Nt),$.needsLights=hf(T),$.lightsStateVersion=Gt,$.needsLights&&(Jt.ambientLightColor.value=J.state.ambient,Jt.lightProbe.value=J.state.probe,Jt.directionalLights.value=J.state.directional,Jt.directionalLightShadows.value=J.state.directionalShadow,Jt.spotLights.value=J.state.spot,Jt.spotLightShadows.value=J.state.spotShadow,Jt.rectAreaLights.value=J.state.rectArea,Jt.ltc_1.value=J.state.rectAreaLTC1,Jt.ltc_2.value=J.state.rectAreaLTC2,Jt.pointLights.value=J.state.point,Jt.pointLightShadows.value=J.state.pointShadow,Jt.hemisphereLights.value=J.state.hemi,Jt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Jt.spotLightMatrix.value=J.state.spotLightMatrix,Jt.spotLightMap.value=J.state.spotLightMap,Jt.pointShadowMatrix.value=J.state.pointShadowMatrix),$.lightProbeGrid=E.state.lightProbeGridArray.length>0,$.currentProgram=le,$.uniformsList=null,le}function Yc(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=ha.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function $c(T,V){const j=L.get(T);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.batchingColor=V.batchingColor,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function of(T,V){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(V.matrixWorld);for(let j=0,$=T.length;j<$;j++){const J=T[j];if(J.texture!==null&&J.boundingBox.containsPoint(x))return J}return null}function lf(T,V,j,$,J){V.isScene!==!0&&(V=qt),W.resetTextureUnits();const Bt=V.fog,Gt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?V.environment:null,Nt=it===null?C.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:fe.workingColorSpace,Yt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Zt=et.get($.envMap||Gt,Yt),re=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,le=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Jt=!!j.morphAttributes.position,we=!!j.morphAttributes.normal,ze=!!j.morphAttributes.color;let Be=zn;$.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Be=C.toneMapping);const Ae=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Je=Ae!==void 0?Ae.length:0,kt=L.get($),fn=E.state.lights;if(ut===!0&&(vt===!0||T!==ft)){const Ie=T===ft&&$.id===st;wt.setState($,T,Ie)}let ge=!1;$.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==fn.state.version||kt.outputColorSpace!==Nt||J.isBatchedMesh&&kt.batching===!1||!J.isBatchedMesh&&kt.batching===!0||J.isBatchedMesh&&kt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&kt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&kt.instancing===!1||!J.isInstancedMesh&&kt.instancing===!0||J.isSkinnedMesh&&kt.skinning===!1||!J.isSkinnedMesh&&kt.skinning===!0||J.isInstancedMesh&&kt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&kt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&kt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&kt.instancingMorph===!1&&J.morphTexture!==null||kt.envMap!==Zt||$.fog===!0&&kt.fog!==Bt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==wt.numPlanes||kt.numIntersection!==wt.numIntersection)||kt.vertexAlphas!==re||kt.vertexTangents!==le||kt.morphTargets!==Jt||kt.morphNormals!==we||kt.morphColors!==ze||kt.toneMapping!==Be||kt.morphTargetsCount!==Je||!!kt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,kt.__version=$.version);let _n=kt.currentProgram;ge===!0&&(_n=Mr($,V,J),D&&$.isNodeMaterial&&D.onUpdateProgram($,_n,kt));let Dn=!1,li=!1,Ji=!1;const Ce=_n.getUniforms(),ke=kt.uniforms;if(v.useProgram(_n.program)&&(Dn=!0,li=!0,Ji=!0),$.id!==st&&(st=$.id,li=!0),kt.needsLights){const Ie=of(E.state.lightProbeGridArray,J);kt.lightProbeGrid!==Ie&&(kt.lightProbeGrid=Ie,li=!0)}if(Dn||ft!==T){v.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ce.setValue(U,"projectionMatrix",T.projectionMatrix),Ce.setValue(U,"viewMatrix",T.matrixWorldInverse);const hi=Ce.map.cameraPosition;hi!==void 0&&hi.setValue(U,Rt.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&Ce.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ce.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),ft!==T&&(ft=T,li=!0,Ji=!0)}if(kt.needsLights&&(fn.state.directionalShadowMap.length>0&&Ce.setValue(U,"directionalShadowMap",fn.state.directionalShadowMap,W),fn.state.spotShadowMap.length>0&&Ce.setValue(U,"spotShadowMap",fn.state.spotShadowMap,W),fn.state.pointShadowMap.length>0&&Ce.setValue(U,"pointShadowMap",fn.state.pointShadowMap,W)),J.isSkinnedMesh){Ce.setOptional(U,J,"bindMatrix"),Ce.setOptional(U,J,"bindMatrixInverse");const Ie=J.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),Ce.setValue(U,"boneTexture",Ie.boneTexture,W))}J.isBatchedMesh&&(Ce.setOptional(U,J,"batchingTexture"),Ce.setValue(U,"batchingTexture",J._matricesTexture,W),Ce.setOptional(U,J,"batchingIdTexture"),Ce.setValue(U,"batchingIdTexture",J._indirectTexture,W),Ce.setOptional(U,J,"batchingColorTexture"),J._colorsTexture!==null&&Ce.setValue(U,"batchingColorTexture",J._colorsTexture,W));const ci=j.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&N.update(J,j,_n),(li||kt.receiveShadow!==J.receiveShadow)&&(kt.receiveShadow=J.receiveShadow,Ce.setValue(U,"receiveShadow",J.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&V.environment!==null&&(ke.envMapIntensity.value=V.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=xx()),li){if(Ce.setValue(U,"toneMappingExposure",C.toneMappingExposure),kt.needsLights&&cf(ke,Ji),Bt&&$.fog===!0&&Tt.refreshFogUniforms(ke,Bt),Tt.refreshMaterialUniforms(ke,$,dt,pt,E.state.transmissionRenderTarget[T.id]),kt.needsLights&&kt.lightProbeGrid){const Ie=kt.lightProbeGrid;ke.probesSH.value=Ie.texture,ke.probesMin.value.copy(Ie.boundingBox.min),ke.probesMax.value.copy(Ie.boundingBox.max),ke.probesResolution.value.copy(Ie.resolution)}ha.upload(U,Yc(kt),ke,W)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ha.upload(U,Yc(kt),ke,W),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ce.setValue(U,"center",J.center),Ce.setValue(U,"modelViewMatrix",J.modelViewMatrix),Ce.setValue(U,"normalMatrix",J.normalMatrix),Ce.setValue(U,"modelMatrix",J.matrixWorld),$.uniformsGroups!==void 0){const Ie=$.uniformsGroups;for(let hi=0,Ki=Ie.length;hi<Ki;hi++){const Zc=Ie[hi];lt.update(Zc,_n),lt.bind(Zc,_n)}}return _n}function cf(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function hf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(T,V,j){const $=L.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),L.get(T.texture).__webglTexture=V,L.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){const j=L.get(T);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,j=0){it=T,Y=V,k=j;let $=null,J=!1,Bt=!1;if(T){const Nt=L.get(T);if(Nt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,Nt.__webglFramebuffer),ht.copy(T.viewport),_t.copy(T.scissor),Xt=T.scissorTest,v.viewport(ht),v.scissor(_t),v.setScissorTest(Xt),st=-1;return}else if(Nt.__webglFramebuffer===void 0)W.setupRenderTarget(T);else if(Nt.__hasExternalTextures)W.rebindTextures(T,L.get(T.texture).__webglTexture,L.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const re=T.depthTexture;if(Nt.__boundDepthTexture!==re){if(re!==null&&L.has(re)&&(T.width!==re.image.width||T.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(T)}}const Yt=T.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Bt=!0);const Zt=L.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Zt[V])?$=Zt[V][j]:$=Zt[V],J=!0):T.samples>0&&W.useMultisampledRTT(T)===!1?$=L.get(T).__webglMultisampledFramebuffer:Array.isArray(Zt)?$=Zt[j]:$=Zt,ht.copy(T.viewport),_t.copy(T.scissor),Xt=T.scissorTest}else ht.copy(Ft).multiplyScalar(dt).floor(),_t.copy(Qt).multiplyScalar(dt).floor(),Xt=Vt;if(j!==0&&($=G),v.bindFramebuffer(U.FRAMEBUFFER,$)&&v.drawBuffers(T,$),v.viewport(ht),v.scissor(_t),v.setScissorTest(Xt),J){const Nt=L.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Nt.__webglTexture,j)}else if(Bt){const Nt=V;for(let Yt=0;Yt<T.textures.length;Yt++){const Zt=L.get(T.textures[Yt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Yt,Zt.__webglTexture,j,Nt)}}else if(T!==null&&j!==0){const Nt=L.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Nt.__webglTexture,j)}st=-1},this.readRenderTargetPixels=function(T,V,j,$,J,Bt,Gt,Nt=0){if(!(T&&T.isWebGLRenderTarget)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=L.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Gt!==void 0&&(Yt=Yt[Gt]),Yt){v.bindFramebuffer(U.FRAMEBUFFER,Yt);try{const Zt=T.textures[Nt],re=Zt.format,le=Zt.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Nt),!P.textureFormatReadable(re)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(le)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-$&&j>=0&&j<=T.height-J&&U.readPixels(V,j,$,J,bt.convert(re),bt.convert(le),Bt)}finally{const Zt=it!==null?L.get(it).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(T,V,j,$,J,Bt,Gt,Nt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=L.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Gt!==void 0&&(Yt=Yt[Gt]),Yt)if(V>=0&&V<=T.width-$&&j>=0&&j<=T.height-J){v.bindFramebuffer(U.FRAMEBUFFER,Yt);const Zt=T.textures[Nt],re=Zt.format,le=Zt.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Nt),!P.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Jt),U.bufferData(U.PIXEL_PACK_BUFFER,Bt.byteLength,U.STREAM_READ),U.readPixels(V,j,$,J,bt.convert(re),bt.convert(le),0);const we=it!==null?L.get(it).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,we);const ze=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Wf(U,ze,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Jt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Bt),U.deleteBuffer(Jt),U.deleteSync(ze),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,j=0){const $=Math.pow(2,-j),J=Math.floor(T.image.width*$),Bt=Math.floor(T.image.height*$),Gt=V!==null?V.x:0,Nt=V!==null?V.y:0;W.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,Gt,Nt,J,Bt),v.unbindTexture()},this.copyTextureToTexture=function(T,V,j=null,$=null,J=0,Bt=0){let Gt,Nt,Yt,Zt,re,le,Jt,we,ze;const Be=T.isCompressedTexture?T.mipmaps[Bt]:T.image;if(j!==null)Gt=j.max.x-j.min.x,Nt=j.max.y-j.min.y,Yt=j.isBox3?j.max.z-j.min.z:1,Zt=j.min.x,re=j.min.y,le=j.isBox3?j.min.z:0;else{const ke=Math.pow(2,-J);Gt=Math.floor(Be.width*ke),Nt=Math.floor(Be.height*ke),T.isDataArrayTexture?Yt=Be.depth:T.isData3DTexture?Yt=Math.floor(Be.depth*ke):Yt=1,Zt=0,re=0,le=0}$!==null?(Jt=$.x,we=$.y,ze=$.z):(Jt=0,we=0,ze=0);const Ae=bt.convert(V.format),Je=bt.convert(V.type);let kt;V.isData3DTexture?(W.setTexture3D(V,0),kt=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(W.setTexture2DArray(V,0),kt=U.TEXTURE_2D_ARRAY):(W.setTexture2D(V,0),kt=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const fn=v.getParameter(U.UNPACK_ROW_LENGTH),ge=v.getParameter(U.UNPACK_IMAGE_HEIGHT),_n=v.getParameter(U.UNPACK_SKIP_PIXELS),Dn=v.getParameter(U.UNPACK_SKIP_ROWS),li=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,Be.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Be.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Zt),v.pixelStorei(U.UNPACK_SKIP_ROWS,re),v.pixelStorei(U.UNPACK_SKIP_IMAGES,le);const Ji=T.isDataArrayTexture||T.isData3DTexture,Ce=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){const ke=L.get(T),ci=L.get(V),Ie=L.get(ke.__renderTarget),hi=L.get(ci.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,Ie.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Ki=0;Ki<Yt;Ki++)Ji&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,L.get(T).__webglTexture,J,le+Ki),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,L.get(V).__webglTexture,Bt,ze+Ki)),U.blitFramebuffer(Zt,re,Gt,Nt,Jt,we,Gt,Nt,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(J!==0||T.isRenderTargetTexture||L.has(T)){const ke=L.get(T),ci=L.get(V);v.bindFramebuffer(U.READ_FRAMEBUFFER,F),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let Ie=0;Ie<Yt;Ie++)Ji?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ke.__webglTexture,J,le+Ie):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ke.__webglTexture,J),Ce?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ci.__webglTexture,Bt,ze+Ie):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ci.__webglTexture,Bt),J!==0?U.blitFramebuffer(Zt,re,Gt,Nt,Jt,we,Gt,Nt,U.COLOR_BUFFER_BIT,U.NEAREST):Ce?U.copyTexSubImage3D(kt,Bt,Jt,we,ze+Ie,Zt,re,Gt,Nt):U.copyTexSubImage2D(kt,Bt,Jt,we,Zt,re,Gt,Nt);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ce?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(kt,Bt,Jt,we,ze,Gt,Nt,Yt,Ae,Je,Be.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(kt,Bt,Jt,we,ze,Gt,Nt,Yt,Ae,Be.data):U.texSubImage3D(kt,Bt,Jt,we,ze,Gt,Nt,Yt,Ae,Je,Be):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Bt,Jt,we,Gt,Nt,Ae,Je,Be.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Bt,Jt,we,Be.width,Be.height,Ae,Be.data):U.texSubImage2D(U.TEXTURE_2D,Bt,Jt,we,Gt,Nt,Ae,Je,Be);v.pixelStorei(U.UNPACK_ROW_LENGTH,fn),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge),v.pixelStorei(U.UNPACK_SKIP_PIXELS,_n),v.pixelStorei(U.UNPACK_SKIP_ROWS,Dn),v.pixelStorei(U.UNPACK_SKIP_IMAGES,li),Bt===0&&V.generateMipmaps&&U.generateMipmap(kt),v.unbindTexture()},this.initRenderTarget=function(T){L.get(T).__webglFramebuffer===void 0&&W.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?W.setTextureCube(T,0):T.isData3DTexture?W.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?W.setTexture2DArray(T,0):W.setTexture2D(T,0),v.unbindTexture()},this.resetState=function(){Y=0,k=0,it=null,v.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}}const Uu={},Us=[{id:"main",name:"Vibe coding",en:"",icon:"✧",focus:[0,22,-68],cam:{dist:116,theta:0,phi:1.16},tag:"",lines:[]},{id:"theater",name:"Internship Experience",en:"",icon:"◉",focus:[146,14,-50],cam:{dist:96,theta:-.9,phi:1.08},tag:"",lines:[]},{id:"library",name:"Virtual IP & Photography",en:"",icon:"❋",focus:[-146,14,-50],cam:{dist:92,theta:.95,phi:1.08},tag:"",lines:[]},{id:"dorm",name:"Campus Activities",en:"",icon:"❖",focus:[84,10,100],cam:{dist:104,theta:-.6,phi:1.1},tag:"",lines:[]},{id:"assembly",name:"About me",en:"",icon:"◈",focus:[-92,12,158],cam:{dist:78,theta:.18,phi:1.24},tag:"",lines:[]}],Mx=[{id:"day",label:"白天"},{id:"dusk",label:"黄昏"},{id:"night",label:"夜晚"}],Mt={wallPink:"#F6D4D3",wallPinkDeep:"#EBB9BB",stone:"#FAF3E6",stoneDeep:"#E7DAC2",roof:"#95A7C2",roofDeep:"#7D8FAE",gold:"#EFC862",goldDeep:"#C99B36",glass:"#A8DDE1",brick:"#BE6C59",copper:"#8FC9B2",pave:"#EFE6D4",grass:"#AFD49B",grassDeep:"#8FBF87",water:"#9FD3E0",darkStone:"#414965"},yx=270,Sx=155,Nu=Array.from({length:10},(n,t)=>{const e=-Math.PI/2+t*Math.PI/5,i=t%2===0?yx:Sx;return[Math.cos(e)*i,Math.sin(e)*i]}),xs=Nu.filter((n,t)=>t!==5),bx=Nu.filter((n,t)=>t%2===0);function jn(n,t,e=0){const i=e?xs.map(([r,a])=>{const o=Math.hypot(r,a);return[r*(1-e/o),a*(1-e/o)]}):xs;let s=!1;for(let r=0,a=i.length-1;r<i.length;a=r++){const[o,l]=i[r],[c,d]=i[a];l>t!=d>t&&n<(c-o)*(t-l)/(d-l)+o&&(s=!s)}return s}function K(n,t={}){return new pe({color:n,roughness:.85,metalness:.02,envMapIntensity:.18,...t})}function mt(n,t,e,i,s=0,r=0,a=0,o=0){const l=new rt(new Ye(n,t,e),i);return l.position.set(s,r,a),l.rotation.y=o,l.castShadow=!0,l.receiveShadow=!0,l}function xe(n,t,e,i,s,r=0,a=0,o=0){const l=new rt(new Re(n,t,e,i),s);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,l}function Aa(n,t,e,i){const s=new Oi(.5,e,4,1);s.rotateY(Math.PI/4),s.scale(n*Math.SQRT2,1,t*Math.SQRT2);const r=new rt(s,i);return r.castShadow=!0,r.receiveShadow=!0,r}function bc(n,t,e,i){const s=new yn;s.moveTo(-t/2,0),s.lineTo(t/2,0),s.lineTo(0,e),s.lineTo(-t/2,0);const r=new Vn(s,{depth:n,bevelEnabled:!1});r.rotateY(Math.PI/2),r.translate(-n/2,0,0);const a=new rt(r,i);return a.castShadow=!0,a.receiveShadow=!0,a}function Wl(n,t,e=5){const i=new yn;for(let s=0;s<e*2;s++){const r=s%2===0?n:t,a=s/(e*2)*Math.PI*2-Math.PI/2,o=Math.cos(a)*r,l=Math.sin(a)*r;s===0?i.moveTo(o,l):i.lineTo(o,l)}return i.closePath(),i}function on(n,t=.6){const e=new Vn(Wl(n,n*.42),{depth:t,bevelEnabled:!0,bevelSize:n*.06,bevelThickness:n*.06,bevelSegments:2});e.center();const i=new rt(e,K(Mt.gold,{metalness:.55,roughness:.28,emissive:"#8a6510",emissiveIntensity:.45,envMapIntensity:1.1}));return i.castShadow=!0,i}const dd=new Map;function mr(n){const t=JSON.stringify(n),e=dd.get(t);if(e)return e;const i=26,s=Math.max(64,Math.round(n.w*i)),r=Math.max(64,Math.round(n.h*i)),a=document.createElement("canvas");a.width=s,a.height=r;const o=a.getContext("2d"),l=document.createElement("canvas");l.width=s,l.height=r;const c=l.getContext("2d");o.fillStyle=n.wall,o.fillRect(0,0,s,r),o.globalAlpha=.16,o.fillStyle="#ffffff";for(let x=0;x<r;x+=i*1.15)o.fillRect(0,x,s,1.4);o.globalAlpha=.05,o.fillStyle="#B98A86";for(let x=0;x<220;x++){const w=Math.random()*s,E=Math.random()*r;o.fillRect(w,E,Math.random()*14+4,Math.random()*2+1)}o.globalAlpha=1,c.fillStyle="#000000",c.fillRect(0,0,s,r);const d=n.plinth===!1?0:r*.1;d&&(o.fillStyle=Mt.stoneDeep,o.fillRect(0,r-d,s,d),o.fillStyle="rgba(150,120,100,.16)",o.fillRect(0,r-d,s,3)),o.fillStyle=Mt.stone,o.fillRect(0,0,s,r*.075),o.fillStyle="rgba(150,120,100,.18)",o.fillRect(0,r*.075,s,2),o.fillStyle="rgba(250,243,230,.85)";for(let x=r*.09;x<r-d;x+=i*2.2){const w=i*1.5,E=i*1.1;o.fillRect(0,x,w,E),o.fillRect(s-w,x+E*.5,w,E)}const p=r*.075,h=r-d-r*.02,f=n.rows>0?(h-p)/n.rows:0,g=n.cols>0?s/n.cols:0,M=Math.min(g*.5,f*.6),m=f*.68;for(let x=0;n.cols>0&&n.rows>0&&x<n.rows;x++)for(let w=0;w<n.cols;w++){const E=g*(w+.5),A=p+f*x+(f-m)*.42,_=(b,C,R)=>{b.beginPath();const D=E-M/2,G=E+M/2,F=n.arched?M/2:0;b.moveTo(D,A+m),b.lineTo(D,A+F),F?b.arc(E,A+F,F,Math.PI,0):b.lineTo(D,A),b.lineTo(G,A+F),b.lineTo(G,A+m),b.closePath(),b.fillStyle=C,b.fill(),R&&(b.lineWidth=Math.max(2,M*.13),b.strokeStyle=R,b.stroke())};if(_(o,n.glass,Mt.stone),o.fillStyle="rgba(255,255,255,.42)",o.fillRect(E-M/2+3,A+m*.38,M*.34,3),o.fillStyle="rgba(90,70,60,.28)",o.fillRect(E-M/2,A+m*.5,M,2),o.fillStyle=Mt.stone,o.fillRect(E-M*.62,A+m,M*1.24,Math.max(3,i*.16)),Math.random()>.32){const b=Math.random()>.75?"#ffe9b0":"#ffd88a";_(c,b,null)}}const u=new He(a),y=new He(l);u.colorSpace=_e,y.colorSpace=_e,u.anisotropy=4;const S={map:u,glow:y};return dd.set(t,S),S}function Ca(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.clearRect(0,0,512,512);const i=512/2,s=512/2,r=["#8FD3D8","#B7A8DE","#F2B9C6","#9AD3B2","#F2D79A","#8FB8E0"];e.fillStyle="#EDE6F2",e.beginPath(),e.arc(i,s,512*.48,0,Math.PI*2),e.fill();for(let o=0;o<3;o++){const l=512*(.16+o*.11),c=512*(.25+o*.11),d=8+o*4;for(let p=0;p<d;p++){const h=p/d*Math.PI*2,f=(p+1)/d*Math.PI*2;e.beginPath(),e.arc(i,s,c,h+.02,f-.02),e.arc(i,s,l,f-.02,h+.02,!0),e.closePath(),e.fillStyle=r[(p+o)%r.length],e.fill(),e.strokeStyle="rgba(90,80,70,.55)",e.lineWidth=3,e.stroke()}}e.save(),e.translate(i,s),e.fillStyle="#E4BA4F",e.beginPath();for(let o=0;o<10;o++){const l=o%2===0?76.8:31.744,c=o/10*Math.PI*2-Math.PI/2;o===0?e.moveTo(Math.cos(c)*l,Math.sin(c)*l):e.lineTo(Math.cos(c)*l,Math.sin(c)*l)}e.closePath(),e.fill(),e.strokeStyle="#B98C2C",e.lineWidth=4,e.stroke(),e.restore();const a=new He(t);return a.colorSpace=_e,a}function Ex(n){const i=document.createElement("canvas");i.width=256,i.height=512;const s=i.getContext("2d"),r=s.createLinearGradient(0,0,0,512);r.addColorStop(0,"#F0E2B4"),r.addColorStop(.5,"#E4BA4F"),r.addColorStop(1,"#C79A34"),s.fillStyle=r,s.fillRect(0,0,256,512),s.strokeStyle="rgba(120,88,20,.65)",s.lineWidth=6,s.strokeRect(10,10,236,492),s.save(),s.translate(256/2,512*.42),s.strokeStyle="rgba(120,88,20,.55)",s.lineWidth=5;for(let o=0;o<7;o++){s.beginPath();const l=30+o*14;s.ellipse(0,0,l,l*(.6+(n+o)%3*.12),o*.5+n,0,Math.PI*1.6),s.stroke()}s.fillStyle="rgba(255,250,225,.85)",s.beginPath();for(let o=0;o<10;o++){const l=o%2===0?46:19,c=o/10*Math.PI*2-Math.PI/2;o===0?s.moveTo(Math.cos(c)*l,Math.sin(c)*l):s.lineTo(Math.cos(c)*l,Math.sin(c)*l)}s.closePath(),s.fill(),s.restore();const a=new He(i);return a.colorSpace=_e,a}function wx(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle=Mt.pave,e.fillRect(0,0,512,512);const i=64;for(let r=0;r<512;r+=i)for(let a=0;a<512;a+=i){const o=r/i%2?i/2:0;e.fillStyle=`rgba(${200+Math.random()*30|0},${188+Math.random()*30|0},${164+Math.random()*26|0},.5)`,e.fillRect(a+o,r,i-3,i-3),e.strokeStyle="rgba(150,138,116,.35)",e.lineWidth=1.5,e.strokeRect(a+o,r,i-3,i-3)}const s=new He(t);return s.wrapS=s.wrapT=zi,s.colorSpace=_e,s}function Tx(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle=Mt.grass,e.fillRect(0,0,256,256);for(let s=0;s<60;s++)e.globalAlpha=.16,e.fillStyle=["#C4E0AE","#9CC98F","#B7DCA6","#8FBF87"][s%4],e.beginPath(),e.ellipse(Math.random()*256,Math.random()*256,20+Math.random()*60,14+Math.random()*40,Math.random()*3,0,Math.PI*2),e.fill();e.globalAlpha=1;for(let s=0;s<2200;s++)e.fillStyle=Math.random()>.5?"rgba(140,190,130,.4)":"rgba(196,224,174,.4)",e.fillRect(Math.random()*256,Math.random()*256,3,5);const i=new He(t);return i.wrapS=i.wrapT=zi,i.colorSpace=_e,i}function An(n,t){const e=new ae,i=n.floorH??4.6,s=n.floors*i,r=n.wall??Mt.wallPink,a=n.cols??Math.max(3,Math.round(n.w/7.4)),o=Math.max(2,Math.round(n.d/7.4)),l=mr({w:n.w,h:s,cols:a,rows:n.floors,wall:r,trim:Mt.stone,glass:Mt.glass,arched:!0}),c=mr({w:n.d,h:s,cols:o,rows:n.floors,wall:r,trim:Mt.stone,glass:Mt.glass,arched:!0}),d=m=>{const u=K(r,{map:m.map,emissiveMap:m.glow,emissive:"#ffffff",emissiveIntensity:0});return t.glowMats.push(u),u},p=K(r),h=d(l),f=d(c),g=mt(n.w,s,n.d,[f,f,p,p,h,h],0,s/2,0);e.add(g),e.add(mt(n.w+1.6,1.1,n.d+1.6,K(Mt.stoneDeep),0,.55,0)),e.add(mt(n.w+1.4,.9,n.d+1.4,K(Mt.stone),0,s+.3,0));const M=K(Mt.roof,{roughness:.72});if(t.snowTargets.push({mat:M,base:M.color.clone()}),n.roofType==="gable"){const m=n.roofH??n.d*.42,u=bc(n.w+2.2,n.d+2.2,m,M);u.position.y=s+.75,e.add(u)}else if(n.roofType!=="flat"){const m=n.roofH??Math.min(n.d,n.w)*.34,u=Aa(n.w+2.2,n.d+2.2,m,M);u.position.y=s+.75+m/2,e.add(u)}for(const m of[-1,1])for(const u of[-1,1])e.add(mt(1.5,s,1.5,K(Mt.stone),m*n.w/2-m*.4,s/2,u*n.d/2-u*.4));if(n.roofType!=="flat"&&n.w>30&&(e.add(ud(-n.w*.3,s+1.5,0,5)),e.add(ud(n.w*.3,s+1.5,0,5))),n.dormers!==!1&&n.roofType!=="flat"){const m=Math.max(2,Math.floor(n.w/12));for(let u=0;u<m;u++){const y=-n.w/2+n.w/m*(u+.5),S=K(Mt.stone,{emissive:"#ffd88a",emissiveIntensity:0});t.glowMats.push(S),e.add(mt(2.4,2.2,2.4,S,y,s+2.6,n.d/2-1.2));const x=Aa(3.2,3.2,1.4,M);x.position.set(y,s+4.4,n.d/2-1.2),e.add(x)}}return e.position.set(n.x,0,n.z),e.rotation.y=n.ry??0,{group:e,height:s}}function jr(n,t,e){const i=new ae,s=K(Mt.stone),r=K(Mt.stoneDeep);for(let o=0;o<3;o++)i.add(mt(n+2-o*.8,.36,t+2.4-o*.7,r,0,.18+o*.36,t/2+1.6-o*.35));i.add(mt(n,1.1,t,s,0,1.55,0));const a=Math.max(2,Math.round(n/3.4));for(let o=0;o<a;o++){const l=-n/2+1.4+o*(n-2.8)/(a-1);i.add(xe(.42,.5,e,12,s,l,2.1+e/2,t/2-.8)),i.add(mt(1.3,.4,1.3,r,l,2.2,t/2-.8)),i.add(mt(1.2,.4,1.2,s,l,2.1+e,t/2-.8))}i.add(mt(n+1.2,.8,t+1.4,s,0,2.7+e,0)),i.add(mt(n+.4,.45,t+.6,r,0,3.2+e,0));for(const o of[-1,1])i.add(mt(.5,1.1,t,s,o*n/2-o*.25,2.65,0));return i}function ta(n,t,e,i){const s=new ae,r=K(Mt.stone);s.add(mt(n,.35,.7,r,0,1.45,0)),s.add(mt(n,.4,.9,K(Mt.stoneDeep),0,.2,0));const a=Math.max(2,Math.round(n/1.5));for(let o=0;o<=a;o++){const l=-n/2+o*n/a;s.add(xe(.16,.24,1.1,8,r,l,.85,0))}return s.position.set(t,0,e),s.rotation.y=i,s}function ud(n,t,e,i=5){const s=new ae;s.add(mt(1.5,i,1.4,K("#C99A93"),0,i/2,0)),s.add(mt(1.9,.4,1.8,K(Mt.stone),0,i+.2,0));for(const r of[-.35,.35])s.add(mt(.36,.5,.36,K("#8A7770"),r,i+.6,0));return s.position.set(n,t,e),s}function Ax(n){const t=new ae,e=20,i=44,s=mr({w:e,h:i,cols:0,rows:0,wall:Mt.wallPink,trim:Mt.stone,glass:Mt.glass,arched:!0,plinth:!1}),r=K(Mt.wallPink,{map:s.map}),a=[r,r,K(Mt.wallPink),K(Mt.wallPink),r,r],o=mt(e,i,16,a,0,i/2,0);o.receiveShadow=!1,t.add(o);const l=K(Mt.stone),c=K(Mt.stoneDeep);for(const _ of[-1,1])t.add(mt(1.6,i,1.6,l,_*e/2-_*.5,i/2,7.4)),t.add(mt(1.6,i,1.6,l,_*e/2-_*.5,i/2,-7.4)),t.add(mt(1.1,3,1.1,c,_*e/2-_*.5,i-2,8));for(const _ of[i*.24,i*.46,i*.78])t.add(mt(e+1,.7,17,l,0,_,0)),t.add(mt(e+1.5,.35,17.4,c,0,_-.5,0));const d=(_,b,C,R)=>{for(let D=0;D<b;D++){const G=-C/2+C*(D+.5)/b;t.add(mt(C/b*.5,.6,.7,l,G,_,R))}};d(i-1.4,18,e,8.3),d(i-1.4,18,e,-8.3);{const _=document.createElement("canvas");_.width=256,_.height=256;const b=_.getContext("2d");b.fillStyle="#8AB4DC",b.fillRect(0,0,256,256);for(let D=0;D<40;D++)b.globalAlpha=.05+Math.random()*.05,b.fillStyle=Math.random()>.5?"#6E9CC8":"#A8C8E8",b.fillRect(Math.random()*256,Math.random()*256,30+Math.random()*70,3+Math.random()*8);for(let D=0;D<300;D++)b.globalAlpha=.04+Math.random()*.06,b.fillStyle=Math.random()>.5?"#5E8CBC":"#C4DCF2",b.fillRect(Math.random()*256,Math.random()*256,2,2);b.globalAlpha=1;const C=new He(_);C.colorSpace=_e,C.wrapS=C.wrapT=zi,C.repeat.set(3,3);const R=new rt(new In(19.9,16.6),new pe({map:C,roughness:.92}));R.position.set(0,8.3,8.06),R.receiveShadow=!1,t.add(R)}const p=bc(e+1.5,17,9,K(Mt.wallPinkDeep));p.position.y=i,t.add(p);for(const _ of[-1,1]){const b=mt(1.2,.9,13.6,l,_*5.2,i+4.4,0);b.rotation.x=0,b.rotation.z=-_*.82,t.add(b)}t.add(mt(e+2.4,1,18,l,0,i+.2,0));const h=new rt(new Re(2.4,2.4,.5,24),c);h.rotation.x=Math.PI/2,h.position.set(0,i+4.4,8.6),t.add(h);const f=new rt(new Ze(2.5,.28,8,24),l);f.position.set(0,i+4.4,8.75),t.add(f);for(let _=0;_<6;_++){const b=_/6*Math.PI*2,C=new rt(new Te(.55,10,8),K(Mt.goldDeep,{metalness:.55,roughness:.4}));C.scale.set(1,1.5,.5),C.position.set(Math.cos(b)*1.35,i+4.4+Math.sin(b)*1.35,8.95),t.add(C)}const g=new rt(new tn(7.2,48),new pe({map:Ca(),emissiveMap:Ca(),emissive:"#ffffff",emissiveIntensity:.55,roughness:.25,metalness:.05}));g.position.set(0,i*.62,8.45),n.glowMats.push(g.material),t.add(g);const M=new rt(new Ze(7.4,.5,10,48),K(Mt.stone));M.position.copy(g.position),t.add(M);for(let _=0;_<12;_++){const b=_/12*Math.PI*2,C=mt(.34,6.6,.4,K(Mt.stone),0,0,0);C.position.set(Math.cos(b)*3.5,g.position.y+Math.sin(b)*3.5,8.45),C.rotation.z=b+Math.PI/2,t.add(C);const R=new rt(new Te(.42,8,6),K(Mt.stoneDeep));R.position.set(Math.cos(b)*7.4,g.position.y+Math.sin(b)*7.4,8.5),t.add(R)}const m=new rt(new Ze(3.6,.26,8,32),K(Mt.stone));m.position.set(0,g.position.y,8.5),t.add(m);const u=on(3.6,.9);u.position.set(0,i*.62,8.9),t.add(u);{const _=document.createElement("canvas");_.width=256,_.height=256;const b=_.getContext("2d"),C=b.createRadialGradient(128,170,20,128,150,200);C.addColorStop(0,"#FFF6DE"),C.addColorStop(.55,"#F9DCB2"),C.addColorStop(1,"#EBBA8C"),b.fillStyle=C,b.fillRect(0,0,256,256),b.fillStyle="rgba(200,150,110,.35)",b.beginPath(),b.moveTo(88,256),b.lineTo(88,120),b.arc(128,120,40,Math.PI,0),b.lineTo(168,256),b.closePath(),b.fill();const R=new He(_);R.colorSpace=_e;const D=new yn;D.moveTo(-3.7,0),D.lineTo(-3.7,5.1),D.absarc(0,5.1,3.7,Math.PI,0,!0),D.lineTo(3.7,0),D.closePath();const G=new rt(new bs(D,24),new Gi({map:R,fog:!1}));G.position.set(0,0,8.62),t.add(G)}const y=K("#FFF4E8",{roughness:.5}),S=K("#F5B9C5",{roughness:.55}),x=(_,b)=>{const C=_/2,R=new yn;return R.moveTo(-C,0),R.lineTo(-C,b),R.absarc(0,b,C,Math.PI,0,!0),R.lineTo(C,0),R.closePath(),R};[-1,1].forEach(_=>{const b=new ae;b.position.set(_*3.8,0,8.95);const C=new ae;C.add(mt(3.8,7.1,.55,y,-_*1.9,3.55,0)),C.add(mt(2.9,5.6,.08,S,-_*1.9,3.6,.59));const R=new rt(new Te(.24,16,12),K(Mt.gold,{metalness:.65,roughness:.35}));R.position.set(-_*3.05,4.2,.75),C.add(R),b.add(C),b.userData.openDir=-_,t.add(b),n.hallDoors.push(b)});{const _=new yn;_.moveTo(-3.29,0),_.lineTo(-3.29,-1.9),_.lineTo(-3.8,-1.9),_.absarc(0,-1.9,3.8,Math.PI,0,!0),_.lineTo(3.29,-1.9),_.lineTo(3.29,0),_.closePath();const b=new rt(new Vn(_,{depth:.5,bevelEnabled:!1}),y);b.position.set(0,7.1,8.95),t.add(b);const C=new yn;C.moveTo(-2.32,0),C.lineTo(-2.32,-1.9),C.lineTo(-3,-1.9),C.absarc(0,-1.9,3,Math.PI,0,!0),C.lineTo(2.32,-1.9),C.lineTo(2.32,0),C.closePath();const R=new rt(new Vn(C,{depth:.08,bevelEnabled:!1}),S);R.position.set(0,7.1,9.46),t.add(R)}{const _=x(9.2,5.6),b=x(7.6,5.2);_.holes.push(new Bl(b.getPoints(24)));const C=new Vn(_,{depth:.4,bevelEnabled:!1}),R=new rt(C,K(Mt.stone,{roughness:.85}));R.position.set(0,0,8.9),t.add(R)}t.add(mt(10.4,1.2,2.2,K(Mt.stone),0,10.1,9)),t.add(mt(11.2,.5,2.6,K(Mt.stoneDeep),0,9.35,9)),[-1,1].forEach(_=>t.add(mt(1.1,1.6,1.1,K(Mt.stoneDeep),_*4.4,8.6,8.6)));const w=xe(.15,3.6,14,4,K(Mt.roofDeep),0,i+14,0);w.rotation.y=Math.PI/4,t.add(w);const E=on(4.2,1.1);E.position.set(0,i+23,0),E.name="topStar",t.add(E);const A=on(2.6,.8);return A.rotation.z=Math.PI/2,A.position.set(0,i+23,0),t.add(A),[-11.5,11.5].forEach(_=>{t.add(mt(3.2,i+4,3.2,K(Mt.stoneDeep),_,(i+4)/2,0));const b=xe(.1,2.2,7,4,K(Mt.roofDeep),_,i+7.5,0);b.rotation.y=Math.PI/4,t.add(b)}),t}function Cx(n,t,e,i){const s=new ae,{group:r}=An({w:58,d:30,floors:4,x:0,z:0,roofType:"flat",cols:10},i);s.add(r);const a=4*4.6,o=xe(15,16,6,32,K(Mt.stone),0,a+3.2,0);s.add(o);const l=new rt(new Te(15,36,20,0,Math.PI*2,0,Math.PI/2),K(Mt.copper,{roughness:.5,metalness:.35}));l.position.y=a+6.2,l.castShadow=!0,s.add(l);for(let p=0;p<12;p++){const h=new rt(new Ze(15.05,.28,6,24,Math.PI/2),K(Mt.goldDeep,{metalness:.6,roughness:.4}));h.position.y=a+6.2,h.rotation.y=p/12*Math.PI*2,h.rotation.x=0,s.add(h)}const c=xe(3.2,3.6,4.4,16,K(Mt.stone),0,a+22,0);s.add(c);const d=on(3,.8);return d.position.set(0,a+27,0),s.add(d),s.position.set(n,0,t),s.rotation.y=e,s}function Rx(n){const t=new ae,e=K(Mt.brick,{roughness:.9}),i=K(Mt.stone),s=26,r=15;[-1,1].forEach(h=>{t.add(mt(6,r,6,e,h*10,r/2,0)),t.add(mt(7.2,1.4,7.2,i,h*10,r+.7,0)),t.add(mt(6.6,1,6.6,i,h*10,1,0))}),t.add(mt(s,6,5.4,K("#EFE4CB"),0,r-1.5,0)),t.add(mt(s+2.4,1.6,6.6,i,0,r+2.2,0));const a=new rt(new Ze(7.6,1.2,10,32,Math.PI),i);a.position.set(0,r-6.5,0),t.add(a);const o=new rt(new Ze(6.4,1.5,8,32,Math.PI),e);o.position.set(0,r-6.5,0),t.add(o);const l=K("#C79A88");[-1,1].forEach(h=>t.add(mt(1.4,r-6.5,4.4,l,h*7.1,(r-6.5)/2,0))),t.add(mt(11,5.2,.7,K("#A9D9C8"),0,r+.4,2.85)),t.add(mt(12.2,6.4,.4,i,0,r+.4,2.6));const c=on(3,.9);c.position.set(0,r+.4,3.5),t.add(c),n.lampMats.push(c.material),[-1,1].forEach(h=>{const f=new pe({color:"#FFF3D0",emissive:"#FFD98A",emissiveIntensity:0,roughness:.35});n.lampMats.push(f),t.add(mt(1.1,2.2,1.1,f,h*10,10.5,3.3)),t.add(mt(1.5,.4,1.5,K("#4A4A52"),h*10,11.8,3.35))});const d=(h,f)=>{const g=document.createElement("canvas");g.width=512,g.height=880;const M=g.getContext("2d");M.fillStyle="#FFF9F1",M.fillRect(0,0,512,880),f(M);const m=new He(g);m.colorSpace=_e,m.anisotropy=4;const u=new ae;u.add(mt(6.9,7.6,.5,K(Mt.gold,{metalness:.5,roughness:.42}),0,0,0)),u.add(mt(5.6,7,.55,K("#FFFBF2",{roughness:.8}),0,0,.02));const y=new rt(new In(5.36,7),new pe({map:m,roughness:.85}));return y.position.z=.3,u.add(y),u.position.set(h*13.35,11.2,0),u.rotation.y=h*Math.PI/2,u},p=(h,f,g,M,m)=>{h.fillStyle=m,h.beginPath();for(let u=0;u<10;u++){const y=-Math.PI/2+u*Math.PI/5,S=u%2?M*.42:M;h[u?"lineTo":"moveTo"](f+Math.cos(y)*S,g+Math.sin(y)*S)}h.closePath(),h.fill()};return t.add(d(-1,h=>{const f=h.createLinearGradient(0,0,0,880);f.addColorStop(0,"#DCEFFB"),f.addColorStop(1,"#FFF3E8"),h.fillStyle=f,h.fillRect(0,0,512,880),[[90,90],[400,70],[450,190],[70,250],[330,150],[440,330],[80,420]].forEach(([g,M])=>p(h,g,M,12,"#F5D68A")),[[200,300],[420,500],[120,560]].forEach(([g,M])=>p(h,g,M,8,"#F8CBD6")),h.fillStyle="#F5B9C5",[[256,280,125],[155,335,92],[357,335,95],[218,225,82],[302,215,72]].forEach(([g,M,m])=>{h.beginPath(),h.arc(g,M,m,0,7),h.fill()}),h.fillStyle="#F8CBD6",[[200,280,56],[312,300,62],[256,215,46]].forEach(([g,M,m])=>{h.beginPath(),h.arc(g,M,m,0,7),h.fill()}),h.fillStyle="#F0A0B0";for(let g=0;g<22;g++){const M=50+g*97%420,m=400+g*67%360;h.beginPath(),h.ellipse(M,m,8,5,g,0,7),h.fill()}h.strokeStyle="#8A5A44",h.lineWidth=22,h.lineCap="round",h.beginPath(),h.moveTo(256,380),h.quadraticCurveTo(238,540,256,720),h.stroke(),h.lineWidth=11,h.beginPath(),h.moveTo(250,480),h.quadraticCurveTo(198,430,166,420),h.stroke(),h.beginPath(),h.moveTo(258,560),h.quadraticCurveTo(300,520,330,512),h.stroke(),h.fillStyle="#BFDDBE",h.beginPath(),h.ellipse(256,800,250,80,0,Math.PI,0),h.fill(),h.fillStyle="#4A4A52",h.beginPath(),h.ellipse(330,730,36,23,0,0,7),h.fill(),h.beginPath(),h.arc(364,703,19,0,7),h.fill(),h.beginPath(),h.moveTo(351,692),h.lineTo(355,671),h.lineTo(364,689),h.fill(),h.beginPath(),h.moveTo(368,689),h.lineTo(377,672),h.lineTo(381,693),h.fill(),h.strokeStyle="#4A4A52",h.lineWidth=8,h.lineCap="round",h.beginPath(),h.moveTo(296,725),h.quadraticCurveTo(268,708,278,676),h.stroke(),h.fillStyle="#F5B9C5",h.beginPath(),h.arc(371,708,3.2,0,7),h.fill()})),t.add(d(1,h=>{const f=h.createLinearGradient(0,0,0,880);f.addColorStop(0,"#C9B9DF"),f.addColorStop(.55,"#A9D6DF"),f.addColorStop(1,"#DFF1F6"),h.fillStyle=f,h.fillRect(0,0,512,880),[[80,80],[430,60],[380,150],[120,180],[250,90],[460,250],[70,300],[400,380]].forEach(([g,M])=>p(h,g,M,12,"#FFF3D0")),[[180,260],[340,300],[110,420]].forEach(([g,M])=>p(h,g,M,8,"#F8CBD6")),h.fillStyle="#F5E3A8",h.beginPath(),h.arc(256,270,105,0,7),h.fill(),h.fillStyle="#B9A6D5",h.beginPath(),h.arc(296,238,88,0,7),h.fill(),h.fillStyle="#7FC2D6",h.beginPath(),h.moveTo(0,570);for(let g=0;g<=512;g+=32)h.quadraticCurveTo(g+16,556,g+32,570);h.lineTo(512,880),h.lineTo(0,880),h.closePath(),h.fill(),h.fillStyle="#A9D6DF",h.beginPath(),h.moveTo(0,640);for(let g=0;g<=512;g+=40)h.quadraticCurveTo(g+20,626,g+40,640);h.lineTo(512,880),h.lineTo(0,880),h.closePath(),h.fill(),h.fillStyle="rgba(245,227,168,.55)",h.beginPath(),h.ellipse(228,680,28,110,0,0,7),h.fill(),h.fillStyle="#FFF4EA",h.beginPath(),h.moveTo(175,558),h.lineTo(337,558),h.lineTo(303,610),h.lineTo(209,610),h.closePath(),h.fill(),h.fillStyle="#F0A0B0",h.beginPath(),h.moveTo(182,558),h.lineTo(330,558),h.lineTo(321,578),h.lineTo(191,578),h.closePath(),h.fill(),h.strokeStyle="#8A5A44",h.lineWidth=7,h.lineCap="round",h.beginPath(),h.moveTo(256,558),h.lineTo(256,420),h.stroke(),p(h,292,455,34,"#F5D68A"),h.fillStyle="#FFFFFF",h.beginPath(),h.ellipse(238,538,17,21,0,0,7),h.fill(),h.beginPath(),h.ellipse(230,508,5.5,15,-.15,0,7),h.fill(),h.beginPath(),h.ellipse(247,508,5.5,15,.15,0,7),h.fill(),h.fillStyle="#4A4A52",h.beginPath(),h.arc(234,534,2.2,0,7),h.fill(),h.beginPath(),h.arc(244,534,2.2,0,7),h.fill()})),[-1,1].forEach(h=>{const f=new ae;f.position.set(h*7,0,0);const g=new ae,M=K("#3A3A3C",{metalness:.6,roughness:.5});for(let u=0;u<8;u++)g.add(xe(.16,.16,8.5,6,M,-h*u*.85,4.3,0));g.add(mt(6.4,.3,.3,M,-h*3,8.4,0)),g.add(mt(6.4,.3,.3,K(Mt.gold,{metalness:.7,roughness:.35}),-h*3,6.2,0));const m=on(1.1,.3);m.position.set(-h*3,7.3,0),g.add(m),f.add(g),f.userData.openDir=-h,t.add(f),n.gateDoors.push(f)}),t}function Px(n,t,e,i){const s=new ae,r=K(Mt.darkStone,{roughness:.6,metalness:.15});s.add(mt(3.4,1.2,3.4,K(Mt.stoneDeep),0,.6,0)),s.add(mt(2.6,1,2.6,r,0,1.7,0));const a=xe(.55,1.5,e,8,r,0,2.2+e/2,0);s.add(a);const o=K(Mt.gold,{metalness:.75,roughness:.3,emissive:"#8a6a12",emissiveIntensity:0});i.lampMats.push(o),s.add(xe(.05,.6,2.6,8,o,0,2.2+e+1.3,0));const l=new rt(new Ze(1.2,.14,8,20),o);return l.rotation.x=Math.PI/2,l.position.y=2.2+e*.62,s.add(l),s.position.set(n,0,t),s}function ea(n,t,e,i,s){const r=new ae,a=K(Mt.stone),o=1.5;r.add(mt(e+o*2,.8,o,a,0,.4,i/2+o/2)),r.add(mt(e+o*2,.8,o,a,0,.4,-i/2-o/2)),r.add(mt(o,.8,i,a,e/2+o/2,.4,0)),r.add(mt(o,.8,i,a,-e/2-o/2,.4,0)),r.add(mt(e,.3,i,K("#5C7D8C"),0,.15,0));const l=new rt(new In(e,i,24,24),new pe({color:Mt.water,roughness:.04,metalness:.72,transparent:!0,opacity:.84,envMapIntensity:1.5}));return l.rotation.x=-Math.PI/2,l.position.y=.66,l.receiveShadow=!0,r.add(l),s.waters.push(l),r.position.set(n,0,t),r}function Ix(n,t,e){const i=new ae,s=K("#4A4A52",{metalness:.5,roughness:.5});i.add(xe(.22,.42,6.2,8,s,0,3.1,0)),i.add(mt(1.1,.5,1.1,s,0,.25,0));const r=new pe({color:"#FFF3D0",emissive:"#FFD98A",emissiveIntensity:0,roughness:.35});e.lampMats.push(r);const a=new rt(new Te(.72,14,12),r);return a.position.y=6.6,i.add(a),i.add(xe(.1,.5,.7,8,s,0,7.3,0)),i.position.set(n,0,t),i}function Lx(){const e=document.createElement("canvas");e.width=128,e.height=256;const i=e.getContext("2d");i.fillStyle="#CFEAF2",i.fillRect(0,0,128,256);for(let r=0;r<160;r++){i.strokeStyle=`rgba(255,255,255,${.15+Math.random()*.5})`,i.lineWidth=1+Math.random()*3;const a=Math.random()*128;i.beginPath(),i.moveTo(a,Math.random()*256),i.lineTo(a+(Math.random()-.5)*4,Math.random()*256),i.stroke()}for(let r=0;r<40;r++)i.fillStyle=`rgba(180,220,235,${.2+Math.random()*.3})`,i.fillRect(Math.random()*128,Math.random()*256,2+Math.random()*8,20+Math.random()*60);const s=new He(e);return s.wrapS=s.wrapT=zi,s.colorSpace=_e,s}function Dx(n,t,e,i){const s=new ae,r=K("#A9A49B",{roughness:1,flatShading:!0,envMapIntensity:.06}),a=K("#938E86",{roughness:1,flatShading:!0,envMapIntensity:.06}),o=K("#BCB6AA",{roughness:1,flatShading:!0,envMapIntensity:.06}),l=K("#88A87C",{roughness:1,flatShading:!0,envMapIntensity:.06}),c=(u,y,S,x,w,E,A,_=0)=>{const b=new rt(new xc(1,0),A);return b.scale.set(u,y,S),b.position.set(x,w,E),b.rotation.set(_*.21,_*.63,_*.17),b.castShadow=!0,b.receiveShadow=!0,s.add(b),b};for(let u=0;u<16;u++){const y=-Math.PI*.92+u/15*Math.PI*1.84,S=Math.abs(y+Math.PI/2)<.28,x=26+Math.sin(u*1.7)*3,w=S?9:16+Math.sin(u*2.3)*6+(Math.abs(y+Math.PI/2)<1?10:0);c(7+u%3*1.6,w/2,6+u%4,Math.cos(y)*x,w/2-1.5,Math.sin(y)*x-6,u%3===0?a:u%3===1?r:o,u)}c(16,17,11,-9,15,-34,a,3),c(13,21,10,8,18,-37,r,7),c(10,13,8,-20,11,-30,o,11),c(9,11,7,19,9,-29,a,5),c(7,8,6,0,26,-40,o,9);for(let u=0;u<12;u++){const y=Math.random()*Math.PI*2,S=1.6+Math.random()*3.4;c(S,S*.7,S,Math.cos(y)*(19+Math.random()*12),S*.4,-6+Math.sin(y)*(16+Math.random()*10),u%3===0?l:r,u)}const d=(u,y,S,x,w,E)=>{const A=Lx();A.repeat.set(u/10,y/14);const _=new pe({map:A,color:"#F0FBFF",transparent:!0,opacity:.9,roughness:.1,metalness:.3,emissive:"#9FDCE8",emissiveIntensity:.18,side:en});i.fallingWater.push(_);const b=new Re(E,E*1.06,y,18,1,!0,-u/E/2,u/E),C=new rt(b,_);C.position.set(S,x,w),C.rotation.y=Math.PI,s.add(C)};d(13,24,0,13,-27,9),d(8,12,-1,3.5,-20,6);const p=new rt(new tn(21,44),new pe({color:"#8FCADB",roughness:.04,metalness:.72,transparent:!0,opacity:.9,envMapIntensity:1.5}));p.rotation.x=-Math.PI/2,p.position.set(0,.6,-6),i.waters.push(p),s.add(p);const h=new rt(new $a(21,24,44),K("#C9C3B6",{roughness:1}));h.rotation.x=-Math.PI/2,h.position.set(0,.45,-6),h.receiveShadow=!0,s.add(h);for(let u=0;u<22;u++){const y=u/22*Math.PI*2,S=1+Math.random()*2.2;c(S,S*.6,S,Math.cos(y)*22.6,S*.3,Math.sin(y)*22.6-6,u%4===0?l:o,u)}const f=new rt(new tn(7.5,28),new pe({color:"#FFFFFF",transparent:!0,opacity:.55,roughness:.3,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.set(0,.72,-20),s.add(f);const g=new Ee,M=[];for(let u=0;u<300;u++){const y=Math.random()*Math.PI*2,S=Math.random()*9;M.push(Math.cos(y)*S,Math.random()*9,-20+Math.sin(y)*S)}g.setAttribute("position",new ue(M,3));const m=new Hi(g,new Vi({color:"#FFFFFF",size:1.4,transparent:!0,opacity:.55,depthWrite:!1}));return m.userData.kind="spray",i.jets.push(m),s.add(m),s.position.set(n,0,t),s.rotation.y=e,s}function Fx(n,t,e){const i=new ae,s=K("#D9DEDA",{roughness:.8}),r=K("#B9C2BE",{roughness:.85}),a=K("#93B7AE",{roughness:.5,metalness:.4}),o=xe(10,10.6,.8,8,r,0,.4,0),l=xe(8.6,9.2,.7,8,s,0,1.1,0);i.add(o,l);for(let f=0;f<8;f++){const g=f/8*Math.PI*2,M=Math.cos(g)*6.6,m=Math.sin(g)*6.6;i.add(xe(.45,.55,7.2,10,s,M,5.1,m)),i.add(mt(1.5,.5,1.5,r,M,1.6,m,g)),i.add(mt(1.4,.5,1.4,s,M,8.9,m,g));const u=(f+1)/8*Math.PI*2,y=(Math.cos(g)+Math.cos(u))/2*6.6,S=(Math.sin(g)+Math.sin(u))/2*6.6;if(f!==0&&f!==4){const x=mt(4.6,2.4,.4,r,y,2.6,S,-(g+u)/2+Math.PI/2);i.add(x)}}i.add(xe(7.6,7.6,1.6,8,s,0,9.9,0)),i.add(xe(7.9,7.9,.5,8,a,0,10.9,0));const c=new pe({color:"#BFE6E4",transparent:!0,opacity:.55,roughness:.08,metalness:.4,emissive:"#7FC6CC",emissiveIntensity:.08,side:en,envMapIntensity:1.2});e.glowMats.push(c);const d=new rt(new Oi(8,4.4,8),c);d.position.y=13.2,i.add(d);for(let f=0;f<8;f++){const g=f/8*Math.PI*2+Math.PI/8,M=mt(.28,4.7,.28,a,Math.cos(g)*3.9,13.2,Math.sin(g)*3.9);M.rotation.z=Math.cos(g)*.5,M.rotation.x=-Math.sin(g)*.5,i.add(M)}i.add(xe(2.2,2.6,1.2,8,a,0,15.6,0));const p=xe(.05,.8,7,8,a,0,19.8,0);i.add(p);const h=on(1.1,.4);return h.position.y=23.6,i.add(h),i.add(mt(6,.4,1.6,s,0,2.2,-3.4)),i.add(mt(.5,1.8,1.4,r,-2.4,1.3,-3.4)),i.add(mt(.5,1.8,1.4,r,2.4,1.3,-3.4)),[[-14,-14],[14,-14],[-14,14],[14,14]].forEach(([f,g])=>{const M=new pe({color:"#FFF3D0",emissive:"#FFD98A",emissiveIntensity:0,roughness:.35});e.lampMats.push(M),i.add(xe(.26,.6,9,8,K("#5A6470",{metalness:.4}),f,4.5,g)),i.add(mt(1.4,.8,1.4,K("#5A6470"),f,.4,g));const m=new rt(new Te(.6,12,10),M);m.position.set(f,9.4,g),i.add(m);const u=on(1.8,.35);u.position.set(f,10.8,g),u.rotation.y=Math.PI/5,i.add(u)}),i.position.set(n,0,t),i}function fd(n,t,e,i){const s=new ae,r=46,a=30,o=20,l=K("#F6EEDC"),c=K(Mt.wallPinkDeep),d=K("#7E9080"),p=mr({w:r*.5,h:o,cols:3,rows:3,wall:Mt.wallPinkDeep,trim:Mt.stone,glass:Mt.glass,arched:!0}),h=K(Mt.wallPinkDeep,{map:p.map,emissiveMap:p.glow,emissive:"#ffffff",emissiveIntensity:0});i.glowMats.push(h),s.add(mt(r*.5,o,a,[c,c,l,c,h,c],0,o/2,0));const f=mr({w:r*.28,h:o,cols:2,rows:3,wall:"#F1E7D2",trim:Mt.stone,glass:Mt.glass,arched:!1}),g=K("#F1E7D2",{map:f.map,emissiveMap:f.glow,emissive:"#ffffff",emissiveIntensity:0});i.glowMats.push(g),[-1,1].forEach(F=>{s.add(mt(r*.28,o-1.5,a*.92,[l,l,l,l,g,l],F*(r*.39),(o-1.5)/2,-.6))}),s.add(mt(r*.2,o-3,a*.7,d,r*.56,(o-3)/2,-2.4));const M=K(Mt.stone),m=K(Mt.stoneDeep);s.add(mt(r+2,1.1,a+2,M,0,o+.4,0)),s.add(mt(r+1,.7,a+1,M,0,o*.52,0)),s.add(mt(r+1.6,1.2,a+1.6,m,0,.6,0));for(let F=0;F<26;F++){const B=-r/2+r*(F+.5)/26;s.add(mt(r/26*.5,.55,.7,M,B,o-.7,a/2+.35))}for(const F of[-r*.26,-r*.09,r*.09,r*.26])s.add(mt(1.5,o-2,.9,M,F,(o-2)/2,a/2+.3)),s.add(mt(2.1,.7,1.3,m,F,o-2,a/2+.35)),s.add(mt(2.1,.8,1.3,m,F,.9,a/2+.35));for(const F of[-r*.175,0,r*.175]){const B=new rt(new Ze(1.9,.26,6,18,Math.PI),M);B.position.set(F,o*.66,a/2+.32),s.add(B),s.add(mt(.42,5.2,.55,M,F-1.9,o*.66-2.6,a/2+.32)),s.add(mt(.42,5.2,.55,M,F+1.9,o*.66-2.6,a/2+.32))}const u=new rt(new Re(r*.26,r*.26,1.6,24,1,!1,0,Math.PI),K("#F6EEDC"));u.rotation.x=Math.PI/2,u.position.set(0,o+1,a/2-.4),s.add(u),s.add(mt(r*.52,2.6,1.6,K("#F6EEDC"),0,o+2.2,a/2-.4));const y=K(Mt.gold,{metalness:.6,roughness:.32}),S=new rt(new Te(2.2,20,12,0,Math.PI*2,0,Math.PI/2),K("#9BB79F",{metalness:.4,roughness:.5}));S.rotation.x=Math.PI/2,S.position.set(0,o+3.6,a/2+.2),s.add(S);for(let F=0;F<7;F++){const B=Math.PI*(.12+F/6*.76),Y=new rt(new Te(.5,10,8),K("#A8C0A8",{metalness:.35,roughness:.55}));Y.scale.set(.6,2.4,.45),Y.position.set(Math.cos(B)*3.4,o+3.4+Math.sin(B)*1.6,a/2+.3),Y.rotation.z=B-Math.PI/2,s.add(Y)}const x=new rt(new Te(.9,14,12),K("#F3D7D2",{metalness:.3,roughness:.4}));x.position.set(0,o+4.9,a/2+.7),s.add(x);const w=on(2.6,.8);w.position.set(0,o+6.4,a/2+.5),s.add(w);for(let F=0;F<8;F++){const B=F/8*Math.PI*2,Y=mt(.24,2.4,.24,y,Math.cos(B)*3.4,o+6.4+Math.sin(B)*3.4,a/2+.4);Y.rotation.z=B+Math.PI/2,s.add(Y)}const E=mt(3.6,.7,.6,K("#9BB79F",{metalness:.4,roughness:.5}),-3,o+4.6,a/2+.4,.2),A=mt(3.6,.7,.6,K("#9BB79F",{metalness:.4,roughness:.5}),3,o+4.6,a/2+.4,-.2);s.add(E,A);const _=xe(.06,.3,7,6,K(Mt.gold,{metalness:.7,roughness:.3}),0,o+9,a/2+.3);s.add(_);const b=on(1.9,.5);b.position.set(0,o+12.4,a/2+.3),s.add(b);const C=new pe({color:"#FFFDF5",emissive:"#FFE9A8",emissiveIntensity:.2,roughness:.4});i.glowMats.push(C),s.add(mt(20,3.2,5,C,0,9.4,a/2+2.2)),s.add(mt(21,.7,5.6,K(Mt.stone),0,11.2,a/2+2.2)),s.add(mt(21,.7,5.6,K(Mt.stone),0,7.6,a/2+2.2));const R=on(1.7,.5);R.position.set(0,9.4,a/2+5),s.add(R);const D=new pe({color:"#CFE6E8",transparent:!0,opacity:.7,roughness:.15,metalness:.4,emissive:"#FFE6B0",emissiveIntensity:0});i.glowMats.push(D),s.add(mt(15,6.6,.5,D,0,3.3,a/2+.4));for(let F=-2;F<=2;F++)s.add(mt(.35,6.6,.7,K(Mt.goldDeep,{metalness:.6,roughness:.4}),F*3.6,3.3,a/2+.55));for(let F=0;F<3;F++)s.add(mt(20-F*1.2,.4,5-F,K(Mt.stone),0,.2+F*.4,a/2+4.6-F*.6));const G=Aa(r+2.5,a+2.5,5,K(Mt.roof));return G.position.y=o+3.4,s.add(G),s.position.set(n,0,t),s.rotation.y=e,s}function pd(n,t,e,i){const s=new ae,r=K("#E6E0D4",{roughness:.8}),a=K("#E9C7C4",{roughness:.7});s.add(xe(11,11.6,1.5,40,r,0,.75,0)),s.add(new rt(new Ze(11.2,.55,10,40),a)),s.children[1].rotation.x=Math.PI/2,s.children[1].position.y=1.6;const o=new rt(new tn(10.6,40),new pe({color:"#A8D8E4",roughness:.05,metalness:.68,transparent:!0,opacity:.88,envMapIntensity:1.5}));o.rotation.x=-Math.PI/2,o.position.y=1.25,i.waters.push(o),s.add(o),s.add(xe(1.5,2.2,3,16,r,0,2.6,0)),s.add(xe(2.2,1.2,1.6,16,r,0,4.6,0));const l=new rt(new Re(5.4,2.6,1.8,32,1,!0),K("#DED8CC",{side:en}));l.position.y=6.2,s.add(l),s.add(xe(5.4,5.4,.35,32,a,0,7.1,0));const c=new rt(new tn(5.1,32),new pe({color:"#A8D8E4",roughness:.05,metalness:.68,transparent:!0,opacity:.9,envMapIntensity:1.5}));c.rotation.x=-Math.PI/2,c.position.y=7.05,i.waters.push(c),s.add(c),s.add(xe(.5,.9,2.2,12,r,0,8.2,0));const d=new Ee,p=[],h=[];for(let g=0;g<380;g++){const M=g<120,m=Math.random()*Math.PI*2,u=M?Math.random()*.8:9.6;p.push(Math.cos(m)*u,Math.random()*8,Math.sin(m)*u),h.push(Math.random())}d.setAttribute("position",new ue(p,3));const f=new Hi(d,new Vi({color:"#F2FBFF",size:.62,transparent:!0,opacity:.85,depthWrite:!1}));return f.userData.kind="fountain",f.userData.phase=h,i.jets.push(f),s.add(f),s.position.set(n,0,t),s.scale.setScalar(e),s}function Ux(n,t,e){if(!t.length)return;const i=new Re(.3,.55,4.2,6);i.translate(0,2.1,0);const s=new Ya(1,0),r=K("#6E5148"),a=[K("#F7CBD8",{roughness:1,envMapIntensity:.08}),K("#FBDCE5",{roughness:1,envMapIntensity:.08}),K("#EFB8CC",{roughness:1,envMapIntensity:.08})];a.forEach(h=>e.snowTargets.push({mat:h,base:h.color.clone()}));const o=new dr(i,r,t.length);o.castShadow=!0;const l=5,c=a.map(h=>new dr(s,h,Math.ceil(t.length*l/a.length)+6));c.forEach(h=>{h.castShadow=!0,h.count=0});const d=new Ue,p=c.map(()=>0);t.forEach(([h,f,g],M)=>{d.position.set(h,0,f),d.scale.setScalar(g),d.rotation.y=Math.random()*Math.PI,d.updateMatrix(),o.setMatrixAt(M,d.matrix);for(let m=0;m<l;m++){const u=(M+m)%c.length,y=p[u]++;if(y>=c[u].instanceMatrix.count)continue;const S=m/l*Math.PI*2+Math.random(),x=m===0?0:2.4+Math.random()*1.8;d.position.set(h+Math.cos(S)*x*g,(4.6+(m===0?1.6:Math.random()*1.8))*g,f+Math.sin(S)*x*g),d.scale.setScalar((m===0?3.4:2.2+Math.random()*.9)*g),d.rotation.set(Math.random(),Math.random(),Math.random()),d.updateMatrix(),c[u].setMatrixAt(y,d.matrix)}}),o.instanceMatrix.needsUpdate=!0,c.forEach((h,f)=>{h.count=p[f],h.instanceMatrix.needsUpdate=!0}),n.add(o,...c)}function Nx(n,t){const e=new Re(.26,.42,3.2,6);e.translate(0,1.6,0);const i=new Ya(1,0),s=K("#8A6A54"),r=[K("#79B36B",{roughness:1,envMapIntensity:.08}),K("#8FC57C",{roughness:1,envMapIntensity:.08}),K("#649C60",{roughness:1,envMapIntensity:.08}),K("#A6CE8A",{roughness:1,envMapIntensity:.08})],a=new dr(e,s,t.length);a.castShadow=!0;const o=t.length*3,l=r.map(p=>new dr(i,p,Math.ceil(o/r.length)+4));l.forEach(p=>{p.castShadow=!0,p.count=0});const c=new Ue,d=l.map(()=>0);t.forEach(([p,h,f],g)=>{c.position.set(p,0,h),c.scale.setScalar(f),c.rotation.y=Math.random()*Math.PI,c.updateMatrix(),a.setMatrixAt(g,c.matrix);for(let M=0;M<3;M++){const m=(g+M)%l.length,u=d[m]++;u>=l[m].instanceMatrix.count||(c.position.set(p+(Math.random()-.5)*1.6*f,(3.4+M*1.5+Math.random())*f,h+(Math.random()-.5)*1.6*f),c.scale.setScalar((2.5-M*.5+Math.random()*.5)*f),c.rotation.set(Math.random(),Math.random(),Math.random()),c.updateMatrix(),l[m].setMatrixAt(u,c.matrix))}}),a.instanceMatrix.needsUpdate=!0,l.forEach((p,h)=>{p.count=d[h],p.instanceMatrix.needsUpdate=!0}),n.add(a,...l)}function Ox(){const n=new ae,t={root:n,hotspots:[],glowMats:[],lampMats:[],waters:[],banners:[],sakura:null,snowTargets:[],fallingWater:[],jets:[],gateDoors:[],hallDoors:[],obstacles:[],sconceSpots:[]},e=v=>(t.snowTargets.push({mat:v,base:v.color.clone()}),v),i=Tx();i.repeat.set(100,100);const s=new rt(new In(3e3,3e3),e(K(Mt.grass,{map:i})));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s);const r=wx();let a=0;const o=(v,I,L,W,et=0,ot=Mt.pave)=>{const X=r.clone();X.needsUpdate=!0,X.repeat.set(L/8,W/8);const Q=new rt(new In(L,W),e(K(ot,{map:X})));return Q.rotation.x=-Math.PI/2,Q.rotation.z=et,Q.position.set(v,.04+a++*.006,I),Q.receiveShadow=!0,n.add(Q),Q};o(0,120,32,200),o(0,20,172,108),o(0,-44,200,30),o(0,62,300,18),o(0,-100,250,16),o(0,176,250,18),o(-136,30,16,130),o(124,30,16,130),o(-166,-66,60,14),o(166,-66,60,14),o(-84,149,16,44),o(84,148,16,46),o(0,-128,14,62);const l=new rt(new tn(16,64),e(K("#E3D5B8")));l.rotation.x=-Math.PI/2,l.position.set(0,.1,20),l.receiveShadow=!0,n.add(l);for(const[v,I]of[[15.4,1],[11.2,.55],[6.6,.45]]){const L=new rt(new $a(v-I,v,64),K(Mt.goldDeep,{metalness:.6,roughness:.4}));L.rotation.x=-Math.PI/2,L.position.set(0,.14,20),n.add(L)}const c=new rt(new bs(Wl(6,2.5)),K(Mt.gold,{metalness:.7,roughness:.35}));c.rotation.x=-Math.PI/2,c.position.set(0,.18,20),n.add(c);const d=[[-28,4,30],[28,4,30],[-16,40,26],[16,40,26],[0,-6,34]];d.forEach(([v,I,L])=>n.add(Px(v,I,L,t))),n.add(ea(-48,-2,38,22,t)),n.add(ea(48,-2,38,22,t)),n.add(ea(-48,44,38,22,t)),n.add(ea(48,44,38,22,t));for(const v of[-22,64])n.add(ta(60,-48,v,0)),n.add(ta(60,48,v,0));n.add(ta(88,-80,20,Math.PI/2)),n.add(ta(88,80,20,Math.PI/2));const p=new ae;p.add(An({w:62,d:22,floors:3,x:-52,z:-70,cols:12},t).group),p.add(An({w:62,d:22,floors:3,x:52,z:-70,cols:12},t).group),p.add(An({w:42,d:24,floors:3,x:0,z:-68,cols:7},t).group);const h=jr(14,6,6);h.position.set(-52,0,-58);const f=jr(14,6,6);f.position.set(52,0,-58),p.add(h,f);const g=Ax(t);g.position.set(0,0,-62.6),p.add(g),[-52,52].forEach((v,I)=>{const L=new rt(new In(12,22),new pe({map:Ex(I+1),roughness:.45,metalness:.5}));L.position.set(v,12,-70+11.35),p.add(L),p.add(mt(13.4,23.4,.5,K(Mt.stone),v,12,-70+10.9))}),n.add(p),n.add(Cx(146,-50,-Math.PI/2,t)),n.add(An({w:56,d:26,floors:4,x:-146,z:-50,ry:Math.PI/2,roofType:"gable",roofH:12,cols:10},t).group);const M=jr(12,6,6);M.position.set(-130,0,-50),M.rotation.y=Math.PI/2,n.add(M);const m=new rt(new tn(4.2,40),new pe({map:Ca(),emissive:"#ffffff",emissiveMap:Ca(),emissiveIntensity:.1,roughness:.4}));t.glowMats.push(m.material),m.position.set(-132.82,21,-50),m.rotation.y=Math.PI/2,n.add(m);const u=new ae;u.add(An({w:48,d:20,floors:3,x:0,z:-8,cols:8},t).group),u.add(An({w:32,d:18,floors:3,x:-22,z:16,ry:Math.PI/2,cols:5},t).group),u.position.set(-182,0,-66),n.add(u);const y=new ae;y.add(An({w:46,d:22,floors:3,x:0,z:0,cols:7},t).group),y.add(xe(9,9.6,4,24,K(Mt.stone),0,15.8,0));const S=new rt(new Te(9,28,16,0,Math.PI*2,0,Math.PI/2),K(Mt.copper,{roughness:.5,metalness:.35}));S.position.y=17.6,S.castShadow=!0,y.add(S);const x=on(2,.6);x.position.y=29,y.add(x),y.position.set(182,0,-66),n.add(y);const w=K("#7FB472",{roughness:1,envMapIntensity:.08}),E=(v,I)=>{o(v,I,46,46,0,"#EFE6D4");for(let L=-1;L<=1;L++)for(let W=-1;W<=1;W++){if(L===0&&W===0)continue;const et=v+L*15,ot=I+W*15;n.add(mt(11,1.5,11,e(K(Mt.grassDeep)),et,.75,ot)),n.add(mt(11.6,1.9,1.2,w,et,.95,ot+5.9)),n.add(mt(11.6,1.9,1.2,w,et,.95,ot-5.9)),n.add(mt(1.2,1.9,11.6,w,et+5.9,.95,ot)),n.add(mt(1.2,1.9,11.6,w,et-5.9,.95,ot))}};E(-124,-6),E(124,-6),n.add(Fx(-124,-6,t)),n.add(pd(124,-6,1,t)),n.add(Dx(0,-150,0,t));const A=new ae,_=new yn,b=42,C=26,R=C;_.absarc(-b+R,0,R,Math.PI/2,Math.PI*1.5,!1),_.absarc(b-R,0,R,Math.PI*1.5,Math.PI/2,!1),_.closePath();const D=new yn,G=b-8.5,F=R-8.5;D.absarc(-G+F,0,F,Math.PI/2,Math.PI*1.5,!1),D.absarc(G-F,0,F,Math.PI*1.5,Math.PI/2,!1),D.closePath(),_.holes.push(D);const B=new rt(new bs(_),K("#C2624F"));B.rotation.x=-Math.PI/2,B.position.y=.1,B.receiveShadow=!0,A.add(B);const Y=new rt(new bs(D),e(K(Mt.grassDeep)));Y.rotation.x=-Math.PI/2,Y.position.y=.07,A.add(Y);for(const v of[-1,1]){for(let L=0;L<4;L++)A.add(mt(70-L*5,1.5,3.6,K(Mt.stoneDeep),0,.75+L*1.25,v*(31+L*3.6)));const I=bc(56,12,3.2,e(K(Mt.roof)));I.position.set(0,8.4,v*37),A.add(I);for(let L=-2;L<=2;L++)A.add(xe(.3,.3,8.4,8,K(Mt.stone),L*13,4.2,v*41.5))}A.position.set(-84,0,100),n.add(A);const k=new ae;k.add(An({w:44,d:16,floors:4,x:0,z:-26,cols:9},t).group),k.add(An({w:40,d:16,floors:4,x:-25,z:6,ry:Math.PI/2,cols:8,wall:Mt.wallPinkDeep},t).group),k.add(An({w:40,d:16,floors:4,x:25,z:6,ry:Math.PI/2,cols:8,wall:Mt.wallPinkDeep},t).group);const it=new rt(new In(40,40),e(K(Mt.pave,{map:(()=>{const v=r.clone();return v.needsUpdate=!0,v.repeat.set(5,5),v})()})));it.rotation.x=-Math.PI/2,it.position.set(0,.05,4),k.add(it),k.add(pd(0,4,.6,t));const st=jr(10,5,5);st.position.set(0,0,-17),k.add(st),k.position.set(84,0,100),n.add(k);const ft=Rx(t);ft.position.set(0,0,218),n.add(ft),o(0,202,80,34),n.add(fd(-92,158,0,t)),o(-92,190,52,26),n.add(fd(92,158,0,t)),o(92,190,52,26);const ht=["#F2A8BE","#F5D08A","#C3A8DE","#FFFFFF"];for(let v=0;v<14;v++){const I=v%2?1:-1,L=92+Math.floor(v/2)*13,W=new rt(new tn(4.8,24),e(K(Mt.grassDeep)));W.rotation.x=-Math.PI/2,W.position.set(I*23,.08,L),n.add(W);for(let et=0;et<14;et++){const ot=new rt(new Te(.5,8,6),K(ht[(v+et)%ht.length])),X=Math.random()*Math.PI*2,Q=Math.random()*3.9;ot.position.set(I*23+Math.cos(X)*Q,.5,L+Math.sin(X)*Q),n.add(ot)}}const _t=[],Xt=[];for(let v=88;v<=196;v+=11)Xt.push([-20,v,1.05+Math.random()*.25],[20,v,1.05+Math.random()*.25]);for(let v=0;v<26;v++){const I=v%2?1:-1;Xt.push([I*(36+Math.random()*18),92+Math.random()*76,.95+Math.random()*.45])}for(let v=0;v<14;v++){const I=v/14*Math.PI*2;Xt.push([Math.cos(I)*98,20+Math.sin(I)*62,.9+Math.random()*.35])}const Wt=Xt.filter(([v,I])=>jn(v,I,16));Ux(n,Wt,t);const Dt=Wt.filter(([v,I])=>Math.abs(v)>12&&Math.abs(v)<64&&I>82&&I<200),tt=K("#7A6A58",{roughness:.9,envMapIntensity:.05}),pt=new Vn(Wl(.6,.26),{depth:.16,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:1});pt.center();const dt=new pe({color:"#FFF0C4",emissive:"#FFC860",emissiveIntensity:0,roughness:.35,metalness:.1});t.lampMats.push(dt);const Ct=10,Pt=3,Ft=Dt.length*Pt*Ct,Qt=new dr(pt,dt,Math.max(1,Ft));Qt.count=0;const Vt=new Ue;let at=0;Dt.forEach(([v,I,L],W)=>{for(let et=0;et<Pt;et++){const ot=(2.5-et*.45)*L,X=(3.9+et*1.05)*L,Q=.12+W%3*.05,St=W*.7+et*.9,Tt=new rt(new Ze(ot,.022,5,26),tt);Tt.rotation.x=Math.PI/2+Q,Tt.rotation.z=St,Tt.position.set(v,X,I),n.add(Tt);for(let ct=0;ct<Ct;ct++){const yt=ct/Ct*Math.PI*2+St,wt=v+Math.cos(yt)*ot,xt=I+Math.sin(yt)*ot,Lt=X+Math.sin(yt)*ot*Math.sin(Q)-.22;Vt.position.set(wt,Lt,xt),Vt.rotation.set(0,-yt+Math.PI/2,(W+ct)*.4),Vt.scale.setScalar(.9+(W+ct)%3*.15),Vt.updateMatrix(),Qt.setMatrixAt(at++,Vt.matrix)}}}),Qt.count=at,Qt.instanceMatrix.needsUpdate=!0,n.add(Qt);for(let v=-142;v<=142;v+=13)Math.abs(v)<26||_t.push([v,73,.95],[v,51,.95]);for(let v=-116;v<=116;v+=14)Math.abs(v)<24||_t.push([v,-110,.9],[v,-90,.9]);for(let v=-34;v<=56;v+=13)_t.push([-136,v,.9],[136,v,.9]);for(let v=108;v<=190;v+=14)_t.push([-140,v,.9],[140,v,.9]);for(let v=0;v<70;v++){const I=(Math.random()-.5)*150,L=-120-Math.random()*110;jn(I,L,16)&&(Math.hypot(I,L+150)<46||_t.push([I,L,.9+Math.random()*.6]))}for(let v=0;v<150;v++){const I=(Math.random()-.5)*560,L=(Math.random()-.5)*560;!jn(I,L,16)||Math.abs(I)<100&&L>-92&&L<80||Math.abs(I)<36&&L>80||Math.hypot(I+84,L-100)<66||Math.hypot(I-84,L-100)<56||Math.hypot(I+182,L+66)<46||Math.hypot(I-182,L+66)<42||Math.hypot(I+124,L+6)<34||Math.hypot(I-124,L+6)<34||Math.hypot(I+146,L+50)<42||Math.hypot(I-146,L+50)<42||Math.hypot(I+92,L-158)<40||Math.hypot(I-92,L-158)<40||Math.hypot(I,L+150)<48||_t.push([I,L,.85+Math.random()*.6])}for(let v=0;v<460;v++){const I=(Math.random()-.5)*1e3,L=(Math.random()-.5)*1e3;jn(I,L,-16)||Math.hypot(I,L)>520||_t.push([I,L,1+Math.random()*.9])}const ut=(v,I)=>Math.abs(Math.abs(v)-48)<23&&(Math.abs(I+2)<15||Math.abs(I-44)<15),vt=(v,I)=>v>-152&&v<-16&&I>56&&I<144;Nx(n,_t.filter(([v,I])=>!(jn(v,I)&&!jn(v,I,12))&&!ut(v,I)&&!vt(v,I)));{const v=K(Mt.gold,{metalness:.55,roughness:.35}),I=K("#C9B9DF",{metalness:.35,roughness:.4});for(let Tt=0;Tt<2;Tt++){const yt=62+Tt*7;for(const wt of[-1,1]){for(const Lt of[-2.2,2.2]){const N=new rt(new Re(.14,.14,1.5,8),v);N.position.set(-136+wt*.55,.75,yt+Lt),n.add(N)}const xt=new rt(new Re(.13,.13,5.4,10),v);xt.rotation.x=Math.PI/2,xt.position.set(-136+wt*.55,1.5,yt),n.add(xt)}}for(let Tt=0;Tt<4;Tt++){const ct=new rt(new Ze(2.6,.15,8,18,Math.PI),I);ct.rotation.y=Math.PI/2,ct.position.set(-136,0,78+Tt*2.2),n.add(ct)}const L=new rt(new Ye(.3,.3,7.2),I);L.position.set(-136,2.6,81.3),n.add(L);const W=new rt(new Re(4.4,4.4,.5,20),K("#EED9A0"));W.position.set(-135,.25,108),n.add(W);const et=new rt(new Ze(4.4,.35,8,24),K("#D9B36C"));et.rotation.x=Math.PI/2,et.position.set(-135,.5,108),n.add(et);const ot=new rt(new Ye(1.4,2.2,1.6),K(Mt.stone));ot.position.set(-139,1.1,112),n.add(ot);const X=new rt(new Ye(1.2,.18,4.6),K("#F0A0B0"));X.position.set(-136.5,1.15,112.6),X.rotation.x=-.45,n.add(X);for(let Tt=0;Tt<3;Tt++){const ct=-135+Tt%2*4,yt=124+Math.floor(Tt/2)*6+(Tt===2?4:0),wt=new rt(new Re(.1,.1,2.6,8),K("#8A5A3B"));wt.position.set(ct,1.3,yt),n.add(wt);const xt=new rt(new Oi(2.3,1.1,10),K(["#F5B9C5","#C9B9DF","#A9D6DF"][Tt]));xt.position.set(ct,3,yt),n.add(xt);const Lt=new rt(new Re(.9,.9,.14,12),K(Mt.stone));Lt.position.set(ct,.8,yt+2.6),n.add(Lt);const N=new rt(new Re(.09,.09,.8,6),K("#8A5A3B"));N.position.set(ct,.4,yt+2.6),n.add(N)}const Q=new rt(new Ye(2.6,1.5,.16),K("#FFF9F1"));Q.position.set(-136,1.6,84),Q.rotation.y=.3,n.add(Q);const St=new rt(new Re(.09,.09,1.6,6),K("#8A5A3B"));St.position.set(-136,.8,84),n.add(St)}const It=K("#4A4448",{metalness:.4}),Rt=new pe({color:"#FFE9BE",emissive:"#FFCE72",emissiveIntensity:0,roughness:.4});t.lampMats.push(Rt);for(const[v,I,L]of t.sconceSpots){const W=new rt(new Re(.34,.5,.85,8),Rt);W.position.set(v,I,L),n.add(W),n.add(xe(.42,.42,.12,8,It,v,I+.5,L)),n.add(xe(.1,.1,.45,6,It,v,I+.72,L));const et=new rt(new Te(.11,8,6),Rt);et.position.set(v,I-.5,L),n.add(et)}const $t=[];for(let v=0;v<Math.PI*2;v+=Math.PI/6)$t.push([Math.cos(v)*34,20+Math.sin(v)*34]);$t.push([-70,-30],[70,-30],[-70,74],[70,74]);for(const[v,I]of $t){if(!jn(v,I,14))continue;const L=new pe({color:"#FFF2D6",emissive:"#FFD98A",emissiveIntensity:0,roughness:.3});t.lampMats.push(L),n.add(xe(.16,.3,2.1,8,It,v,1.05,I)),n.add(mt(.5,.35,.5,L,v,2.2,I))}[[-26,190],[26,190],[-26,150],[26,150],[-26,112],[26,112],[-64,20],[64,20],[-64,58],[64,58],[-34,-28],[34,-28],[-88,-28],[88,-28],[84,68],[84,134],[-84,68],[-84,134],[-124,-34],[124,-34]].forEach(([v,I])=>n.add(Ix(v,I,t)));const Kt=K("#E9DCC0"),ee=K(Mt.brick);for(let v=0;v<xs.length;v++){const[I,L]=xs[v],[W,et]=xs[(v+1)%xs.length],ot=W-I,X=et-L,Q=Math.hypot(ot,X),St=Math.atan2(ot,X),Tt=(I+W)/2,ct=(L+et)/2;if(L>200&&et>200){for(const xt of[-1,1]){const Lt=Q/2-30,N=xt*(30+Lt/2);n.add(mt(2.2,6,Lt,Kt,N,3.4,ct,Math.PI/2)),n.add(mt(3,1.8,Lt,ee,N,.9,ct,Math.PI/2)),n.add(mt(3.1,.7,Lt,K(Mt.stone),N,6.65,ct,Math.PI/2));const gt=Math.max(2,Math.floor(Lt/22));for(let nt=0;nt<=gt;nt++){const bt=xt*(30+Lt*nt/gt);n.add(mt(3.4,8,3.4,Kt,bt,4,ct)),n.add(mt(4,.8,4,K(Mt.stone),bt,8.4,ct));const At=on(1.05,.35);At.position.set(bt,9.8,ct),n.add(At),t.lampMats.push(At.material),t.sconceSpots.push([bt,7.4,ct-2.4])}}continue}n.add(mt(2.2,6,Q,Kt,Tt,3.4,ct,St)),n.add(mt(3,1.8,Q,ee,Tt,.9,ct,St)),n.add(mt(3.1,.7,Q,K(Mt.stone),Tt,6.65,ct,St));const wt=Math.max(2,Math.floor(Q/22));for(let xt=0;xt<=wt;xt++){const Lt=xt/wt,N=I+ot*Lt,gt=L+X*Lt;n.add(mt(3.4,8,3.4,Kt,N,4,gt,St)),n.add(mt(4,.8,4,K(Mt.stone),N,8.4,gt,St));const nt=on(1.05,.35);nt.position.set(N,9.8,gt),nt.rotation.y=St,n.add(nt),t.lampMats.push(nt.material);const bt=-X/Q,At=ot/Q,zt=(0-N)*bt+(30-gt)*At>=0?1:-1;t.sconceSpots.push([N+bt*2.4*zt,7.4,gt+At*2.4*zt])}if(bx.some(([xt,Lt])=>Math.abs(xt-I)<.5&&Math.abs(Lt-L)<.5)){const xt=new ae;xt.add(mt(9,13,9,Kt,0,6.5,0)),xt.add(mt(10.4,1.1,10.4,K(Mt.stone),0,13.5,0));const Lt=Aa(10.8,10.8,8,e(K(Mt.roof)));Lt.position.y=17.6,xt.add(Lt);const N=on(2,.6);N.position.y=23.6,xt.add(N),t.lampMats.push(N.material),xt.position.set(I,0,L),n.add(xt)}}const U=(v,I,L,W)=>t.obstacles.push({x:v,z:I,hw:L,hd:W});U(-52,-70,32,12),U(52,-70,32,12),U(0,-68,22,13),U(-146,-50,14,29),U(146,-50,16,30),U(-182,-74,25,11),U(-204,-50,10,20),U(182,-66,24,12),U(84,74,23,9),U(59,106,9,22),U(109,106,9,22),U(-92,158,24,16),U(92,158,24,16),U(-124,-6,9,9),U(124,-6,8,8),U(0,-168,26,22),d.forEach(([v,I])=>U(v,I,2,2)),U(-48,-2,20,13),U(48,-2,20,13),U(-48,44,20,13),U(48,44,20,13),U(-84,62,40,4),U(-84,138,40,4);const me=(v,I)=>{const L=new ae,W=["#3E7C4F","#4A8B5C","#579A68"],et=new rt(new Re(1.1,1.4,3.2,8),K("#8A5A3B"));et.position.y=1.6,L.add(et);const ot=[[6.4,5.4,3.6],[5.1,4.6,7.2],[3.8,4,10.4]];ot.forEach(([wt,xt,Lt],N)=>{const gt=new rt(new Oi(wt,xt,10),K(W[N]));gt.position.y=Lt+xt/2,L.add(gt);const nt=new rt(new Oi(wt*1.01,xt*.34,10),K("#FDFAF7",{roughness:.85}));nt.position.y=Lt+xt-xt*.17,L.add(nt)});const X=[16103877,13220319,16107670,11130591];let Q=13;const St=()=>(Q=Q*16807%2147483647)/2147483647;ot.forEach(([wt,xt,Lt],N)=>{const gt=6-N;for(let nt=0;nt<gt;nt++){const bt=St()*Math.PI*2,At=Lt+xt*(.22+St()*.4),lt=wt*(1-(At-Lt)/xt)+.25,zt=new rt(new Te(.42,10,8),K(X[(nt+N)%X.length],{roughness:.3,metalness:.3}));zt.position.set(Math.cos(bt)*lt,At,Math.sin(bt)*lt),L.add(zt)}});const Tt=new yn;for(let wt=0;wt<10;wt++){const xt=-Math.PI/2+wt*Math.PI/5,Lt=wt%2===0?1.7:.72,N=Math.cos(xt)*Lt,gt=Math.sin(xt)*Lt;wt===0?Tt.moveTo(N,gt):Tt.lineTo(N,gt)}Tt.closePath();const ct=new Vn(Tt,{depth:.4,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:1});ct.translate(0,0,-.2);const yt=new rt(ct,K(Mt.gold,{metalness:.7,roughness:.3}));yt.position.y=15.4,L.add(yt),L.position.set(v,0,I),n.add(L)};me(-53,201),me(53,201);const se=(v,I)=>{const L=new ae,W=Math.sign(v);for(let wt=0;wt<3;wt++){const xt=new rt(new Re(1,1,.25,8),K(Mt.stone));xt.position.set(v-W*(11-wt*4),.13,I+8+(wt%2?.8:-.6)),xt.receiveShadow=!0,L.add(xt)}const et=new rt(new Ze(6.2,.5,8,26),K("#D8C6A8"));et.rotation.x=Math.PI/2,et.position.set(v,.32,I),L.add(et);const ot=[16103877,13220319,16107670,16774378,15769776];for(let wt=0;wt<8;wt++){const xt=wt/8*Math.PI*2,Lt=v+Math.cos(xt)*6.2,N=I+Math.sin(xt)*6.2,gt=new rt(new Re(.09,.09,1.1,5),K("#579A68"));gt.position.set(Lt,.55,N),L.add(gt);const nt=new rt(new Te(.44,8,6),K(ot[wt%ot.length]));nt.position.set(Lt,1.22,N),nt.scale.y=.72,L.add(nt);const bt=new rt(new Te(.16,6,5),K("#F5D68A"));bt.position.set(Lt,1.3,N+.3),L.add(bt)}const X=new ae,Q=K("#D9B36C",{roughness:.6}),St=K("#8A5A3B");for(const wt of[-1.1,1.1]){const xt=new rt(new Ye(.32,1.1,.7),St);xt.position.set(0,.55,wt),X.add(xt)}const Tt=new rt(new Ye(.55,.18,3.4),Q);Tt.position.y=1.15,X.add(Tt);const ct=new rt(new Ye(.22,1.1,3.4),Q);ct.position.set(-.4,1.8,0),ct.rotation.z=.14,X.add(ct),X.position.set(v+W*8,0,I+9),X.rotation.y=v<0?-Math.PI/2:Math.PI/2,L.add(X),[[-9,-12],[9,-12],[-9,13],[9,13]].forEach(([wt,xt],Lt)=>{const N=new rt(new Te(1.5-Lt%2*.4,10,8),K("#A8D8A8"));N.position.set(v+wt,1.1,I+xt),N.scale.y=.78,L.add(N)}),n.add(L)};se(-53,201),se(53,201);const P=new Gi({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1});return Us.forEach(v=>{const I=new rt(new Te(17,16,12),P.clone());I.position.set(v.focus[0],Math.max(v.focus[1],8),v.focus[2]),I.userData.poiId=v.id,I.renderOrder=2,n.add(I),t.hotspots.push(I)}),t}function Bx(n){const t={topColor:{value:new Ht("#6BAEE8")},midColor:{value:new Ht("#B4DCF2")},botColor:{value:new Ht("#F5F1E4")},offset:{value:.055},exponent:{value:.66},uStars:{value:0},uTime:{value:0},uCloud:{value:1}},e=new rt(new Te(1400,96,48),new bn({uniforms:t,side:cn,depthWrite:!1,vertexShader:`
        varying vec3 vW;
        #include <common>
        #include <logdepthbuf_pars_vertex>
        void main(){
          vW = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          #include <logdepthbuf_vertex>
        }`,fragmentShader:`
        uniform vec3 topColor, midColor, botColor;
        uniform float offset, exponent, uStars, uTime, uCloud;
        varying vec3 vW;
        #include <common>
        #include <logdepthbuf_pars_fragment>

        float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164))) * 43758.5453); }
        float noise(vec3 p){
          vec3 i = floor(p), f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          float n = mix(mix(mix(hash(i), hash(i+vec3(1,0,0)), f.x),
                            mix(hash(i+vec3(0,1,0)), hash(i+vec3(1,1,0)), f.x), f.y),
                        mix(mix(hash(i+vec3(0,0,1)), hash(i+vec3(1,0,1)), f.x),
                            mix(hash(i+vec3(0,1,1)), hash(i+vec3(1,1,1)), f.x), f.y), f.z);
          return n;
        }

        void main(){
          #include <logdepthbuf_fragment>
          float h = vW.y * 0.5 + 0.5;
          float t = pow(clamp((h - offset) / (1.0 - offset), 0.0, 1.0), exponent);
          float b = pow(clamp((offset - h) / offset, 0.0, 1.0), 0.8);
          vec3 col = mix(midColor, topColor, t);
          col = mix(col, botColor, b);

          vec3 d = normalize(vW);

          // ---- 薄云带（白天/黄昏用，夜里自动收掉） ----
          if (uCloud > 0.01 && d.y > 0.02) {
            vec3 cp = vec3(d.x / max(d.y, 0.08) * 0.6, d.z / max(d.y, 0.08) * 0.6, uTime * 0.012);
            float c = noise(cp * 1.6) * 0.55 + noise(cp * 3.4) * 0.3 + noise(cp * 7.1) * 0.15;
            c = smoothstep(0.55, 0.86, c) * smoothstep(0.02, 0.35, d.y);
            col = mix(col, vec3(1.0, 0.99, 0.97), c * 0.55 * uCloud);
          }

          // ---- 星空：三层 hash 点阵，逐星闪烁 ----
          if (uStars > 0.001) {
            float sAll = 0.0, glow = 0.0;
            for (int L = 0; L < 3; L++) {
              float fl = float(L);
              float ca = cos(0.7 + fl * 1.3), sa = sin(0.7 + fl * 1.3);
              vec3 dr = vec3(d.x * ca - d.z * sa, d.y, d.x * sa + d.z * ca);
              dr = vec3(dr.x, dr.y * ca - dr.z * sa, dr.y * sa + dr.z * ca);
              float sc  = L == 0 ? 132.0 : (L == 1 ? 208.0 : 320.0);
              float thr = L == 0 ? 0.74  : (L == 1 ? 0.82  : 0.89);
              float rad = L == 0 ? 0.17  : (L == 1 ? 0.14  : 0.11);
              float amp = L == 0 ? 1.0   : (L == 1 ? 0.70  : 0.46);
              vec3 sp = dr * sc;
              vec3 cell = floor(sp), fr = fract(sp);
              vec3 c = vec3(hash(cell), hash(cell + 7.13), hash(cell + 13.77));
              float pick = step(thr, hash(cell + 3.71));
              float dd = length(fr - c);
              float tw = 0.62 + 0.38 * sin(uTime * 1.5 + hash(cell + 21.3) * 30.0);
              sAll += pow(smoothstep(rad, 0.0, dd), 1.5) * pick * tw * amp;
              glow += pow(smoothstep(rad * 1.7, 0.0, dd), 2.4) * pick * tw * amp * 0.26;
            }
            vec3 tint = mix(vec3(0.99, 0.99, 1.0), vec3(0.85, 0.90, 1.0), 0.4);
            col += tint * (sAll * 2.5 + glow) * uStars * smoothstep(-0.05, 0.12, d.y);
          }

          col += (hash(d * 911.7) - 0.5) * (2.2 / 255.0);  // 去色带
          gl_FragColor = vec4(col, 1.0);
        }`}));return e.renderOrder=-1,n.add(e),{mesh:e,uniforms:t}}const na=[16767462,12576511,16770728,14271231,11075542,16761512];function zx(n,t,e,i=!1){const s=i?4:7,r=i?54:130,a=s*r,o=new Float32Array(a*3),l=new Float32Array(a*3),c=new Float32Array(a),d=new Ee;d.setAttribute("position",new Ne(o,3)),d.setAttribute("color",new Ne(l,3)),d.setAttribute("size",new Ne(c,1));const p=document.createElement("canvas");p.width=p.height=64;const h=p.getContext("2d"),f=h.createRadialGradient(32,32,0,32,32,32);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.28,"rgba(255,255,255,.85)"),f.addColorStop(.65,"rgba(255,255,255,.22)"),f.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=f,h.fillRect(0,0,64,64);const g=new He(p),M=new bn({uniforms:{uTex:{value:g},uOpacity:{value:0},uScale:{value:innerHeight*.9}},transparent:!0,depthWrite:!1,depthTest:!0,blending:ws,vertexColors:!0,vertexShader:`
      attribute float size;
      varying vec3 vCol;
      uniform float uScale;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main(){
        vCol = color;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = clamp(size * 16.0 * uScale / max(1.0, -mv.z), 2.0, 34.0);
        gl_Position = projectionMatrix * mv;
        #include <logdepthbuf_vertex>
      }`,fragmentShader:`
      uniform sampler2D uTex; uniform float uOpacity;
      varying vec3 vCol;
      #include <common>
      #include <logdepthbuf_pars_fragment>
      void main(){
        #include <logdepthbuf_fragment>
        vec4 t = texture2D(uTex, gl_PointCoord);
        gl_FragColor = vec4(vCol, 1.0) * t.a * uOpacity;
      }`}),m=new Hi(d,M);m.frustumCulled=!1,m.visible=!1,m.renderOrder=3,n.add(m);const u=Array.from({length:s},(A,_)=>({t:-_*.85,life:2.4+Math.random()*1.3,rise:.7,org:new O,vel:Array.from({length:r},()=>new O),drag:new Float32Array(r).fill(1.15),col:new Ht(na[_%na.length]),spin:Math.random()*6.28,manual:!1})),y=new O;function S(A,_){if(A.rise=.55+Math.random()*.35,_)A.org.copy(_),A.manual=!0;else{A.manual=!1;try{y.copy(e())}catch{y.set(0,6,30)}const C=Math.random()*Math.PI*2,R=40+Math.random()*170;A.org.set(y.x+Math.cos(C)*R,y.y+90+Math.random()*110,y.z+Math.sin(C)*R)}A.org.y<60&&(A.org.y=60+Math.random()*50),A.col.set(na[Math.random()*na.length|0]),A.life=2.3+Math.random()*1.4;const b=26+Math.random()*20;for(let C=0;C<r;C++){const R=1-(C+.5)/r*2,D=Math.sqrt(Math.max(0,1-R*R)),G=C*2.399963+A.spin,F=C%3===0;A.vel[C].set(Math.cos(G)*D,R,Math.sin(G)*D).multiplyScalar(b*(F?.42:.86)*(.82+Math.random()*.34)),A.drag[C]=F?1.65:1.05}A.t=0}u.forEach(A=>{S(A),A.t=Math.random()*(A.rise+A.life+.7)});function x(A){let _=u[0];for(const b of u)b.t>_.t&&(_=b);S(_,A),_.t=_.rise*.999}function w(A,_,b){if(m.visible=_>.01,M.uniforms.uOpacity.value=Math.min(1,_*1.15),!m.visible)return;const C=d.attributes.position.array,R=d.attributes.color.array,D=d.attributes.size.array;for(let G=0;G<u.length;G++){const F=u[G];if(F.t+=A,F.t>F.rise+F.life+.7)if(b)S(F);else{for(let st=0;st<r;st++)D[G*r+st]=0;continue}const B=G*r,Y=F.rise;if(F.t<Y){const st=F.t/Y,ft=42*st*(1-st*.42);for(let ht=0;ht<r;ht++){const _t=(B+ht)*3,Xt=ht/r*7.5;C[_t]=F.org.x,C[_t+1]=F.org.y-34+ft-Xt,C[_t+2]=F.org.z;const Wt=Math.max(0,1-Xt/7.5),Dt=.55+.45*Wt;R[_t]=Dt,R[_t+1]=Dt*.86,R[_t+2]=Dt*.55,D[B+ht]=(ht<r*.18?.34:.12)*Wt*(st<.1?st*10:1)}continue}const k=F.t-Y,it=k<.05?k/.05:Math.max(0,1-(k-.05)/F.life);for(let st=0;st<r;st++){const ft=(B+st)*3,ht=F.vel[st],_t=F.drag[st],Xt=(1-Math.exp(-k*_t))/_t,Wt=Math.max(0,k-F.life*.45)*1.4,Dt=Math.sin(st*12.9+k*9.1)*Wt,tt=Math.cos(st*7.7+k*8.3)*Wt;C[ft]=F.org.x+ht.x*Xt+Dt,C[ft+1]=F.org.y+ht.y*Xt-8.4*k*k,C[ft+2]=F.org.z+ht.z*Xt+tt;const pt=Math.max(0,1-k*3.6);R[ft]=F.col.r*(1-pt)+pt,R[ft+1]=F.col.g*(1-pt)+pt,R[ft+2]=F.col.b*(1-pt)+pt;const dt=.66+.34*Math.sin(k*(19+st%7*3.1)+st*1.7);D[B+st]=C[ft+1]<1?0:Math.max(.18,it*dt);const Ct=(.42+.58*it)*dt;R[ft]*=Ct*(1+(1-it)*.3),R[ft+1]*=Ct*(1-(1-it)*.16),R[ft+2]*=Ct*(1-(1-it)*.34)}}d.attributes.position.needsUpdate=!0,d.attributes.color.needsUpdate=!0,d.attributes.size.needsUpdate=!0}function E(){M.uniforms.uScale.value=innerHeight*.9}return{points:m,step:w,launchAt:x,resize:E}}function kx(n,t=10){const e=new Ee,i=new Float32Array(t*2*3),s=new Float32Array(t*2*3);e.setAttribute("position",new Ne(i,3)),e.setAttribute("color",new Ne(s,3));const r=new _c({vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:ws}),a=new cu(e,r);a.frustumCulled=!1,a.visible=!1,a.renderOrder=2,n.add(a);const o=Array.from({length:t},()=>({p:new O,v:new O,len:90,t:0,dur:1,wait:Math.random()*4}));function l(h){const f=Math.random()*Math.PI*2,g=700+Math.random()*380,M=330+Math.random()*300;h.p.set(Math.cos(f)*g,M,Math.sin(f)*g);const m=new O(-Math.sin(f),0,Math.cos(f)),u=new O(-Math.cos(f),0,-Math.sin(f)),y=m.multiplyScalar((Math.random()>.5?1:-1)*(.6+Math.random()*.5)).addScaledVector(u,.35+Math.random()*.5).add(new O(0,-.16-Math.random()*.12,0)).normalize();h.v.copy(y).multiplyScalar(420+Math.random()*320),h.len=90+Math.random()*110,h.dur=.9+Math.random()*.9,h.t=0,h.wait=Math.random()*3.4}o.forEach(l);const c=new Ht("#FFFFFF"),d=new Ht("#9FC4FF");function p(h,f,g){if(r.opacity+=(f*.95-r.opacity)*Math.min(1,h*4),a.visible=r.opacity>.01,!a.visible)return;const M=e.attributes.position.array,m=e.attributes.color.array;o.forEach((u,y)=>{if(u.wait>0){u.wait-=h,M[y*6]=M[y*6+3]=0,M[y*6+1]=M[y*6+4]=-9999,M[y*6+2]=M[y*6+5]=0;return}if(u.t+=h,u.t>u.dur){l(u);return}u.p.addScaledVector(u.v,h);const S=u.t/u.dur,x=Math.sin(Math.min(1,S)*Math.PI),w=u.v.clone().normalize().multiplyScalar(-u.len);M[y*6]=u.p.x+g.x*0,M[y*6+1]=u.p.y,M[y*6+2]=u.p.z,M[y*6+3]=u.p.x+w.x,M[y*6+4]=u.p.y+w.y,M[y*6+5]=u.p.z+w.z,m[y*6]=c.r*x,m[y*6+1]=c.g*x,m[y*6+2]=c.b*x,m[y*6+3]=d.r*x*.1,m[y*6+4]=d.g*x*.1,m[y*6+5]=d.b*x*.1}),e.attributes.position.needsUpdate=!0,e.attributes.color.needsUpdate=!0}return{lines:a,step:p}}function rr(n){let t=n[0],e=n[1],i=n[2];return Math.sqrt(t*t+e*e+i*i)}function Xl(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function Gx(n,t,e,i){return n[0]=t,n[1]=e,n[2]=i,n}function md(n,t,e){return n[0]=t[0]+e[0],n[1]=t[1]+e[1],n[2]=t[2]+e[2],n}function gd(n,t,e){return n[0]=t[0]-e[0],n[1]=t[1]-e[1],n[2]=t[2]-e[2],n}function Vx(n,t,e){return n[0]=t[0]*e[0],n[1]=t[1]*e[1],n[2]=t[2]*e[2],n}function Hx(n,t,e){return n[0]=t[0]/e[0],n[1]=t[1]/e[1],n[2]=t[2]/e[2],n}function Bo(n,t,e){return n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n}function Wx(n,t){let e=t[0]-n[0],i=t[1]-n[1],s=t[2]-n[2];return Math.sqrt(e*e+i*i+s*s)}function Xx(n,t){let e=t[0]-n[0],i=t[1]-n[1],s=t[2]-n[2];return e*e+i*i+s*s}function vd(n){let t=n[0],e=n[1],i=n[2];return t*t+e*e+i*i}function qx(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n}function Yx(n,t){return n[0]=1/t[0],n[1]=1/t[1],n[2]=1/t[2],n}function ql(n,t){let e=t[0],i=t[1],s=t[2],r=e*e+i*i+s*s;return r>0&&(r=1/Math.sqrt(r)),n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n}function Ou(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function _d(n,t,e){let i=t[0],s=t[1],r=t[2],a=e[0],o=e[1],l=e[2];return n[0]=s*l-r*o,n[1]=r*a-i*l,n[2]=i*o-s*a,n}function $x(n,t,e,i){let s=t[0],r=t[1],a=t[2];return n[0]=s+i*(e[0]-s),n[1]=r+i*(e[1]-r),n[2]=a+i*(e[2]-a),n}function Zx(n,t,e,i,s){const r=Math.exp(-i*s);let a=t[0],o=t[1],l=t[2];return n[0]=e[0]+(a-e[0])*r,n[1]=e[1]+(o-e[1])*r,n[2]=e[2]+(l-e[2])*r,n}function Jx(n,t,e){let i=t[0],s=t[1],r=t[2],a=e[3]*i+e[7]*s+e[11]*r+e[15];return a=a||1,n[0]=(e[0]*i+e[4]*s+e[8]*r+e[12])/a,n[1]=(e[1]*i+e[5]*s+e[9]*r+e[13])/a,n[2]=(e[2]*i+e[6]*s+e[10]*r+e[14])/a,n}function Kx(n,t,e){let i=t[0],s=t[1],r=t[2],a=e[3]*i+e[7]*s+e[11]*r+e[15];return a=a||1,n[0]=(e[0]*i+e[4]*s+e[8]*r)/a,n[1]=(e[1]*i+e[5]*s+e[9]*r)/a,n[2]=(e[2]*i+e[6]*s+e[10]*r)/a,n}function Qx(n,t,e){let i=t[0],s=t[1],r=t[2];return n[0]=i*e[0]+s*e[3]+r*e[6],n[1]=i*e[1]+s*e[4]+r*e[7],n[2]=i*e[2]+s*e[5]+r*e[8],n}function jx(n,t,e){let i=t[0],s=t[1],r=t[2],a=e[0],o=e[1],l=e[2],c=e[3],d=o*r-l*s,p=l*i-a*r,h=a*s-o*i,f=o*h-l*p,g=l*d-a*h,M=a*p-o*d,m=c*2;return d*=m,p*=m,h*=m,f*=2,g*=2,M*=2,n[0]=i+d+f,n[1]=s+p+g,n[2]=r+h+M,n}const t1=function(){const n=[0,0,0],t=[0,0,0];return function(e,i){Xl(n,e),Xl(t,i),ql(n,n),ql(t,t);let s=Ou(n,t);return s>1?0:s<-1?Math.PI:Math.acos(s)}}();function e1(n,t){return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]}class Ln extends Array{constructor(t=0,e=t,i=t){return super(t,e,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set(t,e=t,i=t){return t.length?this.copy(t):(Gx(this,t,e,i),this)}copy(t){return Xl(this,t),this}add(t,e){return e?md(this,t,e):md(this,this,t),this}sub(t,e){return e?gd(this,t,e):gd(this,this,t),this}multiply(t){return t.length?Vx(this,this,t):Bo(this,this,t),this}divide(t){return t.length?Hx(this,this,t):Bo(this,this,1/t),this}inverse(t=this){return Yx(this,t),this}len(){return rr(this)}distance(t){return t?Wx(this,t):rr(this)}squaredLen(){return vd(this)}squaredDistance(t){return t?Xx(this,t):vd(this)}negate(t=this){return qx(this,t),this}cross(t,e){return e?_d(this,t,e):_d(this,this,t),this}scale(t){return Bo(this,this,t),this}normalize(){return ql(this,this),this}dot(t){return Ou(this,t)}equals(t){return e1(this,t)}applyMatrix3(t){return Qx(this,this,t),this}applyMatrix4(t){return Jx(this,this,t),this}scaleRotateMatrix4(t){return Kx(this,this,t),this}applyQuaternion(t){return jx(this,this,t),this}angle(t){return t1(this,t)}lerp(t,e){return $x(this,this,t,e),this}smoothLerp(t,e,i){return Zx(this,this,t,e,i),this}clone(){return new Ln(this[0],this[1],this[2])}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t}transformDirection(t){const e=this[0],i=this[1],s=this[2];return this[0]=t[0]*e+t[4]*i+t[8]*s,this[1]=t[1]*e+t[5]*i+t[9]*s,this[2]=t[2]*e+t[6]*i+t[10]*s,this.normalize()}}const xd=new Ln;let n1=1,i1=1,Md=!1;class s1{constructor(t,e={}){t.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=t,this.attributes=e,this.id=n1++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in e)this.addAttribute(i,e[i])}addAttribute(t,e){if(this.attributes[t]=e,e.id=i1++,e.size=e.size||1,e.type=e.type||(e.data.constructor===Float32Array?this.gl.FLOAT:e.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),e.target=t==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,e.normalized=e.normalized||!1,e.stride=e.stride||0,e.offset=e.offset||0,e.count=e.count||(e.stride?e.data.byteLength/e.stride:e.data.length/e.size),e.divisor=e.instanced||0,e.needsUpdate=!1,e.usage=e.usage||this.gl.STATIC_DRAW,e.buffer||this.updateAttribute(e),e.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==e.count*e.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,e.count*e.divisor);this.instancedCount=e.count*e.divisor}else t==="index"?this.drawRange.count=e.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,e.count))}updateAttribute(t){const e=!t.buffer;e&&(t.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==t.buffer&&(this.gl.bindBuffer(t.target,t.buffer),this.glState.boundBuffer=t.buffer),e?this.gl.bufferData(t.target,t.data,t.usage):this.gl.bufferSubData(t.target,0,t.data),t.needsUpdate=!1}setIndex(t){this.addAttribute("index",t)}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}setInstancedCount(t){this.instancedCount=t}createVAO(t){this.VAOs[t.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.bindAttributes(t)}bindAttributes(t){t.attributeLocations.forEach((e,{name:i,type:s})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const r=this.attributes[i];this.gl.bindBuffer(r.target,r.buffer),this.glState.boundBuffer=r.buffer;let a=1;s===35674&&(a=2),s===35675&&(a=3),s===35676&&(a=4);const o=r.size/a,l=a===1?0:a*a*4,c=a===1?0:a*4;for(let d=0;d<a;d++)this.gl.vertexAttribPointer(e+d,o,r.type,r.normalized,r.stride+l,r.offset+d*c),this.gl.enableVertexAttribArray(e+d),this.gl.renderer.vertexAttribDivisor(e+d,r.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:t,mode:e=this.gl.TRIANGLES}){var s;this.gl.renderer.currentGeometry!==`${this.id}_${t.attributeOrder}`&&(this.VAOs[t.attributeOrder]||this.createVAO(t),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${t.attributeOrder}`),t.attributeLocations.forEach((r,{name:a})=>{const o=this.attributes[a];o.needsUpdate&&this.updateAttribute(o)});let i=2;((s=this.attributes.index)==null?void 0:s.type)===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(e,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(e,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(e,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(e,this.drawRange.start,this.drawRange.count)}getPosition(){const t=this.attributes.position;if(t.data)return t;if(!Md)return console.warn("No position buffer data found to compute bounds"),Md=!0}computeBoundingBox(t){t||(t=this.getPosition());const e=t.data,i=t.size;this.bounds||(this.bounds={min:new Ln,max:new Ln,center:new Ln,scale:new Ln,radius:1/0});const s=this.bounds.min,r=this.bounds.max,a=this.bounds.center,o=this.bounds.scale;s.set(1/0),r.set(-1/0);for(let l=0,c=e.length;l<c;l+=i){const d=e[l],p=e[l+1],h=e[l+2];s.x=Math.min(d,s.x),s.y=Math.min(p,s.y),s.z=Math.min(h,s.z),r.x=Math.max(d,r.x),r.y=Math.max(p,r.y),r.z=Math.max(h,r.z)}o.sub(r,s),a.add(s,r).divide(2)}computeBoundingSphere(t){t||(t=this.getPosition());const e=t.data,i=t.size;this.bounds||this.computeBoundingBox(t);let s=0;for(let r=0,a=e.length;r<a;r+=i)xd.fromArray(e,r),s=Math.max(s,this.bounds.center.squaredDistance(xd));this.bounds.radius=Math.sqrt(s)}remove(){for(let t in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[t]),delete this.VAOs[t];for(let t in this.attributes)this.gl.deleteBuffer(this.attributes[t].buffer),delete this.attributes[t]}}let r1=1;const yd={};class a1{constructor(t,{vertex:e,fragment:i,uniforms:s={},transparent:r=!1,cullFace:a=t.BACK,frontFace:o=t.CCW,depthTest:l=!0,depthWrite:c=!0,depthFunc:d=t.LEQUAL}={}){t.canvas||console.error("gl not passed as first argument to Program"),this.gl=t,this.uniforms=s,this.id=r1++,e||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=r,this.cullFace=a,this.frontFace=o,this.depthTest=l,this.depthWrite=c,this.depthFunc=d,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=t.createShader(t.VERTEX_SHADER),this.fragmentShader=t.createShader(t.FRAGMENT_SHADER),this.program=t.createProgram(),t.attachShader(this.program,this.vertexShader),t.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:e,fragment:i})}setShaders({vertex:t,fragment:e}){if(t&&(this.gl.shaderSource(this.vertexShader,t),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${Sd(t)}`)),e&&(this.gl.shaderSource(this.fragmentShader,e),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${Sd(e)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<i;a++){let o=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));const l=o.name.match(/(\w+)/g);o.uniformName=l[0],o.nameComponents=l.slice(1)}this.attributeLocations=new Map;const s=[],r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const o=this.gl.getActiveAttrib(this.program,a),l=this.gl.getAttribLocation(this.program,o.name);l!==-1&&(s[l]=o.name,this.attributeLocations.set(o,l))}this.attributeOrder=s.join("")}setBlendFunc(t,e,i,s){this.blendFunc.src=t,this.blendFunc.dst=e,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=s,t&&(this.transparent=!0)}setBlendEquation(t,e){this.blendEquation.modeRGB=t,this.blendEquation.modeAlpha=e}setStencilFunc(t,e,i){this.stencilRef=e,this.stencilFunc.func=t,this.stencilFunc.ref=e,this.stencilFunc.mask=i}setStencilOp(t,e,i){this.stencilOp.stencilFail=t,this.stencilOp.depthFail=e,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:t=!1}={}){let e=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((s,r)=>{let a=this.uniforms[r.uniformName];for(const o of r.nameComponents){if(!a)break;if(o in a)a=a[o];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return bd(`Active uniform ${r.name} has not been supplied`);if(a&&a.value===void 0)return bd(`${r.name} uniform is missing a value parameter`);if(a.value.texture)return e=e+1,a.value.update(e),zo(this.gl,r.type,s,e);if(a.value.length&&a.value[0].texture){const o=[];return a.value.forEach(l=>{e=e+1,l.update(e),o.push(e)}),zo(this.gl,r.type,s,o)}zo(this.gl,r.type,s,a.value)}),this.applyState(),t&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function zo(n,t,e,i){i=i.length?o1(i):i;const s=n.renderer.state.uniformLocations.get(e);if(i.length)if(s===void 0||s.length!==i.length)n.renderer.state.uniformLocations.set(e,i.slice(0));else{if(l1(s,i))return;s.set?s.set(i):c1(s,i),n.renderer.state.uniformLocations.set(e,s)}else{if(s===i)return;n.renderer.state.uniformLocations.set(e,i)}switch(t){case 5126:return i.length?n.uniform1fv(e,i):n.uniform1f(e,i);case 35664:return n.uniform2fv(e,i);case 35665:return n.uniform3fv(e,i);case 35666:return n.uniform4fv(e,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?n.uniform1iv(e,i):n.uniform1i(e,i);case 35671:case 35667:return n.uniform2iv(e,i);case 35672:case 35668:return n.uniform3iv(e,i);case 35673:case 35669:return n.uniform4iv(e,i);case 35674:return n.uniformMatrix2fv(e,!1,i);case 35675:return n.uniformMatrix3fv(e,!1,i);case 35676:return n.uniformMatrix4fv(e,!1,i)}}function Sd(n){let t=n.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function o1(n){const t=n.length,e=n[0].length;if(e===void 0)return n;const i=t*e;let s=yd[i];s||(yd[i]=s=new Float32Array(i));for(let r=0;r<t;r++)s.set(n[r],r*e);return s}function l1(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function c1(n,t){for(let e=0,i=n.length;e<i;e++)n[e]=t[e]}let ko=0;function bd(n){ko>100||(console.warn(n),ko++,ko>100&&console.warn("More than 100 program warnings - stopping logs."))}const Go=new Ln;let h1=1;class d1{constructor({canvas:t=document.createElement("canvas"),width:e=300,height:i=150,dpr:s=1,alpha:r=!1,depth:a=!0,stencil:o=!1,antialias:l=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:d=!1,powerPreference:p="default",autoClear:h=!0,webgl:f=2}={}){const g={alpha:r,depth:a,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:p};this.dpr=s,this.alpha=r,this.color=!0,this.depth=a,this.stencil=o,this.premultipliedAlpha=c,this.autoClear=h,this.id=h1++,f===2&&(this.gl=t.getContext("webgl2",g)),this.isWebgl2=!!this.gl,this.gl||(this.gl=t.getContext("webgl",g)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(e,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(t,e){this.width=t,this.height=e,this.gl.canvas.width=t*this.dpr,this.gl.canvas.height=e*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:t+"px",height:e+"px"})}setViewport(t,e,i=0,s=0){this.state.viewport.width===t&&this.state.viewport.height===e||(this.state.viewport.width=t,this.state.viewport.height=e,this.state.viewport.x=i,this.state.viewport.y=s,this.gl.viewport(i,s,t,e))}setScissor(t,e,i=0,s=0){this.gl.scissor(i,s,t,e)}enable(t){this.state[t]!==!0&&(this.gl.enable(t),this.state[t]=!0)}disable(t){this.state[t]!==!1&&(this.gl.disable(t),this.state[t]=!1)}setBlendFunc(t,e,i,s){this.state.blendFunc.src===t&&this.state.blendFunc.dst===e&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===s||(this.state.blendFunc.src=t,this.state.blendFunc.dst=e,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=s,i!==void 0?this.gl.blendFuncSeparate(t,e,i,s):this.gl.blendFunc(t,e))}setBlendEquation(t,e){t=t||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===t&&this.state.blendEquation.modeAlpha===e)&&(this.state.blendEquation.modeRGB=t,this.state.blendEquation.modeAlpha=e,e!==void 0?this.gl.blendEquationSeparate(t,e):this.gl.blendEquation(t))}setCullFace(t){this.state.cullFace!==t&&(this.state.cullFace=t,this.gl.cullFace(t))}setFrontFace(t){this.state.frontFace!==t&&(this.state.frontFace=t,this.gl.frontFace(t))}setDepthMask(t){this.state.depthMask!==t&&(this.state.depthMask=t,this.gl.depthMask(t))}setDepthFunc(t){this.state.depthFunc!==t&&(this.state.depthFunc=t,this.gl.depthFunc(t))}setStencilMask(t){this.state.stencilMask!==t&&(this.state.stencilMask=t,this.gl.stencilMask(t))}setStencilFunc(t,e,i){this.state.stencilFunc===t&&this.state.stencilRef===e&&this.state.stencilFuncMask===i||(this.state.stencilFunc=t||this.gl.ALWAYS,this.state.stencilRef=e||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(t||this.gl.ALWAYS,e||0,i||0))}setStencilOp(t,e,i){this.state.stencilFail===t&&this.state.stencilDepthFail===e&&this.state.stencilDepthPass===i||(this.state.stencilFail=t,this.state.stencilDepthFail=e,this.state.stencilDepthPass=i,this.gl.stencilOp(t,e,i))}activeTexture(t){this.state.activeTextureUnit!==t&&(this.state.activeTextureUnit=t,this.gl.activeTexture(this.gl.TEXTURE0+t))}bindFramebuffer({target:t=this.gl.FRAMEBUFFER,buffer:e=null}={}){this.state.framebuffer!==e&&(this.state.framebuffer=e,this.gl.bindFramebuffer(t,e))}getExtension(t,e,i){return e&&this.gl[e]?this.gl[e].bind(this.gl):(this.extensions[t]||(this.extensions[t]=this.gl.getExtension(t)),e?this.extensions[t]?this.extensions[t][i].bind(this.extensions[t]):null:this.extensions[t])}sortOpaque(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program.id!==e.program.id?t.program.id-e.program.id:t.zDepth!==e.zDepth?t.zDepth-e.zDepth:e.id-t.id}sortTransparent(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.zDepth!==e.zDepth?e.zDepth-t.zDepth:e.id-t.id}sortUI(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program.id!==e.program.id?t.program.id-e.program.id:e.id-t.id}getRenderList({scene:t,camera:e,frustumCull:i,sort:s}){let r=[];if(e&&i&&e.updateFrustum(),t.traverse(a=>{if(!a.visible)return!0;a.draw&&(i&&a.frustumCulled&&e&&!e.frustumIntersectsMesh(a)||r.push(a))}),s){const a=[],o=[],l=[];r.forEach(c=>{c.program.transparent?c.program.depthTest?o.push(c):l.push(c):a.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!e)&&(c.worldMatrix.getTranslation(Go),Go.applyMatrix4(e.projectionViewMatrix),c.zDepth=Go.z)}),a.sort(this.sortOpaque),o.sort(this.sortTransparent),l.sort(this.sortUI),r=a.concat(o,l)}return r}render({scene:t,camera:e,target:i=null,update:s=!0,sort:r=!0,frustumCull:a=!0,clear:o}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),s&&t.updateMatrixWorld(),e&&e.updateMatrixWorld(),this.getRenderList({scene:t,camera:e,frustumCull:a,sort:r}).forEach(c=>{c.draw({camera:e})})}}function u1(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function f1(n,t,e,i,s){return n[0]=t,n[1]=e,n[2]=i,n[3]=s,n}function p1(n,t){let e=t[0],i=t[1],s=t[2],r=t[3],a=e*e+i*i+s*s+r*r;return a>0&&(a=1/Math.sqrt(a)),n[0]=e*a,n[1]=i*a,n[2]=s*a,n[3]=r*a,n}function m1(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function g1(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function v1(n,t,e){e=e*.5;let i=Math.sin(e);return n[0]=i*t[0],n[1]=i*t[1],n[2]=i*t[2],n[3]=Math.cos(e),n}function Ed(n,t,e){let i=t[0],s=t[1],r=t[2],a=t[3],o=e[0],l=e[1],c=e[2],d=e[3];return n[0]=i*d+a*o+s*c-r*l,n[1]=s*d+a*l+r*o-i*c,n[2]=r*d+a*c+i*l-s*o,n[3]=a*d-i*o-s*l-r*c,n}function _1(n,t,e){e*=.5;let i=t[0],s=t[1],r=t[2],a=t[3],o=Math.sin(e),l=Math.cos(e);return n[0]=i*l+a*o,n[1]=s*l+r*o,n[2]=r*l-s*o,n[3]=a*l-i*o,n}function x1(n,t,e){e*=.5;let i=t[0],s=t[1],r=t[2],a=t[3],o=Math.sin(e),l=Math.cos(e);return n[0]=i*l-r*o,n[1]=s*l+a*o,n[2]=r*l+i*o,n[3]=a*l-s*o,n}function M1(n,t,e){e*=.5;let i=t[0],s=t[1],r=t[2],a=t[3],o=Math.sin(e),l=Math.cos(e);return n[0]=i*l+s*o,n[1]=s*l-i*o,n[2]=r*l+a*o,n[3]=a*l-r*o,n}function y1(n,t,e,i){let s=t[0],r=t[1],a=t[2],o=t[3],l=e[0],c=e[1],d=e[2],p=e[3],h,f,g,M,m;return f=s*l+r*c+a*d+o*p,f<0&&(f=-f,l=-l,c=-c,d=-d,p=-p),1-f>1e-6?(h=Math.acos(f),g=Math.sin(h),M=Math.sin((1-i)*h)/g,m=Math.sin(i*h)/g):(M=1-i,m=i),n[0]=M*s+m*l,n[1]=M*r+m*c,n[2]=M*a+m*d,n[3]=M*o+m*p,n}function S1(n,t){let e=t[0],i=t[1],s=t[2],r=t[3],a=e*e+i*i+s*s+r*r,o=a?1/a:0;return n[0]=-e*o,n[1]=-i*o,n[2]=-s*o,n[3]=r*o,n}function b1(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=t[3],n}function E1(n,t){let e=t[0]+t[4]+t[8],i;if(e>0)i=Math.sqrt(e+1),n[3]=.5*i,i=.5/i,n[0]=(t[5]-t[7])*i,n[1]=(t[6]-t[2])*i,n[2]=(t[1]-t[3])*i;else{let s=0;t[4]>t[0]&&(s=1),t[8]>t[s*3+s]&&(s=2);let r=(s+1)%3,a=(s+2)%3;i=Math.sqrt(t[s*3+s]-t[r*3+r]-t[a*3+a]+1),n[s]=.5*i,i=.5/i,n[3]=(t[r*3+a]-t[a*3+r])*i,n[r]=(t[r*3+s]+t[s*3+r])*i,n[a]=(t[a*3+s]+t[s*3+a])*i}return n}function w1(n,t,e="YXZ"){let i=Math.sin(t[0]*.5),s=Math.cos(t[0]*.5),r=Math.sin(t[1]*.5),a=Math.cos(t[1]*.5),o=Math.sin(t[2]*.5),l=Math.cos(t[2]*.5);return e==="XYZ"?(n[0]=i*a*l+s*r*o,n[1]=s*r*l-i*a*o,n[2]=s*a*o+i*r*l,n[3]=s*a*l-i*r*o):e==="YXZ"?(n[0]=i*a*l+s*r*o,n[1]=s*r*l-i*a*o,n[2]=s*a*o-i*r*l,n[3]=s*a*l+i*r*o):e==="ZXY"?(n[0]=i*a*l-s*r*o,n[1]=s*r*l+i*a*o,n[2]=s*a*o+i*r*l,n[3]=s*a*l-i*r*o):e==="ZYX"?(n[0]=i*a*l-s*r*o,n[1]=s*r*l+i*a*o,n[2]=s*a*o-i*r*l,n[3]=s*a*l+i*r*o):e==="YZX"?(n[0]=i*a*l+s*r*o,n[1]=s*r*l+i*a*o,n[2]=s*a*o-i*r*l,n[3]=s*a*l-i*r*o):e==="XZY"&&(n[0]=i*a*l-s*r*o,n[1]=s*r*l-i*a*o,n[2]=s*a*o+i*r*l,n[3]=s*a*l+i*r*o),n}const T1=u1,A1=f1,C1=m1,R1=p1;class P1 extends Array{constructor(t=0,e=0,i=0,s=1){super(t,e,i,s),this.onChange=()=>{},this._target=this;const r=["0","1","2","3"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&r.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set w(t){this._target[3]=t,this.onChange()}identity(){return g1(this._target),this.onChange(),this}set(t,e,i,s){return t.length?this.copy(t):(A1(this._target,t,e,i,s),this.onChange(),this)}rotateX(t){return _1(this._target,this._target,t),this.onChange(),this}rotateY(t){return x1(this._target,this._target,t),this.onChange(),this}rotateZ(t){return M1(this._target,this._target,t),this.onChange(),this}inverse(t=this._target){return S1(this._target,t),this.onChange(),this}conjugate(t=this._target){return b1(this._target,t),this.onChange(),this}copy(t){return T1(this._target,t),this.onChange(),this}normalize(t=this._target){return R1(this._target,t),this.onChange(),this}multiply(t,e){return e?Ed(this._target,t,e):Ed(this._target,this._target,t),this.onChange(),this}dot(t){return C1(this._target,t)}fromMatrix3(t){return E1(this._target,t),this.onChange(),this}fromEuler(t,e){return w1(this._target,t,t.order),e||this.onChange(),this}fromAxisAngle(t,e){return v1(this._target,t,e),this.onChange(),this}slerp(t,e){return y1(this._target,this._target,t,e),this.onChange(),this}fromArray(t,e=0){return this._target[0]=t[e],this._target[1]=t[e+1],this._target[2]=t[e+2],this._target[3]=t[e+3],this.onChange(),this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t}}const I1=1e-6;function L1(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function D1(n,t,e,i,s,r,a,o,l,c,d,p,h,f,g,M,m){return n[0]=t,n[1]=e,n[2]=i,n[3]=s,n[4]=r,n[5]=a,n[6]=o,n[7]=l,n[8]=c,n[9]=d,n[10]=p,n[11]=h,n[12]=f,n[13]=g,n[14]=M,n[15]=m,n}function F1(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function U1(n,t){let e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=t[9],h=t[10],f=t[11],g=t[12],M=t[13],m=t[14],u=t[15],y=e*o-i*a,S=e*l-s*a,x=e*c-r*a,w=i*l-s*o,E=i*c-r*o,A=s*c-r*l,_=d*M-p*g,b=d*m-h*g,C=d*u-f*g,R=p*m-h*M,D=p*u-f*M,G=h*u-f*m,F=y*G-S*D+x*R+w*C-E*b+A*_;return F?(F=1/F,n[0]=(o*G-l*D+c*R)*F,n[1]=(s*D-i*G-r*R)*F,n[2]=(M*A-m*E+u*w)*F,n[3]=(h*E-p*A-f*w)*F,n[4]=(l*C-a*G-c*b)*F,n[5]=(e*G-s*C+r*b)*F,n[6]=(m*x-g*A-u*S)*F,n[7]=(d*A-h*x+f*S)*F,n[8]=(a*D-o*C+c*_)*F,n[9]=(i*C-e*D-r*_)*F,n[10]=(g*E-M*x+u*y)*F,n[11]=(p*x-d*E-f*y)*F,n[12]=(o*b-a*R-l*_)*F,n[13]=(e*R-i*b+s*_)*F,n[14]=(M*S-g*w-m*y)*F,n[15]=(d*w-p*S+h*y)*F,n):null}function Bu(n){let t=n[0],e=n[1],i=n[2],s=n[3],r=n[4],a=n[5],o=n[6],l=n[7],c=n[8],d=n[9],p=n[10],h=n[11],f=n[12],g=n[13],M=n[14],m=n[15],u=t*a-e*r,y=t*o-i*r,S=t*l-s*r,x=e*o-i*a,w=e*l-s*a,E=i*l-s*o,A=c*g-d*f,_=c*M-p*f,b=c*m-h*f,C=d*M-p*g,R=d*m-h*g,D=p*m-h*M;return u*D-y*R+S*C+x*b-w*_+E*A}function wd(n,t,e){let i=t[0],s=t[1],r=t[2],a=t[3],o=t[4],l=t[5],c=t[6],d=t[7],p=t[8],h=t[9],f=t[10],g=t[11],M=t[12],m=t[13],u=t[14],y=t[15],S=e[0],x=e[1],w=e[2],E=e[3];return n[0]=S*i+x*o+w*p+E*M,n[1]=S*s+x*l+w*h+E*m,n[2]=S*r+x*c+w*f+E*u,n[3]=S*a+x*d+w*g+E*y,S=e[4],x=e[5],w=e[6],E=e[7],n[4]=S*i+x*o+w*p+E*M,n[5]=S*s+x*l+w*h+E*m,n[6]=S*r+x*c+w*f+E*u,n[7]=S*a+x*d+w*g+E*y,S=e[8],x=e[9],w=e[10],E=e[11],n[8]=S*i+x*o+w*p+E*M,n[9]=S*s+x*l+w*h+E*m,n[10]=S*r+x*c+w*f+E*u,n[11]=S*a+x*d+w*g+E*y,S=e[12],x=e[13],w=e[14],E=e[15],n[12]=S*i+x*o+w*p+E*M,n[13]=S*s+x*l+w*h+E*m,n[14]=S*r+x*c+w*f+E*u,n[15]=S*a+x*d+w*g+E*y,n}function N1(n,t,e){let i=e[0],s=e[1],r=e[2],a,o,l,c,d,p,h,f,g,M,m,u;return t===n?(n[12]=t[0]*i+t[4]*s+t[8]*r+t[12],n[13]=t[1]*i+t[5]*s+t[9]*r+t[13],n[14]=t[2]*i+t[6]*s+t[10]*r+t[14],n[15]=t[3]*i+t[7]*s+t[11]*r+t[15]):(a=t[0],o=t[1],l=t[2],c=t[3],d=t[4],p=t[5],h=t[6],f=t[7],g=t[8],M=t[9],m=t[10],u=t[11],n[0]=a,n[1]=o,n[2]=l,n[3]=c,n[4]=d,n[5]=p,n[6]=h,n[7]=f,n[8]=g,n[9]=M,n[10]=m,n[11]=u,n[12]=a*i+d*s+g*r+t[12],n[13]=o*i+p*s+M*r+t[13],n[14]=l*i+h*s+m*r+t[14],n[15]=c*i+f*s+u*r+t[15]),n}function O1(n,t,e){let i=e[0],s=e[1],r=e[2];return n[0]=t[0]*i,n[1]=t[1]*i,n[2]=t[2]*i,n[3]=t[3]*i,n[4]=t[4]*s,n[5]=t[5]*s,n[6]=t[6]*s,n[7]=t[7]*s,n[8]=t[8]*r,n[9]=t[9]*r,n[10]=t[10]*r,n[11]=t[11]*r,n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function B1(n,t,e,i){let s=i[0],r=i[1],a=i[2],o=Math.hypot(s,r,a),l,c,d,p,h,f,g,M,m,u,y,S,x,w,E,A,_,b,C,R,D,G,F,B;return Math.abs(o)<I1?null:(o=1/o,s*=o,r*=o,a*=o,l=Math.sin(e),c=Math.cos(e),d=1-c,p=t[0],h=t[1],f=t[2],g=t[3],M=t[4],m=t[5],u=t[6],y=t[7],S=t[8],x=t[9],w=t[10],E=t[11],A=s*s*d+c,_=r*s*d+a*l,b=a*s*d-r*l,C=s*r*d-a*l,R=r*r*d+c,D=a*r*d+s*l,G=s*a*d+r*l,F=r*a*d-s*l,B=a*a*d+c,n[0]=p*A+M*_+S*b,n[1]=h*A+m*_+x*b,n[2]=f*A+u*_+w*b,n[3]=g*A+y*_+E*b,n[4]=p*C+M*R+S*D,n[5]=h*C+m*R+x*D,n[6]=f*C+u*R+w*D,n[7]=g*C+y*R+E*D,n[8]=p*G+M*F+S*B,n[9]=h*G+m*F+x*B,n[10]=f*G+u*F+w*B,n[11]=g*G+y*F+E*B,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n)}function z1(n,t){return n[0]=t[12],n[1]=t[13],n[2]=t[14],n}function zu(n,t){let e=t[0],i=t[1],s=t[2],r=t[4],a=t[5],o=t[6],l=t[8],c=t[9],d=t[10];return n[0]=Math.hypot(e,i,s),n[1]=Math.hypot(r,a,o),n[2]=Math.hypot(l,c,d),n}function k1(n){let t=n[0],e=n[1],i=n[2],s=n[4],r=n[5],a=n[6],o=n[8],l=n[9],c=n[10];const d=t*t+e*e+i*i,p=s*s+r*r+a*a,h=o*o+l*l+c*c;return Math.sqrt(Math.max(d,p,h))}const ku=function(){const n=[1,1,1];return function(t,e){let i=n;zu(i,e);let s=1/i[0],r=1/i[1],a=1/i[2],o=e[0]*s,l=e[1]*r,c=e[2]*a,d=e[4]*s,p=e[5]*r,h=e[6]*a,f=e[8]*s,g=e[9]*r,M=e[10]*a,m=o+p+M,u=0;return m>0?(u=Math.sqrt(m+1)*2,t[3]=.25*u,t[0]=(h-g)/u,t[1]=(f-c)/u,t[2]=(l-d)/u):o>p&&o>M?(u=Math.sqrt(1+o-p-M)*2,t[3]=(h-g)/u,t[0]=.25*u,t[1]=(l+d)/u,t[2]=(f+c)/u):p>M?(u=Math.sqrt(1+p-o-M)*2,t[3]=(f-c)/u,t[0]=(l+d)/u,t[1]=.25*u,t[2]=(h+g)/u):(u=Math.sqrt(1+M-o-p)*2,t[3]=(l-d)/u,t[0]=(f+c)/u,t[1]=(h+g)/u,t[2]=.25*u),t}}();function G1(n,t,e,i){let s=rr([n[0],n[1],n[2]]);const r=rr([n[4],n[5],n[6]]),a=rr([n[8],n[9],n[10]]);Bu(n)<0&&(s=-s),e[0]=n[12],e[1]=n[13],e[2]=n[14];const l=n.slice(),c=1/s,d=1/r,p=1/a;l[0]*=c,l[1]*=c,l[2]*=c,l[4]*=d,l[5]*=d,l[6]*=d,l[8]*=p,l[9]*=p,l[10]*=p,ku(t,l),i[0]=s,i[1]=r,i[2]=a}function V1(n,t,e,i){const s=n,r=t[0],a=t[1],o=t[2],l=t[3],c=r+r,d=a+a,p=o+o,h=r*c,f=r*d,g=r*p,M=a*d,m=a*p,u=o*p,y=l*c,S=l*d,x=l*p,w=i[0],E=i[1],A=i[2];return s[0]=(1-(M+u))*w,s[1]=(f+x)*w,s[2]=(g-S)*w,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(h+u))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+S)*A,s[9]=(m-y)*A,s[10]=(1-(h+M))*A,s[11]=0,s[12]=e[0],s[13]=e[1],s[14]=e[2],s[15]=1,s}function H1(n,t){let e=t[0],i=t[1],s=t[2],r=t[3],a=e+e,o=i+i,l=s+s,c=e*a,d=i*a,p=i*o,h=s*a,f=s*o,g=s*l,M=r*a,m=r*o,u=r*l;return n[0]=1-p-g,n[1]=d+u,n[2]=h-m,n[3]=0,n[4]=d-u,n[5]=1-c-g,n[6]=f+M,n[7]=0,n[8]=h+m,n[9]=f-M,n[10]=1-c-p,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function W1(n,t,e,i,s){let r=1/Math.tan(t/2),a=1/(i-s);return n[0]=r/e,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=r,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=(s+i)*a,n[11]=-1,n[12]=0,n[13]=0,n[14]=2*s*i*a,n[15]=0,n}function X1(n,t,e,i,s,r,a){let o=1/(t-e),l=1/(i-s),c=1/(r-a);return n[0]=-2*o,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*l,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*c,n[11]=0,n[12]=(t+e)*o,n[13]=(s+i)*l,n[14]=(a+r)*c,n[15]=1,n}function q1(n,t,e,i){let s=t[0],r=t[1],a=t[2],o=i[0],l=i[1],c=i[2],d=s-e[0],p=r-e[1],h=a-e[2],f=d*d+p*p+h*h;f===0?h=1:(f=1/Math.sqrt(f),d*=f,p*=f,h*=f);let g=l*h-c*p,M=c*d-o*h,m=o*p-l*d;return f=g*g+M*M+m*m,f===0&&(c?o+=1e-6:l?c+=1e-6:l+=1e-6,g=l*h-c*p,M=c*d-o*h,m=o*p-l*d,f=g*g+M*M+m*m),f=1/Math.sqrt(f),g*=f,M*=f,m*=f,n[0]=g,n[1]=M,n[2]=m,n[3]=0,n[4]=p*m-h*M,n[5]=h*g-d*m,n[6]=d*M-p*g,n[7]=0,n[8]=d,n[9]=p,n[10]=h,n[11]=0,n[12]=s,n[13]=r,n[14]=a,n[15]=1,n}function Td(n,t,e){return n[0]=t[0]+e[0],n[1]=t[1]+e[1],n[2]=t[2]+e[2],n[3]=t[3]+e[3],n[4]=t[4]+e[4],n[5]=t[5]+e[5],n[6]=t[6]+e[6],n[7]=t[7]+e[7],n[8]=t[8]+e[8],n[9]=t[9]+e[9],n[10]=t[10]+e[10],n[11]=t[11]+e[11],n[12]=t[12]+e[12],n[13]=t[13]+e[13],n[14]=t[14]+e[14],n[15]=t[15]+e[15],n}function Ad(n,t,e){return n[0]=t[0]-e[0],n[1]=t[1]-e[1],n[2]=t[2]-e[2],n[3]=t[3]-e[3],n[4]=t[4]-e[4],n[5]=t[5]-e[5],n[6]=t[6]-e[6],n[7]=t[7]-e[7],n[8]=t[8]-e[8],n[9]=t[9]-e[9],n[10]=t[10]-e[10],n[11]=t[11]-e[11],n[12]=t[12]-e[12],n[13]=t[13]-e[13],n[14]=t[14]-e[14],n[15]=t[15]-e[15],n}function Y1(n,t,e){return n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n[3]=t[3]*e,n[4]=t[4]*e,n[5]=t[5]*e,n[6]=t[6]*e,n[7]=t[7]*e,n[8]=t[8]*e,n[9]=t[9]*e,n[10]=t[10]*e,n[11]=t[11]*e,n[12]=t[12]*e,n[13]=t[13]*e,n[14]=t[14]*e,n[15]=t[15]*e,n}class Ra extends Array{constructor(t=1,e=0,i=0,s=0,r=0,a=1,o=0,l=0,c=0,d=0,p=1,h=0,f=0,g=0,M=0,m=1){return super(t,e,i,s,r,a,o,l,c,d,p,h,f,g,M,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(t){this[12]=t}set y(t){this[13]=t}set z(t){this[14]=t}set w(t){this[15]=t}set(t,e,i,s,r,a,o,l,c,d,p,h,f,g,M,m){return t.length?this.copy(t):(D1(this,t,e,i,s,r,a,o,l,c,d,p,h,f,g,M,m),this)}translate(t,e=this){return N1(this,e,t),this}rotate(t,e,i=this){return B1(this,i,t,e),this}scale(t,e=this){return O1(this,e,typeof t=="number"?[t,t,t]:t),this}add(t,e){return e?Td(this,t,e):Td(this,this,t),this}sub(t,e){return e?Ad(this,t,e):Ad(this,this,t),this}multiply(t,e){return t.length?e?wd(this,t,e):wd(this,this,t):Y1(this,this,t),this}identity(){return F1(this),this}copy(t){return L1(this,t),this}fromPerspective({fov:t,aspect:e,near:i,far:s}={}){return W1(this,t,e,i,s),this}fromOrthogonal({left:t,right:e,bottom:i,top:s,near:r,far:a}){return X1(this,t,e,i,s,r,a),this}fromQuaternion(t){return H1(this,t),this}setPosition(t){return this.x=t[0],this.y=t[1],this.z=t[2],this}inverse(t=this){return U1(this,t),this}compose(t,e,i){return V1(this,t,e,i),this}decompose(t,e,i){return G1(this,t,e,i),this}getRotation(t){return ku(t,this),this}getTranslation(t){return z1(t,this),this}getScaling(t){return zu(t,this),this}getMaxScaleOnAxis(){return k1(this)}lookAt(t,e,i){return q1(this,t,e,i),this}determinant(){return Bu(this)}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this[3]=t[e+3],this[4]=t[e+4],this[5]=t[e+5],this[6]=t[e+6],this[7]=t[e+7],this[8]=t[e+8],this[9]=t[e+9],this[10]=t[e+10],this[11]=t[e+11],this[12]=t[e+12],this[13]=t[e+13],this[14]=t[e+14],this[15]=t[e+15],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t[e+4]=this[4],t[e+5]=this[5],t[e+6]=this[6],t[e+7]=this[7],t[e+8]=this[8],t[e+9]=this[9],t[e+10]=this[10],t[e+11]=this[11],t[e+12]=this[12],t[e+13]=this[13],t[e+14]=this[14],t[e+15]=this[15],t}}function $1(n,t,e="YXZ"){return e==="XYZ"?(n[1]=Math.asin(Math.min(Math.max(t[8],-1),1)),Math.abs(t[8])<.99999?(n[0]=Math.atan2(-t[9],t[10]),n[2]=Math.atan2(-t[4],t[0])):(n[0]=Math.atan2(t[6],t[5]),n[2]=0)):e==="YXZ"?(n[0]=Math.asin(-Math.min(Math.max(t[9],-1),1)),Math.abs(t[9])<.99999?(n[1]=Math.atan2(t[8],t[10]),n[2]=Math.atan2(t[1],t[5])):(n[1]=Math.atan2(-t[2],t[0]),n[2]=0)):e==="ZXY"?(n[0]=Math.asin(Math.min(Math.max(t[6],-1),1)),Math.abs(t[6])<.99999?(n[1]=Math.atan2(-t[2],t[10]),n[2]=Math.atan2(-t[4],t[5])):(n[1]=0,n[2]=Math.atan2(t[1],t[0]))):e==="ZYX"?(n[1]=Math.asin(-Math.min(Math.max(t[2],-1),1)),Math.abs(t[2])<.99999?(n[0]=Math.atan2(t[6],t[10]),n[2]=Math.atan2(t[1],t[0])):(n[0]=0,n[2]=Math.atan2(-t[4],t[5]))):e==="YZX"?(n[2]=Math.asin(Math.min(Math.max(t[1],-1),1)),Math.abs(t[1])<.99999?(n[0]=Math.atan2(-t[9],t[5]),n[1]=Math.atan2(-t[2],t[0])):(n[0]=0,n[1]=Math.atan2(t[8],t[10]))):e==="XZY"&&(n[2]=Math.asin(-Math.min(Math.max(t[4],-1),1)),Math.abs(t[4])<.99999?(n[0]=Math.atan2(t[6],t[5]),n[1]=Math.atan2(t[8],t[0])):(n[0]=Math.atan2(-t[9],t[10]),n[1]=0)),n}const Cd=new Ra;class Z1 extends Array{constructor(t=0,e=t,i=t,s="YXZ"){super(t,e,i),this.order=s,this.onChange=()=>{},this._target=this;const r=["0","1","2"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&r.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set(t,e=t,i=t){return t.length?this.copy(t):(this._target[0]=t,this._target[1]=e,this._target[2]=i,this.onChange(),this)}copy(t){return this._target[0]=t[0],this._target[1]=t[1],this._target[2]=t[2],this.onChange(),this}reorder(t){return this._target.order=t,this.onChange(),this}fromRotationMatrix(t,e=this.order){return $1(this._target,t,e),this.onChange(),this}fromQuaternion(t,e=this.order,i){return Cd.fromQuaternion(t),this._target.fromRotationMatrix(Cd,e),i||this.onChange(),this}fromArray(t,e=0){return this._target[0]=t[e],this._target[1]=t[e+1],this._target[2]=t[e+2],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t}}class J1{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Ra,this.worldMatrix=new Ra,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new Ln,this.quaternion=new P1,this.scale=new Ln(1),this.rotation=new Z1,this.up=new Ln(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(t,e=!0){this.parent&&t!==this.parent&&this.parent.removeChild(this,!1),this.parent=t,e&&t&&t.addChild(this,!1)}addChild(t,e=!0){~this.children.indexOf(t)||this.children.push(t),e&&t.setParent(this,!1)}removeChild(t,e=!0){~this.children.indexOf(t)&&this.children.splice(this.children.indexOf(t),1),e&&t.setParent(null,!1)}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||t)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,t=!0);for(let e=0,i=this.children.length;e<i;e++)this.children[e].updateMatrixWorld(t)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(t){if(!t(this))for(let e=0,i=this.children.length;e<i;e++)this.children[e].traverse(t)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(t,e=!1){e?this.matrix.lookAt(this.position,t,this.up):this.matrix.lookAt(t,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function K1(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[4],n[4]=t[5],n[5]=t[6],n[6]=t[8],n[7]=t[9],n[8]=t[10],n}function Q1(n,t){let e=t[0],i=t[1],s=t[2],r=t[3],a=e+e,o=i+i,l=s+s,c=e*a,d=i*a,p=i*o,h=s*a,f=s*o,g=s*l,M=r*a,m=r*o,u=r*l;return n[0]=1-p-g,n[3]=d-u,n[6]=h+m,n[1]=d+u,n[4]=1-c-g,n[7]=f-M,n[2]=h-m,n[5]=f+M,n[8]=1-c-p,n}function j1(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n}function tM(n,t,e,i,s,r,a,o,l,c){return n[0]=t,n[1]=e,n[2]=i,n[3]=s,n[4]=r,n[5]=a,n[6]=o,n[7]=l,n[8]=c,n}function eM(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=1,n[5]=0,n[6]=0,n[7]=0,n[8]=1,n}function nM(n,t){let e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=d*a-o*c,h=-d*r+o*l,f=c*r-a*l,g=e*p+i*h+s*f;return g?(g=1/g,n[0]=p*g,n[1]=(-d*i+s*c)*g,n[2]=(o*i-s*a)*g,n[3]=h*g,n[4]=(d*e-s*l)*g,n[5]=(-o*e+s*r)*g,n[6]=f*g,n[7]=(-c*e+i*l)*g,n[8]=(a*e-i*r)*g,n):null}function Rd(n,t,e){let i=t[0],s=t[1],r=t[2],a=t[3],o=t[4],l=t[5],c=t[6],d=t[7],p=t[8],h=e[0],f=e[1],g=e[2],M=e[3],m=e[4],u=e[5],y=e[6],S=e[7],x=e[8];return n[0]=h*i+f*a+g*c,n[1]=h*s+f*o+g*d,n[2]=h*r+f*l+g*p,n[3]=M*i+m*a+u*c,n[4]=M*s+m*o+u*d,n[5]=M*r+m*l+u*p,n[6]=y*i+S*a+x*c,n[7]=y*s+S*o+x*d,n[8]=y*r+S*l+x*p,n}function iM(n,t,e){let i=t[0],s=t[1],r=t[2],a=t[3],o=t[4],l=t[5],c=t[6],d=t[7],p=t[8],h=e[0],f=e[1];return n[0]=i,n[1]=s,n[2]=r,n[3]=a,n[4]=o,n[5]=l,n[6]=h*i+f*a+c,n[7]=h*s+f*o+d,n[8]=h*r+f*l+p,n}function sM(n,t,e){let i=t[0],s=t[1],r=t[2],a=t[3],o=t[4],l=t[5],c=t[6],d=t[7],p=t[8],h=Math.sin(e),f=Math.cos(e);return n[0]=f*i+h*a,n[1]=f*s+h*o,n[2]=f*r+h*l,n[3]=f*a-h*i,n[4]=f*o-h*s,n[5]=f*l-h*r,n[6]=c,n[7]=d,n[8]=p,n}function rM(n,t,e){let i=e[0],s=e[1];return n[0]=i*t[0],n[1]=i*t[1],n[2]=i*t[2],n[3]=s*t[3],n[4]=s*t[4],n[5]=s*t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n}function aM(n,t){let e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=t[9],h=t[10],f=t[11],g=t[12],M=t[13],m=t[14],u=t[15],y=e*o-i*a,S=e*l-s*a,x=e*c-r*a,w=i*l-s*o,E=i*c-r*o,A=s*c-r*l,_=d*M-p*g,b=d*m-h*g,C=d*u-f*g,R=p*m-h*M,D=p*u-f*M,G=h*u-f*m,F=y*G-S*D+x*R+w*C-E*b+A*_;return F?(F=1/F,n[0]=(o*G-l*D+c*R)*F,n[1]=(l*C-a*G-c*b)*F,n[2]=(a*D-o*C+c*_)*F,n[3]=(s*D-i*G-r*R)*F,n[4]=(e*G-s*C+r*b)*F,n[5]=(i*C-e*D-r*_)*F,n[6]=(M*A-m*E+u*w)*F,n[7]=(m*x-g*A-u*S)*F,n[8]=(g*E-M*x+u*y)*F,n):null}class oM extends Array{constructor(t=1,e=0,i=0,s=0,r=1,a=0,o=0,l=0,c=1){return super(t,e,i,s,r,a,o,l,c),this}set(t,e,i,s,r,a,o,l,c){return t.length?this.copy(t):(tM(this,t,e,i,s,r,a,o,l,c),this)}translate(t,e=this){return iM(this,e,t),this}rotate(t,e=this){return sM(this,e,t),this}scale(t,e=this){return rM(this,e,t),this}multiply(t,e){return e?Rd(this,t,e):Rd(this,this,t),this}identity(){return eM(this),this}copy(t){return j1(this,t),this}fromMatrix4(t){return K1(this,t),this}fromQuaternion(t){return Q1(this,t),this}fromBasis(t,e,i){return this.set(t[0],t[1],t[2],e[0],e[1],e[2],i[0],i[1],i[2]),this}inverse(t=this){return nM(this,t),this}getNormalMatrix(t){return aM(this,t),this}}let lM=0;class cM extends J1{constructor(t,{geometry:e,program:i,mode:s=t.TRIANGLES,frustumCulled:r=!0,renderOrder:a=0}={}){super(),t.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=t,this.id=lM++,this.geometry=e,this.program=i,this.mode=s,this.frustumCulled=r,this.renderOrder=a,this.modelViewMatrix=new Ra,this.normalMatrix=new oM,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(t){return this.beforeRenderCallbacks.push(t),this}onAfterRender(t){return this.afterRenderCallbacks.push(t),this}draw({camera:t}={}){t&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=t.projectionMatrix,this.program.uniforms.cameraPosition.value=t.worldPosition,this.program.uniforms.viewMatrix.value=t.viewMatrix,this.modelViewMatrix.multiply(t.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:t}));let e=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:e}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:t}))}}class hM extends s1{constructor(t,{attributes:e={}}={}){Object.assign(e,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(t,e)}}const Vo=n=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]},dM=n=>n==="low"?40:n==="high"?110:70,uM=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,fM=`#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uAmplitude;
uniform float uWaveScale;
uniform float uWaveRatio;
uniform float uSwell;
uniform float uTurbulence;
uniform float uTilt;
uniform float uZoom;
uniform float uHeight;
uniform float uFogDepth;
uniform float uSteps;
uniform float uBrightness;
uniform float uOpacity;
uniform float uGrain;
uniform float uGrainIntensity;
uniform vec2 uMouse;
uniform float uParallax;
uniform bool uEnableMouse;
uniform vec3 uHorizonColor;
uniform vec3 uWaveColor;
uniform vec3 uCrestColor;
out vec4 fragColor;

const float MAX_DIST = 20000.0;

float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float plasma(vec3 r, vec2 freq, vec4 tc) {
  float mx = r.x + tc.x;
  mx += uSwell * sin((r.y + mx) / 20.0 + tc.y);
  float my = r.y - tc.z;
  my += uTurbulence * cos(r.x / 23.0 + tc.w);
  return r.z - (sin(mx * freq.x) * uAmplitude + sin(my * freq.y) * uAmplitude + uHeight);
}

float raymarch(vec3 pos, vec3 dir, vec2 freq, vec4 tc) {
  float dist = 0.0;
  for (int i = 0; i < 128; i++) {
    if (float(i) >= uSteps) break;
    float dscene = plasma(pos + dist * dir, freq, tc);
    if (abs(dscene) < 0.1) break;
    dist += 0.9 * dscene;
    if (!(abs(dist) < MAX_DIST)) return MAX_DIST;
  }
  return dist;
}

void main() {
  float T = iTime * uSpeed;
  vec2 freq = vec2(uWaveScale / 7.0, (uWaveScale * uWaveRatio) / 3.0);
  vec4 tc = vec4(T / 0.130, T / 0.810, T / 0.200, T / 0.710);
  float c, s;
  float vfov = (3.14159 / 2.3) / max(uZoom, 0.05);
  vec3 cam = vec3(0.0, 0.0, 30.0);
  vec2 uv = (gl_FragCoord.xy / iResolution.xy) - 0.5;
  uv.x *= iResolution.x / iResolution.y;
  uv.y *= -1.0;

  vec3 dir = vec3(0.0, 0.0, -1.0);
  float ulen = length(uv);
  float xrot = vfov * ulen;
  c = cos(xrot); s = sin(xrot);
  dir = mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c) * dir;
  vec2 nuv = ulen > 1e-5 ? uv / ulen : vec2(1.0, 0.0);
  c = nuv.x; s = nuv.y;
  dir = mat3(c, -s, 0.0, s, c, 0.0, 0.0, 0.0, 1.0) * dir;
  c = cos(uTilt); s = sin(uTilt);
  dir = mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c) * dir;

  if (uEnableMouse) {
    float yaw = (uMouse.x - 0.5) * uParallax * 0.4;
    float pitch = (uMouse.y - 0.5) * uParallax * 0.4;
    c = cos(yaw); s = sin(yaw);
    dir = mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c) * dir;
    c = cos(pitch); s = sin(pitch);
    dir = mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c) * dir;
  }

  float dist = raymarch(cam, dir, freq, tc);
  vec3 pos = cam + dist * dir;

  float t = clamp(uFogDepth / max(dist, 0.001), 0.0, 1.0);
  vec3 body = mix(uWaveColor, uCrestColor, clamp(pos.z * 0.08 + 0.5, 0.0, 1.0));
  vec3 col = mix(uHorizonColor, body, t);
  col *= uBrightness;
  col = clamp(col, 0.0, 1.0);

  float alpha = clamp(t, 0.0, 1.0) * uOpacity;
  if (uGrain > 0.5) {
    float g = hash21(gl_FragCoord.xy + mod(iTime, 64.0) * 11.0);
    alpha += (g - 0.5) * uGrainIntensity;
  }
  alpha = clamp(alpha, 0.0, 1.0);
  fragColor = vec4(col * alpha, alpha);
}
`;function pM(n,t={}){const{horizonColor:e="#5227FF",waveColor:i="#FF9FFC",crestColor:s="#FFFFFF",speed:r=.4,amplitude:a=2.5,waveScale:o=.6,waveRatio:l=.9,swell:c=35,turbulence:d=20,tilt:p=1.11,zoom:h=1,height:f=5.5,fogDepth:g=15,detail:M="medium",brightness:m=1,opacity:u=1,mouseInteraction:y=!0,parallaxStrength:S=.5,grain:x=!0,grainIntensity:w=.05}=t,E=new d1({webgl:2,alpha:!0,premultipliedAlpha:!0,antialias:!1,dpr:Math.min(window.devicePixelRatio||1,2)}),A=E.gl;A.clearColor(0,0,0,0);const _=A.canvas;_.style.width="100%",_.style.height="100%",_.style.display="block",n.appendChild(_);const b=Vo(e),C=Vo(i),R=Vo(s),D=new hM(A),G=new a1(A,{vertex:uM,fragment:fM,uniforms:{iTime:{value:0},iResolution:{value:new Float32Array([1,1])},uSpeed:{value:r},uAmplitude:{value:a},uWaveScale:{value:o},uWaveRatio:{value:l},uSwell:{value:c},uTurbulence:{value:d},uTilt:{value:p},uZoom:{value:h},uHeight:{value:f},uFogDepth:{value:g},uSteps:{value:dM(M)},uBrightness:{value:m},uOpacity:{value:u},uGrain:{value:x?1:0},uGrainIntensity:{value:w},uMouse:{value:new Float32Array([.5,.5])},uParallax:{value:S},uEnableMouse:{value:y},uHorizonColor:{value:new Float32Array(b)},uWaveColor:{value:new Float32Array(C)},uCrestColor:{value:new Float32Array(R)}}}),F=new cM(A,{geometry:D,program:G}),B=()=>{const Ct=n.getBoundingClientRect(),Pt=Math.max(1,Math.floor(Ct.width)),Ft=Math.max(1,Math.floor(Ct.height));E.setSize(Pt,Ft);const Qt=G.uniforms.iResolution.value;Qt[0]=A.drawingBufferWidth,Qt[1]=A.drawingBufferHeight,E.render({scene:F})},Y=new ResizeObserver(B);Y.observe(n),B();const k=[.5,.5],it=[.5,.5],st=Ct=>{const Pt=_.getBoundingClientRect();it[0]=(Ct.clientX-Pt.left)/Pt.width,it[1]=1-(Ct.clientY-Pt.top)/Pt.height},ft=()=>{it[0]=.5,it[1]=.5};n.addEventListener("pointermove",st),n.addEventListener("pointerleave",ft);let ht=0,_t=!document.hidden,Xt=!1;const Wt=performance.now(),Dt=Ct=>{G.uniforms.iTime.value=(Ct-Wt)*.001;const Pt=y?it[0]:.5,Ft=y?it[1]:.5;k[0]+=.05*(Pt-k[0]),k[1]+=.05*(Ft-k[1]);const Qt=G.uniforms.uMouse.value;Qt[0]=k[0],Qt[1]=k[1],E.render({scene:F}),ht=requestAnimationFrame(Dt)},tt=()=>{!Xt&&_t&&ht===0&&(ht=requestAnimationFrame(Dt))},pt=()=>{ht!==0&&(cancelAnimationFrame(ht),ht=0)},dt=()=>{_t=!document.hidden,_t?tt():pt()};return document.addEventListener("visibilitychange",dt),tt(),function(){var Pt;Xt=!0,pt(),Y.disconnect(),document.removeEventListener("visibilitychange",dt),n.removeEventListener("pointermove",st),n.removeEventListener("pointerleave",ft);try{n.removeChild(_)}catch{}(Pt=A.getExtension("WEBGL_lose_context"))==null||Pt.loseContext()}}const Ho=(n,t)=>{let e=n.startsWith("#")?n.slice(1):n;e.length===3&&(e=e.split("").map(o=>o+o).join(""));const i=parseInt(e.slice(0,6),16);let s=i>>16&255,r=i>>8&255,a=i&255;return s=Math.max(0,Math.min(255,Math.floor(s*(1-t)))),r=Math.max(0,Math.min(255,Math.floor(r*(1-t)))),a=Math.max(0,Math.min(255,Math.floor(a*(1-t)))),"#"+((1<<24)+(s<<16)+(r<<8)+a).toString(16).slice(1).toUpperCase()};function mM(n){const t=n.color??"#C9B9DF",e=Ho(t,.08);Ho("#ffffff",.1),Ho("#ffffff",.05);let i=!1;const s=document.createElement("div");s.className="folder-scale";const r=document.createElement("div");r.className="folder",r.setAttribute("role","button"),r.setAttribute("tabindex","0"),r.setAttribute("aria-expanded","false"),r.setAttribute("aria-label","打开文件夹"),r.style.setProperty("--folder-color",t),r.style.setProperty("--folder-back-color",e),s.appendChild(r);const a=document.createElement("div");a.className="folder__back",r.appendChild(a);const o=[];n.papers.slice(0,3).forEach((p,h)=>{const f=document.createElement("div");f.className=`paper paper-${h+1}`,p.image&&(f.style.backgroundImage=`url('${p.image}')`,f.style.backgroundSize="cover",f.style.backgroundPosition="center"),f.dataset.paperId=p.id;const g=document.createElement("div");g.className="paper-label",g.textContent=p.title,f.appendChild(g);const M=u=>{if(!i)return;const y=f.getBoundingClientRect(),S=y.left+y.width/2,x=y.top+y.height/2;f.style.setProperty("--magnet-x",`${(u.clientX-S)*.15}px`),f.style.setProperty("--magnet-y",`${(u.clientY-x)*.15}px`)},m=()=>{f.style.setProperty("--magnet-x","0px"),f.style.setProperty("--magnet-y","0px")};f.addEventListener("pointermove",M),f.addEventListener("pointerleave",m),f.addEventListener("click",u=>{i&&(u.stopPropagation(),n.onPaperClick(p.id))}),a.appendChild(f),o.push(f)});const l=document.createElement("div");l.className="folder__front",a.appendChild(l);const c=document.createElement("div");c.className="folder__front right",a.appendChild(c);const d=()=>{i=!i,r.classList.toggle("open",i),r.setAttribute("aria-expanded",String(i)),r.setAttribute("aria-label",i?"收起文件夹":"打开文件夹"),i||o.forEach(p=>{p.style.setProperty("--magnet-x","0px"),p.style.setProperty("--magnet-y","0px")})};return r.addEventListener("click",d),r.addEventListener("keydown",p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),d())}),{el:s,isOpen:()=>i,dispose:()=>{}}}const gM=(n,t)=>{const e=(n*.6180339887+.35)%1*2-1;return 1+t*e};function vM(n,t){var Xt;const e=t.items,i=t.columns??5,s=t.tileWidth??220,r=t.tileHeight??146,a=t.gap??16,o=t.tilt??14,l=t.turn??-12,c=t.roll??0,d=t.depth??120,p=t.speed??34,h=t.direction??"up",f=t.variance??.5,g=t.parallax??.55,M=t.lift??70,m=t.dim??.6,u=((Xt=window.matchMedia)==null?void 0:Xt.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,y=document.createElement("div");y.className="drift-wall",y.style.setProperty("--dw-tile-w",`${s}px`),y.style.setProperty("--dw-tile-h",`${r}px`),y.style.setProperty("--dw-gap",`${a}px`),y.style.setProperty("--dw-radius",`${t.radius??14}px`),y.style.setProperty("--dw-perspective",`${t.perspective??1200}px`),y.style.setProperty("--dw-lift",`${M}px`),y.style.setProperty("--dw-dim",String(m)),y.style.setProperty("--dw-edge",`${Math.max(0,(1-(t.fade??.55))*100)}%`),y.style.setProperty("--dw-overlay",t.overlayColor??"#0a0714");const S=document.createElement("div");S.className="drift-wall__plane",y.appendChild(S),n.appendChild(y);const x=Array.from({length:i},()=>[]);e.forEach((Wt,Dt)=>x[Dt%i].push(Wt));let w=n.clientHeight||600;const E=r+a,A=x.map(Wt=>{const Dt=Math.max(E,Wt.length*E),tt=Math.max(2,Math.ceil(w*1.8/Dt)+1);return{copyHeight:Dt,copies:tt}}),_=[];x.forEach((Wt,Dt)=>{const tt=document.createElement("div");tt.className="drift-wall__column";const pt=document.createElement("div");pt.className="drift-wall__track",tt.appendChild(pt),S.appendChild(tt),_.push(pt);const dt=A[Dt];for(let Ct=0;Ct<dt.copies;Ct++)Wt.forEach(Pt=>{const Ft=document.createElement("div");Ft.className="drift-wall__tile",Ft.setAttribute("role","button");const Qt=document.createElement("span");Qt.className="drift-wall__inner";const Vt=document.createElement("img");Vt.src=Pt.image,Vt.alt=Pt.title??"",Vt.loading="lazy",Vt.decoding="async",Vt.draggable=!1;const at=document.createElement("span");at.className="drift-wall__overlay",Qt.appendChild(Vt),Qt.appendChild(at),Ft.appendChild(Qt),t.onItemClick&&Ft.addEventListener("click",()=>t.onItemClick(Pt)),Ft.addEventListener("pointerenter",()=>{G=Dt,document.querySelectorAll(".drift-wall__tile.is-active").forEach(ut=>ut.classList.remove("is-active")),Ft.classList.add("is-active")}),Ft.addEventListener("pointerleave",()=>{G=-1,Ft.classList.remove("is-active")}),pt.appendChild(Ft)})});const b=h==="up"?1:-1,C=x.map((Wt,Dt)=>{const tt=Dt%2===0?1:-1;return p*gM(Dt,f)*b*tt}),R=A.map((Wt,Dt)=>Dt*E*.5%Wt.copyHeight),D=x.map(()=>0);let G=-1;const F={x:0,y:0},B={x:0,y:0};let Y=null,k=0;const it=(Wt,Dt)=>{S.style.transform=`translate(-50%, -50%) scale(1.18)rotateX(${o+Dt}deg) rotateY(${l+Wt}deg) rotateZ(${c}deg)translateZ(${-d}px)`};it(0,0);const st=Wt=>{Y===null&&(Y=Wt);const Dt=Math.min(.05,Math.max(0,Wt-Y)/1e3);Y=Wt;const tt=g*8,pt=F.x*tt,dt=-F.y*tt,Ct=1-Math.exp(-Dt/.12);if(B.x+=(pt-B.x)*Ct,B.y+=(dt-B.y)*Ct,it(B.x,B.y),!u)for(let Pt=0;Pt<_.length;Pt++){const Ft=A[Pt],Qt=G===Pt?0:1,Vt=C[Pt]*Qt,at=1-Math.exp(-Dt/(Vt===0?.16:.28));D[Pt]+=(Vt-D[Pt])*at;let ut=R[Pt]+D[Pt]*Dt;ut=(ut%Ft.copyHeight+Ft.copyHeight)%Ft.copyHeight,R[Pt]=ut,_[Pt].style.transform=`translate3d(0, ${-ut}px, 0)`}k=requestAnimationFrame(st)};k=requestAnimationFrame(st);const ft=Wt=>{const Dt=y.getBoundingClientRect();g>0&&!u&&(F.x=(Wt.clientX-Dt.left)/Dt.width-.5,F.y=(Wt.clientY-Dt.top)/Dt.height-.5)},ht=()=>{F.x=0,F.y=0};y.addEventListener("pointermove",ft),y.addEventListener("pointerleave",ht);const _t=new ResizeObserver(([Wt])=>{w=Wt.contentRect.height||600});return _t.observe(n),{dispose:()=>{cancelAnimationFrame(k),_t.disconnect(),y.removeEventListener("pointermove",ft),y.removeEventListener("pointerleave",ht),y.remove()}}}function _M(n){const t=n.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);return t?{h:parseFloat(t[1]),s:parseFloat(t[2]),l:parseFloat(t[3])}:{h:40,s:80,l:80}}function xM(n,t){const{h:e,s:i,l:s}=_M(n),r=`${e}deg ${i}% ${s}%`,a={},o=[100,60,50,40,30,20,10],l=["","-60","-50","-40","-30","-20","-10"];for(let c=0;c<o.length;c++)a[`--glow-color${l[c]}`]=`hsl(${r} / ${Math.min(o[c]*t,100)}%)`;return a}const MM=["80% 55%","69% 34%","8% 6%","41% 38%","86% 85%","82% 18%","51% 4%"],yM=["--gradient-one","--gradient-two","--gradient-three","--gradient-four","--gradient-five","--gradient-six","--gradient-seven"],SM=[0,1,2,0,1,2,1];function bM(n){const t={};for(let e=0;e<7;e++){const i=n[Math.min(SM[e],n.length-1)];t[yM[e]]=`radial-gradient(at ${MM[e]}, ${i} 0px, transparent 50%)`}return t["--gradient-base"]=`linear-gradient(${n[0]} 0 100%)`,t}function Gu(n){return 1-Math.pow(1-n,3)}function Pd(n){return n*n*n}function ia(n){const{start:t=0,end:e=100,duration:i=1e3,delay:s=0,ease:r=Gu,onUpdate:a,onEnd:o}=n,l=performance.now()+s;function c(){const d=performance.now()-l,p=Math.min(d/i,1);a(t+(e-t)*r(p)),p<1?requestAnimationFrame(c):o&&o()}setTimeout(()=>requestAnimationFrame(c),s)}function EM(n,t={}){const e=document.createElement("div");e.className="border-glow-card";const i=document.createElement("span");i.className="edge-light";const s=document.createElement("div");s.className="border-glow-inner",s.appendChild(n),e.appendChild(i),e.appendChild(s);const r=xM(t.glowColor??"280 70 75",t.glowIntensity??1),a=bM(t.colors??["#c084fc","#f472b6","#38bdf8"]);Object.entries({...r,...a}).forEach(([c,d])=>e.style.setProperty(c,d)),e.style.setProperty("--card-bg",t.backgroundColor??"#1A1424"),e.style.setProperty("--border-radius",`${t.borderRadius??24}px`),e.style.setProperty("--cone-spread",`${t.coneSpread??25}deg`),e.style.setProperty("--edge-proximity","0");const o=c=>{const d=e.getBoundingClientRect(),p=c.clientX-d.left,h=c.clientY-d.top,f=d.width/2,g=d.height/2,M=p-f,m=h-g;let u=1/0,y=1/0;M!==0&&(u=f/Math.abs(M)),m!==0&&(y=g/Math.abs(m));const S=Math.min(Math.max(1/Math.min(u,y),0),1);let x=Math.atan2(m,M)*(180/Math.PI)+90;x<0&&(x+=360),e.style.setProperty("--edge-proximity",(S*100).toFixed(2)),e.style.setProperty("--cursor-angle",`${x.toFixed(2)}deg`)},l=()=>e.style.setProperty("--edge-proximity","0");return e.addEventListener("pointermove",o),e.addEventListener("pointerleave",l),t.animated&&(e.style.setProperty("--cursor-angle","110deg"),ia({duration:500,onUpdate:p=>e.style.setProperty("--edge-proximity",String(p))}),ia({ease:Pd,duration:1500,end:50,onUpdate:p=>e.style.setProperty("--cursor-angle",`${355*(p/100)+110}deg`)}),ia({ease:Gu,delay:1500,duration:2250,start:50,end:100,onUpdate:p=>e.style.setProperty("--cursor-angle",`${355*(p/100)+110}deg`)}),ia({ease:Pd,delay:2500,duration:1500,start:100,end:0,onUpdate:p=>e.style.setProperty("--edge-proximity",String(p))})),{el:e,dispose:()=>{e.removeEventListener("pointermove",o),e.removeEventListener("pointerleave",l)}}}const wM=`
.gacha-canvas { position: absolute; inset: 0; }
.gacha-canvas canvas { display: block; }
.g-pill {
  position: absolute; z-index: 10; padding: 9px 16px; border-radius: 999px;
  background: rgba(255, 249, 241, .88); backdrop-filter: blur(6px);
  box-shadow: 0 6px 20px rgba(85, 68, 87, .18); font-size: 13px; letter-spacing: 1px;
  border: 1.5px solid rgba(245, 185, 197, .65); color: #554457;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", system-ui, sans-serif;
}
.g-title { top: 18px; left: 18px; font-weight: 700; }
.g-title small { display: block; font-weight: 400; font-size: 11px; opacity: .65; margin-top: 2px; }
.g-progress { top: 18px; right: 70px; font-weight: 700; }
.g-hint { bottom: 20px; left: 50%; transform: translateX(-50%); font-size: 12.5px; white-space: nowrap; }
.g-cardWrap {
  position: absolute; inset: 0; z-index: 20; display: flex; align-items: center; justify-content: center;
  background: rgba(85, 68, 87, .28); backdrop-filter: blur(4px);
  opacity: 0; pointer-events: none; transition: opacity .35s;
}
.g-cardWrap.show { opacity: 1; pointer-events: auto; }
.g-card {
  width: min(88vw, 380px); border-radius: 26px; padding: 18px 18px 16px;
  background: linear-gradient(160deg, #FFF9F1, #FFEDF2 70%, #F3E9FF);
  border: 2px solid #fff; color: #554457;
  box-shadow: 0 24px 60px rgba(85, 68, 87, .35), inset 0 0 0 1px rgba(245,185,197,.4);
  transform: scale(.82) translateY(14px); transition: transform .38s cubic-bezier(.2,1.6,.4,1);
  position: relative; overflow: hidden;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", system-ui, sans-serif;
}
.g-cardWrap.show .g-card { transform: scale(1) translateY(0); }
.g-card::before {
  content: ""; position: absolute; inset: 8px; border-radius: 20px; pointer-events: none;
  border: 1.5px dashed rgba(245, 185, 197, .8);
}
.g-card > * { position: relative; }
.g-cardImg {
  width: 100%; height: 148px; object-fit: cover; border-radius: 14px; display: block;
  margin-bottom: 12px; border: 1.5px solid rgba(245, 185, 197, .55);
  box-shadow: 0 6px 16px rgba(85, 68, 87, .18);
}
.g-cardBadge {
  display: inline-block; font-size: 11px; padding: 4px 12px; border-radius: 999px;
  background: #F5B9C5; color: #fff; letter-spacing: 2px; font-weight: 700; margin-bottom: 10px;
}
.g-cardBadge.dup { background: #C9B9DF; }
.g-cardTitle { font-size: 19px; font-weight: 800; line-height: 1.35; }
.g-cardMeta { font-size: 12px; opacity: .6; margin: 5px 0 10px; letter-spacing: .5px; }
.g-cardPoints { list-style: none; margin: 0; padding: 0 6px 0 0; max-height: 152px; overflow-y: auto; }
.g-cardPoints::-webkit-scrollbar { width: 5px; }
.g-cardPoints::-webkit-scrollbar-thumb { background: #F5B9C5; border-radius: 4px; }
.g-cardPoints::-webkit-scrollbar-track { background: rgba(245, 185, 197, .18); border-radius: 4px; }
.g-cardPoints li { font-size: 12.8px; line-height: 1.7; padding-left: 16px; position: relative; margin-bottom: 6px; }
.g-cardPoints li::before { content: "✿"; position: absolute; left: 0; color: #F5B9C5; font-size: 11px; }
.g-cardPoints li b { color: #C4648A; }
.g-cardBtns { display: flex; gap: 10px; margin-top: 14px; }
.g-cardBtns button {
  flex: 1; border: 0; border-radius: 14px; padding: 11px 0; font-size: 13.5px; font-weight: 700;
  letter-spacing: 1px; cursor: pointer; transition: transform .15s; font-family: inherit;
}
.g-cardBtns button:active { transform: scale(.96); }
.g-btnAgain { background: linear-gradient(135deg, #F5B9C5, #F0A0B0); color: #fff; box-shadow: 0 6px 16px rgba(240, 160, 176, .5); }
.g-btnClose { background: rgba(85, 68, 87, .08); color: #554457; }
@media (max-width: 640px) { .g-hint { font-size: 11px; } .g-progress { right: 60px; } }
`,Id=[{title:"小红书",meta:"产品设计部 · 2026.06—2026.09",img:"./intern/xhs.jpg",color:5,points:[["增长策略","深度参与产品 0-1 增长全流程，拆解目标用户与使用场景，提炼产品核心卖点，参与制定增长策略"],["数据驱动","对曝光量、CES、CTR、拉新转化及 DAU/MAU 等指标负责，定期复盘；搭建 AI Agent 工作流辅助选题与素材生产，内容产出效率提升 65%，推动核心指标环比提升 80%"],["活动营销","参与线上营销活动的主题构思与玩法设计，输出活动方案与宣传物料需求；负责活动上线前后的内容宣推，结合参与量、转化率及用户反馈复盘效果，沉淀可复用的 SOP"]]},{title:"Keep",meta:"运动消费事业部 · 2026.02—2026.06",img:"./intern/keep.jpg",color:1,points:[["项目统筹","负责市场调研与用户洞察，协助 6 个营销活动全链路落地；协同天猫、京东等渠道资源，实现活动整体曝光达 150w，有效拉新 60%，GMV 增长 30%"],["内容策划","规划新品上市排期，负责电商平台产品页面的内容策划，持续更新迭代素材库，沉淀产品宣发链路；负责 Keep 消费品账号栏目定位，通过选题优化，实现官号阅读量环比增长 40%，粉丝量增长 20%；进行物料线框绘制，协同设计/视觉完成海报、宣传片等制作与上线，强化品牌心智渗透"],["达人合作","制定 KOL/KOC 筛选标准与合作策略，借助 Agent 工具提供热点方向指导，构建并维护 UGC 内容生态，负责达人合作全流程管理"],["社群沉淀","建立地域社群，维护长期跑者/跑团合作关系，通过私域引流配合节点大促实现销售目标"]]},{title:"无忧传媒",meta:"商业化事业部 · 2025.06—2025.10",img:"./intern/joy.jpg",color:4,points:[["达人挖掘","基于业务需求与抖音平台数据，筛选并建联 200+ 达人，签约率达 50%，完成创作者拉新与分级维护"],["策略制定","动态配置头腰尾部达人资源，制定短视频内容投放策略与达人方向指导，单月 GMV 破万"],["投放调优","基于投放数据表现进行内容迭代，持续优化达人内容产出效率与转化率"]]}];function TM(n){const t=document.createElement("style");t.textContent=wM,n.appendChild(t),n.insertAdjacentHTML("beforeend",`
    <div class="gacha-canvas"></div>
    <div class="g-pill g-title">薯泥的实习经历</div>
    <div class="g-pill g-hint">🎀 点击扭蛋机，随机解锁一段实习经历</div>
    <div class="g-cardWrap">
      <div class="g-card">
        <img class="g-cardImg" src="" alt="实习照片" />
        <div class="g-cardTitle"></div>
        <div class="g-cardMeta"></div>
        <ul class="g-cardPoints"></ul>
        <div class="g-cardBtns">
          <button class="g-btnAgain">再扭一颗</button>
        </div>
      </div>
    </div>`);const e=n.querySelector(".gacha-canvas"),i=n.querySelector(".g-cardWrap"),s=new Fu({antialias:!0,alpha:!1});s.setPixelRatio(Math.min(devicePixelRatio,2)),s.setSize(n.clientWidth||innerWidth,n.clientHeight||innerHeight),s.toneMapping=Ha,s.toneMappingExposure=.92,e.appendChild(s.domElement);const r=new Ul;{const z=document.createElement("canvas");z.width=4,z.height=512;const H=z.getContext("2d"),q=H.createLinearGradient(0,0,0,512);q.addColorStop(0,"#2f8fd6"),q.addColorStop(.45,"#6cb8e8"),q.addColorStop(.78,"#b2ddf3"),q.addColorStop(1,"#e3f4fd"),H.fillStyle=q,H.fillRect(0,0,4,512),r.background=new He(z),r.background.colorSpace=_e}const a=new gn(42,(n.clientWidth||innerWidth)/(n.clientHeight||innerHeight),.1,200);{const z=new Ta(s),H=new Ul;H.background=new Ht(10407408);const q=(Z,Ot,ne,ye,Pe)=>{const Oe=new rt(new Ye(Pe,Pe,Pe),new Gi({color:Z}));Oe.position.set(Ot,ne,ye),H.add(Oe)};q(16103877,6,3,-4,3),q(12574142,-6,2,3,3),q(16774102,0,8,2,4),q(13220319,-3,-5,-5,3),r.environment=z.fromScene(H,.05).texture}r.add(new Su(13625599,16773602,.75));const o=new wa(16777215,1.35);o.position.set(6,10,5),r.add(o);const l=new wa(16770030,.5);l.position.set(-6,3,-4),r.add(l);const c=[{top:16103877,bottom:16774378},{top:12574142,bottom:16775665},{top:13220319,bottom:16771568},{top:11130591,bottom:16774878},{top:16107670,bottom:16775665},{top:15769776,bottom:15267071}],d=new ae;r.add(d);const p=new pe({color:16774376,roughness:.42,metalness:.02}),h=new pe({color:16103877,roughness:.35}),f=new pe({color:13220319,roughness:.4}),g=new pe({color:12574142,roughness:.4}),M=new pe({color:5588055,roughness:.6});function m(z,H,q){const Z=new yn,Ot=-z/2,ne=-H/2;return Z.moveTo(Ot+q,ne),Z.lineTo(Ot+z-q,ne),Z.quadraticCurveTo(Ot+z,ne,Ot+z,ne+q),Z.lineTo(Ot+z,ne+H-q),Z.quadraticCurveTo(Ot+z,ne+H,Ot+z-q,ne+H),Z.lineTo(Ot+q,ne+H),Z.quadraticCurveTo(Ot,ne+H,Ot,ne+H-q),Z.lineTo(Ot,ne+q),Z.quadraticCurveTo(Ot,ne,Ot+q,ne),Z}const u=3.1,y=2.5,S=2.5;{const z=m(u,y,.34),H=new Vn(z,{depth:S-.24,bevelEnabled:!0,bevelThickness:.12,bevelSize:.12,bevelSegments:4,curveSegments:16});H.translate(0,0,-2.26/2),d.add(new rt(H,p))}const x=S/2+.13,w=1.52,E=y/2+w-.12;{const z=new rt(new Re(1.02,1.12,.3,32),h);z.position.y=y/2+.1,d.add(z);const H=new rt(new Te(w,48,32),new $s({color:15398655,transparent:!0,opacity:.16,roughness:.06,clearcoat:1,clearcoatRoughness:.08,side:en,depthWrite:!1}));H.position.y=E,d.add(H);const q=new rt(new Te(w*.985,48,32,Math.PI*1.35,Math.PI*.18,Math.PI*.1,Math.PI*.28),new Gi({color:16777215,transparent:!0,opacity:.1,side:en,depthWrite:!1}));q.position.y=E,d.add(q);const Z=new rt(new Re(.92,.84,.26,32),p);Z.position.y=E+w-.1,d.add(Z);const Ot=new rt(new Te(.92,32,16,0,Math.PI*2,0,Math.PI/2),p);Ot.scale.y=.3,Ot.position.y=E+w+.02,d.add(Ot)}const A=[];function _(z,H=.34){const q=new ae,Z=new $s({color:z.top,roughness:.3,clearcoat:.35,transparent:!0,opacity:.97}),Ot=new $s({color:z.bottom,roughness:.3,clearcoat:.35,transparent:!0,opacity:.97}),ne=new rt(new Te(H,24,16,0,Math.PI*2,0,Math.PI/2),Z),ye=new rt(new Te(H,24,16,0,Math.PI*2,Math.PI/2,Math.PI/2),Ot),Pe=new rt(new Re(H*1.005,H*1.005,H*.26,24),new $s({color:z.top,roughness:.35,transparent:!0,opacity:.85}));q.add(ne,ye,Pe);const Oe={top:ne,bottom:ye,band:Pe};return q.userData=Oe,q}{let z=7;const H=()=>(z=z*16807%2147483647)/2147483647;for(let q=0;q<24;q++){const Z=_(c[q%c.length]),Ot=H()*Math.PI*2,ne=.2+H()*1,ye=-1.25+H()*1.5,Pe=Math.sqrt(Math.max(.05,(w-.45)**2-ye*ye)),Oe=Math.min(ne,Pe);Z.position.set(Math.cos(Ot)*Oe,E+ye,Math.sin(Ot)*Oe),Z.rotation.set(H()*Math.PI,H()*Math.PI,H()*Math.PI),Z.userData.spin=(H()-.5)*.5,d.add(Z),A.push(Z)}}const b=new ae;{const z=new rt(new Ze(.5,.075,16,40),h),H=new rt(new Re(.4,.4,.2,32),p);H.rotation.x=Math.PI/2;const q=new rt(new Ye(.08,.18,.08),h);q.position.set(0,.26,.12);const Z=new rt(new Re(.12,.12,.06,20),h);Z.rotation.x=Math.PI/2,Z.position.z=.12,b.add(z,H,q,Z),b.position.set(.78,.12,x+.05),d.add(b)}{const z=new rt(new Ye(.66,.92,.1),f);z.position.set(-.82,.42,x);const H=new rt(new Ye(.09,.42,.04),M);H.position.set(-.82,.52,x+.06);const q=new rt(new Re(.16,.16,.04,24),new pe({color:16111242,roughness:.25,metalness:.7}));q.rotation.x=Math.PI/2,q.position.set(-.82,.08,x+.06),d.add(z,H,q)}{const z=document.createElement("canvas");z.width=z.height=256;const H=z.getContext("2d");H.fillStyle="#FFF9F1",H.beginPath(),H.arc(128,128,120,0,7),H.fill(),H.strokeStyle="#F5B9C5",H.lineWidth=8,H.stroke(),H.fillStyle="#E87A95",H.font="900 44px system-ui",H.textAlign="center",H.fillText("SHUNI",128,122),H.font="700 26px system-ui",H.fillStyle="#9B7FC4",H.fillText("GACHA",128,156),H.fillStyle="#F0A0B0";for(let Ot=0;Ot<5;Ot++){const ne=Ot/5*Math.PI*2-Math.PI/2;H.beginPath(),H.arc(128+Math.cos(ne)*22,196+Math.sin(ne)*22,13,0,7),H.fill()}H.fillStyle="#F5D68A",H.beginPath(),H.arc(128,196,12,0,7),H.fill();const q=new He(z);q.colorSpace=_e;const Z=new rt(new tn(.4,32),new pe({map:q,roughness:.5,transparent:!0}));Z.position.set(-.85,1,x+.02),d.add(Z)}function C(z){const H=document.createElement("canvas");H.width=H.height=256;const q=H.getContext("2d");q.fillStyle="#FFF9F1",q.beginPath(),q.arc(128,128,118,0,7),q.fill(),z(q);const Z=new He(H);return Z.colorSpace=_e,Z}{const z=new rt(new tn(.42,32),new pe({map:C(Z=>{Z.strokeStyle="#F0A0B0",Z.lineWidth=9,Z.beginPath(),Z.arc(128,128,110,0,7),Z.stroke(),Z.fillStyle="#F0A0B0",Z.beginPath(),Z.moveTo(128,185),Z.bezierCurveTo(60,135,78,70,128,100),Z.bezierCurveTo(178,70,196,135,128,185),Z.fill()}),transparent:!0,roughness:.5}));z.position.set(0,.35,-x-.02),z.rotation.y=Math.PI,d.add(z);const H=new rt(new tn(.34,32),new pe({map:C(Z=>{Z.strokeStyle="#9B7FC4",Z.lineWidth=9,Z.beginPath(),Z.arc(128,128,110,0,7),Z.stroke(),Z.fillStyle="#C9B9DF",Z.beginPath();for(let Ot=0;Ot<10;Ot++){const ne=-Math.PI/2+Ot*Math.PI/5,ye=Ot%2?38:82,Pe=128+Math.cos(ne)*ye,Oe=132+Math.sin(ne)*ye;Ot?Z.lineTo(Pe,Oe):Z.moveTo(Pe,Oe)}Z.closePath(),Z.fill()}),transparent:!0,roughness:.5}));H.position.set(-u/2-.13,.3,0),H.rotation.y=-Math.PI/2,d.add(H);const q=new rt(new tn(.34,32),new pe({map:C(Z=>{Z.strokeStyle="#7FBF8A",Z.lineWidth=9,Z.beginPath(),Z.arc(128,128,110,0,7),Z.stroke(),Z.fillStyle="#F0A0B0",Z.beginPath(),Z.moveTo(88,100),Z.quadraticCurveTo(88,150,128,150),Z.quadraticCurveTo(168,150,168,100),Z.lineTo(150,116),Z.lineTo(137,96),Z.lineTo(128,114),Z.lineTo(119,96),Z.lineTo(106,116),Z.closePath(),Z.fill(),Z.strokeStyle="#7FBF8A",Z.lineWidth=10,Z.lineCap="round",Z.beginPath(),Z.moveTo(128,152),Z.lineTo(128,196),Z.stroke(),Z.fillStyle="#BFDDBE",Z.beginPath(),Z.ellipse(104,178,20,10,-.5,0,7),Z.fill(),Z.beginPath(),Z.ellipse(152,178,20,10,.5,0,7),Z.fill()}),transparent:!0,roughness:.5}));q.position.set(u/2+.13,.3,0),q.rotation.y=Math.PI/2,d.add(q);for(let Z=0;Z<3;Z++){const Ot=new rt(new Ye(.7,.07,.04),M);Ot.position.set(0,-.7-Z*.18,-x-.02),d.add(Ot)}}const R=new ae;{const z=new rt(new tn(.36,32),M);z.position.set(0,-.88,x-.02),d.add(z);const H=new rt(new Ze(.44,.05,12,32),g);H.position.set(0,-.88,x+.01),d.add(H);const q=new rt(new tn(.37,32),new pe({color:11918520,roughness:.4,side:en}));q.position.y=-.37,R.add(q),R.position.set(0,-.51,x+.02),d.add(R)}d.position.y=.2;const D=[];function G(z,H=.95){const q=new ae,Z=new pe({color:16777215,roughness:1,transparent:!0,opacity:H}),Ot=5+Math.floor(Math.random()*3);for(let ne=0;ne<Ot;ne++){const ye=.5+Math.random()*.7,Pe=new rt(new Te(ye,20,14),Z);Pe.position.set((ne-Ot/2)*.62+(Math.random()-.5)*.3,(Math.random()-.5)*.25,(Math.random()-.5)*.7),Pe.scale.y=.62,q.add(Pe)}return q.scale.setScalar(z),r.add(q),D.push(q),q}G(1.7,.9).position.set(0,-3,0),G(.9).position.set(-7.5,2.5,-5),G(.7).position.set(7,4.2,-6.5),G(.8).position.set(-6,-1.5,3.5),G(.6).position.set(6.5,-2.2,3),G(.55,.85).position.set(2.5,5.8,-8);const F=[];{const z=new $s({color:16777215,transparent:!0,opacity:.18,roughness:.03,clearcoat:1,iridescence:1,iridescenceIOR:1.3,side:en,depthWrite:!1});for(let H=0;H<12;H++){const q=.12+Math.random()*.3,Z=new rt(new Te(q,24,18),z);Z.position.set((Math.random()-.5)*12,Math.random()*8-3,(Math.random()-.5)*10-1),Z.userData={speed:.25+Math.random()*.45,sway:Math.random()*6.28},r.add(Z),F.push(Z)}}function B(){const z=document.createElement("canvas");z.width=z.height=64;const H=z.getContext("2d");H.translate(32,32),H.fillStyle="#fff",H.beginPath();for(let Z=0;Z<4;Z++)H.moveTo(0,-26),H.quadraticCurveTo(4,-4,26,0),H.quadraticCurveTo(4,4,0,26),H.quadraticCurveTo(-4,4,-26,0),H.quadraticCurveTo(-4,-4,0,-26);H.fill();const q=new He(z);return q.colorSpace=_e,q}function Y(z,H){const q=new Float32Array(z*3);for(let ye=0;ye<z;ye++){const Pe=Math.random()*Math.PI*2,Oe=4+Math.random()*9;q[ye*3]=Math.cos(Pe)*Oe,q[ye*3+1]=Math.random()*10-3,q[ye*3+2]=Math.sin(Pe)*Oe}const Z=new Ee;Z.setAttribute("position",new Ne(q,3));const Ot=new Vi({size:H,map:B(),transparent:!0,opacity:.9,depthWrite:!1,blending:ws,color:16774872}),ne=new Hi(Z,Ot);return r.add(ne),ne}const k=Y(40,.3),it=Y(30,.18);{const z=document.createElement("canvas");z.width=z.height=256;const H=z.getContext("2d"),q=H.createRadialGradient(128,128,0,128,128,128);q.addColorStop(0,"rgba(255,255,255,.95)"),q.addColorStop(.35,"rgba(255,246,214,.5)"),q.addColorStop(1,"rgba(255,246,214,0)"),H.fillStyle=q,H.fillRect(0,0,256,256);const Z=new He(z);Z.colorSpace=_e;const Ot=new Tp(new au({map:Z,transparent:!0,depthWrite:!1,blending:ws}));Ot.position.set(9,8,-7),Ot.scale.setScalar(9),r.add(Ot);const ne=document.createElement("canvas");ne.width=256,ne.height=32;const ye=ne.getContext("2d"),Pe=ye.createLinearGradient(0,0,256,0);["#ff9aa2","#ffd8a8","#fdffb6","#baffc9","#bae1ff","#e3baff"].forEach((un,oi)=>Pe.addColorStop(oi/5,un)),ye.fillStyle=Pe,ye.fillRect(0,0,256,32);const Oe=new He(ne);Oe.colorSpace=_e}const st=new O(0,1.5,0);let ft=.55,ht=1.12,_t=10,Xt=!0,Wt=0;function Dt(){a.position.set(st.x+_t*Math.sin(ht)*Math.sin(ft),st.y+_t*Math.cos(ht),st.z+_t*Math.sin(ht)*Math.cos(ft)),a.lookAt(st)}Dt();const tt=s.domElement;let pt=!1,dt=0,Ct=0,Pt=0,Ft=0,Qt=0;const Vt=z=>{pt=!0,dt=Pt=z.clientX,Ct=Ft=z.clientY,Qt=performance.now(),Xt=!1,Wt=performance.now(),tt.setPointerCapture(z.pointerId)},at=z=>{if(!pt){Kt(z);return}ft-=(z.clientX-dt)*.0052,ht=Math.min(1.5,Math.max(.35,ht-(z.clientY-Ct)*.004)),dt=z.clientX,Ct=z.clientY,Wt=performance.now(),Dt()},ut=z=>{pt=!1,Math.hypot(z.clientX-Pt,z.clientY-Ft)<7&&performance.now()-Qt<500&&ee(z),setTimeout(()=>{Xt=!0},3500)},vt=z=>{z.preventDefault(),_t=Math.min(17,Math.max(6,_t+z.deltaY*.01)),Wt=performance.now(),Dt()};tt.addEventListener("pointerdown",Vt),tt.addEventListener("pointermove",at),tt.addEventListener("pointerup",ut),tt.addEventListener("wheel",vt,{passive:!1});const It=new Eu,Rt=new Et;function $t(z){return Rt.set(z.clientX/tt.clientWidth*2-1,-(z.clientY/tt.clientHeight)*2+1),It.setFromCamera(Rt,a),It.intersectObject(d,!0).length>0}let qt=0;function Kt(z){const H=performance.now();H-qt<90||(qt=H,tt.style.cursor=$t(z)?"pointer":"grab")}function ee(z){W||$t(z)&&X()}const U=[],me=z=>1-Math.pow(1-z,3),se=z=>z<.5?4*z*z*z:1-Math.pow(-2*z+2,3)/2,P=z=>1+(1.70158+1)*Math.pow(z-1,3)+1.70158*Math.pow(z-1,2);function v(z,H,q,Z=me){U.push({t:0,dur:z,onUpdate:H,onDone:q,ease:Z})}function I(z){for(let H=U.length-1;H>=0;H--){const q=U[H];q.t+=z;const Z=Math.min(1,q.t/q.dur);q.onUpdate(q.ease(Z),Z),Z>=1&&(U.splice(H,1),q.onDone&&q.onDone())}}const L=new Set;let W=!1,et=null;function ot(){const z=Id.filter(q=>!L.has(q.title)),H=z.length?z:Id;return H[Math.floor(Math.random()*H.length)]}function X(){W=!0;const z=b.rotation.z;v(.9,(H,q)=>{b.rotation.z=z-Math.PI*2*H;const Z=Math.sin(q*46)*.022*(1-q);d.rotation.z=Z,d.position.x=Z*.6},()=>{d.rotation.z=0,d.position.x=0,Q()},se)}function Q(){const z=ot();et=_(c[z.color]),et.position.set(0,-.88,x-.3),et.visible=!1,d.add(et),v(.35,H=>{R.rotation.x=-1.85*H},()=>{et.visible=!0;const H=et.position.clone(),q=new O(0,-1.06,x+1.1);v(.55,Z=>{et.position.lerpVectors(H,q,Z),et.position.y=H.y+(q.y-H.y)*Z+Math.sin(Z*Math.PI)*.25,et.rotation.x=-Z*2.4},()=>St(z))})}function St(z){const H=new O().subVectors(st,a.position).normalize(),q=a.position.clone().add(H.multiplyScalar(Math.max(5.2,_t*.5))),Z=et.position.clone();v(.65,Ot=>{et.position.lerpVectors(Z,q,Ot);const ne=1+(1.15-1)*Ot;et.scale.setScalar(ne),et.rotation.set(0,et.rotation.y+.04,0)},()=>Tt(z),P)}function Tt(z){const{top:H,bottom:q}=et.userData;v(.5,Z=>{H.position.y=Z*.42,H.rotation.x=-Z*.8,H.position.z=Z*.15,q.position.y=-Z*.15}),wt(et.position.clone()),setTimeout(()=>Lt(z),420)}function ct(){if(!et)return;const z=et;et=null,v(.3,H=>{z.scale.setScalar(1.15*(1-H))},()=>{d.remove(z),R.rotation.x=0,W=!1})}const yt=[];function wt(z){const q=new Float32Array(270),Z=new Float32Array(90*3),Ot=[],ne=[16103877,12574142,13220319,11130591,16107670,16777215];for(let un=0;un<90;un++){q[un*3]=z.x,q[un*3+1]=z.y,q[un*3+2]=z.z;const oi=new Ht(ne[un%ne.length]);Z[un*3]=oi.r,Z[un*3+1]=oi.g,Z[un*3+2]=oi.b;const Os=Math.random()*Math.PI*2,qn=2+Math.random()*3.5;Ot.push(new O(Math.cos(Os)*(1+Math.random()*2),qn,Math.sin(Os)*(1+Math.random()*2)))}const ye=new Ee;ye.setAttribute("position",new Ne(q,3)),ye.setAttribute("color",new Ne(Z,3));const Pe=new Vi({size:.14,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1}),Oe=new Hi(ye,Pe);r.add(Oe),yt.push({p:Oe,vel:Ot,life:0})}function xt(z){for(let H=yt.length-1;H>=0;H--){const q=yt[H];q.life+=z;const Z=q.p.geometry.attributes.position.array;for(let Ot=0;Ot<q.vel.length;Ot++)q.vel[Ot].y-=9*z,Z[Ot*3]+=q.vel[Ot].x*z,Z[Ot*3+1]+=q.vel[Ot].y*z,Z[Ot*3+2]+=q.vel[Ot].z*z;q.p.geometry.attributes.position.needsUpdate=!0,q.p.material.opacity=Math.max(0,1-q.life/1.4),q.life>1.4&&(r.remove(q.p),yt.splice(H,1))}}function Lt(z){!L.has(z.title)&&L.add(z.title),n.querySelector(".g-cardTitle").textContent=z.title,n.querySelector(".g-cardMeta").textContent=z.meta,n.querySelector(".g-cardImg").src=z.img,n.querySelector(".g-cardPoints").innerHTML=z.points.map(q=>`<li><b>【${q[0]}】</b>${q[1]}</li>`).join(""),i.classList.add("show")}const N=()=>{i.classList.remove("show"),ct()};n.querySelector(".g-btnAgain").addEventListener("click",N);const gt=new wu;let nt=!0,bt=0,At=!1;function lt(){if(At)return;if(bt=requestAnimationFrame(lt),!nt){gt.getDelta();return}const z=Math.min(gt.getDelta(),.05),H=gt.elapsedTime;d.position.y=.2+Math.sin(H*.85)*.16,d.rotation.y=Math.sin(H*.3)*.045,d.rotation.x=Math.sin(H*.55)*.02;for(const q of A)q.rotation.y+=(q.userData.spin||0)*z;D.forEach((q,Z)=>{Z!==0&&(q.position.x+=Math.sin(H*.12+Z)*.0015,q.position.y+=Math.cos(H*.18+Z*2)*.0012)});for(const q of F)q.position.y+=q.userData.speed*z,q.position.x+=Math.sin(H+q.userData.sway)*.15*z,q.position.y>8&&(q.position.y=-3.5,q.position.x=(Math.random()-.5)*12);k.material.opacity=.55+Math.sin(H*2.1)*.35,it.material.opacity=.55+Math.sin(H*2.1+Math.PI)*.35,Xt&&!pt&&performance.now()-Wt>3500&&(ft+=z*.12,Dt()),I(z),xt(z),s.render(r,a)}lt();const zt=()=>{const z=n.clientWidth||innerWidth,H=n.clientHeight||innerHeight;a.aspect=z/H,a.updateProjectionMatrix(),s.setSize(z,H)};return addEventListener("resize",zt),{setRunning(z){nt=z},dispose(){At=!0,cancelAnimationFrame(bt),removeEventListener("resize",zt),s.dispose(),n.innerHTML=""}}}const AM=document.getElementById("app");AM.innerHTML=`
  <canvas id="scene"></canvas>
  <div id="markers"></div>

  <header class="hud top">
    <div class="brand">
      <span class="star">✦</span>
      <div>
        <h1>星光学园</h1>
      </div>
    </div>
    <div class="hint">拖动旋转 · 滚轮缩放 · 点击建筑查看</div>
  </header>

  <button class="places-toggle" id="placesToggle" aria-label="展开/收起地点列表"><span>‹</span></button>
  <nav class="hud places" id="places"></nav>

  <div class="hud controls">
    <div class="seg" id="timeSeg"></div>
    <div class="seg" id="weatherSeg"></div>
    <div class="seg" id="fxSeg"></div>
    <button class="btn" id="lightBtn">灯 火</button>
    <button class="btn orbit-only" id="overviewBtn">重置视角</button>
    <div class="seg" id="viewSeg"></div>
    <div class="seg walk-only" id="speedSeg"></div>
  </div>

  <section class="card" id="card" aria-hidden="true">
    <button class="card-close" id="cardClose">×</button>
    <div class="card-tag" id="cardTag"></div>
    <h2 id="cardTitle"></h2>
    <p class="card-en" id="cardEn"></p>
    <div class="card-body" id="cardBody"></div>
  </section>

  <button class="move-btn walk-only" id="moveBtn">前 进</button>

  <div class="about-layer" id="aboutLayer" aria-hidden="true">
    <p class="about-tip" id="aboutTip">点击文件夹展开</p>
    <div class="about-folder" id="aboutFolder"></div>
    <button class="about-close" id="aboutClose" aria-label="关闭">×</button>
  </div>

  <div class="blindbox-layer" id="blindboxLayer" aria-hidden="true">
    <div class="bb-head">
      <h3>Virtual IP & Photography</h3>
      <p>选一个盲盒打开看看 ✦</p>
    </div>
    <div class="bb-stage">
      <div class="bb-slot" id="bbPhotoSlot"></div>
      <div class="bb-slot" id="bbPlanSlot"></div>
    </div>
    <button class="about-close" id="bbClose" aria-label="关闭">×</button>
  </div>
  <div class="drift-layer" id="driftLayer" aria-hidden="true">
    <div class="drift-head">
      <h3>摄影作品</h3>
      <p>拖动鼠标倾斜墙面 · 点击照片看大图</p>
    </div>
    <div class="drift-host" id="driftHost"></div>
    <button class="about-close drift-close" id="driftClose" aria-label="关闭">×</button>
  </div>
  <div class="ip-layer" id="ipLayer" aria-hidden="true">
    <div class="ip-scroll" id="ipScroll"></div>
    <button class="about-close ip-close" id="ipClose" aria-label="关闭">×</button>
  </div>
  <div class="gacha-layer" id="gachaLayer" aria-hidden="true">
    <div class="gacha-host" id="gachaHost"></div>
    <button class="about-close gacha-close" id="gachaClose" aria-label="关闭">×</button>
  </div>
  <div class="vibe-layer" id="vibeLayer" aria-hidden="true">
    <div class="vibe-title">Vibe Coding · 开源项目</div>
    <button class="about-close vibe-close" id="vibeClose" aria-label="关闭">×</button>
    <div class="vibe-stage">
      <div class="vibe-deck" id="vibeDeck1"></div>
      <div class="vibe-deck" id="vibeDeck2"></div>
    </div>
    <div class="vibe-hint">🃏 悬停翻看卡片 · 点击打开在线体验 · GitHub 图标看源码</div>
  </div>
  <div class="keychain-layer" id="keychainLayer" aria-hidden="true">
    <div class="kc-progress kc-pill" id="kcProgress">薯泥的校园经历</div>
    <button class="about-close keychain-close" id="keychainClose" aria-label="关闭">×</button>
    <div class="rod"><div class="tape t1"></div><div class="tape t2"></div></div>
    <div class="keychain kc-green" id="kc1" data-exp="kx">
      <div class="ring"></div>
      <div class="links"><i></i><i></i><i></i></div>
      <img class="charm-img" loading="lazy" src="./keychain/charm-green.png" alt="绿色苹果钥匙扣" />
      <span class="charm-label">学生科技协会</span>
      <span class="charm-sub">新闻宣传中心 · 部长</span>
    </div>
    <div class="keychain kc-pink" id="kc2" data-exp="brand">
      <div class="ring"></div>
      <div class="links"><i></i><i></i><i></i></div>
      <img class="charm-img" loading="lazy" src="./keychain/charm-pink.png" alt="粉色苹果钥匙扣" />
      <span class="charm-label">企业合作</span>
      <span class="charm-sub">品牌部 · 市场营销</span>
    </div>
    <div class="kc-hint kc-pill">🔑 点一下摇晃的钥匙扣～</div>
    <svg class="floaty" style="left:12%;top:56%;width:34px" viewBox="0 0 24 24"><path d="M12 0l2.6 8.6L24 12l-9.4 3.4L12 24l-2.6-8.6L0 12l9.4-3.4z" fill="#F5C896"/></svg>
    <svg class="floaty" style="right:14%;top:38%;width:26px;animation-delay:-2.5s" viewBox="0 0 24 24"><path d="M12 0l2.6 8.6L24 12l-9.4 3.4L12 24l-2.6-8.6L0 12l9.4-3.4z" fill="#C9B9DF"/></svg>
    <svg class="floaty" style="left:22%;top:76%;width:22px;animation-delay:-4s" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#A9D6DF"/></svg>
    <svg class="floaty" style="right:20%;top:70%;width:30px;animation-delay:-1.2s" viewBox="0 0 24 24"><path d="M12 21C7 16.5 2 12.8 2 8.9 2 6.1 4.2 4 6.8 4c2 0 3.9 1.2 5.2 3.1C13.3 5.2 15.2 4 17.2 4 19.8 4 22 6.1 22 8.9c0 3.9-5 7.6-10 12.1z" fill="#F5B9C5"/></svg>
    <div class="kc-cardWrap" id="kcCardWrap">
      <div class="kc-card">
        <div class="kc-cardTitle" id="kcTitle"></div>
        <div class="kc-cardMeta" id="kcMeta"></div>
        <ul class="kc-cardPoints" id="kcPoints"></ul>
        <div class="kc-cardStrip" id="kcStrip"></div>
        <div class="kc-cardBtns">
          <button class="kc-btnAgain" id="kcBtnAgain">收下了</button>
        </div>
      </div>
    </div>
  </div>
  <div class="lightbox" id="lightbox" aria-hidden="true">
    <img id="lightboxImg" alt="摄影作品大图" />
    <div class="lightbox-pages" id="lightboxPages" style="display:none"></div>
    <button class="about-close" id="lightboxClose" aria-label="关闭">×</button>
  </div>
  <section class="about-detail" id="aboutDetail" aria-hidden="true">
    <button class="ad-close" id="adClose" aria-label="关闭">×</button>
    <h3 class="ad-title" id="adTitle"></h3>
    <div class="ad-body" id="adBody">
      <div class="ad-photo">图片区域 · 待补充</div>
      <p class="ad-text">内容整理中，敬请期待。</p>
    </div>
  </section>

  <div class="intro" id="intro">
    <div class="intro-bg light" style="background-image:url('./intro/lilies.jpg')" aria-hidden="true"></div>
    <div class="intro-poem-mask" aria-hidden="true"></div>
    <div class="intro-waves" id="introWaves" aria-hidden="true"></div>
    <div class="intro-particles" aria-hidden="true"></div>
    <div class="intro-profile-wrap">
      <article class="profile-card" id="profileCard">
        <div class="profile-glow"></div>
        <img class="profile-photo" src="./profile/avatar.jpg" alt="陈姝霓" />
        <div class="profile-sheen"></div>
        <div class="profile-topline"><span>✦</span> STARLIGHT ACADEMY</div>
        <div class="profile-bottom">
          <div>
            <h1>陈姝霓</h1>
            <p>Portfolio · Vibe Coding</p>
          </div>
          <span class="profile-status">Online</span>
        </div>
      </article>
      <p class="intro-welcome">嗨，欢迎来到我的星光学园。</p>
      <button id="enterBtn">进入学园 <span>→</span></button>
    </div>
  </div>

  <div class="loading" id="loading"><span>正在建造校园…</span></div>
`;const Ei=document.getElementById("scene"),CM=document.getElementById("markers"),Nn=document.getElementById("card"),Yl=document.getElementById("intro"),RM=document.getElementById("loading"),$l=document.querySelector(".hint"),Wo=document.getElementById("profileCard"),Sn=new Fu({canvas:Ei,antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});Sn.setPixelRatio(Math.min(devicePixelRatio,2));Sn.shadowMap.enabled=!0;Sn.shadowMap.type=zd;Sn.toneMapping=Ha;Sn.toneMappingExposure=1.05;Sn.outputColorSpace=_e;const Le=new Ul,Ve=new gn(46,1,1.2,4e3),Vu=Bx(Le),PM=Vu.mesh,vi=Vu.uniforms,Hu=new Ta(Sn);Hu.compileEquirectangularShader();function IM(n,t,e){const i=document.createElement("canvas");i.width=64,i.height=256;const s=i.getContext("2d"),r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,n),r.addColorStop(.55,t),r.addColorStop(1,e),s.fillStyle=r,s.fillRect(0,0,64,256);const a=new He(i);a.colorSpace=_e,a.mapping=ra;const o=Hu.fromEquirectangular(a);Le.environment&&Le.environment.dispose(),Le.environment=o.texture,a.dispose()}const Pa=new ae,Wu=new Gi({color:"#ffffff",transparent:!0,opacity:.85});for(let n=0;n<24;n++){const t=new ae,e=3+n%3;for(let r=0;r<e;r++){const a=20+Math.random()*28,o=new rt(new Te(a,10,8),Wu);o.position.set((r-e/2)*a*1.1,Math.random()*a*.35,Math.random()*a*.4),o.scale.y=.6,t.add(o)}const i=Math.random()*Math.PI*2,s=640+Math.random()*680;t.position.set(Math.cos(i)*s,320+Math.random()*200,Math.sin(i)*s),t.userData.spin=4e-5+Math.random()*6e-5,Pa.add(t)}Le.add(Pa);const tr=new Su("#DCEBFF","#8FA37E",1);Le.add(tr);const ln=new wa("#FFF3DC",2.1);ln.position.set(140,220,190);ln.castShadow=!0;ln.shadow.mapSize.set(4096,4096);ln.shadow.camera.near=10;ln.shadow.camera.far=900;const Ka=ln.shadow.camera;Ka.left=-280;Ka.right=280;Ka.top=280;Ka.bottom=-280;ln.shadow.bias=-15e-5;ln.shadow.normalBias=.9;Le.add(ln);Le.add(ln.target);const Xu=new wa("#CFE3FF",.35);Xu.position.set(-160,120,-140);Le.add(Xu);const hn=Ox();Le.add(hn.root);const Ec=900,wc=new Ee,da=new Float32Array(Ec*3),qu=[];for(let n=0;n<Ec;n++)da[n*3]=(Math.random()-.5)*460,da[n*3+1]=Math.random()*70,da[n*3+2]=(Math.random()-.5)*460,qu.push(Math.random()*Math.PI*2);wc.setAttribute("position",new Ne(da,3));const LM=(()=>{const n=document.createElement("canvas");n.width=n.height=32;const t=n.getContext("2d");t.fillStyle="#FBD3DE",t.beginPath(),t.ellipse(16,16,12,7,Math.PI/5,0,Math.PI*2),t.fill();const e=new He(n);return e.colorSpace=_e,e})(),ua=new Hi(wc,new Vi({map:LM,size:1.5,transparent:!0,opacity:.9,depthWrite:!1}));Le.add(ua);let ni="clear";function DM(n){const t=document.createElement("canvas");t.width=32,t.height=32;const e=t.getContext("2d");{const s=e.createRadialGradient(16,16,0,16,16,16);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.45,"rgba(255,255,255,.85)"),s.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=s,e.fillRect(0,0,32,32)}const i=new He(t);return i.colorSpace=_e,i}const je=520;function FM(n,t){const e=new Ee,i=new Float32Array(n*3),s=[];for(let o=0;o<n;o++)i[o*3]=(Math.random()-.5)*je*2,i[o*3+1]=Math.random()*240,i[o*3+2]=(Math.random()-.5)*je*2,s.push(Math.random()*Math.PI*2);e.setAttribute("position",new Ne(i,3));const r=new Vi({map:DM(),color:"#FFFFFF",size:1.9,transparent:!0,opacity:0,depthWrite:!1}),a=new Hi(e,r);return a.visible=!1,a.frustumCulled=!1,Le.add(a),{points:a,mat:r,geo:e,seeds:s}}const Qn=FM(2e3),Tc=1500,Ac=new Ee,Yu=new Float32Array(Tc*6),$u=[];for(let n=0;n<Tc;n++){const t=(Math.random()-.5)*je*2,e=Math.random()*240,i=(Math.random()-.5)*je*2,s=7+Math.random()*6;Yu.set([t,e,i,t+.4,e-s,i],n*6),$u.push(s)}Ac.setAttribute("position",new Ne(Yu,3));const fa=new _c({color:"#F0F8FF",transparent:!0,opacity:0,depthWrite:!1}),Ls=new cu(Ac,fa);Ls.frustumCulled=!1;Ls.visible=!1;Le.add(Ls);const UM=new ae;Le.add(UM);let ar="none";const Zu=innerWidth<820,Cc=zx(Le,Ve,()=>te.target,Zu),NM=kx(Le,Zu?7:12),te={target:new O(0,6,40),tTarget:new O(0,6,40),dist:430,tDist:430,theta:0,tTheta:0,phi:.95,tPhi:.95},wi={minDist:12,maxDist:620,minPhi:.18,maxPhi:1.36};function $i(){const n=innerWidth/innerHeight;return n>=1.4?1:bi.clamp(1.4/n,1,1.75)}function OM(){te.dist+=(te.tDist-te.dist)*.08,te.theta+=(te.tTheta-te.theta)*.09,te.phi+=(te.tPhi-te.phi)*.09,te.target.lerp(te.tTarget,.08);const n=Math.sin(te.phi);Ve.position.set(te.target.x+Math.sin(te.theta)*n*te.dist,te.target.y+Math.cos(te.phi)*te.dist,te.target.z+Math.cos(te.theta)*n*te.dist),Ve.lookAt(te.target)}let Rc=!1,Pc=0,Zl=0,Jl=0,pa=0;Ei.addEventListener("pointerdown",n=>{Rc=!0,Pc=0,Zl=n.clientX,Jl=n.clientY,Ei.setPointerCapture(n.pointerId)});Ei.addEventListener("pointermove",n=>{const t=n.clientX/innerWidth*2-1,e=-(n.clientY/innerHeight)*2+1;if(Kl.set(t,e),!Rc)return;const i=n.clientX-Zl,s=n.clientY-Jl;if(Zl=n.clientX,Jl=n.clientY,Pc+=Math.abs(i)+Math.abs(s),Wn==="walk"){de.yaw-=i*.0042,de.pitch=bi.clamp(de.pitch-s*.003,-.85,.85);return}te.tTheta-=i*.005,te.tPhi=bi.clamp(te.tPhi-s*.004,wi.minPhi,wi.maxPhi)});Ei.addEventListener("pointerup",n=>{Rc=!1,Pc<6&&BM(n.clientX,n.clientY)});Ei.addEventListener("wheel",n=>{n.preventDefault(),Wn!=="walk"&&(te.tDist=bi.clamp(te.tDist*(1+Math.sign(n.deltaY)*.12),wi.minDist,wi.maxDist))},{passive:!1});Ei.addEventListener("touchmove",n=>{if(n.touches.length===2){const t=Math.hypot(n.touches[0].clientX-n.touches[1].clientX,n.touches[0].clientY-n.touches[1].clientY);pa&&(te.tDist=bi.clamp(te.tDist*(pa/t),wi.minDist,wi.maxDist)),pa=t}},{passive:!0});Ei.addEventListener("touchend",()=>{pa=0});const Xo=new Eu,Kl=new Et;function BM(n,t){Kl.set(n/innerWidth*2-1,-(t/innerHeight)*2+1),Xo.setFromCamera(Kl,Ve);const e=Xo.intersectObjects(hn.hotspots,!1);if(e.length){const i=e[0].object.userData.poiId,s=Us.find(r=>r.id===i);Wn==="walk"?s&&Fc(s):Lc(i);return}if(ar==="fireworks"){const i=Xo.ray.direction.clone().normalize(),s=170+Math.random()*120,r=Ve.position.clone().addScaledVector(i,s);r.y=Math.max(r.y,70+Math.random()*60),Cc.launchAt(r)}}const gr=document.getElementById("places");gr.innerHTML=Us.map(n=>`
  <button class="place" data-id="${n.id}">
    <span class="pi">${n.icon}</span>
    <span class="pn">${n.name}</span>
  </button>`).join("");const Ju=document.getElementById("placesToggle");function Ku(n){document.body.classList.toggle("places-closed",!n),Ju.querySelector("span").textContent=n?"‹":"›"}Ju.addEventListener("click",()=>Ku(document.body.classList.contains("places-closed")));innerWidth<900&&Ku(!1);gr.querySelectorAll(".place").forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.id;if(Wn==="walk"){const e=Us.find(l=>l.id===t);if(!e)return;const[i,,s]=e.focus,r=i-0,a=s-30,o=Math.hypot(r,a)||1;de.pos.set(i-r/o*18,0,s-a/o*18),de.yaw=Math.atan2(i-de.pos.x,s-de.pos.z),Fc(e),gr.querySelectorAll(".place").forEach(l=>l.classList.toggle("on",l.dataset.id===t));return}Lc(t)})});let Ic="";function Lc(n){const t=Us.find(e=>e.id===n);t&&(Ic=n,te.tTarget.set(t.focus[0],t.focus[1],t.focus[2]),te.tDist=t.cam.dist*$i(),te.tTheta=t.cam.theta,te.tPhi=t.cam.phi,Fc(t),gr.querySelectorAll(".place").forEach(e=>{e.classList.toggle("on",e.dataset.id===n)}))}const Ia=document.getElementById("aboutLayer"),Mi=document.getElementById("aboutDetail"),zM=document.getElementById("aboutFolder"),Qu=[{id:"intro",title:"自我介绍",image:"./about/paper-house-intro.png"},{id:"skills",title:"个人技能",image:"./about/paper-house-skills.png"},{id:"edu",title:"教育背景",image:"./about/paper-house-edu.png"}];let qo=null;const kM={intro:`
    <div class="notebook">
      <div class="nb-rings">${"<i></i>".repeat(7)}</div>
      <div class="nb-head">
        <span class="nb-age">21岁</span>
        <h2>陈姝霓</h2>
        <span class="nb-spark">✦ ✧ ✦</span>
      </div>
      <div class="nb-grid">
        <section class="nb-sec">
          <div class="nb-sec-title"><b>出厂设置</b><small>Basic Info</small></div>
          <p>Hi，可以叫我薯泥 ～</p>
          <p>外热的非典型摩羯座 ♑</p>
          <p>来自海鲜大市浙江温州 🦐</p>
        </section>
        <section class="nb-sec">
          <div class="nb-sec-title"><b>我的预期</b><small>Expectations</small></div>
          <p>1. 找到自己喜欢干的事情，并坚持干下去</p>
          <p>2. 保持探索欲，保持希望，保持自己的思想，去做行动的巨人 💪</p>
        </section>
        <section class="nb-sec">
          <div class="nb-sec-title"><b>#我的Tag#</b><small>Personal Tag</small></div>
          <p>吃饭睡觉是天大的事儿 🍚</p>
          <p>爱唱歌但也爱跑调 🎤</p>
          <p>爱创新也经常被创死 💡</p>
        </section>
        <figure class="nb-photo" id="nbPhoto" title="点击相纸 可以看到更多生活照">
          <div class="nb-photo-frame">
            <img id="nbPhotoImg" src="./about/me-photo.jpg" alt="陈姝霓的生活照" />
          </div>
          <span class="nb-tape tl"></span><span class="nb-tape tr"></span>
          <figcaption>点击相纸 可以看到更多生活照 ✨</figcaption>
        </figure>
        <figure class="nb-photo nb-photo-h" id="nbPhotoH" title="点击相纸 可以看到更多生活照">
          <div class="nb-photo-frame">
            <img id="nbPhotoImgH" loading="lazy" src="./about/photos/p02.jpg" alt="陈姝霓的生活照" />
          </div>
          <span class="nb-tape tl"></span><span class="nb-tape tr"></span>
        </figure>
      </div>
    </div>`,skills:`
    <div class="notebook">
      <div class="nb-rings">${"<i></i>".repeat(7)}</div>
      <div class="nb-head">
        <span class="nb-age sk">SKILLS</span>
        <h2 class="nb-h2-sm">个人技能</h2>
        <span class="nb-spark">✦ ✧ ✦</span>
      </div>
      <div class="sk-list">
        <section class="sk-row">
          <div class="sk-row-head"><span class="sk-emoji">📜</span><b>证书</b><small>Certificates</small></div>
          <div class="sk-chips">
            <span class="chip c-cert">CET-6</span>
            <span class="chip c-cert">普通话二甲</span>
            <span class="chip c-cert">MS 二级<small>PPT · Excel</small></span>
          </div>
        </section>
        <section class="sk-row">
          <div class="sk-row-head"><span class="sk-emoji">🛠️</span><b>工具</b><small>Tools</small></div>
          <div class="sk-chips">
            <span class="chip c-tool">PS</span>
            <span class="chip c-tool">剪映</span>
            <span class="chip c-tool">MasterGo</span>
            <span class="chip c-tool">Keynote</span>
          </div>
        </section>
        <section class="sk-row">
          <div class="sk-row-head"><span class="sk-emoji">🤖</span><b>AI</b><small>AI Partners</small></div>
          <div class="sk-chips">
            <span class="chip c-ai">Claude</span>
            <span class="chip c-ai">Kimi</span>
            <span class="chip c-ai">Codex</span>
            <span class="chip c-ai">GPT</span>
          </div>
        </section>
        <p class="sk-foot">✦ 让工具为我所用，把想象力变成作品 ✦</p>
      </div>
    </div>`,edu:`
    <div class="notebook">
      <div class="nb-rings">${"<i></i>".repeat(7)}</div>
      <div class="nb-head">
        <span class="nb-age ed">EDU</span>
        <h2 class="nb-h2-sm">教育背景</h2>
        <span class="nb-spark">✦ ✧ ✦</span>
      </div>
      <div class="ed-body">
        <div class="ed-school">
          <div class="ed-school-name">杭州师范大学<span>本科</span></div>
          <div class="ed-school-meta">
            <span>📍 杭州</span>
            <span>🕰 2023.10 – 2027.06</span>
          </div>
          <div class="ed-major">汉语言文学<small>（经亨颐实验班）</small></div>
        </div>
        <div class="ed-honors">
          <div class="sk-row-head"><span class="sk-emoji">🏅</span><b>所获荣誉</b><small>Honors</small></div>
          <div class="ed-honors-row">
            <ul class="ed-list">
              <li>浙江省第十四届会展策划创意大赛 <em>省三</em></li>
              <li>计算机软件著作权 <em>已获证</em></li>
              <li>校优秀学生干部</li>
              <li>校三好学生</li>
              <li>校二等奖学金</li>
            </ul>
            <figure class="ed-cert" id="eduCert" title="点击查看大图">
              <img src="./about/edu-cert.jpg" loading="lazy" alt="「方言鹊桥」计算机软件著作权登记证书" />
            </figure>
          </div>
        </div>
        <p class="sk-foot">✦ 文以载道，学以致用 ✦</p>
      </div>
    </div>`},Ld=["./about/me-photo.jpg","./about/photos/p01.jpg","./about/photos/p03.jpg","./about/photos/p04.jpg","./about/photos/p07.jpg","./about/photos/p08.jpg","./about/photos/p09.jpg","./about/photos/p10.jpg"],Dd=["./about/photos/p02.jpg","./about/photos/p05.jpg","./about/photos/p06.jpg","./about/photos/p11.jpg"];let ma=null;function Dc(){ma!==null&&(window.clearInterval(ma),ma=null)}function GM(){const n=document.getElementById("nbPhotoImg"),t=document.getElementById("nbPhotoImgH"),e=document.getElementById("nbPhoto"),i=document.getElementById("nbPhotoH");if(!n||!t||!e||!i)return;let s=0;const r=(o,l)=>{o.classList.add("fading"),window.setTimeout(()=>{o.src=l,o.onload=()=>o.classList.remove("fading")},160)},a=()=>{s=s+1,r(n,Ld[s%Ld.length]),r(t,Dd[s%Dd.length])};e.addEventListener("click",a),i.addEventListener("click",a),Dc(),ma=window.setInterval(a,1800)}function VM(n){var s;const t=Qu.find(r=>r.id===n);if(!t)return;document.getElementById("adTitle").textContent=t.title;const e=document.getElementById("adBody"),i=kM[n];Mi.classList.toggle("wide",!!i),Mi.classList.toggle("narrow",n==="skills"||n==="edu"),e.innerHTML=i??`
    <div class="ad-photo">图片区域 · 待补充</div>
    <p class="ad-text">内容整理中，敬请期待。</p>`,Mi.classList.add("open"),Mi.setAttribute("aria-hidden","false"),n==="intro"?GM():Dc(),n==="edu"&&((s=document.getElementById("eduCert"))==null||s.addEventListener("click",()=>{ja("./about/edu-cert.jpg")}))}function HM(){qo||(qo=mM({papers:Qu,onPaperClick:VM}),zM.appendChild(qo.el)),Ia.classList.add("open"),Ia.setAttribute("aria-hidden","false")}function Ns(){Ia.classList.remove("open"),Ia.setAttribute("aria-hidden","true"),Mi.classList.remove("open"),Mi.setAttribute("aria-hidden","true")}document.getElementById("aboutClose").addEventListener("click",()=>{Ns(),Zi()});document.getElementById("adClose").addEventListener("click",()=>{Mi.classList.remove("open"),Mi.setAttribute("aria-hidden","true"),Dc()});function Fc(n){if(n.id==="assembly"){Nn.classList.remove("open"),HM();return}if(n.id==="library"){Nn.classList.remove("open"),Bc();return}if(n.id==="theater"){Nn.classList.remove("open"),uy();return}if(n.id==="main"){Nn.classList.remove("open"),hy();return}if(n.id==="dorm"){Nn.classList.remove("open"),gy();return}Ns();const t=document.getElementById("cardTag"),e=document.getElementById("cardEn");t.textContent=n.tag,t.style.display=n.tag?"inline-block":"none",document.getElementById("cardTitle").textContent=n.name,e.textContent=n.en,e.style.display=n.en?"block":"none";const i=Uu[n.id]??[],s=i.length?`<div class="works">
         <div class="works-title">✧ 展出作品</div>
         ${i.map(r=>r.kind==="embed"?`<div class="work">
                <div class="work-head"><b>${r.title}</b><a href="${r.url}" target="_blank" rel="noreferrer">新窗口打开 ↗</a></div>
                ${r.desc?`<p class="work-desc">${r.desc}</p>`:""}
                <div class="work-frame"><iframe src="${r.url}" loading="lazy" allowfullscreen></iframe></div>
              </div>`:`<a class="work link" href="${r.url}" target="_blank" rel="noreferrer">
                <div class="work-head"><b>${r.title}</b><span>↗</span></div>
                ${r.desc?`<p class="work-desc">${r.desc}</p>`:""}
              </a>`).join("")}
       </div>`:"";document.getElementById("cardBody").innerHTML=n.lines.map(r=>`<p>${r}</p>`).join("")+(n.quote?`<div class="quote">「${n.quote}」</div>`:"")+s,Nn.classList.add("open"),Nn.setAttribute("aria-hidden","false")}function Zi(){Nn.classList.remove("open"),Nn.setAttribute("aria-hidden","true"),Ic="",gr.querySelectorAll(".place").forEach(n=>n.classList.remove("on")),Wn==="walk"?nf("orbit"):(te.tTarget.set(0,6,30),te.tDist=430*$i(),te.tTheta=0,te.tPhi=.95)}document.getElementById("cardClose").addEventListener("click",Zi);document.getElementById("overviewBtn").addEventListener("click",Zi);let Fi="day",La=!1;const Da=document.getElementById("timeSeg");Da.innerHTML=Mx.map(n=>`<button data-t="${n.id}" class="${n.id==="day"?"on":""}">${n.label}</button>`).join("");Da.querySelectorAll("button").forEach(n=>{n.addEventListener("click",()=>{Da.querySelectorAll("button").forEach(t=>t.classList.remove("on")),n.classList.add("on"),Uc(n.dataset.t)})});const ju=document.getElementById("lightBtn");ju.addEventListener("click",()=>Ua(!La));const Fa=document.getElementById("weatherSeg"),WM=[{id:"clear",label:"晴"},{id:"rain",label:"雨"},{id:"snow",label:"雪"}];Fa.innerHTML=WM.map(n=>`<button data-w="${n.id}" class="${n.id==="clear"?"on":""}">${n.label}</button>`).join("");Fa.querySelectorAll("button").forEach(n=>{n.addEventListener("click",()=>{Fa.querySelectorAll("button").forEach(t=>t.classList.remove("on")),n.classList.add("on"),tf(n.dataset.w)})});const Ql=document.getElementById("fxSeg"),XM=[{id:"none",label:"无特效"},{id:"fireworks",label:"烟花秀"},{id:"meteor",label:"流星"}];Ql.innerHTML=XM.map(n=>`<button data-f="${n.id}" class="${n.id==="none"?"on":""}">${n.label}</button>`).join("");Ql.querySelectorAll("button").forEach(n=>{n.addEventListener("click",()=>{Ql.querySelectorAll("button").forEach(t=>t.classList.remove("on")),n.classList.add("on"),qM(n.dataset.f)})});function qM(n){ar=n,$l.textContent=n==="fireworks"?"点击夜空放一朵烟花":"拖动旋转 · 滚轮缩放 · 点击建筑查看",n!=="none"&&(Fi!=="night"&&(Da.querySelectorAll("button").forEach(t=>t.classList.toggle("on",t.getAttribute("data-t")==="night")),Uc("night")),ni!=="clear"&&(Fa.querySelectorAll("button").forEach(t=>t.classList.toggle("on",t.getAttribute("data-w")==="clear")),tf("clear")))}function tf(n){ni=n,Ls.visible=n==="rain",Qn.points.visible=n==="snow",n==="rain"&&Ua(!0)}const dn={day:{sky:["#6FAEE8","#BADFF4","#F6F2E6"],sun:"#FFF6E2",sunI:2.15,hemiSky:"#DCEBFF",hemiG:"#93A97E",hemiI:.95,fog:"#DCEDF5",fogFar:2e3,sunPos:[150,240,190],expo:1.05,cloud:"#ffffff",star:0},dusk:{sky:["#4A5C9E","#E9A489","#FBE0BE"],sun:"#FFB877",sunI:1.7,hemiSky:"#F2C6A8",hemiG:"#6E6A66",hemiI:.62,fog:"#EDC3A4",fogFar:1700,sunPos:[-230,70,120],expo:1,cloud:"#FBD9BC",star:.25},night:{sky:["#080E24","#162144","#2C3660"],sun:"#8FA8D8",sunI:.26,hemiSky:"#243258",hemiG:"#161C2C",hemiI:.22,fog:"#141C36",fogFar:1400,sunPos:[-120,190,-160],expo:.92,cloud:"#4C577A",star:1}};Le.fog=new gc(dn.day.fog,520,dn.day.fogFar);const jl=new Ht(dn.day.sky[0]),tc=new Ht(dn.day.sky[1]),ec=new Ht(dn.day.sky[2]),ve={sunI:dn.day.sunI,hemiI:dn.day.hemiI,glow:0,star:0,expo:1.05,snow:0,drop:0,sunCol:new Ht(dn.day.sun),hemiSky:new Ht(dn.day.hemiSky),hemiG:new Ht(dn.day.hemiG),fog:new Ht(dn.day.fog),cloud:new Ht("#ffffff"),sunPos:new O(...dn.day.sunPos)};function Uc(n){ln.castShadow=n!=="night",Fi=n;const t=dn[n];jl.set(t.sky[0]),tc.set(t.sky[1]),ec.set(t.sky[2]),IM(t.sky[0],t.sky[1],t.sky[2]),ve.sunI=t.sunI,ve.hemiI=t.hemiI,ve.expo=t.expo,ve.star=t.star,ve.sunCol.set(t.sun),ve.hemiSky.set(t.hemiSky),ve.hemiG.set(t.hemiG),ve.fog.set(t.fog),ve.cloud.set(t.cloud),ve.sunPos.set(...t.sunPos),Le.fog.far=t.fogFar,n==="night"&&!La&&Ua(!0),n==="day"&&La&&ni!=="rain"&&Ua(!1)}function YM(){return ni==="rain"?{sun:.12,hemi:.3,fogScale:.62,fogTint:new Ht("#5A6672"),lightTint:new Ht("#69767F"),drop:1,snow:0,expo:.55,env:.25,skyTint:new Ht("#59636E"),skyAmt:.88}:ni==="snow"?{sun:.4,hemi:.78,fogScale:.7,fogTint:new Ht("#D3E0EC"),lightTint:new Ht("#CBDAEA"),drop:1,snow:1,expo:.86,env:.6,skyTint:new Ht("#AFC0CF"),skyAmt:.82}:{sun:1,hemi:1,fogScale:1,fogTint:null,lightTint:null,drop:0,snow:0,expo:1,env:1,skyTint:null,skyAmt:0}}function Ua(n){La=n,ju.classList.toggle("on",n),ve.glow=n?1:0}const $M=Us.map(n=>{var e;const t=document.createElement("div");return t.className="marker",t.innerHTML=`<span class="dot">${n.icon}</span><span class="tip">${n.name}${(e=Uu[n.id])!=null&&e.length?" · 作品":""}</span>`,t.addEventListener("click",()=>{Lc(n.id)}),CM.appendChild(t),{el:t,p:n,v:new O}});function ZM(){for(const n of $M){n.v.set(n.p.focus[0],n.p.focus[1]+16,n.p.focus[2]);const t=Ve.position.distanceTo(n.v);n.v.project(Ve);const e=560*$i(),i=n.v.z<1&&t<e;n.el.style.display=i?"flex":"none",i&&(n.el.style.transform=`translate(-50%,-100%) translate(${(n.v.x*.5+.5)*innerWidth}px, ${(-n.v.y*.5+.5)*innerHeight}px)`,n.el.classList.toggle("on",Ic===n.p.id),n.el.style.opacity=String(bi.clamp(1.25-t/e,.25,1)))}}let Wn="orbit";const de={pos:new O(0,0,244),yaw:Math.PI,pitch:0,speedIdx:1,eye:1.62,bob:0},ef=[{id:0,label:"奔跑",v:74}],Mn=new Set;addEventListener("keydown",n=>{const t=n.key.toLowerCase();Mn.add(t),Wn==="walk"&&["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"," "].includes(t)&&n.preventDefault()});addEventListener("keyup",n=>Mn.delete(n.key.toLowerCase()));addEventListener("blur",()=>Mn.clear());const Nc=document.getElementById("viewSeg"),Oc=document.getElementById("speedSeg");Nc.innerHTML=[{id:"orbit",label:"俯瞰"},{id:"walk",label:"漫游"}].map(n=>`<button data-v="${n.id}" class="${n.id==="orbit"?"on":""}">${n.label}</button>`).join("");Nc.querySelectorAll("button").forEach(n=>{n.addEventListener("click",()=>nf(n.dataset.v))});Oc.innerHTML=ef.map(n=>`<button data-s="${n.id}" class="${n.id===1?"on":""}">${n.label}</button>`).join("");Oc.querySelectorAll("button").forEach(n=>{n.addEventListener("click",()=>JM(Number(n.dataset.s)))});function JM(n){de.speedIdx=bi.clamp(n,0,2),Oc.querySelectorAll("button").forEach(t=>{t.classList.toggle("on",Number(t.dataset.s)===de.speedIdx)})}function nf(n){Wn=n,Nc.querySelectorAll("button").forEach(t=>t.classList.toggle("on",t.dataset.v===n)),document.body.classList.toggle("walk-on",n==="walk"),n==="walk"?(Nn.classList.remove("open"),de.pos.set(0,0,244),de.yaw=Math.PI,de.pitch=0,$l.textContent="WASD / 方向键移动 · 拖动转视角 · 点击建筑查看"):($l.textContent="拖动旋转 · 滚轮缩放 · 点击建筑查看",te.tTarget.set(0,6,30),te.tDist=430*$i(),te.tTheta=0,te.tPhi=.95)}function Fd(n,t,e){const i=jn(n,t,3.2),s=Math.abs(n)<26&&t>204&&t<236;if(i!==e&&!s||!i&&Math.hypot(n,t)>520)return!0;for(const r of hn.obstacles)if(Math.abs(n-r.x)<r.hw+.42&&Math.abs(t-r.z)<r.hd+.42)return!0;return!1}let vr=!1;function KM(n){let t=0,e=0;(Mn.has("w")||Mn.has("arrowup"))&&(e+=1),(Mn.has("s")||Mn.has("arrowdown"))&&(e-=1),(Mn.has("a")||Mn.has("arrowleft"))&&(t-=1),(Mn.has("d")||Mn.has("arrowright"))&&(t+=1),vr&&(e+=1);const i=Math.hypot(t,e);if(!i)return!1;t/=i,e/=i;const s=Mn.has("shift")?1.5:1,r=ef[de.speedIdx].v*s,a=Math.sin(de.yaw),o=Math.cos(de.yaw);let l=(e*a+t*o)*r*n,c=(e*o-t*a)*r*n;const d=Math.max(1,Math.ceil(Math.hypot(l,c)/.5));l/=d,c/=d;for(let p=0;p<d;p++){const h=jn(de.pos.x,de.pos.z,3.2),f=de.pos.x+l,g=de.pos.z+c;Fd(f,de.pos.z,h)||(de.pos.x=f),Fd(de.pos.x,g,h)||(de.pos.z=g)}return de.bob+=n*(7+r),!0}const Qa=document.getElementById("moveBtn");Qa.addEventListener("pointerdown",n=>{n.preventDefault(),vr=!0});Qa.addEventListener("pointerup",()=>{vr=!1});Qa.addEventListener("pointerleave",()=>{vr=!1});Qa.addEventListener("pointercancel",()=>{vr=!1});function QM(n){const t=Wn==="walk"?de.pos:te.target;((i,s,r,a,o)=>{const l=Math.hypot(t.x-s,t.z-r)<a;i.forEach(c=>{const d=l?o*c.userData.openDir:0;c.rotation.y+=(d-c.rotation.y)*Math.min(1,n*2.4)})})(hn.gateDoors,0,218,40,1.15)}function jM(n){const t=n?Math.sin(de.bob)*.03:0,e=n?Math.cos(de.bob*.5)*.02:0;Ve.position.set(de.pos.x+e,de.eye+t,de.pos.z),Ve.lookAt(de.pos.x+Math.sin(de.yaw)*10,de.eye+Math.tan(de.pitch)*10,de.pos.z+Math.cos(de.yaw)*10)}const ty=new Ht("#F4F8FC"),Ud=new wu,ey=hn.waters.map(n=>n.geometry.attributes.position.clone());function nc(){const n=Math.min(Ud.getDelta(),.05),t=Ud.elapsedTime,e=1-Math.pow(.001,n),i=YM();ln.intensity+=(ve.sunI*i.sun-ln.intensity)*e,tr.intensity+=(ve.hemiI*i.hemi-tr.intensity)*e;const s=i.lightTint?ve.sunCol.clone().lerp(i.lightTint,.72):ve.sunCol,r=i.lightTint?ve.hemiSky.clone().lerp(i.lightTint,.66):ve.hemiSky;ln.color.lerp(s,e),tr.color.lerp(r,e),tr.groundColor.lerp(i.lightTint?ve.hemiG.clone().lerp(i.lightTint,.5):ve.hemiG,e),ln.position.lerp(ve.sunPos,e),Wu.color.lerp(ve.cloud,e);const a=i.fogTint?ve.fog.clone().lerp(i.fogTint,.6):ve.fog;Le.fog.color.lerp(a,e);const o=dn[Fi].fogFar*i.fogScale,l=Le.fog;l.far+=(o-l.far)*e,l.near=Math.min(520,l.far*.42),Sn.setClearColor(Le.fog.color),Sn.toneMappingExposure+=(ve.expo*i.expo-Sn.toneMappingExposure)*e,Le.environmentIntensity+=(i.env-Le.environmentIntensity)*e,vi.uTime.value=t,vi.uStars.value+=(ve.star-vi.uStars.value)*e;const c=i.skyTint;if(vi.topColor.value.lerp(c?jl.clone().lerp(c,i.skyAmt):jl,e),vi.midColor.value.lerp(c?tc.clone().lerp(c,i.skyAmt*.92):tc,e),vi.botColor.value.lerp(c?ec.clone().lerp(c,i.skyAmt*.8):ec,e),vi.uCloud.value+=((Fi==="night"?0:ni==="clear"?1:.3)-vi.uCloud.value)*e,ve.drop+=(i.drop-ve.drop)*e,ve.snow+=(i.snow-ve.snow)*e,fa.opacity=ni==="rain"?ve.drop*.55:Math.max(0,fa.opacity-n),Qn.mat.opacity=ni==="snow"?ve.snow*.95:Math.max(0,Qn.mat.opacity-n),Ls.visible=fa.opacity>.01,Qn.points.visible=Qn.mat.opacity>.01,hn.snowTargets.forEach(u=>{u.mat.color.copy(u.base).lerp(ty,ve.snow*.9)}),Ls.visible){const u=Ac.attributes.position,y=Ve.position.x,S=Ve.position.z;for(let x=0;x<Tc;x++){const w=x*2,E=x*2+1;let A=u.getY(w)-n*165,_=u.getX(w),b=u.getZ(w);A<0&&(A=190+Math.random()*70,_=y+(Math.random()-.5)*je,b=S+(Math.random()-.5)*je),Math.abs(_-y)>je&&(_=y+(Math.random()-.5)*je),Math.abs(b-S)>je&&(b=S+(Math.random()-.5)*je),u.setXYZ(w,_,A,b),u.setXYZ(E,_+.8,A-$u[x],b)}u.needsUpdate=!0}if(Qn.points.visible){const u=Qn.geo.attributes.position,y=Ve.position.x,S=Ve.position.z;for(let x=0;x<u.count;x++){let w=u.getY(x)-n*16*(.75+x%7*.08),E=u.getX(x)+Math.sin(t*.8+Qn.seeds[x])*n*12,A=u.getZ(x)+Math.cos(t*.6+Qn.seeds[x])*n*7;w<0&&(w=180+Math.random()*60,E=y+(Math.random()-.5)*je,A=S+(Math.random()-.5)*je),Math.abs(E-y)>je&&(E=y+(Math.random()-.5)*je),Math.abs(A-S)>je&&(A=S+(Math.random()-.5)*je),u.setXYZ(x,E,w,A)}u.needsUpdate=!0}const d=hn.glowMats.length?hn.glowMats[0].emissiveIntensity:0,p=ve.glow*(Fi==="night"?1.75:Fi==="dusk"?1.1:.85),h=d+(p-d)*e;hn.glowMats.forEach(u=>{u.emissiveIntensity=h}),hn.lampMats.forEach(u=>{u.emissiveIntensity=h*1.7}),hn.fallingWater.forEach((u,y)=>{u.map&&(u.map.offset.y-=n*(.85+y*.12),u.map.offset.x=Math.sin(t*.6+y)*.01)}),hn.jets.forEach(u=>{const y=u.geometry.attributes.position;if(u.userData.kind==="fountain"){const S=u.userData.phase;for(let x=0;x<y.count;x++){S[x]+=n*(x<120?.55:.75),S[x]>1&&(S[x]-=1);const w=S[x];if(x<120){const E=x/120*Math.PI*2,A=w*1.4;y.setXYZ(x,Math.cos(E)*A,9+w*7-w*w*9,Math.sin(E)*A)}else{const E=(x-120)/260*Math.PI*2,A=2.6+w*7.6;y.setXYZ(x,Math.cos(E)*A,7.4-w*w*7,Math.sin(E)*A)}}}else for(let S=0;S<y.count;S++){const x=y.getY(S)+Math.sin(t*2+S)*n*3.4;y.setY(S,x>12?.5:x<.4?.5+Math.random()*3:x)}y.needsUpdate=!0}),hn.waters.forEach((u,y)=>{const S=u.geometry.attributes.position,x=ey[y];for(let w=0;w<S.count;w++){const E=x.getX(w),A=x.getY(w);S.setZ(w,Math.sin(E*.35+t*1.4+y)*.09+Math.cos(A*.4+t*1.1)*.07)}S.needsUpdate=!0});const f=ua.material,g=ni==="clear"&&Fi!=="night"?.9:0;if(f.opacity+=(g-f.opacity)*e,ua.visible=f.opacity>.02,ua.visible){const u=wc.attributes.position;for(let y=0;y<Ec;y++){let S=u.getY(y)-n*(2.2+y%5*.4);const x=u.getX(y)+Math.sin(t*.7+qu[y])*n*3.2;S<.5&&(S=62+Math.random()*12),u.setY(y,S),u.setX(y,x>240?-240:x)}u.needsUpdate=!0}Pa.children.forEach(u=>{u.position.x+=u.userData.spin*900*n}),Pa.rotation.y+=n*.002;const M=hn.root.getObjectByName("topStar");M&&(M.rotation.y+=n*.35),Cc.step(n,ar==="fireworks"?1:0,ar==="fireworks"),NM.step(n,ar==="meteor"?1:0,Ve.position);const m=Wn==="walk"?KM(n):!1;QM(n),Wn==="walk"?jM(m):OM(),PM.position.copy(Ve.position),ZM(),Sn.render(Le,Ve),ny()}function ny(){document.hidden?setTimeout(nc,33):requestAnimationFrame(nc)}function sf(){Ve.aspect=innerWidth/innerHeight,Ve.fov=Ve.aspect<1?56:46,Ve.updateProjectionMatrix(),Sn.setSize(innerWidth,innerHeight),Cc.resize(),te.tDist=bi.clamp(te.tDist,wi.minDist,wi.maxDist)}addEventListener("resize",sf);sf();const iy=pM(document.getElementById("introWaves"),{horizonColor:"#DD8AC4",waveColor:"#FF9AD8",crestColor:"#FFFFFF",speed:.4,amplitude:2.5,waveScale:.6,waveRatio:.9,swell:35,turbulence:20,tilt:1.11,zoom:1,height:5.5,fogDepth:26,detail:"medium",brightness:1,opacity:.75,mouseInteraction:!0,parallaxStrength:.5,grain:!0,grainIntensity:.05});matchMedia("(hover: hover) and (pointer: fine)").matches&&(Yl.addEventListener("pointermove",n=>{const t=Wo.getBoundingClientRect(),e=(n.clientX-(t.left+t.width/2))/t.width,i=(n.clientY-(t.top+t.height/2))/t.height;Wo.style.transform=`perspective(900px) rotateX(${(-i*7).toFixed(2)}deg) rotateY(${(e*8).toFixed(2)}deg)`}),Yl.addEventListener("pointerleave",()=>{Wo.style.transform=""}));document.getElementById("enterBtn").addEventListener("click",()=>{Yl.classList.add("gone"),setTimeout(()=>iy(),900),te.tDist=430*$i(),te.tTheta=.35,setTimeout(()=>{te.tTheta=0},100)});Uc("day");nc();setTimeout(()=>RM.classList.add("gone"),60);te.dist=660*$i();te.tDist=430*$i();te.phi=.6;const Na=document.getElementById("blindboxLayer"),Oa=document.getElementById("driftLayer"),yi=document.getElementById("lightbox");let Nd=null;function sy(n){const t=document.createElement("div");t.className="bb-card",t.setAttribute("role","button"),t.setAttribute("tabindex","0");const e=document.createElement("div");e.className=`bb-face bb-back ${n==="photo"?"tarot-blue":"tarot-pink"}`,e.style.backgroundImage="url('./about/tarot.svg'), var(--bb-grad)";const i=document.createElement("div");return i.className="bb-face bb-front",n==="photo"?i.innerHTML=`
      <div class="bb-cover"><img src="./works/w01.jpg" loading="lazy" alt="摄影作品" /></div>
      <b>摄影作品</b>
      <span class="bb-hint">点击打开漂移墙</span>`:i.innerHTML=`
      <div class="bb-cover plan duo">
        <img class="ip-ava a" loading="lazy" src="./about/ip-polly.png" alt="Polly" />
        <img class="ip-ava b" loading="lazy" src="./about/ip-soft.png" alt="Soft Orbit" />
      </div>
      <b>虚拟IP</b>
      <span class="bb-hint">点击展开作品集</span>`,t.appendChild(e),t.appendChild(i),t.addEventListener("click",()=>{if(!t.classList.contains("flipped")){t.classList.add("flipped");return}n==="photo"?ay():My()}),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),t.click())}),t}let Od=!1;function Bc(){if(Ns(),!Od){Od=!0;const n={photo:"300 75 78",plan:"40 80 72"},t={photo:["#c084fc","#f472b6","#8b5cf6"],plan:["#f6c66b","#f5a0b5","#c084fc"]};["photo","plan"].forEach(e=>{const i=sy(e),s=EM(i,{glowColor:n[e],colors:t[e],animated:!0,backgroundColor:"#1A1424",borderRadius:22,glowIntensity:1.1});document.getElementById(e==="photo"?"bbPhotoSlot":"bbPlanSlot").appendChild(s.el)})}Na.classList.add("open"),Na.setAttribute("aria-hidden","false")}function _r(){Na.classList.remove("open"),Na.setAttribute("aria-hidden","true")}document.getElementById("bbClose").addEventListener("click",()=>{_r(),Zi()});const ry=Array.from({length:20},(n,t)=>{const e=t%12+1;return{image:`./works/w${String(e).padStart(2,"0")}.jpg`,title:`摄影作品 ${String(e).padStart(2,"0")}`}});function ay(){_r(),Nd||(Nd=vM(document.getElementById("driftHost"),{items:ry,columns:5,tileWidth:216,tileHeight:144,gap:16,tilt:14,turn:-12,speed:34,variance:.5,parallax:.55,lift:70,dim:.62,fade:.55,overlayColor:"#0a0714",onItemClick:n=>ja(n.image)})),Oa.classList.add("open"),Oa.setAttribute("aria-hidden","false")}function oy(){Oa.classList.remove("open"),Oa.setAttribute("aria-hidden","true")}document.getElementById("driftClose").addEventListener("click",()=>{oy(),Bc()});function ly(n){const t=document.getElementById("lightboxImg"),e=document.getElementById("lightboxPages");t.style.display="none",e.style.display="none";const i=new Image;i.onload=()=>{i.naturalHeight/i.naturalWidth>1.8?(e.innerHTML=`<img src="${n}" loading="lazy" alt="作品长图" />`,e.style.display="block",e.scrollTop=0):(t.src=n,t.style.display="block"),yi.classList.add("open"),yi.setAttribute("aria-hidden","false")},i.src=n}function ja(n){ly(n)}function cy(){yi.classList.remove("open"),yi.setAttribute("aria-hidden","true"),document.getElementById("lightboxImg").src="",document.getElementById("lightboxPages").innerHTML=""}document.getElementById("lightboxClose").addEventListener("click",n=>{n.stopPropagation(),cy()});yi.addEventListener("click",n=>{n.target===yi&&(yi.classList.remove("open"),yi.setAttribute("aria-hidden","true"))});const rf=[{icon:"./vibe-icons/mianmian.png",title:"晚安棉棉",desc:"洞察「越睡越晚」的睡前失控：治愈卧室 × 20 关梦境跳跃 × 天气主题，把入睡仪式设计成一款温柔的睡前小游戏",tag:"PWA · 小游戏",url:"https://chensn05.github.io/goodnight-mianmian/",repo:"https://github.com/chensn05/goodnight-mianmian",accent:"#C9B9DF"},{icon:"./vibe-icons/shenyou.png",title:"神游",desc:"神话 & 历史学习产品：102 篇神话 × 115 篇历史 × 48 位图鉴人物，装进可漫游的星球，配合所学回顾机制，让学习像神游太虚",tag:"Vue 3 · PWA",url:"https://chensn05.github.io/shenyou/",repo:"https://github.com/chensn05/shenyou",accent:"#A9D6DF"},{icon:"./vibe-icons/tomo.png",title:"TOMO-3D",desc:"把效率工具包进 IP 宇宙：番茄钟 × 养成系统 × 心情鸡尾酒都装进 TOMO 的小世界，用陪伴感换取用户的持续使用",tag:"Web 应用",url:"https://chensn05.github.io/tomo-3d/",repo:"https://github.com/chensn05/tomo-3d",accent:"#F5B9C5"},{icon:"./vibe-icons/yearlet.png",title:"Yearlet 人生牌林",desc:"单向信息交互产品：5 张阶段卡 × 20 张年岁卡 × 12 月便签空间，写下的便签只能漂流与打捞、不被回复——倾诉本身就是产品",tag:"信息交互 · PWA",url:"https://chensn05.github.io/yearlet/",repo:"https://github.com/chensn05/yearlet",accent:"#F5C896"},{icon:"./vibe-icons/stora.png",title:"Stora 五行行星日记",desc:"以「五行能量 × 行星养成」重构日记产品：真实行星纹理 × 飞行运镜的 3D 太阳系，五位行星护卫本地智能互动，每篇日记都让星球长出生命",tag:"Three.js · 全栈",url:"https://stora-a7f.pages.dev",repo:"https://github.com/chensn05/stora",accent:"#BFDDBE"},{icon:"./vibe-icons/lastcup.png",title:"最后一杯 LAST CUP",desc:"「现在喝这杯，今晚睡得着吗」——咖啡因半衰期公式 × 饮品数据库，把模糊的担心变成一键即得的答案",tag:"Web + 小程序",url:"https://chensn05.github.io/last-cup/doodle-edition/",repo:"https://github.com/chensn05/last-cup",accent:"#F0A0B0"}],Ba=document.getElementById("vibeLayer");function af(n,t){n.innerHTML=t.map((e,i)=>`
    <div class="vibe-card" data-url="${e.url}" style="--i:${i};--acc:${e.accent}">
      <div class="vc-top"><img class="vc-icon" loading="lazy" src="${e.icon}" alt="${e.title} icon" /><b>${e.title}</b><span class="vc-go">↗</span></div>
      <p class="vc-desc">${e.desc}</p>
      <div class="vc-foot">
        <span class="vc-tag">${e.tag}</span>
        <a class="vc-repo" href="${e.repo}" target="_blank" rel="noreferrer" title="查看源码" aria-label="GitHub 源码">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>
        </a>
      </div>
    </div>`).join(""),n.querySelectorAll(".vibe-card").forEach(e=>{e.addEventListener("click",i=>{i.target.closest(".vc-repo")||window.open(e.dataset.url,"_blank","noreferrer")})})}af(document.getElementById("vibeDeck1"),rf.slice(0,3));af(document.getElementById("vibeDeck2"),rf.slice(3));function hy(){Ns(),Ba.classList.add("open"),Ba.setAttribute("aria-hidden","false")}function dy(){Ba.classList.remove("open"),Ba.setAttribute("aria-hidden","true")}document.getElementById("vibeClose").addEventListener("click",()=>{dy(),Zi()});const za=document.getElementById("gachaLayer");let Es=null;function uy(){Ns(),_r(),Es||(Es=TM(document.getElementById("gachaHost"))),Es.setRunning(!0),za.classList.add("open"),za.setAttribute("aria-hidden","false")}function fy(){za.classList.remove("open"),za.setAttribute("aria-hidden","true"),Es==null||Es.setRunning(!1)}document.getElementById("gachaClose").addEventListener("click",()=>{fy(),Zi()});const ka=document.getElementById("keychainLayer"),py={kx:{title:"杭州师范大学学生科技协会 · 部长",meta:"新闻宣传中心 · 2024.06—2025.06",points:[["内容转化","负责公众号的内容输出，产出 1w+ 阅读量爆款推文，同比增长 35%，实现组织声量破圈"],["活动执行","统筹 13 次「挑战杯」拍摄计划，对接活动主办方，进行嘉宾邀约，跨域协同百所高校资源，保障 500+ 参赛团队赛务平稳推进"],["物料落地","主导 2500 份宣发物料落地，带来 1000+ 新增用户沉淀，有效赋能招新"]],imgs:["./keychain/campus-tzb.jpg","./keychain/campus-kx.jpg","./keychain/kx-activity-1.jpg","./keychain/kx-activity-2.jpg","./keychain/kx-activity-3.jpg","./keychain/kx-activity-4.jpg"]},brand:{title:"企业合作 · 市场营销",meta:"品牌部 · 2024.09—2025.01",points:[["账号起盘","搭建账号矩阵，独立完成选题策划与视频拍摄，账号 CTR 提升至 8%，互动率提升 45%"],["内容产出","紧跟平台热点，累计产出 60+ 篇笔记，打造多篇千赞千评爆款，有效提升用户粘性与账号活跃度"],["客户拓展","依托私域裂变与老客户转介绍持续获客，沉淀客情维护的变现方法论，实现销售额增长 35%"]],imgs:["./keychain/work-karry-blue.jpg","./keychain/work-roy.jpg","./keychain/work-karry-ink.jpg","./keychain/work-byron.jpg","./keychain/work-zaoba.jpg","./keychain/work-food.jpg","./keychain/work-yifei.jpg"]}},my=new Set;function gy(){Ns(),_r(),ka.classList.add("open"),ka.setAttribute("aria-hidden","false")}function vy(){ka.classList.remove("open"),ka.setAttribute("aria-hidden","true"),document.getElementById("kcCardWrap").classList.remove("show")}document.getElementById("keychainClose").addEventListener("click",()=>{vy(),Zi()});document.querySelectorAll(".keychain-layer .keychain").forEach(n=>{n.addEventListener("click",()=>{if(document.getElementById("kcCardWrap").classList.contains("show"))return;n.classList.remove("spin"),n.offsetWidth,n.classList.add("spin");const t=n.dataset.exp;window.setTimeout(()=>_y(t),480)})});function _y(n){const t=py[n];my.add(n),document.getElementById("kcTitle").textContent=t.title,document.getElementById("kcMeta").textContent=t.meta,document.getElementById("kcPoints").innerHTML=t.points.map(e=>`<li><b>【${e[0]}】</b>${e[1]}</li>`).join(""),document.getElementById("kcStrip").innerHTML=t.imgs.map(e=>`<img src="${e}?v=kc1" loading="lazy" alt="物料" />`).join(""),document.getElementById("kcCardWrap").classList.add("show")}document.getElementById("kcBtnAgain").addEventListener("click",()=>{document.getElementById("kcCardWrap").classList.remove("show")});document.getElementById("kcStrip").addEventListener("click",n=>{const t=n.target;t.tagName==="IMG"&&ja(t.src)});const Ga=document.getElementById("ipLayer"),xy=[{title:"Polly IP设计",pages:["./works/polly/p01.jpg","./works/polly/p02.jpg","./works/polly/p03-new.jpg","./works/polly/p04-new.jpg"]},{title:"Soft Orbit IP设计",pages:Array.from({length:6},(n,t)=>`./works/soft-orbit/p${String(t+1).padStart(2,"0")}.jpg`)}];let Bd=!1;function My(){if(_r(),!Bd){Bd=!0;const n=document.getElementById("ipScroll");n.innerHTML=xy.map(t=>`
      <section class="ip-sec">
        <h4>${t.title}</h4>
        <div class="ip-grid">
          ${t.pages.map((e,i)=>`
            <figure class="ip-fig" data-src="${e}" title="点击看大图">
              <img src="${e}" alt="${t.title} 第 ${i+1} 页" loading="lazy" />
              <figcaption>${String(i+1).padStart(2,"0")}</figcaption>
            </figure>`).join("")}
        </div>
      </section>`).join(""),n.querySelectorAll(".ip-fig").forEach(t=>{t.addEventListener("click",()=>ja(t.dataset.src))})}Ga.classList.add("open"),Ga.setAttribute("aria-hidden","false")}document.getElementById("ipClose").addEventListener("click",()=>{Ga.classList.remove("open"),Ga.setAttribute("aria-hidden","true"),Bc()});
