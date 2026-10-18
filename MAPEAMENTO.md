# UNI-ON — mapeamento do protótipo

Referências fornecidas: três capturas do urubUSP e uma imagem da paleta, na pasta pai. Essas imagens permitem mapear somente as áreas visíveis, não o aplicativo completo.

## Marca

Roxo profundo #25143D; violeta #7545E8; âmbar #FFB547; off-white #FAF7F2. O nome UNI-ON aparece como texto, pois não foi fornecido um arquivo de logotipo.

## Referências e adaptação

| Referência | Protótipo UNI-ON | Interações implementadas |
| --- | --- | --- |
| Feed de publicações e navegação inferior | Início com comunidade e jornada | Publicar texto, curtir, comentar e copiar texto para compartilhar |
| Busca, cardápio, jogo e agenda | Explorar com busca, restaurante e encontros | Filtrar atividades, abrir detalhes e confirmar presença demonstrativa |
| Cardápio por campus, restaurante e dia | Cardápio com seletores equivalentes | Selecionar campus, restaurante e dia; avaliar o menu |
| Camada adicional solicitada | Missões e perfil | Definir meta, confirmar atividade, receber XP, acompanhar nível e conquistas |

O cardápio e as atividades são ilustrativos. Selecionar um campus não consulta dados reais. A confirmação de atividade não envia inscrições externas. O protótipo usa memória do navegador e reinicia ao recarregar.

## Gamificação

- Meta de estudo: 40 XP.
- Participação em grupo de estudos: 60 XP.
- Participação em outra atividade: 80 XP.
- XP concedido uma vez por missão na sessão.
- Nível inicial demonstrativo: 3, com 320 XP. Nível 4 a partir de 500 XP.
- As pausas não retiram pontos. Não há classificação pública entre estudantes.
- Apoio estudantil acessível no feed e perfil, com texto de orientação; os contatos institucionais ainda precisam ser definidos.

## Pendências

Não foram fornecidas telas de login, mensagens, perfil ou notificações do produto de referência. Perfil e notificações são propostas adicionais do protótipo; mensagens não foram simuladas.

A versão desktop substituiu a apresentação em moldura de celular, conforme solicitação do usuário. Entrada: src/desktop-main.tsx. Menu lateral, conteúdo central e painel de jornada à direita; em telas menores, o layout se adapta. Formulários usam campos nativos e janelas acessíveis.

Verificação atual: npm run build passou (TypeScript e Vite); npm run test:sites passou (4/4); check:runtime passou para os 28 arquivos originais preservados. A prévia local falhou com EPERM ao abrir 127.0.0.1:5173 neste ambiente. Validação visual e interações no navegador seguem pendentes.
