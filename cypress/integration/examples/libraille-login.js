/// <reference types="cypress" />


describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('it focuses the input', () => {
    cy.focused().should('have.class', 'form-control')
  })
  
  
  it('completes user and pass and goes to home page', () => {
    cy.get('body').within(() => {
      cy.get('input:first').type('admin')
      cy.get('input:last').type('admin')     
    })
    cy.get('Button').click()
    cy.url().should('eq', 'http://localhost:3000/home')
  })
 
   


})

