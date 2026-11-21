const tw=(()=>{const r=rng(17);return Array.from({length:26},()=>({x:r()*W,y:r()*H,s:1.5+r()*3.5,ph:r()*TAU}))})();
return function(ctx,t,S){
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#3d1b2e');g.addColorStop(1,'#8c2f4b');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#ffd6e0';tw.forEach(p=>{ctx.globalAlpha=.25+.55*Math.abs(Math.sin(t*1.5+p.ph));ctx.beginPath();ctx.arc(p.x,p.y,p.s,0,TAU);ctx.fill()});ctx.globalAlpha=1;
  ctx.strokeStyle='#e8c9a0';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(0,100);ctx.quadraticCurveTo(W/2,190,W,100);ctx.stroke();
  [[140,-.1,0,150],[400,.09,1,190]].forEach(([x,r0,i,y])=>{ctx.save();ctx.translate(x,y);ctx.rotate(r0+Math.sin(t*1.4+i*1.7)*.05);ctx.fillStyle='#e8c9a0';ctx.fillRect(-5,-34,10,44);
    ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=24;ctx.fillStyle='#fffaf0';ctx.fillRect(-115,0,230,290);ctx.shadowBlur=0;
    ctx.save();ctx.beginPath();ctx.rect(-101,14,202,202);ctx.clip();cover(ctx,S.photos[i%S.photos.length],-101,14,202,202,1.06+.05*Math.sin(t*.8+i),Math.sin(t*.5+i)*.3,0);ctx.restore();ctx.restore()});
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','italic 700 $px '+SERIF,460,3,50,24);ctx.font=`italic 700 ${f.size}px ${SERIF}`;ctx.fillStyle='#ffe4ec';ctx.shadowColor='#ff5d8f';ctx.shadowBlur=18;
  f.lines.forEach((l,i)=>{ctx.globalAlpha=easeOut((t-.5-i*.5)/1);ctx.fillText(l,W/2,620+i*(f.size+8)+Math.sin(t*1.5)*5)});ctx.globalAlpha=1;ctx.shadowBlur=0;
  ctx.fillStyle='#ff7aa8';for(let i=0;i<7;i++){const y=H-((t*50+i*150)%(H+60))+20;ctx.globalAlpha=.4;heartPath(ctx,60+i*70+Math.sin(t+i)*20,y,.5);ctx.fill()}ctx.globalAlpha=1;
  ctx.font=`600 34px ${SANS}`;ctx.fillStyle='#fff';ctx.fillText('♥ '+(S.text.name||'')+' ♥',W/2,870);
}
