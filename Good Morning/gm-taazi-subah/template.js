const bo=(()=>{const r=rng(14);return Array.from({length:20},()=>({x:r()*W,y:r()*H,s:20+r()*60,sp:10+r()*25,ph:r()*TAU,c:['255,255,255','255,240,160','190,255,220'][(r()*3)|0]}))})();
return function(ctx,t,S){
  ctx.fillStyle='#0f766e';ctx.fillRect(0,0,W,H);
  slides(S.photos,t,4,1).forEach(o=>{ctx.save();ctx.globalAlpha=o.a;cover(ctx,o.img,0,0,W,H,1.06+.1*Math.min(1,o.lt/4),Math.sin(o.lt*.4)*.4,0);ctx.restore()});
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'rgba(250,204,21,.28)');g.addColorStop(.5,'rgba(20,184,166,.1)');g.addColorStop(1,'rgba(6,78,59,.85)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const lk=ctx.createRadialGradient(W*.9,0,10,W*.9,0,650);lk.addColorStop(0,`rgba(255,244,180,${.7+.1*Math.sin(t*1.5)})`);lk.addColorStop(1,'rgba(255,244,180,0)');ctx.fillStyle=lk;ctx.fillRect(0,0,W,H);
  bo.forEach(b=>{const y=((b.y-t*b.sp)%H+H)%H;ctx.fillStyle=`rgba(${b.c},${.1+.08*Math.sin(t+b.ph)})`;ctx.beginPath();ctx.arc(b.x+Math.sin(t*.4+b.ph)*20,y,b.s,0,TAU);ctx.fill()});
  ctx.textAlign='left';ctx.textBaseline='middle';const f=fit(ctx,(S.text.caption||'').toUpperCase(),'900 $px '+SANS,470,3,86,32);ctx.font=`900 ${f.size}px ${SANS}`;
  f.lines.forEach((l,i)=>{const a=easeOut((t-i*.25)/.8);ctx.save();ctx.globalAlpha=a;ctx.translate(35-(1-a)*260,650+i*(f.size+4));ctx.fillStyle='#fff';ctx.shadowColor='rgba(0,60,50,.8)';ctx.shadowBlur=18;ctx.fillText(l,0,0);ctx.restore()});
  const a2=easeOut((t-.9)/.8);ctx.globalAlpha=a2;ctx.fillStyle='#fde047';ctx.fillRect(35,650+f.lines.length*(f.size+4)-10,120*a2,6);ctx.font=`600 32px ${SANS}`;ctx.fillStyle='#fef9c3';ctx.fillText(S.text.name||'',35,650+f.lines.length*(f.size+4)+40);ctx.globalAlpha=1;
}
