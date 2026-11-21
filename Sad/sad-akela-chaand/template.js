const st=(()=>{const r=rng(77);return Array.from({length:70},()=>({x:r()*W,y:r()*H*.8,s:.8+r()*2.2,ph:r()*TAU,sp:1+r()*2}))})();
return function(ctx,t,S){
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#04061a');g.addColorStop(1,'#16224a');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#fff';st.forEach(s=>{ctx.globalAlpha=.2+.7*Math.abs(Math.sin(t*s.sp+s.ph));ctx.beginPath();ctx.arc(s.x,s.y,s.s,0,TAU);ctx.fill()});ctx.globalAlpha=1;
  const k=(t%6)/6;if(k<.2){const p=k/.2;const x=60+p*360,y=60+p*200;const lg=ctx.createLinearGradient(x,y,x-90,y-45);lg.addColorStop(0,'rgba(255,255,255,.9)');lg.addColorStop(1,'rgba(255,255,255,0)');ctx.strokeStyle=lg;ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-90,y-45);ctx.stroke()}
  const cx=W/2,cy=360+Math.sin(t*.7)*8,r=150;const mg=ctx.createRadialGradient(cx,cy,r*.8,cx,cy,r*2.2);mg.addColorStop(0,'rgba(190,210,255,.45)');mg.addColorStop(1,'rgba(190,210,255,0)');ctx.fillStyle=mg;ctx.fillRect(0,0,W,H);
  ctx.save();ctx.beginPath();ctx.arc(cx,cy,r,0,TAU);ctx.clip();cover(ctx,S.photos[0],cx-r,cy-r,r*2,r*2,1.15,0,-.1);ctx.fillStyle='rgba(180,200,255,.22)';ctx.fillRect(cx-r,cy-r,r*2,r*2);ctx.restore();
  ctx.strokeStyle='rgba(220,230,255,.9)';ctx.lineWidth=3;ctx.shadowColor='#9db4ff';ctx.shadowBlur=24;ctx.beginPath();ctx.arc(cx,cy,r+2,0,TAU);ctx.stroke();ctx.shadowBlur=0;
  ctx.fillStyle='#050816';ctx.beginPath();ctx.moveTo(0,H);ctx.lineTo(0,860);for(let x=0;x<=W;x+=30)ctx.lineTo(x,860-Math.abs(Math.sin(x*.07))*40-((x*7)%50));ctx.lineTo(W,H);ctx.closePath();ctx.fill();
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','italic 600 $px '+SERIF,450,3,48,24);ctx.font=`italic 600 ${f.size}px ${SERIF}`;ctx.fillStyle='#dfe8ff';ctx.shadowColor='#9db4ff';ctx.shadowBlur=16;
  f.lines.forEach((l,i)=>{ctx.globalAlpha=easeOut((t-.6-i*.5)/1);ctx.fillText(l,W/2,640+i*(f.size+8)+Math.sin(t*1.2)*5)});ctx.globalAlpha=.8;ctx.font=`24px ${SANS}`;ctx.fillText(S.text.name||'',W/2,800);ctx.globalAlpha=1;ctx.shadowBlur=0;
}
