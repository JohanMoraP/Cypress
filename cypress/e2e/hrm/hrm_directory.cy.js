const ORANGEHRM_URL =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

describe("Orange HRM Search in Directory", () => {
  beforeEach(() => {
    cy.visit(ORANGEHRM_URL);
    cy.login("Admin", "admin123");
  });

  //Nicolas
  it("TC010-Nicolas", () => { });

  //Johan
  it("TC011-No encuentra un empleado inexistente", () => {
    cy.contains("Directory").click();
    cy.get('input[placeholder="Type for hints..."]').type("EmpleadoFalso123");
    cy.contains("Search").click();

    // Aserciones
    cy.get(".oxd-table-row").should("not.exist");
    cy.get(".orangehrm-container").each(($row) => {
      cy.wrap($row).should("not.contain", "nombreFalso");
    });
  });


  // Sebas
  it('TC012 - Debe encontrar un empleado existente por nombre', () => {
    cy.contains('span', 'Directory').click();
    
    cy.get('input[placeholder="Type for hints..."]')
      .type('Luis Fernando Diaz');
    cy.contains('button', 'Search').click();

    cy.get('.oxd-table-body').should('be.visible');
    cy.get('.oxd-table-row').first().should('be.visible');
  });
});
