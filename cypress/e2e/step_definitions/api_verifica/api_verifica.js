import{Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"


Given("that I want to search for the product {word}", () =>{
    cy.request({
        method: 'GET',
        url: '?name=MICE&quantityPerEachCategory=9',
    })
})
   
When("I make the request", () => {
    cy.request({
        method: 'GET',
        url: '?name=MICE&quantityPerEachCategory=9',
    }).as('MICE');
})
    
Then("I validate that the status code is {int}", () => {
    cy.get('@MICE').then((Response) => {
cy.log(JSON.stringify(Response.body));
    });
})
   
And("I validate that the category returned is Mice", () => {
    cy.request({
        method: 'GET',
        url: '?name=MICE&quantityPerEachCategory=9',
        categoryId: '5'
    }).as('mice');
})
    