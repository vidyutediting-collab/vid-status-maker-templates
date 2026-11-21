const fl=(()=>{const r=rng(55);return Array.from({length:32},()=>({x:r()*W,sp:50+r()*80,ph:r()*H,s:7+r()*9,sw:r()*TAU,rs:1+r()*3,c:['#f59e0b','#f97316','#fbbf24','#ea580c'][(r()*4)|0]}))})();
return function(ctx,t,S){
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#7f1d1d');g.addColorStop(1,'#431407');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.save();ctx.translate(W/2,-40);ctx.rotate(Math.sin(t*.3)*.15);for(let i=0;i<14;i++){ctx.rotate(Math.PI/14*(i?1:0)+0);ctx.fillStyle=`rgba(255,210,100,${.1+.05*Math.sin(t*2+i)})`;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(-45,1100);ctx.lineTo(45,1100);ctx.closePath();ctx.fill()}ctx.restore();
  const cx=W/2,cy=390;ctx.save();ctx.shadowColor='#fbbf24';ctx.shadowBlur=34;ctx.fillStyle='#fbbf24';rr(ctx,cx-200,cy-250,400,500,30);ctx.fill();ctx.restore();
  ctx.save();rr(ctx,cx-188,cy-238,376,476,22);ctx.clip();slides(S.photos,t,3.5,.8).forEach(o=>{ctx.globalAlpha=o.a;cover(ctx,o.img,cx-188,cy-238,376,476,1.06+.1*Math.min(1,o.lt/3.5),Math.sin(o.lt*.5)*.3,0)});ctx.globalAlpha=1;ctx.restore();
  ctx.strokeStyle='#fff3c4';ctx.lineWidth=3;ctx.setLineDash([6,10]);ctx.lineDashOffset=-t*20;rr(ctx,cx-212,cy-262,424,524,36);ctx.stroke();ctx.setLineDash([]);
  fl.forEach(p=>{const y=((t*p.sp+p.ph)%(H+60))-30;ctx.save();ctx.translate(p.x+Math.sin(t+p.sw)*26,y);ctx.rotate(t*p.rs*.4+p.sw);ctx.scale(1,Math.abs(Math.cos(t*p.rs+p.sw))*.6+.4);ctx.fillStyle=p.c;ctx.globalAlpha=.9;ctx.beginPath();ctx.ellipse(0,0,p.s,p.s*.7,0,0,TAU);ctx.fill();ctx.restore()});
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','italic 900 $px '+SERIF,470,2,66,28);ctx.font=`italic 900 ${f.size}px ${SERIF}`;
  const sc=easeOutBack(t/.9);ctx.save();ctx.translate(W/2,775);ctx.scale(sc,sc);f.lines.forEach((l,i)=>{const y=i*(f.size+4);const gg=ctx.createLinearGradient(0,y-30,0,y+30);gg.addColorStop(0,'#fffbe0');gg.addColorStop(1,'#fbbf24');ctx.shadowColor='#f59e0b';ctx.shadowBlur=24;ctx.fillStyle=gg;ctx.fillText(l,0,y)});ctx.restore();
  ctx.font=`600 28px ${SANS}`;ctx.fillStyle='#ffedd5';ctx.globalAlpha=easeOut((t-.6)/.8);ctx.fillText(S.text.name||'',W/2,880);ctx.globalAlpha=1;ctx.shadowBlur=0;
}
