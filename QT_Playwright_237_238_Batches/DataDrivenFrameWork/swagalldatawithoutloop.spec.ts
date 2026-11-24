import { test, expect } from '@playwright/test';
import loginData from '../DataDrivenFrameWork/swagtestdatawithoutloop.json';


test('Valid login - SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(loginData.validLogin.username);
  await page.locator('[data-test="password"]').fill(loginData.validLogin.password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('.title')).toHaveText('Products');
});


test('Invalid password - SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(loginData.invalidPassword.username);
  await page.locator('[data-test="password"]').fill(loginData.invalidPassword.password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username and password do not match');
});


test('Invalid username - SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(loginData.invalidUsername.username);
  await page.locator('[data-test="password"]').fill(loginData.invalidUsername.password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username and password do not match');
});


test('Empty username - SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(loginData.emptyUsername.username);
  await page.locator('[data-test="password"]').fill(loginData.emptyUsername.password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username is required');
});


test('Empty password - SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(loginData.emptyPassword.username);
  await page.locator('[data-test="password"]').fill(loginData.emptyPassword.password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Password is required');
});
