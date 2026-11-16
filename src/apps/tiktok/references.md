# Referências — TikTok

Consulta e implementação: **1 de novembro de 2026**. Os exemplos são locais, ilustrativos e editáveis. Nenhuma conta, conversa ou API real foi acessada; nenhuma gravação foi enviada.

## Variante representada

Interface móvel vertical do TikTok: comentário com avatar circular e coração à direita; respostas com recuo e indicação de criador; painel inferior; feed Para você com ações laterais; conversa privada; pesquisa com categorias e grade; perfil com estatísticas e seguir; sticker de resposta a comentário em vídeo. Os temas adaptam superfícies e texto; controles sobre vídeo permanecem brancos. A implementação aproxima essa família de telas, sem prometer identidade pixel a pixel de qualquer versão, região ou plataforma.

## Fontes oficiais consultadas

1. **TikTok Pte. Ltd. — página oficial do aplicativo no Google Play**  
   https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically&hl=pt_BR  
   A página consultada informa atualização em 29/10/2026. Foram baixadas apenas para o diretório temporário e observadas visualmente as quatro imagens promocionais oficiais abaixo. A primeira mostra Seguindo/Para você, busca, avatar com botão + e coluna de coração, comentário, marcador e compartilhar. A terceira mostra os mesmos controles com contagens, legenda, som original e barra inferior Início/Amigos/criar/Caixa de entrada/Perfil. A segunda mostra uma variante com categoria Drama. A quarta mostra LIVE; ela ajuda a observar avatar, tipografia e botões, mas não foi usada para sugerir que LIVE e feed têm controles idênticos. São materiais promocionais, com composição e escala próprias.

   - https://play-lh.googleusercontent.com/9v0w669e6Yp53S_eQCs4qCovs2vR2st2ylM7muzmczczjaToRgsPXZ3fJS69_39KihIR2L0SMMHdodDIfQ10xg=w1000
   - https://play-lh.googleusercontent.com/4v-FYgiDGCUPmCCx2u0P-LoPAhYpE6dc8ZJjX5FgobWHozwH0eBKhC1TdL29bv4VqlcdgS-AigHUB8_Vv14ovQ=w1000
   - https://play-lh.googleusercontent.com/z8HOnNh5VBN6GFsAHpuzNTn9IKxKZDAMTiLf_xiCC2OgQ9JnHnR1azNDPmhV-lqPsisfEXh8zZdzgClbfJYWgA=w1000
   - https://play-lh.googleusercontent.com/nTmO2fbHeOYDkMN9SlYXdfaKquXaj3SdDwY9Jy7iACiud3IbzOPxRCvAHUQzIfikhM64KIGMI4zcA9FyR8JglA=w1000

2. **Central de Ajuda — Comentários, em português**  
   https://support.tiktok.com/pt_BR/using-tiktok/messaging-and-notifications/comments  
   Confirma o acesso lateral aos comentários, o campo para adicionar comentário e a ação de publicar. O texto da ajuda foi consultado; ele não é evidência de medidas exatas dos elementos.

3. **Newsroom — Product tutorial: Reply to comments with video**, publicado em 18/06/2020  
   https://newsroom.tiktok.com/product-tutorial-reply-to-comments-with-video?lang=en  
   Confirma o fluxo de resposta por câmera e o comentário preso ao vídeo como sticker. É uma referência histórica de comportamento, consultada agora; não estabelece a aparência de uma build de 2026. Os vídeos incorporados não foram reproduzidos. O balão implementado é uma aproximação desse padrão.

4. **Newsroom — Say More in the Comments: Introducing Voice, Polls, and Carousels on TikTok**, publicado em 03/09/2026  
   https://newsroom.tiktok.com/say-more-in-the-comments?lang=en  
   Confirma que o sistema atual de comentários tem variantes adicionais de voz, enquetes e fotos. A biblioteca representa o comentário de texto; não tenta incluir todas essas variantes ou afirmar disponibilidade para qualquer conta.

5. **Newsroom — Share your favorite TikTok moments with Direct Messaging**, publicado em 12/08/2024  
   https://newsroom.tiktok.com/share-your-favorite-tiktok-moments-with-direct-messaging?lang=en  
   Confirma conversas, compartilhamento de vídeos e stickers no contexto de mensagens. O arquivo de imagem encontrado no HTML oficial foi aberto visualmente e contém apenas a marca:  
   https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/3325fdb986b374db260a5223fef62e39.png  
   Portanto, essa imagem serve de referência para o símbolo com deslocamentos ciano/magenta, não para o layout de DM. A conversa desenhada é uma aproximação, sem captura oficial recente da tela de conversa como prova.

6. **Central de Ajuda — Como o TikTok recomenda conteúdo**  
   https://support.tiktok.com/pt_BR/using-tiktok/exploring-videos/how-tiktok-recommends-content  
   A seção Pesquisar confirma busca por conteúdo e sugestões de termos. As páginas específicas Descobrir e pesquisar e Seguindo e deixando de seguir retornaram bloqueio de robots no acesso direto; não foram tratadas como observadas. Busca, perfil e seus espaçamentos foram reconstruídos como variantes ilustrativas, sem alegar validação de conta real.

