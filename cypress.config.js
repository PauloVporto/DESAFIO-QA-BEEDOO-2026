const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://creative-sherbet-a51eac.netlify.app',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // CONFIGURAÇÃO DO REPORTER - IMPORTANTE!
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: '[name]-report',
    overwrite: false,
    html: false, // Não gerar HTML individual
    json: true,  // Gerar JSON para depois mesclar
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    timestamp: 'ddmmyyyy_HHMMss'
  }
});