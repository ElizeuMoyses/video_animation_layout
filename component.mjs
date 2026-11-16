import {mount,getComponent} from './src/core.mjs';
try{
 const params=new URLSearchParams(location.search),id=params.get('id')||'instagram-comment';const c=getComponent(id);let props={};try{props=JSON.parse(params.get('props')||'{}');}catch{}
 const player=mount(document.getElementById('component'),id,{props,theme:params.get('theme')==='dark'?'dark':'light'});
 const fit=()=>{const s=Math.min(innerWidth/c.width,innerHeight/c.height,2);document.getElementById('position').style.transform=`translate(${(innerWidth-c.width*s)/2}px,${(innerHeight-c.height*s)/2}px) scale(${s})`;};fit();addEventListener('resize',fit);
 const clock={time:0};const tl=gsap.timeline({paused:true}).to(clock,{time:c.duration,duration:c.duration,ease:'none',onUpdate:()=>player.seek(clock.time)});window.__timelines={component:tl};window.componentPlayer=player;window.componentReady=true;
 const renderMode=params.has('render');if(!renderMode&&!matchMedia('(prefers-reduced-motion:reduce)').matches)tl.repeat(-1).repeatDelay(.6).play();else player.seek(Number(params.get('time')||3.5));
 addEventListener('message',event=>{if(event.origin!==location.origin)return;if(event.data?.type==='seek'){tl.pause();tl.seek(Number(event.data.time)||0,false);player.seek(Number(event.data.time)||0);}});
}catch(e){document.body.textContent=e.message;document.body.id='notice';console.error(e);}
