/* eslint-disable no-undef */
describe('tests for the input field', () => {

  it('can type into the search input field', () => {
    cy.visit('/')
      .intercept("GET", "**/search*", { fixture: "itunes.json" })
      .as("itunesResults");

    cy.get('.search__form')
      .find('input.radius')
      .type("Daft Punk", { delay: 200 });

    cy.get(".spinner")
      .should("be.visible");

    cy.wait("@itunesResults")
      .get("main")
      .contains("Random Access");

    cy.get("#Explicit")
      .uncheck();

    cy.get("article.album")
      .should("not.contain", "Daft Club");

  });

});