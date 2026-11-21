return function(ctx,t,S){
  ctx.fillStyle='#0b0620';ctx.fillRect(0,0,W,H);
  slides(S.photos,t,4,1).forEach(o=>{ctx.save();ctx.globalAlpha=o.a*.55;cover(ctx,o.img,0,0,W,H,1.08+.08*Math.min(1,o.lt/4),Math.sin(o.lt*.4)*.3,0);ctx.restore()});
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'rgba(40,10,110,.75)');g.addColorStop(.5,'rgba(10,5,40,.55)');g.addColorStop(1,'rgba(90,10,120,.85)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const n=24,bw=W/n;for(let i=0;i<n;i++){const v=.5+.5*Math.sin(t*3.1+i*.7)*Math.sin(t*1.7+i*.31);const h=30+v*190;const c=`hsl(${280+i*3+Math.sin(t)*20},95%,${60+v*10}%)`;ctx.fillStyle=c;ctx.shadowColor=c;ctx.shadowBlur=12;rr(ctx,i*bw+4,H-70-h,bw-8,h,5);ctx.fill()}ctx.shadowBlur=0;
  ctx.textAlign='left';ctx.textBaseline='middle';const q=S.text.caption||'';const f=fit(ctx,q,'800 $px '+SANS,450,6,50,24);ctx.font=`800 ${f.size}px ${SANS}`;
  const total=q.split(/\s+/).filter(Boolean).length||1;const cur=Math.floor(t*2.4)%(total+3);const lh=f.size*1.35,y0=380-(f.lines.length-1)*lh/2;let wc=0;
  f.lines.forEach((l,i)=>{let x=W/2-ctx.measureText(l).width/2;l.split(' ').forEach(w=>{const on=wc<cur;ctx.fillStyle=on?'#ffe14d':'rgba(255,255,255,.55)';ctx.shadowColor=on?'#ff9f1c':'transparent';ctx.shadowBlur=on?16:0;ctx.fillText(w,x,y0+i*lh);x+=ctx.measureText(w+' ').width;wc++})});ctx.shadowBlur=0;
  ctx.textAlign='center';ctx.font=`600 26px ${SANS}`;ctx.fillStyle='#e9d5ff';ctx.fillText('♪ '+(S.text.name||'')+' ♪',W/2,H-30);
}
