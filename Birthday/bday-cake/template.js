return function(ctx,t,S){
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#ffe0ec');g.addColorStop(1,'#ffc2a8');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const cols=['#ff4d6d','#ffd23f','#3bceac','#4cc9f0','#b967ff'];ctx.strokeStyle='#8a5a44';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(0,30);ctx.quadraticCurveTo(W/2,110,W,30);ctx.stroke();
  for(let i=0;i<9;i++){const x=30+i*60,y=30+Math.sin(i/8*Math.PI)*40*1.1+10;const sw=Math.sin(t*2+i)*.12;ctx.save();ctx.translate(x,y);ctx.rotate(sw);ctx.fillStyle=cols[i%5];ctx.beginPath();ctx.moveTo(-24,0);ctx.lineTo(24,0);ctx.lineTo(0,52);ctx.closePath();ctx.fill();ctx.restore()}
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','italic 900 $px '+SERIF,480,2,62,30);ctx.font=`italic 900 ${f.size}px ${SERIF}`;const sc=easeOutBack(t/.8);ctx.save();ctx.translate(W/2,190);ctx.scale(sc,sc);
  f.lines.forEach((l,i)=>{ctx.lineWidth=8;ctx.strokeStyle='#fff';ctx.strokeText(l,0,i*(f.size+2));ctx.fillStyle='#e11d48';ctx.fillText(l,0,i*(f.size+2))});ctx.restore();
  const cx=W/2,cy=410;ctx.save();ctx.beginPath();ctx.arc(cx,cy,135,0,TAU);ctx.clip();cover(ctx,S.photos[0],cx-135,cy-135,270,270,1.1+.04*Math.sin(t),0,-.15);ctx.restore();ctx.strokeStyle='#fff';ctx.lineWidth=8;ctx.shadowColor='#ff4d6d';ctx.shadowBlur=18;ctx.beginPath();ctx.arc(cx,cy,138,0,TAU);ctx.stroke();ctx.shadowBlur=0;
  const tiers=[[90,740,300,90,'#f9a8d4'],[130,650,280,90,'#fb7185'],[170,570,200,80,'#fde68a']];
  tiers.forEach(([x,y,w,h,c],i)=>{const tw0=w*(1+.0);const lx=W/2-tw0/2;ctx.fillStyle=c;rr(ctx,lx,y,tw0,h,14);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.moveTo(lx,y+12);for(let k=0;k<=8;k++){ctx.quadraticCurveTo(lx+tw0*(k+.5)/8,y+30+Math.sin(k)*4,lx+tw0*(k+1)/8,y+12)}ctx.lineTo(lx+tw0,y);ctx.lineTo(lx,y);ctx.closePath();ctx.fill()});
  ctx.fillStyle='#e5e7eb';rr(ctx,W/2-190,820,380,18,9);ctx.fill();
  for(let i=0;i<5;i++){const x=W/2-80+i*40,y=545;ctx.fillStyle=cols[i];ctx.fillRect(x-5,y,10,26);const fl=1+Math.sin(t*9+i*2)*.14;const fg2=ctx.createRadialGradient(x,y-14,2,x,y-14,30);fg2.addColorStop(0,'rgba(255,240,150,.95)');fg2.addColorStop(1,'rgba(255,150,0,0)');ctx.fillStyle=fg2;ctx.fillRect(x-32,y-46,64,64);ctx.fillStyle='#ffc933';ctx.beginPath();ctx.ellipse(x,y-12,5*fl,13*fl,0,0,TAU);ctx.fill()}
  ctx.font=`700 38px ${SANS}`;ctx.fillStyle='#9d174d';ctx.fillText('✨ '+(S.text.name||'')+' ✨',W/2,895+Math.sin(t*2)*4);
}
