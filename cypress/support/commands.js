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
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const ORANGEHRM_URL =
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

Cypress.Commands.add('login', (username, password) => {
    cy.visit(ORANGEHRM_URL);
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('goToAdmin', () => {
    cy.get('.oxd-main-menu-item').contains('Admin').click()
});

Cypress.Commands.add('createUser', (user) => {
    cy.contains('Add').click();
    cy.get('.oxd-select-text').eq(0).click();
    cy.get('.oxd-select-dropdown').contains(user.role).click();
    cy.get('.oxd-select-text').eq(1).click();
    cy.get('.oxd-select-dropdown').contains(user.status).click();
    cy.get('.oxd-autocomplete-text-input').type(user.employeeName);
    cy.get('.oxd-autocomplete-dropdown').contains(user.employeeName).click();
    cy.get('input').filter('[autocomplete="off"]').eq(0).type(user.username);
    cy.get('input[type="password"]').eq(0).type(user.password);
    cy.get('input[type="password"]').eq(1).type(user.password);
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('createEmployee', (user) => {
    cy.contains('span', 'PIM').click();
    cy.contains('button', 'Add').click();

    cy.get('input[name="firstName"]').type(user.firstName);
    cy.get('input[name="middleName"]').type(user.middleName);
    cy.get('input[name="lastName"]').type(user.lastName);
    cy.get('.oxd-file-div > .oxd-icon-button').click();
    cy.get('input[type="file"]').selectFile('cypress/fixtures/'+user.avatar, { force: true });

    cy.get('.oxd-switch-input').click();
    cy.get('.oxd-input').eq(5).type(user.username);
    cy.get('input[type="password"]').eq(0).type(user.password);
    cy.get('input[type="password"]').eq(1).type(user.password);

    cy.get('button[type="submit"]').click();
});