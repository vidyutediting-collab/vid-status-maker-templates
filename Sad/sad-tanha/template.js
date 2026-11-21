return function(ctx,t,S){
  ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);
  slides(S.photos,t,4,1).forEach(o=>{ctx.save();ctx.globalAlpha=o.a;try{ctx.filter='grayscale(1) contrast(1.15) brightness(.7)'}catch(e){}cover(ctx,o.img,0,0,W,H,1.04+.14*Math.min(1,o.lt/4),0,Math.sin(o.lt*.5)*.3);ctx.restore()});ctx.filter='none';
  const rg=rng(Math.floor(t*14)+3);ctx.fillStyle='rgba(255,255,255,.07)';for(let i=0;i<160;i++)ctx.fillRect(rg()*W,rg()*H,2,2);
  vignette(ctx,.7);ctx.fillStyle='#000';ctx.fillRect(0,0,W,90);ctx.fillRect(0,H-90,W,90);
  const g=ctx.createLinearGradient(0,H*.5,0,H-90);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.7)');ctx.fillStyle=g;ctx.fillRect(0,H*.5,W,H*.5-90);
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','400 $px '+SERIF,440,5,44,22);ctx.font=`400 ${f.size}px ${SERIF}`;ctx.fillStyle='#eee';
  f.lines.forEach((l,i)=>{const a=easeOut((t-1-i*1.3)/1.2);ctx.globalAlpha=a;ctx.fillText(l,W/2,660+i*(f.size+10)+(1-a)*14-(f.lines.length-1)*(f.size+10)/2+40)});
  ctx.globalAlpha=.7*easeOut((t-2)/1);ctx.font=`italic 400 26px ${SERIF}`;ctx.fillText('- '+(S.text.name||'')+' -',W/2,H-130);ctx.globalAlpha=1;
}
