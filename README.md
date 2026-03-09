# 🚀 Desafio QA Beedoo 2026 - Automação de Testes

[![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/language-JavaScript-F7DF1E.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📋 Sobre o Projeto

Este repositório contém a solução completa para o desafio técnico de QA da Beedoo. O projeto consiste na análise, documentação e automação de testes para o módulo de **cadastro e listagem de cursos** da aplicação disponibilizada.

**Aplicação em teste:** [Beedoo QA Tests](https://creative-sherbet-a51eac.netlify.app/)

---

## 📊 1. Análise da Aplicação

### 1.1. Objetivo da Aplicação
A aplicação "Beedoo QA Tests" é um ambiente de demonstração desenvolvido para processos seletivos de QA. Seu objetivo é simular um sistema simples de cadastro e listagem de cursos, permitindo que candidatos demonstrem habilidades de:
- Análise de sistemas
- Criação de cenários de teste
- Automação de testes
- Documentação de bugs e melhorias

### 1.2. Principais Fluxos Disponíveis
| Fluxo | Descrição |
|-------|-----------|
| **📋 Listagem de Cursos** | Página inicial que exibe todos os cursos cadastrados |
| **➕ Cadastro de Cursos** | Formulário para criação de novos cursos com validações |
| **🔄 Navegação** | Botões para alternar entre listagem e cadastro |

### 1.3. Pontos Críticos para Teste
| Prioridade | Ponto Crítico | Motivo |
|------------|---------------|--------|
| 🔴 **Alta** | Campos obrigatórios | Impedem cadastro incompleto |
| 🟡 **Média** | Validação de datas | Evita inconsistências |
| 🟡 **Média** | Campo de vagas | Aceita apenas números |
| 🟢 **Baixa** | Responsividade | Experiência em diferentes dispositivos |

---

## 📋 2. Casos de Teste

Os cenários e casos de teste estão documentados em uma planilha do Google Sheets, abrangendo **29 casos de teste** distribuídos em:

| Módulo | Testes Positivos | Testes Negativos | Total |
|--------|------------------|------------------|-------|
| **Cadastro** | 3 | 10 | 13 |
| **Listagem** | 9 | 4 | 13 |
| **Navegação** | 3 | 0 | 3 |
| **TOTAL** | **15** | **14** | **29** |

🔗 **[Link para a Planilha de Casos de Teste](https://docs.google.com/spreadsheets/d/1aA5CjSigyc3bmf8MiO1GoxObl6-FYtTa/edit?usp=drive_link&ouid=108017183531766004653&rtpof=true&sd=true)**

---

## 🛠️ 3. Automação de Testes

### 3.1. Tecnologias Utilizadas
| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **Cypress** | ^13.0.0 | Framework de testes E2E |
| **Mochawesome** | ^7.1.3 | Gerador de relatórios |
| **JavaScript** | ES6 | Linguagem de programação |

### 3.2. Estrutura do Projeto
DESAFIO-QA-BEEDOO-2026/
├── 📁 cypress/
│ ├── 📁 e2e/ # Arquivos de teste
│ │ ├── cadastro-curso.cy.js # Testes de cadastro (14 testes)
│ │ ├── listagem-cursos.cy.js # Testes de listagem (13 testes)
│ │ └── descobrir-rota.cy.js # Testes de descoberta (14 testes)
│ │
│ ├── 📁 support/
│ │ ├── 📁 pages/ # Page Objects
│ │ │ ├── cadastroPage.js # Métodos da página de cadastro
│ │ │ └── homePage.js # Métodos da página inicial
│ │ ├── commands.js # Comandos customizados
│ │ └── e2e.js # Configurações globais
│ │
│ ├── 📁 reports/ # Relatórios gerados
│ │ ├── merged-report.json # Relatório mesclado
│ │ └── 📁 html/ # Relatório HTML
│ │ └── index.html
│ │
│ ├── 📁 screenshots/ # Prints de execução
│ └── 📁 videos/ # Gravações dos testes
│
├── 📄 cypress.config.js # Configuração do Cypress
├── 📄 package.json # Dependências e scripts
└── 📄 README.md # Documentação

text

### 3.3. Resultado da Execução
**Todos os 42 testes automatizados passaram com sucesso!**

| Arquivo | Testes | Status |
|---------|--------|--------|
| `cadastro-curso.cy.js` | 14 | ✅ 100% |
| `descobrir-rota.cy.js` | 14 | ✅ 100% |
| `listagem-cursos.cy.js` | 13 | ✅ 100% |
| `ncontrar-rota.cy.js` | 1 | ✅ 100% |
| **TOTAL** | **42** | **✅ 100% APROVAÇÃO** |

---

## 🚀 4. Como Executar

### 4.1. Pré-requisitos
- **Node.js** (v18 ou superior)
- **NPM** (v8 ou superior)
- **Git**

### 4.2. Instalação

# Clone o repositório
git clone https://github.com/seu-usuario/DESAFIO-QA-BEEDOO-2026.git

# Entre na pasta
cd DESAFIO-QA-BEEDOO-2026

# Instale as dependências
npm install
4.3. Executando os Testes
Comando	Descrição
npm run cy:open	Abre o Cypress Runner (modo interativo)
npm run cy:run	Executa todos os testes em modo headless
npm run report:windows	Executa testes e gera relatório HTML
4.4. Gerando Relatórios
bash
# Gerar relatório completo com gráficos
npm run report:windows

# O relatório estará em:
# cypress/reports/html/index.html
📸 5. Evidências de Execução
As evidências (prints e vídeos) estão disponíveis no Google Drive:

🔗 https://drive.google.com/drive/folders/1PexGLeASUMzO_Uxud4WBZpG1inO_llU2?usp=sharing

Estrutura das Evidências
📁 prints/ - Screenshots de cada teste

📁 videos/ - Gravações da execução

📁 relatorios/ - Relatórios HTML completos

🐞 6. Registro de Bugs e Melhorias
Durante a execução dos testes, foram identificados os seguintes pontos de melhoria:

ID	Título	Severidade	Tipo	Status
BUG-001	Ausência de mensagem de sucesso após cadastro	⚠️ Baixa	Usabilidade	Aberto
BUG-002	Erro de digitação no título "Chalenge"	🟢 Muito Baixa	Cosmético	Aberto
IMPL-003	Validação de datas sem mensagem explicativa	🟡 Média	Melhoria	Sugestão
Detalhamento dos Bugs
🐞 BUG-001: Ausência de mensagem de sucesso
Passos: Cadastrar um curso → Clicar em "Cadastrar"

Atual: Nenhuma mensagem é exibida

Esperado: Toast "Curso cadastrado com sucesso!"

🐞 BUG-002: Erro de digitação
Local: Cabeçalho da aplicação

Atual: "Beedoo QA Chalenge"

Esperado: "Beedoo QA Challenge"

💡 IMPL-003: Melhoria na validação de datas
Cenário: Data início > Data fim

Atual: Apenas bordas vermelhas

Sugestão: Exibir mensagem "Data fim deve ser posterior à data início"

📊 7. Resumo dos Resultados
Métrica	Resultado
Total de Testes Automatizados	42
Testes com Sucesso	42
Taxa de Aprovação	100%
Bugs Encontrados	2 (baixa prioridade)
Melhorias Sugeridas	1
👨‍💻 8. Autor
Paulo - QA Analyst

https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white(https://www.linkedin.com/in/paulo-vicente-porto-414201170/)


📝 9. Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

🙏 10. Agradecimentos
Beedoo pela oportunidade de realizar este desafio

Comunidade Cypress pela excelente documentação

Todos os 42 testes que passaram! 🎉
