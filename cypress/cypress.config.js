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
      // Configurar para capturar prints mesmo em testes que passam
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          console.log(`Vídeo salvo: ${results.video}`);
        }
      });
    },
  },
  // CONFIGURAÇÃO DO REPORTER MOCHAWESOME
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',           
    reportFilename: 'relatorio-testes',     
    overwrite: false,                        
    html: true,                             
    json: true,                               
    charts: true,                             
    embeddedScreenshots: true,                 
    inlineAssets: true,                        
    saveAllAttempts: false,
    timestamp: 'dd-mm-yyyy_HH-MM-ss'           
  }
});