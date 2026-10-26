/* ---------- Procedural placeholder imagery ---------- */
let uid=0;
const R=s=>{let x=s>>>0;return()=>{x=(x*1664525+1013904223)>>>0;return x/4294967296}};
function art(p,i,gen){
  if(!gen&&p.images&&p.images.length)return `<img data-fb="${p.id}:${i}" data-src="${encodeURI(p.images[i%p.images.length])}" alt="${p.title}, vue ${i%p.images.length+1}" loading="lazy" fetchpriority="low" decoding="async" draggable="false" style="width:100%;height:100%;object-fit:cover;display:block">`;
  const id='a'+(++uid),r=R(p.seed*31+i*7+3),[T,B,SUN,go]=p.skies[i%p.skies.length],h=p.hue;
  const L=`hsl(${h} 20% 80%)`,D=`hsl(${h} 24% 32%)`,M=`hsl(${h} 18% 56%)`,G=`hsl(${h} 16% 18%)`,W='#ffd58a';
  const vb=[[0,0,400,400],[60,100,260,260],[140,50,230,230],[0,130,280,280]][i%4];
  let o='',refl=true;
  switch(p.type){
    case 'terraces':
      for(let k=0;k<7;k++){const x=22+k*52,hh=46+k*36;
        o+=`<rect x="${x}" y="${330-hh}" width="56" height="${hh}" fill="${k%2?L:M}"/><rect x="${x}" y="${330-hh}" width="56" height="5" fill="${D}"/>`;
        for(let j=0;j<Math.floor((hh-14)/16);j++)o+=`<rect x="${x+6}" y="${340-hh+j*16}" width="44" height="3" fill="${W}" opacity="${go}"/>`;}
      break;
    case 'arches':
      o+=`<rect x="26" y="226" width="348" height="104" fill="${L}"/><rect x="26" y="150" width="348" height="76" fill="${M}"/><rect x="18" y="140" width="364" height="12" fill="${D}"/>`;
      for(let k=0;k<8;k++){const x=40+k*42;
        o+=`<path d="M${x} 330v-52a16 16 0 0 1 32 0v52z" fill="${D}"/><rect x="${x+6}" y="300" width="20" height="30" fill="${W}" opacity="${go*.7}"/><path d="M${x+4} 226v-36a12 12 0 0 1 24 0v36z" fill="${G}"/>`;}
      break;
    case 'blocks':
      [120,200,90,240,150,110].forEach((hh,k)=>{const x=14+k*62;
        o+=`<rect x="${x}" y="${330-hh}" width="58" height="${hh}" fill="${k%2?L:M}"/><rect x="${x}" y="${330-hh}" width="58" height="4" fill="${D}"/>`;
        for(let y=330-hh+14;y<318;y+=18)for(let c=0;c<3;c++)o+=`<rect x="${x+8+c*17}" y="${y}" width="9" height="10" fill="${W}" opacity="${(go*(r()>.35?1:.3)).toFixed(2)}"/>`;});
      break;
    case 'fold':
      for(let k=0;k<5;k++){const x=30+k*68;
        o+=`<rect x="${x}" y="250" width="68" height="80" fill="${M}"/><path d="M${x-4} 252L${x+34} 184V252z" fill="${L}"/><path d="M${x+34} 184L${x+72} 252H${x+34}z" fill="${D}"/><rect x="${x+14}" y="272" width="40" height="58" fill="${G}"/><rect x="${x+18}" y="276" width="14" height="54" fill="${W}" opacity="${go}"/>`;}
      break;
    case 'contours':
      refl=false;
      for(let k=0;k<10;k++)o+=`<ellipse cx="200" cy="300" rx="${24+k*18}" ry="${6+k*5}" fill="none" stroke="${k%3?M:L}" stroke-width="1.4" opacity=".85"/>`;
      o+=`<path d="M30 385C140 345 250 335 372 296" stroke="${W}" stroke-width="3" fill="none" opacity="${(.45+go*.4).toFixed(2)}"/>`;
      for(let k=0;k<16;k++)o+=`<circle cx="${30+r()*340}" cy="${335+r()*50}" r="${4+r()*5}" fill="${D}"/>`;
      break;
    case 'grid':
      refl=false;
      for(let k=-4;k<=12;k++)o+=`<line x1="200" y1="330" x2="${k*50}" y2="400" stroke="${L}" stroke-opacity=".25"/>`;
      for(let k=0;k<14;k++){const x=16+k*27,hh=70+Math.floor(r()*170),w=14+Math.floor(r()*8);
        o+=`<rect x="${x}" y="${330-hh}" width="${w}" height="${hh}" fill="${k%2?L:M}"/><rect x="${x}" y="${330-hh}" width="${w}" height="3" fill="${D}"/><rect x="${x+3}" y="${340-hh}" width="2" height="${hh-14}" fill="${W}" opacity="${(go*.6).toFixed(2)}"/>`;}
      break;
    default:
      refl=false;
      o+=`<ellipse cx="200" cy="334" rx="90" ry="10" fill="${G}" opacity=".5"/><rect x="196" y="180" width="8" height="154" fill="${D}"/><path d="M120 190a80 80 0 0 1 160 0z" fill="${L}"/><path d="M200 110a80 80 0 0 1 80 80h-80z" fill="${M}"/><ellipse cx="200" cy="190" rx="80" ry="8" fill="${W}" opacity="${(.5+go*.5).toFixed(2)}"/>`;
  }
  const hill=`<path d="M0 300Q90 ${250+r()*30} 180 290T400 ${270+r()*20}V340H0Z" fill="${M}" opacity=".35"/>`;
  const rf=refl?`<g clip-path="url(#${id}c)"><g transform="translate(0 660) scale(1 -1)" opacity=".18">${o}</g></g>`:'';
  return `<svg viewBox="${vb.join(' ')}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${p.title}, view ${i+1}"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T}"/><stop offset="1" stop-color="${B}"/></linearGradient><clipPath id="${id}c"><rect x="0" y="330" width="400" height="70"/></clipPath></defs><rect width="400" height="400" fill="url(#${id})"/><circle cx="${(70+r()*260).toFixed(0)}" cy="${(60+r()*70).toFixed(0)}" r="${(20+r()*14).toFixed(0)}" fill="${SUN}" opacity=".9"/>${hill}<rect y="330" width="400" height="70" fill="${G}"/>${rf}${o}</svg>`;
}
const GLYPH={terraces:'M3 20h4v-4h4v-4h4V8h4V4',arches:'M4 20v-7a3 3 0 0 1 6 0v7M14 20v-7a3 3 0 0 1 6 0v7',blocks:'M4 20V9h5v11M11 20V4h5v16M18 20v-8h2v8',fold:'M3 18l4-8 4 8M11 18l4-8 4 8',contours:'M12 5c4 0 8 3 8 7s-4 7-8 7-8-3-8-7 4-7 8-7zM12 9c2 0 4 1.5 4 3s-2 3-4 3-4-1.5-4-3 2-3 4-3z',grid:'M4 20V10M9 20V4M14 20V8M19 20V12M3 20h18',object:'M12 4a6 6 0 0 1 6 6H6a6 6 0 0 1 6-6zM12 10v8M8 20h8'};
const icon=t=>`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="${GLYPH[t]}"/></svg>`;
const ARROW=d=>`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6"><path d="${d}"/></svg>`;

