#language: pt
#Author: Camila de Sousa Oliveira
# Version: 1.0
#Encoding: UTF-8

Funcionalidade: Validar elementos do Produto
	
        @TesteElementosProduto
        Cenário: Validando Informações do produto selecionado
            Given que eu esteja na pagina da lista de Produto
             When selecionar um produto da lista
             Then devo validar informações de preço, nome, descrição e cores disponiveis