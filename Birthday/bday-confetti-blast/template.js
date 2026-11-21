const cf=(()=>{const r=rng(88);const cols=['#ff4d6d','#ffd23f','#3bceac','#4cc9f0','#b967ff','#ff9f1c','#fff'];return Array.from({length:110},()=>{const a=-Math.PI/2+(r()-.5)*2.6,v=300+r()*520;return {vx:Math.cos(a)*v,vy:Math.sin(a)*v,w:6+r()*8,h:10+r()*10,c:cols[(r()*cols.length)|0],rot:r()*TAU,rs:3+r()*9}})})();
return function(ctx,t,S){
  ctx.fillStyle='#14082e';ctx.fillRect(0,0,W,H);
  slides(S.photos,t,4,.8).forEach(o=>{ctx.save();ctx.globalAlpha=o.a*.65;cover(ctx,o.img,0,0,W,H,1.04+.1*Math.min(1,o.lt/4),lerp(-.4,.4,Math.min(1,o.lt/4)),0);ctx.restore()});
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'rgba(20,8,46,.3)');g.addColorStop(.6,'rgba(20,8,46,.5)');g.addColorStop(1,'rgba(20,8,46,.9)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const tt=t%4.5;if(tt<.25){ctx.fillStyle=`rgba(255,255,255,${.5*(1-tt/.25)})`;ctx.fillRect(0,0,W,H)}
  cf.forEach(c=>{const x=W/2+c.vx*tt*.55,y=720+c.vy*tt*.9+.5*620*tt*tt;if(y>H+30||tt>4)return;ctx.save();ctx.globalAlpha=clamp(1-(tt-2.8)/1.2);ctx.translate(x,y);ctx.rotate(c.rot+tt*c.rs);ctx.scale(1,Math.abs(Math.cos(tt*c.rs*.8))*.8+.2);ctx.fillStyle=c.c;ctx.fillRect(-c.w/2,-c.h/2,c.w,c.h);ctx.restore()});
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','italic 900 $px '+SERIF,480,2,72,32);ctx.font=`italic 900 ${f.size}px ${SERIF}`;const bounce=1+.04*Math.sin(t*5);const sc=easeOutBack(t/.7)*bounce;ctx.save();ctx.translate(W/2,430);ctx.scale(sc,sc);
  f.lines.forEach((l,i)=>{const y=i*(f.size+6)-(f.lines.length-1)*(f.size+6)/2;const gg=ctx.createLinearGradient(0,y-f.size/2,0,y+f.size/2);gg.addColorStop(0,'#fff6bf');gg.addColorStop(.5,'#ffd23f');gg.addColorStop(1,'#ff8a00');ctx.shadowColor='#000';ctx.shadowBlur=24;ctx.fillStyle=gg;ctx.fillText(l,0,y)});ctx.restore();
  ctx.font=`700 40px ${SANS}`;ctx.fillStyle='#fff';ctx.shadowColor='#ff4fd8';ctx.shadowBlur=18;ctx.globalAlpha=easeOut((t-.7)/.8);ctx.fillText(S.text.name||'',W/2,850+Math.sin(t*2.4)*5);ctx.globalAlpha=1;ctx.shadowBlur=0;
}
