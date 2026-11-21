return function(ctx,t,S){
  ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);
  slides(S.photos,t,5,1).forEach(o=>{ctx.save();ctx.globalAlpha=o.a;cover(ctx,o.img,0,0,W,H,1.04+.16*Math.min(1,o.lt/5),0,lerp(.3,-.3,Math.min(1,o.lt/5)));ctx.restore()});
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'rgba(0,0,0,.35)');g.addColorStop(.35,'rgba(0,0,0,.55)');g.addColorStop(1,'rgba(0,0,0,.88)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.font=`900 260px ${SERIF}`;ctx.fillStyle=`rgba(255,200,60,${.55*easeOut(t/.8)})`;ctx.textAlign='left';ctx.textBaseline='alphabetic';ctx.fillText('“',30,330);
  ctx.textAlign='center';ctx.textBaseline='middle';const q=S.text.caption||'';const f=fit(ctx,q,'italic 700 $px '+SERIF,440,8,46,22);ctx.font=`italic 700 ${f.size}px ${SERIF}`;const lh=f.size*1.3,y0=H*.52-(f.lines.length-1)*lh/2;
  f.lines.forEach((l,i)=>{const a=easeOut((t-.6-i*.35)/.8);ctx.globalAlpha=a;ctx.fillStyle='#fff';ctx.shadowColor='rgba(0,0,0,.8)';ctx.shadowBlur=14;ctx.fillText(l,W/2,y0+i*lh+(1-a)*18)});ctx.globalAlpha=1;ctx.shadowBlur=0;
  const ly=y0+f.lines.length*lh+10;ctx.fillStyle='#ffc83c';ctx.fillRect(W/2-60*easeOut((t-1)/1),ly,120*easeOut((t-1)/1),4);ctx.font=`600 28px ${SANS}`;ctx.fillStyle='#ffe29a';ctx.globalAlpha=easeOut((t-1.4)/.8);ctx.fillText(S.text.name||'',W/2,ly+44);ctx.globalAlpha=1;
}
