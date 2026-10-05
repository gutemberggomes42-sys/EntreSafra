# Sistema EntreSafra

Sistema local criado a partir da planilha **Controle de manutenções EntreSafra NOVO - Editável.xlsm**.

## Como abrir

Dê dois cliques em `index.html`. O sistema funciona diretamente no navegador e mantém as alterações no próprio computador.

## Recursos

- painel geral com indicadores e progresso das reformas;
- painel executivo com comparativos e gráficos por categoria;
- pesquisa global integrada entre todos os módulos e central automática de qualidade dos dados;
- central automática de prazos, atrasos e vencimentos;
- visualização operacional em tabela ou quadro Kanban;
- módulos de plantio, caminhões, carretas, colhedoras, tratores, transbordos, vivências e CCI;
- documentação de caminhões e carretas;
- central documental de caminhões com vencimentos, alertas, CRLV, ANTT, tacógrafo, completude, filtros rápidos e visualização em cartões ou tabela;
- controle de rádios e curva S;
- módulo AXIAGRO com controle de celulares, suportes, lacres, fusíveis, endereços MAC e estoque;
- diagnóstico AXIAGRO com filtros de atenção, detecção de MAC/lacre duplicados e alertas inteligentes de reposição de estoque;
- distribuição de funcionários por local, com base de ativos, cadastro e movimentação entre equipes;
- central avançada de equipes com busca por nome ou cadastro, turno, capacidade, situação, filtros, alerta de dupla alocação, duplicação e exportação CSV, preservando permanentemente o cadastro dos funcionários;
- busca, filtros, cadastro, edição e exclusão lógica;
- ordenação por qualquer coluna, paginação configurável e indicadores de integridade em todas as tabelas;
- tema claro e escuro e interface responsiva para computador e celular;
- histórico local de inclusões, edições e exclusões;
- exportação CSV, impressão e backup completo das alterações, equipes e histórico de auditoria;
- consulta completa de todas as abas e linhas da planilha original.

Os dados originais ficam preservados em `data.json` e `data.js`. Alterações feitas pela interface são salvas pelo navegador e podem ser exportadas pelo botão **Backup dos dados**.

## Firebase

O sistema está configurado para o projeto `entresafra-17974` e sincroniza alterações, novos registros, exclusões lógicas, equipes e auditoria no documento `entressafra/workspace` do Cloud Firestore. Enquanto o Firestore estiver indisponível, o sistema mantém todas as alterações localmente e retoma a sincronização quando a conexão voltar.

O acesso usa Firebase Authentication com e-mail e senha. Antes do primeiro login, ative o provedor **E-mail/senha** no Console Firebase e publique `firestore.rules`; essas regras permitem acesso somente a usuários autenticados. A interface permite criar o primeiro usuário e depois entrar com ele. Não use regras públicas em produção.
