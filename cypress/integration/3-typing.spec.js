/* eslint-disable no-undef */
describe('tests for the input field', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('.search__form')
    .find('input.radius')
    .as('inputField');
  });

  it('can type into the search input field', () => {
    cy.get('@inputField')
      .type('Queen', {delay:250})
  });

  it('can handle backspaces', () => {
    cy.get('@inputField')
      .type('Beee{backspace}ge{backspace}{backspace}Gees', {delay:250})
  });

  it('can handle curly braces', () => {
    cy.get('@inputField')
      .type('Beee{backspace}ge{backspace}{backspace}Gees', {delay:250, parseSpecialCharSequences:false })
  });

});