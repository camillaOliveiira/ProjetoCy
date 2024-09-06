#language: pt
#Author: Camila de Sousa Oliveira
# Version: 1.0
#Encoding: UTF-8

Funcionalidade: Buscar Produto
	# Fluxo de Busca de produtos no Site Advantage
	# Envolve as páginas Home, Resultado da Consulta e Detalhes Paginas
        @TesteBuscarMice
        Cenario: Validar busca de produto - Mice
            Given que acesso o site Advantage
              And clico na barra de pesquisa
             When busco por mice e clico na lupa
             Then exibe uma lista de produtos relacionados com mice
