const hs=(()=>{const r=rng(61);return Array.from({length:12},()=>({x:r()*W,sp:40+r()*60,ph:r()*H,s:.4+r()*.8,sw:r()*TAU}))})();
return function(ctx,t,S){
  ctx.fillStyle='#2b0a3d';ctx.fillRect(0,0,W,H);
  slides(S.photos,t,4,.9).forEach(o=>{ctx.globalAlpha=o.a;cover(ctx,o.img,0,0,W,H,1.05+.12*Math.min(1,o.lt/4),lerp(-.4,.4,Math.min(1,o.lt/4)),0)});ctx.globalAlpha=1;
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'rgba(255,94,98,.15)');g.addColorStop(.5,'rgba(255,140,70,.35)');g.addColorStop(1,'rgba(60,10,70,.88)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const sy=560+Math.sin(t*.5)*10;const sg=ctx.createRadialGradient(W/2,sy,5,W/2,sy,260);sg.addColorStop(0,'rgba(255,240,170,.85)');sg.addColorStop(.3,'rgba(255,170,80,.4)');sg.addColorStop(1,'rgba(255,120,60,0)');ctx.fillStyle=sg;ctx.fillRect(0,sy-260,W,520);
  ctx.fillStyle='#ffe8a8';hs.forEach(h=>{const y=H-((t*h.sp+h.ph)%(H+60))+30;ctx.globalAlpha=.55;heartPath(ctx,h.x+Math.sin(t+h.sw)*22,y,h.s);ctx.fill()});ctx.globalAlpha=1;
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','italic 800 $px '+SERIF,470,3,56,26);ctx.font=`italic 800 ${f.size}px ${SERIF}`;ctx.fillStyle='#fff';ctx.shadowColor='rgba(80,0,60,.9)';ctx.shadowBlur=18;
  f.lines.forEach((l,i)=>{const a=easeOut((t-.3-i*.4)/.9);ctx.globalAlpha=a;ctx.fillText(l,W/2,690+(1-a)*26+i*(f.size+6))});ctx.globalAlpha=1;
  ctx.font=`600 30px ${SANS}`;ctx.fillStyle='#ffe8a8';ctx.fillText('— '+(S.text.name||'')+' —',W/2,885);ctx.shadowBlur=0;
}
