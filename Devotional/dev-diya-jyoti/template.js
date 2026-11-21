const sk=(()=>{const r=rng(13);return Array.from({length:44},()=>({x:r()*W,sp:30+r()*60,ph:r()*H,s:1.2+r()*2.6,sw:r()*TAU}))})();
return function(ctx,t,S){
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#0f0b3d');g.addColorStop(.6,'#3b1360');g.addColorStop(1,'#7a2a12');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const ax=W/2-175,ay=90,aw=350,ah=470;ctx.save();ctx.shadowColor='#ffcc66';ctx.shadowBlur=28;ctx.fillStyle='#ffd978';ctx.beginPath();ctx.moveTo(ax-10,ay+ah);ctx.lineTo(ax-10,ay+aw/2);ctx.arc(W/2,ay+aw/2,aw/2+10,Math.PI,0);ctx.lineTo(ax+aw+10,ay+ah);ctx.closePath();ctx.fill();ctx.restore();
  ctx.save();ctx.beginPath();ctx.moveTo(ax,ay+ah);ctx.lineTo(ax,ay+aw/2);ctx.arc(W/2,ay+aw/2,aw/2,Math.PI,0);ctx.lineTo(ax+aw,ay+ah);ctx.closePath();ctx.clip();slides(S.photos,t,4,.9).forEach(o=>{ctx.globalAlpha=o.a;cover(ctx,o.img,ax,ay,aw,ah,1.06+.1*Math.min(1,o.lt/4),0,-.2)});ctx.globalAlpha=1;ctx.restore();
  ctx.fillStyle='#ffd27a';sk.forEach(d=>{const y=H-((t*d.sp+d.ph)%(H+40));ctx.globalAlpha=.3+.4*Math.abs(Math.sin(t*3+d.sw));ctx.beginPath();ctx.arc(d.x+Math.sin(t+d.sw)*16,y,d.s,0,TAU);ctx.fill()});ctx.globalAlpha=1;
  for(let i=0;i<7;i++){const x=45+i*75,y=905;const fl=1+Math.sin(t*8+i*2.3)*.14;ctx.fillStyle='#7c2d12';ctx.beginPath();ctx.ellipse(x,y,32,12,0,0,Math.PI);ctx.fill();const fg=ctx.createRadialGradient(x,y-14,2,x,y-14,40);fg.addColorStop(0,'rgba(255,240,150,.95)');fg.addColorStop(1,'rgba(255,150,0,0)');ctx.fillStyle=fg;ctx.fillRect(x-42,y-58,84,84);ctx.fillStyle='#ffd24d';ctx.beginPath();ctx.ellipse(x,y-10,6*fl,16*fl,0,0,TAU);ctx.fill()}
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','italic 800 $px '+SERIF,470,2,64,28);ctx.font=`italic 800 ${f.size}px ${SERIF}`;
  f.lines.forEach((l,i)=>{const y=650+i*(f.size+4)+Math.sin(t*1.6)*5;const gg=ctx.createLinearGradient(0,y-30,0,y+30);gg.addColorStop(0,'#fff6c8');gg.addColorStop(1,'#ffb830');ctx.globalAlpha=easeOut(t/1);ctx.shadowColor='#ff9f1c';ctx.shadowBlur=20;ctx.fillStyle=gg;ctx.fillText(l,W/2,y)});
  ctx.shadowBlur=6;ctx.font=`600 26px ${SANS}`;ctx.fillStyle='#ffe9c0';ctx.fillText(S.text.name||'',W/2,780);ctx.globalAlpha=1;ctx.shadowBlur=0;
}
