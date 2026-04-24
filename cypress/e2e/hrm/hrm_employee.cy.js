const ORANGEHRM_URL =
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

describe("Orange HRM Employees", () => {
    beforeEach(() => {
        cy.visit(ORANGEHRM_URL);
        cy.login("Admin", "admin123");
    });

    //Nicolas
    it("TC009 - Nicolas", () => { });

    //Johan
    it("TC008 - No permite crear empleado sin nombre", () => {
        cy.contains("PIM").click();
        cy.contains("Add Employee").click();
        cy.get('button[type="submit"]').click();
        // Aserciones
        cy.get(".oxd-input-field-error-message").should("exist");
        cy.url().should("include", "addEmployee");
        //prev
        cy.get(".oxd-input-field-error-message").prev().should("exist");
    });

    // Sebas
    it("TC010 - ", () => {
        cy.fixture('users/luis-diaz').then((user) => {
            cy.createEmployee(user);
        });
        cy.get(".oxd-toast").should("be.visible");
        cy.get(".oxd-toast").should("contain", "Success");
    });
});
