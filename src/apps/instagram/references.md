# Referências — Instagram

Consulta: 2026-11-01. Biblioteca local ilustrativa; não conecta contas nem envia mensagens. Os nomes, textos, números, capas e interações são exemplos editáveis. A fotografia vem do helper local de avatar; não há imagens carregadas de servidores do Instagram durante a execução.

## Fontes oficiais consultadas e imagens observadas

1. Meta, **In India, Instagram debuts a Reels-first experience for its mobile app**, 2025-09-28.
   - Artigo: https://about.fb.com/news/2025/09/in-india-instagram-debuts-a-reels-first-experience-for-its-mobile-app/
   - Imagem observada: https://about.fb.com/wp-content/uploads/2025/09/3-up_16x9.png?resize=960%2C540&w=960
   - Imagem observada: https://about.fb.com/wp-content/uploads/2025/09/3-up_16x9_firstswipe_following.png?resize=960%2C540&w=960
   - As duas imagens foram baixadas temporariamente e abertas visualmente. Na primeira: feed claro, Stories circulares, Reels com ações à direita, nome/seguir/áudio na base e barra com Início, Reels, DMs, busca e perfil. DMs aparecem no centro da navegação. No topo do Reel, abas Reels e Friends. Na segunda: a experiência experimental coloca Following no terceiro destino; a fonte distingue experimento regional e mudança global anunciada. A biblioteca escolhe a barra simplificada da primeira imagem. Não mistura a aba experimental Following com a barra de DMs.

2. Meta, **New Instagram Features to Help You Connect**, 2025-08-06.
   - https://about.fb.com/news/2025/08/new-instagram-features-help-you-connect/
   - Asset de cabeçalho: https://about.fb.com/wp-content/uploads/2025/08/Instagram-Features-to-Help-You-Connect_Header-1.gif
   - Texto verificado: reposts de posts e Reels públicos, aba de reposts no perfil e aba Friends em Reels. O repost foi incluído no feed, no Reel e nas abas do perfil. O renderizador web não exibiu o GIF (tipo não suportado); os detalhes gráficos desse asset não foram usados como evidência visual.

3. Meta, **New Instagram DM Features to Help You Stay Connected**, 2025-02-19, atualização indicada em 2025-07-09.
   - https://about.fb.com/news/2025/02/new-instagram-dm-features-stay-connected/
   - Cabeçalho listado: https://about.fb.com/wp-content/uploads/2025/02/Q1-IG-DM-Bundle_Header.jpg
   - Texto verificado: mensagens privadas, agendamento, traduções, música e mensagens fixadas. A réplica cobre conversa de texto e envio simples. Não simula recursos premium ou chamadas efetivas. A abertura da imagem pelo web tool expirou; esse cabeçalho não foi considerado observado visualmente.

4. Meta, **Introducing Instants: A New Way to Share in the Moment**, 2026-05-13 (página também indica 2026-05-12).
   - https://about.fb.com/news/2026/05/instants-share-in-the-moment/
   - Consultado para distinguir o novo produto efêmero de Stories e DMs. O componente Story é uma resposta privada a Story, não uma captura do Instants. O GIF do artigo não foi observado: tipo não suportado no web tool.

## Escolhas e limites de fidelidade

- Variante móvel ilustrativa baseada principalmente nas capturas oficiais de setembro de 2025; a data de consulta não equivale a uma garantia de que todas as contas exibem essa variante em novembro de 2026. Instagram varia conforme plataforma, idioma, experimento e rollout.
- Comentário isolado, respostas e painel preservam a hierarquia conhecida: avatar à esquerda, usuário e tempo, texto, curtidas/responder e coração à direita. Não foi obtida uma captura oficial atual específica desses três recortes; espaçamentos são uma reconstrução aproximada, não medição pixel a pixel.
- A conversa DM, a resposta privada a Story e o perfil completo também são reconstruções aproximadas. A barra de navegação, ações laterais de Reels e presença de repost/aba Friends têm suporte oficial visual ou textual indicado acima. A grade vertical foi escolhida como aproximação móvel; não foi medida em uma captura oficial atual de perfil nesta consulta.
- Usa Arial/Helvetica Neue do sistema. Instagram Sans, SF Pro e a assinatura oficial não são redistribuídas. A palavra Instagram é uma aproximação tipográfica em fonte cursiva local. Ícones comuns vêm do helper central; câmera, telefone, sticker, repost e pessoa marcada são SVGs desenhados localmente, sem alegação de assets oficiais.
- Temas claro e escuro seguem a linguagem monocromática, azul de ação e coração vermelho. Story e Reels permanecem escuros por serem superfícies de mídia, nos dois temas; isso é intencional. Retratos repetidos e capas de texto são mídias ilustrativas substituíveis por conteúdo local.
- Avatares da audiência usam iniciais consistentes (por exemplo, MC para mariana.cria). A fotografia de avatar é reservada a Elizeu; a foto de mídia ilustra o apresentador. O sticker do Story fica na área inferior do torso, com tamanho reduzido para preservar cabelo, olhos, nariz, boca e queixo na foto padrão.
- Curtição, expansão, digitação, envio e seguir são estados animados por tempo. Não há clique real dentro dos componentes, sons, rede, teclado nativo nem promessa de captura exata de microinterações do aplicativo. A confirmação de Story é um feedback ilustrativo.
- Nenhum arquivo bruto, edição aprovada ou dependência foi modificado. Exportação: `brand` e oito itens em `components`. Todos os textos externos entram via `h.esc` ou `textContent`; não há URLs de mídia configuráveis.
