
const q=s=>[...document.querySelectorAll(s)];
new IntersectionObserver((e,o)=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');o.unobserve(x.target)}}),{threshold:.12}).observe&&q('.rv').forEach(el=>{const io=new IntersectionObserver(e=>e[0].isIntersecting&&(el.classList.add('in'),io.disconnect()),{threshold:.12});io.observe(el)});
q('.cnt').forEach(el=>{const t=+el.dataset.t;let c=0;const io=new IntersectionObserver(e=>{if(!e[0].isIntersecting)return;io.disconnect();const s=setInterval(()=>{c+=Math.ceil(t/50);if(c>=t){c=t;clearInterval(s)}el.textContent=c.toLocaleString('de')+(el.dataset.s||'')},30)});io.observe(el)});
const bg=document.querySelector('.bg');bg&&(bg.onclick=()=>document.querySelector('nav').classList.toggle('open'));
const ss=(k,v)=>sessionStorage.setItem(k,JSON.stringify(v)),gs=k=>JSON.parse(sessionStorage.getItem(k)||'{}');
q('[data-go]').forEach(f=>f.onsubmit=e=>{e.preventDefault();ss('b',{...gs('b'),...Object.fromEntries(new FormData(f))});location.href=f.dataset.go});
q('[data-sim]').forEach(f=>f.onsubmit=e=>{e.preventDefault();f.innerHTML='<div style="text-align:center;padding:30px"><div style="font-size:50px">✅</div><h3>Vielen Dank! Ihre Anfrage ist eingegangen.</h3><p>Wir melden uns in Kürze bei Ihnen. (Prototyp-Simulation)</p></div>'});
const fl=q('.fl input');function ap(){const mx=+document.querySelector('#mx').value;document.querySelector('#mv').textContent=mx;const ty=fl.filter(i=>i.dataset.ty&&i.checked).map(i=>i.dataset.ty);let n=0;q('.pl').forEach(p=>{const ok=+p.dataset.p<=mx&&(!ty.length||ty.includes(p.dataset.ty));p.style.display=ok?'':'none';n+=ok});document.querySelector('#cn').textContent=n+' Parkplätze in Kiel'}
fl.length&&(fl.forEach(i=>i.oninput=ap),document.querySelector('#mx').oninput=ap,ap());
const b=gs('b');q('[data-f]').forEach(el=>el.textContent=b[el.dataset.f]||el.dataset.d||'');
if(document.querySelector('#pay'))document.querySelector('#pay').onclick=function(){this.textContent='Zahlung wird verarbeitet …';this.disabled=1;setTimeout(()=>{ss('b',{...gs('b'),nr:'KP-2027-'+(100000+Math.floor(Math.random()*899999))});location.href='bestaetigung.html'},1600)};

const pg=document.createElement('div');pg.id='pg';document.body.append(pg);const up=document.createElement('button');up.id='up';up.textContent='↑';up.onclick=()=>scrollTo({top:0,behavior:'smooth'});document.body.append(up);
addEventListener('scroll',()=>{pg.style.width=scrollY/(document.body.scrollHeight-innerHeight)*100+'%';up.classList.toggle('s',scrollY>500)});

(()=>{const f=location.pathname.split('/').pop()||'index.html',t=/^kiel-(aida|mein-schiff|msc)/.test(f)?'kiel-aida.html':/^(kiel|parkplatz|valet|buchung|zahlung|bestaetigung)/.test(f)?'kiel.html':f;let d=0;q('.h nav a').forEach(a=>{if(!d&&a.getAttribute('href').split('#')[0]===t){a.classList.add('on');a.setAttribute('aria-current','page');d=1}});
if(f!=='index.html'&&f!==''){const b=document.createElement('div');b.className='bc';b.innerHTML='Du bist hier: <a href="index.html">Startseite</a> &nbsp;›&nbsp; <b>'+document.title.split(' |')[0]+'</b>';document.querySelector('.h').after(b)}
const p=document.querySelector('.pre');if(p)setTimeout(()=>{p.classList.add('out');document.documentElement.classList.remove('ld')},1700);
const ty=document.querySelector('#ty');if(ty){const w=['Kiel','Hamburg','Warnemünde','Bremerhaven'];let k=0;setInterval(()=>{ty.style.opacity=0;setTimeout(()=>{ty.textContent=w[++k%4];ty.style.opacity=1},350)},2400)}
const st=q('.stp');if(st.length){let i=0;const sh=()=>{st.forEach((s,k)=>s.hidden=k!=i);q('.sb span').forEach((s,k)=>s.classList.toggle('on',k<=i));document.querySelector('.pb div').style.width=(i+1)/st.length*100+'%'};q('[data-n]').forEach(b=>b.onclick=()=>{if(+b.dataset.n>0&&![...st[i].querySelectorAll('[required]')].every(x=>x.reportValidity()))return;i+=+b.dataset.n;sh();scrollTo({top:0,behavior:'smooth'})});sh()}})();

(()=>{const m=q('.tm');if(m.length){let i=0;m[0].classList.add('on');setInterval(()=>{m[i].classList.replace('on','out');const o=m[i];setTimeout(()=>o.classList.remove('out'),650);i=(i+1)%m.length;m[i].classList.add('on')},3200)}})();
