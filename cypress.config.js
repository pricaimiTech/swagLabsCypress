const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false, // add this line
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    baseUrl: 'http://www.saucedemo.com',
    reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochawesomeReporterOptions: {
        quite: true,
        overwrite: false,
        html: false,
        json: true
      }
    }
  },

});
