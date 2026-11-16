# Telas animadas para vídeo

40 telas animadas de **Instagram, TikTok, WhatsApp, Claude e ChatGPT** para colocar nos seus vídeos: comentário com curtida, direct, notificação do WhatsApp, IA pensando, resposta sendo digitada e outras. Tema claro e escuro, texto editável e render pelo [HyperFrames](https://github.com/heygen-com/hyperframes).

Feito por Elizeu Moyses ([@elizeumoyses](https://www.instagram.com/elizeumoyses/) · [@automatizasoftware](https://www.instagram.com/automatizasoftware/)). Gratuito.

## Começar

```bash
python -m http.server 8766 --bind 127.0.0.1
```

Abra <http://127.0.0.1:8766/>, escolha a tela, edite os textos e exporte:

```bash
node tools/export.mjs --component instagram-comment --output exports/meu-comentario
```

O passo a passo completo, com a tabela "qual tela usar em cada fala", está no [GUIA-DE-USO.md](GUIA-DE-USO.md).

## O que tem

| App | Telas |
|---|---|
| Instagram | comentário, respostas, painel de comentários, post, Reels, direct, Story, perfil |
| TikTok | comentário, respostas, painel, vídeo, direct, busca, perfil, resposta em vídeo |
| WhatsApp | conversa, notificação, mensagem de voz, grupo, lista de conversas, resposta automática com botões, arquivo enviado, chamada |
| Claude | composer, conversa, pensando, código, Artifact, upload, projeto, modelos |
| ChatGPT | composer, conversa, pensando, código, busca, upload, voz, ferramentas |

## Aviso

Instagram, TikTok, WhatsApp, Claude e ChatGPT são marcas de seus respectivos donos. Este pacote não tem afiliação com essas empresas nem endosso delas. As telas são réplicas ilustrativas desenhadas do zero, sem assets oficiais, e os nomes, textos e números são exemplos. Não use para simular conversas, provas ou resultados que não aconteceram.

## Licença

Código e telas sob a licença [MIT](LICENSE). Fontes e bibliotecas de terceiros mantêm as próprias licenças: Manrope e Instrument Serif (SIL OFL, licenças em `assets/`), TikTok Sans (OFL, em `src/apps/tiktok/assets/`) e GSAP ([licença padrão da GreenSock](https://gsap.com/standard-license)). A licença MIT não dá direito sobre as marcas dos apps.