/* ---------- Build the page ---------- */
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
/* fiche technique : seuls les champs renseignés dans data.js sont affichés */
const FACTS=[['client','Client'],['typology','Type'],['surface','Surface'],['status','Statut'],['architect','Architecte'],['mission','Mission']];
const facts=p=>`<dl class="facts">${FACTS.filter(([k])=>p[k]).map(([k,l])=>`<div><dt>${l}</dt><dd>${p[k]}</dd></div>`).join('')}</dl>`;
const state={cat:'All',draft:'All'};
const ALL='All',ALL_LABEL='Tous';
const label=c=>c===ALL?ALL_LABEL:c;
const plural=n=>`${n} ${n===1?'projet':'projets'}`;
let lastFocus=null;

$$('.brand-name').forEach(e=>e.textContent=SITE.name);
$('#tagline').textContent=SITE.tag;
$('#mailTxt').textContent=$('#menuMail').textContent=SITE.email;
$('#mailLink').href=`mailto:${SITE.email}`;
$('#addressTxt').textContent=SITE.address;
$('#phoneTxt').textContent=SITE.phone;
$('#phoneLink').href=`tel:${SITE.phone.replace(/[^\d+]/g,'')}`;
$('#discs').innerHTML=CATS.map(c=>`<li><button class="disc" data-cat="${c}">${c}<sup>${PROJECTS.filter(p=>p.cat===c).length}</sup></button></li>`).join('');
$('#chips').innerHTML=[ALL,...CATS].map(c=>`<button class="chip" data-cat="${c}" aria-pressed="${c===ALL}">${label(c)}</button>`).join('');

