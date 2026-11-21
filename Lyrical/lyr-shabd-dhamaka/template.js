const pal=[['#ff0a54','#fff'],['#ffd60a','#14213d'],['#00b4d8','#fff'],['#7209b7','#ffe14d'],['#06d6a0','#073b4c']];
return function(ctx,t,S){
  const words=(S.text.caption||'').split(/\s+/).filter(Boolean);const n=words.length||1;const D=.65;const k=Math.floor(t/D),lt=t-k*D,i=k%n;const p=pal[k%pal.length];
  ctx.fillStyle=p[0];ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=.22;cover(ctx,S.photos[0],0,0,W,H,1.1+.05*Math.sin(t),0,0);ctx.restore();
  ctx.fillStyle='rgba(255,255,255,.12)';for(let j=0;j<8;j++){const a=j/8*TAU+t*.6;ctx.beginPath();ctx.moveTo(W/2,H/2);ctx.arc(W/2,H/2,900,a,a+.2);ctx.closePath();ctx.fill()}
  ctx.textAlign='center';ctx.textBaseline='middle';const w=(words[i]||'').toUpperCase();const f=fit(ctx,w,'900 $px '+SANS,W-70,1,170,40);const sc=easeOutBack(lt/.22);
  ctx.save();ctx.translate(W/2,H/2-20);ctx.rotate(((k%3)-1)*.06);ctx.scale(sc,sc);ctx.font=`900 ${f.size}px ${SANS}`;ctx.fillStyle='rgba(0,0,0,.35)';ctx.fillText(w,6,8);ctx.fillStyle=p[1];ctx.fillText(w,0,0);ctx.restore();
  ctx.font=`700 28px ${SANS}`;ctx.fillStyle=p[1];ctx.globalAlpha=.85;for(let j=1;j<=3;j++){const pw=words[(i-j+n*3)%n];if(n>1&&pw)ctx.fillText(pw,W/2,H/2-150-j*44)}ctx.globalAlpha=1;
  ctx.font=`800 28px ${SANS}`;ctx.fillStyle=p[1];ctx.fillText('♪ '+(S.text.name||'')+' ♪',W/2,H-70);
  ctx.fillStyle=p[1];ctx.fillRect(0,H-14,W*((t%(D*n))/(D*n)),8);
}
