describe('form page', () => {
  beforeEach(() => {
    cy.visit('/form');
  });
  it('should render all fields', () => {
    cy.get('[placeholder="Enter product name"]').should('be.visible');
    cy.get('[placeholder="Enter product price"]').should('be.visible');
    cy.get('[data-testid="productCategory-dropdown"]').should('exist');
    cy.get('input[type="date"]').should('exist');
    cy.get('input[type="file"]').should('exist');
    cy.get('input[type="radio"]').should('have.length', 3);
    cy.get('input[type="checkbox"]').should('exist');
    cy.contains('Submit').should('exist');
  });

  it('should test form input value', () => {
    cy.get('[placeholder="Enter product name"]').type('Name').should('have.value', 'Name');
    cy.get('[placeholder="Enter product price"]').clear().type(10).should('have.value', 10);
    cy.get('[data-testid="productCategory-dropdown"]').select('TV').should('have.value', 'TV');
    cy.get('input[type="date"]').type('2023-01-01').should('have.value', '2023-01-01');
    cy.get('input[type="radio"][value="30"]').check().should('be.checked');
    cy.get('input[type="checkbox"]').check().should('be.checked');
  });

  it('should have error if input value is empty', () => {
    const inputField = cy.get('[placeholder="Enter product name"]');
    const submitButton = cy.contains('Submit').should('exist');
    inputField.should('have.value', '');
    submitButton.click();
    cy.contains('Field is required').should('exist');
  });

  it('should render created card', () => {
    cy.get('[placeholder="Enter product name"]').type('Name');
    cy.get('[placeholder="Enter product price"]').clear();
    cy.get('[data-testid="productCategory-dropdown"]').select('TV');
    cy.get('input[type="date"]').type('2023-01-01');
    cy.get('input[type="radio"][value="30"]').check();
    cy.get('input[type="checkbox"]').check();
    cy.contains('Submit').click();

    cy.get('[data-testid="created-item"]').should('not.exist');
  });
});

//productCategory-dropdown
