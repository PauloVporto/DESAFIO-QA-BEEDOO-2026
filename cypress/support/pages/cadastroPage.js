class CadastroPage {
    visit() {
        cy.visit('/new-course');
    }

    // ========== CAMPOS DO FORMULÁRIO ==========
    getCampoNome() {
        return cy.get('input[aria-label="Nome do curso"]');
    }

    getCampoDescricao() {
        return cy.get('textarea[aria-label="Descrição do curso"]');
    }

    getCampoInstrutor() {
        return cy.get('input[aria-label="Instrutor"]');
    }

    getCampoUrlImagem() {
        return cy.get('input[aria-label="Url da imagem de capa"]');
    }

    getCampoDataInicio() {
        return cy.get('input[aria-label="Data de início"]');
    }

    getCampoDataFim() {
        return cy.get('input[aria-label="Data de fim"]');
    }

    getCampoNumeroVagas() {
        return cy.get('input[aria-label="Número de vagas"]');
    }

    getCampoTipoCurso() {
        return cy.get('.q-select[aria-label="Tipo de curso"]');
    }

    abrirDropdownTipoCurso() {
        this.getCampoTipoCurso().click();
    }

    selecionarTipoCurso(tipo) {
        this.abrirDropdownTipoCurso();
        cy.get('.q-menu .q-item')
            .contains(tipo)
            .click();
    }

    // ========== BOTÕES ==========
    getBotaoCadastrar() {
        return cy.contains('button', 'Cadastrar curso');
    }

    clicarCadastrar() {
        this.getBotaoCadastrar().click();
    }

    clicarListarCursos() {
        cy.contains('a', 'Listar cursos').click();
    }

    // ========== AÇÕES COMPOSTAS ==========
    preencherFormulario(curso) {
        if (curso.nome) this.getCampoNome().type(curso.nome);
        if (curso.descricao) this.getCampoDescricao().type(curso.descricao);
        if (curso.instrutor) this.getCampoInstrutor().type(curso.instrutor);
        if (curso.urlImagem) this.getCampoUrlImagem().type(curso.urlImagem);
        if (curso.dataInicio) this.getCampoDataInicio().type(curso.dataInicio);
        if (curso.dataFim) this.getCampoDataFim().type(curso.dataFim);
        if (curso.numeroVagas) this.getCampoNumeroVagas().type(curso.numeroVagas.toString());
        if (curso.tipoCurso) this.selecionarTipoCurso(curso.tipoCurso);
    }

    // ========== VALIDAÇÕES ==========
    verificarMensagemSucesso() {
        return cy.get('.q-notifications .q-notification--success, .q-notifications .bg-positive')
            .should('be.visible');
    }

    verificarMensagemErro(mensagem) {
        return cy.get('.q-notifications .q-notification--warning, .q-notifications .q-notification--negative, .q-notifications .bg-negative')
            .contains(mensagem)
            .should('be.visible');
    }

    verificarCampoComErro(campo) {
        return campo.closest('.q-field')
            .should('have.class', 'q-field--error');
    }

    limparFormulario() {
        this.getCampoNome().clear();
        this.getCampoDescricao().clear();
        this.getCampoInstrutor().clear();
        this.getCampoUrlImagem().clear();
        this.getCampoDataInicio().clear();
        this.getCampoDataFim().clear();
        this.getCampoNumeroVagas().clear();
    }
}

export default new CadastroPage();