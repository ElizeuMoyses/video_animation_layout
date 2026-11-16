import fs from 'node:fs/promises';import {existsSync} from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';import {getComponent,normalizeProps,createRecipe} from '../src/core.mjs';import {sceneHTML} from './scene.mjs';
const args=process.argv.slice(2),arg=name=>{const i=args.indexOf('--'+name);return i<0?undefined:args[i+1];};
if(args.includes('--help')||!arg('output')){console.log('node tools/export.mjs --component ID --output PASTA_NOVA [--recipe RECEITA.json] [--transparent]\nOu: --recipe RECEITA.json --output PASTA_NOVA. A saída é um projeto HyperFrames; --transparent deixa o HTML sem fundo.');process.exit(arg('output')?0:args.includes('--help')?0:1);}
const root=path.resolve(fileURLToPath(new URL('..',import.meta.url)));const output=path.resolve(arg('output'));const recipe=arg('recipe')?JSON.parse(await fs.readFile(path.resolve(arg('recipe')),'utf8')):{};const c=getComponent(arg('component')||recipe.component);const r=createRecipe(c.id,recipe);
if(output===root||!output.startsWith(path.dirname(root)+path.sep))throw new Error('A saída precisa ficar em uma pasta nova dentro de biblioteca-visual.');
for(let parent=path.dirname(output);;parent=path.dirname(parent)){
 try{const stat=await fs.lstat(parent);if(stat.isSymbolicLink())throw new Error('A saída não pode atravessar link simbólico ou junction: '+parent);}catch(e){if(e.code!=='ENOENT')throw e;}
 if(parent===path.dirname(root)||parent===path.dirname(parent))break;
}
try{await fs.stat(output);throw new Error('A pasta de saída já existe. Use uma nova para preservar o trabalho anterior.');}catch(e){if(e.code!=='ENOENT')throw e;}
const compiled=existsSync(path.join(root,'dist/src/runtime.js'))?path.join(root,'dist'):root;
if(!existsSync(path.join(compiled,'src/runtime.js')))throw new Error('Runtime ausente: execute o build ou extraia o kit completo.');
await fs.mkdir(output,{recursive:true});for(const dir of ['src','assets'])await fs.cp(path.join(compiled,dir),path.join(output,dir),{recursive:true});
const explicit=Boolean(arg('recipe'));await fs.writeFile(path.join(output,'index.html'),sceneHTML({id:c.id,component:c,props:normalizeProps(c,r.props),theme:r.theme,start:r.start,duration:r.start+c.duration,title:c.name,transparent:args.includes('--transparent'),...(explicit?{x:r.x,y:r.y,scale:r.scale}:{})}));await fs.writeFile(path.join(output,'hyperframes.json'),JSON.stringify({name:'apps-'+c.id},null,2));await fs.writeFile(path.join(output,'recipe.json'),JSON.stringify(r,null,2));console.log(JSON.stringify({ok:true,output,component:c.id,duration:r.start+c.duration,recipe:r}));
