const fg=(()=>{const r=rng(9);return Array.from({length:9},()=>({y:r()*H,r:200+r()*180,sp:10+r()*22,ph:r()*W,a:.12+r()*.12}))})();
return function(ctx,t,S){
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1b2b34');g.addColorStop(1,'#0b141a');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=.9;try{ctx.filter='grayscale(.7) blur(2px) brightness(.8)'}catch(e){}slides(S.photos,t,4.5,1.2).forEach(o=>{ctx.globalAlpha=o.a*.9;cover(ctx,o.img,0,0,W,H,1.1+.06*Math.min(1,o.lt/4.5),Math.sin(o.lt*.3)*.4,0)});ctx.restore();ctx.filter='none';
  ctx.fillStyle='rgba(15,30,40,.4)';ctx.fillRect(0,0,W,H);
  fg.forEach((c,i)=>{const x=((c.ph+t*c.sp*(i%2?-1:1))%(W+600)+W+600)%(W+600)-300;const rg=ctx.createRadialGradient(x,c.y,10,x,c.y,c.r);rg.addColorStop(0,`rgba(210,225,235,${c.a})`);rg.addColorStop(1,'rgba(210,225,235,0)');ctx.fillStyle=rg;ctx.fillRect(x-c.r,c.y-c.r,c.r*2,c.r*2)});
  vignette(ctx,.6);
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','300 $px '+SERIF,430,4,50,24);ctx.font=`300 ${f.size}px ${SERIF}`;ctx.fillStyle='#eaf2f7';ctx.shadowColor='rgba(0,0,0,.8)';ctx.shadowBlur=14;
  f.lines.forEach((l,i)=>{const a=easeOut((t-.5-i*.6)/1.4);ctx.globalAlpha=a*(.85+.15*Math.sin(t+i));ctx.fillText(l,W/2+(1-a)*-30,H*.62+i*(f.size+12))});ctx.globalAlpha=.7;ctx.font=`italic 26px ${SERIF}`;ctx.fillText(S.text.name||'',W/2,H*.9);ctx.globalAlpha=1;ctx.shadowBlur=0;
}
