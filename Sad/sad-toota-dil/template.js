const tr=(()=>{const r=rng(44);return Array.from({length:22},()=>({x:r()*W,sp:120+r()*220,ph:r()*H,s:3+r()*4}))})();
return function(ctx,t,S){
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#0e0a1f');g.addColorStop(1,'#2a0d1c');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='rgba(140,180,255,.5)';tr.forEach(d=>{const y=((t*d.sp+d.ph)%(H+40))-20;ctx.beginPath();ctx.ellipse(d.x,y,d.s*.6,d.s*1.4,0,0,TAU);ctx.fill()});
  const cx=W/2,cy=370,s=14,gap=easeOut(t/2)*16+Math.sin(t*2)*2;
  [-1,1].forEach(side=>{ctx.save();ctx.translate(side*gap,side*Math.sin(t*1.3)*4);ctx.rotate(side*(.03+easeOut(t/2)*.05));heartPath(ctx,cx,cy,s);ctx.clip();ctx.beginPath();ctx.rect(side<0?0:cx,0,side<0?cx:W-cx,H);ctx.clip();
    cover(ctx,S.photos[0],cx-260,cy-240,520,480,1.05,0,0);ctx.fillStyle='rgba(20,0,40,.35)';ctx.fillRect(0,0,W,H);ctx.restore()});
  ctx.save();ctx.strokeStyle='#ff6b8b';ctx.lineWidth=4;ctx.shadowColor='#ff3d6e';ctx.shadowBlur=16;[-1,1].forEach(side=>{ctx.save();ctx.translate(side*gap,side*Math.sin(t*1.3)*4);ctx.rotate(side*(.03+easeOut(t/2)*.05));heartPath(ctx,cx,cy,s);ctx.stroke();ctx.restore()});ctx.restore();
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','italic 700 $px '+SERIF,460,2,52,26);ctx.font=`italic 700 ${f.size}px ${SERIF}`;ctx.fillStyle='#ffd6df';ctx.shadowColor='#ff3d6e';ctx.shadowBlur=14;
  f.lines.forEach((l,i)=>{ctx.globalAlpha=easeOut((t-.8)/1.2);ctx.fillText(l,W/2,740+i*(f.size+6))});ctx.globalAlpha=1;ctx.font=`600 28px ${SANS}`;ctx.fillStyle='#b8a4c9';ctx.shadowBlur=0;ctx.fillText(S.text.name||'',W/2,870);
}
