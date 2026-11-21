return function(ctx,t,S){
  ctx.fillStyle='#07041a';ctx.fillRect(0,0,W,H);
  ctx.save();ctx.strokeStyle='rgba(150,80,255,.22)';ctx.lineWidth=1.5;const off=(t*40)%60;for(let y=520;y<H+60;y+=60){const yy=y+off*(y/520);ctx.beginPath();ctx.moveTo(0,yy);ctx.lineTo(W,yy);ctx.stroke()}for(let i=-8;i<=8;i++){ctx.beginPath();ctx.moveTo(W/2+i*30,500);ctx.lineTo(W/2+i*150,H);ctx.stroke()}ctx.restore();
  const hue=(t*40)%360;const c1=`hsl(${(hue+280)%360},100%,65%)`,c2=`hsl(${(hue+190)%360},100%,65%)`;
  const cx=W/2,cy=390,half=190;
  ctx.save();ctx.translate(cx,cy);ctx.rotate(Math.PI/4+Math.sin(t*.8)*.05);
  ctx.save();rr(ctx,-half,-half,half*2,half*2,26);ctx.clip();ctx.rotate(-Math.PI/4-Math.sin(t*.8)*.05);
  slides(S.photos,t,3.5,.7).forEach(o=>{ctx.globalAlpha=o.a;cover(ctx,o.img,-half*1.5,-half*1.5,half*3,half*3,1.1+.12*Math.min(1,o.lt/3.5),0,0)});ctx.globalAlpha=1;ctx.restore();
  ctx.lineWidth=9;ctx.shadowBlur=30;ctx.shadowColor=c1;ctx.strokeStyle=c1;rr(ctx,-half,-half,half*2,half*2,26);ctx.stroke();
  ctx.lineWidth=5;ctx.shadowColor=c2;ctx.strokeStyle=c2;rr(ctx,-half-26,-half-26,half*2+52,half*2+52,34);ctx.stroke();
  ctx.lineWidth=2;ctx.shadowBlur=10;ctx.strokeStyle='#fff';rr(ctx,-half,-half,half*2,half*2,26);ctx.stroke();ctx.restore();
  ctx.save();ctx.translate(cx,cy);ctx.rotate(-t*.5);ctx.setLineDash([10,16]);ctx.lineWidth=3;ctx.strokeStyle=c2;ctx.shadowColor=c2;ctx.shadowBlur=12;ctx.beginPath();ctx.arc(0,0,325,0,TAU);ctx.stroke();ctx.restore();
  const p2=S.photos[1%S.photos.length];ctx.save();const ox=cx+170,oy=700+Math.sin(t*1.5)*6;ctx.beginPath();ctx.arc(ox,oy,62,0,TAU);ctx.clip();cover(ctx,p2,ox-62,oy-62,124,124,1.2,0,-.2);ctx.restore();
  ctx.save();ctx.lineWidth=6;ctx.strokeStyle=c1;ctx.shadowColor=c1;ctx.shadowBlur=22;ctx.beginPath();ctx.arc(ox,oy,62,0,TAU);ctx.stroke();ctx.restore();
  ctx.fillStyle='#fff';ctx.save();ctx.shadowColor=c2;ctx.shadowBlur=12;for(let i=0;i<22;i++){const a=i*2.4+t*.35,d=250+((i*53)%140);star(ctx,cx+Math.cos(a)*d*.95,cy+Math.sin(a)*d*.95,3+(i%4)*1.5,.5+.5*Math.sin(t*3+i))}ctx.restore();
  const full=S.text.caption||'';const n=Math.min(full.length,Math.floor(t*10));const shown=full.slice(0,n);const f=fit(ctx,full,'700 $px '+SERIF,320,2,50,24);ctx.font=`italic 700 ${f.size}px ${SERIF}`;ctx.textAlign='left';ctx.textBaseline='middle';
  const lines=wrap(ctx,shown,320);lines.forEach((l,i)=>glowText(ctx,l,50,730+i*(f.size+8),c1,18,'#fff'));
  if(Math.floor(t*2)%2==0&&n<full.length+5){const l=lines[lines.length-1]||'';ctx.fillStyle=c2;ctx.fillRect(50+ctx.measureText(l).width+6,730+(lines.length-1)*(f.size+8)-f.size*.4,4,f.size*.8)}
}
