import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import LoginPage from '../../pages/login.page.js';

Given('I open the login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.open();
});

When('I login with valid credentials', async function () {
  await this.loginPage.login('tomsmith', 'SuperSecretPassword!');
});

Then('I should see the secure area', async function () {
  const text = await this.loginPage.getFlashText();
  expect(text).to.include('You logged into a secure area!');
});

When('I login with username {string} and password {string}', async function (user, pass) {
  await this.loginPage.login(user, pass);
});

Then('I should see a flash containing {string}', async function (message) {
  const text = await this.loginPage.getFlashText();
  expect(text).to.include(message);
});

When('I logout', async function () {
  await this.page.click('a[href="/logout"]');
  await this.page.waitForSelector('#flash');
});

Then('I should be back at the login page', async function () {
  const url = this.page.url();
  expect(url).to.include('/login');
});