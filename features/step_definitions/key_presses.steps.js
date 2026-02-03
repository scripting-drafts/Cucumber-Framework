import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

const pagePath = 'https://the-internet.herokuapp.com/key_presses';

Given('I open the key presses page', async function () {
  await this.page.goto(pagePath, { waitUntil: 'domcontentloaded' });
  await this.page.waitForSelector('#target');
});

When('I press key {string}', async function (key) {
  await this.page.focus('#target');
  await this.page.keyboard.press(key);
});

Then('I should see key result {string}', async function (expected) {
  const text = await this.page.textContent('#result');
  expect((text || '').trim()).to.equal(expected);
});
