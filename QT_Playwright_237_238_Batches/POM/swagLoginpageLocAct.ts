import { Page,expect } from '@playwright/test';

export class SwagLoginPagePOM {

    //Global public variables for locators
  page: Page;
  username: any;
  password: any;
  loginButton: any;
  
  constructor(page: Page) {
    this.page = page;

    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async openApplication() {  //Method-1[Without Parameters] to open the application
    await this.page.goto('https://www.saucedemo.com/');
  }

  async loginToApplication(username: string, password: string) { //Method-2[With Parameters] to login to the application
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
    await expect(this.page).toHaveURL(/inventory/);
  }

  async closeApplication() { //Method-3[Without Parameters] to close the application
    await this.page.close();
  }
}
