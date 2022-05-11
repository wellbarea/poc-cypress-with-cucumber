/// <reference types="Cypress" />

import ProfileElements from "../elements/ProfileElements";

const profileElements = new ProfileElements();
const url = Cypress.config("baseUrl");

class ProfilePage {
  acessarDashboard() {
    cy.visit("/");
  }

  acessarPaginaDePerfilDoUsuario() {
    cy.contains("User Profile").click();
  }

  validarRotaPerfil() {
    cy.url().should("contain", "admin/user");
  }

  visualizarTituloPerfilDoUsuario() {
    cy.get("[data-testid='title']").should("contain", "User Profile");
  }

  preencherFormularioDeBusca() {
    cy.get("[data-testid='GitHubProfileInput']").type("WellingtonGabriel");
  }

  buscarPerfilDoGithub() {
    cy.contains("Get from GitHub").click();
  }

  preencherFormularioPerfil() {
    cy.get("#username").type("wellington");
    cy.get("#city").type("São paulo");
    cy.get("#name").type("Wellington Barea");
    cy.get("#about-me").type("descrição aqui");
  }

  alterarPerfil() {
    cy.contains("Update Profile").click();
  }

  visualizarNomeNoPerfilDaTela() {
    cy.get("h4").should("contain", "wellington");
  }
}

export default ProfilePage;
