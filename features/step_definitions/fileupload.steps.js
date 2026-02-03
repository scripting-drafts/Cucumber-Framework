import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import path from 'path';

const pagePath = 'https://the-internet.herokuapp.com/upload';

Given('I open the file upload page', async function () {
  await this.page.goto(pagePath, { waitUntil: 'domcontentloaded' });
  await this.page.waitForSelector('#file-upload');
});

When('I upload file {string}', async function (relativePath) {
  const fullPath = path.join(process.cwd(), relativePath);
  const input = await this.page.$('#file-upload');
  await input.setInputFiles(fullPath);
  await this.page.click('#file-submit');
});

Then('I should see upload success', async function () {
  await this.page.waitForSelector('h3');
  const text = await this.page.textContent('h3');
  expect((text || '').trim()).to.equal('File Uploaded!');
});
