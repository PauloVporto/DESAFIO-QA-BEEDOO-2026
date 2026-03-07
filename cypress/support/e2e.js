// Import commands.js
import './commands';

// Executar antes de cada teste
beforeEach(() => {
    cy.log('🚀 Iniciando teste: ' + Cypress.currentTest.title);
});

// Executar após cada teste
afterEach(() => {
    const testState = Cypress.currentTest.state;
    const testName = Cypress.currentTest.title;
    
    cy.log(`🏁 Teste finalizado: ${testName} - Status: ${testState}`);
    
    // Se o teste passou, tira print mesmo assim (para evidência)
    if (testState === 'passed') {
        cy.screenshot(`passou-${testName.replace(/[^a-z0-9]/g, '-')}`, {
            capture: 'fullPage'
        });
    }
});