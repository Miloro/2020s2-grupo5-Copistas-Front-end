/// <reference types="cypress" />

describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-element
  it('it focuses the input', () => {
    cy.focused().should('have.class', 'form-control')
    cy.get('.form-control').type('admin')
  })
  

 

  
    //cy.get('input[name="nombreUsuario"]').type('admin')
   
    //cy.get('#login-button').click()
  //le agrega al final un assertion de que despues de registrarse se encuentre en la login page
  //en nuestro caso puedo chequear que me lleve a donde me lleva libraille despues de logueado
    //cy.location('pathname').should('eq','/home')
  })


