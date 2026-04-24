describe("Pruebas de Carrito de Compras - Store App", () => {
  // SE EJECUTA 1 VEZ AL PRINCIPIO (Montaje inicial)
  before(() => {
    cy.log(" --- INICIANDO SUITE: Preparando base de datos de prueba --- ");
    // Ejemplo: Limpiar la base de datos o sembrar datos iniciales
    cy.request("POST", "/api/test/seed", { product: "Laptop", stock: 10 });
  });
  // SE EJECUTA ANTES DE CADA TEST (Configuración de estado)
  beforeEach(() => {
    cy.log(" --- Preparando el test: Login de usuario --- ");
    // Visitamos la app y nos logueamos antes de cada prueba
    cy.visit("/login");
    cy.get("#user").type("test_user");
    cy.get("#pass").type("password123");
    cy.get("#login-btn").click();
  });
  it("Debe permitir añadir un producto al carrito", () => {
    cy.get(".product-card").first().contains("Anadir").click();
    cy.get(".cart-count").should("contain", "1");
  });
  it("Debe mostrar el total correcto al añadir dos productos", () => {
    cy.get(".product-card").eq(0).find(".add-btn").click();
    cy.get(".product-card").eq(1).find(".add-btn").click();
    cy.get("#total-price").should("not.be.empty");
  });
  // SE EJECUTA DESPUÉS DE CADA TEST (Limpieza ligera)
  afterEach(() => {
    cy.log(" --- Limpiando: Vaciando carrito para el siguiente test --- ");
    cy.get("#clear-cart").click();
    // O podrias limpiar cookies/localStorage si fuera necesario
    cy.clearCookies();
  });
  // SE EJECUTA 1 VEZ AL FINAL (Cierre total)
  after(() => {
    cy.log(" --- FINALIZANDO SUITE: Reportando resultados al servidor --- ");
    // Ejemplo: Enviar un webhook o resetear el estado global
    cy.request("DELETE", "/api/test/cleanup");
  });
});
