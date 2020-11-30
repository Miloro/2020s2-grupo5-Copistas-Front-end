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


it('test login', () => {
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
  })


