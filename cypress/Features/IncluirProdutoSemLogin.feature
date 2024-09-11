#language: pt
#Author: Camila de Sousa Oliveira
# Version: 1.0
#Encoding: UTF-8

Funcionalidade: Inclusão de Produto
	# Fluxo de inclusão de produtos no carrinho do Site Advantage
	# Envolve as páginas Home, Resultado da Consulta e Carrinho de compras

        @TESTEINCLUSAOSEMLOGIN
        Cenario: Validar inclusão de produto
            Dado que acesso o site Advantage
             Quando busco por mice
              E clico na Lupa
              E exibe uma lista de produtos relacionados com mice
              E clico no produto mice escolhido
              E clico em ADD TO CART
             Entao exibe carrinho com o produto incluido
