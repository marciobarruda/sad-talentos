# Histórias do Redmine - Programa Talentos Públicos Recife - Trajetórias

## História 1: Implementar Área Logada com Autenticação

**Título:** Implementar área logada com autenticação de servidores

**Descrição:**
Como servidor público do município do Recife, preciso acessar uma área logada no portal do Programa Talentos Públicos Recife - Trajetórias para gerenciar minha inscrição, recursos e documentos complementares. O sistema deve autenticar o usuário e carregar automaticamente seus dados cadastrais (nome completo, CPF, data de nascimento, matrículas, cargos e vínculos) a partir da base de dados da prefeitura.

**Critérios de Validação:**
- [ ] Sistema exibe tela de login solicitando credenciais do servidor
- [ ] Após autenticação bem-sucedida, usuário é redirecionado para área logada
- [ ] Sidebar exibe nome do servidor e matrícula principal
- [ ] Sistema carrega automaticamente dados do servidor: nome completo, CPF, data de nascimento, matrícula(s), cargo(s), vínculo(s) e data(s) de admissão
- [ ] Campos de dados do servidor são exibidos como readonly (não editáveis)
- [ ] Menu lateral exibe as opções: Inscrição, Recursos, Docs. Complementares, Publicações e Acompanhamento
- [ ] Interface é responsiva para dispositivos móveis

---

## História 2: Desenvolver Formulário de Inscrição - Parte 1 (Dados do Servidor e Complementares)

**Título:** Criar formulário de inscrição com dados do servidor e dados complementares

**Descrição:**
Como servidor interessado em participar do programa, preciso preencher um formulário de inscrição com meus dados complementares (nacionalidade, lotação, PcD, gênero, raça/cor, e-mail, telefone, faixa de remuneração e informações sobre outros cargos públicos). Os dados do servidor devem vir preenchidos automaticamente e serem readonly.

**Critérios de Validação:**
- [ ] Seção "Dados do Servidor" exibe campos readonly preenchidos automaticamente: nome completo, CPF, data de nascimento, matrícula, cargo, vínculo e data de admissão
- [ ] Campo matrícula permite seleção entre múltiplos vínculos (quando aplicável)
- [ ] Ao alterar matrícula, campos cargo, vínculo e data de admissão são atualizados automaticamente
- [ ] Seção "Dados Complementares" contém campos editáveis: nacionalidade (lista com todos os países), lotação (lista de órgãos/secretarias), PcD (sim/não), gênero (lista suspensa), raça/cor (lista suspensa)
- [ ] Campos e-mail e telefone aceitam entrada de dados válidos
- [ ] Campo "Faixa de Remuneração" exibe lista suspensa com 4 opções e texto de ajuda "Verifique item 4.4.2 do Edital"
- [ ] Campo "Possui mais de um cargo público efetivo?" exibe lista suspensa (sim/não) com texto de ajuda "Verifique item 8.11 do Edital"
- [ ] Ao selecionar "sim" em outro cargo, sistema exibe campos adicionais para matrícula e lotação do segundo cargo
- [ ] Todos os campos obrigatórios são marcados com asterisco (*)
- [ ] Sistema valida preenchimento de campos obrigatórios antes de permitir avançar

---

## História 3: Desenvolver Formulário de Inscrição - Parte 2 (Requisitos Básicos)

**Título:** Implementar seção de requisitos básicos com checkboxes de declaração

**Descrição:**
Como candidato ao programa, preciso declarar que atendo aos requisitos básicos de elegibilidade através de checkboxes, confirmando que sou servidor efetivo e estável, possuo graduação completa, tenho vínculo ativo, não estou cedido/requisitado, não possuo requisitos para aposentadoria compulsória, iniciei processo de candidatura em universidade internacional, mantenho compromisso de retorno e não tenho conflito de interesse.

