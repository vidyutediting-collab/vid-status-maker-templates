const pt=(()=>{const r=rng(7);return Array.from({length:34},()=>({x:r()*W,sp:40+r()*70,ph:r()*H,s:8+r()*12,sw:r()*TAU,rs:1+r()*3,c:['#e11d48','#fb7185','#be123c','#fda4af'][(r()*4)|0]}))})();
return function(ctx,t,S){
  let g=ctx.createLinearGradient(0,0,W,H);g.addColorStop(0,'#ffd1dc');g.addColorStop(1,'#ff8fab');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const cx=W/2,cy=410;ctx.save();ctx.translate(cx,cy);ctx.rotate(Math.sin(t*.6)*.03);ctx.shadowColor='rgba(120,0,40,.4)';ctx.shadowBlur=30;ctx.fillStyle='#fff';rr(ctx,-215,-310,430,620,30);ctx.fill();ctx.shadowBlur=0;
  ctx.save();rr(ctx,-195,-290,390,500,18);ctx.clip();slides(S.photos,t,3.5,.8).forEach(o=>{ctx.globalAlpha=o.a;cover(ctx,o.img,-195,-290,390,500,1.04+.1*Math.min(1,o.lt/3.5),Math.sin(o.lt*.6)*.3,0)});ctx.globalAlpha=1;ctx.restore();
  const cap=S.text.caption||'';const f=fit(ctx,cap,'italic 700 $px '+SERIF,370,2,42,22);ctx.font=`italic 700 ${f.size}px ${SERIF}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#be123c';ctx.globalAlpha=easeOut((t-.3)/1);
  f.lines.forEach((l,i)=>ctx.fillText(l,0,250+(i-(f.lines.length-1)/2)*(f.size+4)));ctx.globalAlpha=1;ctx.restore();
  pt.forEach(p=>{const y=((t*p.sp+p.ph)%(H+60))-30;ctx.save();ctx.translate(p.x+Math.sin(t*1.1+p.sw)*30,y);ctx.rotate(t*p.rs*.5+p.sw);ctx.scale(1,Math.abs(Math.cos(t*p.rs+p.sw))*.7+.3);ctx.globalAlpha=.85;ctx.fillStyle=p.c;ctx.beginPath();ctx.ellipse(0,0,p.s,p.s*.62,0,0,TAU);ctx.fill();ctx.restore()});
  ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=`italic 800 38px ${SERIF}`;ctx.fillStyle='#fff';ctx.shadowColor='#9f1239';ctx.shadowBlur=14;ctx.fillText('♥ '+(S.text.name||'')+' ♥',W/2,H-60+Math.sin(t*2)*4);ctx.shadowBlur=0;
}
