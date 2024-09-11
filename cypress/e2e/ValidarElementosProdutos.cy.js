import {Given, And, When, Then, cucumberTemplate} from "cypress-cucumber-preprocessor/lib/cucumberTemplate";
import {ELEMENTS} from "../support/Pages/Elements";
import { features } from "process";
import(cucumberTemplate);
import(cucumberJson);
import(ELEMENTS);
import(features);


Given('que eu esteja na pagina da lista de Produto', () => {
    InfoProduct.ProductSpeakers();
    return true;
});

When('selecionar um produto da lista', () => {
    cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(1)')
});

Then ('devo validar informações de preço, nome, descrição e cores disponiveis', () =>{
    InfoProduct.PriceProduct();
    InfoProduct.TitleProduct();
    InfoProduct.DescricaoProduct();
    InfoProduct.ColorProduct();
    return true;
});