**Critérios de Validação:**
- [ ] Seção "Requisitos Básicos" exibe 8 checkboxes obrigatórios
- [ ] Checkbox 1: "Sou servidor público efetivo e estável do Poder Executivo do Município de Recife"
- [ ] Checkbox 2: "Possuo graduação completa até a data de publicação do Edital"
- [ ] Checkbox 3: "Possuo vínculo ativo com órgão ou entidade da administração pública direta ou indireta da Prefeitura da Cidade do Recife"
- [ ] Checkbox 4: "Não estou cedido, requisitado ou em exercício provisório em outros órgãos"
- [ ] Checkbox 5: "Não possuo requisitos para aposentadoria compulsória antes do término do período obrigatório de permanência"
- [ ] Checkbox 6: "Iniciei o processo de candidatura ou obtive carta de aceite em programas de mestrado pleno presencial"
- [ ] Checkbox 7: "Mantenho compromisso de retorno e aplicação do conhecimento adquirido"
- [ ] Checkbox 8: "Não tenho vínculo de parentesco em até terceiro grau com membros da comissão ou gestores"
- [ ] Sistema bloqueia submissão se algum checkbox não estiver marcado
- [ ] Mensagem de erro clara é exibida ao tentar avançar sem marcar todos os requisitos

---

## História 4: Desenvolver Formulário de Inscrição - Parte 3 (Upload de Documentos)

**Título:** Implementar upload de documentos comprobatórios com validação de formato

**Descrição:**
Como candidato, preciso anexar documentos comprobatórios em formato PDF (currículo, comprovante de graduação, carta de aceite/application, carta de motivação, plano de aplicação) sendo que alguns são obrigatórios e outros opcionais. O sistema deve validar o formato dos arquivos e permitir múltiplos uploads para alguns documentos.

**Critérios de Validação:**
- [ ] Seção "Documentação Comprobatória" exibe alerta informativo sobre formato PDF
- [ ] Campo 1: "Currículo atualizado (Anexo I)" - obrigatório, aceita apenas PDF
- [ ] Campo 2: "Comprovante de graduação" - obrigatório, aceita apenas PDF
- [ ] Campo 3: "Carta de aceite/admissão" - obrigatório, aceita múltiplos PDFs
- [ ] Campo 4: "Carta de Motivação (Anexo II)" - obrigatório, aceita múltiplos PDFs
- [ ] Campo 5: "Plano de Aplicação (Anexo III)" - obrigatório, aceita múltiplos PDFs
- [ ] Campo 6: "Escolha definitiva da Universidade" - opcional, aceita PDF
- [ ] Campo 7: "Carta de aceite (versão definitiva)" - opcional, aceita PDF
- [ ] Sistema valida formato de arquivo (apenas PDF) antes do upload
- [ ] Mensagem de erro é exibida ao tentar upload de arquivo em formato inválido
- [ ] Sistema bloqueia submissão se documentos obrigatórios não forem anexados
- [ ] Cada campo exibe texto de ajuda explicativo

---

## História 5: Desenvolver Formulário de Inscrição - Parte 4 (Dados Acadêmicos)

**Título:** Criar seção de dados acadêmicos com múltiplas universidades e alinhamento estratégico

**Descrição:**
Como candidato, preciso informar até 3 universidades onde iniciei processo de aplicação, incluindo país, curso pretendido e subtemas de alinhamento estratégico. O sistema deve permitir adicionar/remover universidades dinamicamente e oferecer lista suspensa com os 7 eixos estratégicos e seus respectivos subtemas.

**Critérios de Validação:**
- [ ] Seção "Dados Acadêmicos e de Pesquisa" exibe botão "Adicionar Universidade"
- [ ] Ao clicar em adicionar, sistema exibe formulário com campos: nome da universidade, país, curso pretendido e subtemas de alinhamento estratégico
- [ ] Campo "Subtemas e alinhamento estratégico" exibe lista suspensa com 7 opções de códigos (01 a 07)
- [ ] Cada opção da lista exibe: código, área prioritária, subtemas de interesse e alinhamento estratégico
- [ ] Sistema permite adicionar até 3 universidades
- [ ] Botão "Adicionar Universidade" é desabilitado ao atingir 3 universidades
- [ ] Alerta é exibido informando "Máximo de 3 universidades permitidas"
- [ ] Cada universidade adicionada exibe botão para remoção
- [ ] Ao remover universidade, botão "Adicionar" é reabilitado
- [ ] Texto de ajuda "Verifique item 1.4 do Edital" é exibido
- [ ] Candidato pode se inscrever em mais de um subtema de alinhamento estratégico

---

## História 6: Desenvolver Formulário de Inscrição - Parte 5 (Declaração Final e Envio)

**Título:** Implementar declaração final, validação completa e envio de inscrição

