"use strict";var p$=Object.create;var G=Object.defineProperty;var c$=Object.getOwnPropertyDescriptor;var O$=Object.getOwnPropertyNames;var x$=Object.getPrototypeOf,N$=Object.prototype.hasOwnProperty;var cH=$=>H=>{var A=$[H];if(A)return A();throw new Error("Module not found in bundle: "+H)};var W$=($,H)=>()=>($&&(H=$($=0)),H);var C=($,H)=>()=>(H||$((H={exports:{}}).exports,H),H.exports),U$=($,H)=>{for(var A in H)G($,A,{get:H[A],enumerable:!0})},OH=($,H,A,L)=>{if(H&&typeof H=="object"||typeof H=="function")for(let I of O$(H))!N$.call($,I)&&I!==A&&G($,I,{get:()=>H[I],enumerable:!(L=c$(H,I))||L.enumerable});return $};var y$=($,H,A)=>(A=$!=null?p$(x$($)):{},OH(H||!$||!$.__esModule?G(A,"default",{value:$,enumerable:!0}):A,$)),J$=$=>OH(G({},"__esModule",{value:!0}),$);var xH=C((cA,l$)=>{l$.exports="./index-darwin-arm64-Z67THDYD.node"});var NH=C((OA,S$)=>{S$.exports="./index-darwin-x64-CJEKICUO.node"});var WH=C((xA,d$)=>{d$.exports="./index-linux-arm64-gnu-EU25TNRR.node"});var UH=C((NA,q$)=>{q$.exports="./index-linux-x64-gnu-OW7CLPW6.node"});var yA,LH=W$(()=>{yA=cH({"../native/index-darwin-arm64.node":()=>xH(),"../native/index-darwin-x64.node":()=>NH(),"../native/index-linux-arm64-gnu.node":()=>WH(),"../native/index-linux-x64-gnu.node":()=>UH()})});var yH=C(k=>{"use strict";LH();Object.defineProperty(k,"__esModule",{value:!0});k.NodeNativeSdk=void 0;var b$=G$();k.NodeNativeSdk=yA(`../native/index-${b$}.node`);function G$(){let $="";switch(process.platform){case"win32":switch(process.arch){case"x64":return"win32-x64-msvc";case"arm64":return"win32-arm64-msvc";case"ia32":return"win32-ia32-msvc"}$="Windows";break;case"darwin":switch(process.arch){case"x64":return"darwin-x64";case"arm64":return"darwin-arm64"}$="macOS";break;case"linux":switch(process.arch){case"x64":case"arm64":return`linux-${process.arch}-gnu`;case"arm":return"linux-arm-gnueabihf"}$="Linux";break}throw $.length===0?new Error(`Neon: unsupported ${$} architecture: ${process.arch}`):new Error(`Neon: unsupported system: ${process.platform}`)}});var JH=C(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.crypto=void 0;var K=require("crypto");F.crypto=K&&typeof K=="object"&&"webcrypto"in K?K.webcrypto:void 0});var N=C(t=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.randomBytes=t.wrapXOFConstructorWithOpts=t.wrapConstructorWithOpts=t.wrapConstructor=t.checkOpts=t.Hash=t.concatBytes=t.toBytes=t.utf8ToBytes=t.asyncLoop=t.nextTick=t.hexToBytes=t.bytesToHex=t.isLE=t.rotr=t.createView=t.u32=t.u8=void 0;var IH=JH(),fH=$=>$ instanceof Uint8Array,k$=$=>new Uint8Array($.buffer,$.byteOffset,$.byteLength);t.u8=k$;var K$=$=>new Uint32Array($.buffer,$.byteOffset,Math.floor($.byteLength/4));t.u32=K$;var F$=$=>new DataView($.buffer,$.byteOffset,$.byteLength);t.createView=F$;var X$=($,H)=>$<<32-H|$>>>H;t.rotr=X$;t.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!t.isLE)throw new Error("Non little-endian hardware is not supported");var g$=Array.from({length:256},($,H)=>H.toString(16).padStart(2,"0"));function w$($){if(!fH($))throw new Error("Uint8Array expected");let H="";for(let A=0;A<$.length;A++)H+=g$[$[A]];return H}t.bytesToHex=w$;function m$($){if(typeof $!="string")throw new Error("hex string expected, got "+typeof $);let H=$.length;if(H%2)throw new Error("padded hex string expected, got unpadded hex of length "+H);let A=new Uint8Array(H/2);for(let L=0;L<A.length;L++){let I=L*2,f=$.slice(I,I+2),D=Number.parseInt(f,16);if(Number.isNaN(D)||D<0)throw new Error("Invalid byte sequence");A[L]=D}return A}t.hexToBytes=m$;var v$=async()=>{};t.nextTick=v$;async function V$($,H,A){let L=Date.now();for(let I=0;I<$;I++){A(I);let f=Date.now()-L;f>=0&&f<H||(await(0,t.nextTick)(),L+=f)}}t.asyncLoop=V$;function lH($){if(typeof $!="string")throw new Error(`utf8ToBytes expected string, got ${typeof $}`);return new Uint8Array(new TextEncoder().encode($))}t.utf8ToBytes=lH;function X($){if(typeof $=="string"&&($=lH($)),!fH($))throw new Error(`expected Uint8Array, got ${typeof $}`);return $}t.toBytes=X;function j$(...$){let H=new Uint8Array($.reduce((L,I)=>L+I.length,0)),A=0;return $.forEach(L=>{if(!fH(L))throw new Error("Uint8Array expected");H.set(L,A),A+=L.length}),H}t.concatBytes=j$;var DH=class{clone(){return this._cloneInto()}};t.Hash=DH;var Q$={}.toString;function Z$($,H){if(H!==void 0&&Q$.call(H)!=="[object Object]")throw new Error("Options should be object or undefined");return Object.assign($,H)}t.checkOpts=Z$;function Y$($){let H=L=>$().update(X(L)).digest(),A=$();return H.outputLen=A.outputLen,H.blockLen=A.blockLen,H.create=()=>$(),H}t.wrapConstructor=Y$;function z$($){let H=(L,I)=>$(I).update(X(L)).digest(),A=$({});return H.outputLen=A.outputLen,H.blockLen=A.blockLen,H.create=L=>$(L),H}t.wrapConstructorWithOpts=z$;function HA($){let H=(L,I)=>$(I).update(X(L)).digest(),A=$({});return H.outputLen=A.outputLen,H.blockLen=A.blockLen,H.create=L=>$(L),H}t.wrapXOFConstructorWithOpts=HA;function $A($=32){if(IH.crypto&&typeof IH.crypto.getRandomValues=="function")return IH.crypto.getRandomValues(new Uint8Array($));throw new Error("crypto.getRandomValues must be defined")}t.randomBytes=$A});var RH=C(r=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.output=r.exists=r.hash=r.bytes=r.bool=r.number=void 0;function g($){if(!Number.isSafeInteger($)||$<0)throw new Error(`Wrong positive integer: ${$}`)}r.number=g;function SH($){if(typeof $!="boolean")throw new Error(`Expected boolean, not ${$}`)}r.bool=SH;function TH($,...H){if(!($ instanceof Uint8Array))throw new Error("Expected Uint8Array");if(H.length>0&&!H.includes($.length))throw new Error(`Expected Uint8Array of length ${H}, not of length=${$.length}`)}r.bytes=TH;function dH($){if(typeof $!="function"||typeof $.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");g($.outputLen),g($.blockLen)}r.hash=dH;function qH($,H=!0){if($.destroyed)throw new Error("Hash instance has been destroyed");if(H&&$.finished)throw new Error("Hash#digest() has already been called")}r.exists=qH;function bH($,H){TH($);let A=H.outputLen;if($.length<A)throw new Error(`digestInto() expects output buffer of length at least ${A}`)}r.output=bH;var AA={number:g,bool:SH,bytes:TH,hash:dH,exists:qH,output:bH};r.default=AA});var f$=C(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});R.add5L=R.add5H=R.add4H=R.add4L=R.add3H=R.add3L=R.add=R.rotlBL=R.rotlBH=R.rotlSL=R.rotlSH=R.rotr32L=R.rotr32H=R.rotrBL=R.rotrBH=R.rotrSL=R.rotrSH=R.shrSL=R.shrSH=R.toBig=R.split=R.fromBig=void 0;var w=BigInt(2**32-1),tH=BigInt(32);function EH($,H=!1){return H?{h:Number($&w),l:Number($>>tH&w)}:{h:Number($>>tH&w)|0,l:Number($&w)|0}}R.fromBig=EH;function GH($,H=!1){let A=new Uint32Array($.length),L=new Uint32Array($.length);for(let I=0;I<$.length;I++){let{h:f,l:D}=EH($[I],H);[A[I],L[I]]=[f,D]}return[A,L]}R.split=GH;var kH=($,H)=>BigInt($>>>0)<<tH|BigInt(H>>>0);R.toBig=kH;var KH=($,H,A)=>$>>>A;R.shrSH=KH;var FH=($,H,A)=>$<<32-A|H>>>A;R.shrSL=FH;var XH=($,H,A)=>$>>>A|H<<32-A;R.rotrSH=XH;var gH=($,H,A)=>$<<32-A|H>>>A;R.rotrSL=gH;var wH=($,H,A)=>$<<64-A|H>>>A-32;R.rotrBH=wH;var mH=($,H,A)=>$>>>A-32|H<<64-A;R.rotrBL=mH;var vH=($,H)=>H;R.rotr32H=vH;var VH=($,H)=>$;R.rotr32L=VH;var jH=($,H,A)=>$<<A|H>>>32-A;R.rotlSH=jH;var QH=($,H,A)=>H<<A|$>>>32-A;R.rotlSL=QH;var ZH=($,H,A)=>H<<A-32|$>>>64-A;R.rotlBH=ZH;var YH=($,H,A)=>$<<A-32|H>>>64-A;R.rotlBL=YH;function zH($,H,A,L){let I=(H>>>0)+(L>>>0);return{h:$+A+(I/2**32|0)|0,l:I|0}}R.add=zH;var H$=($,H,A)=>($>>>0)+(H>>>0)+(A>>>0);R.add3L=H$;var $$=($,H,A,L)=>H+A+L+($/2**32|0)|0;R.add3H=$$;var A$=($,H,A,L)=>($>>>0)+(H>>>0)+(A>>>0)+(L>>>0);R.add4L=A$;var L$=($,H,A,L,I)=>H+A+L+I+($/2**32|0)|0;R.add4H=L$;var I$=($,H,A,L,I)=>($>>>0)+(H>>>0)+(A>>>0)+(L>>>0)+(I>>>0);R.add5L=I$;var D$=($,H,A,L,I,f)=>H+A+L+I+f+($/2**32|0)|0;R.add5H=D$;var LA={fromBig:EH,split:GH,toBig:kH,shrSH:KH,shrSL:FH,rotrSH:XH,rotrSL:gH,rotrBH:wH,rotrBL:mH,rotr32H:vH,rotr32L:VH,rotlSH:jH,rotlSL:QH,rotlBH:ZH,rotlBL:YH,add:zH,add3L:H$,add3H:$$,add4L:A$,add4H:L$,add5H:D$,add5L:I$};R.default=LA});var M$=C(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});h.shake256=h.shake128=h.keccak_512=h.keccak_384=h.keccak_256=h.keccak_224=h.sha3_512=h.sha3_384=h.sha3_256=h.sha3_224=h.Keccak=h.keccakP=void 0;var W=RH(),S=f$(),l=N(),[t$,E$,B$]=[[],[],[]],IA=BigInt(0),J=BigInt(1),DA=BigInt(2),fA=BigInt(7),TA=BigInt(256),RA=BigInt(113);for(let $=0,H=J,A=1,L=0;$<24;$++){[A,L]=[L,(2*A+3*L)%5],t$.push(2*(5*L+A)),E$.push(($+1)*($+2)/2%64);let I=IA;for(let f=0;f<7;f++)H=(H<<J^(H>>fA)*RA)%TA,H&DA&&(I^=J<<(J<<BigInt(f))-J);B$.push(I)}var[tA,EA]=(0,S.split)(B$,!0),T$=($,H,A)=>A>32?(0,S.rotlBH)($,H,A):(0,S.rotlSH)($,H,A),R$=($,H,A)=>A>32?(0,S.rotlBL)($,H,A):(0,S.rotlSL)($,H,A);function h$($,H=24){let A=new Uint32Array(10);for(let L=24-H;L<24;L++){for(let D=0;D<10;D++)A[D]=$[D]^$[D+10]^$[D+20]^$[D+30]^$[D+40];for(let D=0;D<10;D+=2){let T=(D+8)%10,B=(D+2)%10,s=A[B],e=A[B+1],E=T$(s,e,1)^A[T],c=R$(s,e,1)^A[T+1];for(let i=0;i<50;i+=10)$[D+i]^=E,$[D+i+1]^=c}let I=$[2],f=$[3];for(let D=0;D<24;D++){let T=E$[D],B=T$(I,f,T),s=R$(I,f,T),e=t$[D];I=$[e],f=$[e+1],$[e]=B,$[e+1]=s}for(let D=0;D<50;D+=10){for(let T=0;T<10;T++)A[T]=$[D+T];for(let T=0;T<10;T++)$[D+T]^=~A[(T+2)%10]&A[(T+4)%10]}$[0]^=tA[L],$[1]^=EA[L]}A.fill(0)}h.keccakP=h$;var d=class $ extends l.Hash{constructor(H,A,L,I=!1,f=24){if(super(),this.blockLen=H,this.suffix=A,this.outputLen=L,this.enableXOF=I,this.rounds=f,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,W.number)(L),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,l.u32)(this.state)}keccak(){h$(this.state32,this.rounds),this.posOut=0,this.pos=0}update(H){(0,W.exists)(this);let{blockLen:A,state:L}=this;H=(0,l.toBytes)(H);let I=H.length;for(let f=0;f<I;){let D=Math.min(A-this.pos,I-f);for(let T=0;T<D;T++)L[this.pos++]^=H[f++];this.pos===A&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:H,suffix:A,pos:L,blockLen:I}=this;H[L]^=A,A&128&&L===I-1&&this.keccak(),H[I-1]^=128,this.keccak()}writeInto(H){(0,W.exists)(this,!1),(0,W.bytes)(H),this.finish();let A=this.state,{blockLen:L}=this;for(let I=0,f=H.length;I<f;){this.posOut>=L&&this.keccak();let D=Math.min(L-this.posOut,f-I);H.set(A.subarray(this.posOut,this.posOut+D),I),this.posOut+=D,I+=D}return H}xofInto(H){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(H)}xof(H){return(0,W.number)(H),this.xofInto(new Uint8Array(H))}digestInto(H){if((0,W.output)(H,this),this.finished)throw new Error("digest() was already called");return this.writeInto(H),this.destroy(),H}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(H){let{blockLen:A,suffix:L,outputLen:I,rounds:f,enableXOF:D}=this;return H||(H=new $(A,L,I,D,f)),H.state32.set(this.state32),H.pos=this.pos,H.posOut=this.posOut,H.finished=this.finished,H.rounds=f,H.suffix=L,H.outputLen=I,H.enableXOF=D,H.destroyed=this.destroyed,H}};h.Keccak=d;var P=($,H,A)=>(0,l.wrapConstructor)(()=>new d(H,$,A));h.sha3_224=P(6,144,224/8);h.sha3_256=P(6,136,256/8);h.sha3_384=P(6,104,384/8);h.sha3_512=P(6,72,512/8);h.keccak_224=P(1,144,224/8);h.keccak_256=P(1,136,256/8);h.keccak_384=P(1,104,384/8);h.keccak_512=P(1,72,512/8);var o$=($,H,A)=>(0,l.wrapXOFConstructorWithOpts)((L={})=>new d(H,$,L.dkLen===void 0?A:L.dkLen,!0));h.shake128=o$(31,168,128/8);h.shake256=o$(31,136,256/8)});var C$=C(m=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});m.SHA2=void 0;var BH=RH(),q=N();function BA($,H,A,L){if(typeof $.setBigUint64=="function")return $.setBigUint64(H,A,L);let I=BigInt(32),f=BigInt(4294967295),D=Number(A>>I&f),T=Number(A&f),B=L?4:0,s=L?0:4;$.setUint32(H+B,D,L),$.setUint32(H+s,T,L)}var hH=class extends q.Hash{constructor(H,A,L,I){super(),this.blockLen=H,this.outputLen=A,this.padOffset=L,this.isLE=I,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(H),this.view=(0,q.createView)(this.buffer)}update(H){(0,BH.exists)(this);let{view:A,buffer:L,blockLen:I}=this;H=(0,q.toBytes)(H);let f=H.length;for(let D=0;D<f;){let T=Math.min(I-this.pos,f-D);if(T===I){let B=(0,q.createView)(H);for(;I<=f-D;D+=I)this.process(B,D);continue}L.set(H.subarray(D,D+T),this.pos),this.pos+=T,D+=T,this.pos===I&&(this.process(A,0),this.pos=0)}return this.length+=H.length,this.roundClean(),this}digestInto(H){(0,BH.exists)(this),(0,BH.output)(H,this),this.finished=!0;let{buffer:A,view:L,blockLen:I,isLE:f}=this,{pos:D}=this;A[D++]=128,this.buffer.subarray(D).fill(0),this.padOffset>I-D&&(this.process(L,0),D=0);for(let E=D;E<I;E++)A[E]=0;BA(L,I-8,BigInt(this.length*8),f),this.process(L,0);let T=(0,q.createView)(H),B=this.outputLen;if(B%4)throw new Error("_sha2: outputLen should be aligned to 32bit");let s=B/4,e=this.get();if(s>e.length)throw new Error("_sha2: outputLen bigger than state");for(let E=0;E<s;E++)T.setUint32(4*E,e[E],f)}digest(){let{buffer:H,outputLen:A}=this;this.digestInto(H);let L=H.slice(0,A);return this.destroy(),L}_cloneInto(H){H||(H=new this.constructor),H.set(...this.get());let{blockLen:A,buffer:L,length:I,finished:f,destroyed:D,pos:T}=this;return H.length=I,H.pos=T,H.finished=f,H.destroyed=D,I%A&&H.buffer.set(L),H}};m.SHA2=hH});var s$=C(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.sha224=U.sha256=void 0;var hA=C$(),u=N(),oA=($,H,A)=>$&H^~$&A,MA=($,H,A)=>$&H^$&A^H&A,CA=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),n=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),p=new Uint32Array(64),v=class extends hA.SHA2{constructor(){super(64,32,8,!1),this.A=n[0]|0,this.B=n[1]|0,this.C=n[2]|0,this.D=n[3]|0,this.E=n[4]|0,this.F=n[5]|0,this.G=n[6]|0,this.H=n[7]|0}get(){let{A:H,B:A,C:L,D:I,E:f,F:D,G:T,H:B}=this;return[H,A,L,I,f,D,T,B]}set(H,A,L,I,f,D,T,B){this.A=H|0,this.B=A|0,this.C=L|0,this.D=I|0,this.E=f|0,this.F=D|0,this.G=T|0,this.H=B|0}process(H,A){for(let E=0;E<16;E++,A+=4)p[E]=H.getUint32(A,!1);for(let E=16;E<64;E++){let c=p[E-15],i=p[E-2],pH=(0,u.rotr)(c,7)^(0,u.rotr)(c,18)^c>>>3,AH=(0,u.rotr)(i,17)^(0,u.rotr)(i,19)^i>>>10;p[E]=AH+p[E-7]+pH+p[E-16]|0}let{A:L,B:I,C:f,D,E:T,F:B,G:s,H:e}=this;for(let E=0;E<64;E++){let c=(0,u.rotr)(T,6)^(0,u.rotr)(T,11)^(0,u.rotr)(T,25),i=e+c+oA(T,B,s)+CA[E]+p[E]|0,AH=((0,u.rotr)(L,2)^(0,u.rotr)(L,13)^(0,u.rotr)(L,22))+MA(L,I,f)|0;e=s,s=B,B=T,T=D+i|0,D=f,f=I,I=L,L=i+AH|0}L=L+this.A|0,I=I+this.B|0,f=f+this.C|0,D=D+this.D|0,T=T+this.E|0,B=B+this.F|0,s=s+this.G|0,e=e+this.H|0,this.set(L,I,f,D,T,B,s,e)}roundClean(){p.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},oH=class extends v{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}};U.sha256=(0,u.wrapConstructor)(()=>new v);U.sha224=(0,u.wrapConstructor)(()=>new oH)});var e$=C(_=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});_.EcdsaSignature=_.Ed25519InitKeygenResult=_.Ed25519KeygenResult=_.EcdsaInitKeygenResult=_.EcdsaKeygenResult=_.EcdsaPublicKey=_.MessageHash=void 0;var V=N(),sA=M$(),eA=s$(),j=class ${constructor(H){if(this.bytes=new Uint8Array,typeof H=="string"){if(H.length!==$.LENGTH*2)throw new Error(`Invalid length for MessageHash: ${H.length}`);H=(0,V.hexToBytes)(H)}else{if(H.length!==$.LENGTH)throw new Error(`Invalid length for MessageHash: ${H.length}`);this.bytes=H}}static sha256(H){return new $((0,eA.sha256)(H))}static keccak256(H){return new $((0,sA.keccak_256)(H))}toHex(){return(0,V.bytesToHex)(this.bytes)}};_.MessageHash=j;j.LENGTH=32;var Q=class ${constructor(H){if(typeof H=="string"&&(H=(0,V.hexToBytes)(H)),H.length===$.LENGTH+1){this.pubkey=H.slice(1);return}else if(H.length!==$.LENGTH)throw new RangeError(`Invalid ${this.constructor.name} length, expected: ${$.LENGTH} bytes, found: ${H.length}`);this.pubkey=H}serializeUncompressed(){return new Uint8Array([4,...this.pubkey])}serializeCompressed(){let H=this.pubkey[63]&1;return new Uint8Array([2+H,...this.pubkey.slice(0,32)])}};_.EcdsaPublicKey=Q;Q.LENGTH=64;var MH=class{constructor(H,A){this.pubkey=H,this.secretShare=A}};_.EcdsaKeygenResult=MH;var CH=class{constructor(H,A){this.keygenId=H,this.keygenSecret=A}};_.EcdsaInitKeygenResult=CH;var sH=class{constructor(H,A){this.pubkey=H,this.secretShare=A}};_.Ed25519KeygenResult=sH;var eH=class{constructor(H,A){this.keygenId=H,this.keygenSecret=A}};_.Ed25519InitKeygenResult=eH;var y=class ${static fromBuffer(H){typeof H=="string"&&(H=(0,V.hexToBytes)(H));let A=2*$.FIELD_SIZE+$.MAX_DER_LEN+1,L=2*$.FIELD_SIZE+$.MIN_DER_LEN+1;if(H.length<L||H.length>A)throw new RangeError(`Invalid ${this.constructor.name} length, expected between ${L}..${A} bytes, found: ${H.length}`);let I=H.subarray(0,$.FIELD_SIZE),f=H.subarray($.FIELD_SIZE,2*$.FIELD_SIZE),D=H[2*$.FIELD_SIZE],T=H.subarray(2*$.FIELD_SIZE+1);return new $(I,f,D,T)}constructor(H,A,L,I){if(A.length!==$.FIELD_SIZE)throw new RangeError(`Invalid 's' length, expected: ${$.FIELD_SIZE} found: ${A.length}`);if(H.length!==$.FIELD_SIZE)throw new RangeError(`Invalid 'r' length, expected: ${$.FIELD_SIZE} found: ${H.length}`);if(!Number.isInteger(L)||L<27||L>30)throw new RangeError(`Invalid 'v' value, expected 27/28/29/30 found: ${L}`);if(I.length<$.MIN_DER_LEN||I.length>$.MAX_DER_LEN)throw new RangeError(`Invalid DER encoding, expected length: ${$.MIN_DER_LEN}..${$.MAX_DER_LEN} found: ${I.length}`);this.r=H,this.s=A,this.v=L,this.der=I}};_.EcdsaSignature=y;y.FIELD_SIZE=32;y.MAX_DER_LEN=72;y.MIN_DER_LEN=8});var _H=C(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});Z.sanitizeNumberOfParties=void 0;function _A(...$){for(let H of $)if(!Number.isInteger(H)||H<1||H>65535)throw new RangeError(`numberOfParties should be an integer in the range: 1..65_535, instead got: ${H} `)}Z.sanitizeNumberOfParties=_A});var r$=C(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.Ecdsa=void 0;var O=z(),_$=_H(),rH=class{constructor(H,A){this.NATIVE=H,this.URL_SODOT=A}async createRoom(H,A){return(0,_$.sanitizeNumberOfParties)(H),this.NATIVE.createRoom(this.URL_SODOT,H,A)}async initKeygen(){let H=await this.NATIVE.initKeygen();return new O.EcdsaInitKeygenResult(H.pubkey,H.keypair)}async exportID(H){return await this.NATIVE.ecdsaGetExportID(H.secretShare)}async keygen(H,A,L,I,f){if((0,_$.sanitizeNumberOfParties)(A,L),f.length!==A-1)throw new Error(`keygenIds length must be exactly: ${A-1}, it is: ${f.length}`);let D=await this.NATIVE.ecdsaKeygen(H,this.URL_SODOT,A,L,I.keygenSecret,f),T=new O.EcdsaPublicKey(D.pubkey),B=D.secret_share;return new O.EcdsaKeygenResult(T,B)}async sign(H,A,L,I=new Uint32Array){let f=await this.NATIVE.ecdsaSign(H,this.URL_SODOT,A.secretShare,L.toHex(),Array.from(I));return O.EcdsaSignature.fromBuffer(f)}async refresh(H,A){let L=await this.NATIVE.ecdsaRefresh(H,this.URL_SODOT,A.secretShare),I=new O.EcdsaPublicKey(L.pubkey),f=L.secret_share;return new O.EcdsaKeygenResult(I,f)}async derivePubkey(H,A=new Uint32Array){let L=await this.NATIVE.ecdsaDerivePubkey(H.secretShare,Array.from(A));return new O.EcdsaPublicKey(L)}async exportFullPrivateKey(H,A,L){return await this.NATIVE.ecdsaExportFullPrivateKey(H,this.URL_SODOT,A.secretShare,L)}async derivePrivateKeyFromXpriv(H,A=new Uint32Array){return await this.NATIVE.ecdsaDerivePrivateKeyFromXpriv(H,Array.from(A))}getHostUrl(H){return H||this.URL_SODOT}};Y.Ecdsa=rH});var i$=C(HH=>{"use strict";Object.defineProperty(HH,"__esModule",{value:!0});HH.Ed25519=void 0;var uH=z(),b=N(),u$=_H(),iH=class{constructor(H,A){this.NATIVE=H,this.URL_SODOT=A}async initKeygen(){let H=await this.NATIVE.initKeygen();return new uH.Ed25519InitKeygenResult(H.pubkey,H.keypair)}async exportID(H){return await this.NATIVE.ed25519GetExportID(H.secretShare)}async createRoom(H,A){return(0,u$.sanitizeNumberOfParties)(H),this.NATIVE.createRoom(this.URL_SODOT,H,A)}async keygen(H,A,L,I,f){if((0,u$.sanitizeNumberOfParties)(A,L),f.length!==A-1)throw new Error(`keygenIds length must be exactly: ${A-1}, it is: ${f.length}`);let D=await this.NATIVE.ed25519Keygen(H,this.URL_SODOT,A,L,I.keygenSecret,f);if(!D.pubkey||!D.secret_share)throw new Error("Keygen failed, no public key or secret share was returned.");let T=(0,b.hexToBytes)(D.pubkey),B=D.secret_share;return new uH.Ed25519KeygenResult(T,B)}async sign(H,A,L,I=new Uint32Array){typeof L!="string"&&(L=(0,b.bytesToHex)(L));let f=await this.NATIVE.ed25519Sign(H,this.URL_SODOT,A.secretShare,L,Array.from(I));return(0,b.hexToBytes)(f)}async refresh(H,A){let L=await this.NATIVE.ed25519Refresh(H,this.URL_SODOT,A.secretShare);if(!L.pubkey||!L.secret_share)throw new Error("Keygen failed, no public key or secret share was returned.");let I=(0,b.hexToBytes)(L.pubkey),f=L.secret_share;return new uH.Ed25519KeygenResult(I,f)}async derivePubkey(H,A=new Uint32Array){let L=await this.NATIVE.ed25519DerivePubkey(H.secretShare,Array.from(A));return(0,b.hexToBytes)(L)}async exportFullPrivateKey(H,A,L){return await this.NATIVE.ed25519ExportFullPrivateKey(H,this.URL_SODOT,A.secretShare,L)}async derivePrivateKeyFromSpriv(H,A=new Uint32Array){return await this.NATIVE.ed25519DerivePrivateKeyFromSpriv(H,Array.from(A))}};HH.Ed25519=iH});var z=C(o=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.Ed25519=o.Ecdsa=o.MessageHash=o.Ed25519KeygenResult=o.Ed25519InitKeygenResult=o.EcdsaSignature=o.EcdsaPublicKey=o.EcdsaKeygenResult=o.EcdsaInitKeygenResult=void 0;var x=e$();Object.defineProperty(o,"EcdsaInitKeygenResult",{enumerable:!0,get:function(){return x.EcdsaInitKeygenResult}});Object.defineProperty(o,"EcdsaKeygenResult",{enumerable:!0,get:function(){return x.EcdsaKeygenResult}});Object.defineProperty(o,"EcdsaPublicKey",{enumerable:!0,get:function(){return x.EcdsaPublicKey}});Object.defineProperty(o,"EcdsaSignature",{enumerable:!0,get:function(){return x.EcdsaSignature}});Object.defineProperty(o,"Ed25519InitKeygenResult",{enumerable:!0,get:function(){return x.Ed25519InitKeygenResult}});Object.defineProperty(o,"Ed25519KeygenResult",{enumerable:!0,get:function(){return x.Ed25519KeygenResult}});Object.defineProperty(o,"MessageHash",{enumerable:!0,get:function(){return x.MessageHash}});var rA=r$();Object.defineProperty(o,"Ecdsa",{enumerable:!0,get:function(){return rA.Ecdsa}});var uA=i$();Object.defineProperty(o,"Ed25519",{enumerable:!0,get:function(){return uA.Ed25519}})});var n$=C(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});M.Ed25519=M.Ecdsa=M.Ed25519InitKeygenResult=M.EcdsaInitKeygenResult=M.MessageHash=M.Ed25519KeygenResult=M.EcdsaSignature=M.EcdsaPublicKey=M.EcdsaKeygenResult=void 0;var a$=yH(),a=z();Object.defineProperty(M,"EcdsaInitKeygenResult",{enumerable:!0,get:function(){return a.EcdsaInitKeygenResult}});Object.defineProperty(M,"EcdsaKeygenResult",{enumerable:!0,get:function(){return a.EcdsaKeygenResult}});Object.defineProperty(M,"EcdsaPublicKey",{enumerable:!0,get:function(){return a.EcdsaPublicKey}});Object.defineProperty(M,"EcdsaSignature",{enumerable:!0,get:function(){return a.EcdsaSignature}});Object.defineProperty(M,"Ed25519InitKeygenResult",{enumerable:!0,get:function(){return a.Ed25519InitKeygenResult}});Object.defineProperty(M,"Ed25519KeygenResult",{enumerable:!0,get:function(){return a.Ed25519KeygenResult}});Object.defineProperty(M,"MessageHash",{enumerable:!0,get:function(){return a.MessageHash}});var P$="us1.sodot.dev",aH=class extends a.Ecdsa{constructor(H){super(a$.NodeNativeSdk,H||P$)}};M.Ecdsa=aH;var PH=class extends a.Ed25519{constructor(H){super(a$.NodeNativeSdk,H||P$)}};M.Ed25519=PH});var nA={};U$(nA,{lambdaHandler:()=>PA});module.exports=J$(nA);var $H=y$(n$()),nH=process.env.SODOT_API_KEY,iA=new $H.Ecdsa,aA=new $H.Ed25519,PA=async $=>{if(!nH)return{statusCode:500,body:JSON.stringify({message:"Missing SODOT_API_KEY"})};switch($.httpMethod){case"POST":if($.resource==="/room"){let{maxUsers:H}=JSON.parse($.body||"{}");if(!H)return{statusCode:400,body:JSON.stringify({message:"Invalid request"})};let A=await iA.createRoom(H,nH),L=await aA.createRoom(H,nH),I=A+"-"+L;return{statusCode:200,body:JSON.stringify({roomId:I})}}break}return{statusCode:400,body:JSON.stringify({message:"Invalid request"})}};0&&(module.exports={lambdaHandler});
/*! Bundled license information:

@noble/hashes/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/