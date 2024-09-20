

export default class req_api_verify{
    static api_url() {
        cy.request({
            method: 'GET',
            url: '/search?name',
                headers: { 
                    "content-type": "aplication/json",
                 },
                 body:{
                    categoryName: "MICE",
                 }
            
        }).then((response) => {
            expect(response.status).to.eq(200)
          });
    }
    static requisicao(){
        cy.request({
            method: 'GET',
            url: '?name=MICE',
        }).as('MICE').then((response) => {
            expect(response.status).to.equal(200);
           });
    }
    static status(){
        cy.request({
            method: 'GET',
            url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=MICE&quantityPerEachCategory=9',
            followRedirect: false, 
          }).then((response) => {
            expect(response.status).to.eq(200)
          })
    }
    static valid_category(){
        cy.request({
            method: 'GET',
            url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=MICE&quantityPerEachCategory=9',
            headers: { 
                "Content-type": "aplication/json",
             },
             body:{
                categoryId: "5",
                categoryName: "MICE",
             }
        }).then((response) => {
             expect(response.status).to.equal(200);
            });
        }
        };

    