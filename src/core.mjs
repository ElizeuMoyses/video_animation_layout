import {components as instagram,brand as ig} from './apps/instagram/index.mjs';
import {components as tiktok,brand as tk} from './apps/tiktok/index.mjs';
import {components as claude,brand as cl} from './apps/claude/index.mjs';
import {components as chatgpt,brand as cg,brandLogo as chatgptLogo} from './apps/chatgpt/index.mjs';
import {components as whatsapp,brand as wa,logoMark as whatsappLogo} from './apps/whatsapp/index.mjs';
import {icon,logo} from './icons.mjs';

export const components=[...instagram,...tiktok,...claude,...chatgpt,...whatsapp];
export const brands=[ig,tk,cl,cg,wa];
const map=new Map(components.map(c=>[c.id,c]));
export const esc=value=>String(value??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
export const clamp=(v,min=0,max=1)=>Math.max(min,Math.min(max,Number(v)||0));
const portrait=new URL('./assets/elizeu-avatar.png',import.meta.url).href;
export const helpers={esc,icon,logo:(app,size=24)=>app==='chatgpt'?chatgptLogo(size):app==='whatsapp'?whatsappLogo(size):logo(app,size),
 avatar(name='Elizeu',src=''){const url=src||portrait;const safe=/^(https?:|data:|javascript:)/i.test(url)&&url!==portrait?portrait:url;return `<span class="av" title="${esc(name)}"><span>${esc(String(name).split(/[\s.]/).map(s=>s[0]||'').slice(0,2).join('').toUpperCase())}</span><img src="${esc(safe)}" alt="${esc(name)}" loading="eager"></span>`;},
 progress:(t,start,duration)=>clamp((t-start)/Math.max(.0001,duration)),ease:p=>1-(1-clamp(p))**3,
 q:(root,selector)=>root.querySelector(selector),
 reveal(el,p,{x=0,y=14,scale=.97}={}){if(!el)return;const v=1-(1-clamp(p))**3;el.style.opacity=String(clamp(p));el.style.transform=`translate(${x*(1-v)}px,${y*(1-v)}px) scale(${scale+(1-scale)*v})`;},
 type(el,text,time,start=1,rate=32){if(el)el.textContent=String(text??'').slice(0,Math.floor(Math.max(0,time-start)*rate));}
};
export function getComponent(id){const c=map.get(id);if(!c)throw new Error('Componente desconhecido: '+id);return c;}
export function normalizeProps(component,props={}){
 const c=typeof component==='string'?getComponent(component):component;
 const out={...c.defaults};
 for(const f of c.fields){if(!Object.hasOwn(props,f.key))continue;
  out[f.key]=f.type==='number'?clamp(Number(props[f.key]),0,999999999):String(props[f.key]??'').slice(0,2000);
 }return out;
}
export function defaultLayout(c){const scale=Math.min(595/c.width,520/c.height,1.1);return {x:(720-c.width*scale)/2,y:385,scale};}
export function createRecipe(id,{props={},start=0,theme='light',x,y,scale}={}){
 const c=getComponent(id);if(!Number.isFinite(start)||start<0)throw new Error('Início deve ser positivo');if(!['light','dark'].includes(theme))throw new Error('Tema inválido');
 const base=defaultLayout(c);scale=scale??base.scale;x=x??(720-c.width*scale)/2;y=y??base.y;
 if(![x,y,scale].every(Number.isFinite)||scale<=0||scale>4)throw new Error('Posição/escala inválida');
 return {schema:1,component:c.id,app:c.app,start,duration:c.duration,theme,x,y,scale,props:normalizeProps(c,props)};
}
export function mount(host,id,{props={},theme='light',time=0}={}){
 const c=getComponent(id);let p=normalizeProps(c,props);let current=0;let disposed=false;
 host.classList.add('app-component');host.style.width=c.width+'px';host.style.height=c.height+'px';
 function render(){host.innerHTML=c.render(p,helpers);host.firstElementChild?.setAttribute('data-theme',theme);}
 function seek(t){if(disposed)return;current=clamp(t,0,c.duration);c.tick(host,current,p,helpers);host.dataset.time=String(current);return current;}
 render();seek(time);
 return {component:c,get time(){return current;},get props(){return {...p};},seek,
  update(props){p=normalizeProps(c,props);render();seek(current);},
  setTheme(value){theme=value==='dark'?'dark':'light';host.firstElementChild?.setAttribute('data-theme',theme);seek(current);},
  destroy(){disposed=true;host.replaceChildren();}
 };
}
