describe('Payout Bitlabs', () => {
  const email = '2041720069@student.polinema.ac.id';
  const password = 'Farahzulfahamid.14';
  beforeEach(() => {
    cy.visit('https://dashboard.bitlabs.ai/login');
    cy.setCookie('botble_cookie_newsletter', '1');
    cy.get('[vid=""][name="E-Mail"] > .bb-flex-h-start-center').type(email);
    cy.get('[value=""] > .bb-flex-h-start-center').type(password);
    cy.get('.bb-submit').click();
    
  });
  it('Site profile', () => { 
    cy.get('[href="/payout"]').click();
  });
});