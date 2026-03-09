
# Desafio QA Beedoo 2026 - Automação de Testes

[![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/language-JavaScript-F7DF1E.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


Este repositório contém a solução para o Desafio Técnico de QA da Beedoo.
O projeto consiste na análise da aplicação, criação de cenários de teste e automação de testes para o módulo de cadastro e listagem de cursos.

Aplicação em teste:
https://creative-sherbet-a51eac.netlify.app/

📊 2. Análise da Aplicação
2.1 Objetivo da Aplicação

A aplicação foi desenvolvida para simular um sistema simples de cadastro e listagem de cursos.

Seu objetivo é permitir que usuários:

Cadastrem novos cursos

Visualizem cursos cadastrados

Naveguem entre páginas da aplicação

O sistema também serve como ambiente de prática para avaliação de habilidades de QA, incluindo análise de requisitos, criação de cenários de teste e automação.

2.2 Principais Fluxos Disponíveis
1. Fluxo de Listagem

A página inicial (/) exibe a lista de cursos cadastrados.
Quando não existem cursos cadastrados, a lista aparece vazia.

2. Fluxo de Cadastro

Através do botão "Cadastrar curso", o usuário é direcionado para a página de cadastro (/new-course), onde deve preencher um formulário com os dados do curso.

3. Fluxo de Navegação

A aplicação permite navegar entre as páginas de listagem e cadastro através dos botões disponíveis no cabeçalho.

2.3 Pontos Críticos para Teste

Os principais pontos que merecem maior atenção durante os testes são:

Cadastro de Cursos

Validação de campos obrigatórios

Formatos de data

Campos numéricos (quantidade de vagas)

Campo de seleção de tipo de curso

Persistência de Dados

Garantir que os cursos cadastrados permaneçam disponíveis após atualização da página.

A aplicação utiliza localStorage para armazenamento dos dados.

Navegação

Verificar se os links entre páginas funcionam corretamente.

Responsividade

Avaliar o comportamento da interface em diferentes resoluções (mobile, tablet e desktop).

📋 3. Casos de Teste

Os cenários e casos de teste foram documentados em uma planilha do Google Sheets, contemplando:

Fluxos positivos

Cenários negativos

Validações de campos

Testes de navegação

Comportamentos inesperados

🔗 Planilha de Casos de Teste, videos e report

   [LINK](https://drive.google.com/drive/folders/1PexGLeASUMzO_Uxud4WBZpG1inO_llU2?usp=sharing)


(Certifique-se de que a planilha esteja com permissão de visualização pública.)

⚙️ 4. Automação dos Testes

Os testes automatizados foram desenvolvidos utilizando Cypress, seguindo boas práticas de organização com Page Objects.

4.1 Tecnologias Utilizadas

Cypress — Framework de automação de testes E2E

JavaScript

Mochawesome — Gerador de relatórios HTML

Page Object Pattern — Organização e reutilização de código

4.2 Estrutura do Projeto

**DESAFIO-QA-BEEDOO-2026
│
├── cypress
│   ├── e2e
│   │   ├── cadastro-curso.cy.js
│   │   ├── listagem-cursos.cy.js
│   │
│   ├── support
│   │   ├── pages
│   │   │   ├── cadastroPage.js
│   │   │   └── homePage.js
│   │   │
│   │   └── commands.js
│   │
│   └── reports
│
├── cypress.config.js
├── package.json
└── README.md**

▶️ 4.3 Como Executar os Testes
Pré-requisitos

Node.js instalado

npm instalado

1. Clonar o repositório
git clone https://github.com/seu-usuario/DESAFIO-QA-BEEDOO-2026.git
2. Acessar a pasta do projeto
cd DESAFIO-QA-BEEDOO-2026
3. Instalar dependências
npm install
4. Executar testes no terminal
npm run cy:run
5. Executar testes com geração de relatório
npm run report

Esse comando:

limpa relatórios antigos

executa todos os testes

gera relatório HTML com resultados

6. Executar Cypress no modo interativo
npm run cy:open
📊 4.4 Resultado da Execução

Todos os testes automatizados foram executados com sucesso.

Resultados

Total de testes: 42

Testes aprovados: 42

Testes com falha: 0

Status final:

✅ 100% de aprovação

📁 5. Evidências de Execução

As evidências da execução dos testes foram armazenadas em uma pasta compartilhada contendo:

Screenshots

Vídeos da execução

Resultados dos testes

🔗 Link para evidências

https://drive.google.com/COLE_AQUI_SEU_LINK

📊 5.1 Relatório de Testes

Após executar os testes, o relatório HTML pode ser acessado em:

cypress/reports/html/index.html

O relatório contém:

Status de cada teste

Tempo de execução

Screenshots

Logs da execução
6. ## 🐞 Registro de Bugs e Melhorias

Durante a execução dos 42 testes automatizados, todos passaram com sucesso, mas foram identificados alguns pontos de melhoria na aplicação:

### BUG-001: Ausência de mensagem de sucesso após cadastro
- **Severidade:** Baixa
- **Descrição:** Após cadastrar um curso com sucesso, o usuário é redirecionado para a listagem sem qualquer feedback visual confirmando a ação.
- **Sugestão:** Adicionar uma notificação toast com a mensagem "Curso cadastrado com sucesso!".

### BUG-002: Erro de digitação no título
- **Severidade:** Muito Baixa
- **Descrição:** O cabeçalho da aplicação exibe "Beedoo QA Chalenge" em vez de "Beedoo QA Challenge".
- **Sugestão:** Corrigir a ortografia da palavra "Challenge".

### IMPL-003: Validação de datas sem mensagem explicativa
- **Severidade:** Média
- **Descrição:** Quando o usuário tenta cadastrar com data de início maior que a data de fim, os campos são destacados em vermelho, mas nenhuma mensagem de erro explica o problema.
- **Sugestão:** Adicionar uma mensagem de erro específica: "A data de fim deve ser posterior à data de início".

### Status dos Testes
- ✅ **42 testes executados**
- ✅ **100% de aprovação**
- 🐞 **2 bugs registrados** (baixa prioridade)
- 💡 **1 sugestão de melhoria**

🏁 7. Conclusão

A aplicação foi analisada, cenários de teste foram definidos e 42 testes automatizados foram implementados utilizando Cypress.

Durante o desafio foi possível:

Analisar o comportamento da aplicação

Criar cenários de teste positivos e negativos

Automatizar fluxos críticos

Gerar relatórios detalhados de execução

Toda a documentação, automação e evidências estão disponíveis neste repositório.
