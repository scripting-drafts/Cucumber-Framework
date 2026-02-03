import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

const pagePath = 'https://the-internet.herokuapp.com/context_menu';

Given('I open the context menu page', async function () {
  await this.page.goto(pagePath, { waitUntil: 'domcontentloaded' });
  await this.page.waitForSelector('#hot-spot');
});

When('I right click the hot spot', async function () {
  this._lastAlertText = '';
  this.page.once('dialog', async d => { this._lastAlertText = d.message(); await d.accept(); });
  await this.page.click('#hot-spot', { button: 'right' });
});

Then('I should see alert text {string}', async function (expected) {
  expect((this._lastAlertText || '').trim()).to.equal(expected);
});
