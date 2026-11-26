
import { Page, Locator } from '@playwright/test';

export class SwagLogoutPagePOM {

  page: Page;
  menuButton: Locator;
  logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutButton = page.locator('#logout_sidebar_link');
  }

  async logout() {
      await this.page.waitForTimeout(2000);
    await this.menuButton.click();
    await this.logoutButton.click();
  }
}
