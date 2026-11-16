/** WhatsApp — composições locais ilustrativas, sem assets oficiais. Consulte references.md. */
export const brand = {
  id: 'whatsapp', name: 'WhatsApp', color: '#25d366',
  description: 'Conversas, áudios, grupos e mensagens automáticas com a cara do WhatsApp.'
};

const field = (key, label, type = 'text') => ({ key, label, type });
const E = (h, value) => h.esc(String(value ?? ''));
const svg = (content, size = 24, extra = '') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true" ${extra}>${content}</svg>`;
const shapes = {
  back: '<path d="M15 5 8 12l7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  video: '<path d="M3 7h12v10H3zM15 10.5 21 7v10l-6-3.5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  phone: '<path d="M6.3 3.5 3.5 5c-.5 7.5 6.5 15 15 15.5l1.5-2.8-4.4-2.7-2 1.7c-2.8-1.3-4.6-3.2-6-6l1.7-2z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  phoneFill: '<path d="M6.3 3.5 3.5 5c-.5 7.5 6.5 15 15 15.5l1.5-2.8-4.4-2.7-2 1.7c-2.8-1.3-4.6-3.2-6-6l1.7-2z" fill="currentColor"/>',
  more: '<circle cx="12" cy="5" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="19" r="1.6" fill="currentColor"/>',
  smile: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"/><circle cx="8.8" cy="9.8" r="1.1" fill="currentColor"/><circle cx="15.2" cy="9.8" r="1.1" fill="currentColor"/><path d="M8 14.2c2.2 2.6 5.8 2.6 8 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  clip: '<path d="m20 11.5-8 8a5 5 0 0 1-7.1-7.1l8.6-8.6a3.4 3.4 0 0 1 4.8 4.8l-8.5 8.5a1.7 1.7 0 0 1-2.4-2.4l7.8-7.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  camera: '<path d="M3.5 7.5h4l1.8-2.5h5.4l1.8 2.5h4v11h-17z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.6" stroke="currentColor" stroke-width="1.7"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  send: '<path d="M4 4.5 21 12 4 19.5l2.2-7.5z" fill="currentColor"/><path d="M6.2 12H13" stroke="var(--wa-send-cut,#fff)" stroke-width="1.6" stroke-linecap="round"/>',
  play: '<path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/>',
  pause: '<path d="M7.5 5h3v14h-3zM13.5 5h3v14h-3z" fill="currentColor"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="m15.5 15.5 5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  doc: '<path d="M6 2.5h8.5L19 7v14.5H6z" fill="currentColor" opacity=".14"/><path d="M6 2.5h8.5L19 7v14.5H6zM14.5 2.5V7H19" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  download: '<path d="M12 4v11m-4.5-4.5L12 15l4.5-4.5M5 19.5h14" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
  check: '<path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  speaker: '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  mute: '<rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M4 4l16 16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  link: '<path d="m10 14 4-4M8.5 16.5l-1.8 1.8a3.5 3.5 0 0 1-5-5l3.5-3.5a3.5 3.5 0 0 1 5 0M15.5 7.5l1.8-1.8a3.5 3.5 0 0 1 5 5l-3.5 3.5a3.5 3.5 0 0 1-5 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  reply: '<path d="M10 6 4 12l6 6M4.5 12H14a6 6 0 0 1 6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  group: '<circle cx="9" cy="8.5" r="3.4" fill="currentColor"/><path d="M2.5 19.5a6.5 6.5 0 0 1 13 0z" fill="currentColor"/><circle cx="17" cy="9" r="2.6" fill="currentColor" opacity=".7"/><path d="M15.8 14a5 5 0 0 1 6 5.5h-4.6" fill="currentColor" opacity=".7"/>',
  lock: '<rect x="5.5" y="10.5" width="13" height="10" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" stroke="currentColor" stroke-width="1.6"/>',
  newchat: '<path d="M12 3.5a8.5 8.5 0 0 0-7.4 12.7L3.5 20.5l4.4-1.1A8.5 8.5 0 1 0 12 3.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 8.5v7M8.5 12h7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  store: '<path d="M4 9h16l-1.4-4.5H5.4zM5 9v10.5h14V9M9.5 19.5V14h5v5.5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>'
};
const icon = (name, size = 24, extra = '') => svg(shapes[name] || shapes.smile, size, extra);
const ticks = (cls = '') => `<span class="wa-ticks ${cls}"><svg width="17" height="11" viewBox="0 0 17 11" fill="none" aria-hidden="true"><path class="wa-tick-1" d="m1 6 3.2 3.2L11 2.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path class="wa-tick-2" d="m6.2 9.2.4.4L13.5 2.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;
const tones = ['#5f8f7f', '#7c6fb0', '#c0784a', '#4f86b8', '#b05f86', '#6f9a3c'];
const toneOf = name => tones[[...String(name)].reduce((s, ch) => s + ch.codePointAt(0), 0) % tones.length];
const isPresenter = name => ['elizeu', 'elizeu moyses', 'elizeumoyses', 'você', 'voce'].includes(String(name).trim().replace(/^@/, '').toLowerCase());
const initials = name => String(name || 'W').replace(/[^\p{L}\p{N} ]/gu, ' ').trim().split(/\s+/).slice(0, 2).map(v => Array.from(v)[0] || '').join('').toUpperCase() || 'W';
function avatar(h, name, { size = 40, group = false } = {}) {
  if (isPresenter(name)) return `<span class="wa-avatar" style="width:${size}px;height:${size}px">${h.avatar('Elizeu')}</span>`;
  if (group) return `<span class="wa-avatar wa-avatar-group" style="width:${size}px;height:${size}px">${icon('group', Math.round(size * .55))}</span>`;
  return `<span class="wa-avatar wa-avatar-initials" style="width:${size}px;height:${size}px;background:${toneOf(name)};font-size:${Math.round(size * .36)}px">${E(h, initials(name))}</span>`;
}
const btn = (name, label, size = 22, cls = '') => `<button type="button" class="wa-icon-button ${cls}" aria-label="${label}">${icon(name, size)}</button>`;
function header(h, { name, status, group = false, business = false }) {
  return `<header class="wa-header">${btn('back', 'Voltar', 24)}${avatar(h, name, { size: 38, group })}<div class="wa-header-id"><strong>${E(h, name)}${business ? `<span class="wa-biz-badge">${icon('check', 10)}</span>` : ''}</strong><small class="wa-status">${E(h, status)}</small></div>${btn('video', 'Chamada de vídeo', 23)}${btn('phone', 'Ligar', 21)}${btn('more', 'Mais opções', 21)}</header>`;
}
function composer(h, { placeholder = 'Mensagem' } = {}) {
  return `<div class="wa-composer"><div class="wa-input">${icon('smile', 23)}<span class="wa-input-text"><span class="wa-placeholder">${E(h, placeholder)}</span><span class="wa-typed"></span><span class="wa-caret"></span></span><span class="wa-input-tools">${icon('clip', 21)}${icon('camera', 22)}</span></div><button type="button" class="wa-mic" aria-label="Gravar áudio"><span class="wa-mic-icon">${icon('mic', 22)}</span><span class="wa-send-icon">${icon('send', 21)}</span></button></div>`;
}
const bubble = (h, { dir = 'in', text = '', time = '09:41', cls = '', author = '', tick = true }) => `<div class="wa-row wa-row-${dir} ${cls}"><div class="wa-bubble wa-${dir}">${author ? `<b class="wa-author" style="color:${toneOf(author)}">${E(h, author)}</b>` : ''}<span class="wa-text">${E(h, text)}</span><span class="wa-meta">${E(h, time)}${dir === 'out' && tick ? ticks() : ''}</span></div></div>`;
const wave = (n = 34, seed = 3) => Array.from({ length: n }, (_, i) => `<i style="height:${Math.round(5 + Math.abs(Math.sin(i * 1.7 + seed) * 13) + Math.abs(Math.cos(i * .6 + seed)) * 6)}px"></i>`).join('');
const day = label => `<div class="wa-day"><span>${label}</span></div>`;

function stage(root, h) { return root.matches?.('.wa') ? root : h.q(root, '.wa'); }
function enter(root, time, h) { const el = h.q(root, '.wa-surface'); if (el) h.reveal(el, h.ease(h.progress(time, .05, .55)), { y: 16, scale: .98 }); }
function show(root, sel, time, start, dur, h, opts = { y: 10, scale: .96 }) { root.querySelectorAll(sel).forEach(el => { const p = h.progress(time, start, dur); h.reveal(el, p, opts); el.style.visibility = p <= 0 ? 'hidden' : 'visible'; }); }
function setTicks(el, time, delivered, read) {
  if (!el) return;
  el.classList.toggle('is-delivered', time >= delivered);
  el.classList.toggle('is-read', time >= read);
}
function typeInto(root, h, text, time, start, end, sent) {
  const typed = h.q(root, '.wa-typed');
  const rate = Math.max(14, [...String(text)].length / Math.max(.2, end - start));
  h.type(typed, sent ? '' : String(text ?? ''), time, start, rate);
  const active = time >= start && !sent;
  h.q(root, '.wa-placeholder').style.display = active ? 'none' : 'inline';
  h.q(root, '.wa-caret').style.opacity = active && Math.floor(time * 2.6) % 2 === 0 ? '1' : '0';
  const mic = h.q(root, '.wa-mic');
  mic.classList.toggle('is-send', active);
  return active;
}
const pulse = (time, start, dur) => time < start || time > start + dur ? 0 : Math.sin((time - start) / dur * Math.PI);

export const components = [
  {
    id: 'whatsapp-chat', app: 'whatsapp', name: 'Conversa', category: 'Conversas',
    description: 'Contato digitando, mensagens chegando, resposta digitada e tiques que ficam azuis.',
    width: 430, height: 620, duration: 9, tags: ['conversa', 'mensagem', 'digitar', 'lida', 'tiques'],
    defaults: { displayName: 'Mariana', status: 'online', primary: 'Oi! Vi seu vídeo das telas animadas 😮', secondary: 'Consegue me mandar o pacote?', tertiary: 'Claro! Já te mando o link 👇', timeIn: '09:41', timeOut: '09:42' },
    fields: [field('displayName', 'Nome do contato'), field('status', 'Status'), field('primary', 'Mensagem recebida 1', 'textarea'), field('secondary', 'Mensagem recebida 2', 'textarea'), field('tertiary', 'Sua resposta', 'textarea'), field('timeIn', 'Horário recebido'), field('timeOut', 'Horário enviado')],
    render(p, h) {
      return `<div class="wa wa-chat"><div class="wa-surface wa-phone">${header(h, { name: p.displayName, status: p.status })}<div class="wa-wall"><div class="wa-thread">${day('HOJE')}${bubble(h, { text: p.primary, time: p.timeIn, cls: 'wa-m1' })}${bubble(h, { text: p.secondary, time: p.timeIn, cls: 'wa-m2' })}${bubble(h, { dir: 'out', text: p.tertiary, time: p.timeOut, cls: 'wa-m3' })}</div></div>${composer(h)}</div></div>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      show(root, '.wa-m1', time, .45, .35, h);
      const typingContact = time >= 1.1 && time < 2.3;
      h.q(root, '.wa-status').textContent = typingContact ? 'digitando…' : String(p.status ?? '');
      h.q(root, '.wa-status').classList.toggle('is-typing', typingContact);
      show(root, '.wa-m2', time, 2.3, .35, h);
      const sent = time >= 5.5;
      typeInto(root, h, p.tertiary, time, 3, 5.1, sent);
      show(root, '.wa-m3', time, 5.5, .35, h, { x: 10, y: 8, scale: .95 });
      setTicks(h.q(root, '.wa-m3 .wa-ticks'), time, 6.2, 7.1);
    }
  },
  {
    id: 'whatsapp-notification', app: 'whatsapp', name: 'Notificação', category: 'Notificações',
    description: 'Notificação no topo da tela que empilha mensagens e abre as ações de resposta.',
    width: 520, height: 260, duration: 7, tags: ['notificação', 'push', 'mensagem', 'aviso'],
    defaults: { displayName: 'Mariana', primary: 'Vi seu vídeo! Como faço pra ter as telas?', secondary: 'Comentei APPS lá no post 🙌', age: 'agora' },
    fields: [field('displayName', 'Nome do contato'), field('primary', 'Primeira mensagem', 'textarea'), field('secondary', 'Segunda mensagem', 'textarea'), field('age', 'Tempo')],
    render(p, h) {
      return `<div class="wa wa-notification"><div class="wa-surface wa-push"><div class="wa-push-top"><span class="wa-app-icon">${logoMark(20)}</span><span class="wa-push-app">WHATSAPP</span><span class="wa-push-age">${E(h, p.age)}</span></div><div class="wa-push-body">${avatar(h, p.displayName, { size: 44 })}<div><strong>${E(h, p.displayName)}<span class="wa-push-count"></span></strong><p class="wa-push-msg wa-push-a">${E(h, p.primary)}</p><p class="wa-push-msg wa-push-b">${E(h, p.secondary)}</p></div></div><div class="wa-push-actions"><button type="button" class="wa-push-reply">Responder<span class="wa-tap"></span></button><button type="button">Marcar como lida</button></div></div></div>`;
    },
    tick(root, time, p, h) {
      const surface = h.q(root, '.wa-surface');
      const p1 = h.ease(h.progress(time, .1, .6));
      surface.style.opacity = String(Math.min(1, p1 * 1.4));
      surface.style.transform = `translateY(${-60 * (1 - p1)}px)`;
      const second = time >= 2.6;
      show(root, '.wa-push-b', time, 2.6, .35, h, { y: 8, scale: 1 });
      const a = h.q(root, '.wa-push-a');
      a.style.opacity = second ? String(1 - h.progress(time, 2.6, .25) * .45) : '1';
      h.q(root, '.wa-push-count').textContent = second ? ' · 2 mensagens' : '';
      const open = h.ease(h.progress(time, 4, .45));
      const actions = h.q(root, '.wa-push-actions');
      actions.style.opacity = String(open);
      actions.style.transform = `translateY(${8 * (1 - open)}px)`;
      const tap = h.q(root, '.wa-tap');
      tap.style.opacity = String(pulse(time, 5.2, .55) * .5);
      tap.style.transform = `translate(-50%,-50%) scale(${.4 + h.progress(time, 5.2, .55) * 1.6})`;
    }
  },
  {
    id: 'whatsapp-audio', app: 'whatsapp', name: 'Mensagem de voz', category: 'Áudio',
    description: 'Áudio recebido tocando com velocidade 1,5× e uma resposta em texto no fim.',
    width: 460, height: 360, duration: 8, tags: ['áudio', 'voz', 'mensagem', 'ouvir'],
    defaults: { displayName: 'Mariana', duration: '0:18', primary: 'Ouvi! Vou testar hoje no meu Reels 🙌', timeIn: '09:41', timeOut: '09:43' },
    fields: [field('displayName', 'Nome do contato'), field('duration', 'Duração do áudio'), field('primary', 'Sua resposta', 'textarea'), field('timeIn', 'Horário do áudio'), field('timeOut', 'Horário da resposta')],
    render(p, h) {
      return `<div class="wa wa-audio"><div class="wa-surface wa-crop"><div class="wa-wall"><div class="wa-thread"><div class="wa-row wa-row-in wa-voice-row"><div class="wa-bubble wa-in wa-voice">${avatar(h, p.displayName, { size: 44 })}<button type="button" class="wa-play" aria-label="Reproduzir"><span class="wa-play-icon">${icon('play', 26)}</span><span class="wa-pause-icon">${icon('pause', 24)}</span></button><div class="wa-wave-box"><div class="wa-wave">${wave()}</div><span class="wa-knob"></span><div class="wa-voice-meta"><span class="wa-voice-time">${E(h, p.duration)}</span><span>${E(h, p.timeIn)}</span></div></div><span class="wa-speed">1×</span></div></div>${bubble(h, { dir: 'out', text: p.primary, time: p.timeOut, cls: 'wa-m3' })}</div></div></div></div>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      const playing = time >= 1.2 && time < 6.2;
      const prog = h.progress(time, 1.2, 5);
      h.q(root, '.wa-play').classList.toggle('is-playing', playing);
      const bars = root.querySelectorAll('.wa-wave i');
      bars.forEach((b, i) => b.classList.toggle('is-played', i / bars.length < prog));
      h.q(root, '.wa-knob').style.left = `${prog * 100}%`;
      const total = String(p.duration ?? '0:18').split(':').reduce((m, v) => m * 60 + (Number(v) || 0), 0) || 18;
      const shown = time < 1.2 ? total : Math.round(total * prog);
      h.q(root, '.wa-voice-time').textContent = `${Math.floor(shown / 60)}:${String(shown % 60).padStart(2, '0')}`;
      const speed = h.q(root, '.wa-speed');
      speed.textContent = time >= 2.3 ? '1,5×' : '1×';
      speed.style.transform = `scale(${1 + pulse(time, 2.2, .3) * .25})`;
      speed.classList.toggle('is-fast', time >= 2.3);
      show(root, '.wa-m3', time, 6.5, .35, h, { x: 10, y: 8, scale: .95 });
      setTicks(h.q(root, '.wa-m3 .wa-ticks'), time, 6.9, 7.4);
    }
  },
  {
    id: 'whatsapp-group', app: 'whatsapp', name: 'Grupo', category: 'Conversas',
    description: 'Grupo com nomes coloridos, reação em emoji e participante digitando.',
    width: 430, height: 640, duration: 9, tags: ['grupo', 'reação', 'emoji', 'equipe'],
    defaults: { groupName: 'Criadores de conteúdo', members: 'Ana, Pedro, Bia, você', userA: 'Ana', commentA: 'Alguém tem telas de app pra colocar no vídeo?', primary: 'Tenho um pacote grátis, mandei o link 👇', userB: 'Pedro', commentB: 'Testei aqui, ficou muito profissional!', userC: 'Bia', commentC: 'Já salvei. Obrigada! 🙏', reaction: '🔥' },
    fields: [field('groupName', 'Nome do grupo'), field('members', 'Participantes'), field('userA', 'Participante 1'), field('commentA', 'Mensagem 1', 'textarea'), field('primary', 'Sua mensagem', 'textarea'), field('userB', 'Participante 2'), field('commentB', 'Mensagem 2', 'textarea'), field('userC', 'Participante 3'), field('commentC', 'Mensagem 3', 'textarea'), field('reaction', 'Reação')],
    render(p, h) {
      return `<div class="wa wa-group"><div class="wa-surface wa-phone">${header(h, { name: p.groupName, status: p.members, group: true })}<div class="wa-wall"><div class="wa-thread">${day('HOJE')}${bubble(h, { text: p.commentA, author: p.userA, time: '10:02', cls: 'wa-g1' })}<div class="wa-row wa-row-out wa-g2"><div class="wa-bubble wa-out"><span class="wa-text">${E(h, p.primary)}</span><span class="wa-meta">10:03${ticks()}</span><span class="wa-reaction"><span>${E(h, p.reaction)}</span><b class="wa-reaction-count">2</b></span></div></div>${bubble(h, { text: p.commentB, author: p.userB, time: '10:04', cls: 'wa-g3' })}${bubble(h, { text: p.commentC, author: p.userC, time: '10:05', cls: 'wa-g4' })}</div></div>${composer(h)}</div></div>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      show(root, '.wa-g1', time, .4, .35, h);
      show(root, '.wa-g2', time, 1.4, .35, h, { x: 10, y: 8, scale: .95 });
      setTicks(h.q(root, '.wa-g2 .wa-ticks'), time, 1.9, 2.6);
      show(root, '.wa-g3', time, 3.1, .35, h);
      const r = h.q(root, '.wa-reaction');
      const rp = h.progress(time, 4.4, .3);
      r.style.opacity = String(rp);
      r.style.transform = `scale(${time < 4.4 ? .4 : .6 + .4 * h.ease(rp) + pulse(time, 4.4, .35) * .25})`;
      h.q(root, '.wa-reaction-count').textContent = time >= 7.6 ? '3' : '2';
      h.q(root, '.wa-reaction-count').style.display = time >= 5.2 ? 'inline' : 'none';
      const typingC = time >= 5.6 && time < 6.7;
      const status = h.q(root, '.wa-status');
      status.textContent = typingC ? `${p.userC} está digitando…` : String(p.members ?? '');
      status.classList.toggle('is-typing', typingC);
      show(root, '.wa-g4', time, 6.7, .35, h);
    }
  },
  {
    id: 'whatsapp-chat-list', app: 'whatsapp', name: 'Lista de conversas', category: 'Conversas',
    description: 'Tela inicial: uma conversa nova sobe para o topo com o contador de não lidas.',
    width: 430, height: 720, duration: 8, tags: ['lista', 'conversas', 'não lidas', 'início'],
    defaults: { displayName: 'Mariana', primary: 'Me manda o pacote de telas? 🙏', secondary: 'Outra mensagem: chegou aqui! 😍', chatA: 'Equipe Projetos', chatB: 'Pedro', chatC: 'Mãe' },
    fields: [field('displayName', 'Contato que chama'), field('primary', 'Primeira mensagem', 'textarea'), field('secondary', 'Segunda mensagem', 'textarea'), field('chatA', 'Conversa 1'), field('chatB', 'Conversa 2'), field('chatC', 'Conversa 3')],
    render(p, h) {
      const row = (name, text, time, cls = '', group = false) => `<div class="wa-list-row ${cls}">${avatar(h, name, { size: 50, group })}<div class="wa-list-main"><div class="wa-list-line"><strong>${E(h, name)}</strong><span class="wa-list-time">${E(h, time)}</span></div><div class="wa-list-line"><span class="wa-list-text">${text}</span><span class="wa-badge"></span></div></div><span class="wa-row-tap"></span></div>`;
      return `<div class="wa wa-list"><div class="wa-surface wa-phone"><header class="wa-home-top"><span class="wa-wordmark">WhatsApp</span>${btn('camera', 'Câmera', 23)}${btn('more', 'Mais opções', 21)}</header><div class="wa-search">${icon('search', 19)}<span>Pesquisar</span></div><div class="wa-chips"><span class="is-active">Tudo</span><span>Não lidas</span><span>Favoritas</span><span>Grupos</span></div><div class="wa-list-rows">${row(p.chatA, `${ticks('is-delivered is-read')}Reunião às 15h, ok?`, '09:12', 'wa-r0', true)}${row(p.chatB, 'Valeu pela dica do vídeo!', '08:47', 'wa-r1')}${row(p.chatC, 'Vem almoçar domingo?', 'Ontem', 'wa-r2')}${row(p.displayName, `<span class="wa-list-new">${E(h, p.primary)}</span>`, 'agora', 'wa-r3 wa-incoming')}${row('Carlos', 'Áudio · 0:42', 'Ontem', 'wa-r4')}${row('Contabilidade', 'Documento enviado', 'Seg', 'wa-r5', true)}</div><button type="button" class="wa-fab" aria-label="Nova conversa">${icon('newchat', 24)}</button></div></div>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      const rowH = 74;
      const move = h.ease(h.progress(time, 1.8, .55));
      root.querySelectorAll('.wa-r0,.wa-r1,.wa-r2').forEach(el => { el.style.transform = `translateY(${rowH * move}px)`; });
      const inc = h.q(root, '.wa-incoming');
      inc.style.transform = `translateY(${-rowH * 3 * move}px)`;
      inc.classList.toggle('is-unread', time >= 1.8);
      inc.style.opacity = time < 1.8 ? '0' : '1';
      const badge = h.q(inc, '.wa-badge');
      badge.textContent = time >= 4.4 ? '2' : time >= 1.8 ? '1' : '';
      badge.style.transform = `scale(${time < 1.8 ? 0 : 1 + pulse(time, 4.4, .3) * .3})`;
      h.q(inc, '.wa-list-new').textContent = time >= 4.4 ? String(p.secondary ?? '') : String(p.primary ?? '');
      const tap = h.q(inc, '.wa-row-tap');
      tap.style.opacity = String(pulse(time, 6.1, .6) * .55);
    }
  },
  {
    id: 'whatsapp-business', app: 'whatsapp', name: 'Resposta automática com botões', category: 'Automação',
    description: 'Conta comercial responde sozinha com botões; o cliente toca e recebe o link.',
    width: 430, height: 720, duration: 9, tags: ['business', 'automação', 'botões', 'link', 'atendimento'],
    defaults: { businessName: 'Automatiza Software', status: 'Conta comercial', primary: 'APPS', secondary: 'Oi! 👋 Que bom que você chegou. Quer receber o pacote de telas animadas?', buttonA: 'Quero o pacote', buttonB: 'Falar com uma pessoa', tertiary: 'Aqui está 👇 É só baixar e usar no seu vídeo.', link: 'github.com/seu-usuario/pacote' },
    fields: [field('businessName', 'Nome da empresa'), field('status', 'Status'), field('primary', 'Mensagem do cliente'), field('secondary', 'Resposta automática', 'textarea'), field('buttonA', 'Botão 1'), field('buttonB', 'Botão 2'), field('tertiary', 'Mensagem final', 'textarea'), field('link', 'Link exibido')],
    render(p, h) {
      return `<div class="wa wa-business"><div class="wa-surface wa-phone">${header(h, { name: p.businessName, status: p.status, business: true })}<div class="wa-wall"><div class="wa-thread">${day('HOJE')}<div class="wa-e2e">${icon('lock', 12)} Esta empresa usa um serviço para gerenciar a conversa.</div>${bubble(h, { dir: 'out', text: p.primary, time: '11:20', cls: 'wa-b1' })}<div class="wa-row wa-row-in wa-b2"><div class="wa-bubble wa-in wa-interactive"><span class="wa-text">${E(h, p.secondary)}</span><span class="wa-meta">11:20</span><div class="wa-buttons"><button type="button" class="wa-choice wa-choice-a">${icon('reply', 16)}${E(h, p.buttonA)}<span class="wa-tap"></span></button><button type="button" class="wa-choice">${icon('reply', 16)}${E(h, p.buttonB)}</button></div></div></div>${bubble(h, { dir: 'out', text: p.buttonA, time: '11:21', cls: 'wa-b3' })}<div class="wa-row wa-row-in wa-b4"><div class="wa-bubble wa-in"><div class="wa-link-card"><span class="wa-link-icon">${icon('link', 22)}</span><div><b>${E(h, p.link)}</b><small>Pacote de telas animadas</small></div></div><span class="wa-text">${E(h, p.tertiary)}</span><span class="wa-meta">11:21</span></div></div></div></div>${composer(h)}</div></div>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      show(root, '.wa-b1', time, .5, .35, h, { x: 10, y: 8, scale: .95 });
      setTicks(h.q(root, '.wa-b1 .wa-ticks'), time, .9, 1.4);
      const typing = time >= 1.5 && time < 2.4;
      h.q(root, '.wa-status').textContent = typing ? 'digitando…' : String(p.status ?? '');
      h.q(root, '.wa-status').classList.toggle('is-typing', typing);
      show(root, '.wa-b2', time, 2.4, .4, h);
      const tap = h.q(root, '.wa-choice-a .wa-tap');
      tap.style.opacity = String(pulse(time, 4.5, .55) * .45);
      tap.style.transform = `translate(-50%,-50%) scale(${.3 + h.progress(time, 4.5, .55) * 2.4})`;
      h.q(root, '.wa-choice-a').classList.toggle('is-pressed', time >= 4.6 && time < 5);
      show(root, '.wa-b3', time, 5, .35, h, { x: 10, y: 8, scale: .95 });
      setTicks(h.q(root, '.wa-b3 .wa-ticks'), time, 5.3, 5.7);
      show(root, '.wa-b4', time, 6.2, .4, h);
    }
  },
  {
    id: 'whatsapp-document', app: 'whatsapp', name: 'Arquivo enviado', category: 'Arquivos',
    description: 'Arquivo sendo enviado com progresso, tiques azuis e o contato confirmando.',
    width: 460, height: 380, duration: 7, tags: ['arquivo', 'documento', 'zip', 'pdf', 'enviar'],
    defaults: { fileName: 'pacote-telas-animadas.zip', fileMeta: 'ZIP · 2,5 MB', caption: 'As 40 telas, claro e escuro 👇', primary: 'Chegou! Obrigada 🙏', timeOut: '09:44', timeIn: '09:45' },
    fields: [field('fileName', 'Nome do arquivo'), field('fileMeta', 'Tipo e tamanho'), field('caption', 'Legenda', 'textarea'), field('primary', 'Resposta do contato', 'textarea'), field('timeOut', 'Horário do envio'), field('timeIn', 'Horário da resposta')],
    render(p, h) {
      return `<div class="wa wa-document"><div class="wa-surface wa-crop"><div class="wa-wall"><div class="wa-thread"><div class="wa-row wa-row-out wa-d1"><div class="wa-bubble wa-out wa-file-bubble"><div class="wa-file"><span class="wa-file-icon">${icon('doc', 34)}<b>${E(h, String(p.fileName).split('.').pop().slice(0, 4).toUpperCase())}</b></span><div class="wa-file-main"><strong>${E(h, p.fileName)}</strong><small>${E(h, p.fileMeta)}</small></div><span class="wa-file-state"><svg class="wa-ring" width="36" height="36" viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" stroke-opacity=".2" stroke-width="2.5"/><circle class="wa-ring-bar" cx="18" cy="18" r="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="94.2" stroke-dashoffset="94.2" transform="rotate(-90 18 18)"/></svg><span class="wa-file-done">${icon('download', 18)}</span></span></div><span class="wa-text wa-caption">${E(h, p.caption)}</span><span class="wa-meta">${E(h, p.timeOut)}${ticks()}</span></div></div>${bubble(h, { text: p.primary, time: p.timeIn, cls: 'wa-d2' })}</div></div></div></div>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      show(root, '.wa-d1', time, .35, .35, h, { x: 10, y: 8, scale: .95 });
      const up = h.progress(time, .8, 2);
      const done = time >= 2.8;
      h.q(root, '.wa-ring-bar').style.strokeDashoffset = String(94.2 * (1 - up));
      h.q(root, '.wa-ring').style.opacity = done ? '0' : '1';
      h.q(root, '.wa-file-done').style.opacity = done ? '1' : '0';
      const meta = h.q(root, '.wa-file-main small');
      meta.textContent = done ? String(p.fileMeta ?? '') : `Enviando… ${Math.round(up * 100)}%`;
      const t = h.q(root, '.wa-d1 .wa-ticks');
      t.style.opacity = time >= 2.8 ? '1' : '0';
      setTicks(t, time, 3.3, 4);
      show(root, '.wa-d2', time, 4.8, .35, h);
    }
  },
  {
    id: 'whatsapp-call', app: 'whatsapp', name: 'Chamada recebida', category: 'Chamadas',
    description: 'Chamada de voz chegando, atendida no toque e cronômetro correndo.',
    width: 430, height: 760, duration: 8, tags: ['chamada', 'ligação', 'voz', 'atender'],
    defaults: { displayName: 'Mariana', status: 'Chamada de voz do WhatsApp' },
    fields: [field('displayName', 'Nome do contato'), field('status', 'Texto da chamada')],
    render(p, h) {
      return `<div class="wa wa-call"><div class="wa-surface wa-call-screen"><div class="wa-call-top">${icon('lock', 13)}<span>Protegida com criptografia de ponta a ponta</span></div><div class="wa-call-id"><div class="wa-call-avatar"><span class="wa-ring-pulse wa-rp1"></span><span class="wa-ring-pulse wa-rp2"></span>${avatar(h, p.displayName, { size: 128 })}</div><strong>${E(h, p.displayName)}</strong><small class="wa-call-status">${E(h, p.status)}</small></div><div class="wa-call-incoming"><div><button type="button" class="wa-call-btn wa-decline" aria-label="Recusar">${icon('phoneFill', 30, 'style="transform:rotate(135deg)"')}</button><span>Recusar</span></div><div><button type="button" class="wa-call-btn wa-accept" aria-label="Atender">${icon('phoneFill', 30)}<span class="wa-tap"></span></button><span>Atender</span></div></div><div class="wa-call-active"><button type="button" class="wa-call-btn wa-ghost" aria-label="Alto-falante">${icon('speaker', 26)}</button><button type="button" class="wa-call-btn wa-ghost" aria-label="Vídeo">${icon('video', 26)}</button><button type="button" class="wa-call-btn wa-ghost" aria-label="Mudo">${icon('mute', 26)}</button><button type="button" class="wa-call-btn wa-decline" aria-label="Encerrar">${icon('phoneFill', 28, 'style="transform:rotate(135deg)"')}</button></div></div></div>`;
    },
    tick(root, time, p, h) {
      enter(root, time, h);
      const answered = time >= 3.6;
      root.querySelectorAll('.wa-ring-pulse').forEach((el, i) => {
        const cycle = ((time + i * .7) % 1.4) / 1.4;
        el.style.opacity = answered ? '0' : String((1 - cycle) * .5);
        el.style.transform = `translate(-50%,-50%) scale(${1 + cycle * .55})`;
      });
      const accept = h.q(root, '.wa-accept');
      accept.style.transform = answered ? 'none' : `translateY(${-6 * Math.abs(Math.sin(time * 3.2))}px)`;
      const tap = h.q(root, '.wa-accept .wa-tap');
      tap.style.opacity = String(pulse(time, 3.1, .55) * .5);
      tap.style.transform = `translate(-50%,-50%) scale(${.5 + h.progress(time, 3.1, .55) * 1.8})`;
      const inc = h.q(root, '.wa-call-incoming');
      inc.style.opacity = answered ? String(1 - h.progress(time, 3.6, .3)) : '1';
      inc.style.visibility = time >= 3.9 ? 'hidden' : 'visible';
      show(root, '.wa-call-active', time, 3.7, .4, h, { y: 16, scale: 1 });
      const s = Math.max(0, Math.floor(time - 3.6));
      h.q(root, '.wa-call-status').textContent = answered ? `00:${String(s).padStart(2, '0')}` : String(p.status ?? '');
    }
  }
];

export function logoMark(size = 24) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2.8a9.2 9.2 0 0 0-7.9 13.9L2.8 21.2l4.6-1.2A9.2 9.2 0 1 0 12 2.8Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 7.6 8 8.2c-.3 3.3 3.5 7.6 7.4 8.1l.8-1.3-2-1.4-1 .8c-1.1-.5-2.3-1.7-2.8-2.8l.8-1z" fill="currentColor"/></svg>`;
}