**Descrição:**
Como candidato, preciso ler e aceitar a declaração final sobre concordância com o edital e tratamento de dados pessoais, e então enviar minha inscrição. O sistema deve validar todos os campos obrigatórios, exibir mensagem de confirmação e permitir salvar rascunho antes do envio definitivo.

**Critérios de Validação:**
- [ ] Seção "Declaração Final" exibe checkbox obrigatório com texto completo da declaração (LGPD e concordância com edital)
- [ ] Texto da declaração está justificado e legível
- [ ] Botão "Salvar Rascunho" permite salvar formulário sem validação completa
- [ ] Botão "Enviar Inscrição" valida todos os campos obrigatórios
- [ ] Sistema exibe mensagens de erro específicas para cada campo não preenchido
- [ ] Ao clicar em "Enviar Inscrição", sistema valida: dados complementares, requisitos básicos, documentos obrigatórios, dados acadêmicos e declaração final
- [ ] Após validação bem-sucedida, modal de confirmação é exibido
- [ ] Sistema envia dados para endpoint de processamento
- [ ] Mensagem de sucesso confirma recebimento da inscrição
- [ ] Número de inscrição é gerado e exibido ao candidato
- [ ] E-mail de confirmação é enviado automaticamente

---

## História 7: Implementar Edição de Inscrição Durante Período de Submissão

**Título:** Permitir edição e complementação de inscrição durante prazo de submissão

**Descrição:**
Como candidato que já enviou inscrição, preciso poder editar meus dados e substituir/incluir documentos durante todo o período de inscrições (10/02/2026 a 13/03/2026 até 23h59). Após o encerramento do prazo, a documentação deve ser considerada definitiva, vedada inclusão posterior exceto por solicitação oficial da comissão.

**Critérios de Validação:**
- [ ] Sistema verifica data/hora atual e compara com período de inscrições
- [ ] Durante período de inscrições, botão "Editar Inscrição" é exibido na área logada
- [ ] Candidato pode acessar formulário preenchido e modificar qualquer campo editável
- [ ] Sistema permite substituição de documentos já enviados
- [ ] Sistema permite inclusão de novos documentos opcionais
- [ ] Ao salvar alterações, sistema atualiza timestamp de última modificação
- [ ] Após 13/03/2026 23h59, botão "Editar Inscrição" é ocultado
- [ ] Mensagem informativa indica que prazo de edição foi encerrado
- [ ] Sistema mantém histórico de versões da inscrição para auditoria
- [ ] Apenas comissão organizadora pode solicitar inclusão de documentos após prazo

---

## História 8: Desenvolver Módulo de Interposição de Recursos

**Título:** Criar funcionalidade para interposição de recursos administrativos

**Descrição:**
Como candidato que teve resultado preliminar divulgado, preciso poder interpor recurso administrativo dentro do prazo de 2 dias úteis após divulgação. O sistema deve permitir upload de documentos justificativos em PDF e registrar data/hora de protocolo do recurso.

**Critérios de Validação:**
- [ ] Seção "Recursos" é habilitada apenas após divulgação do resultado preliminar
- [ ] Sistema exibe prazo para interposição de recurso (2 dias úteis)
- [ ] Contador regressivo mostra tempo restante para protocolar recurso
- [ ] Formulário de recurso permite upload de documentos em PDF
- [ ] Campo de texto permite justificativa detalhada do recurso
- [ ] Sistema valida se candidato teve resultado preliminar divulgado
- [ ] Botão "Enviar Recurso" é habilitado apenas durante prazo válido
- [ ] Ao enviar recurso, sistema gera número de protocolo
- [ ] E-mail de confirmação é enviado com número de protocolo
- [ ] Após prazo, mensagem informa que período de recursos foi encerrado
- [ ] Sistema registra timestamp de envio do recurso
- [ ] Candidato pode visualizar status do recurso (em análise, deferido, indeferido)

---

## História 9: Desenvolver Módulo de Documentos Complementares

**Título:** Implementar seção para envio de documentos complementares solicitados

**Descrição:**
Como candidato, preciso poder enviar documentos complementares quando solicitado pela comissão organizadora ou para formalizar escolha definitiva da universidade (prazo até 21/04/2026). O sistema deve permitir upload de múltiplos documentos e registrar histórico de envios.

