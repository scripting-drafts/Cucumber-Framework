import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

const pagePath = 'https://the-internet.herokuapp.com/dropdown';

Given('I open the dropdown page', async function () {
  await this.page.goto(pagePath, { waitUntil: 'domcontentloaded' });
  await this.page.waitForSelector('#dropdown');
});

When('I select dropdown option {string}', async function (label) {
  await this.page.selectOption('#dropdown', { label });
});

Then('the selected dropdown option should be {string}', async function (label) {
  const value = await this.page.$eval('#dropdown', el => el.value);
  const text = await this.page.$eval(`#dropdown option[value="${value}"]`, el => el.textContent.trim());
  expect(text).to.equal(label);
});
