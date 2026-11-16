# ChatGPT — referências e limites

Consultado em **2026-11-01**. Esta é uma biblioteca local de ilustrações animadas para vídeos. Textos, arquivos, fontes e progresso são exemplos editáveis; não existe conexão com uma conta ChatGPT.

## Fontes oficiais consultadas

- [ChatGPT on the web — ChatGPT Learn](https://learn.chatgpt.com/docs/web). Referência principal da variante web. O HTML da ilustração oficial mostra fundo branco / `#212121`, controles neutros, composer arredondado com borda tênue, variante escura `#2b2b2b`, botão `+`, microfone, envio circular e abas Chat/Work. A seção de configuração posiciona modelo e esforço no composer. Foram consultados o documento e os elementos HTML/SVG da ilustração; não foi aberta uma conta autenticada.
- [Web search — ChatGPT Learn](https://learn.chatgpt.com/docs/web-search). Confirma atividade de pesquisa e citações na conversa web, e a seleção de pesquisa aprofundada pelo menu `+`. A disponibilidade varia por conta/workspace. Usado para o comportamento de busca e fontes; a composição compacta do painel é uma adaptação para vídeo.
- [Work with files — ChatGPT Learn](https://learn.chatgpt.com/docs/artifacts-viewer). Contexto oficial para anexar fontes e trabalhar com arquivos no ChatGPT web. O cartão de PDF, os metadados e o progresso nesta biblioteca são ilustrações, sem leitura ou envio de um arquivo real.
- [ChatGPT Voice — OpenAI Help Center](https://help.openai.com/en/articles/20001274-chatgpt-voice). Documento atual consultado para a voz integrada à conversa, resposta em texto, microfone e encerramento. O endereço antigo `https://help.openai.com/en/articles/8400625-voice-mode-faq` redirecionou para esse documento. A biblioteca adota a conversa integrada; não presume que a esfera azul histórica seja a única interface atual. A forma exata da visualização de áudio aqui é adaptada, não uma medição do som.
- [ChatGPT Voice — ChatGPT Learn](https://learn.chatgpt.com/docs/features/voice). Complementa as referências de iniciar e encerrar voz e de usar ditado para preencher texto. Não é usada para afirmar paridade entre as versões web e desktop.
- [Design Guidelines — OpenAI](https://openai.com/brand/). Referência da marca Blossom, proporções, uso monocromático e tipografia OpenAI Sans. A página pública de marca foi lida via consulta web; uma solicitação HTTP direta retornou o desafio de JavaScript/cookies. O pacote de parceria vinculado contém templates PSB, portanto não foi usado como origem do símbolo.
- [OpenAI black monoblossom — SVG oficial](https://learn.chatgpt.com/assets/OpenAI-black-monoblossom.svg). SVG obtido diretamente de um recurso referenciado no HTML oficial acima. O `path`, o `viewBox="0 0 611 611"` e as regras de preenchimento foram preservados em `brandLogo(size)`. `currentColor` permite somente a inversão monocromática necessária ao tema. O espaço livre do arquivo original permanece no SVG.

## Decisões de reprodução

- As oito composições usam dimensões de desktop compacto, sem forçar uma moldura de celular. Fundo e controles têm os dois temas nativos. Respostas fluem sobre o fundo e a pergunta usa balão neutro alinhado à direita.
- A fonte é **Arial / Helvetica / system-ui**, com fonte monoespaçada local no código. OpenAI Sans é citada na referência de marca, porém não é baixada nem requerida. A diferença tipográfica é um limite explícito.
- Os rótulos de modelo/modo **Automático**, **Rápido** e **Raciocínio** são exemplos genéricos, editáveis. Não representam uma lista de modelos, um plano contratado ou disponibilidade atual.
- As etapas de “Pensando” são status editoriais curtos, não acesso ao raciocínio privado de um modelo. O cursor, os checks, o preparo do arquivo, a cópia e o áudio são animações simuladas a partir do tempo.
- As fontes são textos demonstrativos, sem links ativos ou pesquisa real. O bloco de código tem realce simples, sem prometer um parser para todas as linguagens.
- A visualização de voz acompanha a variante integrada documentada atualmente, com transcrição e barra compacta de áudio. Não produz, captura ou transmite áudio.
- Menus e painéis foram compactados para legibilidade em vídeo. Textos extensos podem ser recortados nas áreas de composição fixa; recomenda-se texto curto ao usar sobreposição em um vídeo.
- Não há promessa de identidade pixel a pixel com todo rollout do ChatGPT. As variantes mudam entre web, desktop, mobile, conta e data. O anúncio de Search de 2024 não foi tratado como referência atual.

## Integração

`index.mjs` exporta `brand`, `components` e `brandLogo(size = 24)`. `style.css` usa somente seletores sob `.cg`. Todos os valores editáveis passam por `h.esc` no render; a digitação e os demais valores dinâmicos usam `textContent`. Não há handlers inline, CDN, timers, aleatoriedade, relógio real, eventos globais ou requests no código entregue. O coordenador fará a revisão visual e os testes DOM de navegador na galeria integrada.

IDs: `chatgpt-composer`, `chatgpt-conversation`, `chatgpt-thinking`, `chatgpt-code`, `chatgpt-search`, `chatgpt-upload`, `chatgpt-voice`, `chatgpt-tools`.