**Critérios de Validação:**
- [ ] Seção "Documentos Complementares" é acessível na área logada
- [ ] Sistema exibe lista de documentos já enviados com data/hora
- [ ] Botão "Adicionar Documento" permite upload de novos arquivos PDF
- [ ] Campo de descrição permite identificar tipo/finalidade do documento
- [ ] Sistema valida formato de arquivo (apenas PDF)
- [ ] Documentos enviados são listados com opção de download
- [ ] Sistema registra timestamp de cada envio
- [ ] Notificação é enviada à comissão quando novo documento é adicionado
- [ ] Candidato pode visualizar histórico completo de documentos enviados
- [ ] Sistema permite envio de "Escolha definitiva da Universidade" até 21/04/2026
- [ ] Após prazo específico, sistema bloqueia envio de determinados documentos

---

## História 10: Implementar Painel de Publicações e Cronograma

**Título:** Criar painel de visualização de publicações e cronograma do processo seletivo

**Descrição:**
Como candidato, preciso visualizar todas as publicações oficiais do processo seletivo (editais, resultados, comunicados) e acompanhar o cronograma com datas importantes. O sistema deve exibir informações de forma clara e permitir download de documentos publicados.

**Critérios de Validação:**
- [ ] Seção "Publicações" lista todos os documentos oficiais publicados
- [ ] Cada publicação exibe: título, data de publicação, descrição e botão de download
- [ ] Publicações são ordenadas por data (mais recentes primeiro)
- [ ] Sistema destaca publicações novas (não visualizadas pelo candidato)
- [ ] Seção "Cronograma" exibe tabela com todas as atividades e datas
- [ ] Cronograma destaca etapa atual do processo
- [ ] Atividades passadas são marcadas como concluídas
- [ ] Atividades futuras exibem contagem regressiva
- [ ] Sistema envia notificação quando nova publicação é disponibilizada
- [ ] Interface é responsiva e de fácil navegação

---

## História 11: Desenvolver Painel de Acompanhamento de Status

**Título:** Criar painel para acompanhamento de status da candidatura

**Descrição:**
Como candidato, preciso visualizar o status atual da minha candidatura (em preenchimento, enviada, em análise documental, em avaliação, resultado preliminar, resultado final) e acompanhar o progresso do processo seletivo. O sistema deve exibir informações claras sobre cada etapa.

**Critérios de Validação:**
- [ ] Seção "Acompanhamento" exibe card com status atual da candidatura
- [ ] Status possíveis: Em Preenchimento, Enviada, Em Análise Documental, Em Avaliação, Resultado Preliminar, Resultado Final
- [ ] Card exibe número da inscrição, data de envio e última atualização
- [ ] Timeline visual mostra progresso através das etapas
- [ ] Cada etapa concluída é marcada com ícone de check
- [ ] Etapa atual é destacada visualmente
- [ ] Sistema exibe mensagens específicas para cada status
- [ ] Notificações são enviadas quando status é atualizado
- [ ] Candidato pode visualizar histórico de mudanças de status
- [ ] Interface é intuitiva e de fácil compreensão

---

## História 12: Implementar Painel de Avaliação para Banca Examinadora

**Título:** Criar painel administrativo para avaliação de candidaturas pela banca

**Descrição:**
Como membro da banca examinadora, preciso acessar painel administrativo para avaliar candidaturas, atribuir notas conforme critérios estabelecidos (Excelência da Universidade - 30pts, Plano de Aplicação - 40pts, Carta de Motivação - 20pts, Experiência Profissional - 10pts), registrar justificativas e verificar elegibilidade dos candidatos.

**Critérios de Validação:**
- [ ] Painel administrativo exige autenticação de membro da banca
- [ ] Sistema lista todas as candidaturas para avaliação
- [ ] Filtros permitem buscar por status, nome, matrícula ou área de interesse
- [ ] Ao selecionar candidatura, sistema exibe todos os dados e documentos
- [ ] Primeira etapa: verificação de elegibilidade (sim/não)
- [ ] Se não elegível, sistema encerra avaliação e registra motivo
- [ ] Se elegível, sistema exibe formulário de pontuação com 4 critérios
- [ ] Critério A (Excelência da Universidade): campo numérico, máximo 30 pontos
- [ ] Critério B (Plano de Aplicação): 2 subcritérios, máximo 20 pontos cada
- [ ] Critério C (Carta de Motivação): 2 subcritérios, máximo 10 pontos cada
- [ ] Critério D (Experiência Profissional): campo numérico, máximo 10 pontos
- [ ] Sistema impede lançamento de nota acima do máximo para cada critério
- [ ] Campo de justificativa obrigatório para cada critério avaliado
- [ ] Sistema calcula total automaticamente (máximo 100 pontos)
- [ ] Botão "Salvar Avaliação" registra notas e justificativas
- [ ] Sistema registra trilha de auditoria (avaliador, data/hora, notas atribuídas)