$('#list').innerHTML=PROJECTS.map(p=>{
  const nImg=p.images&&p.images.length?Math.min(4,p.images.length):3;
  const imgs=[...Array(nImg).keys()].map(i=>`<div class="slide art"${i===0?` data-expand role="button" tabindex="0" aria-expanded="false" aria-label="Voir les détails de ${p.title}"`:''}>${art(p,i)}</div>`);
  const slides=[imgs[0],
    `<div class="slide info"><div class="info-in">${facts(p)}<p>${p.desc}</p></div></div>`,
    ...imgs.slice(1)];
  if(p.note)slides.push(`<div class="slide note"><span class="q" aria-hidden="true">“</span><p>${p.note}</p><button class="more">+ Lire la suite</button></div>`);
  return `<article class="proj" data-cat="${p.cat}" data-id="${p.id}">
    <div class="rail" tabindex="0" role="group" aria-label="Galerie ${p.title}">${slides.join('')}</div>
    <div class="cap"><span class="ico">${icon(p.type)}</span>
      <div class="meta"><button class="t" data-open="${p.id}">${p.title}</button><span class="loc caps">${p.loc}</span></div>
      
    </div><div class="bar"><i></i></div></article>`;
}).join('');

function loadNearImages(){
  const margin=300;
  const viewport=window.visualViewport;
  const viewportWidth=viewport?viewport.width:document.documentElement.clientWidth;
  const viewportHeight=Math.min(viewport?viewport.height:document.documentElement.clientHeight,900);
  $$('img[data-src]').forEach(image=>{
    const project=image.closest('.proj');
    if(project&&!project.classList.contains('open')&&image.parentElement!==$('.rail',project).firstElementChild)return;
    const rect=image.getBoundingClientRect();
    if(rect.bottom < -margin||rect.top > viewportHeight+margin||rect.right < -margin||rect.left > viewportWidth+margin)return;
    image.src=image.dataset.src;
    image.removeAttribute('data-src');
  });
}
let imageCheckPending=false;
function scheduleImageLoad(force=false){
  if(imageCheckPending)return;
  imageCheckPending=true;
  requestAnimationFrame(()=>{
    imageCheckPending=false;
    if(force||scrollY>50||detail.classList.contains('on'))loadNearImages();
  });
}
window.addEventListener('scroll',scheduleImageLoad,{passive:true});
document.addEventListener('scroll',scheduleImageLoad,{passive:true,capture:true});
window.addEventListener('resize',scheduleImageLoad,{passive:true});

