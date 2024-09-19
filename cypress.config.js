const cucumber = require ('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nha27g",
  e2e: {
    baseUrl: 'https://www.advantageonlineshopping.com/catalog/api/v1/products',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/step_definitions/**.feature"
  },
});
