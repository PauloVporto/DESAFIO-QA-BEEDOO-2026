class CadastroPage {
    visit() {
        cy.visit('/new-course');
        // Aguarda a página carregar completamente
        cy.get('input[aria-label="Nome do curso"]', { timeout: 10000 }).should('be.visible');
    }

    // ========== CAMPOS DO FORMULÁRIO ==========
    getCampoNome() {
        return cy.get('input[aria-label="Nome do curso"]', { timeout: 10000 });
    }

    getCampoDescricao() {
        return cy.get('textarea[aria-label="Descrição do curso"]', { timeout: 10000 });
    }

    getCampoInstrutor() {
        return cy.get('input[aria-label="Instrutor"]', { timeout: 10000 });
    }

    getCampoUrlImagem() {
        return cy.get('input[aria-label="Url da imagem de capa"]', { timeout: 10000 });
    }

    getCampoDataInicio() {
        return cy.get('input[aria-label="Data de início"]', { timeout: 10000 });
    }

    getCampoDataFim() {
        return cy.get('input[aria-label="Data de fim"]', { timeout: 10000 });
    }

    getCampoNumeroVagas() {
        return cy.get('input[aria-label="Número de vagas"]', { timeout: 10000 });
    }

    // ========== TIPO DE CURSO - CORRIGIDO COM BASE NO HTML REAL ==========

    /**
     * Retorna o LABEL do campo Tipo de Curso (elemento visível)
     * Baseado no HTML: <label class="q-field ... q-select ...">
     */
    getCampoTipoCursoLabel() {
        return cy.get('label.q-select[for^="f_"]', { timeout: 10000 })
            .should('be.visible');
    }

    /**
     * Retorna o input invisível (para verificações de estado)
     * Baseado no HTML: <input class="q-select__focus-target" aria-label="Tipo de curso">
     */
    getCampoTipoCursoInput() {
        return cy.get('input.q-select__focus-target[aria-label="Tipo de curso"]', { timeout: 10000 })
            .should('exist'); // Não verificar visibilidade pois tem opacity:0
    }

    /**
     * Abre o dropdown de tipos de curso clicando no LABEL visível
     */
    abrirDropdownTipoCurso() {
        cy.log('Abrindo dropdown de tipo de curso');
        
        // Clica no LABEL visível (não no input invisível)
        this.getCampoTipoCursoLabel().click({ force: true });
        
        // Aguarda o menu abrir usando o seletor correto do HTML
        cy.get('div[role="listbox"].q-menu', { timeout: 5000 })
            .should('be.visible');
    }

    /**
     * Seleciona um tipo específico de curso
     * @param {string} tipo - "Presencial" ou "Online" (NÃO usar "Selecione...")
     */
    selecionarTipoCurso(tipo) {
        cy.log(`🎯 Selecionando tipo de curso: "${tipo}"`);
        
        // Abre o dropdown
        this.abrirDropdownTipoCurso();
        
        // Seleciona a opção desejada (ignora "Selecione...")
        cy.get('div[role="listbox"].q-menu .q-item', { timeout: 5000 })
            .contains(tipo)
            .should('be.visible')
            .click({ force: true });
        
        // Verifica se o dropdown fechou
        cy.get('div[role="listbox"].q-menu').should('not.exist');
        
        cy.log(`✅ Tipo "${tipo}" selecionado com sucesso`);
    }

    /**
     * Lista todas as opções disponíveis (útil para debug)
     */
    listarTiposDisponiveis() {
        cy.log('📋 Listando tipos de curso disponíveis:');
        
        // Abre o dropdown
        this.getCampoTipoCursoLabel().click({ force: true });
        cy.get('div[role="listbox"].q-menu', { timeout: 5000 }).should('be.visible');
        
        // Lista as opções
        cy.get('div[role="listbox"].q-menu .q-item').then(($items) => {
            cy.log(`Total de opções: ${$items.length}`);
            $items.each((index, item) => {
                const texto = Cypress.$(item).find('span').text().trim();
                cy.log(`   ${index + 1}. "${texto}"`);
            });
        });
        
        // Fecha o dropdown clicando fora
        cy.get('body').click(0,0);
        
        return this;
    }

    /**
     * Verifica se o campo tipo de curso está em erro
     */
    verificarTipoCursoComErro() {
        cy.log('Verificando se tipo de curso está com erro');
        // O erro é aplicado ao label, não ao input
        return this.getCampoTipoCursoLabel()
            .closest('.q-field') // O label já é .q-field, mas vamos garantir
            .should('have.class', 'q-field--error');
    }

    // ========== BOTÕES ==========
    getBotaoCadastrar() {
        return cy.contains('button', 'Cadastrar curso', { timeout: 10000 });
    }

    clicarCadastrar() {
        cy.log('Clicando no botão Cadastrar curso');
        this.getBotaoCadastrar().click();
        return this;
    }

    clicarListarCursos() {
        cy.log('Clicando em Listar cursos');
        cy.contains('a', 'Listar cursos', { timeout: 10000 }).click();
        return this;
    }

    // ========== AÇÕES COMPOSTAS ==========
    /**
     * Preenche o formulário com os dados fornecidos
     * @param {Object} curso - Dados do curso
     */
    preencherFormulario(curso) {
        cy.log('📝 Preenchendo formulário...');
        
        if (curso.nome) {
            this.getCampoNome().clear().type(curso.nome);
            cy.log(`   Nome: ${curso.nome}`);
        }
        
        if (curso.descricao) {
            this.getCampoDescricao().clear().type(curso.descricao);
        }
        
        if (curso.instrutor) {
            this.getCampoInstrutor().clear().type(curso.instrutor);
        }
        
        if (curso.urlImagem) {
            this.getCampoUrlImagem().clear().type(curso.urlImagem);
        }
        
        if (curso.dataInicio) {
            this.getCampoDataInicio().clear().type(curso.dataInicio);
            cy.log(`   Data início: ${curso.dataInicio}`);
        }
        
        if (curso.dataFim) {
            this.getCampoDataFim().clear().type(curso.dataFim);
            cy.log(`   Data fim: ${curso.dataFim}`);
        }
        
        if (curso.numeroVagas !== undefined) {
            this.getCampoNumeroVagas().clear().type(curso.numeroVagas.toString());
            cy.log(`   Vagas: ${curso.numeroVagas}`);
        }
        
        if (curso.tipoCurso) {
            // Pequena pausa antes de selecionar o tipo
            cy.wait(500);
            this.selecionarTipoCurso(curso.tipoCurso);
            cy.log(`   Tipo: ${curso.tipoCurso}`);
        }
        
        cy.log('✅ Formulário preenchido');
        return this;
    }

    // ========== VALIDAÇÕES ==========
    verificarMensagemSucesso() {
        cy.log('Verificando mensagem de sucesso...');
        return cy.get('.q-notifications .q-notification--success, .q-notifications .bg-positive', { timeout: 10000 })
            .should('be.visible');
    }

    verificarMensagemErro(mensagem) {
        cy.log(`Verificando mensagem de erro: "${mensagem}"`);
        return cy.get('.q-notifications .q-notification--warning, .q-notifications .q-notification--negative, .q-notifications .bg-negative', { timeout: 10000 })
            .contains(mensagem)
            .should('be.visible');
    }

    verificarCampoComErro(campo) {
        cy.log('Verificando se campo está com erro');
        return campo.closest('.q-field')
            .should('have.class', 'q-field--error');
    }

    // ========== UTILITÁRIOS ==========
    limparFormulario() {
        cy.log('Limpando formulário...');
        this.getCampoNome().clear();
        this.getCampoDescricao().clear();
        this.getCampoInstrutor().clear();
        this.getCampoUrlImagem().clear();
        this.getCampoDataInicio().clear();
        this.getCampoDataFim().clear();
        this.getCampoNumeroVagas().clear();
        cy.log('✅ Formulário limpo');
        return this;
    }

    /**
     * Aguarda o carregamento da página
     */
    aguardarCarregamento() {
        cy.log('Aguardando carregamento da página...');
        cy.get('input[aria-label="Nome do curso"]', { timeout: 10000 }).should('be.visible');
        cy.get('label.q-select[for^="f_"]', { timeout: 10000 }).should('be.visible');
        cy.log('✅ Página carregada');
        return this;
    }
}

export default new CadastroPage();