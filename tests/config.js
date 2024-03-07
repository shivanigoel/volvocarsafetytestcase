// config.js
const { devices } = require('@playwright/test');

const devicesToTest = [
  devices['Desktop Chrome']
];

module.exports = {
  devicesToTest
};
