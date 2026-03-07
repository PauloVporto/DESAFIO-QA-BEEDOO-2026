describe('Descobrir a rota correta de cadastro', () => {
    
    const rotasPossiveis = [
        '/cadastrar',
        '/cadastro',
        '/novo-curso',
        '/novo',
        '/criar-curso',
        '/adicionar-curso',
        '/course/new',
        '/course/create',
        '/new',
        '/create',
        '/add-course',
        '/curso/novo',
        '/form'
    ];

    rotasPossiveis.forEach(rota => {
        it(`Testando rota: ${rota}`, () => {
            cy.visit(`https://creative-sherbet-a51eac.netlify.app${rota}`, {
                failOnStatusCode: false
            }).then((resp) => {
                if (resp.status === 200) {
                    cy.log(`✅ ROTA ENCONTRADA: ${rota}`);
                    cy.screenshot(`rota-encontrada-${rota.replace(/\//g, '-')}`);
                } else {
                    cy.log(`❌ Rota não encontrada: ${rota} (${resp.status})`);
                }
            });
        });
    });

    it('Clicar no botão para ver para onde vai', () => {
        cy.visit('https://creative-sherbet-a51eac.netlify.app/');
        cy.contains('a', 'Cadastrar curso').click();
        cy.url().then(url => {
            cy.log('🚀 URL após clique: ' + url);
        });
    });
});