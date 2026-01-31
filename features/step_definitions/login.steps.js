const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const LoginPage = require('../../pages/login.page');

Given('I open the login page', async function () {
  // world provides this.page
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