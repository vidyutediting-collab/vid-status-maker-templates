const bk=(()=>{const r=rng(5);return Array.from({length:22},()=>({x:r()*W,y:r()*H,s:18+r()*46,sp:8+r()*20,ph:r()*TAU}))})();
return function(ctx,t,S){
  const bg=ctx.createRadialGradient(W/2,380,40,W/2,380,760);bg.addColorStop(0,'#6b0f2a');bg.addColorStop(1,'#12020a');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
  bk.forEach(b=>{const y=((b.y-t*b.sp)%H+H)%H;ctx.fillStyle=`rgba(255,110,150,${.08+.07*Math.sin(t+b.ph)})`;ctx.beginPath();ctx.arc(b.x+Math.sin(t*.5+b.ph)*16,y,b.s,0,TAU);ctx.fill()});
  const cx=W/2,cy=380;ctx.save();ctx.beginPath();ctx.arc(cx,cy,165,0,TAU);ctx.clip();cover(ctx,S.photos[0],cx-165,cy-165,330,330,1.1+.06*Math.sin(t*.7),Math.sin(t*.4)*.3,-.1);ctx.restore();
  ctx.save();ctx.strokeStyle='#ffd1dc';ctx.lineWidth=4;ctx.shadowColor='#ff4d6d';ctx.shadowBlur=22;ctx.beginPath();ctx.arc(cx,cy,170,0,TAU);ctx.stroke();ctx.restore();
  ctx.save();ctx.shadowColor='#ff4d6d';ctx.shadowBlur=16;for(let i=0;i<16;i++){const a=i/16*TAU+t*.5;const k=.75+.2*Math.sin(t*3+i);ctx.fillStyle=i%2?'#ff4d6d':'#ff9fb5';heartPath(ctx,cx+Math.cos(a)*215,cy+Math.sin(a)*215,k);ctx.fill()}ctx.restore();
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','italic 800 $px '+SERIF,470,2,54,26);ctx.font=`italic 800 ${f.size}px ${SERIF}`;
  f.lines.forEach((l,i)=>{const y=730+i*(f.size+6);const gg=ctx.createLinearGradient(0,y-28,0,y+28);gg.addColorStop(0,'#fff1b8');gg.addColorStop(1,'#f6b93b');ctx.save();ctx.globalAlpha=easeOut((t-.2)/1.1);ctx.translate(0,(1-easeOut((t-.2)/1.1))*30);ctx.shadowColor='#f6b93b';ctx.shadowBlur=18;ctx.fillStyle=gg;ctx.fillText(l,W/2,y);ctx.restore()});
  ctx.font=`600 30px ${SANS}`;ctx.fillStyle='#ffd1dc';ctx.fillText(S.text.name||'',W/2,880+Math.sin(t*2)*4);
}
