const fw=(()=>{const r=rng(24);const cs=['#ff6b9d','#ffd166','#ff9f6b','#c77dff','#fff'];return Array.from({length:7},(_,i)=>({x:40+i*76+r()*10,h:40+r()*60,c:cs[i%5],ph:r()*TAU,sz:24+r()*14}))})();
return function(ctx,t,S){
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#d9f99d');g.addColorStop(1,'#86efac');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='rgba(255,255,255,.35)';for(let i=0;i<8;i++){ctx.beginPath();ctx.arc((i*97+t*12)%(W+80)-40,60+(i*131)%500,30+(i%3)*14,0,TAU);ctx.fill()}
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','italic 800 $px '+SERIF,470,3,52,24);ctx.font=`italic 800 ${f.size}px ${SERIF}`;ctx.fillStyle='#14532d';
  f.lines.forEach((l,i)=>{const a=easeOut((t-i*.3)/1);ctx.globalAlpha=a;ctx.fillText(l,W/2,100+i*(f.size+6)+(1-a)*-20)});ctx.globalAlpha=1;
  const px=W/2-185,py=250,pw=370,ph=420;ctx.save();ctx.shadowColor='rgba(20,83,45,.4)';ctx.shadowBlur=24;ctx.fillStyle='#fff';rr(ctx,px-10,py-10,pw+20,ph+20,26);ctx.fill();ctx.restore();ctx.save();rr(ctx,px,py,pw,ph,18);ctx.clip();slides(S.photos,t,3.5,.8).forEach(o=>{ctx.globalAlpha=o.a;cover(ctx,o.img,px,py,pw,ph,1.05+.1*Math.min(1,o.lt/3.5),Math.sin(o.lt*.5)*.3,0)});ctx.restore();ctx.globalAlpha=1;
  fw.forEach(p=>{const sw=Math.sin(t*1.3+p.ph)*16;const bx=p.x,by=H;const tx=bx+sw,ty=H-p.h-120;ctx.strokeStyle='#15803d';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(bx,by);ctx.quadraticCurveTo(bx+sw*.2,(by+ty)/2,tx,ty);ctx.stroke();
    ctx.save();ctx.translate(tx,ty);ctx.rotate(sw*.01+t*.2);ctx.fillStyle=p.c;for(let k=0;k<6;k++){ctx.rotate(TAU/6);ctx.beginPath();ctx.ellipse(p.sz*.8,0,p.sz*.8,p.sz*.45,0,0,TAU);ctx.fill()}ctx.fillStyle='#f59e0b';ctx.beginPath();ctx.arc(0,0,p.sz*.4,0,TAU);ctx.fill();ctx.restore()});
  ctx.font=`700 32px ${SANS}`;ctx.fillStyle='#14532d';ctx.fillText('🌼 '+(S.text.name||'')+' 🌼',W/2,705+Math.sin(t*2)*3);
}
