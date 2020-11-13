/// <reference types="cypress" />

describe('Cypress', () => {
  it('is working', () => {
    expect(true).to.equal(true)
  })
  //este visit ver si lo meto en un beforeEach
  it('visits the app', () => {  
    cy.visit('http://localhost:3000')
  })
  it('it focuses the input', () => {
    cy.focused().should('have.class', 'form-control')
  })
})

 

  // https://on.cypress.io/interacting-with-element
 
  

 

  
    //cy.get('input[name="nombreUsuario"]').type('admin')
   
    //cy.get('#login-button').click()
  //le agrega al final un assertion de que despues de registrarse se encuentre en la login page
  //en nuestro caso puedo chequear que me lleve a donde me lleva libraille despues de logueado
    //cy.location('pathname').should('eq','/home')



