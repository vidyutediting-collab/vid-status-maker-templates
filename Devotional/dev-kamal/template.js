return function(ctx,t,S){
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#fbcfe8');g.addColorStop(.5,'#c084fc');g.addColorStop(1,'#312e81');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const cx=W/2,cy=330;ctx.save();ctx.beginPath();ctx.arc(cx,cy,160,0,TAU);ctx.clip();cover(ctx,S.photos[0],cx-160,cy-160,320,320,1.12,0,-.15);ctx.restore();
  ctx.save();ctx.strokeStyle='#fff';ctx.lineWidth=6;ctx.shadowColor='#f0abfc';ctx.shadowBlur=24;ctx.beginPath();ctx.arc(cx,cy,164,0,TAU);ctx.stroke();ctx.restore();
  for(let i=0;i<4;i++){const p=((t*.35+i/4)%1);ctx.strokeStyle=`rgba(255,255,255,${.4*(1-p)})`;ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(W/2,850,60+p*300,12+p*50,0,0,TAU);ctx.stroke()}
  const open=easeOut(t/2.6),ly=830;
  for(let layer=0;layer<3;layer++){const n=layer?8:10,L=(150-layer*30)*open,a0=layer*.2+Math.sin(t*.8)*.02;const col=['#f9a8d4','#f472b6','#fde68a'][layer];
    for(let i=0;i<n;i++){const ang=-Math.PI/2+(i-(n-1)/2)*(.36+layer*.05)*1.0+a0*0;ctx.save();ctx.translate(cx,ly);ctx.rotate(ang+Math.PI/2);ctx.fillStyle=col;ctx.globalAlpha=.88;ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(0,0);ctx.quadraticCurveTo(L*.38,-L*.45,0,-L);ctx.quadraticCurveTo(-L*.38,-L*.45,0,0);ctx.fill();ctx.stroke();ctx.restore()}}
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','italic 800 $px '+SERIF,470,2,64,28);ctx.font=`italic 800 ${f.size}px ${SERIF}`;ctx.fillStyle='#fff';ctx.shadowColor='#7e22ce';ctx.shadowBlur=18;
  f.lines.forEach((l,i)=>{ctx.globalAlpha=easeOut((t-.5)/1);ctx.fillText(l,W/2,590+i*(f.size+6)+Math.sin(t*1.5)*5)});ctx.font=`600 26px ${SANS}`;ctx.fillStyle='#fdf4ff';ctx.fillText(S.text.name||'',W/2,670);ctx.globalAlpha=1;ctx.shadowBlur=0;
}
