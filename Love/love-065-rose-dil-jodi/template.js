
const mk=(s,n,f)=>{const r=rng(s);return Array.from({length:n},(_,i)=>f(r,i))};
const rot0=(a,w,h)=>Math.cos(a)+Math.max(w/h,h/w)*Math.abs(Math.sin(a));
const one=(ctx,img,R,m,al)=>{const x=R[0],y=R[1],w=R[2],h=R[3];ctx.save();ctx.globalAlpha*=al;if(m[3]){ctx.translate(x+w/2,y+h/2);ctx.rotate(m[3]);cover(ctx,img,-w/2,-h/2,w,h,m[0]*rot0(m[3],w,h),m[1],m[2])}else cover(ctx,img,x,y,w,h,m[0],m[1],m[2]);ctx.restore()};
const PL=(ctx,t,ph,R,M)=>{const x=R[0],y=R[1],w=R[2],h=R[3],n=ph.length,P=M.p||6,f=MO[M.k]||MO.zin,TF=.9;
 ctx.save();if(R[4])rr(ctx,x,y,w,h,R[4]);else{ctx.beginPath();ctx.rect(x,y,w,h)}ctx.clip();ctx.fillStyle='#000';ctx.fillRect(x,y,w,h);
 let k=0,lt=t;if(n>1){k=Math.floor(t/P);lt=t-k*P}
 const i=k%n,cur=ph[i],u=n>1?clamp(lt/P):.5-.5*Math.cos(t*Math.PI/P);let m=f(u,t);
 const e0=k===0?easeOut(t/1.3):1;let ox=0,oy=0;
 if(e0<1&&M.in==='iris'){ctx.beginPath();ctx.arc(x+w/2,y+h/2,Math.hypot(w,h)/2*e0,0,TAU);ctx.clip()}else if(e0<1&&M.in==='wipe'){ctx.beginPath();ctx.rect(x,y,w*e0,h);ctx.clip()}
 if(e0<1){const q=M.in;if(q==='spin'){m=[m[0]+(1-e0)*.2,m[1],m[2],m[3]+(1-e0)*.15]}else if(q==='zoom')m=[m[0]+(1-e0)*.35,m[1],m[2],m[3]];else if(q==='slide')ox=(1-e0)*w*.4;else if(q==='drop')oy=-(1-e0)*h*.22;
  if(q==='spin'||q==='slide'||q==='drop')one(ctx,cur,R,[1.7,0,0,0],1)}
 if(n>1&&k>0&&lt<TF){const e=easeOut(lt/TF),pv=ph[(i-1+n)%n],tr=M.tr||'fade',pm=f(1,t);
  if(tr==='push'){ctx.save();ctx.translate(-e*w*.35,0);one(ctx,pv,R,pm,1);ctx.restore();ctx.save();ctx.translate((1-e)*w,0);one(ctx,cur,R,m,1);ctx.restore()}
  else if(tr==='drop'){one(ctx,pv,R,pm,1);ctx.save();ctx.translate(0,-(1-e)*h);one(ctx,cur,R,m,1);ctx.restore()}
  else if(tr==='wipe'){one(ctx,pv,R,pm,1);ctx.save();ctx.beginPath();ctx.rect(x,y,w*e,h);ctx.clip();one(ctx,cur,R,m,1);ctx.restore()}
  else if(tr==='zoom'){one(ctx,pv,R,pm,1);one(ctx,cur,R,[m[0]*(1+(1-e)*.3),m[1],m[2],m[3]],e)}
  else if(tr==='flash'){one(ctx,pv,R,pm,1);one(ctx,cur,R,m,e);ctx.fillStyle='rgba(255,255,255,'+Math.sin(e*Math.PI)*.55+')';ctx.fillRect(x,y,w,h)}
  else{one(ctx,pv,R,pm,1);one(ctx,cur,R,m,e)}}
 else{ctx.save();ctx.translate(ox,oy);one(ctx,cur,R,m,1);ctx.restore()}
 if(M.k==='par'){ctx.globalCompositeOperation='screen';one(ctx,cur,R,[1.34,-m[1]*.8,-m[2]*.8,0],.33);ctx.globalCompositeOperation='source-over'}
 if(e0<1&&(M.in==='fade'||M.in==='flash')){ctx.fillStyle=M.in==='fade'?'#000':'#fff';ctx.globalAlpha=1-e0;ctx.fillRect(x,y,w,h);ctx.globalAlpha=1}
 if(M.g)grade(ctx,R,M.g[0],M.g[1]);if(M.v)M.v.forEach(v=>VGF[v[0]](ctx,R,v[1],v[2]));
 ctx.restore()};
