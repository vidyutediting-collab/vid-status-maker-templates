const mk=(s,n,f)=>{const r=rng(s);return Array.from({length:n},(_,i)=>f(r,i))};
const kbg=(ctx,S,t,o)=>{o=Object.assign({p:5,z0:1.04,z1:1.2,px0:-.4,px1:.4,py0:0,py1:0,f:.9},o);const n=S.photos.length;slides(S.photos,t,o.p,o.f).forEach(s=>{const u=n>1?clamp(s.lt/o.p):.5-.5*Math.cos(t*Math.PI/o.p);ctx.globalAlpha=s.a;cover(ctx,s.img,0,0,W,H,lerp(o.z0,o.z1,u),lerp(o.px0,o.px1,u),lerp(o.py0,o.py1,u))});ctx.globalAlpha=1};
const vg=(ctx,y0,y1,a0,a1,c)=>{const g=ctx.createLinearGradient(0,y0,0,y1);g.addColorStop(0,'rgba('+c+','+a0+')');g.addColorStop(1,'rgba('+c+','+a1+')');ctx.fillStyle=g;ctx.fillRect(0,Math.min(y0,y1),W,Math.abs(y1-y0))};
const leak=(ctx,t,cols,a)=>{ctx.save();ctx.globalCompositeOperation='lighter';cols.forEach((c,i)=>{const x=W*(.5+.55*Math.sin(t*.33+i*2.1)),y=H*(.35+.3*Math.cos(t*.27+i*1.7)),r=300+60*Math.sin(t*.5+i);const g=ctx.createRadialGradient(x,y,0,x,y,r);const k=a*(.75+.25*Math.sin(t*.8+i*1.3));g.addColorStop(0,c+k+')');g.addColorStop(1,c+'0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H)});ctx.restore()};
const cap=(ctx,t,text,o)=>{o=Object.assign({f:'italic 800 $px '+SERIF,w:470,ml:3,s:54,m:24,x:W/2,y:700,lh:1.2,c:'#fff',sh:'rgba(0,0,0,.85)',sb:16,t0:.3,st:.4,rise:24,al:'center',g:null},o);const f=fit(ctx,text||'',o.f,o.w,o.ml,o.s,o.m);const lh=f.size*o.lh;ctx.save();ctx.font=o.f.replace('$',f.size);ctx.textAlign=o.al;ctx.textBaseline='middle';f.lines.forEach((l,i)=>{const a=easeOut((t-o.t0-i*o.st)/.9);const y=o.y+i*lh+(1-a)*o.rise;ctx.globalAlpha=a;ctx.shadowColor=o.sh;ctx.shadowBlur=o.sb;if(o.g){const gg=ctx.createLinearGradient(0,y-f.size/2,0,y+f.size/2);gg.addColorStop(0,o.g[0]);gg.addColorStop(1,o.g[1]);ctx.fillStyle=gg}else ctx.fillStyle=o.c;ctx.fillText(l,o.x,y)});ctx.restore();return o.y+f.lines.length*lh};
const SPK=(seed,n)=>mk(seed,n,r=>({x:r()*W,y:r()*H,s:3+r()*7,ph:r()*TAU,sp:.8+r()*2}));
const spark=(ctx,t,arr,col)=>{ctx.save();ctx.fillStyle=col||'#fff';arr.forEach(p=>{const a=Math.pow(Math.abs(Math.sin(t*p.sp+p.ph)),3);star(ctx,p.x+Math.sin(t*.4+p.ph)*10,p.y+Math.cos(t*.3+p.ph)*10,p.s*(.6+.6*a),a)});ctx.restore()};
const petal=(ctx,x,y,s,rot,flip,c1,c2)=>{ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(1,flip);const g=ctx.createLinearGradient(-s,0,s,0);g.addColorStop(0,c1);g.addColorStop(1,c2);ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(0,-s);ctx.bezierCurveTo(s*.9,-s*.6,s*.8,s*.7,0,s);ctx.bezierCurveTo(-s*.8,s*.7,-s*.9,-s*.6,0,-s);ctx.fill();ctx.restore()};
const bokeh=(ctx,t,arr,col)=>{ctx.save();arr.forEach(b=>{const y=H+60-((t*b.sp+b.ph)%(H+140));const x=b.x+Math.sin(t*.6+b.sw)*20;ctx.globalAlpha=b.a*clamp(y/160,0,1);ctx.fillStyle=col;ctx.beginPath();ctx.arc(x,y,b.r,0,TAU);ctx.fill();ctx.globalAlpha=b.a*.9*clamp(y/160,0,1);ctx.strokeStyle=col;ctx.lineWidth=1.5;ctx.stroke()});ctx.restore()};
const BKH=(seed,n)=>mk(seed,n,r=>({x:r()*W,sp:18+r()*40,ph:r()*(H+140),r:8+r()*26,sw:r()*TAU,a:.1+r()*.16}));
const pulse=(t,f,p)=>Math.pow(Math.max(0,Math.sin(t*f)),p||6);
return function(ctx,t,S){
  const ph=(t%.5)/.5;const kick=Math.exp(-ph*5);
  ctx.save();ctx.translate(W/2,H/2);const k=1+.04*kick;ctx.scale(k,k);ctx.translate(-W/2,-H/2);
  kbg(ctx,S,t,{p:4.5,z0:1.03,z1:1.14,px0:-.3,px1:.3,py0:0,py1:0});ctx.restore();
  ctx.fillStyle='rgba(30,0,70,.22)';ctx.fillRect(0,0,W,H);
  vg(ctx,0,260,.5,0,'8,0,24');vg(ctx,480,H,0,.88,'8,0,24');
  leak(ctx,t,['rgba(255,40,190,','rgba(40,200,255,'],.28);
  ctx.save();ctx.globalCompositeOperation='lighter';const rc=Math.floor(t/.5);for(let i=0;i<3;i++){const lt=(t-(rc-i)*.5);const r=60+lt*340;ctx.globalAlpha=Math.max(0,.5-lt*.4);ctx.strokeStyle=i%2?'#ff3dcb':'#00e5ff';ctx.lineWidth=4;ctx.beginPath();ctx.arc(W/2,640,r,0,TAU);ctx.stroke()}ctx.restore();
  ctx.fillStyle='rgba(255,255,255,'+kick*.1+')';ctx.fillRect(0,0,W,H);
  vignette(ctx,.42);
  ctx.save();ctx.translate(W/2,640);const sc=1+.06*kick;ctx.scale(sc,sc);ctx.translate(-W/2,-640);cap(ctx,t,(S.text.caption||'').toUpperCase(),{f:'900 $px '+SANS,y:640,s:60,m:26,ml:3,lh:1.15,sh:'#ff3dcb',sb:24,c:'#fff',t0:.2,st:.25,rise:30});ctx.restore();
  cap(ctx,t,'♫ '+(S.text.name||'')+' ♫',{f:'700 $px '+SANS,s:28,m:18,ml:1,y:860,t0:1,c:'#aef3ff',sh:'#00c8ff',sb:14});
  ctx.save();ctx.fillStyle='#fff';const nb=24,bw=W/nb;for(let i=0;i<nb;i++){const h=8+50*Math.abs(Math.sin(t*6+i*.9))*(.4+kick*.6);ctx.globalAlpha=.55;ctx.fillRect(i*bw+3,H-h,bw-6,h)}ctx.restore();
}
