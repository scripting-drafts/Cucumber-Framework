import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

const pagePath = 'https://the-internet.herokuapp.com/hovers';

Given('I open the hovers page', async function () {
  await this.page.goto(pagePath, { waitUntil: 'domcontentloaded' });
  await this.page.waitForSelector('.figure');
});

When('I hover over user 1', async function () {
  await this.page.hover('.figure:nth-of-type(1) img');
});

Then('I should see hover caption containing {string}', async function (substr) {
  await this.page.waitForSelector('.figure:nth-of-type(1) .figcaption', { state: 'visible' });
  const text = await this.page.textContent('.figure:nth-of-type(1) .figcaption h5');
  expect((text || '').toLowerCase()).to.include(substr.toLowerCase());
});
