// Claude web — local, time-driven illustrations. See references.md for sources.
export const brand = {
  id: 'claude',
  name: 'Claude',
  color: '#c96442',
  description: 'Conversa, contexto e criação com a aparência quente do Claude.'
};

const field = (key, label, type = 'text') => ({ key, label, type });
const esc = (h, value) => h.esc(value ?? '');
const mark = (size = 28) => `<svg class="cl-mark" width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" aria-hidden="true"><g stroke="currentColor" stroke-width="2.7" stroke-linecap="round"><path d="M20 3.5 19.5 14M28.5 5.4 23 14.8M35 12 25.3 17.2M37 21 26.3 21M33.2 30 24.8 24M25 36.4 22 26M15.3 36 17.5 26M7.3 30.2 14.7 24.2M3.6 21 14 20.2M6.8 11.2 15.1 16.8M13.1 5.4 17.6 14.5M31.9 34.6 24.1 25.7M4.2 15.8 14.2 18.5M22.6 3.2 21.3 14M10.9 34.4 16.4 25.5"/></g></svg>`;
const documentIcon = (label = 'PDF') => `<svg class="cl-document-icon" width="34" height="40" viewBox="0 0 34 40" fill="none" aria-hidden="true"><path d="M5 1h16l8 8v27a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" fill="currentColor" fill-opacity=".08" stroke="currentColor"/><path d="M21 1v8h8" stroke="currentColor"/><path d="M8 15h14M8 19h11" stroke="currentColor" stroke-opacity=".5" stroke-linecap="round"/><rect x="0" y="24" width="28" height="12" rx="3" fill="currentColor"/><text x="14" y="32.6" fill="white" text-anchor="middle" font-family="Arial,sans-serif" font-size="7.5" font-weight="700">${label}</text></svg>`;
const folder = () => '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
const lock = () => '<svg width="13" height="13" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="4" y="9" width="12" height="9" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M6.5 9V6a3.5 3.5 0 0 1 7 0v3" stroke="currentColor" stroke-width="1.4"/></svg>';
const iconButton = (h, name, label, extra = '') => `<button class="cl-icon-button ${extra}" type="button" aria-label="${esc(h, label)}">${h.icon(name, 18)}</button>`;
const appbar = (h, title = '') => `<header class="cl-appbar"><span class="cl-wordmark">Claude</span>${title ? `<span class="cl-bar-divider"></span><span class="cl-bar-title">${esc(h, title)}</span>` : ''}<span class="cl-bar-spacer"></span>${iconButton(h, 'more', 'Mais opções')}</header>`;
const send = (h) => `<button class="cl-send" type="button" aria-label="Enviar mensagem">${h.icon('arrow-up', 20)}</button>`;
const controls = (h, model) => `<div class="cl-entry-controls"><div class="cl-control-left">${iconButton(h, 'plus', 'Adicionar arquivos e ferramentas', 'cl-plus-button')}</div><div class="cl-control-right"><button class="cl-model-label" type="button">${esc(h, model)}${h.icon('chevron', 13)}</button>${send(h)}</div></div>`;
const miniComposer = (h, placeholder) => `<div class="cl-mini-composer"><span>${esc(h, placeholder)}</span>${iconButton(h, 'plus', 'Adicionar conteúdo')}${send(h)}</div>`;
const actions = (h) => `<div class="cl-message-actions">${iconButton(h, 'copy', 'Copiar resposta')}${iconButton(h, 'thumbs-up', 'Resposta útil')}${iconButton(h, 'thumbs-down', 'Resposta não útil')}${iconButton(h, 'refresh', 'Tentar novamente')}</div>`;
const stage = (root, h) => root.matches?.('.cl') ? root : h.q(root, '.cl');
const q = (root, h, selector) => h.q(root, selector);
const appear = (el, p, h, options = {}) => {
  if (!el) return;
  h.reveal(el, p, options);
  el.style.visibility = p <= 0 ? 'hidden' : 'visible';
};
const enter = (root, time, h) => appear(stage(root, h), h.progress(time, 0, .55), h, { y: 12, scale: .98 });
const typing = (el, text, time, start, finish, h) => h.type(el, String(text ?? ''), time, start, Math.max(30, [...String(text ?? '')].length / Math.max(.1, finish - start)));
const setText = (el, text) => { if (el) el.textContent = String(text ?? ''); };
const pulse = (time, start, duration) => time < start || time > start + duration ? 0 : Math.sin((time - start) / duration * Math.PI);

