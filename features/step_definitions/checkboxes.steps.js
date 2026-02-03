import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

const pagePath = 'https://the-internet.herokuapp.com/checkboxes';
const checkboxSelector = (index) => `#checkboxes input:nth-of-type(${index})`;

Given('I open the checkboxes page', async function () {
  await this.page.goto(pagePath, { waitUntil: 'domcontentloaded' });
  await this.page.waitForSelector('#checkboxes');
});

When('I check checkbox {int}', async function (idx) {
  const sel = checkboxSelector(idx);
  const isChecked = await this.page.isChecked(sel);
  if (!isChecked) await this.page.click(sel);
});

When('I uncheck checkbox {int}', async function (idx) {
  const sel = checkboxSelector(idx);
  const isChecked = await this.page.isChecked(sel);
  if (isChecked) await this.page.click(sel);
});

Then('checkbox {int} should be checked', async function (idx) {
  const sel = checkboxSelector(idx);
  const isChecked = await this.page.isChecked(sel);
  expect(isChecked).to.equal(true);
});

Then('checkbox {int} should be unchecked', async function (idx) {
  const sel = checkboxSelector(idx);
  const isChecked = await this.page.isChecked(sel);
  expect(isChecked).to.equal(false);
});
