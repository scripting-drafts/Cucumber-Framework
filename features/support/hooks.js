const { Before, After } = require('@cucumber/cucumber');

Before(async function () {
  // initialize a browser/page for each scenario
  await this.init();
});

After(async function () {
  // close per-scenario
  await this.close();
});