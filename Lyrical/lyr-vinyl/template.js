const dots=(()=>{const r=rng(31);return Array.from({length:20},()=>({x:r()*W,y:r()*H,s:2+r()*4,ph:r()*TAU}))})();
return function(ctx,t,S){
  let g=ctx.createLinearGradient(0,0,W,H);g.addColorStop(0,'#2e1065');g.addColorStop(1,'#0a0a1a');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#c4b5fd';dots.forEach(d=>{ctx.globalAlpha=.15+.4*Math.abs(Math.sin(t+d.ph));ctx.beginPath();ctx.arc(d.x,d.y,d.s,0,TAU);ctx.fill()});ctx.globalAlpha=1;
  const cx=W/2,cy=380,R=230;ctx.save();ctx.shadowColor='#7c3aed';ctx.shadowBlur=40;ctx.fillStyle='#111';ctx.beginPath();ctx.arc(cx,cy,R,0,TAU);ctx.fill();ctx.restore();
  ctx.save();ctx.translate(cx,cy);ctx.rotate(t*1.6);ctx.strokeStyle='rgba(255,255,255,.08)';ctx.lineWidth=1.5;for(let r=110;r<R;r+=9){ctx.beginPath();ctx.arc(0,0,r,0,TAU);ctx.stroke()}
  ctx.strokeStyle='rgba(255,255,255,.18)';ctx.lineWidth=6;ctx.beginPath();ctx.arc(0,0,170,-.5,.4);ctx.stroke();
  ctx.beginPath();ctx.arc(0,0,100,0,TAU);ctx.clip();cover(ctx,S.photos[0],-100,-100,200,200,1.1,0,0);ctx.restore();
  ctx.fillStyle='#e5e7eb';ctx.beginPath();ctx.arc(cx,cy,9,0,TAU);ctx.fill();
  ctx.save();ctx.translate(480,70);ctx.rotate(.45+Math.sin(t*.5)*.02);ctx.strokeStyle='#d1d5db';ctx.lineWidth=9;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,330);ctx.stroke();ctx.fillStyle='#9ca3af';ctx.fillRect(-12,320,24,38);ctx.restore();
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','italic 700 $px '+SERIF,470,3,54,26);ctx.font=`italic 700 ${f.size}px ${SERIF}`;ctx.fillStyle='#fff';ctx.shadowColor='#a78bfa';ctx.shadowBlur=20;
  f.lines.forEach((l,i)=>{const a=easeOut((t-.4-i*.5)/1);ctx.globalAlpha=a;ctx.fillText(l,W/2,740+i*(f.size+8)+(1-a)*16)});ctx.globalAlpha=1;ctx.shadowBlur=0;ctx.font=`600 26px ${SANS}`;ctx.fillStyle='#ddd6fe';ctx.fillText('♫ '+(S.text.name||''),W/2,880);
}
