
const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  
  e2e: {
    projectId: 'yar8bd',
    setupNodeEvents(on, _config) {
      on('file:preprocessor', cucumber());     
    },
  
    specPattern: "cypress/e2e/step_definitions/login/*.feature",
  },
/*video: true ,
videoCompression: false,
videosFolder: 'cypress/videos',
viewportHeight: 660,
viewportWidth: 1000,
waitForAnimations: true,
watchForFileChanges: true,
appid: "<apiKey>",**/

});
