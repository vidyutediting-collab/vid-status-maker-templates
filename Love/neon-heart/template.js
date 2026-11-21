const sparkP=(()=>{const r=rng(11);return Array.from({length:46},()=>({a:r()*TAU,d:.85+r()*.55,s:3+r()*7,ph:r()*TAU,sp:1.5+r()*2.5}))})();
const floatH=(()=>{const r=rng(5);return Array.from({length:14},()=>({x:r()*W,sp:30+r()*60,ph:r()*H,s:8+r()*16,sw:r()*TAU}))})();
return function(ctx,t,S){
  const bg=ctx.createRadialGradient(W/2,420,60,W/2,420,720);bg.addColorStop(0,'#4a0f6e');bg.addColorStop(.6,'#1d0538');bg.addColorStop(1,'#0a0118');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#ff9ff0';floatH.forEach(h=>{const y=H+30-((t*h.sp+h.ph)%(H+60));ctx.save();ctx.globalAlpha=.25+.2*Math.sin(t*2+h.sw);heartPath(ctx,h.x+Math.sin(t+h.sw)*14,y,h.s/32);ctx.fill();ctx.restore()});
  const pulse=1+Math.sin(t*3)*.025;const cx=W/2,cy=395,s=14.2*pulse;
  ctx.save();heartPath(ctx,cx,cy,s);ctx.clip();
  slides(S.photos,t).forEach(o=>{ctx.globalAlpha=o.a;cover(ctx,o.img,cx-260,cy-240,520,480,1.05+.12*Math.min(1,o.lt/3),Math.sin(o.lt*.5)*.4,0)});ctx.globalAlpha=1;ctx.restore();
  const hue=330+Math.sin(t*1.2)*30;const col=`hsl(${hue},100%,62%)`;
  ctx.save();ctx.lineJoin='round';
  [[34,.25,16],[18,.5,10],[8,.9,6]].forEach(([blur,al,lw])=>{ctx.shadowColor=col;ctx.shadowBlur=blur*(1+.2*Math.sin(t*4));ctx.strokeStyle=col;ctx.globalAlpha=al;ctx.lineWidth=lw;heartPath(ctx,cx,cy,s);ctx.stroke()});
  ctx.globalAlpha=1;ctx.shadowBlur=14;ctx.shadowColor='#fff';ctx.strokeStyle='#fff';ctx.lineWidth=2.5;heartPath(ctx,cx,cy,s);ctx.stroke();
  ctx.shadowColor='#7be0ff';ctx.shadowBlur=22;ctx.strokeStyle='rgba(120,220,255,.75)';ctx.lineWidth=3;heartPath(ctx,cx,cy-4,s*1.12);ctx.stroke();ctx.restore();
  ctx.save();ctx.fillStyle='#fff';ctx.shadowColor='#ff7be8';ctx.shadowBlur=14;
  sparkP.forEach(p=>{const tw=.5+.5*Math.sin(t*p.sp+p.ph);const a=p.a+Math.sin(t*.4+p.ph)*.08;const hx=16*Math.pow(Math.sin(a),3),hy=-(13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a));star(ctx,cx+hx*s*p.d,cy+hy*s*p.d,p.s*tw+1,tw)});ctx.restore();
  const cap=S.text.caption||'';const f=fit(ctx,cap,'italic 700 $px '+SERIF,470,2,52,26);ctx.font=f.size?`italic 700 ${f.size}px ${SERIF}`:ctx.font;ctx.textAlign='center';ctx.textBaseline='middle';
  const bob=Math.sin(t*2)*8;const ap=easeOut(t/1.2);f.lines.forEach((l,i)=>{ctx.save();ctx.globalAlpha=ap;glowText(ctx,l,W/2,790+bob+i*(f.size+8),'#ff4fd8',20,'#fff');ctx.restore()});
}
