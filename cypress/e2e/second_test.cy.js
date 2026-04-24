describe("Second Test", () => {
  it("Ingresar a la página", () => {
    cy.visit("https://saucedemo.com");
    cy.title().should("include", "Swag Labs");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("contains", "inventory.html");
  });

  it("User wrong", () => {
    cy.visit("https://saucedemo.com");
    cy.title().should("include", "Swag Labs");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_bad");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should("be.visible");
  });
});
