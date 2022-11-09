context('Register Bitlabs', () => {
  beforeEach(() => {
    cy.visit('https://dashboard.bitlabs.ai/signup')
  })

  it('Register bitlabs account', () => {

    cy.get('[vid=""][name="Company Name"] > .bb-flex-h-start-center').type('Polinema')
    cy.get('[vid=""][name="First Name"] > .bb-flex-h-start-center').type('rara')
    cy.get('.bb-column > [value=""] > .bb-flex-h-start-center').type('fitri')
    cy.get('[vid=""][name="E-Mail"] > .bb-flex-h-start-center').type('rarafitri22@gmail.com')   
    cy.get('[value=""] > .bb-flex-h-start-center').clear().type('Rarafitri22')
    cy.get('.bb-checkbox-input').click()
    cy.get('.bb-submit').click()
  })
})