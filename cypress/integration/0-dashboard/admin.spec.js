/// <reference types="cypress" />

describe("Home do Dashboard", () => {
  context("visitando a pagina inicial", () => {
    it("deveria visitar página inicial", () => {
      cy.visit("/");
      cy.url().should("contain", "/admin/dashboard");
    });

    it("deveria conter o titulo Dashboard", () => {
      cy.get("[data-testid='title']").should("contain", "Dashboard");
    });

    it("deveria clicar nas cores e alterar na sidebar", () => {
      cy.get("[data-color='purple']").click();
      cy.get("[data-testid='corDeFundoSidebarItem']")
        .first()
        .should("have.css", "background-color", "rgb(156, 39, 176)");

      cy.get("[data-color='red']").click();
      cy.get("[data-testid='corDeFundoSidebarItem']")
        .first()
        .should("have.css", "background-color", "rgb(244, 67, 54)");
    });
  });
});
