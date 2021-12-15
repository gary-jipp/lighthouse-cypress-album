/* eslint-disable no-undef */
describe('tests for the input field', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('.search__form')
      .find('input.radius')
      .as('inputField');
  });

  it('can type into an input field', () => {
    cy.get('@inputField')
      .type('Queen', { delay: 150 })
      .should('have.value', 'Queen');
  });

  it('can handle backspace', () => {
    cy.get('@inputField')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
      .should('have.value', 'Bee Gees');
  });

});
