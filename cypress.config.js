const cucumber = require ('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nha27g",
  e2e: {
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
