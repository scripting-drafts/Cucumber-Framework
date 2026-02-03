import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

const pagePath = 'https://the-internet.herokuapp.com/inputs';

Given('I open the inputs page', async function () {
  await this.page.goto(pagePath, { waitUntil: 'domcontentloaded' });
  await this.page.waitForSelector('input[type="number"]');
});

When('I type number {string}', async function (val) {
  await this.page.fill('input[type="number"]', val);
});

Then('the input value should be {string}', async function (val) {
  const value = await this.page.inputValue('input[type="number"]');
  expect(value).to.equal(val);
});

When('I press arrow up {int} times', async function (times) {
  for (let i = 0; i < times; i++) {
    await this.page.press('input[type="number"]', 'ArrowUp');
  }
});
