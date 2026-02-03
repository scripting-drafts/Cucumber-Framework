import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60_000);

Before(async function () {
  await this.init();
});

After(async function () {
  await this.close();
});