import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

const pagePath = 'https://the-internet.herokuapp.com/notification_message_rendered';

Given('I open the notification messages page', async function () {
  await this.page.goto(pagePath, { waitUntil: 'domcontentloaded' });
  await this.page.waitForSelector('a[href="/notification_message"]');
});

When('I click to trigger notification', async function () {
  await this.page.click('a[href="/notification_message"]');
  await this.page.waitForSelector('#flash');
});

Then('I should see a notification message', async function () {
  const text = await this.page.textContent('#flash');
  const t = (text || '').trim();
  expect(t).to.match(/Action|unsuccessful|Please try again/i);
});
