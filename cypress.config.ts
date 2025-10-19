import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // Default baseUrl for local dev
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
})
