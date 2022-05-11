Feature: Home do Dashboard

    Scenario: deveria visitar página inicial
        Given acesso o dashboard
        When acesso a pagina de inicial
        Then devo visualizar a pagina de dashboard

    Scenario: deveria conter o titulo Dashboard
        Given acesso o dashboard
        When acesso a pagina de inicial
        Then devo visualizar o titulo do dashboard

    Scenario: deveria clicar na cor [purple] e alterar na sidebar
        Given acesso o dashboard
        When acesso a pagina de inicial
        And Altero a cor purple nas configurações
        Then devo visualizar a cor purple na sidebar do dashboard

    Scenario: deveria clicar na cor [red] e alterar na sidebar
        Given acesso o dashboard
        When acesso a pagina de inicial
        And Altero a cor red nas configurações
        Then devo visualizar a cor red na sidebar do dashboard