const grade=(ctx,R,k,a)=>{GR[k].forEach(g=>{ctx.globalCompositeOperation=g[0];ctx.globalAlpha=g[2]*a;ctx.fillStyle=g[1];ctx.fillRect(R[0],R[1],R[2],R[3])});ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1};
const fy=(t,p,o)=>{const L=H+160;let y=(p.y+t*o.sp*(48+60*p.sp)*o.d)%L;if(y<0)y+=L;return y-80};
const pc=(o,p)=>o.c[Math.floor(p.v*o.c.length)%o.c.length];
const mkp=(o)=>mk(o.seed,o.n,(r,i)=>({x:r()*W,y:r()*(H+160),s:r(),ph:r()*TAU,sp:.6+r()*.8,v:r(),i}));
function TX(ctx,t,text,o){
 if(!text)return o.yb!=null?o.yb:o.yc!=null?o.yc:o.y;
 o=Object.assign({f:FN.sf,s:54,m:22,w:470,ml:3,x:W/2,y:700,lh:1.2,c:'#fff',sh:'rgba(0,0,0,.8)',sb:14,t0:.4,st:.35,an:'rise',al:'center',cps:14},o);
 text=String(text);if(o.up)text=text.toUpperCase();
 const key=text+'|'+o.f+'|'+o.w+'|'+o.ml+'|'+o.s;let F=FC[key];if(!F){F=fit(ctx,text,o.f,o.w,o.ml,o.s,o.m);FC[key]=F}const L=F.lines,lh=F.size*o.lh,fnt=o.f.replace('$',F.size);
 ctx.save();ctx.font=fnt;ctx.textBaseline='middle';
 let mw=0;L.forEach(l=>{mw=Math.max(mw,ctx.measureText(l).width)});
 const cx=o.x,tot=(L.length-1)*lh,y0=o.yb!=null?o.yb-tot-lh/2:o.yc!=null?o.yc-tot/2:o.y;
 if(o.bk){const a0=easeOut((t-o.t0+.2)/.7);ctx.save();ctx.globalAlpha=a0;ctx.shadowBlur=0;ctx.fillStyle=o.bk;rr(ctx,cx-mw/2-30,y0-lh/2-16,mw+60,tot+lh+32,o.br==null?26:o.br);ctx.fill();if(o.bs){ctx.strokeStyle=o.bs;ctx.lineWidth=2;ctx.stroke()}ctx.restore()}
 if(o.ln){const a0=easeOut((t-o.t0)/.8);ctx.save();ctx.globalAlpha=a0;ctx.fillStyle=o.ln;ctx.fillRect(cx-34*a0,y0-lh/2-14,68*a0,3);ctx.fillRect(cx-34*a0,y0+tot+lh/2+10,68*a0,3);ctx.restore()}
 L.forEach((l,i)=>{
  const ti=t-o.t0-i*o.st,a=easeOut(ti/.9),yy=y0+i*lh,lw=ctx.measureText(l).width;
  ctx.save();ctx.shadowColor=o.sh;ctx.shadowBlur=o.sb;ctx.font=fnt;
  if(o.g){const gg=ctx.createLinearGradient(0,yy-F.size/2,0,yy+F.size/2);gg.addColorStop(0,o.g[0]);gg.addColorStop(1,o.g[1]);ctx.fillStyle=gg}else ctx.fillStyle=o.c;
  ctx.textAlign='center';
  const an=o.an;
  if(an==='rise'){ctx.globalAlpha=a;ctx.fillText(l,cx,yy+(1-a)*26)}
  else if(an==='fade'){ctx.globalAlpha=clamp(ti/1.5);ctx.fillText(l,cx,yy)}
  else if(an==='slide'){ctx.globalAlpha=a;ctx.fillText(l,cx+(1-a)*(i%2?150:-150),yy)}
  else if(an==='pop'){const b=easeOutBack(ti/.7);ctx.globalAlpha=clamp(b);ctx.translate(cx,yy);ctx.scale(Math.max(b,.01),Math.max(b,.01));ctx.fillText(l,0,0)}
  else if(an==='blur'){const d=(1-a)*8;ctx.globalAlpha=a*.4;ctx.fillText(l,cx-d,yy);ctx.fillText(l,cx+d,yy);ctx.fillText(l,cx,yy-d);ctx.globalAlpha=a*.6;ctx.fillText(l,cx,yy)}
  else{ctx.textAlign='left';const x0=cx-lw/2;
   if(an==='type'){let before=0;for(let j=0;j<i;j++)before+=L[j].length+1;const c=Math.floor((t-o.t0)*o.cps)-before;const s=l.slice(0,Math.max(0,Math.min(l.length,c)));ctx.fillText(s,x0,yy);if(c<l.length&&c>=0&&Math.floor(t*3)%2===0){ctx.fillText('|',x0+ctx.measureText(s).width,yy)}else if(i===L.length-1&&c>=l.length&&t<10&&Math.floor(t*2)%2===0){ctx.fillText('|',x0+lw+2,yy)}}
   else if(an==='words'){const ws=l.split(' ');let xx=x0;ws.forEach((wd,j)=>{const aw=easeOut((t-o.t0-i*o.st-j*.2)/.5);ctx.globalAlpha=aw;ctx.fillText(wd,xx,yy+(1-aw)*10);xx+=ctx.measureText(wd+' ').width})}
   else if(an==='scan'){ctx.save();ctx.beginPath();ctx.rect(x0-10,yy-F.size,(lw+20)*easeOut(ti/1.1),F.size*2);ctx.clip();ctx.fillText(l,x0,yy);ctx.restore()}
   else if(an==='kara'){const cyc=L.length*1.7+2,q=((t-o.t0)%cyc+cyc)%cyc;const pr=clamp((q-i*1.7)/1.5);ctx.globalAlpha=.42*clamp(ti/.6);ctx.fillText(l,x0,yy);ctx.globalAlpha=clamp(ti/.6);ctx.save();ctx.beginPath();ctx.rect(x0-4,yy-F.size,lw*pr+4,F.size*2);ctx.clip();ctx.fillStyle=o.hl||'#ffd54a';ctx.fillText(l,x0,yy);ctx.restore()}
   else{ctx.globalAlpha=a;ctx.fillText(l,x0,yy)}}
  ctx.restore()});
 ctx.restore();return y0+tot+lh/2}
