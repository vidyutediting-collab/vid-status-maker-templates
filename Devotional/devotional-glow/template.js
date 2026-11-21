const dsp=(()=>{const r=rng(99);return Array.from({length:50},()=>({x:r()*W,sp:25+r()*50,ph:r()*H,s:1.5+r()*3.5,sw:r()*TAU}))})();
return function(ctx,t,S){
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#3a0a14');g.addColorStop(.55,'#8a2a0e');g.addColorStop(1,'#ff9f1c');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const cx=W/2,cy=370;
  const hg=ctx.createRadialGradient(cx,cy,60,cx,cy,380);hg.addColorStop(0,`rgba(255,220,120,${.55+.15*Math.sin(t*2)})`);hg.addColorStop(1,'rgba(255,150,40,0)');ctx.fillStyle=hg;ctx.fillRect(0,0,W,H);
  for(let ring=0;ring<3;ring++){ctx.save();ctx.translate(cx,cy);ctx.rotate((ring%2?-1:1)*t*.15+ring);const n=12+ring*4,R=215+ring*42;ctx.strokeStyle=`rgba(255,215,110,${.7-ring*.15})`;ctx.lineWidth=2.5;ctx.shadowColor='#ffb347';ctx.shadowBlur=12;for(let i=0;i<n;i++){ctx.save();ctx.rotate(i/n*TAU);ctx.beginPath();ctx.ellipse(R,0,34-ring*4,12,0,0,TAU);ctx.stroke();ctx.restore()}ctx.restore()}
  ctx.save();ctx.beginPath();ctx.arc(cx,cy,175,0,TAU);ctx.clip();slides(S.photos,t,4,.9).forEach(o=>{ctx.globalAlpha=o.a;cover(ctx,o.img,cx-175,cy-175,350,350,1.1+.1*Math.min(1,o.lt/4),0,-.2)});ctx.globalAlpha=1;ctx.fillStyle='rgba(255,170,60,.18)';ctx.fillRect(0,0,W,H);ctx.restore();
  ctx.save();ctx.strokeStyle='#ffd978';ctx.lineWidth=8;ctx.shadowColor='#ffb347';ctx.shadowBlur=26+8*Math.sin(t*2);ctx.beginPath();ctx.arc(cx,cy,179,0,TAU);ctx.stroke();ctx.restore();
  ctx.fillStyle='#ffe9a0';dsp.forEach(d=>{const y=H-((t*d.sp+d.ph)%(H+40));ctx.globalAlpha=.35+.35*Math.sin(t*3+d.sw);ctx.beginPath();ctx.arc(d.x+Math.sin(t+d.sw)*18,y,d.s,0,TAU);ctx.fill()});ctx.globalAlpha=1;
  for(let i=0;i<5;i++){const x=W/2+(i-2)*100,y=880;ctx.fillStyle='#8a3a10';ctx.beginPath();ctx.ellipse(x,y+8,36,14,0,0,Math.PI);ctx.fill();const fl=1+Math.sin(t*9+i*2)*.12;const fg=ctx.createRadialGradient(x,y-18,2,x,y-18,40);fg.addColorStop(0,'rgba(255,240,150,.95)');fg.addColorStop(1,'rgba(255,150,0,0)');ctx.fillStyle=fg;ctx.fillRect(x-45,y-65,90,90);ctx.fillStyle='#ffd24d';ctx.beginPath();ctx.ellipse(x,y-14,7*fl,18*fl,0,0,TAU);ctx.fill()}
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','italic 800 $px '+SERIF,470,2,64,28);ctx.font=`italic 800 ${f.size}px ${SERIF}`;
  ctx.globalAlpha=easeOut(t/1);f.lines.forEach((l,i)=>{const y=710+i*(f.size+4)+Math.sin(t*1.6)*6;const gg=ctx.createLinearGradient(0,y-30,0,y+30);gg.addColorStop(0,'#fff3c0');gg.addColorStop(1,'#ffb830');ctx.shadowColor='#ff9f1c';ctx.shadowBlur=22;ctx.fillStyle=gg;ctx.fillText(l,W/2,y)});
  ctx.shadowBlur=8;ctx.font=`600 26px ${SANS}`;ctx.fillStyle='#ffe9c0';ctx.fillText(S.text.name||'',W/2,(f.lines.length>1?810:790)+Math.sin(t*1.6+.8)*4);ctx.globalAlpha=1;ctx.shadowBlur=0;
}
