#language: pt
#Author: Camila de Sousa Oliveira
# Version: 1.0
#Encoding: UTF-8

Funcionalidade: Inclusão de Produto - Cliente Logado
	# Fluxo de inclusão de produtos no carrinho do Site Advantage
	# Envolve as páginas Home, Resultado da Consulta e Carrinho de compras

        @TESTEINCLUSAOCOMLOGIN
        Cenario: Validar inclusão de produto - Cliente Logado
            Dado que acesso o site Advantage
              E realizo o login no Site
             Quando busco por mice
              E clico na Lupa
              E exibe uma lista de produtos relacionados com mice
              E clico no produto mice escolhido
              E clico em ADD TO CART
             Entao exibe carrinho com o produto incluido
