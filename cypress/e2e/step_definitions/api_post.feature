Feature: POST Image
        Scenario: Change Image
            Given that I want to change an image of a product
             When I make the request
             Then I validate that the status code is 200
              And I must validate that image has been altered