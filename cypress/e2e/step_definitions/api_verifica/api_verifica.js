import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import req_api_verify from "../../../support/api_ver"

Given("that I want to search for the product {word}", () =>{
    req_api_verify.api_url()
})
   
When("I make the request", () => {
    req_api_verify.requisicao()
})
    
Then("I validate that the status code is {int}", () => {
    req_api_verify.status()
})
   
And("I validate that the category returned is Mice", () => {
    req_api_verify.valid_category('@MICE')
})
    
