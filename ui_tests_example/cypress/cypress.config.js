const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        launchOptions.extensions.push('/Users/bptk/dev/pentestkit/src')
        return launchOptions
       })
      
    },
  },
});
