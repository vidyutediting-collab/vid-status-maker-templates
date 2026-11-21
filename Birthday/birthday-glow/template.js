const conf=(()=>{const r=rng(21);const cols=['#ff4d6d','#ffd23f','#3bceac','#4cc9f0','#b967ff','#ff9f1c','#fff'];return Array.from({length:80},()=>({x:r()*W,sp:70+r()*130,ph:r()*H,w:6+r()*8,h:10+r()*10,c:cols[(r()*cols.length)|0],rot:r()*TAU,rs:2+r()*6,sw:r()*TAU,sa:10+r()*30}))})();
return function(ctx,t,S){
  ctx.fillStyle='#1a0a2e';ctx.fillRect(0,0,W,H);
  slides(S.photos,t,4,.8).forEach(o=>{ctx.save();ctx.globalAlpha=o.a;cover(ctx,o.img,0,0,W,H,1.04+.16*Math.min(1,o.lt/4),lerp(-.5,.5,Math.min(1,o.lt/4)),0);ctx.restore()});
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'rgba(60,0,100,.55)');g.addColorStop(.35,'rgba(0,0,0,0)');g.addColorStop(.62,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(30,0,60,.9)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const gl=ctx.createRadialGradient(W/2,H*.78,10,W/2,H*.78,380);gl.addColorStop(0,`rgba(255,200,80,${.3+.12*Math.sin(t*3)})`);gl.addColorStop(1,'rgba(255,120,200,0)');ctx.fillStyle=gl;ctx.fillRect(0,300,W,H-300);
  conf.forEach(c=>{const y=((t*c.sp+c.ph)%(H+60))-30;const x=c.x+Math.sin(t*1.5+c.sw)*c.sa;ctx.save();ctx.translate(x,y);ctx.rotate(c.rot+t*c.rs);ctx.scale(1,Math.abs(Math.cos(t*c.rs*.7+c.sw))*.8+.2);ctx.fillStyle=c.c;ctx.fillRect(-c.w/2,-c.h/2,c.w,c.h);ctx.restore()});
  const balloons=[['#ff5d8f',80,0],['#ffd23f',460,1.7],['#4cc9f0',270,3.1]];
  balloons.forEach(([c,x,ph])=>{const y=H+120-(((t*55+ph*200)%(H+320)));ctx.save();ctx.translate(x+Math.sin(t*1.3+ph)*20,y);ctx.fillStyle=c;ctx.shadowColor=c;ctx.shadowBlur=18;ctx.beginPath();ctx.ellipse(0,0,34,44,0,0,TAU);ctx.fill();ctx.shadowBlur=0;ctx.fillStyle='rgba(255,255,255,.35)';ctx.beginPath();ctx.ellipse(-11,-14,8,13,.5,0,TAU);ctx.fill();ctx.strokeStyle='rgba(255,255,255,.6)';ctx.beginPath();ctx.moveTo(0,44);ctx.quadraticCurveTo(10,70,0,100);ctx.stroke();ctx.restore()});
  ctx.textAlign='center';ctx.textBaseline='middle';
  const sc=easeOutBack(t/.9);ctx.save();ctx.translate(W/2,760);ctx.scale(sc,sc);
  const tt=S.text.caption||'';const f=fit(ctx,tt,'italic 900 $px '+SERIF,480,2,64,30);
  f.lines.forEach((l,i)=>{ctx.font=`italic 900 ${f.size}px ${SERIF}`;const y=i*(f.size+4)-(f.lines.length-1)*(f.size+4)/2;const gg=ctx.createLinearGradient(0,y-f.size/2,0,y+f.size/2);gg.addColorStop(0,'#fff6bf');gg.addColorStop(.5,'#ffd23f');gg.addColorStop(1,'#ff9f1c');ctx.shadowColor='#ff9f1c';ctx.shadowBlur=24+8*Math.sin(t*4);ctx.fillStyle=gg;ctx.fillText(l,0,y);ctx.shadowBlur=0;ctx.lineWidth=2;ctx.strokeStyle='rgba(120,40,0,.55)';ctx.strokeText(l,0,y)});
  ctx.restore();
  ctx.font=`700 30px ${SANS}`;ctx.fillStyle='#fff';ctx.shadowColor='#ff4fd8';ctx.shadowBlur=14;ctx.globalAlpha=easeOut((t-.6)/.8);ctx.fillText('\u2728 '+(S.text.name||'')+' \u2728',W/2,865+Math.sin(t*2.2)*5);ctx.globalAlpha=1;ctx.shadowBlur=0;
  ctx.strokeStyle='rgba(255,215,90,.85)';ctx.lineWidth=5;ctx.shadowColor='#ffd23f';ctx.shadowBlur=14;rr(ctx,10,10,W-20,H-20,26);ctx.stroke();ctx.shadowBlur=0;
}
