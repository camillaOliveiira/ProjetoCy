#language: pt
#Author: Camila de Sousa Oliveira
# Version: 1.0
#Encoding: UTF-8

Funcionalidade: Login
	# Fluxo de iniciar visita ao Site Advantage
	# Envolve a página Home

        @TesteLogin
        Esquema do Cenário: login bem-sucedido no Site AdvantageShop
            Dado que estou na página inicial
              E entro na página de login
             Quando insiro credenciais válidas
              E eu clico no botão de login
             Então devo conseguir efetuar login com sucesso

        Cenário: Falha no login
            Dado que estou na página inicial
              E que estou na página de login
             Quando insiro credenciais invalidas
              E eu clico no botão de login
             Então não devo conseguir efetuar login