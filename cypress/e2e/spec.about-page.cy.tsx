describe('about page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('should includes about info', () => {
    cy.contains('GitHub').should('be.visible');
    cy.contains('RS School').should('be.visible');
    cy.contains('2023').should('be.visible');
  });
});
