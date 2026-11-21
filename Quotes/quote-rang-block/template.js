const pl=[['#ff0a54','#ffd60a'],['#7209b7','#4cc9f0'],['#0077b6','#ffd60a'],['#06d6a0','#ef476f']];
return function(ctx,t,S){
  const k=Math.floor(t/6)%pl.length,p=pl[k];const lt=t%6;ctx.fillStyle=p[0];ctx.fillRect(0,0,W,H);
  [[0,.0,1],[1,.18,-1],[2,.36,1]].forEach(([i,d,dir])=>{const e=easeOut((lt-d)/.9);const w=W*.9*e;ctx.fillStyle=p[1];ctx.globalAlpha=.9-i*.2;const bx=dir>0?0:W-w;ctx.fillRect(bx,60+i*30,w,18)});ctx.globalAlpha=1;
  const cx=W-130,cy=160;ctx.save();ctx.beginPath();ctx.arc(cx,cy,90*easeOutBack(lt/.7),0,TAU);ctx.clip();cover(ctx,S.photos[0],cx-90,cy-90,180,180,1.15,0,-.1);ctx.restore();
  ctx.textAlign='left';ctx.textBaseline='middle';const f=fit(ctx,(S.text.caption||'').toUpperCase(),'900 $px '+SANS,450,8,56,26);ctx.font=`900 ${f.size}px ${SANS}`;const lh=f.size*1.18,y0=520-(f.lines.length-1)*lh/2;
  f.lines.forEach((l,i)=>{const e=easeOut((lt-.5-i*.22)/.7);ctx.save();ctx.beginPath();ctx.rect(45,y0+i*lh-lh/2,(W-70)*e,lh);ctx.clip();ctx.fillStyle=i%2?p[1]:'#fff';ctx.fillText(l,45,y0+i*lh);ctx.restore()});
  ctx.fillStyle=p[1];ctx.fillRect(45,H-130,80*easeOut((lt-1.2)/.6),8);ctx.font=`700 30px ${SANS}`;ctx.fillStyle='#fff';ctx.globalAlpha=easeOut((lt-1.2)/.7);ctx.fillText(S.text.name||'',45,H-85);ctx.globalAlpha=1;
}