---

## História 13: Implementar Sistema de Detecção de Conflito de Interesse

**Título:** Criar validação automática de conflito de interesse entre avaliadores e candidatos

**Descrição:**
Como sistema, preciso bloquear automaticamente a avaliação de candidaturas quando houver conflito de interesse entre avaliador e candidato (parentesco até 3º grau, subordinação hierárquica ou outras relações que comprometam imparcialidade). O sistema deve alertar o avaliador e impedir acesso aos dados da candidatura.

**Critérios de Validação:**
- [ ] Sistema mantém cadastro de relações de conflito de interesse
- [ ] Ao acessar candidatura, sistema verifica se há conflito com avaliador logado
- [ ] Se houver conflito, mensagem de alerta é exibida
- [ ] Acesso aos dados da candidatura é bloqueado para avaliador em conflito
- [ ] Sistema registra tentativa de acesso bloqueada para auditoria
- [ ] Outro membro da banca sem conflito pode avaliar a candidatura
- [ ] Sistema permite cadastro manual de conflitos pela coordenação
- [ ] Relatório de conflitos pode ser gerado para gestão

---

## História 14: Desenvolver Aplicação Automática de Critérios de Desempate

**Título:** Implementar lógica automática de desempate conforme critérios do edital

**Descrição:**
Como sistema, preciso aplicar automaticamente os 6 critérios de desempate quando candidatos obtiverem mesma pontuação final: 1) Maior pontuação no critério B, 2) Maior pontuação no critério C, 3) Mulher (priorizando pretas/pardas/indígenas), 4) Homem preto/pardo/indígena, 5) PcD, 6) Maior idade. O sistema deve ordenar candidatos respeitando essa hierarquia.

**Critérios de Validação:**
- [ ] Sistema identifica automaticamente candidatos com mesma pontuação final
- [ ] Critério 1: compara pontuação no critério B (Plano de Aplicação)
- [ ] Critério 2: se empate persiste, compara pontuação no critério C (Carta de Motivação)
- [ ] Critério 3: se empate persiste, prioriza mulheres
- [ ] Critério 3.1: entre mulheres, prioriza pretas/pardas/indígenas
- [ ] Critério 4: para candidatos masculinos, prioriza pretos/pardos/indígenas
- [ ] Critério 5: se empate persiste, prioriza PcD
- [ ] Critério 6: se empate persiste, prioriza maior idade
- [ ] Sistema registra qual critério de desempate foi aplicado
- [ ] Classificação final respeita ordem de desempate
- [ ] Relatório de classificação exibe critério de desempate utilizado

---

## História 15: Implementar Controle de Prazos e Notificações Automáticas

**Título:** Criar sistema de controle de prazos com notificações automáticas por e-mail

**Descrição:**
Como sistema, preciso controlar automaticamente todos os prazos do cronograma (submissão, avaliação, recursos, resultados) e enviar notificações por e-mail aos candidatos e avaliadores sobre prazos próximos ao vencimento, abertura de novas etapas e mudanças de status. Todos os prazos vencem às 23h59 (horário de Brasília).

**Critérios de Validação:**
- [ ] Sistema mantém cronograma com todas as datas do processo
- [ ] Notificação é enviada 3 dias antes do fim do prazo de submissão
- [ ] Notificação é enviada 1 dia antes do fim do prazo de submissão
- [ ] Notificação é enviada quando prazo de submissão encerra (23h59)
- [ ] Notificação é enviada quando resultado preliminar é divulgado
- [ ] Notificação é enviada quando prazo de recurso é aberto
- [ ] Notificação é enviada 1 dia antes do fim do prazo de recurso
- [ ] Notificação é enviada quando resultado final é divulgado
- [ ] Notificação é enviada quando termo de outorga está disponível para assinatura
- [ ] Sistema considera horário oficial de Brasília/DF para todos os prazos
- [ ] Suporte aos candidatos é informado que funciona até 17h
- [ ] E-mails contêm informações claras sobre ação necessária e prazo

