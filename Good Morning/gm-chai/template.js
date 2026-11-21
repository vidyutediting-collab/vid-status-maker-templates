return function(ctx,t,S){
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#fff1d6');g.addColorStop(1,'#e0a96d');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.save();ctx.shadowColor='rgba(90,40,10,.4)';ctx.shadowBlur=24;ctx.fillStyle='#fff';rr(ctx,70,70,400,330,24);ctx.fill();ctx.shadowBlur=0;rr(ctx,84,84,372,302,16);ctx.clip();cover(ctx,S.photos[0],84,84,372,302,1.06+.06*Math.min(1,t/6),Math.sin(t*.5)*.3,0);ctx.restore();
  const cx=W/2,cy=560;for(let i=0;i<3;i++){ctx.save();ctx.strokeStyle='rgba(120,70,30,.45)';ctx.lineWidth=7;ctx.lineCap='round';ctx.globalAlpha=.5+.4*Math.sin(t*1.5+i*2);ctx.beginPath();for(let y=0;y<=110;y+=6){const x=cx-40+i*40+Math.sin(y*.08+t*3+i)*14;y?ctx.lineTo(x,cy-60-y-((t*24+i*30)%30)):ctx.moveTo(x,cy-60)}ctx.stroke();ctx.restore()}
  ctx.fillStyle='#8b5a3c';ctx.beginPath();ctx.ellipse(cx,cy+130,170,34,0,0,TAU);ctx.fill();
  ctx.strokeStyle='#fff';ctx.lineWidth=18;ctx.beginPath();ctx.arc(cx+125,cy+40,48,-1.3,1.3);ctx.stroke();
  ctx.fillStyle='#fff';ctx.beginPath();ctx.moveTo(cx-120,cy-20);ctx.lineTo(cx+120,cy-20);ctx.quadraticCurveTo(cx+110,cy+130,cx,cy+135);ctx.quadraticCurveTo(cx-110,cy+130,cx-120,cy-20);ctx.fill();
  ctx.fillStyle='#b8733a';ctx.beginPath();ctx.ellipse(cx,cy-20,120,22,0,0,TAU);ctx.fill();ctx.fillStyle='#d99a5b';ctx.beginPath();ctx.ellipse(cx,cy-20,100,15,0,0,TAU);ctx.fill();
  ctx.textAlign='center';ctx.textBaseline='middle';const q=S.text.caption||'';const f=fit(ctx,q,'800 $px '+SERIF,470,3,42,22);ctx.font=`800 ${f.size}px ${SERIF}`;const n=Math.min(q.length,Math.floor(t*14));const shown=q.slice(0,n);
  const f2=fit(ctx,shown,`800 ${f.size}px `+SERIF,470,3,f.size,f.size);ctx.fillStyle='#5a2d0c';f2.lines.forEach((l,i)=>ctx.fillText(l,W/2,765+i*(f.size+6)));
  ctx.font=`600 28px ${SANS}`;ctx.fillStyle='#7c4a1e';ctx.fillText('☕ '+(S.text.name||''),W/2,915);
}