/* rails: counter, progress, arrows, mouse drag */
function syncRail(rail){
  const sl=[...rail.children],left=rail.getBoundingClientRect().left+parseFloat(getComputedStyle(rail).paddingLeft);
  let idx=0,best=1e9;
  sl.forEach((s,k)=>{const d=Math.abs(s.getBoundingClientRect().left-left);if(d<best){best=d;idx=k}});
  if(rail.scrollLeft+rail.clientWidth>=rail.scrollWidth-4)idx=sl.length-1;
  const art=rail.closest('.proj');
  $('.bar i',art).style.transform=`scaleX(${Math.min(1,(rail.scrollLeft+rail.clientWidth)/rail.scrollWidth)})`;
  rail._idx=idx;
}
$$('.rail').forEach(rail=>{
  let tick=false;
  rail.addEventListener('scroll',()=>{scheduleImageLoad(true);if(tick)return;tick=true;requestAnimationFrame(()=>{tick=false;syncRail(rail)})},{passive:true});
  syncRail(rail);
  let sx=0,sl=0,down=false,moved=false;
  rail.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;moved=false;sx=e.clientX;sl=rail.scrollLeft});
  window.addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-sx;if(Math.abs(dx)>4){moved=true;rail.classList.add('drag')}if(moved)rail.scrollLeft=sl-dx});
  window.addEventListener('pointerup',()=>{if(!down)return;down=false;if(moved){rail.classList.remove('drag');const t=rail.children[rail._idx];}});
  rail.addEventListener('keydown',e=>{if(!rail.closest('.proj').classList.contains('open'))return;if(e.key==='ArrowRight')go(rail,1);if(e.key==='ArrowLeft')go(rail,-1)});
});
const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
function glide(rail,to,dur){
  if(reduce){rail.scrollLeft=to;return Promise.resolve()}
  return new Promise(res=>{
    const from=rail.scrollLeft,t0=performance.now();
    rail.classList.add('anim');
    (function step(now){
      const k=Math.min(1,(now-t0)/dur);
      rail.scrollLeft=from+(to-from)*ease(k);
      if(k<1)requestAnimationFrame(step);else{rail.classList.remove('anim');res()}
    })(t0);
  });
}
const slideX=(rail,n)=>rail.children[n].offsetLeft-parseFloat(getComputedStyle(rail).paddingLeft);
function go(rail,dir){
  const n=Math.max(0,Math.min(rail.children.length-1,(rail._idx||0)+dir));
  glide(rail,slideX(rail,n),500);
}
function setOpen(pr,open){
  if(pr._busy||open===pr.classList.contains('open'))return;
  const rail=$('.rail',pr);
  $('[data-expand]',pr).setAttribute('aria-expanded',String(open));
  pr._busy=true;
  if(open){
    $$('.proj.open').forEach(o=>setOpen(o,false));
    pr.classList.add('open');rail.scrollLeft=0;syncRail(rail);
    const r=pr.getBoundingClientRect();
    if(r.top<80||r.bottom>innerHeight-20)scrollBy({top:r.top+r.height/2-innerHeight/2,behavior:reduce?'auto':'smooth'});
    glide(rail,slideX(rail,1),700).then(()=>{pr._busy=false});
  }else{
    glide(rail,0,550).then(()=>{pr.classList.remove('open');pr._busy=false});
  }
}
$('#list').addEventListener('click',e=>{
  const more=e.target.closest('.more');if(more){const n=more.closest('.note');const o=n.classList.toggle('open');more.textContent=o?'− Réduire':'+ Lire la suite';return}
  const ex=e.target.closest('[data-expand]');if(ex){const pr=ex.closest('.proj');setOpen(pr,!pr.classList.contains('open'));return}
  const op=e.target.closest('[data-open]');if(op)openDetail(op.dataset.open,op);
});

$('#list').addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-expand]')){e.preventDefault();e.target.click()}});

/* image entrance (always visible at rest) */
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}}),{threshold:.15}):null;
$$('.proj').forEach(el=>io?io.observe(el):el.classList.add('in'));

