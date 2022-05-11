/// <reference types="cypress" />

describe("Página de perfil de usuário", () => {
  context("Visitando a página de perfil", () => {
    it("deveria visitar a página de perfil", () => {
      cy.visit("/");
      cy.contains("User Profile").click();
      cy.url().should("contain", "admin/user");
    });

    it("deveria conter o titulo user profile", () => {
        cy.get("[data-testid='title']").should("contain", "User Profile");
    });

    it("deveria buscar perfil do github", () => {
        cy.get("[data-testid='GitHubProfileInput']").type("WellingtonGabriel");
        cy.contains("Get from GitHub").click();
    });

    it("deveria preencher form de perfil", () => {
        cy.visit("/admin/user");
        cy.get("#fixedPluginClasses").click();
        cy.get("#username").type("wellington");
        cy.get("#city").type("São paulo");
        cy.get("#name").type("Wellington Barea");
        cy.get("#about-me").type("descrição aqui");

        cy.contains("Update Profile").click();
        
        cy.get("h4").should("contain", "wellington");
    });
  });
});
