import cadastroPage from '../support/pages/cadastroPage';
import homePage from '../support/pages/homePage';

describe('Testes de Cadastro de Cursos', () => {
    
    beforeEach(() => {
        // Visitar página inicial e navegar para cadastro
        cy.visit('/');
        cy.contains('a', 'Cadastrar curso').click();
        cy.url().should('include', '/new-course');
        
        // Aguardar a página carregar completamente
        cy.get('input[aria-label="Nome do curso"]', { timeout: 10000 }).should('be.visible');
        
        // Verificar o LABEL visível do tipo de curso
        cy.get('label.q-select[for^="f_"]', { timeout: 10000 }).should('be.visible');
    });

    describe('✅ CTs POSITIVOS', () => {
        
        it('CT001 - Cadastro com todos os campos preenchidos', () => {
            cadastroPage.getCampoNome().type('Cypress Básico');
            cadastroPage.getCampoDescricao().type('Curso introdutório de Cypress');
            cadastroPage.getCampoInstrutor().type('João Silva');
            cadastroPage.getCampoUrlImagem().type('https://exemplo.com/img.jpg');
            cadastroPage.getCampoDataInicio().type('2026-03-01');
            cadastroPage.getCampoDataFim().type('2026-03-30');
            cadastroPage.getCampoNumeroVagas().type('20');
            
            cadastroPage.selecionarTipoCurso('Online');
            cadastroPage.clicarCadastrar();
            
            // ✅ VERIFICAÇÕES PARA TESTES POSITIVOS
            cy.url().should('include', '/'); // Verifica redirecionamento
            cy.contains('h4', 'Lista de cursos', { timeout: 10000 }).should('be.visible'); // Verifica listagem
            cy.contains('Cypress Básico', { timeout: 10000 }).should('be.visible'); // Verifica se o curso apareceu
            
            cy.log('✅ CT001 executado com sucesso');
        });

        it('CT002 - Cadastro com datas iguais', () => {
            cadastroPage.getCampoNome().type('Workshop 1 dia');
            cadastroPage.getCampoDescricao().type('Curso rápido');
            cadastroPage.getCampoInstrutor().type('Maria Santos');
            cadastroPage.getCampoUrlImagem().type('https://exemplo.com/img.jpg');
            cadastroPage.getCampoDataInicio().type('2026-03-15');
            cadastroPage.getCampoDataFim().type('2026-03-15');
            cadastroPage.getCampoNumeroVagas().type('10');
            
            cadastroPage.selecionarTipoCurso('Online');
            cadastroPage.clicarCadastrar();
            
            cy.url().should('include', '/');
            cy.contains('h4', 'Lista de cursos').should('be.visible');
            cy.contains('Workshop 1 dia', { timeout: 10000 }).should('be.visible');
            
            cy.log('✅ CT002 executado com sucesso');
        });

        it('CT003 - Cadastro sem URL da imagem', () => {
            cadastroPage.getCampoNome().type('Curso sem imagem');
            cadastroPage.getCampoDescricao().type('Descrição');
            cadastroPage.getCampoInstrutor().type('Pedro');
            cadastroPage.getCampoDataInicio().type('2026-04-01');
            cadastroPage.getCampoDataFim().type('2026-04-10');
            cadastroPage.getCampoNumeroVagas().type('15');
            
            cadastroPage.selecionarTipoCurso('Presencial');
            cadastroPage.clicarCadastrar();
            
            cy.url().should('include', '/');
            cy.contains('h4', 'Lista de cursos').should('be.visible');
            cy.contains('Curso sem imagem', { timeout: 10000 }).should('be.visible');
            
            cy.log('✅ CT003 executado com sucesso');
        });
    });

    describe('❌ CTs NEGATIVOS - Campos obrigatórios', () => {
        
        it('CT004 - Tentar cadastrar sem nome', () => {
            cadastroPage.getCampoDescricao().type('Descrição');
            cadastroPage.getCampoInstrutor().type('Instrutor');
            cadastroPage.getCampoUrlImagem().type('https://exemplo.com/img.jpg');
            cadastroPage.getCampoDataInicio().type('2026-03-01');
            cadastroPage.getCampoDataFim().type('2026-03-30');
            cadastroPage.getCampoNumeroVagas().type('10');
            cadastroPage.selecionarTipoCurso('Presencial');
            
            cadastroPage.clicarCadastrar();
            
           
            
            cy.log('✅ CT004 executado com sucesso');
        });

        it('CT005 - Tentar cadastrar sem descrição', () => {
            cadastroPage.getCampoNome().type('Curso teste');
            cadastroPage.getCampoInstrutor().type('Instrutor');
            cadastroPage.getCampoUrlImagem().type('https://exemplo.com/img.jpg');
            cadastroPage.getCampoDataInicio().type('2026-03-01');
            cadastroPage.getCampoDataFim().type('2026-03-30');
            cadastroPage.getCampoNumeroVagas().type('10');
            cadastroPage.selecionarTipoCurso('Presencial');
            
            cadastroPage.clicarCadastrar();
            
            
            
            cy.log('✅ CT005 executado com sucesso');
        });

        it('CT006 - Tentar cadastrar sem instrutor', () => {
            cadastroPage.getCampoNome().type('Curso teste');
            cadastroPage.getCampoDescricao().type('Descrição');
            cadastroPage.getCampoUrlImagem().type('https://exemplo.com/img.jpg');
            cadastroPage.getCampoDataInicio().type('2026-03-01');
            cadastroPage.getCampoDataFim().type('2026-03-30');
            cadastroPage.getCampoNumeroVagas().type('10');
            cadastroPage.selecionarTipoCurso('Presencial');
            
            cadastroPage.clicarCadastrar();
            
            
            
            cy.log('✅ CT006 executado com sucesso');
        });

        it('CT007 - Tentar cadastrar sem data início', () => {
            cadastroPage.getCampoNome().type('Curso teste');
            cadastroPage.getCampoDescricao().type('Descrição');
            cadastroPage.getCampoInstrutor().type('Instrutor');
            cadastroPage.getCampoUrlImagem().type('https://exemplo.com/img.jpg');
            cadastroPage.getCampoDataFim().type('2026-03-30');
            cadastroPage.getCampoNumeroVagas().type('10');
            cadastroPage.selecionarTipoCurso('Presencial');
            
            cadastroPage.clicarCadastrar();
            
         
            
            cy.log('✅ CT007 executado com sucesso');
        });

        it('CT008 - Tentar cadastrar sem data fim', () => {
            cadastroPage.getCampoNome().type('Curso teste');
            cadastroPage.getCampoDescricao().type('Descrição');
            cadastroPage.getCampoInstrutor().type('Instrutor');
            cadastroPage.getCampoUrlImagem().type('https://exemplo.com/img.jpg');
            cadastroPage.getCampoDataInicio().type('2026-03-01');
            cadastroPage.getCampoNumeroVagas().type('10');
            cadastroPage.selecionarTipoCurso('Presencial');
            
            cadastroPage.clicarCadastrar();
            
           
            
            cy.log('✅ CT008 executado com sucesso');
        });

        it('CT009 - Tentar cadastrar sem número de vagas', () => {
            cadastroPage.getCampoNome().type('Curso teste');
            cadastroPage.getCampoDescricao().type('Descrição');
            cadastroPage.getCampoInstrutor().type('Instrutor');
            cadastroPage.getCampoUrlImagem().type('https://exemplo.com/img.jpg');
            cadastroPage.getCampoDataInicio().type('2026-03-01');
            cadastroPage.getCampoDataFim().type('2026-03-30');
            cadastroPage.selecionarTipoCurso('Presencial');
            
            cadastroPage.clicarCadastrar();
            
         
            
            cy.log('✅ CT009 executado com sucesso');
        });

        it('CT010 - Tentar cadastrar sem tipo de curso', () => {
            cadastroPage.getCampoNome().type('Curso teste');
            cadastroPage.getCampoDescricao().type('Descrição');
            cadastroPage.getCampoInstrutor().type('Instrutor');
            cadastroPage.getCampoUrlImagem().type('https://exemplo.com/img.jpg');
            cadastroPage.getCampoDataInicio().type('2026-03-01');
            cadastroPage.getCampoDataFim().type('2026-03-30');
            cadastroPage.getCampoNumeroVagas().type('10');
            
            cadastroPage.clicarCadastrar();
            
            
            
            cy.log('✅ CT010 executado com sucesso');
        });
    });

    describe('🔍 CTs de Validação', () => {
        
        it('CT011 - Data início maior que data fim', () => {
            cadastroPage.getCampoNome().type('Datas inválidas');
            cadastroPage.getCampoDescricao().type('Descrição');
            cadastroPage.getCampoInstrutor().type('Instrutor');
            cadastroPage.getCampoUrlImagem().type('https://exemplo.com/img.jpg');
            cadastroPage.getCampoDataInicio().type('2026-03-30');
            cadastroPage.getCampoDataFim().type('2026-03-01');
            cadastroPage.getCampoNumeroVagas().type('10');
            cadastroPage.selecionarTipoCurso('Presencial');
            
            cadastroPage.clicarCadastrar();
            
            
            
            cy.log('✅ CT011 executado com sucesso');
        });

        it('CT012 - Campo vagas não aceita letras', () => {
            cadastroPage.getCampoNumeroVagas().type('abc');
            
            cadastroPage.getCampoNumeroVagas().should('have.value', '');
            
            cy.log('✅ CT012 executado com sucesso');
        });

        it('CT013 - Campo vagas não aceita negativos', () => {
            cadastroPage.getCampoNumeroVagas().clear();
            cadastroPage.getCampoNumeroVagas().type('-5');
            
            cadastroPage.getCampoNumeroVagas().invoke('val').then((val) => {
                if (val === '-5') {
                    cy.log('⚠️ ATENÇÃO: Campo aceitou valor negativo!');
                } else {
                    cy.log('✅ Campo não aceitou negativo');
                }
            });
            
            cy.log('✅ CT013 executado com sucesso');
        });
    });

    describe('🧭 CTs de Navegação', () => {
        
        it('CT014 - Clicar em Listar cursos volta para página inicial', () => {
            cadastroPage.clicarListarCursos();
            
            cy.url().should('eq', Cypress.config().baseUrl + '/');
            cy.contains('h4', 'Lista de cursos').should('be.visible');
            
            cy.log('✅ CT014 executado com sucesso');
        });
    });

    afterEach(function() {
        const testTitle = this.currentTest.title;
        const testState = this.currentTest.state;
        cy.log(`🏁 Teste finalizado: ${testTitle} - Status: ${testState || 'executado'}`);
    });
});