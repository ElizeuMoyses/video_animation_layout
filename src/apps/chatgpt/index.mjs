/** Local, deterministic ChatGPT illustrations. No account, network or audio API. */
export const brand = {
  id: 'chatgpt',
  name: 'ChatGPT',
  color: '#10a37f',
  description: 'Conversa, criação e ferramentas em uma variante web do ChatGPT.'
};

// Original geometry, including clear space, from the official monoblossom SVG.
// https://learn.chatgpt.com/assets/OpenAI-black-monoblossom.svg — 2026-11-01.
const blossomPath = 'M252.794 108.802C289.191 99.0484 326.265 110.305 351.148 135.135C385.113 126.072 422.85 134.862 449.492 161.505C476.136 188.149 484.925 225.888 475.862 259.85V259.854C500.696 284.735 511.95 321.81 502.198 358.207C492.447 394.602 464.161 421.084 430.215 430.217C421.083 464.162 394.603 492.448 358.206 502.199C321.812 511.951 284.734 500.693 259.852 475.864C225.887 484.927 188.15 476.137 161.507 449.495C134.864 422.851 126.073 385.111 135.136 351.149C110.304 326.266 99.0496 289.192 108.801 252.795C118.552 216.4 146.84 189.918 180.784 180.785C189.917 146.841 216.396 118.553 252.794 108.802ZM374.292 407.145C374.292 411.271 372.092 415.086 368.517 417.148L283.723 466.102C302.487 480.585 327.555 486.459 352.217 479.852C386.997 470.532 410.068 439.312 410.555 405.006V317.717C410.555 315.08 409.125 312.621 406.843 311.303L374.292 292.509V407.145ZM251.868 415.897C248.296 417.959 243.893 417.959 240.317 415.897L155.526 366.942C152.366 390.436 159.811 415.08 177.866 433.136H177.863C203.325 458.594 241.896 462.962 271.85 446.232L347.449 402.586C349.735 401.268 351.148 398.8 351.148 396.163V358.579L251.868 415.897ZM368.602 220.628C366.319 219.309 363.474 219.318 361.191 220.637L328.641 239.431L427.921 296.749C431.496 298.811 433.697 302.627 433.697 306.752V404.661C455.622 395.654 473.244 376.881 479.851 352.218C489.169 317.442 473.668 281.85 444.201 264.274L368.602 220.628ZM177.303 206.34C155.377 215.348 137.756 234.122 131.148 258.783C121.832 293.561 137.331 329.153 166.799 346.727L242.398 390.373C244.68 391.692 247.525 391.684 249.807 390.366L282.357 371.572L183.078 314.253C179.504 312.189 177.303 308.375 177.303 304.251V206.34ZM259.849 279.145V331.858L305.5 358.213L351.15 331.858V279.145L305.5 252.789L259.849 279.145ZM327.276 144.9C308.512 130.418 283.445 124.543 258.782 131.15C224.002 140.471 200.931 171.691 200.445 205.995V293.286C200.445 295.923 201.875 298.381 204.158 299.7L236.707 318.493V203.856C236.707 199.731 238.909 195.916 242.483 193.853L327.276 144.9ZM433.137 177.867C407.675 152.407 369.103 148.038 339.149 164.769L263.55 208.415C261.265 209.734 259.852 212.202 259.852 214.838V252.423L359.132 195.105C362.703 193.041 367.108 193.041 370.682 195.105L455.473 244.06C458.635 220.567 451.189 195.922 433.135 177.867H433.137Z';

export function brandLogo(size = 24) {
  const n = Number(size);
  const safeSize = Number.isFinite(n) ? Math.max(1, Math.min(1024, n)) : 24;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${safeSize}" height="${safeSize}" viewBox="0 0 611 611" fill="none" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="${blossomPath}" fill="currentColor"/></svg>`;
}

