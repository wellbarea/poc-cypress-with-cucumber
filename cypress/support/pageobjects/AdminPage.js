/// <reference types="Cypress" />

import AdminElements from "../elements/AdminElements";

const adminElements = new AdminElements();
const url = Cypress.config("baseUrl");

class AdminPage {
  acessarDashboard() {
    cy.visit(url);
  }

  acessarPaginaInicial() {
    cy.visit("/");
  }

  visualizarPaginaDashboard() {
    cy.url().should("contain", "/admin/dashboard");
  }

  visualizarTitulo() {
    cy.get("[data-testid='title']").should("contain", "Dashboard");
  }

  alterarConfiguracaoCor(color) {
    cy.get(`[data-color='${color}']`).click();
  }

  visualizarCorPurpleSidebar() {
    cy.get("[data-testid='corDeFundoSidebarItem']")
      .first()
      .should("have.css", "background-color", "rgb(156, 39, 176)");
  }

  visualizarCorRedSidebar() {
    cy.get("[data-testid='corDeFundoSidebarItem']")
      .first()
      .should("have.css", "background-color", "rgb(244, 67, 54)");
  }
}

export default AdminPage;
