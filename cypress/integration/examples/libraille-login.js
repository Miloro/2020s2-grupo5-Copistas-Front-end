/// <reference types="cypress" />


describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('it focuses the input', () => {
    cy.focused().should('have.class', 'form-control')
  })
  
  it('accepts input', () => {
    cy.get('body')
      .type("admin") 
      .tab() 
      .type('{end}')
  })
  
  it('it focuses the input', () => {
    cy.get('input').first().focus()
  })

  it('accepts input3', () => {
    const input = "Learn about Cypress"
    cy.get('body')
      .type("bar")
  })


})