const clock = value => Number.isFinite(Number(value)) ? Math.max(0, Number(value)) : 0;
const text = value => String(value ?? '');
const field = (key, label, type = 'text') => ({ key, label, type });
const q = (root, selector, h) => h.q(root, selector);
function opacity(root, selector, value, h) {
  const el = q(root, selector, h);
  if (el) el.style.opacity = String(Math.max(0, Math.min(1, value)));
}
function reveal(root, selector, time, start, duration, h, options = {}) {
  const el = q(root, selector, h);
  if (el) h.reveal(el, h.progress(time, start, duration), options);
}
function setText(root, selector, value, h) {
  const el = q(root, selector, h);
  if (el) el.textContent = text(value);
}
function type(root, selector, value, time, start, duration, h) {
  const el = q(root, selector, h);
  if (el) h.type(el, text(value), time, start, Math.max(30, text(value).length / duration));
}
function enter(root, time, h) {
  reveal(root, '.cg-scene', time, 0, .42, h, { y: 16, scale: .985 });
}
function iconButton(h, icon, label, extra = '') {
  return `<button type="button" tabindex="-1" class="cg-icon-button ${extra}" aria-label="${h.esc(label)}">${h.icon(icon, 21)}</button>`;
}
function waveIcon(size = 22) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" aria-hidden="true"><path d="M4 10v4M8 6v12M12 3v18M16 7v10M20 10v4"/></svg>`;
}
function header(h, label = '') {
  return `<header class="cg-head"><span class="cg-brand-word">ChatGPT<span class="cg-chevron">${h.icon('chevron', 16)}</span></span>${label ? `<span class="cg-head-label">${h.esc(label)}</span>` : iconButton(h, 'edit', 'Nova conversa')}</header>`;
}
function frame(kind, width, height, h, body, label = '') {
  return `<div class="cg cg--${kind}" style="width:${width}px;height:${height}px" role="group" aria-label="Ilustração de interface ChatGPT"><div class="cg-scene">${header(h, label)}${body}</div></div>`;
}
function assistantMark() {
  return `<div class="cg-assistant-mark">${brandLogo(37)}</div>`;
}
function actions(h) {
  return `<div class="cg-actions">${iconButton(h, 'copy', 'Copiar')}${iconButton(h, 'thumbs-up', 'Boa resposta')}${iconButton(h, 'thumbs-down', 'Resposta ruim')}${iconButton(h, 'volume', 'Ler em voz alta')}${iconButton(h, 'share', 'Compartilhar')}${iconButton(h, 'refresh', 'Tentar novamente')}</div>`;
}
function miniComposer(h, placeholder = 'Pergunte alguma coisa') {
  return `<div class="cg-mini-composer"><span class="cg-mini-placeholder">${h.esc(placeholder)}</span><div class="cg-composer-bottom">${iconButton(h, 'plus', 'Adicionar arquivos e ferramentas', 'cg-plus')}<span class="cg-spacer"></span>${iconButton(h, 'mic', 'Ditar')}<button type="button" tabindex="-1" class="cg-voice-button" aria-label="Iniciar voz">${waveIcon(20)}</button></div></div>`;
}
function composerBottom(h, model = 'Automático', className = '') {
  return `<div class="cg-composer-bottom">${iconButton(h, 'plus', 'Adicionar arquivos e ferramentas', 'cg-plus')}<span class="cg-mode-chip ${className}"><span class="cg-mode-text">${h.esc(model)}</span>${h.icon('chevron', 13)}</span><span class="cg-spacer"></span>${iconButton(h, 'mic', 'Ditar')}<button type="button" tabindex="-1" class="cg-send" aria-label="Enviar mensagem">${h.icon('arrow-up', 22)}</button></div>`;
}
function userBubble(h, value, className = '') {
  return `<div class="cg-user ${className}">${h.esc(value)}</div>`;
}
function caret(root, selector, time, start, end, h) {
  opacity(root, selector, time >= start && time < end ? .45 + .55 * Math.pow(Math.sin(time * 5), 2) : 0, h);
}

