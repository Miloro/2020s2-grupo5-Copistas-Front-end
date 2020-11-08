/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    it('login user', () => {
      cy.visit('http://localhost:8080')
      cy.get('input[name="email"]').type('fer@mail')
      cy.get('input[name="password"]').type('1234') 
      cy.get('#login-button').click()
      //le agrega al final un assertion de que despues de registrarse se encuentre en la login page
      //en nuestro caso puedo chequear que me lleve a donde me lleva libraille despues de logueado
      cy.location('pathname').should('eq','/login')
    })
    
})
})

