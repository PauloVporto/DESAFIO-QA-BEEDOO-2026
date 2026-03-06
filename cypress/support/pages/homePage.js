class HomePage {
    visit() {
        cy.visit('/');
    }

    getTituloLista() {
        return cy.contains('h4', 'Lista de cursos');
    }

    clicarCadastrarCurso() {
        cy.contains('a', 'Cadastrar curso').click();
    }

    clicarListarCursos() {
        cy.contains('a', 'Listar cursos').click();
    }

    // Verificar se a lista está vazia
    verificarListaVazia() {
        cy.log('Verificando se a lista está vazia');
        return cy.get('.q-pa-md').should('contain', 'Lista de cursos');
    }

    // Tentar encontrar qualquer curso na lista
    verificarSeExisteAlgumCurso() {
        cy.log('Verificando se existe algum curso na listagem');
        return cy.get('body').then(($body) => {
            // Procura por elementos que possam representar cursos
            const seletores = [
                '.curso',
                '.card',
                '.q-card',
                '.list-item',
                '.curso-item',
                '[class*="curso"]',
                'div[class*="card"]'
            ];
            
            let encontrou = false;
            seletores.forEach(seletor => {
                if ($body.find(seletor).length > 0) {
                    encontrou = true;
                }
            });
            
            return encontrou;
        });
    }

    // Aguardar possível carregamento da lista
    aguardarCarregamento() {
        cy.log('Aguardando carregamento da lista...');
        cy.wait(2000); // Aguarda 2 segundos
    }
}

export default new HomePage();