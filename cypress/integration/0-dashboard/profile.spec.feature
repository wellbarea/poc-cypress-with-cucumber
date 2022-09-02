Feature: Página de perfil de usuário

    Scenario: deveria visitar a página de perfil
        Given acesso o dashboard
        When acesso a pagina de perfil do usuário
        Then deve estar na rota de perfil
    
    Scenario: deveria conter o titulo user profile
        Given acesso o dashboard
        When acesso a pagina de perfil do usuário
        Then deve conter um titulo User Profile
    
    Scenario: deveria buscar perfil do github
        Given acesso o dashboard
        When acesso a pagina de perfil do usuário
        And preencho formulario de busca de perfil
        Then deve buscar perfil do github

    Scenario: deveria preencher form de perfil
        Given acesso o dashboard
        When acesso a pagina de perfil do usuário
        And preencho formulario do perfil
        And clico em alterar perfil
        Then deve o nome no perfil da tela