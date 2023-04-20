describe('main page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should render the search bar and items list', () => {
    cy.get('[data-testid="search-bar"]').should('exist');
    cy.get('[data-testid="items-list"]').should('exist');
  });

  it('should display the correct number of items', () => {
    cy.get('[data-testid="card-item"]').should('have.length', 15);
  });

  it('should paginate the item list when page buttons are clicked', () => {
    cy.contains('Next').click();
    cy.get('[data-testid="card-item"]').should('have.length', 15);
  });

  it('should disable the prev button on the first page and enable it on the second page', () => {
    cy.contains('Prev').should('be.disabled');
    cy.contains('Next').click();
    cy.contains('Prev').should('not.be.disabled');
  });

  it('should update the item list when the search term is changed', () => {
    const newSearchTerm = 'ocean';
    cy.get('input[type="text"]').type(newSearchTerm);
    cy.contains('Search').click();
    cy.get('[data-testid="card-item"]').should('have.length', 15);
  });
});
