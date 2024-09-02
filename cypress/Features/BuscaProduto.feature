#language: pt
#Author: Camila de Sousa Oliveira
# Version: 1.0
#Encoding: UTF-8

Funcionalidade: Buscar Produto
	# Fluxo de Busca de produtos no Site Advantage
	# Envolve as páginas Home, Resultado da Consulta e Detalhes Paginas

  Cenario: Validar busca de produto
    Dado que acesso o site Advantage
    Quando busco por mice e pressiono Enter
    Entao exibe uma lista de produtos relacionados com mice