Feature: Search Product
        Scenario: Search for product and check list and status code
            Given that I want to search for the product Mice
             When I make the request
             Then I validate that the status code is 200
              And I validate that the category returned is Mice