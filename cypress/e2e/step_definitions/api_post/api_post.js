import{Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import req_api_post from "../../../support/PageObject/post_api"


Given("that I want to change an image of a product", () =>{
    req_api_post.ver_img()
})
   
When("I make the request", () => {
    req_api_post.post_user()
    req_api_post.post_img()
})
    
Then("I validate that the status code is {int}", () => {
    req_api_post.status_post()
})
   
And("I must validate that image has been altered", () => {
    req_api_post.img_ok()
})
