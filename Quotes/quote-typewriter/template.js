return function(ctx,t,S){
  ctx.fillStyle='#f5ecd9';ctx.fillRect(0,0,W,H);ctx.strokeStyle='rgba(120,90,50,.12)';ctx.lineWidth=1;for(let y=60;y<H;y+=44){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}
  ctx.strokeStyle='rgba(200,60,60,.35)';ctx.beginPath();ctx.moveTo(60,0);ctx.lineTo(60,H);ctx.stroke();
  const px=W/2,py=150;ctx.save();ctx.translate(px,py);ctx.rotate(-.04);ctx.shadowColor='rgba(0,0,0,.3)';ctx.shadowBlur=14;ctx.fillStyle='#fff';ctx.fillRect(-85,-85,170,190);ctx.shadowBlur=0;ctx.beginPath();ctx.rect(-73,-73,146,146);ctx.clip();cover(ctx,S.photos[0],-73,-73,146,146,1.1,0,-.1);ctx.restore();
  ctx.fillStyle='rgba(240,200,90,.8)';ctx.save();ctx.translate(px,py-90);ctx.rotate(.05);ctx.fillRect(-35,-10,70,22);ctx.restore();
  const q=S.text.caption||'';const n=Math.min(q.length,Math.floor(t*16));ctx.textBaseline='alphabetic';ctx.textAlign='left';const f=fit(ctx,q,'700 $px "Courier New",Courier,monospace',400,9,36,20);ctx.font=`700 ${f.size}px "Courier New",Courier,monospace`;
  let used=0,lx=0,ly=0;const lh=f.size*1.45;ctx.fillStyle='#2b2118';f.lines.forEach((l,i)=>{const take=Math.max(0,Math.min(l.length,n-used));ctx.fillText(l.slice(0,take),80,330+i*lh);if(take>0){lx=80+ctx.measureText(l.slice(0,take)).width;ly=330+i*lh}used+=l.length+1});
  if(Math.floor(t*2)%2===0||n<q.length){ctx.fillStyle='#2b2118';ctx.fillRect(lx+3,ly-f.size*.85,f.size*.5,f.size)}
  ctx.textAlign='right';ctx.font=`italic 700 30px ${SERIF}`;ctx.fillStyle='#7c2d12';ctx.globalAlpha=easeOut((t-q.length/16)/.8);ctx.fillText('~ '+(S.text.name||''),W-50,900);ctx.globalAlpha=1;
}
