/** TikTok — composições locais ilustrativas. Consulte references.md. */
export const brand = {
  id: 'tiktok', name: 'TikTok', color: '#fe2c55',
  description: 'Comentários, vídeos e conversas com o ritmo visual do TikTok.'
};

const field = (key, label, type = 'text') => ({ key, label, type });
const E = (h, value) => h.esc(String(value ?? ''));
const svg = (content, size = 24) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true">${content}</svg>`;
const shapes = {
  heart: '<path d="M12 21S2 15.2 2 8.6C2 5.5 4.2 3.5 7 3.5c2 0 3.7 1 5 2.8 1.3-1.8 3-2.8 5-2.8 2.8 0 5 2 5 5.1C22 15.2 12 21 12 21Z" fill="currentColor"/>',
  heartline: '<path d="M12 20.5S2.5 15 2.5 8.7C2.5 5.9 4.5 4 7 4c2.1 0 3.8 1.2 5 3 1.2-1.8 2.9-3 5-3 2.5 0 4.5 1.9 4.5 4.7 0 6.3-9.5 11.8-9.5 11.8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
  comment: '<path d="M21.5 10.8c0 5.1-4.2 8.5-9.5 8.5l-4.6 2 .7-3C4.1 17.1 2.5 14.5 2.5 11 2.5 6.1 6.7 3 12 3s9.5 3 9.5 7.8Z" fill="currentColor"/><circle cx="7.5" cy="11" r="1.1" fill="var(--tk-dot,#353535)"/><circle cx="12" cy="11" r="1.1" fill="var(--tk-dot,#353535)"/><circle cx="16.5" cy="11" r="1.1" fill="var(--tk-dot,#353535)"/>',
  share: '<path d="m13.5 2.8 9 7.5-9 7.2v-4.3c-5.2 0-8.6 2.2-12 6 1.3-7.2 4.5-10.8 12-11.6V2.8Z" fill="currentColor"/>',
  bookmark: '<path d="M5 2.5h14a1 1 0 0 1 1 1V22l-8-5-8 5V3.5a1 1 0 0 1 1-1Z" fill="currentColor"/>',
  person: '<circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M3.8 22v-1a8.2 8.2 0 0 1 16.4 0v1" stroke="currentColor" stroke-width="1.8"/>',
  friends: '<circle cx="8.6" cy="7" r="3.6" stroke="currentColor" stroke-width="1.8"/><path d="M1.5 21v-1a7.1 7.1 0 0 1 14.2 0v1M16 3.8a3.5 3.5 0 0 1 0 6.8M18 14.1a6 6 0 0 1 4.5 5.9v1" stroke="currentColor" stroke-width="1.8"/>',
  inbox: '<path d="M3 4h18v14h-5l-4 4-4-4H3V4Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M7 9h10M7 13h6" stroke="currentColor" stroke-width="1.8"/>',
  smile: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"/><circle cx="8.5" cy="9.5" r="1" fill="currentColor"/><circle cx="15.5" cy="9.5" r="1" fill="currentColor"/><path d="M7.5 14c1.5 4 7.5 4 9 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  camera: '<path d="M3 6h4l2-3h6l2 3h4v15H3V6Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="13" r="4" stroke="currentColor" stroke-width="1.8"/>',
  grid: '<path d="M4 3h3v5H4zM10.5 3h3v5h-3zM17 3h3v5h-3zM4 10h3v5H4zM10.5 10h3v5h-3zM17 10h3v5h-3zM4 17h3v5H4zM10.5 17h3v5h-3zM17 17h3v5h-3z" fill="currentColor"/>',
  lock: '<path d="M7 10V7a5 5 0 0 1 10 0v3M5 10h14v12H5V10Z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="16" r="1.5" fill="currentColor"/>',
  live: '<path d="M4 6h16v14H4V6Zm4-4 4 4 4-4M7 10v6h3M13 10v6M16 10l1.5 6 1.5-6" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
  down: '<path d="m7 10 5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  play: '<path d="m8 4 12 8-12 8V4Z" fill="currentColor"/>',
  arrow: '<path d="M12 20V4m-6 6 6-6 6 6" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>'
};
const icon = (h, name, size = 24) => shapes[name] ? svg(shapes[name], size) : h.icon(name, size);
const button = (h, name, label, cls = '', size = 24) => `<button type="button" class="tk-icon-button ${cls}" aria-label="${E(h, label)}">${icon(h, name, size)}</button>`;
const avatar = (h, name, own = false, tone = 0) => own
  ? `<span class="tk-avatar tk-avatar-own">${h.avatar(name)}</span>`
  : `<span class="tk-avatar tk-avatar-initials" data-tone="${tone}" aria-label="${E(h, name)}">${E(h, String(name || 'A').replace(/^@/, '').split(/[\s._-]+/).filter(Boolean).slice(0, 2).map(s => s[0]).join('').toUpperCase())}</span>`;
