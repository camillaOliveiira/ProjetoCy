Feature: Login

              As a valid user
              I want to log in into Application
  
        Scenario: Successful login to the AdvantageShop Website
            Given I m on the home page
              And I enter the login page
             When I enter my username  and password
              And I click the login button
             Then I should be able to log in successfully
