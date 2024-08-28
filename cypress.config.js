const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false, // add this line
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true 
  }
});
