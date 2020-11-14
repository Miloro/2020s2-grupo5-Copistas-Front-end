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
    cy.get('body').first().focus()
  })

  it('accepts input3', () => {
    cy.get('body').within(() => {
      cy.get('input:first').type('admin')
      cy.get('input:last').type('admin')
    })
  })


})

