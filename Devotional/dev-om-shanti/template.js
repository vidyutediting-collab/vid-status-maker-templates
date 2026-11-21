return function(ctx,t,S){
  const bg=ctx.createRadialGradient(W/2,400,40,W/2,400,700);bg.addColorStop(0,'#ff9a3c');bg.addColorStop(.5,'#c2410c');bg.addColorStop(1,'#3b0a05');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
  const cx=W/2,cy=420;
  for(let ring=0;ring<3;ring++){ctx.save();ctx.translate(cx,cy);ctx.rotate((ring%2?-1:1)*t*.2);const n=16+ring*4,R=210+ring*36;ctx.strokeStyle=`rgba(255,226,140,${.75-ring*.2})`;ctx.lineWidth=2.5;ctx.shadowColor='#ffb347';ctx.shadowBlur=12;for(let i=0;i<n;i++){ctx.save();ctx.rotate(i/n*TAU);ctx.beginPath();ctx.moveTo(R-30,0);ctx.quadraticCurveTo(R,-16,R+30,0);ctx.quadraticCurveTo(R,16,R-30,0);ctx.stroke();ctx.restore()}ctx.restore()}
  ctx.save();ctx.beginPath();ctx.arc(cx,cy,160,0,TAU);ctx.clip();cover(ctx,S.photos[0],cx-160,cy-160,320,320,1.12,0,-.15);ctx.fillStyle='rgba(255,170,60,.16)';ctx.fillRect(0,0,W,H);ctx.restore();
  ctx.save();ctx.strokeStyle='#ffe08a';ctx.lineWidth=7;ctx.shadowColor='#ffb347';ctx.shadowBlur=22+8*Math.sin(t*2);ctx.beginPath();ctx.arc(cx,cy,164,0,TAU);ctx.stroke();ctx.restore();
  ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=`900 ${96+Math.sin(t*2)*4}px ${SERIF}`;ctx.fillStyle='#fff3c4';ctx.shadowColor='#ffb347';ctx.shadowBlur=30;ctx.fillText('ॐ',W/2,110);
  const f=fit(ctx,S.text.caption||'','italic 800 $px '+SERIF,470,2,60,28);ctx.font=`italic 800 ${f.size}px ${SERIF}`;ctx.fillStyle='#ffe9a8';ctx.shadowBlur=22;
  f.lines.forEach((l,i)=>{ctx.globalAlpha=easeOut((t-.3)/1);ctx.fillText(l,W/2,775+i*(f.size+6))});ctx.font=`600 28px ${SANS}`;ctx.fillStyle='#fff';ctx.shadowBlur=8;ctx.fillText(S.text.name||'',W/2,880);ctx.globalAlpha=1;ctx.shadowBlur=0;
}
