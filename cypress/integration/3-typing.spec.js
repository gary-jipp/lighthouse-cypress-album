/* eslint-disable no-undef */
describe('tests for the input field', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('can type into the search input field', () => {
    cy.get('.search__form')
      .find('input.radius')
      .type('Queen', {delay:250})
  });

  it('can handle backspaces', () => {
    cy.get('.search__form')
      .find('input.radius')
      .type('Beee{backspace}ge{backspace}{backspace}Gees', {delay:250})
  });

  it('can handle curly braces', () => {
    cy.get('.search__form')
      .find('input.radius')
      .type('Beee{backspace}ge{backspace}{backspace}Gees', {delay:250, parseSpecialCharSequences:false })
  });

});