---

## História 16: Desenvolver Módulo de Gestão de Recursos Administrativos

**Título:** Criar painel para análise e julgamento de recursos pela banca

**Descrição:**
Como membro da banca examinadora, preciso acessar painel para analisar recursos interpostos pelos candidatos, revisar avaliação original, alterar notas se procedente, registrar parecer fundamentado e atualizar status do recurso (deferido, parcialmente deferido, indeferido). O sistema deve manter rastreabilidade de todas as alterações.

**Critérios de Validação:**
- [ ] Painel administrativo lista todos os recursos protocolados
- [ ] Filtros permitem buscar por número de protocolo, candidato ou status
- [ ] Ao selecionar recurso, sistema exibe: candidatura completa, avaliação original, justificativa do recurso
- [ ] Sistema permite visualizar documentos anexados ao recurso
- [ ] Formulário de análise permite alterar notas de qualquer critério
- [ ] Sistema registra notas originais e notas após recurso
- [ ] Campo de parecer é obrigatório para justificar decisão
- [ ] Status do recurso pode ser: Em Análise, Deferido, Parcialmente Deferido, Indeferido
- [ ] Sistema recalcula pontuação total se notas forem alteradas
- [ ] Sistema recalcula classificação geral se houver mudança de pontuação
- [ ] Trilha de auditoria registra: avaliador, data/hora, notas alteradas, parecer
- [ ] Candidato é notificado por e-mail sobre resultado do recurso
- [ ] Prazo de 2 dias úteis para análise é controlado pelo sistema

---

## História 17: Implementar Geração de Relatórios e Dashboards Gerenciais

**Título:** Criar dashboards e relatórios para acompanhamento do processo seletivo

**Descrição:**
Como coordenador do programa, preciso visualizar dashboards com indicadores do processo (total de inscrições, status das candidaturas, distribuição por área de interesse, perfil demográfico, recursos protocolados) e gerar relatórios exportáveis em PDF/Excel para prestação de contas e transparência.

**Critérios de Validação:**
- [ ] Dashboard exibe total de inscrições recebidas
- [ ] Dashboard exibe distribuição de candidatos por status (em análise, aprovados, reprovados)
- [ ] Dashboard exibe distribuição por área de interesse (7 eixos estratégicos)
- [ ] Dashboard exibe perfil demográfico (gênero, raça/cor, PcD)
- [ ] Dashboard exibe distribuição por faixa de remuneração
- [ ] Dashboard exibe total de recursos protocolados e status
- [ ] Gráficos interativos permitem drill-down para detalhes
- [ ] Relatório de candidaturas pode ser exportado em PDF e Excel
- [ ] Relatório de classificação final pode ser exportado
- [ ] Relatório de recursos pode ser exportado
- [ ] Relatório de trilha de auditoria pode ser gerado
- [ ] Filtros permitem segmentar dados por período, status ou área
- [ ] Dashboards são atualizados em tempo real

---

## História 18: Implementar Gestão de Termo de Outorga e Assinatura Digital

**Título:** Criar funcionalidade para geração e assinatura digital do Termo de Outorga

**Descrição:**
Como candidato aprovado no resultado final, preciso acessar o Termo de Outorga gerado automaticamente com meus dados, revisar as condições e assinar digitalmente até 15/05/2026. O sistema deve validar assinatura e registrar aceite formal do candidato.

**Critérios de Validação:**
- [ ] Sistema gera automaticamente Termo de Outorga para candidatos aprovados
- [ ] Termo é preenchido com dados do candidato e da universidade escolhida
- [ ] Candidato recebe notificação por e-mail quando termo está disponível
- [ ] Seção "Termo de Outorga" é habilitada na área logada
- [ ] Candidato pode visualizar PDF do termo antes de assinar
- [ ] Botão "Assinar Digitalmente" permite aceite formal
- [ ] Sistema valida identidade do candidato antes de aceitar assinatura
- [ ] Timestamp de assinatura é registrado
- [ ] Termo assinado fica disponível para download
- [ ] Sistema bloqueia assinatura após prazo de 15/05/2026
- [ ] Coordenação recebe notificação quando termo é assinado
- [ ] Relatório de termos assinados pode ser gerado

