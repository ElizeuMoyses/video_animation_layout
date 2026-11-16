import {components,brands,mount,helpers as h,createRecipe} from './src/core.mjs';
const $=s=>document.querySelector(s), reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
const appName=id=>brands.find(b=>b.id===id)?.name||id;
let selected=components[0], player, cards=[],heroes=[],appFilter='all',theme='light',mode='element',playing=false,last=0,speed=1,hovered=null,toastDeadline=0;
document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=h.icon(el.dataset.icon));
const demoLink=document.createElement('a');demoLink.className='hero-demo-link';demoLink.href='demo.mp4';demoLink.target='_blank';demoLink.rel='noopener';demoLink.innerHTML='Ver demo em vídeo '+h.icon('play',12);
function toast(text){$('#toast').textContent=text;$('#toast').classList.add('visible');toastDeadline=performance.now()+3200;}
function save(name,content,type='application/json'){const url=URL.createObjectURL(new Blob([content],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);}
function stateRecipe(){return createRecipe(selected.id,{props:player.props,theme,start:0});}
function fitMain(){
 const area=$('#preview-field'),position=$('#main-position'),video=$('#video-scene'),w=area.clientWidth,ht=area.clientHeight;
 if(mode==='video'){
  const vs=Math.min((w-30)/720,(ht-60)/1280),vx=(w-720*vs)/2,vy=(ht-1280*vs)/2;
  video.hidden=false;video.style.transform=`translate(${vx}px,${vy}px) scale(${vs})`;
  const recipe=stateRecipe(),cs=recipe.scale,x=vx+recipe.x*vs,y=vy+recipe.y*vs;
  position.style.transform=`translate(${x}px,${y}px) scale(${vs*cs})`;
 }else{video.hidden=true;const s=Math.min((w-70)/selected.width,(ht-80)/selected.height,1.15);position.style.transform=`translate(${(w-selected.width*s)/2}px,${(ht-selected.height*s)/2}px) scale(${s})`;}
 $('#dimension-label').textContent=mode==='video'?'720 × 1280 / 9:16':`${selected.width} × ${selected.height} / CAMADA EDITÁVEL`;
}
function fitCards(){for(const card of cards){const w=card.preview.clientWidth,ht=card.preview.clientHeight,c=card.player.component;const s=Math.min((w-44)/c.width,(ht-54)/c.height,.84);card.position.style.transform=`translate(${(w-c.width*s)/2}px,${(ht-c.height*s)/2}px) scale(${s})`;}}
function fitHeroes(){heroes.forEach((item,i)=>{const w=$('.hero-surface').clientWidth;const s=Math.min((w*(i?.79:.88))/item.player.component.width,.82);item.host.style.transform=`rotate(${i?3:-3}deg) scale(${s})`;});}
function setPlaying(value){playing=value;$('#play').setAttribute('aria-label',playing?'Pausar':'Reproduzir');$('#play').innerHTML=h.icon(playing?'pause':'play');last=0;}
function updateTime(){const t=player.time;$('#progress').value=t;$('#time').textContent=`${t.toFixed(1).replace('.',',')} / ${selected.duration.toFixed(1).replace('.',',')} s`;}
function rebuildForm(){
 const form=$('#prop-form');form.replaceChildren();
 for(const f of selected.fields){const label=document.createElement('label');label.textContent=f.label;const input=document.createElement(f.type==='textarea'?'textarea':'input');if(f.type!=='textarea')input.type=f.type==='number'?'number':'text';input.name=f.key;input.id='prop-'+f.key;input.value=player.props[f.key]??'';if(f.type==='number'){input.min='0';input.max='999999999';}else input.maxLength=2000;
  input.addEventListener('input',()=>{const props=Object.fromEntries(new FormData(form));player.update(props);updateTime();updateIsolatedLink();});label.append(input);form.append(label);}
}
function updateIsolatedLink(){const url=new URL('component.html',location.href);url.searchParams.set('id',selected.id);url.searchParams.set('theme',theme);url.searchParams.set('props',JSON.stringify(player.props));$('#open-component').href=url.href;}
function selectComponent(c,{scroll=false}={}){
 selected=c;player?.destroy();player=mount($('#main-component'),c.id,{theme,time:Math.min(3.5,c.duration*.6)});$('#main-component').inert=true;$('#main-position').setAttribute('role','img');$('#main-position').setAttribute('aria-label','Demonstração animada: '+c.name);setPlaying(false);
 $('#selected-app').innerHTML=h.logo(c.app,16)+`<span>${h.esc(appName(c.app))}</span>`;$('#selected-name').textContent=c.name;$('#selected-description').textContent=c.description;
 $('#selected-tags').innerHTML=c.tags.slice(0,4).map(tag=>`<span>${h.esc(tag)}</span>`).join('');$('#progress').max=c.duration;
 rebuildForm();updateTime();fitMain();updateIsolatedLink();
 for(const item of cards)item.card.classList.toggle('is-selected',item.player.component.id===c.id);
 if(scroll)$('#studio').scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});
}
function renderCards(){
 const query=$('#search').value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
 for(const item of cards)item.player.destroy();cards=[];hovered=null;const grid=$('#component-grid');grid.replaceChildren();
 const visible=components.filter(c=>(appFilter==='all'||c.app===appFilter)&&`${c.name} ${c.description} ${c.tags.join(' ')} ${appName(c.app)}`.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(query));
 for(const c of visible){
  const index=components.indexOf(c)+1,card=document.createElement('article');card.className='component-card'+(c.id===selected.id?' is-selected':'');card.dataset.component=c.id;
  card.innerHTML=`<div role="button" tabindex="0" class="card-preview" aria-label="Experimentar ${h.esc(c.name)} de ${h.esc(appName(c.app))}"><span class="card-index">${String(index).padStart(2,'0')} / ${h.esc(c.app.toUpperCase())}</span><div class="card-component-position" inert aria-hidden="true"><div class="card-host"></div></div><span class="card-action">${h.icon('play',12)}</span></div><div class="card-copy"><div class="card-app"><span>${h.logo(c.app,12)} ${h.esc(appName(c.app))}</span><span>${c.duration} s · ${h.esc(c.category)}</span></div><h3>${h.esc(c.name)}</h3><p>${h.esc(c.description)}</p><button type="button" class="edit-card">Experimentar componente ${h.icon('arrow-up',13)}</button></div>`;
  grid.append(card);const preview=card.querySelector('.card-preview'),position=card.querySelector('.card-component-position');const cp=mount(card.querySelector('.card-host'),c.id,{theme,time:c.duration*.68});const item={card,preview,position,player:cp,hoverStart:0};cards.push(item);
  preview.addEventListener('click',()=>selectComponent(c,{scroll:true}));card.querySelector('.edit-card').addEventListener('click',()=>selectComponent(c,{scroll:true}));
  preview.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectComponent(c,{scroll:true});}});
  preview.addEventListener('mouseenter',()=>{if(reduced)return;hovered=item;item.hoverStart=performance.now();});preview.addEventListener('mouseleave',()=>{if(hovered===item)hovered=null;cp.seek(c.duration*.68);});
 }
 $('#result-count').textContent=`${visible.length} ${visible.length===1?'componente':'componentes'}${appFilter!=='all'?' de '+appName(appFilter):' para explorar'}`;$('#empty').hidden=!!visible.length;fitCards();
 document.querySelectorAll('#filters button').forEach(b=>{b.classList.toggle('active',b.dataset.app===appFilter);b.setAttribute('aria-pressed',String(b.dataset.app===appFilter));});
}
function filter(id){appFilter=id;renderCards();}
const filters=$('#filters');[{id:'all',name:'Todos'},...brands].forEach(b=>{const button=document.createElement('button');button.type='button';button.dataset.app=b.id;button.innerHTML=(b.id!=='all'?h.logo(b.id,13):'')+h.esc(b.name)+`<span>${b.id==='all'?components.length:components.filter(c=>c.app===b.id).length}</span>`;button.addEventListener('click',()=>filter(b.id));filters.append(button);});
for(const brand of brands){const button=document.createElement('button');button.type='button';button.innerHTML=`<span class="app-sign">${h.logo(brand.id,28)}</span><span>${h.esc(brand.name)}<small>${String(components.filter(c=>c.app===brand.id).length).padStart(2,'0')} COMPONENTES</small></span>`;button.addEventListener('click',()=>{filter(brand.id);$('#catalogo').scrollIntoView({behavior:reduced?'auto':'smooth'});});$('#app-strip').append(button);}
const heroComponents=[components.find(c=>c.app==='instagram'&&/comentário|comentario/i.test(c.name))||components[0],components.find(c=>c.app==='claude'&&/composer|prompt|mensagem/i.test(c.name))||components.find(c=>c.app==='claude')];
heroComponents.forEach((c,i)=>{const host=$(`#hero-${i?'b':'a'}`),p=mount(host,c.id,{time:3.5,theme:'light'});host.inert=true;heroes.push({host,player:p});});
$('#play').addEventListener('click',()=>{if(player.time>=selected.duration-.02)player.seek(0);setPlaying(!playing);});$('#replay').addEventListener('click',()=>{player.seek(0);setPlaying(true);updateTime();});$('#progress').addEventListener('input',e=>{setPlaying(false);player.seek(Number(e.target.value));updateTime();});$('#speed').addEventListener('change',e=>{speed=Number(e.target.value);});
$('#theme').addEventListener('change',e=>{theme=e.target.value;player.setTheme(theme);for(const item of cards)item.player.setTheme(theme);updateIsolatedLink();});
function setMode(value){mode=value;for(const m of ['element','video']){$('#mode-'+m).classList.toggle('active',m===mode);$('#mode-'+m).setAttribute('aria-pressed',String(m===mode));}fitMain();}
$('#mode-element').addEventListener('click',()=>setMode('element'));$('#mode-video').addEventListener('click',()=>setMode('video'));
document.querySelectorAll('[data-bg]').forEach(b=>b.addEventListener('click',()=>{$('#preview-field').className='preview-field '+b.dataset.bg;document.querySelectorAll('[data-bg]').forEach(other=>{other.classList.toggle('selected',b===other);other.setAttribute('aria-pressed',String(b===other));});}));
$('#search').addEventListener('input',renderCards);$('#clear').addEventListener('click',()=>{$('#search').value='';filter('all');});
$('#reset-props').addEventListener('click',()=>{player.update(selected.defaults);rebuildForm();updateIsolatedLink();toast('Textos de exemplo restaurados.');});
$('#download-recipe').addEventListener('click',()=>{save(selected.id+'.json',JSON.stringify(stateRecipe(),null,2));toast('Receita salva.');});
$('#copy-recipe').addEventListener('click',async()=>{const text='Use o pacote video_animation_layout (github.com/ElizeuMoyses/video_animation_layout). Leia GUIA-DE-USO.md. Insira este componente na composição HyperFrames, sincronize sua animação com a fala e ajuste x/y/scale sem cobrir o rosto ou a legenda. Os textos representam uma demonstração editável.\n\n'+JSON.stringify(stateRecipe(),null,2);try{await navigator.clipboard.writeText(text);toast('Instrução e receita copiadas para o agente.');}catch{save(selected.id+'-para-agente.txt',text,'text/plain');toast('Instrução salva em arquivo para copiar.');}});
new ResizeObserver(()=>{fitMain();fitCards();fitHeroes();}).observe(document.body);
document.addEventListener('visibilitychange',()=>{last=0;});
function frame(now){const dt=last?Math.min(.1,(now-last)/1000):0;last=now;if(!document.hidden){if(playing){const next=player.time+dt*speed;player.seek(Math.min(next,selected.duration));if(next>=selected.duration)setPlaying(false);updateTime();}if(hovered)hovered.player.seek(((now-hovered.hoverStart)/1000)%hovered.player.component.duration);if(!reduced)heroes.forEach((item,i)=>item.player.seek(((now/1000+i*2)%10.5)+.01));}if(toastDeadline&&now>toastDeadline){$('#toast').classList.remove('visible');toastDeadline=0;}requestAnimationFrame(frame);}
selectComponent(selected);renderCards();fitHeroes();requestAnimationFrame(frame);
window.AppComponents={components,brands,mount,createRecipe,select:id=>selectComponent(components.find(c=>c.id===id)||components[0]),setMode};window.galleryReady=true;
