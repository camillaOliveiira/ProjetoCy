#language: pt
#Author: Camila de Sousa Oliveira
# Version: 1.0
#Encoding: UTF-8

Funcionalidade: Validar produtos no carrinho
	# Fluxo de consulta de produtos no carrinho do Site Advantage
	# Carrinho de compras

  Cenario: Validar produto no carrinho
    Dado que acesso o site Advantage
    Quando busco por mice e pressiono Enter
    E clico no produto mice escolhido
    E clico em ADD TO CART
    E clico no carrinho de compras
    Entao devo visualizar pagina do carrinho com os itens inclusos