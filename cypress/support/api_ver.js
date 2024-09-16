const URL_SEARCH = '?name=MICE&quantityPerEachCategory=9'
const CATEGORIA_M = '5'
const NAME_M = 'MICE'
const QUANT = '9'


export default class req_api_verify{
    static api_url() {
        cy.request({
            method: 'GET',
            url: URL_SEARCH,
        });
    }
    static requisicao(){
        cy.request({
            method: 'GET',
            url: '?name=MICE&quantityPerEachCategory=9',
        }).as('MICE');
    }
    static status(){
            cy.log(JSON.stringify(Response.status),200);
        }
    static valid_category(){
        cy.request({
            method: 'GET',
            url: 'https://www.advantageonlineshopping.com/catalog/api/v1/categories',
            categoryId: '5'
        }).log(JSON.stringify(Response.categoryId),'categoryId',5);
    }
    
}