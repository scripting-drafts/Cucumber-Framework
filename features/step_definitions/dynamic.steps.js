import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

const pagePath = 'https://the-internet.herokuapp.com/dynamic_loading/2';

Given('I open dynamic loading example 2', async function () {
  await this.page.goto(pagePath, { waitUntil: 'domcontentloaded' });
  await this.page.waitForSelector('#start button');
});

When('I start dynamic loading', async function () {
  await this.page.click('#start button');
  await this.page.waitForSelector('#finish', { state: 'visible' });
});

Then('I should see text {string}', async function (expected) {
  const text = await this.page.textContent('#finish');
  expect((text || '').trim()).to.equal(expected);
});