/* filter */
function setFilter(cat){
  const changed=state.cat!==cat;
  state.cat=state.draft=cat;
  let n=0;
  $$('.proj').forEach(el=>{const show=cat===ALL||el.dataset.cat===cat;el.hidden=!show;if(show)n++;});
  $('#count').textContent=plural(n);
  $('#empty').hidden=n>0;
  $('#fdot').hidden=cat===ALL;
  const cl=$('#clear');cl.hidden=cat===ALL;cl.innerHTML=`${label(cat)} <span aria-hidden="true">✕</span>`;cl.setAttribute('aria-label',`Retirer le filtre ${label(cat)}`);
  $$('.chip').forEach(c=>c.setAttribute('aria-pressed',String(c.dataset.cat===cat)));
  $('#apply').textContent=`Voir ${plural(n)}`;
  $$('.rail').forEach(r=>{if(!r.closest('.proj').hidden)syncRail(r)});
  if(changed&&!reduce)$('#list').animate([{opacity:0,transform:'translateY(14px)'},{opacity:1,transform:'none'}],{duration:420,easing:'cubic-bezier(.2,.8,.2,1)'});
}
$('#chips').addEventListener('click',e=>{
  const c=e.target.closest('.chip');if(!c)return;
  state.draft=c.dataset.cat;
  $$('.chip').forEach(x=>x.setAttribute('aria-pressed',String(x===c)));
  const n=state.draft===ALL?PROJECTS.length:PROJECTS.filter(p=>p.cat===state.draft).length;
  $('#apply').textContent=`Voir ${plural(n)}`;
});
$('#apply').onclick=()=>{setFilter(state.draft);closePanels();scrollToFeed()};
$('#clear').onclick=()=>setFilter('All');
$('#discs').addEventListener('click',e=>{const b=e.target.closest('.disc');if(b){setFilter(b.dataset.cat);scrollToFeed()}});
const scrollToFeed=()=>window.scrollTo({top:$('#feed').offsetTop-$('#hdr').offsetHeight-8,behavior:reduce?'auto':'smooth'});

/* panels */
const scrim=$('#scrim'),menu=$('#menu'),filter=$('#filter'),detail=$('#detail');
function openPanel(el,btn){
  lastFocus=btn||document.activeElement;
  el.classList.add('on');el.inert=false;scrim.classList.toggle('on',el!==menu&&el!==detail);
  document.documentElement.classList.add('lock');
  (btn||{}).setAttribute&&btn.setAttribute('aria-expanded','true');
  const f=$('button',el);f&&f.focus({preventScroll:true});
}
function closePanels(){
  [menu,filter,detail].forEach(el=>{el.classList.remove('on');el.inert=true});
  scrim.classList.remove('on');document.documentElement.classList.remove('lock');
  $('#btnMenu').setAttribute('aria-expanded','false');$('#btnFilter').setAttribute('aria-expanded','false');
  if(lastFocus&&lastFocus.focus)lastFocus.focus({preventScroll:true});
}
$('#btnMenu').onclick=e=>openPanel(menu,e.currentTarget);
$('#btnFilter').onclick=e=>{state.draft=state.cat;setFilter(state.cat);openPanel(filter,e.currentTarget)};
$('#menuClose').onclick=closePanels;scrim.onclick=closePanels;$('#dClose').onclick=closePanels;
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePanels()});
$('#menu nav').addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  closePanels();
  const t=document.getElementById(b.dataset.go);
  if(b.dataset.open)$$('.foot details').forEach(d=>d.open=d.textContent.trim().startsWith('L’agence'));
  if(t)setTimeout(()=>window.scrollTo({top:t.offsetTop-$('#hdr').offsetHeight-8,behavior:reduce?'auto':'smooth'}),60);
});

/* detail page */
function openDetail(id,btn){
  const i=PROJECTS.findIndex(p=>p.id===id),p=PROJECTS[i],nx=PROJECTS[(i+1)%PROJECTS.length];
  const total=p.images&&p.images.length?p.images.length:3;
  const more=[...Array(total).keys()].slice(1).map(k=>`<div class="d-art">${art(p,k)}</div>`).join('');
  $('#dIn').innerHTML=`<div class="d-eyebrow caps">${p.cat}</div><h2>${p.title}</h2><p class="d-loc caps">${p.loc}</p>
    <div class="d-art">${art(p,0)}</div>
    <div class="d-cols">${facts(p)}<p>${p.desc}</p></div>
    ${p.programme?`<div class="d-prog"><h3 class="caps">Programme</h3><p>${p.programme}</p></div>`:''}
    <div class="d-grid">${more}</div>
    ${p.note?`<blockquote class="d-quote">${p.note}</blockquote>`:''}
    <button class="d-next" data-next="${nx.id}"><span>Suivant : ${nx.title}</span><span aria-hidden="true">→</span></button>`;
  detail.scrollTop=0;openPanel(detail,btn);
  scheduleImageLoad(true);
  $('#dClose').focus({preventScroll:true});
}
$('#dIn').addEventListener('click',e=>{const n=e.target.closest('[data-next]');if(n){const id=n.dataset.next;openDetail(id,lastFocus)}});

