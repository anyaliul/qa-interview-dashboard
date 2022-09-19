const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'jxapad',
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  }
})
