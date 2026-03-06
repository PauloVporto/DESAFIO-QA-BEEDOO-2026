// Comando para criar um curso via interface
Cypress.Commands.add('criarCursoViaUI', (curso) => {
    cy.visit('/new-course');
    
    if (curso.nome) cy.get('input[aria-label="Nome do curso"]').type(curso.nome);
    if (curso.descricao) cy.get('textarea[aria-label="Descrição do curso"]').type(curso.descricao);
    if (curso.instrutor) cy.get('input[aria-label="Instrutor"]').type(curso.instrutor);
    if (curso.urlImagem) cy.get('input[aria-label="Url da imagem de capa"]').type(curso.urlImagem);
    if (curso.dataInicio) cy.get('input[aria-label="Data de início"]').type(curso.dataInicio);
    if (curso.dataFim) cy.get('input[aria-label="Data de fim"]').type(curso.dataFim);
    if (curso.numeroVagas) cy.get('input[aria-label="Número de vagas"]').type(curso.numeroVagas.toString());
    
    if (curso.tipoCurso) {
        cy.get('.q-select[aria-label="Tipo de curso"]').click();
        cy.get('.q-menu .q-item').contains(curso.tipoCurso).click();
    }
    
    cy.contains('button', 'Cadastrar curso').click();
});

// Comando para verificar se há cursos na listagem
Cypress.Commands.add('verificarCursosListagem', () => {
    cy.visit('/');
    return cy.get('body').then(($body) => {
        // Verifica se existe algum elemento que pareça um curso
        const temCurso = $body.find('.curso, .card, .q-card, .list-item').length > 0;
        return temCurso;
    });
});