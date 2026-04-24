const ORANGEHRM_URL =
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

describe("Orange HRM Login", () => {
    beforeEach(() => {
        cy.visit(ORANGEHRM_URL);
    });

    //Nicolas
    it("TC001 - Login con credenciales válidas", () => {
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("admin123");
        cy.get('button[type="submit"]').click();
    });

    //Johan
    it("TC002 - Login con credenciales incorrectas", () => {
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("malPassword");
        cy.get('button[type="submit"]').click();
        // Aserciones
        cy.get(".oxd-alert-content-text").should("contain", "Invalid credentials");
        cy.url().should("include", "auth/login");
        // Next
        cy.get(".oxd-alert").next().should("exist");
    });

    //Sebas
    it("TC003 - Login con credenciales válidas y comando personalizado", () => {
        cy.login("Admin", "admin123");
        cy.url().should("include", "/dashboard");
        cy.get(".oxd-topbar-header-breadcrumb").should("be.visible");
    });
});
