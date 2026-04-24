describe("Login - Negativo", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('input[name="username"]').type("usuario123");
    cy.get('input[name="password"]').type("123456");
    cy.get('input[type="submit"][value="Log In"]').click();
    cy.contains("Account Services").should("be.visible");
  });

  it("No permite login con credenciales incorrectas", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("malPassword");
    cy.get('button[type="submit"]').click();
    // Aserciones
    cy.get(".oxd-alert-content-text").should("contain", "Invalid credentials");
    cy.url().should("include", "auth/login");

    //  next
    cy.get(".oxd-alert-content").next().should("not.exist");
  });
  it({});
});
