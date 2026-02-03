export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://the-internet.herokuapp.com/login';
    this.username = '#username';
    this.password = '#password';
    this.submit = 'button[type="submit"]';
    this.flash = '#flash';
  }

  async open() {
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
    await this.page.waitForSelector(this.username, { state: 'visible' });
  }

  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.submit);
    await this.page.waitForSelector(this.flash);
  }

  async getFlashText() {
    const raw = await this.page.textContent(this.flash);
    return raw ? raw.trim() : '';
  }
}
