return function(ctx,t,S){
  ctx.fillStyle='#1a0f12';ctx.fillRect(0,0,W,H);
  for(let y=0,r=0;y<H;y+=40,r++){for(let x=-(r%2)*45;x<W;x+=90){ctx.fillStyle=(x*7+y*3)%5<2?'#2a1519':'#231216';ctx.fillRect(x+2,y+2,86,36)}}
  const lg=ctx.createRadialGradient(W/2,420,20,W/2,420,560);lg.addColorStop(0,'rgba(255,40,160,.28)');lg.addColorStop(1,'rgba(0,0,0,.75)');ctx.fillStyle=lg;ctx.fillRect(0,0,W,H);
  const fk=Math.sin(t*37)>.92&&Math.sin(t*3)>.2?.35:1;
  ctx.save();ctx.beginPath();rr(ctx,70,130,400,470,24);ctx.clip();slides(S.photos,t,3.5,.8).forEach(o=>{ctx.globalAlpha=o.a;cover(ctx,o.img,70,130,400,470,1.05+.1*Math.min(1,o.lt/3.5),Math.sin(o.lt*.5)*.3,0)});ctx.restore();ctx.globalAlpha=1;
  ctx.save();ctx.globalAlpha=fk;ctx.strokeStyle='#00f0ff';ctx.lineWidth=6;ctx.shadowColor='#00f0ff';ctx.shadowBlur=26;rr(ctx,70,130,400,470,24);ctx.stroke();ctx.lineWidth=2;ctx.strokeStyle='#fff';ctx.shadowBlur=8;rr(ctx,70,130,400,470,24);ctx.stroke();ctx.restore();
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','italic 800 $px '+SERIF,470,2,78,30);ctx.font=`italic 800 ${f.size}px ${SERIF}`;
  ctx.save();ctx.globalAlpha=(Math.sin(t*23)>.97?.3:1)*easeOut(t/.8);f.lines.forEach((l,i)=>glowText(ctx,l,W/2,740+i*(f.size+6),'#ff2fa0',26,'#ffd6ef'));ctx.restore();
  ctx.font=`700 28px ${SANS}`;ctx.save();ctx.globalAlpha=fk;glowText(ctx,'♪ '+(S.text.name||'')+' ♪',W/2,870,'#00f0ff',18,'#e0ffff');ctx.restore();
}
