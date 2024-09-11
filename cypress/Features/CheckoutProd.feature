#language: pt
#Author: Camila de Sousa Oliveira
# Version: 1.0
#Encoding: UTF-8

Funcionalidade: Checkout de Produto
	# Fluxo de compra de produto

        @TESTEINCLUSAOCOMLOGIN
        Cenario: Checkout de produto
            Dado que sou um usuario logado no Site
              E tenha produtos no carrinho
             Quando clicar em Checkout
              E validar informações da ordem de pagamento
              E clicar em Next
              E preencher informações de pagamento
              E clicar em Pay Now
             Entao devo realizar compra com sucesso
