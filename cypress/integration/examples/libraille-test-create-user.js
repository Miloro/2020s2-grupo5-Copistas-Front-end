/// <reference types="cypress" />




context('Local Storage', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/colaborador')
    })
    // Although local storage is automatically cleared
    // in between tests to maintain a clean state
    // sometimes we need to clear the local storage manually
})



it('it focuses the input', () => {
   cy.visit('http://localhost:3000')
  cy.focused().should('have.class', 'form-control')
})


it('test crear colaborador y buscar libro', () => {
    cy.get('body').within(() => {
      cy.get('input:first').type('admin')
      cy.get('input:last').type('admin')     
    })
    cy.get('Button').click()
    cy.url().should('eq', 'http://localhost:3000/home')
    cy.contains('Crear Colaborador').click()
    cy.get('nav').contains('Crear Colaborador') 
    
    cy.request('http://localhost:3000/colaborador')
      .should((response) => {
        expect(response.status).to.eq(200)
        //expect(response.body).to.have.length(10)
    })
    
    cy.get('body').within(() => {
        cy.get('input[name="nombre"]').type('juan')
        cy.get('input[name="nombreUsuario"]').type('juan')
        cy.get('input[name="email"]').type('juan@mail')
        cy.get('input[name="password"]').type('lala')
        cy.get('input[name="passwordRepetido"]').type('lala')     
        cy.get('Button').contains('Crear Colaborador').click() 
        cy.url().should('eq', 'http://localhost:3000/home') 
        cy.get('input:first').type('El señor de los anillos la comunidad del anillo')    
        cy.get('Button').contains('Buscar').click()
        cy.get('input[name="personaEncargada"]').type('juan')
        cy.get('input[name="fechaDeNacimiento"]').type('2020-02-11')
        cy.get('select').select('ENVIO_DE_MAIL')
        cy.get('Button').contains('Crear tarea').click()

    })
})









 


