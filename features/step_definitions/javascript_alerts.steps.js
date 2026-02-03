import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

const pagePath = 'https://the-internet.herokuapp.com/javascript_alerts';

Given('I open the javascript alerts page', async function () {
  await this.page.goto(pagePath, { waitUntil: 'domcontentloaded' });
  await this.page.waitForSelector('#content');
});

When('I trigger the alert and accept', async function () {
  this.page.once('dialog', async d => { await d.accept(); });
  await this.page.click('text=Click for JS Alert');
});

When('I trigger the confirm and dismiss', async function () {
  this.page.once('dialog', async d => { await d.dismiss(); });
  await this.page.click('text=Click for JS Confirm');
});

When('I trigger the prompt and enter {string}', async function (value) {
  this.page.once('dialog', async d => { await d.accept(value); });
  await this.page.click('text=Click for JS Prompt');
});

Then('the alert result should be {string}', async function (expected) {
  const text = await this.page.textContent('#result');
  expect((text || '').trim()).to.equal(expected);
});
