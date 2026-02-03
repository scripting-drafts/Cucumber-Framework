import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

const pagePath = 'https://the-internet.herokuapp.com/drag_and_drop';

Given('I open the drag and drop page', async function () {
  await this.page.goto(pagePath, { waitUntil: 'domcontentloaded' });
  await this.page.waitForSelector('#column-a');
});

When('I drag A to B', async function () {
  await this.page.dragAndDrop('#column-a', '#column-b');
});

Then('column A header should be {string}', async function (expected) {
  const text = await this.page.textContent('#column-a header');
  expect((text || '').trim()).to.equal(expected);
});

Then('column B header should be {string}', async function (expected) {
  const text = await this.page.textContent('#column-b header');
  expect((text || '').trim()).to.equal(expected);
});