7. **TikTok for Developers — TikTok Sans: Now a Free and Open-Source Font**, publicado em 10/07/2025  
   https://developers.tiktok.com/blog/tiktok-sans-open-source  
   https://github.com/tiktok/TikTokSans  
   Confirma a fonte de interface TikTok Sans e a licença SIL OFL 1.1. O TTF variável original do repositório TikTok foi incorporado localmente em `assets/TikTokSans-Variable.ttf`, acompanhado da licença completa em `assets/OFL.txt`. O CSS o carrega por `@font-face`, com o alias `TikTok Sans Local`, antes dos fallbacks. Não há dependência de instalação de fonte no sistema ou serviço externo. Proveniência, hash e detalhes estão abaixo.

## Desenho e implementação

- Os SVGs de coração, comentário com três pontos, compartilhar, marcador, pessoa, amigos, caixa de entrada, câmera e demais formas específicas foram desenhados no módulo a partir dos padrões observados. Os demais ícones e a marca usam os helpers locais do contrato. Não há sprites, scripts, embeds ou CDN externos.
- `h.avatar` fornece o retrato local do criador. Outros usuários têm avatares de iniciais fictícias; o retrato serve de fundo ilustrativo para feed e miniaturas, sem fingir que há reprodução de vídeo real.
- Todo conteúdo editável está em `defaults`/`fields`. Valores em HTML passam por `h.esc`; digitação e contagens usam texto DOM. A imagem do criador é produzida pelo helper de avatar do core, responsável pela origem local e escape do seu próprio HTML.
- Tempos em segundos; cada `tick` redefine os estados completos para permitir seek. Não há timers, requisições, handlers inline, observadores ou animações CSS infinitas. Os textos extensos têm limites visuais para manter a composição.
- Curtir, enviar, seguir, pesquisar e responder são animações ilustrativas controladas pelo tempo. Os botões não executam ações no TikTok.

## Escopo entregue

Oito componentes importáveis: `tiktok-comment`, `tiktok-thread`, `tiktok-comments-panel`, `tiktok-video`, `tiktok-dm`, `tiktok-search`, `tiktok-profile-follow`, `tiktok-video-reply`. Temas claro/escuro por `data-theme`. Dimensões de 440–520 px de largura e 236–786 px de altura. A galeria escala essas composições.

## Verificação e limites

Node confirmou a sintaxe e a importação do módulo. As verificações passaram para 8 componentes, 68 valores editáveis, metadados, escape de conteúdo adversarial, raízes `.tk`, durações/dimensões do contrato, seletores CSS e 48 chamadas de `tick` em DOM simulado (incluindo seek 5 → 1 → 5 e 0 → fim → 5). Um parser HTML também validou 16 documentos (padrão e conteúdo adversarial), estrutura balanceada, ausência de scripts/atributos de evento e presença das classes usadas pelos seletores dinâmicos. A revisão visual da integração real, contraste renderizado e encaixe no core fica a cargo do coordenador. Não houve login em conta TikTok nem comparação visual autenticada com uma versão móvel específica.
## Fonte oficial incorporada

Refinamento autorizado e executado em 01/11/2026. Os arquivos abaixo são cópias sem conversão, edição ou reconstrução, fixadas ao commit oficial `baa2f381f9102da9fbc3c83843ad224774240516` de `tiktok/TikTokSans`.

| Arquivo local | Origem exata | SHA-256 |
| --- | --- | --- |
| `assets/TikTokSans-Variable.ttf` | https://raw.githubusercontent.com/tiktok/TikTokSans/baa2f381f9102da9fbc3c83843ad224774240516/sources/hinting/TikTok-VTT.ttf | `27bedec4a9efeb009bf2efbe76524f5d36184eb157157354e8c6d0d1d618c82f` |
| `assets/OFL.txt` | https://raw.githubusercontent.com/tiktok/TikTokSans/baa2f381f9102da9fbc3c83843ad224774240516/OFL.txt | `99e743f68f5eac487004c73aaca69c5d80d91ddb7b75c04bdf5f39331d9b7158` |

- **Licença:** SIL Open Font License 1.1, texto completo preservado em `assets/OFL.txt`; copyright 2024 TikTok Inc. A fonte acompanha a aplicação e não é vendida isoladamente.
- **Arquivo:** TrueType variável original, 1.256.200 bytes, família tipográfica TikTok Sans, versão interna 4.000. O binário disponível no repositório está na pasta de hinting e inclui suas tabelas de ferramentas VTT; elas foram preservadas. Não se alega que esse arquivo seja um export de uma build específica do aplicativo.
- **Eixos confirmados diretamente no TTF:** `wght` 300–900, `wdth` 75–150, `opsz` 12–36, `slnt` -6–0. O CSS usa peso variável 300–900, largura normal e estilo normal; o browser seleciona o tamanho óptico.
- **Integração:** a URL do `@font-face` é relativa ao próprio `style.css`. Copiar a pasta TikTok completa, preservando `assets/`, ou reescrever a URL caso os estilos sejam concatenados em outro destino. Antes de capturas determinísticas, aguardar `document.fonts.ready`; o uso efetivo da fonte ainda exige conferência no navegador pelo coordenador.
- **Verificação local:** assinatura TrueType, tabelas `name`/`fvar`, limites dos eixos e SHA-256 conferidos. Sem novas dependências, sem instalação global e sem conversão da fonte. O TTF só é carregado de arquivo/servidor local da biblioteca.