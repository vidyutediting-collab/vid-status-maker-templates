const sts=(()=>{const r=rng(2);return Array.from({length:80},()=>({x:r()*W,y:r()*H,s:1+r()*3,ph:r()*TAU,sp:1+r()*3}))})();
return function(ctx,t,S){
  const bg=ctx.createRadialGradient(W/2,380,20,W/2,380,800);bg.addColorStop(0,'#2a1b6e');bg.addColorStop(1,'#050514');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#fff';sts.forEach(s=>{ctx.save();ctx.globalAlpha=.2+.8*Math.abs(Math.sin(t*s.sp+s.ph));star(ctx,s.x,s.y,s.s*2.2,1);ctx.restore()});
  const cx=W/2,cy=380;ctx.save();ctx.translate(cx,cy);ctx.rotate(t*.25);ctx.shadowColor='#ffd23f';ctx.shadowBlur=30;ctx.fillStyle='#ffd23f';ctx.beginPath();for(let i=0;i<20;i++){const rad=i%2?200:265;const a=i/20*TAU;ctx.lineTo(Math.cos(a)*rad,Math.sin(a)*rad)}ctx.closePath();ctx.fill();ctx.restore();
  ctx.save();ctx.beginPath();ctx.arc(cx,cy,190,0,TAU);ctx.clip();cover(ctx,S.photos[0],cx-190,cy-190,380,380,1.1+.05*Math.sin(t*.8),0,-.12);ctx.restore();ctx.strokeStyle='#fff';ctx.lineWidth=6;ctx.beginPath();ctx.arc(cx,cy,192,0,TAU);ctx.stroke();
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','italic 800 $px '+SERIF,480,3,56,26);ctx.font=`italic 800 ${f.size}px ${SERIF}`;const pulse=1+.03*Math.sin(t*3);ctx.save();ctx.translate(W/2,750);ctx.scale(pulse,pulse);
  f.lines.forEach((l,i)=>{const y=i*(f.size+6)-(f.lines.length-1)*(f.size+6)/2;ctx.globalAlpha=easeOut((t-.2-i*.3)/.9);const gg=ctx.createLinearGradient(0,y-30,0,y+30);gg.addColorStop(0,'#fff');gg.addColorStop(1,'#ffd23f');ctx.shadowColor='#ffd23f';ctx.shadowBlur=22;ctx.fillStyle=gg;ctx.fillText(l,0,y)});ctx.restore();ctx.globalAlpha=1;
  ctx.font=`700 34px ${SANS}`;ctx.fillStyle='#ffe9a8';ctx.fillText('★ '+(S.text.name||'')+' ★',W/2,885+Math.sin(t*2)*4);ctx.shadowBlur=0;
}