const FC={};
const FN={sf:'italic 800 $px '+SERIF,sb:'800 $px '+SANS,sl:'italic 400 $px '+SERIF,mo:'700 $px "Courier New",Courier,monospace',cu:'700 $px "Comic Sans MS","Segoe Print",cursive,'+SANS,hv:'900 $px '+SANS,sr:'700 $px '+SERIF,sn:'300 $px '+SANS,sx:'600 $px '+SANS,si:'italic 600 $px '+SERIF};

const MO={panl:u=>[1.18,.9-1.8*u,0,0],zout:u=>[1.24-.22*u,0,0,0]};
const GR={rose:[['soft-light','#ff8f80',.55],['multiply','#ffe1d6',.4]]};
const VGF={rad:(ctx,R,a,c)=>{const cx=R[0]+R[2]/2,cy=R[1]+R[3]/2,g=ctx.createRadialGradient(cx,cy,R[3]*.28,cx,cy,R[3]*.72);g.addColorStop(0,'rgba('+c+',0)');g.addColorStop(1,'rgba('+c+','+a+')');ctx.fillStyle=g;ctx.fillRect(R[0],R[1],R[2],R[3])}};
const PKF={heart:function(ctx,t,a,o){a.forEach(p=>{const y=fy(t,p,o),x=p.x+Math.sin(t*1.1+p.ph)*22,s=o.sz*(.45+.7*p.s);ctx.fillStyle='rgba('+pc(o,p)+','+o.a+')';heartPath(ctx,x,y,s);ctx.fill()})},star:function(ctx,t,a,o){ctx.save();a.forEach(p=>{const k=Math.pow(Math.abs(Math.sin(t*p.sp*1.4+p.ph)),3);ctx.fillStyle='rgb('+pc(o,p)+')';star(ctx,p.x+Math.sin(t*.4+p.ph)*8,(p.y%H)+Math.cos(t*.3+p.ph)*8,o.sz*(3+6*p.s)*(.6+.5*k),k*o.a)});ctx.restore()}};
const C={"m":"side","bg":["#3a0a2a","#8e1654","#ff7aa8"],"pn":[{"r":[22,90,252,540,22],"bd":"#fff","bw":4,"sh":1,"rot":-0.015,"p":{"k":"panl","p":6,"tr":"flash","in":"iris","g":["rose",0.9],"v":[["rad",0.41,"40,0,20"]]}},{"r":[266,120,252,540,22],"bd":"#fff","bw":4,"sh":1,"rot":0.015,"p":{"k":"zout","p":8,"tr":"flash","in":"spin","g":["rose",0.9],"v":[["rad",0.43,"40,0,20"]]}}],"pt":[{"k":"heart","n":15,"c":["255,77,141","255,122,168","255,194,217","255,255,255"],"sz":0.97,"a":0.66,"sp":0.71,"d":-1,"seed":935991},{"k":"star","n":20,"c":["255,255,255"],"sz":1.13,"a":0.72,"sp":0.63,"d":1,"seed":669792}],"lk":null,"fr":null,"ex":[],"tx":{"f":"sr","s":56,"an":"scan","c":"#fff0f5","hl":"#ff6fa5","ml":3,"w":470,"g":["#ffffff","#ffd9a0"],"sb":12,"yc":780},"nl":null,"nm":"Rose Dil Jodi"};
const PA=C.pt.map(o=>({o,a:o.k==='ray'||o.k==='mandala'||o.k==='flash'||o.k==='grain'?[]:mkp(o)}));
const NM={name:C.nm};
return function(ctx,t,S){
 const ph=S.photos,tx=S.text||{};
 ctx.save();
 if(C.bg){const a=t*.15,g=ctx.createLinearGradient(W*(.5-.5*Math.cos(a)),0,W*(.5+.5*Math.cos(a)),H);C.bg.forEach((c,i)=>g.addColorStop(i/(C.bg.length-1),c));ctx.fillStyle=g;ctx.fillRect(0,0,W,H);const g2=ctx.createLinearGradient(0,480,0,H);g2.addColorStop(0,'rgba(0,0,0,0)');g2.addColorStop(1,'rgba(0,0,0,.38)');ctx.fillStyle=g2;ctx.fillRect(0,480,W,480)}else{ctx.fillStyle='#000';ctx.fillRect(0,0,W,H)}
 C.pn.forEach((p,i)=>{const R=p.r,n=C.pn.length;ctx.save();
  if(p.rot){const cx=R[0]+R[2]/2,cy=R[1]+R[3]/2;ctx.translate(cx,cy);ctx.rotate(p.rot+Math.sin(t*.6+i)*.01);ctx.translate(-cx,-cy)}
  if(p.sh||p.bb){ctx.save();ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=26;ctx.shadowOffsetY=8;ctx.fillStyle='#000';if(p.bb){rr(ctx,p.bb[0],p.bb[1],p.bb[2],p.bb[3],10)}else rr(ctx,R[0],R[1],R[2],R[3],R[4]||0);ctx.fill();ctx.restore()}
  if(p.bb){ctx.fillStyle=p.bgc;rr(ctx,p.bb[0],p.bb[1],p.bb[2],p.bb[3],10);ctx.fill()}
  PL(ctx,t,n>1&&ph.length>=n?[ph[i%ph.length]]:ph,R,p.p);
  if(p.bw){ctx.strokeStyle=p.bd;ctx.lineWidth=p.bw;rr(ctx,R[0],R[1],R[2],R[3],R[4]||0);ctx.stroke()}
  ctx.restore()});
 if(C.m==='split'){}
 if(C.lk)leak(ctx,t,C.lk,C.lka);
 PA.forEach(q=>{const k=q.o.k;ctx.save();PKF[k](ctx,t,q.a,q.o);ctx.restore()});
 if(C.fr)FRF[C.fr.k](ctx,t,C.fr);
 C.ex.forEach(e=>{ctx.save();EXF[e.k](ctx,t,S,{ex:e},NM);ctx.restore()});
 const cp=Object.assign({},C.tx);cp.f=FN[cp.f];
 let by=TX(ctx,t,tx.caption,cp);
 if(C.nl){const nn=Object.assign({},C.nl);nn.f=FN[nn.f];nn.y=by+10+nn.s*.6;nn.x=W/2;TX(ctx,t,tx.name,nn)}
 ctx.restore()}