/* global Given, Then, When, And */

import ProfilePage from "../pageobjects/ProfilePage";

const profilePage = new ProfilePage();

Given("acesso o dashboard", () => {
    profilePage.acessarDashboard();
});

When("acesso a pagina de perfil do usuário", () => {
    profilePage.acessarPaginaDePerfilDoUsuario();
});

Then("deve estar na rota de perfil", () => {
    profilePage.validarRotaPerfil();
});

Then("deve conter um titulo User Profile", () => {
    profilePage.visualizarTituloPerfilDoUsuario();
});

And("preencho formulario de busca de perfil", () => {
    profilePage.preencherFormularioDeBusca();
});

Then("deve buscar perfil do github", () => {
    profilePage.buscarPerfilDoGithub();
});

And("preencho formulario do perfil", () => {
    profilePage.preencherFormularioPerfil();
});

And("clico em alterar perfil", () => {
    profilePage.alterarPerfil();
});

Then("deve o nome no perfil da tela", () => {
    profilePage.visualizarNomeNoPerfilDaTela();
});