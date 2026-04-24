const ORANGEHRM_URL =
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

describe("Orange HRM Users", () => {
    beforeEach(() => {
        cy.visit(ORANGEHRM_URL);
        cy.login("Admin", "admin123");
        cy.goToAdmin();
    });

    //Nicolas
    it("TC004 - Agregar usuario con datos válidos", () => {
        cy.contains("Add").click();

        cy.get(".oxd-select-text").eq(0).click();
        cy.get(".oxd-select-dropdown").contains("Admin").click();
        cy.get(".oxd-select-text").eq(1).click();
        cy.get(".oxd-select-dropdown").contains("Enabled").click();

        // 4. USERNAME
        cy.get("input").filter('[autocomplete="off"]').eq(0).type("NuevoUser123");
        // 5. PASSWORD
        cy.get('input[type="password"]').eq(0).type("Test1234");
        cy.get('input[type="password"]').eq(1).type("Test1234");
        // 6. SUBMIT
        cy.get('button[type="submit"]').click();
        // Aserciones
        cy.get(".oxd-toast").should("be.visible");
        cy.get(".oxd-toast").should("contain", "Success");
    });

    //Johan
    it("TC005 - No permite crear usuario sin datos obligatorios", () => {
        // Login primero
        cy.contains("Add").click();
        cy.get('button[type="submit"]').click();
        // Aserciones
        cy.get(".oxd-input-field-error-message").should("be.visible");
        cy.url().should("include", "saveSystemUser");
        // nextAll
        cy.get(".oxd-input-group").nextAll().should("have.length.greaterThan", 0);
    });

    // Sebas
    it("TC006 - Agregar usuario cargado desde fixture y con comando personalizado", () => {
        cy.fixture('users/ess').then((user) => {
            cy.createUser(user);
        });
        cy.get(".oxd-toast").should("be.visible");
        cy.get(".oxd-toast").should("contain", "Success");
    });
});
