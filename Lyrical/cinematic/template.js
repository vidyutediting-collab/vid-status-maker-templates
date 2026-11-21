const grain=rng(77);
return function(ctx,t,S){
  ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);
  ctx.save();ctx.beginPath();ctx.rect(0,130,W,H-260);ctx.clip();
  slides(S.photos,t,4.5,.9).forEach(o=>{ctx.globalAlpha=o.a;cover(ctx,o.img,0,130,W,H-260,1.05+.18*Math.min(1,o.lt/4.5),lerp(.4,-.4,Math.min(1,o.lt/4.5)),0)});ctx.globalAlpha=1;
  ctx.globalCompositeOperation='soft-light';ctx.fillStyle='rgba(0,130,160,.55)';ctx.fillRect(0,130,W,(H-260)*.55);ctx.fillStyle='rgba(255,120,30,.55)';ctx.fillRect(0,130+(H-260)*.45,W,(H-260)*.55);ctx.globalCompositeOperation='source-over';
  const lx=((t*80)%(W+500))-250;const lg=ctx.createLinearGradient(lx-120,0,lx+120,0);lg.addColorStop(0,'rgba(255,150,60,0)');lg.addColorStop(.5,'rgba(255,170,80,.22)');lg.addColorStop(1,'rgba(255,150,60,0)');ctx.fillStyle=lg;ctx.fillRect(0,130,W,H-260);
  vignette(ctx,.65);
  ctx.fillStyle='rgba(255,255,255,.5)';for(let i=0;i<110;i++){ctx.globalAlpha=grain()*.3;ctx.fillRect(grain()*W,130+grain()*(H-260),1.6,1.6)}ctx.globalAlpha=1;ctx.restore();
  const txt=S.text.caption||'';const f=fit(ctx,txt,'300 $px '+SERIF,450,3,40,20);ctx.font=`italic 400 ${f.size}px ${SERIF}`;ctx.textAlign='left';ctx.textBaseline='middle';
  let ci=0;f.lines.forEach((l,li)=>{let x=45;const y=H*.62+li*(f.size+14)+Math.sin(t*1.2)*5;for(const ch of l){const d=ci*.07+.6;const a=easeOut((t-d)/.5);ctx.globalAlpha=a;ctx.fillStyle='#fff';ctx.shadowColor='rgba(0,0,0,.8)';ctx.shadowBlur=12;ctx.fillText(ch,x,y+(1-a)*14);x+=ctx.measureText(ch).width;ci++}});ctx.globalAlpha=1;ctx.shadowBlur=0;
  ctx.fillStyle='rgba(255,255,255,.75)';ctx.font=`600 15px ${SANS}`;ctx.textAlign='center';ctx.fillText('V I D   S T A T U S',W/2,H-58);
  ctx.fillStyle='#000';ctx.fillRect(0,0,W,130);ctx.fillRect(0,H-130,W,130);
}
