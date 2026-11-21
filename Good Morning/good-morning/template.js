const dust=(()=>{const r=rng(31);return Array.from({length:30},()=>({x:r()*W,y:r()*H,s:2+r()*4,sp:10+r()*25,ph:r()*TAU}))})();
return function(ctx,t,S){
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#ff7e5f');g.addColorStop(.45,'#feb47b');g.addColorStop(1,'#ffe9a8');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const sx=W/2,sy=760;ctx.save();ctx.translate(sx,sy);ctx.rotate(t*.12);
  for(let i=0;i<18;i++){ctx.rotate(TAU/18);ctx.fillStyle=`rgba(255,255,220,${.13+.06*Math.sin(t*2+i)})`;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(-34,-900);ctx.lineTo(34,-900);ctx.closePath();ctx.fill()}ctx.restore();
  const sg=ctx.createRadialGradient(sx,sy,10,sx,sy,330);sg.addColorStop(0,'rgba(255,255,230,.95)');sg.addColorStop(.25,'rgba(255,225,120,.6)');sg.addColorStop(1,'rgba(255,200,100,0)');ctx.fillStyle=sg;ctx.fillRect(0,350,W,610);
  [[.0,140,.7],[.5,330,.5],[.25,560,.6]].forEach(([ph,y,a])=>{const x=((t*18+ph*700)%(W+400))-200;ctx.fillStyle=`rgba(255,255,255,${a*.55})`;[[0,0,70,26],[-46,8,50,20],[50,10,56,22]].forEach(([dx,dy,rx,ry])=>{ctx.beginPath();ctx.ellipse(x+dx,y+dy,rx,ry,0,0,TAU);ctx.fill()})});
  const ax=W/2-190,ay=170,aw=380,ah=500;
  ctx.save();ctx.shadowColor='rgba(120,40,0,.45)';ctx.shadowBlur=30;ctx.fillStyle='#fff';ctx.beginPath();ctx.moveTo(ax-10,ay+ah+10);ctx.lineTo(ax-10,ay+aw/2);ctx.arc(W/2,ay+aw/2,aw/2+10,Math.PI,0);ctx.lineTo(ax+aw+10,ay+ah+10);ctx.closePath();ctx.fill();ctx.restore();
  ctx.save();ctx.beginPath();ctx.moveTo(ax,ay+ah);ctx.lineTo(ax,ay+aw/2);ctx.arc(W/2,ay+aw/2,aw/2,Math.PI,0);ctx.lineTo(ax+aw,ay+ah);ctx.closePath();ctx.clip();
  slides(S.photos,t,3.5,.8).forEach(o=>{ctx.globalAlpha=o.a;cover(ctx,o.img,ax,ay,aw,ah,1.05+.12*Math.min(1,o.lt/3.5),0,-.3)});ctx.globalAlpha=1;
  const wg=ctx.createLinearGradient(0,ay,0,ay+ah);wg.addColorStop(0,'rgba(255,220,150,.25)');wg.addColorStop(1,'rgba(255,140,90,.2)');ctx.fillStyle=wg;ctx.fillRect(ax,ay,aw,ah);ctx.restore();
  ctx.fillStyle='#fff';dust.forEach(d=>{ctx.globalAlpha=.4+.4*Math.sin(t*2+d.ph);const y=(d.y-t*d.sp+H*3)%H;ctx.beginPath();ctx.arc(d.x+Math.sin(t+d.ph)*20,y,d.s,0,TAU);ctx.fill()});ctx.globalAlpha=1;
  ctx.textAlign='center';ctx.textBaseline='middle';
  const f=fit(ctx,S.text.caption||'','italic 800 $px '+SERIF,480,2,64,30);ctx.font=`italic 800 ${f.size}px ${SERIF}`;
  const bob=Math.sin(t*1.8)*8,ap=easeOut(t/1);ctx.globalAlpha=ap;
  f.lines.forEach((l,i)=>{ctx.shadowColor='rgba(150,50,0,.6)';ctx.shadowBlur=16;ctx.fillStyle='#fff';ctx.fillText(l,W/2,95+bob+i*(f.size+4))});ctx.shadowBlur=0;
  ctx.font=`600 28px ${SANS}`;ctx.fillStyle='#fffbe8';ctx.shadowColor='rgba(150,50,0,.6)';ctx.shadowBlur=10;ctx.fillText(S.text.name||'',W/2,800+Math.sin(t*1.8+1)*6);ctx.globalAlpha=1;ctx.shadowBlur=0;
  ctx.font='64px '+SANS;ctx.fillText('\u2600\uFE0F',W/2+Math.sin(t)*10,880);
}