---

## História 19: Desenvolver Sistema de Auditoria e Logs de Atividades

**Título:** Implementar trilha de auditoria completa de todas as ações no sistema

**Descrição:**
Como auditor ou coordenador, preciso acessar logs detalhados de todas as ações realizadas no sistema (acessos, edições, avaliações, recursos, alterações de notas) para garantir transparência, rastreabilidade e conformidade com LGPD. O sistema deve registrar quem fez, o que fez, quando fez e quais dados foram alterados.

**Critérios de Validação:**
- [ ] Sistema registra log de todos os acessos ao sistema (usuário, data/hora, IP)
- [ ] Sistema registra log de todas as edições de candidatura (campos alterados, valores anteriores/novos)
- [ ] Sistema registra log de todas as avaliações (avaliador, candidato, notas atribuídas)
- [ ] Sistema registra log de todos os recursos (protocolo, candidato, data/hora)
- [ ] Sistema registra log de todas as alterações de notas após recurso
- [ ] Sistema registra log de uploads de documentos
- [ ] Sistema registra log de downloads de documentos
- [ ] Sistema registra log de assinaturas de termos
- [ ] Painel de auditoria permite buscar logs por usuário, data, tipo de ação
- [ ] Logs são armazenados de forma segura e imutável
- [ ] Relatório de auditoria pode ser exportado
- [ ] Sistema mantém logs por no mínimo 5 anos conforme legislação
- [ ] Acesso aos logs é restrito a perfis autorizados

---

## História 20: Implementar Conformidade com LGPD e Gestão de Consentimentos

**Título:** Criar módulo de gestão de consentimentos e conformidade com LGPD

**Descrição:**
Como responsável pela proteção de dados, preciso garantir que o sistema esteja em conformidade com a LGPD, coletando consentimentos explícitos dos candidatos para tratamento de dados pessoais e sensíveis, permitindo exercício de direitos (acesso, retificação, exclusão) e mantendo registro de todas as operações de tratamento de dados.

**Critérios de Validação:**
- [ ] Sistema exibe termo de consentimento LGPD antes do primeiro acesso
- [ ] Termo explica quais dados serão coletados e para quais finalidades
- [ ] Candidato deve aceitar termo para prosseguir com inscrição
- [ ] Sistema registra timestamp de aceite do termo
- [ ] Candidato pode acessar cópia do termo aceito a qualquer momento
- [ ] Sistema permite que candidato solicite cópia de seus dados pessoais
- [ ] Sistema permite que candidato solicite retificação de dados incorretos
- [ ] Sistema permite que candidato solicite exclusão de dados (após fim do processo)
- [ ] Dados sensíveis (raça/cor, PcD, saúde) são criptografados
- [ ] Acesso a dados sensíveis é restrito e auditado
- [ ] Sistema mantém registro de operações de tratamento de dados
- [ ] Política de privacidade está acessível e atualizada
- [ ] Sistema possui DPO (Encarregado de Dados) designado
- [ ] Canal de comunicação para exercício de direitos LGPD está disponível

---

## Observações Gerais

**Tecnologias Utilizadas:**
- Frontend: HTML5, CSS3, JavaScript, Bootstrap 5.3.3
- Fontes: Google Fonts (Public Sans)
- Ícones: Bootstrap Icons
- Backend: Integração com n8n (webhooks)
- Autenticação: Sistema de autenticação da Prefeitura do Recife

**Prazos Importantes:**
- Lançamento do Edital: 10/02/2026
- Submissão de candidatura: 10/02/2026 a 13/03/2026 (23h59)
- Avaliação documental: 16/03/2026 a 20/03/2026
- Avaliação das candidaturas: 23/03/2026 a 24/04/2026
- Entrega de carta de aceite: Até 21/04/2026
- Resultado preliminar: Até 27/04/2026
- Interposição de recurso: 2 dias úteis após resultado preliminar
- Avaliação de recurso: 2 dias úteis
- Resultado final: A partir de 05/05/2026
- Assinatura do Termo de Outorga: Até 15/05/2026
- Início da implementação: A partir de julho de 2026