export const components = [
  {
    id: 'claude-composer', app: 'claude', name: 'Composer',
    description: 'Uma ideia é digitada no composer e enviada para a conversa.',
    category: 'Conversa', width: 540, height: 350, duration: 8,
    tags: ['prompt', 'mensagem', 'digitar', 'enviar'],
    defaults: { title: 'O que vamos criar hoje?', primary: 'Transforme esta ideia em um roteiro simples e direto.', placeholder: 'Como posso ajudar você?', model: 'Sonnet' },
    fields: [field('title', 'Título'), field('primary', 'Mensagem', 'textarea'), field('placeholder', 'Texto do composer'), field('model', 'Rótulo do modelo')],
    render(p, h) {
      return `<section class="cl cl-composer" aria-label="Composer do Claude"><div class="cl-home-title">${mark(32)}<h2>${esc(h, p.title)}</h2></div><div class="cl-entry cl-main-entry"><div class="cl-entry-message"><span class="cl-entry-text">${esc(h, p.primary)}</span><span class="cl-caret" aria-hidden="true"></span></div>${controls(h, p.model)}</div><div class="cl-sent-message"><span>${esc(h, p.primary)}</span></div><div class="cl-composer-hint">Claude pode cometer erros. Confira as respostas.</div></section>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      const sent = h.progress(time, 4.5, .5);
      const entry = q(root, h, '.cl-entry-text');
      typing(entry, p.primary, time, .65, 3.35, h);
      if (time >= 4.5) setText(entry, p.placeholder);
      entry.classList.toggle('cl-placeholder', time >= 4.5);
      appear(q(root, h, '.cl-sent-message'), sent, h, { y: 14, scale: .96 });
      q(root, h, '.cl-send').style.transform = `scale(${1 - pulse(time, 4.05, .42) * .16})`;
      q(root, h, '.cl-caret').style.opacity = time >= .65 && time < 3.6 && Math.floor(time * 2.8) % 2 === 0 ? '1' : '0';
    }
  },
  {
    id: 'claude-conversation', app: 'claude', name: 'Conversa e resposta digitada',
    description: 'Pergunta em balão neutro e resposta serifada com ações de mensagem.',
    category: 'Conversa', width: 540, height: 510, duration: 9,
    tags: ['resposta', 'chat', 'texto', 'digitar'],
    defaults: { title: 'Uma ideia, bem explicada', primary: 'Como a IA pode ajudar no meu trabalho?', response: 'Comece por uma tarefa que você repete toda semana.\n\nA IA pode organizar as informações, preparar um primeiro rascunho e ajudar na revisão. Você decide o que faz sentido usar.', placeholder: 'Responder ao Claude…' },
    fields: [field('title', 'Título da conversa'), field('primary', 'Pergunta', 'textarea'), field('response', 'Resposta', 'textarea'), field('placeholder', 'Texto do composer')],
    render(p, h) {
      return `<section class="cl cl-conversation" aria-label="Conversa com Claude">${appbar(h, p.title)}<div class="cl-chat-body"><div class="cl-user-message">${esc(h, p.primary)}</div><div class="cl-answer"><div class="cl-answer-brand">${mark(26)}</div><div class="cl-answer-text">${esc(h, p.response)}</div>${actions(h)}</div></div>${miniComposer(h, p.placeholder)}</section>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      appear(q(root, h, '.cl-user-message'), h.progress(time, .25, .5), h, { y: 8, scale: .98 });
      appear(q(root, h, '.cl-answer'), h.progress(time, 1, .5), h, { y: 9, scale: 1 });
      typing(q(root, h, '.cl-answer-text'), p.response, time, 1.3, 6.2, h);
      appear(q(root, h, '.cl-message-actions'), h.progress(time, 6.3, .45), h, { y: 3, scale: 1 });
    }
  },
  {
    id: 'claude-thinking', app: 'claude', name: 'Pensando',
    description: 'Indicador de pensamento com tempo, resumo visual e resposta final.',
    category: 'Raciocínio', width: 540, height: 405, duration: 8,
    tags: ['pensando', 'processando', 'raciocínio', 'carregando'],
    defaults: { primary: 'Organize os próximos passos deste projeto.', step1: 'Lendo o contexto', step2: 'Organizando as informações', step3: 'Preparando a resposta', response: 'Podemos dividir o trabalho em três etapas: entender, priorizar e executar.' },
    fields: [field('primary', 'Pergunta', 'textarea'), field('step1', 'Primeiro status'), field('step2', 'Segundo status'), field('step3', 'Terceiro status'), field('response', 'Resposta', 'textarea')],
    render(p, h) {
      return `<section class="cl cl-thinking" aria-label="Claude pensando">${appbar(h)}<div class="cl-thinking-body"><div class="cl-user-message">${esc(h, p.primary)}</div><div class="cl-thinking-panel"><div class="cl-thinking-header"><span class="cl-thinking-mark">${mark(23)}</span><strong class="cl-thinking-label">Pensando</strong><span class="cl-thinking-time">0s</span><span class="cl-thinking-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="cl-thinking-chevron">${h.icon('chevron', 15)}</span></div><div class="cl-thinking-steps"><div class="cl-thinking-line cl-thinking-line-1"><span></span>${esc(h, p.step1)}</div><div class="cl-thinking-line cl-thinking-line-2"><span></span>${esc(h, p.step2)}</div><div class="cl-thinking-line cl-thinking-line-3"><span></span>${esc(h, p.step3)}</div></div></div><div class="cl-thinking-answer">${esc(h, p.response)}</div></div></section>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      const complete = time >= 4.3;
      appear(q(root, h, '.cl-user-message'), h.progress(time, .15, .45), h, { y: 7, scale: 1 });
      appear(q(root, h, '.cl-thinking-panel'), h.progress(time, .65, .45), h, { y: 8, scale: 1 });
      setText(q(root, h, '.cl-thinking-label'), complete ? 'Pensamento concluído' : 'Pensando');
      setText(q(root, h, '.cl-thinking-time'), `${Math.min(4, Math.max(0, Math.floor(time - .65)))}s`);
      q(root, h, '.cl-thinking-panel').classList.toggle('cl-complete', complete);
      q(root, h, '.cl-thinking-mark').style.transform = `rotate(${complete ? 125 : Math.max(0, time - .65) * 30}deg)`;
      for (let i = 1; i <= 3; i += 1) {
        appear(q(root, h, `.cl-thinking-line-${i}`), h.progress(time, .85 + (i - 1) * .8, .4), h, { y: 5, scale: 1 });
        q(root, h, `.cl-thinking-line-${i} span`).style.backgroundColor = time >= 1.45 + (i - 1) * .8 ? 'var(--cl-accent)' : 'var(--cl-line)';
      }
      const dots = q(root, h, '.cl-thinking-dots');
      dots.style.opacity = complete ? '0' : '1';
      [...dots.children].forEach((dot, i) => { dot.style.opacity = `${.28 + (Math.sin(time * 4 - i * 1.2) + 1) * .36}`; });
      appear(q(root, h, '.cl-thinking-answer'), h.progress(time, 4.45, .45), h, { y: 8, scale: 1 });
      typing(q(root, h, '.cl-thinking-answer'), p.response, time, 4.55, 6.9, h);
    }
  },
  {
    id: 'claude-code', app: 'claude', name: 'Bloco de código',
    description: 'Código digitado em painel com linguagem, copiar e confirmação.',
    category: 'Criação', width: 540, height: 460, duration: 9,
    tags: ['código', 'programação', 'copiar', 'snippet'],
    defaults: { primary: 'Crie uma função para organizar minhas tarefas.', intro: 'Aqui está um exemplo simples que você pode adaptar:', language: 'JavaScript', code: "const tarefas = [\n  { nome: 'Planejar', prioridade: 1 },\n  { nome: 'Revisar', prioridade: 2 }\n];\n\nfunction organizar(lista) {\n  return [...lista].sort(\n    (a, b) => a.prioridade - b.prioridade\n  );\n}", footer: 'Ajuste os critérios para o seu processo.' },
    fields: [field('primary', 'Pedido', 'textarea'), field('intro', 'Introdução', 'textarea'), field('language', 'Linguagem'), field('code', 'Código', 'textarea'), field('footer', 'Texto após o código')],
    render(p, h) {
      return `<section class="cl cl-code" aria-label="Código gerado pelo Claude">${appbar(h)}<div class="cl-code-body"><div class="cl-user-message">${esc(h, p.primary)}</div><div class="cl-code-answer"><div class="cl-code-intro">${mark(23)}<p>${esc(h, p.intro)}</p></div><div class="cl-code-block"><div class="cl-code-toolbar"><span>${esc(h, p.language)}</span><button class="cl-copy-button" type="button" aria-label="Copiar código"><span class="cl-copy-idle">${h.icon('copy', 14)}Copiar</span><span class="cl-copy-done">${h.icon('check', 14)}Copiado</span></button></div><pre><code class="cl-code-text">${esc(h, p.code)}</code></pre></div><p class="cl-code-footer">${esc(h, p.footer)}</p></div></div></section>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      appear(q(root, h, '.cl-code-answer'), h.progress(time, .8, .5), h, { y: 10, scale: 1 });
      typing(q(root, h, '.cl-code-text'), p.code, time, 1.25, 5.5, h);
      appear(q(root, h, '.cl-code-footer'), h.progress(time, 5.6, .45), h, { y: 5, scale: 1 });
      const copied = time >= 6.8;
      q(root, h, '.cl-copy-button').classList.toggle('cl-is-copied', copied);
      q(root, h, '.cl-copy-button').style.transform = `scale(${1 - pulse(time, 6.5, .35) * .08})`;
    }
  },
  {
    id: 'claude-artifact', app: 'claude', name: 'Artifact',
    description: 'Conversa e painel de criação com uma prévia de documento.',
    category: 'Criação', width: 560, height: 585, duration: 10,
    tags: ['artifact', 'documento', 'prévia', 'gerar', 'painel'],
    defaults: { primary: 'Crie um guia visual para tirar uma ideia do papel.', response: 'Vou organizar isso em um guia que você pode editar.', title: 'Da ideia à ação', subtitle: 'Um caminho simples para começar.', step1: 'Defina o objetivo', step2: 'Escolha o primeiro passo', step3: 'Revise e avance', filename: 'Guia de processo' },
    fields: [field('primary', 'Pedido', 'textarea'), field('response', 'Resposta', 'textarea'), field('title', 'Título do artifact'), field('subtitle', 'Subtítulo'), field('step1', 'Primeiro passo'), field('step2', 'Segundo passo'), field('step3', 'Terceiro passo'), field('filename', 'Nome do painel')],
    render(p, h) {
      return `<section class="cl cl-artifact" aria-label="Artifact do Claude">${appbar(h, 'Criando um guia')}<div class="cl-artifact-workspace"><div class="cl-artifact-chat"><div class="cl-user-message">${esc(h, p.primary)}</div><div class="cl-artifact-reply">${mark(25)}<p class="cl-artifact-reply-text">${esc(h, p.response)}</p></div><div class="cl-artifact-file">${h.icon('grid', 20)}<div><strong>${esc(h, p.filename)}</strong><span>Documento · v1</span></div>${h.icon('chevron', 14)}</div><div class="cl-artifact-chat-bottom">${miniComposer(h, 'Responder…')}</div></div><div class="cl-artifact-pane"><div class="cl-artifact-pane-title"><span>${esc(h, p.filename)}</span>${iconButton(h, 'close', 'Fechar painel')}</div><div class="cl-artifact-tabs"><span class="cl-tab-active">Prévia</span><span>Código</span><span class="cl-bar-spacer"></span>${iconButton(h, 'external', 'Abrir prévia')}</div><div class="cl-artifact-loading"><span class="cl-artifact-loading-bar"></span></div><article class="cl-artifact-preview"><div class="cl-artifact-eyebrow">GUIA PRÁTICO</div><div class="cl-artifact-symbol">${mark(44)}</div><h2 class="cl-artifact-document-title">${esc(h, p.title)}</h2><p class="cl-artifact-subtitle">${esc(h, p.subtitle)}</p><div class="cl-artifact-step cl-artifact-step-1"><b>01</b><span>${esc(h, p.step1)}</span></div><div class="cl-artifact-step cl-artifact-step-2"><b>02</b><span>${esc(h, p.step2)}</span></div><div class="cl-artifact-step cl-artifact-step-3"><b>03</b><span>${esc(h, p.step3)}</span></div><div class="cl-artifact-rule"></div></article><footer class="cl-artifact-footer"><span class="cl-artifact-state">Criando…</span><span class="cl-bar-spacer"></span>${iconButton(h, 'copy', 'Copiar artifact')}${iconButton(h, 'download', 'Baixar artifact')}</footer></div></div></section>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      typing(q(root, h, '.cl-artifact-reply-text'), p.response, time, .65, 2.9, h);
      appear(q(root, h, '.cl-artifact-file'), h.progress(time, 2.4, .5), h, { y: 8, scale: .96 });
      appear(q(root, h, '.cl-artifact-pane'), h.progress(time, 1.6, .65), h, { x: 20, y: 0, scale: .98 });
      const loading = h.progress(time, 2, 2.5);
      q(root, h, '.cl-artifact-loading-bar').style.transform = `scaleX(${loading})`;
      q(root, h, '.cl-artifact-loading').style.opacity = time >= 4.8 ? '0' : '1';
      appear(q(root, h, '.cl-artifact-preview'), h.progress(time, 2.5, .8), h, { y: 10, scale: .98 });
      for (let i = 1; i <= 3; i += 1) appear(q(root, h, `.cl-artifact-step-${i}`), h.progress(time, 3.25 + i * .4, .45), h, { y: 8, scale: 1 });
      setText(q(root, h, '.cl-artifact-state'), time >= 5.1 ? 'Versão 1' : 'Criando…');
      q(root, h, '.cl-artifact-symbol').style.transform = `rotate(${-16 + h.ease(h.progress(time, 2.5, 2)) * 16}deg)`;
    }
  },
  {
    id: 'claude-upload', app: 'claude', name: 'Arquivo e upload',
    description: 'Arquivo anexado com progresso, confirmação e uma pergunta contextual.',
    category: 'Contexto', width: 540, height: 400, duration: 8,
    tags: ['arquivo', 'upload', 'pdf', 'anexo', 'contexto'],
    defaults: { title: 'Dê contexto à conversa', filename: 'briefing-do-projeto.pdf', filemeta: 'PDF · 240 KB', primary: 'Resuma este documento e destaque os próximos passos.', model: 'Sonnet', uploaded: 'Pronto para usar' },
    fields: [field('title', 'Título'), field('filename', 'Nome do arquivo'), field('filemeta', 'Tipo e tamanho'), field('primary', 'Mensagem', 'textarea'), field('model', 'Rótulo do modelo'), field('uploaded', 'Status após o upload')],
    render(p, h) {
      return `<section class="cl cl-upload" aria-label="Upload de arquivo no Claude">${appbar(h)}<div class="cl-upload-body"><div class="cl-home-title">${mark(29)}<h2>${esc(h, p.title)}</h2></div><div class="cl-entry cl-upload-entry"><div class="cl-upload-file">${documentIcon()}<div class="cl-file-information"><strong>${esc(h, p.filename)}</strong><span>${esc(h, p.filemeta)}</span><div class="cl-file-progress"><span></span></div></div><span class="cl-file-check">${h.icon('check', 16)}</span>${iconButton(h, 'close', 'Remover arquivo')}</div><div class="cl-entry-message"><span class="cl-upload-text">${esc(h, p.primary)}</span><span class="cl-caret" aria-hidden="true"></span></div>${controls(h, p.model)}</div><div class="cl-upload-status">${h.icon('check', 14)}<span>${esc(h, p.uploaded)}</span></div></div></section>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      appear(q(root, h, '.cl-upload-file'), h.progress(time, .6, .55), h, { y: 9, scale: .96 });
      const progress = h.progress(time, .95, 1.7);
      q(root, h, '.cl-file-progress span').style.transform = `scaleX(${progress})`;
      q(root, h, '.cl-file-progress').style.opacity = time >= 2.9 ? '0' : '1';
      appear(q(root, h, '.cl-file-check'), h.progress(time, 2.65, .3), h, { y: 0, scale: .65 });
      appear(q(root, h, '.cl-upload-status'), h.progress(time, 2.8, .35), h, { y: 5, scale: 1 });
      typing(q(root, h, '.cl-upload-text'), p.primary, time, 3.1, 5.35, h);
      q(root, h, '.cl-caret').style.opacity = time >= 3.1 && time < 5.6 && Math.floor(time * 2.8) % 2 === 0 ? '1' : '0';
      q(root, h, '.cl-send').style.transform = `scale(${1 - pulse(time, 6.15, .4) * .14})`;
    }
  },
  {
    id: 'claude-project', app: 'claude', name: 'Projeto e contexto',
    description: 'Projeto com instruções, conhecimento e composer com contexto.',
    category: 'Contexto', width: 540, height: 570, duration: 9,
    tags: ['projeto', 'instruções', 'conhecimento', 'arquivos'],
    defaults: { title: 'Meu próximo projeto', description: 'Ideias, referências e decisões no mesmo lugar.', instructions: 'Use uma linguagem clara. Priorize exemplos práticos e próximos passos.', file1: 'referencias-do-projeto.pdf', file2: 'notas-e-decisoes.txt', primary: 'Vamos organizar o primeiro passo?', model: 'Sonnet', context: 'Contexto do projeto' },
    fields: [field('title', 'Nome do projeto'), field('description', 'Descrição', 'textarea'), field('instructions', 'Instruções', 'textarea'), field('file1', 'Primeiro arquivo'), field('file2', 'Segundo arquivo'), field('primary', 'Mensagem', 'textarea'), field('model', 'Rótulo do modelo'), field('context', 'Etiqueta de contexto')],
    render(p, h) {
      return `<section class="cl cl-project" aria-label="Projeto do Claude">${appbar(h, 'Projetos')}<div class="cl-project-body"><div class="cl-project-heading"><span class="cl-project-folder">${folder()}</span><span class="cl-private">${lock()}Somente você</span></div><h2>${esc(h, p.title)}</h2><p class="cl-project-description">${esc(h, p.description)}</p><section class="cl-project-card cl-instructions-card"><div class="cl-project-card-title">${h.icon('sliders', 17)}<strong>Instruções</strong>${iconButton(h, 'edit', 'Editar instruções')}</div><p class="cl-project-instructions">${esc(h, p.instructions)}</p></section><section class="cl-project-card cl-knowledge-card"><div class="cl-project-card-title">${folder()}<strong>Conhecimento do projeto</strong>${iconButton(h, 'plus', 'Adicionar conhecimento')}</div><div class="cl-project-file cl-project-file-1">${documentIcon()}<span>${esc(h, p.file1)}</span>${h.icon('check', 15)}</div><div class="cl-project-file cl-project-file-2">${documentIcon('TXT')}<span>${esc(h, p.file2)}</span>${h.icon('check', 15)}</div></section><div class="cl-entry cl-project-entry"><div class="cl-project-context">${folder()}<span>${esc(h, p.context)}</span>${h.icon('check', 13)}</div><div class="cl-entry-message"><span class="cl-project-prompt">${esc(h, p.primary)}</span></div>${controls(h, p.model)}</div></div></section>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      appear(q(root, h, '.cl-instructions-card'), h.progress(time, .6, .5), h, { y: 8, scale: 1 });
      typing(q(root, h, '.cl-project-instructions'), p.instructions, time, .95, 2.65, h);
      appear(q(root, h, '.cl-knowledge-card'), h.progress(time, 1.5, .5), h, { y: 8, scale: 1 });
      appear(q(root, h, '.cl-project-file-1'), h.progress(time, 2.05, .4), h, { x: 8, y: 0, scale: 1 });
      appear(q(root, h, '.cl-project-file-2'), h.progress(time, 2.55, .4), h, { x: 8, y: 0, scale: 1 });
      appear(q(root, h, '.cl-project-context'), h.progress(time, 3.35, .45), h, { y: 4, scale: .98 });
      typing(q(root, h, '.cl-project-prompt'), p.primary, time, 3.9, 5.55, h);
      q(root, h, '.cl-send').style.transform = `scale(${1 - pulse(time, 6.25, .4) * .14})`;
    }
  },
  {
    id: 'claude-model-tools', app: 'claude', name: 'Seleção de modelo e ferramentas',
    description: 'Menu de ferramentas seguido do seletor de modelo e esforço.',
    category: 'Ferramentas', width: 540, height: 555, duration: 8,
    tags: ['modelo', 'ferramentas', 'pesquisa', 'pensamento', 'menu'],
    defaults: { title: 'Como posso ajudar?', primary: 'Pesquise e organize as informações deste projeto.', model: 'Sonnet', model2: 'Opus', model3: 'Haiku', effort: 'Alto', tool: 'Buscar na web' },
    fields: [field('title', 'Título'), field('primary', 'Mensagem', 'textarea'), field('model', 'Modelo selecionado'), field('model2', 'Segundo modelo'), field('model3', 'Terceiro modelo'), field('effort', 'Nível de esforço'), field('tool', 'Ferramenta selecionada')],
    render(p, h) {
      return `<section class="cl cl-model-tools" aria-label="Modelos e ferramentas do Claude">${appbar(h)}<div class="cl-picker-body"><div class="cl-home-title">${mark(30)}<h2>${esc(h, p.title)}</h2></div><div class="cl-picker-menus"><div class="cl-tools-menu"><div class="cl-menu-eyebrow">Adicionar à conversa</div><div class="cl-menu-row">${h.icon('paperclip', 18)}<span>Arquivos ou fotos</span><span class="cl-menu-shortcut">+</span></div><div class="cl-menu-rule"></div><div class="cl-menu-row cl-selected-tool">${h.icon('globe', 18)}<span>${esc(h, p.tool)}</span><span class="cl-tool-check">${h.icon('check', 16)}</span></div><div class="cl-tool-description">Use fontes da web na conversa.</div></div><div class="cl-model-menu"><div class="cl-menu-eyebrow">Modelo</div><div class="cl-menu-row cl-model-row-active"><span class="cl-model-name">${esc(h, p.model)}</span><span class="cl-model-description">Selecionado</span>${h.icon('check', 16)}</div><div class="cl-menu-row"><span class="cl-model-name">${esc(h, p.model2)}</span><span class="cl-model-description">Outro modelo</span></div><div class="cl-menu-row"><span class="cl-model-name">${esc(h, p.model3)}</span><span class="cl-model-description">Outro modelo</span></div><div class="cl-menu-rule"></div><div class="cl-menu-row cl-effort-row">${h.icon('sliders', 17)}<span>Esforço</span><strong>${esc(h, p.effort)}</strong>${h.icon('chevron', 13)}</div><div class="cl-menu-row cl-thinking-toggle-row"><span>Pensamento estendido</span><span class="cl-toggle"><i></i></span></div></div></div><div class="cl-entry cl-picker-composer"><div class="cl-entry-message"><span class="cl-picker-text">${esc(h, p.primary)}</span></div><div class="cl-active-tool">${h.icon('globe', 13)}<span>${esc(h, p.tool)}</span>${h.icon('close', 11)}</div>${controls(h, p.model)}</div><div class="cl-picker-footer">Claude pode cometer erros. Confira as respostas.</div></div></section>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      typing(q(root, h, '.cl-picker-text'), p.primary, time, .7, 2.5, h);
      const tools = h.progress(time, .65, .45) * (1 - h.progress(time, 3.45, .35));
      appear(q(root, h, '.cl-tools-menu'), tools, h, { y: 12, scale: .97 });
      appear(q(root, h, '.cl-model-menu'), h.progress(time, 3.8, .45), h, { y: 12, scale: .97 });
      appear(q(root, h, '.cl-tool-check'), h.progress(time, 1.85, .3), h, { y: 0, scale: .65 });
      appear(q(root, h, '.cl-active-tool'), h.progress(time, 2.1, .35), h, { y: 5, scale: .96 });
      const selected = time >= 1.85;
      q(root, h, '.cl-selected-tool').classList.toggle('cl-tool-enabled', selected);
      q(root, h, '.cl-plus-button').classList.toggle('cl-button-active', time >= .65 && time < 3.8);
      q(root, h, '.cl-model-label').classList.toggle('cl-button-active', time >= 3.8);
      q(root, h, '.cl-toggle').classList.toggle('cl-toggle-on', time >= 5.5);
      q(root, h, '.cl-thinking-toggle-row').classList.toggle('cl-tool-enabled', time >= 5.5);
    }
  }
];