function codeTokens(value) {
  const code = text(value);
  const pattern = /(\/\/[^\n]*|#[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:async|await|const|let|var|return|function|if|else|for|of|in|import|from|export|def|print|class|True|False|true|false|null|None)\b|\b\d+(?:\.\d+)?\b)/g;
  const tokens = [];
  let last = 0;
  for (const match of code.matchAll(pattern)) {
    if (match.index > last) tokens.push({ value: code.slice(last, match.index), kind: 'plain' });
    const token = match[0];
    const kind = /^(\/\/|#)/.test(token) ? 'comment' : /^["']/.test(token) ? 'string' : /^\d/.test(token) ? 'number' : 'keyword';
    tokens.push({ value: token, kind });
    last = match.index + token.length;
  }
  if (last < code.length) tokens.push({ value: code.slice(last), kind: 'plain' });
  return tokens;
}

export const components = [
  {
    id: 'chatgpt-composer', app: 'chatgpt', name: 'Composer',
    description: 'Prompt digitado no composer e enviado para a conversa.',
    category: 'Conversa', width: 560, height: 350, duration: 8,
    tags: ['prompt', 'digitação', 'composer', 'enviar'],
    defaults: { title: 'Como posso ajudar?', primary: 'Me ajude a automatizar uma tarefa.', placeholder: 'Pergunte alguma coisa', model: 'Automático' },
    fields: [field('title', 'Título'), field('primary', 'Prompt', 'textarea'), field('placeholder', 'Placeholder'), field('model', 'Rótulo do modo')],
    render(p, h) {
      return frame('composer', 560, 350, h, `<div class="cg-start-title"><h2>${h.esc(p.title)}</h2></div><div class="cg-sent-prompt">${userBubble(h, p.primary)}</div><div class="cg-start-composer"><div class="cg-input-line"><span class="cg-composer-placeholder">${h.esc(p.placeholder)}</span><span class="cg-composer-text"></span><span class="cg-caret"></span></div>${composerBottom(h, p.model)}</div><div class="cg-small-note">O ChatGPT pode cometer erros. Confira informações importantes.</div>`);
    },
    tick(root, time, p, h) {
      const t = clock(time);
      enter(root, t, h);
      const sent = h.progress(t, 4.55, .45);
      const title = q(root, '.cg-start-title', h);
      if (title) h.reveal(title, 1 - sent, { y: -10, scale: 1 });
      reveal(root, '.cg-sent-prompt', t, 4.55, .4, h, { y: 20, scale: .98 });
      type(root, '.cg-composer-text', t < 4.55 ? p.primary : '', t, .5, 2.2, h);
      opacity(root, '.cg-composer-placeholder', t < .5 || t >= 4.55 ? 1 : 0, h);
      caret(root, '.cg-caret', t, .5, 3.8, h);
      const send = q(root, '.cg-send', h);
      if (send) {
        send.style.opacity = t >= .7 && t < 4.55 ? '1' : '.4';
        const press = Math.max(0, 1 - Math.abs((t - 4.4) / .15));
        send.style.transform = `scale(${1 - .13 * press})`;
      }
    }
  },
  {
    id: 'chatgpt-conversation', app: 'chatgpt', name: 'Conversa e resposta digitada',
    description: 'Pergunta em balão e resposta em fluxo, com ações ao concluir.',
    category: 'Conversa', width: 560, height: 570, duration: 9,
    tags: ['chat', 'resposta', 'digitação', 'conversa'],
    defaults: { primary: 'Por onde começo a automatizar meu trabalho?', secondary: 'Comece por uma tarefa pequena e repetitiva.\n\n1. Descreva as etapas que você repete.\n2. Separe as entradas e o resultado esperado.\n3. Teste a automação com um exemplo real.\n\nDepois, ajuste o que ainda precisa de você.', placeholder: 'Pergunte alguma coisa' },
    fields: [field('primary', 'Pergunta', 'textarea'), field('secondary', 'Resposta', 'textarea'), field('placeholder', 'Placeholder')],
    render(p, h) {
      return frame('conversation', 560, 570, h, `<div class="cg-chat-content">${userBubble(h, p.primary)}<div class="cg-assistant">${assistantMark()}<div class="cg-response-copy"><p class="cg-response-text"></p><span class="cg-stream-dot"></span></div>${actions(h)}</div></div><div class="cg-bottom-dock">${miniComposer(h, p.placeholder)}</div>`);
    },
    tick(root, time, p, h) {
      const t = clock(time);
      enter(root, t, h);
      reveal(root, '.cg-user', t, .12, .38, h);
      reveal(root, '.cg-assistant', t, .65, .35, h);
      type(root, '.cg-response-text', p.secondary, t, .95, 4.7, h);
      const end = .95 + text(p.secondary).length / Math.max(30, text(p.secondary).length / 4.7);
      opacity(root, '.cg-stream-dot', t >= .95 && t < end ? 1 : 0, h);
      reveal(root, '.cg-actions', t, end + .12, .35, h, { y: 5, scale: 1 });
    }
  },
  {
    id: 'chatgpt-thinking', app: 'chatgpt', name: 'Pensando',
    description: 'Indicador de trabalho com etapas breves e resposta ao final.',
    category: 'Geração', width: 560, height: 560, duration: 8.5,
    tags: ['pensando', 'raciocínio', 'progresso', 'gerando'],
    defaults: { primary: 'Compare as opções antes de sugerir um caminho.', status: 'Pensando', step1: 'Organizando as informações', step2: 'Comparando as opções', step3: 'Preparando a resposta', secondary: 'O melhor primeiro passo é testar uma opção em pequena escala, medir o resultado e só então ampliar.' },
    fields: [field('primary', 'Pergunta', 'textarea'), field('status', 'Status inicial'), field('step1', 'Etapa 1'), field('step2', 'Etapa 2'), field('step3', 'Etapa 3'), field('secondary', 'Resposta', 'textarea')],
    render(p, h) {
      const steps = [p.step1, p.step2, p.step3].map((s, i) => `<div class="cg-think-step" data-cg-step="${i}"><span class="cg-step-node"><span class="cg-step-dot"></span><span class="cg-step-check">${h.icon('check', 12)}</span></span><span>${h.esc(s)}</span></div>`).join('');
      return frame('thinking', 560, 560, h, `<div class="cg-chat-content">${userBubble(h, p.primary)}<div class="cg-assistant">${assistantMark()}<div class="cg-thinking-status"><span class="cg-thinking-orb"></span><span class="cg-status-text">${h.esc(p.status)}</span>${h.icon('chevron', 15)}</div><div class="cg-think-steps">${steps}</div><p class="cg-thinking-answer"></p>${actions(h)}</div></div><div class="cg-bottom-dock">${miniComposer(h)}</div>`);
    },
    tick(root, time, p, h) {
      const t = clock(time);
      enter(root, t, h);
      reveal(root, '.cg-user', t, .1, .3, h);
      reveal(root, '.cg-assistant', t, .6, .3, h);
      setText(root, '.cg-status-text', t < 4.2 ? p.status : 'Resposta pronta', h);
      const orb = q(root, '.cg-thinking-orb', h);
      if (orb) orb.style.transform = `scale(${t < 4.2 ? .83 + .17 * Math.pow(Math.sin(t * 3.5), 2) : 1})`;
      for (let i = 0; i < 3; i++) {
        const sel = `[data-cg-step="${i}"]`;
        reveal(root, sel, t, .85 + i * .85, .35, h, { y: 7, scale: 1 });
        const completed = t >= 1.65 + i * .85;
        opacity(root, `${sel} .cg-step-check`, completed ? 1 : 0, h);
        opacity(root, `${sel} .cg-step-dot`, completed ? 0 : 1, h);
      }
      type(root, '.cg-thinking-answer', p.secondary, t, 4.2, 2.7, h);
      reveal(root, '.cg-actions', t, 7, .3, h, { y: 5, scale: 1 });
    }
  },
  {
    id: 'chatgpt-code', app: 'chatgpt', name: 'Bloco de código',
    description: 'Código digitado com realce de sintaxe e estado de cópia.',
    category: 'Criação', width: 560, height: 660, duration: 9,
    tags: ['código', 'programação', 'copiar', 'javascript'],
    defaults: { primary: 'Crie uma função simples para somar os valores.', intro: 'Você pode começar com esta função:', language: 'javascript', code: 'const valores = [12, 18, 25];\n\nfunction somar(lista) {\n  return lista.reduce(\n    (total, valor) => total + valor, 0\n  );\n}\n\nconsole.log(somar(valores)); // 55', secondary: 'A função percorre a lista e devolve o total.' },
    fields: [field('primary', 'Pergunta', 'textarea'), field('intro', 'Introdução'), field('language', 'Linguagem'), field('code', 'Código', 'textarea'), field('secondary', 'Explicação', 'textarea')],
    render(p, h) {
      const tokens = codeTokens(p.code).map((token, i) => `<span class="cg-syntax-${token.kind}" data-cg-token="${i}">${h.esc(token.value)}</span>`).join('');
      return frame('code', 560, 660, h, `<div class="cg-chat-content">${userBubble(h, p.primary)}<div class="cg-assistant">${assistantMark()}<p class="cg-code-intro">${h.esc(p.intro)}</p><div class="cg-code-panel"><div class="cg-code-toolbar"><span>${h.esc(p.language)}</span><button type="button" tabindex="-1" class="cg-copy-code" aria-label="Copiar código"><span class="cg-copy-icon">${h.icon('copy', 14)}</span><span class="cg-copied-icon">${h.icon('check', 14)}</span><span class="cg-copy-label">Copiar código</span></button></div><pre class="cg-code-body"><code>${tokens}</code><span class="cg-code-caret"></span></pre></div><p class="cg-code-caption">${h.esc(p.secondary)}</p>${actions(h)}</div></div>`);
    },
    tick(root, time, p, h) {
      const t = clock(time);
      enter(root, t, h);
      reveal(root, '.cg-user', t, .1, .3, h);
      reveal(root, '.cg-assistant', t, .55, .3, h);
      const tokens = codeTokens(p.code);
      const rate = Math.max(28, text(p.code).length / 4.4);
      let remaining = Math.max(0, Math.floor((t - .95) * rate));
      for (let i = 0; i < tokens.length; i++) {
        setText(root, `[data-cg-token="${i}"]`, tokens[i].value.slice(0, remaining), h);
        remaining = Math.max(0, remaining - tokens[i].value.length);
      }
      caret(root, '.cg-code-caret', t, .95, .95 + text(p.code).length / rate, h);
      reveal(root, '.cg-code-caption', t, 5.4, .4, h, { y: 7, scale: 1 });
      reveal(root, '.cg-actions', t, 5.75, .3, h, { y: 5, scale: 1 });
      const copied = t >= 6.15;
      setText(root, '.cg-copy-label', copied ? 'Copiado' : 'Copiar código', h);
      opacity(root, '.cg-copy-icon', copied ? 0 : 1, h);
      opacity(root, '.cg-copied-icon', copied ? 1 : 0, h);
    }
  },
  {
    id: 'chatgpt-search', app: 'chatgpt', name: 'Busca e fontes',
    description: 'Atividade de busca, resposta com citações e painel de fontes.',
    category: 'Ferramentas', width: 560, height: 610, duration: 9,
    tags: ['busca', 'pesquisa', 'fontes', 'citações', 'web'],
    defaults: { primary: 'Como pesquisar com fontes no ChatGPT?', secondary: 'Peça uma comparação e confira as fontes citadas. A busca reúne referências para você revisar antes de decidir.', source1: 'Documentação oficial do ChatGPT', domain1: 'learn.chatgpt.com', source2: 'Como usar a busca na web', domain2: 'openai.com' },
    fields: [field('primary', 'Pergunta', 'textarea'), field('secondary', 'Resposta', 'textarea'), field('source1', 'Título da fonte 1'), field('domain1', 'Domínio da fonte 1'), field('source2', 'Título da fonte 2'), field('domain2', 'Domínio da fonte 2')],
    render(p, h) {
      const source = (title, domain, n) => `<div class="cg-source-row" data-cg-source="${n}"><span class="cg-source-favicon">${h.icon('globe', 17)}</span><div class="cg-source-details"><span class="cg-source-domain">${h.esc(domain)}</span><span class="cg-source-title">${h.esc(title)}</span></div><span class="cg-source-number">${n}</span></div>`;
      return frame('search', 560, 610, h, `<div class="cg-chat-content">${userBubble(h, p.primary)}<div class="cg-assistant">${assistantMark()}<div class="cg-search-status"><span class="cg-search-globe">${h.icon('globe', 18)}</span><span class="cg-search-status-text">Pesquisando na web</span>${h.icon('chevron', 13)}</div><div class="cg-search-answer"><p class="cg-search-text"></p><span class="cg-citations"><span>1</span><span>2</span></span></div><button type="button" tabindex="-1" class="cg-sources-trigger"><span class="cg-source-dots"><span>${h.icon('globe', 12)}</span><span>${h.icon('link', 12)}</span></span><span>Fontes</span>${h.icon('chevron', 13)}</button>${actions(h)}</div><div class="cg-sources-panel"><div class="cg-sources-header"><span>Fontes</span>${iconButton(h, 'close', 'Fechar fontes')}</div>${source(p.source1, p.domain1, 1)}${source(p.source2, p.domain2, 2)}</div></div>`);
    },
    tick(root, time, p, h) {
      const t = clock(time);
      enter(root, t, h);
      reveal(root, '.cg-user', t, .1, .3, h);
      reveal(root, '.cg-assistant', t, .55, .3, h);
      setText(root, '.cg-search-status-text', t < 2.3 ? 'Pesquisando na web' : 'Pesquisa concluída', h);
      const globe = q(root, '.cg-search-globe', h);
      if (globe) globe.style.transform = `rotate(${Math.min(t, 2.3) * 90}deg)`;
      type(root, '.cg-search-text', p.secondary, t, 2.1, 3.1, h);
      reveal(root, '.cg-citations', t, 4.9, .25, h, { y: 2, scale: 1 });
      reveal(root, '.cg-sources-trigger', t, 5.1, .3, h, { y: 4, scale: 1 });
      reveal(root, '.cg-actions', t, 5.2, .3, h, { y: 4, scale: 1 });
      reveal(root, '.cg-sources-panel', t, 5.6, .45, h, { x: 20, y: 0, scale: .99 });
      for (let n = 1; n <= 2; n++) reveal(root, `[data-cg-source="${n}"]`, t, 5.75 + n * .12, .35, h, { y: 6, scale: 1 });
    }
  },
  {
    id: 'chatgpt-upload', app: 'chatgpt', name: 'Upload e arquivo',
    description: 'Anexo no composer, progresso de preparo e prompt digitado.',
    category: 'Ferramentas', width: 560, height: 430, duration: 8,
    tags: ['upload', 'arquivo', 'anexo', 'pdf', 'contexto'],
    defaults: { title: 'Adicione contexto à conversa', primary: 'Resuma esse arquivo em três pontos.', filename: 'planejamento.pdf', filemeta: 'PDF · 2 páginas', model: 'Automático' },
    fields: [field('title', 'Título'), field('primary', 'Prompt', 'textarea'), field('filename', 'Nome do arquivo'), field('filemeta', 'Descrição do arquivo'), field('model', 'Rótulo do modo')],
    render(p, h) {
      const fileIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="29" viewBox="0 0 25 29" fill="none" aria-hidden="true"><path d="M5 1h10l7 7v18H5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M15 1v7h7M9 13h9M9 17h9M9 21h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
      return frame('upload', 560, 430, h, `<h2 class="cg-upload-title">${h.esc(p.title)}</h2><div class="cg-upload-composer"><div class="cg-file-card"><span class="cg-file-icon">${fileIcon}</span><div class="cg-file-info"><span class="cg-file-name">${h.esc(p.filename)}</span><span class="cg-file-meta">${h.esc(p.filemeta)}</span></div><span class="cg-upload-progress"><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><circle class="cg-progress-track" cx="12" cy="12" r="9" fill="none" stroke-width="2"/><circle class="cg-progress-ring" cx="12" cy="12" r="9" fill="none" stroke-width="2" stroke-linecap="round" stroke-dasharray="56.55"/></svg></span><span class="cg-file-ready">${h.icon('check', 18)}</span>${iconButton(h, 'close', 'Remover o arquivo', 'cg-file-remove')}</div><div class="cg-upload-input"><span class="cg-upload-text"></span><span class="cg-caret"></span></div>${composerBottom(h, p.model)}</div><div class="cg-upload-status"><span>${h.icon('check', 15)}</span>Arquivo anexado à conversa</div>`);
    },
    tick(root, time, p, h) {
      const t = clock(time);
      enter(root, t, h);
      reveal(root, '.cg-file-card', t, .45, .4, h, { x: -8, y: 5, scale: .97 });
      const progress = h.progress(t, .7, 1.65);
      const ring = q(root, '.cg-progress-ring', h);
      if (ring) ring.style.strokeDashoffset = String(56.55 * (1 - progress));
      opacity(root, '.cg-upload-progress', t < 2.35 ? 1 : 0, h);
      opacity(root, '.cg-file-ready', t >= 2.35 ? 1 : 0, h);
      setText(root, '.cg-file-meta', t < 2.35 ? 'Preparando arquivo…' : p.filemeta, h);
      type(root, '.cg-upload-text', p.primary, t, 1.6, 2.1, h);
      caret(root, '.cg-caret', t, 1.6, 4.2, h);
      reveal(root, '.cg-upload-status', t, 2.55, .35, h, { y: 6, scale: 1 });
      const send = q(root, '.cg-send', h);
      if (send) {
        send.style.opacity = t >= 2.35 ? '1' : '.35';
        send.style.transform = `scale(${1 - .12 * Math.max(0, 1 - Math.abs((t - 5) / .18))})`;
      }
    }
  },
  {
    id: 'chatgpt-voice', app: 'chatgpt', name: 'Conversa por voz',
    description: 'Voz integrada ao chat, transcrição e controles visuais de áudio.',
    category: 'Ferramentas', width: 560, height: 560, duration: 8,
    tags: ['voz', 'áudio', 'microfone', 'live', 'transcrição'],
    defaults: { primary: 'Me ajude a organizar essa ideia.', secondary: 'Claro. Me conte o objetivo e o que você já tem em mente. A partir daí, organizamos os próximos passos.', listening: 'Ouvindo', speaking: 'Respondendo' },
    fields: [field('primary', 'Fala do usuário', 'textarea'), field('secondary', 'Resposta', 'textarea'), field('listening', 'Status ouvindo'), field('speaking', 'Status respondendo')],
    render(p, h) {
      const bars = Array.from({ length: 19 }, (_, i) => `<span class="cg-live-bar" data-cg-bar="${i}"></span>`).join('');
      return frame('voice', 560, 560, h, `<div class="cg-chat-content"><div class="cg-voice-transcript">${userBubble(h, p.primary)}<span class="cg-transcript-label">${h.icon('mic', 12)}Voz</span></div><div class="cg-assistant">${assistantMark()}<p class="cg-voice-response"></p><div class="cg-live-reading"><span class="cg-live-small-wave">${waveIcon(18)}</span><span>Resposta por voz</span></div></div></div><div class="cg-voice-dock"><div class="cg-live-state"><span class="cg-live-state-dot"></span><span class="cg-live-state-text">${h.esc(p.listening)}</span></div><div class="cg-live-controls">${iconButton(h, 'mic', 'Microfone ativo', 'cg-live-mic')}<div class="cg-live-wave" aria-label="Visualização de áudio simulada">${bars}</div>${iconButton(h, 'close', 'Encerrar voz', 'cg-live-end')}</div><div class="cg-voice-hint">Você pode continuar falando ou escrever uma mensagem.</div></div>`, 'Voz');
    },
    tick(root, time, p, h) {
      const t = clock(time);
      enter(root, t, h);
      reveal(root, '.cg-voice-transcript', t, .45, .4, h);
      reveal(root, '.cg-assistant', t, 2.8, .4, h);
      type(root, '.cg-voice-response', p.secondary, t, 3, 3, h);
      reveal(root, '.cg-live-reading', t, 3.1, .3, h, { y: 3, scale: 1 });
      setText(root, '.cg-live-state-text', t < 2.8 ? p.listening : t < 6.5 ? p.speaking : 'Conversa por voz', h);
      const active = t >= .4 && t < 6.5;
      for (let i = 0; i < 19; i++) {
        const bar = q(root, `[data-cg-bar="${i}"]`, h);
        if (bar) {
          const envelope = 1 - .48 * Math.abs((i - 9) / 9);
          const amplitude = active ? (.18 + .82 * Math.pow(Math.sin(t * 4.8 + i * .73), 2)) * envelope : .16;
          bar.style.height = `${5 + 25 * amplitude}px`;
          bar.style.opacity = String(active ? .6 + .4 * amplitude : .45);
        }
      }
      const reading = q(root, '.cg-live-small-wave', h);
      if (reading) reading.style.opacity = String(t < 6.5 ? .6 + .4 * Math.pow(Math.sin(t * 4), 2) : 1);
    }
  },
  {
    id: 'chatgpt-tools', app: 'chatgpt', name: 'Ferramentas e modo de resposta',
    description: 'Abertura do menu de ferramentas e seleção de um modo genérico.',
    category: 'Ferramentas', width: 560, height: 575, duration: 8.5,
    tags: ['menu', 'modelo', 'ferramentas', 'raciocínio', 'seleção'],
    defaults: { title: 'O que vamos fazer hoje?', primary: 'Escolha como trabalhar nesta conversa.', tool1: 'Pesquisar na web', tool2: 'Criar imagem', tool3: 'Pesquisa aprofundada', model: 'Automático', selected: 'Raciocínio' },
    fields: [field('title', 'Título'), field('primary', 'Texto do composer', 'textarea'), field('tool1', 'Ferramenta 1'), field('tool2', 'Ferramenta 2'), field('tool3', 'Ferramenta 3'), field('model', 'Modo inicial'), field('selected', 'Modo selecionado')],
    render(p, h) {
      const tool = (icon, value, cls = '') => `<div class="cg-menu-item ${cls}"><span>${h.icon(icon, 19)}</span><span>${h.esc(value)}</span></div>`;
      return frame('tools', 560, 575, h, `<div class="cg-tools-title"><div class="cg-chat-work"><span class="cg-selected-tab">Chat</span><span>Work</span></div><h2>${h.esc(p.title)}</h2></div><div class="cg-tools-composer"><div class="cg-tools-input">${h.esc(p.primary)}</div>${composerBottom(h, p.model, 'cg-select-mode')}</div><div class="cg-tools-menu"><div class="cg-menu-item cg-menu-upload"><span>${h.icon('paperclip', 19)}</span><span>Adicionar fotos e arquivos</span></div><div class="cg-menu-divider"></div>${tool('globe', p.tool1, 'cg-tool-focus')}${tool('image', p.tool2)}${tool('sparkles', p.tool3)}<div class="cg-menu-divider"></div><div class="cg-menu-item"><span>${h.icon('more', 19)}</span><span>Mais</span><span class="cg-menu-trailing">${h.icon('chevron', 14)}</span></div></div><div class="cg-model-menu"><div class="cg-menu-heading">Modo de resposta</div><div class="cg-model-option cg-model-auto"><div><span class="cg-model-label">${h.esc(p.model)}</span><span class="cg-model-description">Escolhe como responder à tarefa</span></div><span class="cg-model-auto-check">${h.icon('check', 18)}</span></div><div class="cg-model-option"><div><span class="cg-model-label">Rápido</span><span class="cg-model-description">Para perguntas do dia a dia</span></div></div><div class="cg-model-option cg-model-deep"><div><span class="cg-model-label">${h.esc(p.selected)}</span><span class="cg-model-description">Dedica mais tempo à resposta</span></div><span class="cg-model-deep-check">${h.icon('check', 18)}</span></div><div class="cg-menu-divider"></div><div class="cg-model-footnote">Mais opções de resposta</div></div>`);
    },
    tick(root, time, p, h) {
      const t = clock(time);
      enter(root, t, h);
      const toolMenu = q(root, '.cg-tools-menu', h);
      if (toolMenu) {
        const opened = h.progress(t, .7, .35) * (1 - h.progress(t, 3.4, .3));
        h.reveal(toolMenu, opened, { y: 12, scale: .97 });
      }
      reveal(root, '.cg-model-menu', t, 3.75, .35, h, { y: 12, scale: .97 });
      const selected = t >= 5.35;
      const focus = q(root, '.cg-tool-focus', h);
      if (focus) focus.classList.toggle('cg-menu-focused', t >= 1.8 && t < 3.4);
      const deep = q(root, '.cg-model-deep', h);
      if (deep) deep.classList.toggle('cg-menu-focused', t >= 4.8);
      opacity(root, '.cg-model-auto-check', selected ? 0 : 1, h);
      opacity(root, '.cg-model-deep-check', selected ? 1 : 0, h);
      setText(root, '.cg-mode-text', selected ? p.selected : p.model, h);
      const chip = q(root, '.cg-select-mode', h);
      if (chip) chip.classList.toggle('cg-chip-active', t >= 3.6);
    }
  }
];
