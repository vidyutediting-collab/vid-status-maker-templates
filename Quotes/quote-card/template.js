return function(ctx,t,S){
  const h=(t*8)%360;const g=ctx.createLinearGradient(0,0,W,H);g.addColorStop(0,`hsl(${265+Math.sin(t*.4)*20},75%,28%)`);g.addColorStop(1,`hsl(${315+Math.sin(t*.5)*25},80%,38%)`);ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='rgba(255,255,255,.08)';for(let i=0;i<6;i++){const a=i*1.1+t*.2;ctx.beginPath();ctx.arc(W/2+Math.cos(a)*220,H/2+Math.sin(a*1.3)*320,90+i*18,0,TAU);ctx.fill()}
  ctx.font=`900 300px ${SERIF}`;ctx.fillStyle='rgba(255,255,255,.12)';ctx.textAlign='left';ctx.textBaseline='alphabetic';ctx.fillText('\u201C',20,330);
  const px=W/2,py=190;ctx.save();ctx.beginPath();ctx.arc(px,py,70,0,TAU);ctx.clip();cover(ctx,S.photos[0],px-70,py-70,140,140,1.25,0,-.25);ctx.restore();ctx.save();ctx.strokeStyle='#fff';ctx.lineWidth=5;ctx.shadowColor='#ff8aff';ctx.shadowBlur=18;ctx.beginPath();ctx.arc(px,py,72+Math.sin(t*2)*2,0,TAU);ctx.stroke();ctx.restore();
  const q=S.text.caption||'';const f=fit(ctx,q,'italic 700 $px '+SERIF,440,9,46,22);ctx.font=`italic 700 ${f.size}px ${SERIF}`;ctx.textAlign='center';ctx.textBaseline='middle';
  const words=q.split(/\s+/).filter(Boolean);let wc=0;const total=words.length||1;const reveal=clamp(t/Math.max(2.5,total*.28));const showW=Math.floor(reveal*total+.999);
  const lh=f.size*1.28,y0=H*.55-(f.lines.length-1)*lh/2;
  f.lines.forEach((l,i)=>{const ws=l.split(' ');let x=W/2-ctx.measureText(l).width/2;ctx.textAlign='left';ws.forEach(w=>{wc++;const a=wc<=showW?easeOut((reveal*total-(wc-1))/1):0;ctx.globalAlpha=clamp(a);ctx.fillStyle='#fff';ctx.shadowColor='rgba(255,120,255,.6)';ctx.shadowBlur=14;ctx.fillText(w,x,y0+i*lh+(1-clamp(a))*12);x+=ctx.measureText(w+' ').width})});ctx.globalAlpha=1;ctx.shadowBlur=0;
  ctx.textAlign='center';ctx.font=`600 26px ${SANS}`;ctx.fillStyle='#ffd6ff';ctx.globalAlpha=easeOut((t-2)/.8);ctx.fillText(S.text.name||'',W/2,H*.55+f.lines.length*lh/2+60);ctx.globalAlpha=1;
  const w=(t*120)%(W+200)-100;ctx.fillStyle='#fff';ctx.fillRect(0,H-12,W,4);ctx.fillStyle='#ff7be8';ctx.fillRect(0,H-12,W*clamp((t%10)/10),4);
}