/* contact + theme */
$('#contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const status=$('#contactStatus');
  if(!e.currentTarget.reportValidity())return;
  if(!SITE.email||/\.example$/i.test(SITE.email)){
    status.textContent='La demande est prête, mais l’adresse de réception du site est encore fictive. Remplacez SITE.email dans data.js par une adresse réelle avant l’envoi.';
    return;
  }
  const form=new FormData(e.currentTarget);
  const subject=`Demande de projet — ${form.get('name')}`;
  const body=[
    `Nom : ${form.get('name')}`,
    `E-mail : ${form.get('email')}`,
    `Type de projet : ${form.get('projectType')}`,
    `Budget estimé : ${form.get('budget')||'À définir'}`,
    '',
    'Projet :',
    form.get('message')
  ].join('\n');
  status.textContent='Votre application de messagerie va s’ouvrir avec votre demande préremplie. Vérifiez le message puis envoyez-le depuis votre messagerie.';
  window.location.href=`mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
const modes=['system','light','dark'],modeLabels=['système','clair','sombre'];let mode=0;
try{const m=modes.indexOf(localStorage.getItem('afa-theme'));if(m>0)mode=m}catch(_){}
function applyTheme(){
  const r=document.documentElement;
  if(mode===0)r.removeAttribute('data-theme');else r.setAttribute('data-theme',modes[mode]);
  $('#theme').textContent='Thème : '+modeLabels[mode];
  try{localStorage.setItem('afa-theme',modes[mode])}catch(_){}
}
$('#theme').onclick=()=>{mode=(mode+1)%3;applyTheme()};applyTheme();
$('#toTop').onclick=$('#miniTop').onclick=()=>window.scrollTo({top:0,behavior:reduce?'auto':'smooth'});

/* scroll behaviour: solid header, hide on scroll down, masthead parallax, progress */
const hdr=$('#hdr'),sheet=$('#feed'),wrap=$('#wrapword'),mast=$('#top'),prog=$('#prog');
const smallScreen=matchMedia('(max-width:680px)').matches;
let lastY=0,ticking=false;
function onScroll(){
  if(ticking)return;ticking=true;
  requestAnimationFrame(()=>{
    ticking=false;
    const y=Math.max(0,scrollY),mh=mast.offsetHeight,max=document.documentElement.scrollHeight-innerHeight;
    prog.style.transform=`scaleX(${max>0?Math.min(1,y/max):0})`;
    const solid=sheet.getBoundingClientRect().top<=hdr.offsetHeight;
    hdr.classList.toggle('solid',solid);
    if(!reduce&&!smallScreen){const k=Math.min(1,y/mh);wrap.style.transform=`translateY(${(y*.32).toFixed(1)}px)`;wrap.style.opacity=(1-k*.85).toFixed(2)}
    hdr.classList.toggle('hide',solid&&y>lastY&&y>160);
    lastY=y;
  });
}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);

const hashCat=CATS.find(c=>c.toLowerCase()===location.hash.slice(1).toLowerCase());
setFilter(hashCat||ALL);onScroll();
const initialCover=$('.proj:not([hidden]) .rail .slide:first-child img');
if(initialCover&&initialCover.dataset.src){initialCover.src=initialCover.dataset.src;initialCover.removeAttribute('data-src')}

/* Image manquante : on affiche l’illustration générée au lieu d’une icône cassée */
document.addEventListener('error',e=>{const t=e.target;if(!t.matches||!t.matches('img[data-fb]'))return;const[id,i]=t.dataset.fb.split(':');const p=PROJECTS.find(x=>x.id===id);if(!p)return;const d=document.createElement('div');d.style.cssText='width:100%;height:100%';d.innerHTML=art(p,+i,true);t.replaceWith(d)},true);
