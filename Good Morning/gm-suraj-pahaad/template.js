return function(ctx,t,S){
  const rise=easeOut(t/4.5);const sy=lerp(800,430,rise),cx=W/2;
  let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,lerp1('#1e1b4b','#38bdf8',rise));g.addColorStop(.6,lerp1('#7c2d12','#fde68a',rise));g.addColorStop(1,'#fbbf24');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  function lerp1(a,b,k){const pa=[1,3,5].map(i=>parseInt(a.substr(i,2),16)),pb=[1,3,5].map(i=>parseInt(b.substr(i,2),16));return 'rgb('+pa.map((v,i)=>Math.round(lerp(v,pb[i],k))).join(',')+')'}
  const gl=ctx.createRadialGradient(cx,sy,20,cx,sy,420);gl.addColorStop(0,'rgba(255,240,170,.8)');gl.addColorStop(1,'rgba(255,200,100,0)');ctx.fillStyle=gl;ctx.fillRect(0,0,W,H);
  ctx.save();ctx.beginPath();ctx.arc(cx,sy,115,0,TAU);ctx.clip();cover(ctx,S.photos[0],cx-115,sy-115,230,230,1.15,0,-.1);ctx.restore();ctx.strokeStyle='#fff7c2';ctx.lineWidth=6;ctx.shadowColor='#fbbf24';ctx.shadowBlur=30;ctx.beginPath();ctx.arc(cx,sy,118,0,TAU);ctx.stroke();ctx.shadowBlur=0;
  [['#fb923c',640,70,.25,.07],['#16a34a',720,90,.45,.05],['#166534',810,110,.8,.04]].forEach(([c,y,a,sp,fr],i)=>{ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(0,H);for(let x=0;x<=W;x+=20)ctx.lineTo(x,y-a*(.5+.5*Math.sin(x*fr*.15+i*2+t*sp*.3))-Math.abs(Math.sin(x*.012+i))*a*.6);ctx.lineTo(W,H);ctx.closePath();ctx.fill()});
  ctx.strokeStyle='#1f2937';ctx.lineWidth=2.5;ctx.lineCap='round';for(let i=0;i<4;i++){const x=((t*40+i*180)%(W+120))-60,y=180+i*50+Math.sin(t*2+i)*8,fl=Math.sin(t*9+i)*5;ctx.beginPath();ctx.moveTo(x-14,y-fl);ctx.quadraticCurveTo(x-6,y-8,x,y);ctx.quadraticCurveTo(x+6,y-8,x+14,y-fl);ctx.stroke()}
  ctx.textAlign='center';ctx.textBaseline='middle';const f=fit(ctx,S.text.caption||'','italic 800 $px '+SERIF,470,3,46,24);ctx.font=`italic 800 ${f.size}px ${SERIF}`;ctx.fillStyle='#fff';ctx.shadowColor='rgba(0,0,0,.55)';ctx.shadowBlur=16;
  f.lines.forEach((l,i)=>{const a=easeOut((t-1-i*.4)/1);ctx.globalAlpha=a;ctx.fillText(l,W/2,110+i*(f.size+6)+(1-a)*-18)});ctx.globalAlpha=easeOut((t-2)/1);ctx.font=`700 32px ${SANS}`;ctx.fillStyle='#fffbe6';ctx.fillText(S.text.name||'',W/2,900);ctx.globalAlpha=1;ctx.shadowBlur=0;
}
