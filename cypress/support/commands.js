// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// This script is to Remove logs like "xhr" and "fetch" from the Cypress logs
beforeEach(() => {
  Cypress.on("uncaught:exception", () => false); // returning false here prevents Cypress from failing the test
  cy.intercept({ resourceType: /^(xhr|fetch)$/ }, { statusCode: 200, body: { data: "fake data" } });
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});
