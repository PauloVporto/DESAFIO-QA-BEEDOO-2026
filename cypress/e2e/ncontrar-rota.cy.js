
describe('ENCONTRAR A ROTA DE CADASTRO', () => {
    
    it('Clica no botão e captura a URL', () => {
        cy.visit('https://creative-sherbet-a51eac.netlify.app/');
        
        cy.contains('a', 'Cadastrar curso').click();
        
        cy.url().should('include', '/'); // Vai capturar a URL
        
        cy.url().then((url) => {
            cy.log('🎯🎯🎯 URL ENCONTRADA: ' + url);
            cy.log('🎯🎯🎯 ROTA É: ' + url.replace('https://creative-sherbet-a51eac.netlify.app', ''));
        });
        
        // Tira um print para confirmar
        cy.screenshot('pagina-cadastro');
    });
});