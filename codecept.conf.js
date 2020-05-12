const { setHeadlessWhen } = require('@codeceptjs/configure');
require('dotenv').config()


// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

// set the environment variable WEBDRIVER_AUTH if the selenium hub is protected by BASIC auth
const webdriverAuth = process.env.WEBDRIVER_AUTH
const host = webdriverAuth ? `${webdriverAuth}@${process.env.WEBDRIVER_HOST}` : process.env.WEBDRIVER_HOST

exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: process.env.WEBDRIVER_URL || 'http://localhost',
      host,
      port: Number(process.env.WEBDRIVER_PORT),
      browser: "chrome"
    }
  },
  include: {
    I: "./steps_file.js"
  },
  bootstrap: null,
  mocha: {},
  name: "software-design-e2e",
  plugins: {
    allure: {
      enabled: true,
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true,
    },
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
};
