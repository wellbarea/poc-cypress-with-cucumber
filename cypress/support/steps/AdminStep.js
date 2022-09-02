/* global Given, Then, When, And */

import AdminPage from "../pageobjects/AdminPage";

const adminPage = new AdminPage();

Given("acesso o dashboard", () => {
    adminPage.acessarDashboard();
});

When("acesso a pagina de inicial", () => {
    adminPage.acessarPaginaInicial();
});

Then("devo visualizar a pagina de dashboard", () => {
    adminPage.visualizarPaginaDashboard();
});

Then("devo visualizar o titulo do dashboard", () => {
    adminPage.visualizarTitulo();
});

And("Altero a cor purple nas configurações", () => {
    adminPage.alterarConfiguracaoCor('purple');
});

Then("devo visualizar a cor purple na sidebar do dashboard", () => {
    adminPage.visualizarCorPurpleSidebar();
});

And("Altero a cor red nas configurações", () => {
    adminPage.alterarConfiguracaoCor('red');
});

Then("devo visualizar a cor red na sidebar do dashboard", () => {
    adminPage.visualizarCorRedSidebar();
});
