describe('Investigação - Bug na Listagem de Cursos', () => {
    
    it('CT999 - Fluxo completo: cadastrar e verificar se aparece na listagem', () => {
        // 1. Ir para cadastro
        cy.visit('/new-course');
        
        // 2. Preencher formulário
        cy.get('input[aria-label="Nome do curso"]').type('Curso Teste Bug');
        cy.get('textarea[aria-label="Descrição do curso"]').type('Descrição do curso teste');
        cy.get('input[aria-label="Instrutor"]').type('Instrutor Teste');
        cy.get('input[aria-label="Url da imagem de capa"]').type('https://exemplo.com/imagem.jpg');
        cy.get('input[aria-label="Data de início"]').type('2026-03-01');
        cy.get('input[aria-label="Data de fim"]').type('2026-03-30');
        cy.get('input[aria-label="Número de vagas"]').type('10');
        
        // Selecionar tipo de curso
        cy.get('.q-select[aria-label="Tipo de curso"]').click();
        cy.get('.q-menu .q-item').first().click();
        
        // 3. Clicar em cadastrar
        cy.contains('button', 'Cadastrar curso').click();
        
        // 4. Verificar se apareceu mensagem de sucesso
        cy.get('.q-notifications').should('be.visible');
        cy.wait(2000);
        
        // 5. Verificar URL atual
        cy.url().then((url) => {
            cy.log('URL atual após cadastro:', url);
        });
        
        // 6. Ir para listagem manualmente
        cy.visit('/');
        
        // 7. Tentar encontrar o curso
        cy.get('body').then(($body) => {
            if ($body.text().includes('Curso Teste Bug')) {
                cy.log('✅ Curso encontrado na listagem!');
            } else {
                cy.log('❌ Curso NÃO encontrado na listagem - POSSÍVEL BUG!');
            }
        });
    });

    it('CT998 - Verificar comportamento após cadastro', () => {
        cy.visit('/new-course');
        
        // Preencher campos obrigatórios apenas
        cy.get('input[aria-label="Nome do curso"]').type('Curso Rápido');
        cy.get('textarea[aria-label="Descrição do curso"]').type('Descrição');
        cy.get('input[aria-label="Instrutor"]').type('Instrutor');
        cy.get('input[aria-label="Data de início"]').type('2026-03-01');
        cy.get('input[aria-label="Data de fim"]').type('2026-03-30');
        cy.get('input[aria-label="Número de vagas"]').type('10');
        cy.get('.q-select[aria-label="Tipo de curso"]').click();
        cy.get('.q-menu .q-item').first().click();
        
        cy.contains('button', 'Cadastrar curso').click();
        
        // Verificar para onde é redirecionado
        cy.url().then((url) => {
            cy.log('Redirecionado para:', url);
        });
        
        // Verificar se há mensagem
        cy.get('.q-notifications').then(($notify) => {
            cy.log('Notificação:', $notify.text());
        });
    });
});
