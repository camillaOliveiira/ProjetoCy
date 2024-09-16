const cucumber = require ('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nha27g",
  e2e: {
    //declarar apenas quando testar API
    //baseUrl: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/step_definitions/**.feature"
  },
});

/*video: true ,
videoCompression: false,
videosFolder: 'cypress/videos',
viewportHeight: 660,
viewportWidth: 1000,
waitForAnimations: true,
watchForFileChanges: true,
appid: "<apiKey>",**/
