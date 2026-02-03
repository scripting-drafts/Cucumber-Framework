import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium } from 'playwright';

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
  }

  async init() {
    const headed = process.env.PWDEBUG === '1' || process.env.HEADED === '1' || process.env.HEADLESS === 'false';
    this.browser = await chromium.launch({ headless: !headed, slowMo: headed ? 50 : 0 });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.page.setDefaultTimeout(30_000);
    this.page.setDefaultNavigationTimeout(60_000);
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
      this.context = null;
      this.page = null;
    }
  }
}

setWorldConstructor(CustomWorld);