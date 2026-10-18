# Design QA — versão desktop UNI-ON

final result: blocked

Solicitação atual: apresentar a UNI-ON em tela de PC. A implementação usa menu lateral, conteúdo central e painel de jornada à direita; a moldura de celular não é carregada pela entrada principal.

Referências: três capturas urubUSP e paleta fornecida, inspecionadas anteriormente. As áreas e a paleta foram adaptadas ao formato desktop solicitado.

Verificação técnica: npm run build passou (TypeScript e Vite); npm run test:sites passou (4/4); check:runtime passou (28 arquivos originais preservados).

Bloqueio visual: não há ferramenta de navegador disponível. A tentativa de iniciar a prévia em 127.0.0.1:5173 retornou listen EPERM. Não foram realizados screenshots ou testes de interação visual. O build não equivale a aprovação visual.

Atualização de branding: logo PNG original aplicado ao cabeçalho sobre base off-white. Nova compilação e testes de empacotamento executados. Painel de identidade e logo entregues separadamente em ../branding. A validação visual do app segue pendente.
