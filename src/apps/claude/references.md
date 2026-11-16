# Claude — referências e limites

Consulta: **1 de novembro de 2026**. Implementação local, ilustrativa e sem acesso a contas. Os textos e arquivos são exemplos editáveis. Marca e nomes de produto pertencem à Anthropic.

## Variante visual

A composição aproxima o **Claude no navegador, em sua variante clássica com fundo quente**, com controles de upload/modelo documentados no Help Center na data da consulta. Não representa todas as experiências atuais do produto: a própria documentação informa rollouts de novos projetos e de uma nova experiência de busca.

As capturas oficiais de 2024 abaixo foram abertas como imagens e inspecionadas visualmente. Elas sustentam fundo creme, balões cinza quente, respostas com serifas, bordas discretas e painel de artifact ao lado da conversa. Os tons escuros são uma adaptação coerente dessa variante, sem alegação de equivalência pixel a pixel. Georgia/Arial/Segoe UI são fallbacks locais para o contraste entre serifas editoriais e controles sem serifa; nenhuma fonte proprietária é distribuída.

## Fontes oficiais

- [Collaborate with Claude on Projects](https://www.anthropic.com/news/projects), publicado em 25/06/2024. Referência histórica visual: conhecimento de projeto, instruções, anexos e janela de artifact ao lado do chat. Não foram reutilizados dados ou nomes pessoais das capturas.
  - [Captura oficial: upload de conhecimento](https://www-cdn.anthropic.com/images/4zrzovbb/website/cc048db08b3503fa6d713b2b9e3352e8345c8b79-1920x1080.png). Observado: fundo creme, cartão com contorno fino, título serifado e área de conhecimento. A borda azul é estado de arrastar arquivo na captura; o componente local usa upload de chat.
  - [Captura oficial: conversa e artifact](https://www-cdn.anthropic.com/images/4zrzovbb/website/c5823949d9350145ce2fda51acbc7076f2139cd0-1920x1080.png). Observado: conversa à esquerda, janela à direita, abas Preview/Code, editor escuro, rodapé com copiar/baixar, resposta serifada e símbolo radial terracota.
- [Upload files to Claude](https://support.claude.com/en/articles/8241126-upload-files-to-claude), artigo datado de 23/07/2026. Confirmado: anexos pelo botão “+” inferior esquerdo e arquivos em chats/projetos. Não são simulados limites de serviço, análise do arquivo ou uploads reais.
- [What are projects?](https://support.claude.com/en/articles/9517075-what-are-projects). Confirmado: espaço de projeto com conhecimento, instruções e conversas; a página também sinaliza novo rollout beta. O componente representa a organização clássica, sem threads em nuvem nem colaboração real.
- [Artifacts](https://claude.com/features/artifacts). Confirmado na consulta: criação aberta ao lado da conversa e opções de edição/exportação. A prévia de guia é um documento de demonstração local; não utiliza geração remota. O rodapé oficial confirma as famílias **Sonnet, Opus e Haiku**, usadas sem número de versão nos defaults editáveis.
- [Change the model, effort, and thinking settings](https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings). Confirmado: seletor próximo de enviar, configurações de esforço e pensamento, indicador com tempo e seção expansível. A lista local é ilustrativa, sem alegar disponibilidade por plano. Os três status do componente “Pensando” são frases de progresso escritas para a demonstração, não raciocínio oculto de um modelo.
- [Enable and use web search](https://support.claude.com/en/articles/10684626-enable-and-use-web-search). Confirmado: na variante clássica, busca no menu “+” com marca de seleção; a página informa que a nova experiência pode buscar automaticamente, sem toggle. O componente representa o menu clássico.

## Decisões de reprodução

- O símbolo radial em SVG foi redesenhado localmente a partir da marca visível na captura oficial; é uma aproximação vetorial, não o arquivo original da marca. Ícones de ação vêm do helper local e o ícone de documento é um SVG próprio.
- O bloco de código usa texto escapado, sem execução e sem biblioteca de realce. O artifact é prévia de documento; suas abas e botões fazem parte da ilustração.
- As mudanças de estado são dirigidas pelo tempo de `tick`: digitação, envio, pensamento, copiar, upload, contexto, menus e toggle. Não há timers, chamadas de rede, listeners globais ou animações CSS autônomas.
- Temas claro/escuro usam apenas variáveis sob `.cl[data-theme]`. Dimensões entre 540–560 px são de composição; o core pode escalar para a galeria e para vídeo.
- Todos os valores editáveis interpolados no HTML passam por `h.esc`; textos animados usam o helper `h.type`, cujo contrato escreve `textContent`.
