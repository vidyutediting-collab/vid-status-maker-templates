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
const FW=mk(161,5,r=>({x:90+r()*(W-180),y:160+r()*340,t0:r()*3,per:2.6+r()*1.2,c:['255,210,90','255,110,170','110,220,255','160,255,140','200,140,255'][(r()*5)|0],n:32}));
const SP=SPK(162,18);
return function(ctx,t,S){
  kbg(ctx,S,t,{p:5,z0:1.04,z1:1.18,px0:-.3,px1:.3,py0:.1,py1:-.1});
  ctx.fillStyle='rgba(5,0,25,.48)';ctx.fillRect(0,0,W,H);
  vg(ctx,500,H,0,.85,'5,0,20');vignette(ctx,.45);
  spark(ctx,t,SP,'#fff');
  ctx.save();ctx.globalCompositeOperation='lighter';
  FW.forEach(f=>{const lt=((t-f.t0)%f.per+f.per)%f.per;const rise=.7;if(lt<rise){const k=lt/rise;const y=lerp(H,f.y,easeOut(k));ctx.fillStyle='rgba(255,230,160,.9)';ctx.beginPath();ctx.arc(f.x,y,3,0,TAU);ctx.fill()}else{const k=(lt-rise)/(f.per-rise-.3);if(k<1){for(let i=0;i<f.n;i++){const a=i/f.n*TAU+(i%2)*.1;const sp=120+((i*37)%5)*28;for(let j=0;j<3;j++){const kk=Math.max(0,k-j*.045);const d=easeOut(kk)*sp;const x=f.x+Math.cos(a)*d,y=f.y+Math.sin(a)*d+kk*kk*70;ctx.fillStyle='rgba('+f.c+','+((1-k)*(1-j*.3))+')';ctx.beginPath();ctx.arc(x,y,(5.2-j*1.2)*(1-k*.5),0,TAU);ctx.fill()}}if(k<.12){ctx.fillStyle='rgba(255,255,255,'+(.5*(1-k/.12))+')';ctx.beginPath();ctx.arc(f.x,f.y,40*(1-k/.12)+8,0,TAU);ctx.fill()}}}});
  ctx.restore();
  cap(ctx,t,S.text.caption,{f:'italic 900 $px '+SERIF,y:650,s:78,m:34,ml:2,sh:'rgba(255,120,40,.9)',sb:28,g:['#fffbe0','#ffc94d']});
  cap(ctx,t,S.text.name,{f:'700 $px '+SANS,s:32,m:20,ml:1,y:850,t0:1.2,c:'#ffeedd',sh:'rgba(0,0,0,.9)',sb:10});
}
