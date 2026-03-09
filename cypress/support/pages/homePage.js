class HomePage {

    validarListaCursos(){
        cy.contains('Lista de cursos').should('be.visible');
    }

}

export default new HomePage();