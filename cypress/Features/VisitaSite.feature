#language: pt
#Author: Camila de Sousa Oliveira
# Version: 1.0
#Encoding: UTF-8

Funcionalidade: Visitar Site
	# Fluxo de iniciar visita ao Site Advantage
	# Envolve a página Home

        @TesteAcesso
        Cenário: Navegando Pelo Site AdvantageShop
            Given que estou na página inicial
             When site carregar
             Then devo conseguir navegar pela homePage
