const hr=(()=>{const r=rng(123);return Array.from({length:34},()=>({x:r()*W,sp:60+r()*120,ph:r()*H,s:10+r()*30,sw:r()*TAU,c:['#ff4d8d','#ff7aa8','#ffc2d9','#fff'][(r()*4)|0]}))})();
return function(ctx,t,S){
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#ff5c8a');g.addColorStop(.5,'#c2185b');g.addColorStop(1,'#4a0a36');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  hr.forEach((h,i)=>{const y=((t*h.sp+h.ph)%(H+100))-50;ctx.save();ctx.globalAlpha=i%3?.45:.8;ctx.fillStyle=h.c;ctx.shadowColor=h.c;ctx.shadowBlur=14;ctx.translate(h.x+Math.sin(t*1.2+h.sw)*24,y);ctx.rotate(Math.sin(t+h.sw)*.4);heartPath(ctx,0,0,h.s/32);ctx.fill();ctx.restore()});
  const cx=W/2,cy=420;ctx.save();ctx.translate(cx,cy);ctx.rotate(-.06+Math.sin(t*.9)*.03);ctx.shadowColor='#ff4fd8';ctx.shadowBlur=40;ctx.fillStyle='#fff';rr(ctx,-210,-290,420,580,26);ctx.fill();ctx.shadowBlur=0;ctx.save();rr(ctx,-192,-272,384,470,14);ctx.clip();
  slides(S.photos,t,3.5,.8).forEach(o=>{ctx.globalAlpha=o.a;cover(ctx,o.img,-192,-272,384,470,1.05+.12*Math.min(1,o.lt/3.5),Math.sin(o.lt*.5)*.3,0)});ctx.globalAlpha=1;ctx.restore();
  const full=S.text.caption||'';const n=Math.min(full.length,Math.floor(t*9));const f=fit(ctx,full,'italic 700 $px '+SERIF,370,1,44,22);ctx.font=`italic 700 ${f.size}px ${SERIF}`;ctx.fillStyle='#b0124d';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(full.slice(0,n),0,236);ctx.restore();
  ctx.fillStyle='#fff';ctx.save();ctx.shadowColor='#fff';ctx.shadowBlur=14;for(let i=0;i<16;i++){const a=i*.9+t*.4;star(ctx,cx+Math.cos(a)*(250+(i%3)*10),cy+Math.sin(a*1.3)*(330),4+(i%3)*2,.5+.5*Math.sin(t*3+i))}ctx.restore();
  ctx.textAlign='center';ctx.font=`italic 800 46px ${SERIF}`;ctx.fillStyle='#fff';ctx.shadowColor='#ff2f87';ctx.shadowBlur=22;ctx.fillText('\u2665 '+(S.text.name||'')+' \u2665',W/2,H-70+Math.sin(t*2)*5);ctx.shadowBlur=0;
}
