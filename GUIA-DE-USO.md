# Guia de uso · Telas animadas para vídeo

São 40 telas animadas de aplicativos para colocar nos seus vídeos: 8 de Instagram, 8 de TikTok, 8 de WhatsApp, 8 de Claude e 8 de ChatGPT. Todas têm tema claro e escuro, e o texto é editável. Nada aqui se conecta a contas: são ilustrações feitas em HTML, CSS e JavaScript.

## 1. Abrir a galeria

O navegador bloqueia módulos JavaScript abertos direto do disco (`file://`), então sirva a pasta por HTTP. Na pasta do pacote:

```bash
python -m http.server 8766 --bind 127.0.0.1
```

Depois abra <http://127.0.0.1:8766/>. Na galeria você:

1. filtra por app ou busca por "comentário", "áudio", "código"…;
2. clica em **Experimentar componente** e edita os textos;
3. alterna claro e escuro;
4. toca, pausa ou arrasta o tempo;
5. em **Copiar para o agente** ou **Baixar receita**, leva a configuração (JSON) para o seu projeto.

Cada tela também abre sozinha em `scenes/ID.html?preview=1`.

## 2. Qual tela usar em cada fala

| Quando a fala menciona | Tela |
|---|---|
| Uma pergunta ou comentário recebido | Comentário, respostas ou painel de comentários (Instagram/TikTok) |
| Responder alguém em público | Respostas (Instagram/TikTok) ou resposta em vídeo (TikTok) |
| Postar, curtir, salvar ou seguir | Post, Reels/vídeo, Story e perfil |
| Conversar no privado | Direct (Instagram/TikTok) ou conversa do WhatsApp |
| Cliente chamando, mensagem chegando | Notificação ou lista de conversas do WhatsApp |
| Áudio, grupo ou ligação | Mensagem de voz, grupo ou chamada do WhatsApp |
| Atendimento automático | Resposta automática com botões (WhatsApp) |
| Enviar um arquivo | Upload (Claude/ChatGPT) ou arquivo enviado (WhatsApp) |
| Escrever um pedido para a IA | Composer do Claude ou do ChatGPT |
| A IA preparando a resposta | Pensando, ou conversa com resposta digitada |
| Código ou resultado interativo | Bloco de código, Artifact do Claude |
| Buscar e mostrar fontes | Busca do ChatGPT ou busca do TikTok |
| Falar com a IA por voz | Voz do ChatGPT |

**A regra que faz parecer produzido:** uma tela por ideia, entrando quando você fala dela e ficando tempo suficiente para ler. Deixe o rosto e a legenda livres e ajuste `x`, `y` e `scale`.

## 3. Gerar um vídeo com o HyperFrames

Precisa de Node 22 ou mais novo, do [HyperFrames](https://github.com/heygen-com/hyperframes), do FFmpeg e do Chrome.

Exportar uma tela como projeto HyperFrames (a pasta de saída precisa ser nova):

```bash
node tools/export.mjs --component whatsapp-chat --output exports/whatsapp-exemplo
```

Com a receita baixada da galeria:

```bash
node tools/export.mjs --recipe receita.json --output exports/minha-cena
```

A pasta gerada tem `index.html` (a composição), `recipe.json` e `hyperframes.json`. Renderize com o HyperFrames, por exemplo `npx hyperframes render exports/whatsapp-exemplo --output video.mp4`. Para sobrepor ao seu vídeo, use `--transparent` e coloque a camada HTML no mesmo render do vídeo. **MP4 não guarda transparência**, então um MP4 com fundo preto não serve como camada.

## 4. Colocar a tela numa composição sua

Copie as pastas `src` e `assets` para o seu projeto, mantendo os caminhos. Carregue `src/components.css`, o `style.css` de cada app usado, `assets/gsap.min.js` e `src/runtime.js`:

```js
const rt = window.AppComponentsRuntime;
const layer = rt.createRecipe('instagram-comment', {
  start: 4.2, theme: 'light',
  props: { username: 'seu.usuario', primary: 'Como isso funciona na prática?' }
});
const host = document.querySelector('#tela');
const player = rt.mount(host, layer.component, { props: layer.props, theme: layer.theme });
// a cada quadro: player.seek(tempoDoVideo - layer.start)
```

- O canvas de referência é **720 × 1280**, com origem no canto superior esquerdo.
- O tempo é local: `tempoLocal = tempoDoVideo - start`. Use o relógio da timeline do render, nunca o relógio real.
- `seek(segundos)` recria o estado exato daquele instante, inclusive quando o tempo volta.
- API: `components`, `brands`, `getComponent(id)`, `defaultLayout(c)`, `createRecipe(id, opções)`, `mount(host, id, {props, theme, time})`, que retorna `{seek, update, setTheme, destroy}`.

## 5. Sua foto no avatar

Os avatares de "apresentador" usam `src/assets/elizeu-avatar.png`, que aqui é uma silhueta neutra. Troque esse arquivo por uma foto sua (quadrada, de uns 1024 px), mantendo o mesmo nome.

## 6. Antes de publicar

- Confira os textos: são exemplos, e nada deve parecer uma prova real que não aconteceu.
- Menus e nomes de modelos mudam com o tempo. Os rótulos são editáveis.
- As telas são réplicas aproximadas, desenhadas aqui, sem assets oficiais.
