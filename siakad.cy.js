describe('Login SIAKAD', function() {

  it('passes', function() {

  cy.visit('http://siakad.polinema.ac.id/')
  cy.get('#username').type('2041720069')
  cy.get('#password').clear().type('142204')
  cy.get('.form-actions > .btn').click()

  it('passe', function() {
    cy.visit('http://siakad.polinema.ac.id/beranda') 
  })
})
})