const creator = h => `<span class="tk-creator">Criador</span>`;
function comment(h, { name, text, likes = '128', own = false, reply = false, key = '', tone = 0 }) {
  return `<div class="tk-comment ${reply ? 'tk-comment-reply' : ''}" ${key ? `data-part="${key}"` : ''}>
    ${avatar(h, name, own, tone)}<div class="tk-comment-main"><div class="tk-comment-name">${E(h, name)} ${own ? creator(h) : ''}</div><p class="tk-comment-text">${E(h, text)}</p><div class="tk-comment-meta"><span>há 2 h</span><span>Responder</span></div></div>
    <div class="tk-comment-like"><span class="tk-heart-off">${icon(h, 'heartline', 19)}</span><span class="tk-heart-on">${icon(h, 'heart', 19)}</span><span class="tk-like-count">${E(h, likes)}</span></div>
  </div>`;
}
function composer(h, text = 'Adicionar comentário...', { primary = false, typing = false } = {}) {
  return `<div class="tk-composer">${avatar(h, 'Elizeu', true)}<div class="tk-input ${primary ? 'tk-input-primary' : ''}"><span class="${typing ? 'tk-typed-composer' : ''}">${E(h, text)}</span><span class="tk-input-accessories">${icon(h, 'image', 20)}<span>@</span>${icon(h, 'smile', 23)}</span></div><span class="tk-send">${icon(h, 'arrow', 19)}</span></div>`;
}
function nav(h, active = 'home') {
  return `<nav class="tk-nav" aria-label="Navegação ilustrativa"><span class="${active === 'home' ? 'is-active' : ''}">${icon(h, 'home', 25)}<small>Início</small></span><span>${icon(h, 'friends', 25)}<small>Amigos</small></span><span class="tk-create"><span>${icon(h, 'plus', 23)}</span></span><span class="${active === 'inbox' ? 'is-active' : ''}">${icon(h, 'inbox', 25)}<small>Caixa de entrada</small></span><span class="${active === 'profile' ? 'is-active' : ''}">${icon(h, 'person', 25)}<small>Perfil</small></span></nav>`;
}
function scene(h) {
  return `<div class="tk-scene"><div class="tk-scene-light"></div><div class="tk-scene-photo">${h.avatar('Elizeu')}</div><div class="tk-scene-shade"></div></div>`;
}
function rail(h, p) {
  return `<aside class="tk-rail" aria-label="Ações do vídeo"><div class="tk-rail-avatar">${avatar(h, p.displayName, true)}<span class="tk-follow-plus">${icon(h, 'plus', 15)}</span></div><div class="tk-rail-item tk-video-like">${icon(h, 'heart', 34)}<small class="tk-video-like-count">${E(h, p.likes)}</small></div><div class="tk-rail-item">${icon(h, 'comment', 32)}<small>${E(h, p.comments)}</small></div><div class="tk-rail-item tk-video-save">${icon(h, 'bookmark', 29)}<small>${E(h, p.saves)}</small></div><div class="tk-rail-item">${icon(h, 'share', 32)}<small>${E(h, p.shares)}</small></div><div class="tk-disc">${h.logo('tiktok', 24)}</div></aside>`;
}
function caption(h, p) {
  return `<div class="tk-video-caption"><strong>${E(h, p.displayName)}</strong> <small>@${E(h, p.username)}</small><p>${E(h, p.primary)}</p><span class="tk-music">${icon(h, 'music', 17)}<span>${E(h, p.sound)}</span></span></div>`;
}
function frame(root, time, h, options = {}) {
  const el = root.matches?.('.tk') ? root : h.q(root, '.tk');
  if (el) h.reveal(el, h.ease(h.progress(time, 0, .5)), { y: 18, scale: .98, ...options });
  return el || root;
}
function reveal(root, sel, time, start, duration, h, options) {
  const el = h.q(root, sel);
  if (el) h.reveal(el, h.ease(h.progress(time, start, duration)), options);
  return el;
}
function active(root, sel, value, h) {
  const el = h.q(root, sel);
  if (el) { el.classList.toggle('is-active', value); el.setAttribute('aria-pressed', String(value)); }
  return el;
}
function like(root, time, start, h, before, after) {
  const el = active(root, '.tk-comment-like', time >= start, h);
  if (el) {
    const pulse = h.progress(time, start, .45);
    el.style.transform = `scale(${1 + Math.sin(pulse * Math.PI) * .2})`;
  }
  const count = h.q(root, '.tk-like-count');
  if (count) count.textContent = String(time >= start ? after : before);
}
const videoDefaults = { displayName: 'Elizeu Moyses', username: 'elizeumoyses', primary: 'A automação começa com uma tarefa que se repete. #tecnologia #automacao', sound: 'som original - Elizeu Moyses', likes: '12,8 mil', likesAfter: '12,9 mil', comments: '248', saves: '1.024', shares: '386' };
const videoFields = [field('displayName', 'Nome do criador'), field('username', 'Usuário'), field('primary', 'Legenda do vídeo', 'textarea'), field('sound', 'Crédito de áudio'), field('likes', 'Curtidas iniciais'), field('likesAfter', 'Curtidas após interação'), field('comments', 'Comentários'), field('saves', 'Salvamentos'), field('shares', 'Compartilhamentos')];

