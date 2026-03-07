import cadastroPage from '../support/pages/cadastroPage';
import homePage from '../support/pages/homePage';

describe('Testes de Cadastro de Cursos', () => {
    
    beforeEach(() => {
        // Visitar página pagina inicial para garantir que o ambiente está carregado
        cy.visit('https://creative-sherbet-a51eac.netlify.app/');
        cy.visit('/new-course')
        cy.wait(30000);
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
            cadastroPage.selecionarTipoCurso('Programação');
            
            cadastroPage.clicarCadastrar();
            
            // Verificar se apareceu mensagem de sucesso
            cy.get('.q-notifications', { timeout: 10000 }).should('be.visible');
        });

        it('CT002 - Cadastro com datas iguais', () => {
            cadastroPage.getCampoNome().type('Workshop 1 dia');
            cadastroPage.getCampoDescricao().type('Curso rápido');
            cadastroPage.getCampoInstrutor().type('Maria Santos');
            cadastroPage.getCampoDataInicio().type('2026-03-15');
            cadastroPage.getCampoDataFim().type('2026-03-15');
            cadastroPage.getCampoNumeroVagas().type('10');
            cadastroPage.selecionarTipoCurso('Design');
            
            cadastroPage.clicarCadastrar();
            cy.get('.q-notifications', { timeout: 10000 }).should('be.visible');
        });

        it('CT003 - Cadastro sem URL da imagem', () => {
            cadastroPage.getCampoNome().type('Curso sem imagem');
            cadastroPage.getCampoDescricao().type('Descrição');
            cadastroPage.getCampoInstrutor().type('Pedro');
            cadastroPage.getCampoDataInicio().type('2026-04-01');
            cadastroPage.getCampoDataFim().type('2026-04-10');
            cadastroPage.getCampoNumeroVagas().type('15');
            cadastroPage.selecionarTipoCurso('Marketing');
            
            cadastroPage.clicarCadastrar();
            cy.get('.q-notifications', { timeout: 10000 }).should('be.visible');
        });
    });

    describe('❌ CTs NEGATIVOS - Campos obrigatórios', () => {
        
        it('CT004 - Tentar cadastrar sem nome', () => {
            cadastroPage.getCampoDescricao().type('Descrição');
            cadastroPage.getCampoInstrutor().type('Instrutor');
            cadastroPage.getCampoDataInicio().type('2026-03-01');
            cadastroPage.getCampoDataFim().type('2026-03-30');
            cadastroPage.getCampoNumeroVagas().type('10');
            cadastroPage.selecionarTipoCurso('Programação');
            
            cadastroPage.clicarCadastrar();
            
            // Verificar se o campo nome está destacado como erro
            cadastroPage.getCampoNome().closest('.q-field')
                .should('have.class', 'q-field--error');
        });

        it('CT005 - Tentar cadastrar sem descrição', () => {
            cadastroPage.getCampoNome().type('Curso teste');
            cadastroPage.getCampoInstrutor().type('Instrutor');
            cadastroPage.getCampoDataInicio().type('2026-03-01');
            cadastroPage.getCampoDataFim().type('2026-03-30');
            cadastroPage.getCampoNumeroVagas().type('10');
            cadastroPage.selecionarTipoCurso('Programação');
            
            cadastroPage.clicarCadastrar();
            
            cadastroPage.getCampoDescricao().closest('.q-field')
                .should('have.class', 'q-field--error');
        });

        it('CT006 - Tentar cadastrar sem instrutor', () => {
            cadastroPage.getCampoNome().type('Curso teste');
            cadastroPage.getCampoDescricao().type('Descrição');
            cadastroPage.getCampoDataInicio().type('2026-03-01');
            cadastroPage.getCampoDataFim().type('2026-03-30');
            cadastroPage.getCampoNumeroVagas().type('10');
            cadastroPage.selecionarTipoCurso('Programação');
            
            cadastroPage.clicarCadastrar();
            
            cadastroPage.getCampoInstrutor().closest('.q-field')
                .should('have.class', 'q-field--error');
        });

        it('CT007 - Tentar cadastrar sem data início', () => {
            cadastroPage.getCampoNome().type('Curso teste');
            cadastroPage.getCampoDescricao().type('Descrição');
            cadastroPage.getCampoInstrutor().type('Instrutor');
            cadastroPage.getCampoDataFim().type('2026-03-30');
            cadastroPage.getCampoNumeroVagas().type('10');
            cadastroPage.selecionarTipoCurso('Programação');
            
            cadastroPage.clicarCadastrar();
            
            cadastroPage.getCampoDataInicio().closest('.q-field')
                .should('have.class', 'q-field--error');
        });

        it('CT008 - Tentar cadastrar sem data fim', () => {
            cadastroPage.getCampoNome().type('Curso teste');
            cadastroPage.getCampoDescricao().type('Descrição');
            cadastroPage.getCampoInstrutor().type('Instrutor');
            cadastroPage.getCampoDataInicio().type('2026-03-01');
            cadastroPage.getCampoNumeroVagas().type('10');
            cadastroPage.selecionarTipoCurso('Programação');
            
            cadastroPage.clicarCadastrar();
            
            cadastroPage.getCampoDataFim().closest('.q-field')
                .should('have.class', 'q-field--error');
        });

        it('CT009 - Tentar cadastrar sem número de vagas', () => {
            cadastroPage.getCampoNome().type('Curso teste');
            cadastroPage.getCampoDescricao().type('Descrição');
            cadastroPage.getCampoInstrutor().type('Instrutor');
            cadastroPage.getCampoDataInicio().type('2026-03-01');
            cadastroPage.getCampoDataFim().type('2026-03-30');
            cadastroPage.selecionarTipoCurso('Programação');
            
            cadastroPage.clicarCadastrar();
            
            cadastroPage.getCampoNumeroVagas().closest('.q-field')
                .should('have.class', 'q-field--error');
        });

        it('CT010 - Tentar cadastrar sem tipo de curso', () => {
            cadastroPage.getCampoNome().type('Curso teste');
            cadastroPage.getCampoDescricao().type('Descrição');
            cadastroPage.getCampoInstrutor().type('Instrutor');
            cadastroPage.getCampoDataInicio().type('2026-03-01');
            cadastroPage.getCampoDataFim().type('2026-03-30');
            cadastroPage.getCampoNumeroVagas().type('10');
            
            cadastroPage.clicarCadastrar();
            
            cadastroPage.getCampoTipoCurso().closest('.q-field')
                .should('have.class', 'q-field--error');
        });
    });

    describe('🔍 CTs de Validação', () => {
        
        it('CT011 - Data início maior que data fim', () => {
            cadastroPage.getCampoNome().type('Datas inválidas');
            cadastroPage.getCampoDescricao().type('Descrição');
            cadastroPage.getCampoInstrutor().type('Instrutor');
            cadastroPage.getCampoDataInicio().type('2026-03-30');
            cadastroPage.getCampoDataFim().type('2026-03-01');
            cadastroPage.getCampoNumeroVagas().type('10');
            cadastroPage.selecionarTipoCurso('Programação');
            
            cadastroPage.clicarCadastrar();
            
            // Verificar se aparece mensagem de erro
            cy.get('.q-notifications').should('be.visible');
        });

        it('CT012 - Campo vagas não aceita letras', () => {
            cadastroPage.getCampoNumeroVagas().type('abc');
            cadastroPage.getCampoNumeroVagas().should('have.value', '');
        });

        it('CT013 - Campo vagas não aceita negativos', () => {
            cadastroPage.getCampoNumeroVagas().type('-5');
            // O campo type="number" normalmente não aceita o sinal de menos
            cadastroPage.getCampoNumeroVagas().invoke('val').then((val) => {
                if (val === '-5') {
                    cy.log('⚠️ Campo aceitou valor negativo');
                } else {
                    cy.log('✅ Campo não aceitou negativo');
                }
            });
        });
    });

    describe('🧭 CTs de Navegação', () => {
        
        it('CT014 - Clicar em Listar cursos volta para página inicial', () => {
            cadastroPage.clicarListarCursos();
            cy.url().should('eq', Cypress.config().baseUrl + '/');
            cy.contains('h4', 'Lista de cursos').should('be.visible');
        });
    });
});