import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

const pagePath = 'https://the-internet.herokuapp.com/add_remove_elements/';

Given(/^I open the add\/remove elements page$/, async function () {
  await this.page.goto(pagePath, { waitUntil: 'domcontentloaded' });
  await this.page.waitForSelector('button');
});

When('I add {int} elements', async function (count) {
  for (let i = 0; i < count; i++) {
    await this.page.click('button');
  }
});

When('I remove {int} element', async function (count) {
  for (let i = 0; i < count; i++) {
    const btn = await this.page.$('.added-manually');
    if (btn) await btn.click();
  }
});

Then('I should see {int} element remaining', async function (expected) {
  const count = await this.page.$$eval('.added-manually', els => els.length);
  expect(count).to.equal(expected);
});