export const components = [
  {
    id: 'tiktok-comment', app: 'tiktok', name: 'Comentário', category: 'Comentários',
    description: 'Comentário isolado com avatar, resposta e coração que recebe uma curtida.',
    width: 520, height: 236, duration: 7, tags: ['comentário', 'curtir', 'coração'],
    defaults: { username: 'marina.tech', primary: 'Dá para automatizar isso sem saber programar?', likes: '128', likesAfter: '129', replies: 'Ver 6 respostas' },
    fields: [field('username', 'Usuário'), field('primary', 'Comentário', 'textarea'), field('likes', 'Curtidas iniciais'), field('likesAfter', 'Curtidas finais'), field('replies', 'Texto das respostas')],
    render(p, h) { return `<section class="tk tk-comment-card"><div class="tk-comment-context">${h.logo('tiktok', 20)}<span>Comentários</span>${button(h, 'more', 'Mais opções', '', 21)}</div>${comment(h, { name: p.username, text: p.primary, likes: p.likes })}<div class="tk-view-replies"><span></span>${E(h, p.replies)}${icon(h, 'down', 16)}</div></section>`; },
    tick(root, t, p, h) { frame(root, t, h); like(root, t, 2.6, h, p.likes, p.likesAfter); reveal(root, '.tk-view-replies', t, .4, .5, h, { y: 5, scale: 1 }); }
  },
  {
    id: 'tiktok-thread', app: 'tiktok', name: 'Conversa de respostas', category: 'Comentários',
    description: 'Comentário original e respostas encadeadas, incluindo a identificação do criador.',
    width: 520, height: 500, duration: 8, tags: ['thread', 'respostas', 'criador'],
    defaults: { username: 'marina.tech', primary: 'Qual tarefa você automatizaria primeiro?', creatorName: 'Elizeu Moyses', reply: 'A que mais se repete na sua semana. Comece pequeno.', secondUser: 'lucas.dev', secondReply: 'Aqui seriam os relatórios de segunda-feira.', likes: '84', likesAfter: '85' },
    fields: [field('username', 'Autor do comentário'), field('primary', 'Comentário original', 'textarea'), field('creatorName', 'Nome do criador'), field('reply', 'Resposta do criador', 'textarea'), field('secondUser', 'Segundo usuário'), field('secondReply', 'Segunda resposta', 'textarea'), field('likes', 'Curtidas iniciais'), field('likesAfter', 'Curtidas finais')],
    render(p, h) { return `<section class="tk tk-thread"><div class="tk-sheet-heading"><strong>Respostas</strong>${button(h, 'close', 'Fechar respostas', '', 21)}</div>${comment(h, { name: p.username, text: p.primary, likes: p.likes })}<div class="tk-thread-rule"><span></span>Ver 2 respostas${icon(h, 'down', 15)}</div><div class="tk-reply-one">${comment(h, { name: p.creatorName, text: p.reply, likes: '16', own: true, reply: true })}</div><div class="tk-reply-two">${comment(h, { name: p.secondUser, text: p.secondReply, likes: '7', reply: true, tone: 1 })}</div><div class="tk-thread-footer">Respondendo a <strong>${E(h, p.username)}</strong>${icon(h, 'camera', 18)}</div></section>`; },
    tick(root, t, p, h) { frame(root, t, h); reveal(root, '.tk-reply-one', t, 1.5, .55, h, { y: 12, x: -7, scale: .99 }); reveal(root, '.tk-reply-two', t, 3.4, .55, h, { y: 12, x: -7, scale: .99 }); like(root, t, 4.7, h, p.likes, p.likesAfter); reveal(root, '.tk-thread-footer', t, .5, .4, h, { y: 5, scale: 1 }); }
  },
  {
    id: 'tiktok-comments-panel', app: 'tiktok', name: 'Painel de comentários', category: 'Comentários',
    description: 'Painel deslizante de comentários com compositor, digitação e nova resposta.',
    width: 460, height: 708, duration: 8, tags: ['painel', 'comentários', 'digitar', 'responder'],
    defaults: { count: '248', username: 'marina.tech', primary: 'Explica como você fez essa automação?', secondUser: 'lucas.dev', secondComment: 'Já quero testar no meu trabalho.', creatorName: 'Elizeu Moyses', reply: 'Vou mostrar o passo a passo no próximo vídeo!', input: 'Qual etapa você quer ver primeiro?' },
    fields: [field('count', 'Total de comentários'), field('username', 'Primeiro usuário'), field('primary', 'Primeiro comentário', 'textarea'), field('secondUser', 'Segundo usuário'), field('secondComment', 'Segundo comentário', 'textarea'), field('creatorName', 'Criador'), field('reply', 'Resposta publicada', 'textarea'), field('input', 'Texto digitado', 'textarea')],
    render(p, h) { return `<section class="tk tk-comments-panel"><div class="tk-panel-video">${scene(h)}<div class="tk-panel-video-label">${icon(h, 'play', 16)}<span>${E(h, p.creatorName)}</span></div></div><div class="tk-bottom-sheet"><div class="tk-sheet-handle"></div><div class="tk-sheet-heading"><strong>${E(h, p.count)} comentários</strong>${button(h, 'close', 'Fechar comentários', '', 20)}</div><div class="tk-panel-comments">${comment(h, { name: p.username, text: p.primary, likes: '128' })}<div class="tk-view-replies"><span></span>Ver 6 respostas${icon(h, 'down', 15)}</div>${comment(h, { name: p.secondUser, text: p.secondComment, likes: '43', tone: 1 })}<div class="tk-panel-new">${comment(h, { name: p.creatorName, text: p.reply, likes: '1', own: true })}<span class="tk-published">Agora mesmo</span></div></div><div class="tk-quick-reactions" aria-label="Reações rápidas"><span>❤️</span><span>🙌</span><span>🔥</span><span>👏</span><span>😂</span><span>😍</span><span>😳</span><span>🥰</span></div>${composer(h, '', { typing: true })}</div></section>`; },
    tick(root, t, p, h) { frame(root, t, h); reveal(root, '.tk-bottom-sheet', t, .1, .65, h, { y: 90, scale: 1 }); reveal(root, '.tk-panel-new', t, 4.9, .5, h, { y: 16, scale: 1 }); const el = h.q(root, '.tk-typed-composer'); if (el) { if (t < 1.6 || t >= 4.8) el.textContent = 'Adicionar comentário...'; else h.type(el, p.input, t, 1.6, 28); } active(root, '.tk-send', t >= 2 && t < 4.8, h); active(root, '.tk-composer', t >= 1.6 && t < 4.8, h); }
  },
  {
    id: 'tiktok-video', app: 'tiktok', name: 'Interface de vídeo', category: 'Vídeo',
    description: 'Feed vertical Para você, com ações laterais, legenda, áudio e navegação inferior.',
    width: 440, height: 786, duration: 8, tags: ['vídeo', 'feed', 'para você', 'curtir', 'salvar'],
    defaults: { ...videoDefaults, headline: 'O que você faria com uma hora a mais por dia?' },
    fields: [...videoFields, field('headline', 'Texto sobre o vídeo', 'textarea')],
    render(p, h) { return `<section class="tk tk-video"><div class="tk-video-canvas">${scene(h)}<header class="tk-feed-header">${icon(h, 'live', 24)}<span>Seguindo</span><strong>Para você</strong>${icon(h, 'search', 25)}</header><div class="tk-video-headline">${E(h, p.headline)}</div>${rail(h, p)}${caption(h, p)}<div class="tk-double-heart">${icon(h, 'heart', 104)}</div><div class="tk-video-progress"><span></span></div></div>${nav(h)}</section>`; },
    tick(root, t, p, h) { frame(root, t, h); active(root, '.tk-video-like', t >= 2.7, h); active(root, '.tk-video-save', t >= 5, h); const count = h.q(root, '.tk-video-like-count'); if (count) count.textContent = String(t >= 2.7 ? p.likesAfter : p.likes); const heart = h.q(root, '.tk-double-heart'); if (heart) { const appear = h.ease(h.progress(t, 2.65, .25)); const leave = h.progress(t, 3.25, .45); heart.style.opacity = String(appear * (1 - leave)); heart.style.transform = `translate(-50%,-50%) rotate(-12deg) scale(${.65 + appear * .5 + leave * .1})`; } const bar = h.q(root, '.tk-video-progress span'); if (bar) bar.style.transform = `scaleX(${h.progress(t, 0, 8)})`; const disc = h.q(root, '.tk-disc'); if (disc) disc.style.transform = `rotate(${t * 42}deg)`; }
  },
  {
    id: 'tiktok-dm', app: 'tiktok', name: 'Mensagem direta', category: 'Mensagens',
    description: 'Conversa privada ilustrativa, com digitação, envio e mensagem recebida.',
    width: 440, height: 700, duration: 8, tags: ['dm', 'mensagem', 'conversa', 'digitar'],
    defaults: { username: 'marina.tech', primary: 'Vi seu vídeo de automação. Por onde começo?', reply: 'Escolha uma tarefa repetitiva. Depois, mapeie cada etapa.', finalReply: 'Vou começar pelo relatório semanal. Valeu!', sharedTitle: 'Uma tarefa a menos. Uma hora a mais.', time: 'Hoje 14:32' },
    fields: [field('username', 'Contato'), field('primary', 'Mensagem recebida', 'textarea'), field('reply', 'Sua resposta', 'textarea'), field('finalReply', 'Resposta final', 'textarea'), field('sharedTitle', 'Título do vídeo compartilhado'), field('time', 'Data e hora')],
    render(p, h) { return `<section class="tk tk-dm"><header class="tk-dm-header">${button(h, 'arrow-left', 'Voltar', '', 25)}${avatar(h, p.username, false, 1)}<div><strong>${E(h, p.username)}</strong><small>Amigos</small></div>${button(h, 'more', 'Opções da conversa', '', 24)}</header><div class="tk-chat"><div class="tk-chat-date">${E(h, p.time)}</div><div class="tk-shared-video"><div class="tk-shared-poster">${scene(h)}<span>${icon(h, 'play', 27)}</span></div><div><strong>${E(h, p.sharedTitle)}</strong><small>${h.logo('tiktok', 13)} Elizeu Moyses</small></div></div><div class="tk-chat-message tk-incoming">${avatar(h, p.username, false, 1)}<p>${E(h, p.primary)}</p></div><div class="tk-chat-message tk-outgoing"><p>${E(h, p.reply)}</p></div><div class="tk-read">Visto</div><div class="tk-chat-typing"><i></i><i></i><i></i></div><div class="tk-chat-message tk-final">${avatar(h, p.username, false, 1)}<p>${E(h, p.finalReply)}</p></div></div><div class="tk-dm-composer">${icon(h, 'camera', 25)}<div class="tk-dm-input"><span class="tk-dm-typed"></span>${icon(h, 'smile', 24)}</div><span class="tk-dm-mic">${icon(h, 'mic', 24)}</span><span class="tk-dm-send">${icon(h, 'arrow', 21)}</span></div></section>`; },
    tick(root, t, p, h) { frame(root, t, h); reveal(root, '.tk-incoming', t, .5, .4, h, { y: 9, scale: 1 }); reveal(root, '.tk-outgoing', t, 3.8, .4, h, { x: 14, y: 6, scale: .97 }); reveal(root, '.tk-read', t, 4.4, .3, h, { y: 0, scale: 1 }); reveal(root, '.tk-final', t, 5.6, .45, h, { x: -12, y: 8, scale: .98 }); const typed = h.q(root, '.tk-dm-typed'); if (typed) { if (t < 1.2 || t >= 3.8) typed.textContent = 'Envie uma mensagem...'; else h.type(typed, p.reply, t, 1.2, 27); } active(root, '.tk-dm-composer', t >= 1.2 && t < 3.8, h); const typing = h.q(root, '.tk-chat-typing'); if (typing) typing.style.opacity = t >= 4.5 && t < 5.6 ? '1' : '0'; const dots = root.querySelectorAll('.tk-chat-typing i'); dots.forEach((dot, i) => { dot.style.transform = `translateY(${-Math.max(0, Math.sin(t * 8 - i)) * 3}px)`; }); }
  },
  {
    id: 'tiktok-search', app: 'tiktok', name: 'Busca', category: 'Descoberta',
    description: 'Termo digitado na pesquisa e resultados em grade, com conta e sugestões.',
    width: 460, height: 680, duration: 8, tags: ['busca', 'pesquisa', 'resultados', 'descoberta'],
    defaults: { query: 'automação no trabalho', primary: 'Uma tarefa a menos na sua rotina', secondTitle: 'Comece por esta automação simples', username: 'elizeumoyses', displayName: 'Elizeu Moyses', followers: '12,8 mil seguidores', suggestion: 'automação para iniciantes', firstViews: '48,2 mil', secondViews: '21,6 mil' },
    fields: [field('query', 'Termo de busca'), field('primary', 'Primeiro resultado', 'textarea'), field('secondTitle', 'Segundo resultado', 'textarea'), field('username', 'Usuário'), field('displayName', 'Nome'), field('followers', 'Seguidores'), field('suggestion', 'Pesquisa sugerida'), field('firstViews', 'Visualizações do primeiro vídeo'), field('secondViews', 'Visualizações do segundo vídeo')],
    render(p, h) { return `<section class="tk tk-search"><header class="tk-search-header">${icon(h, 'arrow-left', 24)}<div class="tk-search-input">${icon(h, 'search', 19)}<span class="tk-search-typed"></span>${icon(h, 'close', 16)}</div><strong>Pesquisar</strong></header><div class="tk-search-tabs"><strong>Principais</strong><span>Usuários</span><span>Vídeos</span><span>Sons</span><span>LIVE</span></div><div class="tk-search-body"><div class="tk-search-suggestions"><span>${icon(h, 'search', 19)}<span>${E(h, p.query)}</span>${icon(h, 'external', 17)}</span><span>${icon(h, 'search', 19)}<span>${E(h, p.suggestion)}</span>${icon(h, 'external', 17)}</span></div><div class="tk-search-results"><div class="tk-search-account">${avatar(h, p.displayName, true)}<div><strong>${E(h, p.displayName)}</strong><span>@${E(h, p.username)}</span><small>${E(h, p.followers)}</small></div><span class="tk-small-follow">Seguir</span></div><div class="tk-search-grid">${[0, 1].map(i => `<article class="tk-result"><div class="tk-result-poster" data-tone="${i}">${scene(h)}<span class="tk-result-label">${E(h, i ? 'COMECE PELO SIMPLES' : 'GANHE TEMPO')}</span><span class="tk-result-views">${icon(h, 'play', 14)}${E(h, i ? p.secondViews : p.firstViews)}</span></div><p>${E(h, i ? p.secondTitle : p.primary)}</p><span class="tk-result-user">${avatar(h, p.displayName, true)}${E(h, p.username)}<span>${icon(h, 'heartline', 13)}${i ? '842' : '2.103'}</span></span></article>`).join('')}</div><div class="tk-search-related"><strong>As pessoas também pesquisam</strong><span>${icon(h, 'search', 16)}${E(h, p.suggestion)}</span></div></div></div>${nav(h)}</section>`; },
    tick(root, t, p, h) { frame(root, t, h); const typed = h.q(root, '.tk-search-typed'); if (typed) h.type(typed, p.query, t, .4, 22); const suggestions = h.q(root, '.tk-search-suggestions'); if (suggestions) { suggestions.style.opacity = t >= 2.3 ? '0' : '1'; suggestions.style.visibility = t >= 2.3 ? 'hidden' : 'visible'; } reveal(root, '.tk-search-results', t, 2.3, .5, h, { y: 14, scale: 1 }); }
  },
  {
    id: 'tiktok-profile-follow', app: 'tiktok', name: 'Perfil e seguir', category: 'Perfil',
    description: 'Perfil de criador com estatísticas, bio, grade de vídeos e confirmação de seguir.',
    width: 440, height: 740, duration: 7, tags: ['perfil', 'seguir', 'criador', 'bio'],
    defaults: { displayName: 'Elizeu Moyses', username: 'elizeumoyses', primary: 'Tecnologia para simplificar o trabalho.\nMenos repetição. Mais tempo para criar.', following: '186', followers: '12,8 mil', likes: '84,2 mil', link: 'automatizasoftware.com.br', firstTitle: 'AUTOMATIZE', secondTitle: 'GANHE TEMPO', thirdTitle: 'COMECE AQUI' },
    fields: [field('displayName', 'Nome exibido'), field('username', 'Usuário'), field('primary', 'Bio', 'textarea'), field('following', 'Seguindo'), field('followers', 'Seguidores'), field('likes', 'Curtidas'), field('link', 'Link exibido'), field('firstTitle', 'Primeira miniatura'), field('secondTitle', 'Segunda miniatura'), field('thirdTitle', 'Terceira miniatura')],
    render(p, h) { return `<section class="tk tk-profile"><header class="tk-profile-header">${icon(h, 'arrow-left', 24)}<strong>${E(h, p.displayName)}</strong>${icon(h, 'bell', 23)}${icon(h, 'share', 22)}</header><div class="tk-profile-info">${avatar(h, p.displayName, true)}<strong class="tk-profile-handle">@${E(h, p.username)}</strong><div class="tk-profile-stats"><span><strong>${E(h, p.following)}</strong><small>Seguindo</small></span><span><strong>${E(h, p.followers)}</strong><small>Seguidores</small></span><span><strong>${E(h, p.likes)}</strong><small>Curtidas</small></span></div><div class="tk-profile-actions"><button type="button" class="tk-follow-button"><span class="tk-follow-before">Seguir</span><span class="tk-follow-after">${icon(h, 'check', 17)}Seguindo</span></button><button type="button" class="tk-message-button">Mensagem</button><span class="tk-profile-drop">${icon(h, 'down', 18)}</span></div><p class="tk-profile-bio">${E(h, p.primary)}</p><span class="tk-profile-link">${icon(h, 'link', 16)}${E(h, p.link)}</span></div><div class="tk-profile-tabs"><span class="is-active">${icon(h, 'grid', 22)}</span><span>${icon(h, 'lock', 21)}</span><span>${icon(h, 'heartline', 23)}</span></div><div class="tk-profile-grid">${[p.firstTitle, p.secondTitle, p.thirdTitle].map((text, i) => `<div class="tk-profile-tile" data-tone="${i}">${scene(h)}${i === 0 ? '<span class="tk-pinned">Fixado</span>' : ''}<strong>${E(h, text)}</strong><small>${icon(h, 'play', 13)}${['48,2 mil', '21,6 mil', '18,9 mil'][i]}</small></div>`).join('')}</div>${nav(h, 'profile')}</section>`; },
    tick(root, t, p, h) { frame(root, t, h); const el = active(root, '.tk-follow-button', t >= 2.8, h); if (el) { const pulse = h.progress(t, 2.8, .4); el.style.transform = `scale(${1 - Math.sin(pulse * Math.PI) * .045})`; } reveal(root, '.tk-profile-grid', t, .3, .5, h, { y: 13, scale: 1 }); }
  },
  {
    id: 'tiktok-video-reply', app: 'tiktok', name: 'Resposta a comentário em vídeo', category: 'Vídeo',
    description: 'Sticker de comentário sobre o vídeo de resposta, com balão, avatar e legenda.',
    width: 460, height: 760, duration: 8, tags: ['resposta em vídeo', 'sticker', 'comentário', 'overlay'],
    defaults: { ...videoDefaults, commenter: 'marina.tech', comment: 'Você pode mostrar isso na prática?', primary: 'Respondendo a @marina.tech: vamos por partes. #automacao', answer: 'Primeiro, escolha uma tarefa que você repete toda semana.' },
    fields: [field('commenter', 'Autor do comentário'), field('comment', 'Comentário no sticker', 'textarea'), field('answer', 'Legenda da resposta', 'textarea'), ...videoFields],
    render(p, h) { return `<section class="tk tk-video tk-video-reply"><div class="tk-video-canvas">${scene(h)}<header class="tk-reply-header">${icon(h, 'arrow-left', 24)}<span>Resposta em vídeo</span>${icon(h, 'search', 24)}</header><div class="tk-reply-sticker">${avatar(h, p.commenter)}<div><span>Responder ao comentário de ${E(h, p.commenter)}</span><strong>${E(h, p.comment)}</strong></div></div><div class="tk-answer-caption"><span>${E(h, p.answer)}</span></div>${rail(h, p)}${caption(h, p)}<div class="tk-video-progress"><span></span></div></div></section>`; },
    tick(root, t, p, h) { frame(root, t, h); reveal(root, '.tk-reply-sticker', t, .25, .55, h, { y: -16, x: -4, scale: .92 }); reveal(root, '.tk-answer-caption', t, 1.8, .4, h, { y: 10, scale: .97 }); const bar = h.q(root, '.tk-video-progress span'); if (bar) bar.style.transform = `scaleX(${h.progress(t, 0, 8)})`; const disc = h.q(root, '.tk-disc'); if (disc) disc.style.transform = `rotate(${t * 42}deg)`; active(root, '.tk-video-like', t >= 4.3, h); const count = h.q(root, '.tk-video-like-count'); if (count) count.textContent = String(t >= 4.3 ? p.likesAfter : p.likes); }
  }
];