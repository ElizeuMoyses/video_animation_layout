export const brand = {
  id: 'instagram', name: 'Instagram', color: '#e1306c',
  description: 'Comentários, feed, Reels e conversas em uma variante móvel do Instagram.'
};

const field = (key, label, type = 'text') => ({ key, label, type });
const identityFields = [field('username', 'Nome de usuário')];
const textFields = [field('primary', 'Texto principal', 'textarea')];
const safe = (h, value) => h.esc(value ?? '');
const icon = (h, name, size = 24) => h.icon(name, size);

// Geometrias desenhadas localmente a partir das formas da interface; não são assets oficiais.
function localIcon(name, size = 24) {
  const shapes = {
    camera: '<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/>',
    phone: '<path d="M6.3 3.5 3 5c-.6 7.7 6.3 15 14.7 16l2-3.4-4.5-3-2 2c-3.2-1.5-5.4-3.8-6.8-7l2-1.8z"/>',
    smile: '<circle cx="12" cy="12" r="9"/><path d="M8 15c2.2 2.2 5.8 2.2 8 0"/><circle cx="8.5" cy="9" r=".65" fill="currentColor"/><circle cx="15.5" cy="9" r=".65" fill="currentColor"/>',
    tagged: '<path d="M4 6h5l3-3 3 3h5v15H4z"/><circle cx="12" cy="11" r="2.5"/><path d="M7.5 19v-1a4.5 4.5 0 0 1 9 0v1"/>',
    repost: '<path d="m5 7 3-3 3 3M8 4v12a3 3 0 0 0 3 3h1m7-2-3 3-3-3m3 3V8a3 3 0 0 0-3-3h-1"/>',
    person: '<circle cx="10" cy="8" r="3"/><path d="M3 21v-2a7 7 0 0 1 11-5.7M18 12v8m-4-4h8"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/>',
    sticker: '<path d="M3 3h18v11l-7 7H3zM14 21v-7h7"/><path d="M7 11a5 5 0 0 0 9 0M7 7v1m9-1v1"/>'
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[name] || shapes.camera}</svg>`;
}

function avatar(h, label = 'Elizeu', { face = true, ring = false, small = false } = {}) {
  const initials = String(label).replace(/[^\p{L}\p{N} ]/gu, ' ').trim().split(/\s+/).slice(0, 2).map(v => Array.from(v)[0] || '').join('').toUpperCase().slice(0, 2) || 'IG';
  const presenter = ['elizeu', 'elizeumoyses', 'elizeu flor moyses'].includes(String(label).trim().replace(/^@/, '').toLowerCase());
  return `<span class="ig-avatar${ring ? ' ig-ring' : ''}${small ? ' ig-avatar-small' : ''}">${face && presenter ? h.avatar('Elizeu') : `<span class="ig-initials">${safe(h, initials)}</span>`}</span>`;
}

function button(h, name, label, cls = '', size = 24) {
  return `<button type="button" class="ig-icon-button ${cls}" aria-label="${safe(h, label)}">${icon(h, name, size)}</button>`;
}

function like(h, cls = '', size = 24) {
  return `<button type="button" class="ig-icon-button ig-like ${cls}" aria-label="Curtir" aria-pressed="false">${icon(h, 'heart', size)}<span class="ig-tap" aria-hidden="true"></span></button>`;
}

function nav(h, active = 'home') {
  return `<nav class="ig-nav" aria-label="Navegação do Instagram">${['home', 'video', 'send', 'search'].map(name => button(h, name, { home: 'Início', video: 'Reels', send: 'Mensagens', search: 'Pesquisar' }[name], name === active ? 'is-active' : '', 25)).join('')}<span class="ig-nav-avatar">${avatar(h)}</span></nav>`;
}

function commentRow(h, { username, text, age = '2 h', likes = '128', face = false, cls = '', creator = false }) {
  return `<div class="ig-comment-row ${cls}">${avatar(h, username, { face })}<div class="ig-comment-body"><div class="ig-comment-byline"><strong>${safe(h, username)}</strong>${creator ? '<span class="ig-author">Autor</span>' : ''}<span>${safe(h, age)}</span></div><div class="ig-comment-text">${safe(h, text)}</div><div class="ig-comment-meta"><span class="ig-comment-likes">${safe(h, likes)} curtidas</span><span>Responder</span></div></div><div class="ig-comment-reaction">${like(h, '', 17)}</div></div>`;
}

function photo(h, cls = '') {
  return `<div class="ig-photo ${cls}">${h.avatar('Elizeu')}<span class="ig-photo-shade"></span></div>`;
}

function reveal(root, selector, time, start, duration, h, options = {}) {
  root.querySelectorAll(selector).forEach(el => h.reveal(el, h.ease(h.progress(time, start, duration)), options));
}

function enter(root, time, h) {
  reveal(root, '.ig-surface', time, .05, .6, h, { y: 18, scale: .98 });
}

function applyLike(root, time, start, h) {
  const liked = time >= start;
  const bounce = Math.sin(Math.PI * h.progress(time, start, .34));
  root.querySelectorAll('.ig-like').forEach(el => {
    el.classList.toggle('is-liked', liked);
    el.setAttribute('aria-pressed', String(liked));
    el.setAttribute('aria-label', liked ? 'Descurtir' : 'Curtir');
    el.style.transform = `scale(${1 + bounce * .2})`;
  });
  root.querySelectorAll('.ig-tap').forEach(el => {
    const p = h.progress(time, start - .12, .5);
    el.style.opacity = String(time >= start - .12 && time <= start + .38 ? Math.sin(p * Math.PI) * .45 : 0);
    el.style.transform = `scale(${.45 + p * 1.8})`;
  });
  return liked;
}

function metric(value, increment = false) {
  const clean = String(value ?? '').trim();
  return /^\d+$/.test(clean) ? (Number(clean) + (increment ? 1 : 0)).toLocaleString('pt-BR') : clean;
}

function setText(root, selector, value) {
  root.querySelectorAll(selector).forEach(el => { el.textContent = value; });
}

export const components = [
  {
    id: 'instagram-comment', app: 'instagram', name: 'Comentário isolado', category: 'Comentários',
    description: 'Recorte de comentário com nome, tempo, resposta e curtida animada.',
    width: 520, height: 202, duration: 7, tags: ['comentário', 'curtir', 'recorte'],
    defaults: { username: 'mariana.cria', primary: 'Eu fazia isso na mão todos os dias. Como automatiza? 👀', likes: '128', age: '2 h' },
    fields: [...identityFields, ...textFields, field('likes', 'Curtidas iniciais'), field('age', 'Tempo do comentário')],
    render(p, h) {
      return `<div class="ig ig-comment" role="img" aria-label="Comentário ilustrativo do Instagram"><div class="ig-surface ig-comment-crop">${commentRow(h, { username: p.username, text: p.primary, age: p.age, likes: metric(p.likes), face: false })}<div class="ig-liked-by">${icon(h, 'heart', 11)} Curtido pelo autor</div></div></div>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      const liked = applyLike(root, time, 2.65, h);
      setText(root, '.ig-comment-likes', `${metric(p.likes, liked)} curtidas`);
      reveal(root, '.ig-liked-by', time, 3.1, .35, h, { y: 5, scale: 1 });
    }
  },
  {
    id: 'instagram-replies', app: 'instagram', name: 'Conversa de respostas', category: 'Comentários',
    description: 'Comentário principal e duas respostas, com expansão progressiva da conversa.',
    width: 520, height: 410, duration: 8, tags: ['respostas', 'conversa', 'comentários'],
    defaults: { username: 'mariana.cria', primary: 'Dá para começar sem saber programar?', replyUser: 'elizeumoyses', secondary: 'Dá sim! Comece por uma tarefa pequena e repetitiva.', thirdUser: 'mariana.cria', tertiary: 'Era o incentivo que eu precisava 🙌' },
    fields: [...identityFields, ...textFields, field('replyUser', 'Usuário que responde'), field('secondary', 'Primeira resposta', 'textarea'), field('thirdUser', 'Usuário da segunda resposta'), field('tertiary', 'Segunda resposta', 'textarea')],
    render(p, h) {
      return `<div class="ig ig-replies"><div class="ig-surface ig-thread"><div class="ig-thread-heading">Respostas ${button(h, 'close', 'Fechar respostas', '', 20)}</div>${commentRow(h, { username: p.username, text: p.primary, face: false, likes: '24' })}<div class="ig-thread-link"><span></span><b class="ig-reply-toggle">Ver respostas (2)</b></div><div class="ig-nested ig-reply-one">${commentRow(h, { username: p.replyUser, text: p.secondary, face: true, age: '1 h', likes: '12', creator: true })}</div><div class="ig-nested ig-reply-two">${commentRow(h, { username: p.thirdUser, text: p.tertiary, age: '58 min', likes: '3' })}</div></div></div>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      reveal(root, '.ig-reply-one', time, 1.35, .5, h, { y: 10, scale: 1 });
      reveal(root, '.ig-reply-two', time, 3.3, .5, h, { y: 10, scale: 1 });
      setText(root, '.ig-reply-toggle', time >= 1.35 ? 'Ocultar respostas' : 'Ver respostas (2)');
      const reply = root.querySelector('.ig-reply-one');
      const liked = applyLike(reply, time, 5.4, h);
      setText(reply, '.ig-comment-likes', liked ? '13 curtidas' : '12 curtidas');
    }
  },
  {
    id: 'instagram-comments-panel', app: 'instagram', name: 'Painel de comentários', category: 'Comentários',
    description: 'Folha de comentários com alça, lista, reações rápidas e comentário sendo escrito.',
    width: 430, height: 680, duration: 9, tags: ['painel', 'comentários', 'digitar'],
    defaults: { username: 'elizeumoyses', primary: 'Qual tarefa você automatizaria primeiro?', userA: 'ana.design', commentA: 'Organizar as respostas dos clientes. Leva horas!', userB: 'pedro.dev', commentB: 'Aquela planilha de toda segunda-feira 😅', userC: 'bia.negocios', commentC: 'Salvar e classificar os pedidos que chegam.', secondary: 'Vou mostrar um passo a passo no próximo vídeo.' },
    fields: [...identityFields, ...textFields, field('userA', 'Usuário 1'), field('commentA', 'Comentário 1', 'textarea'), field('userB', 'Usuário 2'), field('commentB', 'Comentário 2', 'textarea'), field('userC', 'Usuário 3'), field('commentC', 'Comentário 3', 'textarea'), field('secondary', 'Novo comentário', 'textarea')],
    render(p, h) {
      return `<div class="ig ig-panel"><div class="ig-surface ig-sheet"><div class="ig-handle"></div><header class="ig-sheet-heading"><span></span><strong>Comentários</strong>${button(h, 'send', 'Compartilhar publicação', '', 22)}</header><div class="ig-comment-list">${commentRow(h, { username: p.username, text: p.primary, face: true, likes: '302', creator: true })}${commentRow(h, { username: p.userA, text: p.commentA, likes: '48', age: '1 h' })}${commentRow(h, { username: p.userB, text: p.commentB, likes: '31', age: '43 min' })}${commentRow(h, { username: p.userC, text: p.commentC, likes: '16', age: '12 min' })}<div class="ig-new-comment">${commentRow(h, { username: p.username, text: p.secondary, face: true, likes: '0', age: 'agora', creator: true })}</div></div><div class="ig-compose-area"><div class="ig-emoji-strip" aria-hidden="true"><span>❤️</span><span>🙌</span><span>🔥</span><span>👏</span><span>😢</span><span>😍</span><span>😮</span><span>😂</span></div><div class="ig-comment-compose">${avatar(h)}<div class="ig-comment-input"><span class="ig-composer-placeholder">Adicione um comentário...</span><span class="ig-typed-comment"></span><span class="ig-type-caret"></span><strong class="ig-publish">Publicar</strong></div></div><div class="ig-home-indicator"></div></div></div></div>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      const sent = time >= 5.8;
      const input = root.querySelector('.ig-typed-comment');
      h.type(input, sent ? '' : String(p.secondary ?? ''), time, 2.05, 22);
      setText(root, '.ig-composer-placeholder', time < 2.05 || sent ? 'Adicione um comentário...' : '');
      root.querySelector('.ig-publish').style.opacity = time > 2.05 && !sent ? '1' : '.4';
      root.querySelector('.ig-type-caret').style.opacity = time >= 2.05 && !sent ? '1' : '0';
      reveal(root, '.ig-new-comment', time, 5.8, .4, h, { y: 12, scale: 1 });
      const firstComment = root.querySelector('.ig-comment-list').querySelector('.ig-comment-row');
      const liked = applyLike(firstComment, time, 7.5, h);
      setText(firstComment, '.ig-comment-likes', liked ? '303 curtidas' : '302 curtidas');
    }
  },
  {
    id: 'instagram-feed-post', app: 'instagram', name: 'Post do feed', category: 'Publicações',
    description: 'Publicação móvel com retrato, legenda, curtida, repost e navegação recente.',
    width: 430, height: 780, duration: 8, tags: ['feed', 'post', 'curtir', 'repost'],
    defaults: { username: 'elizeumoyses', location: 'Florianópolis, Brasil', primary: 'Automatizar é devolver tempo para o que importa.', mediaTitle: 'Menos tarefas.\nMais tempo.', secondary: 'Comece pela tarefa que você repete toda semana.', likes: '1284', comments: 'Ver todos os 42 comentários', age: 'HÁ 2 HORAS' },
    fields: [...identityFields, field('location', 'Localização'), ...textFields, field('mediaTitle', 'Texto sobre a mídia', 'textarea'), field('secondary', 'Complemento da legenda', 'textarea'), field('likes', 'Curtidas iniciais'), field('comments', 'Rótulo dos comentários'), field('age', 'Tempo da publicação')],
    render(p, h) {
      return `<div class="ig ig-feed"><div class="ig-surface ig-phone"><header class="ig-feed-top">${button(h, 'plus', 'Criar publicação')}<span class="ig-wordmark">Instagram</span>${button(h, 'heart', 'Notificações')}</header><div class="ig-post-user">${avatar(h, p.username, { ring: true })}<div><strong>${safe(h, p.username)}</strong><span>${safe(h, p.location)}</span></div>${button(h, 'more', 'Mais opções')}</div><div class="ig-feed-media">${photo(h)}<div class="ig-media-title">${safe(h, p.mediaTitle)}</div><div class="ig-double-heart">${icon(h, 'heart', 100)}</div><span class="ig-carousel-badge">1/3</span></div><div class="ig-post-actions">${like(h, '', 28)}${button(h, 'comment', 'Comentar', '', 27)}<button type="button" class="ig-icon-button" aria-label="Repostar">${localIcon('repost', 26)}</button>${button(h, 'send', 'Compartilhar', '', 27)}<div class="ig-carousel-dots"><i></i><i></i><i></i></div>${button(h, 'bookmark', 'Salvar publicação', 'ig-save', 26)}</div><div class="ig-post-copy"><strong class="ig-feed-likes">${safe(h, metric(p.likes))} curtidas</strong><p><strong>${safe(h, p.username)}</strong> ${safe(h, p.primary)} <span>${safe(h, p.secondary)}</span></p><div class="ig-muted">${safe(h, p.comments)}</div><small>${safe(h, p.age)}</small></div>${nav(h)}</div></div>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      const liked = applyLike(root, time, 2.7, h);
      setText(root, '.ig-feed-likes', `${metric(p.likes, liked)} curtidas`);
      const heart = root.querySelector('.ig-double-heart');
      const grow = h.progress(time, 2.7, .25);
      const fade = h.progress(time, 3.15, .4);
      heart.style.opacity = String(time < 2.7 ? 0 : 1 - fade);
      heart.style.transform = `translate(-50%,-50%) scale(${.55 + h.ease(grow) * .55}) rotate(-12deg)`;
      const save = root.querySelector('.ig-save');
      save.classList.toggle('is-saved', time >= 5.3);
      save.setAttribute('aria-label', time >= 5.3 ? 'Remover dos salvos' : 'Salvar publicação');
    }
  },
  {
    id: 'instagram-reels', app: 'instagram', name: 'Overlay de Reels', category: 'Vídeo',
    description: 'Overlay vertical com Reels e Amigos, ações laterais, autor, áudio e curtida.',
    width: 430, height: 760, duration: 8, tags: ['reels', 'vídeo', 'overlay', 'curtir'],
    defaults: { username: 'elizeumoyses', primary: 'A tarefa era repetitiva. A solução pode ser simples.', commentUser: 'mariana.cria', secondary: 'É esse tipo de automação que eu precisava!', audio: 'elizeumoyses · Áudio original', likes: '2840', comments: '128', shares: '356' },
    fields: [...identityFields, ...textFields, field('commentUser', 'Usuário em destaque'), field('secondary', 'Comentário em destaque', 'textarea'), field('audio', 'Áudio'), field('likes', 'Curtidas iniciais'), field('comments', 'Comentários'), field('shares', 'Compartilhamentos')],
    render(p, h) {
      return `<div class="ig ig-reel"><div class="ig-surface ig-reel-screen">${photo(h)}<div class="ig-reel-top">${button(h, 'plus', 'Criar Reel')}<strong>Reels <span>Amigos <b>👥</b></span></strong>${button(h, 'search', 'Pesquisar Reels')}</div><div class="ig-reel-actions"><div>${like(h, '', 30)}<strong class="ig-reel-likes">${safe(h, metric(p.likes))}</strong></div><div>${button(h, 'comment', 'Comentários', '', 30)}<strong>${safe(h, p.comments)}</strong></div><div><button type="button" class="ig-icon-button" aria-label="Repostar">${localIcon('repost', 29)}</button><strong>Repostar</strong></div><div>${button(h, 'send', 'Compartilhar Reel', '', 30)}<strong>${safe(h, p.shares)}</strong></div>${button(h, 'more', 'Mais opções', '', 24)}<div class="ig-audio-cover">${avatar(h)}</div></div><div class="ig-reel-caption"><div class="ig-reel-author">${avatar(h, p.username, { small: true })}<strong>${safe(h, p.username)}</strong><span class="ig-reel-follow">Seguir</span></div><p>${safe(h, p.primary)}</p><div class="ig-reel-audio">${icon(h, 'music', 13)}<span>${safe(h, p.audio)}</span></div></div><div class="ig-reel-comment">${avatar(h, p.commentUser, { face: false, small: true })}<div><b>${safe(h, p.commentUser)}</b><span>${safe(h, p.secondary)}</span></div>${icon(h, 'heart', 15)}</div><div class="ig-reel-progress"><i></i></div>${nav(h, 'video')}</div></div>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      const liked = applyLike(root, time, 3.5, h);
      setText(root, '.ig-reel-likes', metric(p.likes, liked));
      reveal(root, '.ig-reel-comment', time, 1.65, .5, h, { x: -12, y: 8, scale: .97 });
      const el = root.querySelector('.ig-reel-progress i');
      el.style.transform = `scaleX(${h.progress(time, .5, 7.3)})`;
      const bg = root.querySelector('.ig-photo > .av');
      if (bg) bg.style.transform = `scale(${1.025 + h.progress(time, 0, 8) * .035})`;
    }
  },
  {
    id: 'instagram-dm', app: 'instagram', name: 'Mensagem direta', category: 'Mensagens',
    description: 'Conversa com balões de mensagem, digitação, envio e confirmação de leitura.',
    width: 430, height: 660, duration: 9, tags: ['dm', 'mensagem', 'digitar', 'direct'],
    defaults: { username: 'mariana.cria', displayName: 'Mariana', status: 'Ativo(a) agora', primary: 'Oi! Vi seu vídeo e queria automatizar uma tarefa aqui.', secondary: 'Claro! Me conta qual tarefa você repete todo dia.', tertiary: 'Já te mando um exemplo 🙌', timestamp: 'HOJE, 09:41' },
    fields: [...identityFields, field('displayName', 'Nome da conversa'), field('status', 'Status do contato'), ...textFields, field('secondary', 'Mensagem enviada', 'textarea'), field('tertiary', 'Resposta do contato', 'textarea'), field('timestamp', 'Horário da conversa')],
    render(p, h) {
      return `<div class="ig ig-dm"><div class="ig-surface ig-phone"><header class="ig-dm-header">${button(h, 'arrow-left', 'Voltar')}${avatar(h, p.username, { face: false })}<div><strong>${safe(h, p.displayName)}</strong><small>${safe(h, p.status)}</small></div><button type="button" class="ig-icon-button" aria-label="Ligar">${localIcon('phone', 23)}</button>${button(h, 'video', 'Chamada de vídeo', '', 26)}</header><div class="ig-dm-messages"><div class="ig-dm-identity">${avatar(h, p.username, { face: false })}<strong>${safe(h, p.displayName)}</strong><span>${safe(h, p.username)} · Instagram</span><span class="ig-view-profile">Ver perfil</span></div><time>${safe(h, p.timestamp)}</time><div class="ig-dm-line ig-dm-in">${avatar(h, p.username, { face: false, small: true })}<p>${safe(h, p.primary)}</p></div><div class="ig-dm-line ig-dm-out ig-dm-sent"><p>${safe(h, p.secondary)}</p></div><div class="ig-dm-seen">Visto agora</div><div class="ig-dm-line ig-dm-in ig-dm-last">${avatar(h, p.username, { face: false, small: true })}<p>${safe(h, p.tertiary)}</p></div><div class="ig-dm-typing"><i></i><i></i><i></i></div></div><div class="ig-dm-compose"><button type="button" class="ig-dm-camera" aria-label="Câmera">${localIcon('camera', 23)}</button><span class="ig-dm-input"><span class="ig-dm-placeholder">Mensagem...</span><span class="ig-dm-typed"></span></span><span class="ig-dm-tools">${icon(h, 'mic', 23)}${icon(h, 'image', 24)}${localIcon('sticker', 23)}</span><strong class="ig-dm-send">Enviar</strong></div><div class="ig-home-indicator"></div></div></div>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      const sent = time >= 4.4;
      h.type(root.querySelector('.ig-dm-typed'), sent ? '' : String(p.secondary ?? ''), time, 1.55, 25);
      setText(root, '.ig-dm-placeholder', time < 1.55 || sent ? 'Mensagem...' : '');
      root.querySelector('.ig-dm-tools').style.display = time < 1.55 || sent ? 'flex' : 'none';
      root.querySelector('.ig-dm-send').style.display = time >= 1.55 && !sent ? 'block' : 'none';
      reveal(root, '.ig-dm-sent', time, 4.4, .4, h, { x: 12, y: 8, scale: .95 });
      reveal(root, '.ig-dm-seen', time, 5.1, .3, h, { y: 3, scale: 1 });
      reveal(root, '.ig-dm-last', time, 6.4, .4, h, { x: -8, y: 8, scale: .95 });
      const typing = root.querySelector('.ig-dm-typing');
      typing.style.opacity = time >= 5.35 && time < 6.4 ? '1' : '0';
      typing.querySelectorAll('i').forEach((el, i) => { el.style.transform = `translateY(${-2.5 * Math.max(0, Math.sin((time - 5.35) * 6 - i * .8))}px)`; });
    }
  },
  {
    id: 'instagram-story-reply', app: 'instagram', name: 'Story e resposta', category: 'Stories',
    description: 'Story com barras de progresso, mídia de exemplo e resposta privada animada.',
    width: 430, height: 760, duration: 8, tags: ['story', 'responder', 'mensagem', 'stories'],
    defaults: { username: 'elizeumoyses', age: '23 min', primary: 'Qual tarefa mais toma\no seu tempo hoje?', secondary: 'Conferir a mesma planilha todo dia!', sticker: 'Me conta aqui 👇' },
    fields: [...identityFields, field('age', 'Tempo do Story'), ...textFields, field('sticker', 'Texto complementar'), field('secondary', 'Resposta privada', 'textarea')],
    render(p, h) {
      return `<div class="ig ig-story"><div class="ig-surface ig-story-screen">${photo(h)}<div class="ig-story-bars"><i class="is-done"></i><i><b></b></i><i></i></div><header class="ig-story-header">${avatar(h, p.username, { small: true })}<strong>${safe(h, p.username)}</strong><span>${safe(h, p.age)}</span>${button(h, 'more', 'Opções do Story', '', 22)}${button(h, 'close', 'Fechar Story', '', 25)}</header><div class="ig-story-sticker"><strong>${safe(h, p.primary)}</strong><span>${safe(h, p.sticker)}</span></div><div class="ig-story-reply-note">${icon(h, 'check', 18)} Mensagem enviada</div><div class="ig-story-bottom"><div class="ig-story-input"><span class="ig-story-placeholder">Enviar mensagem...</span><span class="ig-story-typed"></span><span class="ig-story-send">${icon(h, 'send', 20)}</span></div>${like(h, '', 28)}${button(h, 'send', 'Compartilhar Story', '', 28)}</div><div class="ig-home-indicator"></div></div></div>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      const sent = time >= 5.2;
      h.type(root.querySelector('.ig-story-typed'), sent ? '' : String(p.secondary ?? ''), time, 2, 22);
      setText(root, '.ig-story-placeholder', time < 2 || sent ? 'Enviar mensagem...' : '');
      root.querySelector('.ig-story-send').style.display = time >= 2 && !sent ? 'inline-flex' : 'none';
      root.querySelector('.ig-story-bars b').style.transform = `scaleX(${h.progress(time, .4, 7.6)})`;
      reveal(root, '.ig-story-reply-note', time, 5.2, .35, h, { y: 8, scale: .98 });
      applyLike(root, time, 6.4, h);
    }
  },
  {
    id: 'instagram-profile-follow', app: 'instagram', name: 'Perfil e seguir', category: 'Perfil',
    description: 'Perfil com biografia, destaques, grade vertical e mudança de Seguir para Seguindo.',
    width: 430, height: 760, duration: 7, tags: ['perfil', 'seguir', 'grade', 'biografia'],
    defaults: { username: 'elizeumoyses', displayName: 'Elizeu Flor Moyses', primary: 'Tecnologia que simplifica o seu dia.', secondary: 'Automação, IA e processos na prática.\nUm passo de cada vez.', link: 'automatizasoftware.com.br', posts: '148', followers: '2840', following: '812', tileA: 'COMECE\nAQUI', tileB: 'MENOS\nREPETIÇÃO', tileC: 'MAIS\nTEMPO' },
    fields: [...identityFields, field('displayName', 'Nome do perfil'), ...textFields, field('secondary', 'Biografia complementar', 'textarea'), field('link', 'Link exibido'), field('posts', 'Publicações'), field('followers', 'Seguidores iniciais'), field('following', 'Seguindo'), field('tileA', 'Capa 1', 'textarea'), field('tileB', 'Capa 2', 'textarea'), field('tileC', 'Capa 3', 'textarea')],
    render(p, h) {
      return `<div class="ig ig-profile"><div class="ig-surface ig-phone"><header class="ig-profile-header">${button(h, 'arrow-left', 'Voltar')}<strong>${safe(h, p.username)}</strong>${button(h, 'bell', 'Notificações do perfil', '', 23)}${button(h, 'more', 'Mais opções')}</header><div class="ig-profile-main"><div class="ig-profile-overview">${avatar(h, p.username, { ring: true })}<div class="ig-profile-stats"><div><b>${safe(h, p.posts)}</b><span>publicações</span></div><div><b class="ig-follower-count">${safe(h, metric(p.followers))}</b><span>seguidores</span></div><div><b>${safe(h, p.following)}</b><span>seguindo</span></div></div></div><div class="ig-profile-bio"><strong>${safe(h, p.displayName)}</strong><span class="ig-profile-category">Criador de conteúdo digital</span><p>${safe(h, p.primary)}<br>${safe(h, p.secondary)}</p><div class="ig-profile-link">${icon(h, 'link', 14)}${safe(h, p.link)}</div></div><div class="ig-profile-buttons"><button type="button" class="ig-follow-button" aria-pressed="false"><span class="ig-follow-label">Seguir</span><span class="ig-follow-chevron">${icon(h, 'chevron', 13)}</span><span class="ig-tap" aria-hidden="true"></span></button><button type="button">Enviar mensagem</button><button type="button" class="ig-discover" aria-label="Descobrir pessoas">${localIcon('person', 20)}</button></div><div class="ig-highlights">${['Comece aqui', 'Automações', 'Bastidores', 'Dicas'].map((label, i) => `<div>${avatar(h, label, { face: i === 2 })}<span>${label}</span></div>`).join('')}</div></div><div class="ig-profile-tabs"><span class="is-active">${icon(h, 'grid', 23)}</span><span>${icon(h, 'video', 23)}</span><span>${localIcon('repost', 24)}</span><span>${localIcon('tagged', 23)}</span></div><div class="ig-profile-grid">${[p.tileA, p.tileB, p.tileC, p.tileC, p.tileA, p.tileB].map((label, i) => `<div class="ig-grid-tile ig-grid-tile-${i + 1}">${photo(h)}<span>${safe(h, label)}</span>${icon(h, i < 3 ? 'video' : 'grid', 15)}</div>`).join('')}</div>${nav(h)}</div></div>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      const following = time >= 2.75;
      const btn = root.querySelector('.ig-follow-button');
      btn.classList.toggle('is-following', following);
      btn.setAttribute('aria-pressed', String(following));
      setText(root, '.ig-follow-label', following ? 'Seguindo' : 'Seguir');
      root.querySelector('.ig-follow-chevron').style.display = following ? 'inline-flex' : 'none';
      btn.style.transform = `scale(${1 - Math.sin(Math.PI * h.progress(time, 2.65, .35)) * .035})`;
      setText(root, '.ig-follower-count', metric(p.followers, following));
      const tap = btn.querySelector('.ig-tap');
      const progress = h.progress(time, 2.6, .5);
      tap.style.opacity = String(time >= 2.6 && time <= 3.1 ? Math.sin(progress * Math.PI) * .4 : 0);
      tap.style.transform = `scale(${.5 + progress * 2})`;
    }
  }
];
