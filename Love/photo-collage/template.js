return function(ctx,t,S){
  const g=ctx.createLinearGradient(0,0,W,H);g.addColorStop(0,'#ffd6ec');g.addColorStop(.5,'#d8c6ff');g.addColorStop(1,'#b7e4ff');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='rgba(255,255,255,.35)';for(let i=0;i<40;i++){const x=(i*97)%W,y=((i*211)+t*20*(1+i%3))%H;ctx.beginPath();ctx.arc(x,y,3+(i%4)*2,0,TAU);ctx.fill()}
  const cards=[{x:W/2-70,y:292,r:-.12,w:290,h:310,d:0},{x:W/2+80,y:532,r:.1,w:280,h:300,d:.35},{x:W/2-50,y:756,r:-.06,w:270,h:270,d:.7}];
  cards.forEach((c,i)=>{const p=easeOutBack((t-c.d)/.7);if(p<=0)return;ctx.save();ctx.translate(c.x,c.y);ctx.rotate(c.r+Math.sin(t*1.1+i*2)*.025);const sc=lerp(.2,1,p);ctx.scale(sc,sc);ctx.shadowColor='rgba(60,20,120,.4)';ctx.shadowBlur=24;ctx.shadowOffsetY=10;ctx.fillStyle='#fff';rr(ctx,-c.w/2,-c.h/2,c.w,c.h,12);ctx.fill();ctx.shadowColor='transparent';ctx.save();rr(ctx,-c.w/2+14,-c.h/2+14,c.w-28,c.h-60,6);ctx.clip();cover(ctx,S.photos[i%S.photos.length],-c.w/2+14,-c.h/2+14,c.w-28,c.h-60,1.05+.05*Math.sin(t+i),Math.sin(t*.6+i)*.3,0);ctx.restore();
    ctx.fillStyle='rgba(255,210,90,.8)';ctx.save();ctx.translate(0,-c.h/2+2);ctx.rotate(.05);ctx.fillRect(-36,-12,72,24);ctx.restore();
    ctx.fillStyle='#a22be0';ctx.font=`700 22px ${SERIF}`;ctx.textAlign='center';ctx.fillText(['\u2665','\u2605','\u273F'][i],0,c.h/2-18);ctx.restore()});
  const f=fit(ctx,S.text.caption||'','italic 800 $px '+SERIF,400,2,44,24);ctx.font=`italic 800 ${f.size}px ${SERIF}`;ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.save();ctx.globalAlpha=easeOut((t-1)/.8);f.lines.forEach((l,i)=>{ctx.fillStyle='#fff';ctx.shadowColor='rgba(120,30,200,.7)';ctx.shadowBlur=14;ctx.fillText(l,W/2,58+i*(f.size+6)+Math.sin(t*2)*4)});ctx.restore();
  ctx.fillStyle='#ff4f9a';ctx.font='36px '+SANS;ctx.textAlign='center';ctx.fillText('\u2665',W/2+Math.sin(t*1.3)*150,920);
}
