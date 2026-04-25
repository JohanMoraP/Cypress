const ORANGEHRM_URL =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

describe("Orange HRM Claims", () => {
  beforeEach(() => {
    cy.visit(ORANGEHRM_URL);
    cy.login("Admin", "admin123");
  });

  //Nicolas
  it("TC013- Nicolas", () => {});

  //Johan
  it("TC014-No permite asignar claim sin datos", () => {
    cy.contains("Claim").click();
    cy.contains("Assign Claim").click();
    cy.get('button[type="submit"]').click();

    // Aserciones
    cy.get(".oxd-input-field-error-message").should("be.visible");
    cy.url().should("include", "assignClaim");
  });

  // Sebas
  it("TC015-Sebas", () => {});
});
