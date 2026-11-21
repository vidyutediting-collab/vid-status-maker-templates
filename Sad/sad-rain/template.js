const rain=(()=>{const r=rng(88);return Array.from({length:120},()=>({x:r()*(W+200),sp:600+r()*500,ph:r()*H,l:18+r()*30,a:.15+r()*.3}))})();
return function(ctx,t,S){
  ctx.fillStyle='#050a14';ctx.fillRect(0,0,W,H);
  slides(S.photos,t,4,1).forEach(o=>{ctx.save();ctx.globalAlpha=o.a;try{ctx.filter='grayscale(.85) contrast(1.1) brightness(.75)'}catch(e){}cover(ctx,o.img,0,0,W,H,1.05+.1*Math.min(1,o.lt/4),0,Math.sin(o.lt*.4)*.3);ctx.restore()});ctx.filter='none';
  ctx.fillStyle='rgba(20,50,100,.42)';ctx.fillRect(0,0,W,H);
  const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'rgba(0,5,20,.75)');g.addColorStop(.4,'rgba(0,5,20,.1)');g.addColorStop(1,'rgba(0,5,20,.85)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.strokeStyle='#bcd7ff';ctx.lineWidth=1.4;rain.forEach(r=>{const y=((t*r.sp+r.ph)%(H+80))-40;const x=r.x-(y*.18)-60;ctx.globalAlpha=r.a;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-r.l*.18,y+r.l);ctx.stroke()});ctx.globalAlpha=1;
  const fg=ctx.createLinearGradient(0,H*.6,0,H);fg.addColorStop(0,'rgba(120,150,200,0)');fg.addColorStop(1,`rgba(120,150,200,${.2+.08*Math.sin(t*.7)})`);ctx.fillStyle=fg;ctx.fillRect(0,H*.6,W,H*.4);
  const fl=Math.pow(Math.max(0,Math.sin(t*.9+Math.sin(t*3))),40);if(fl>.05){ctx.fillStyle=`rgba(200,220,255,${fl*.28})`;ctx.fillRect(0,0,W,H)}
  vignette(ctx,.55);
  const f=fit(ctx,S.text.caption||'','italic 400 $px '+SERIF,440,3,50,24);ctx.font=`italic 400 ${f.size}px ${SERIF}`;ctx.textAlign='center';ctx.textBaseline='middle';
  const ap=.55+.45*Math.sin(t*.8-1)*.5+.45*easeOut(t/1.5)*.0;const fa=easeOut(t/1.6)*(.8+.2*Math.sin(t*1.2));
  f.lines.forEach((l,i)=>{ctx.globalAlpha=fa;ctx.fillStyle='#e8f0ff';ctx.shadowColor='rgba(120,170,255,.9)';ctx.shadowBlur=18;ctx.fillText(l,W/2,H*.76+Math.sin(t*1.1)*7+i*(f.size+10))});ctx.globalAlpha=1;ctx.shadowBlur=0;
  ctx.font='46px '+SANS;ctx.globalAlpha=.9;ctx.fillText('\uD83D\uDC94',W/2,H*.9+Math.sin(t*2)*4);ctx.globalAlpha=1;
}
