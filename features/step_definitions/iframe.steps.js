import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

const pagePath = 'https://the-internet.herokuapp.com/iframe';

Given('I open the iframe page', async function () {
  await this.page.goto(pagePath, { waitUntil: 'domcontentloaded' });
  await this.page.waitForSelector('#mce_0_ifr');
});

When('I type {string} in the editor', async function (text) {
  const frame = this.page.frameLocator('#mce_0_ifr');
  await frame.locator('#tinymce').evaluate((el, t) => { el.innerHTML = ''; el.textContent = t; }, text);
});

Then('the editor content should be {string}', async function (expected) {
  const frame = this.page.frameLocator('#mce_0_ifr');
  const text = await frame.locator('#tinymce').textContent();
  expect((text || '').trim()).to.equal(expected);
});
