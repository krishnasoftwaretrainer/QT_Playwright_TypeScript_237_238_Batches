import {test,expect} from '@playwright/test';

test('Codegen sample script',async({page})=>{

await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();

  await page.getByRole('button', { name: 'Open Menu' }).click();

  await page.locator('[data-test="logout-sidebar-link"]').click();
await page.waitForTimeout(2000);

});

test.only('End to End Swag Labs- Codegen',async({page})=>{
await page.goto('https://www.saucedemo.com/');

await page.pause();

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
  await expect(page.locator('[data-test="title"]')).toBeVisible();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();

  await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();

  await page.locator('[data-test="continue-shopping"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();

  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('zxvzdv');

  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('cbvxcb');

  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('34345345');

  await page.locator('[data-test="continue"]').click();

  await page.locator('[data-test="finish"]').click();

  await page.locator('[data-test="back-to-products"]').click();

  await page.getByRole('button', { name: 'Open Menu' }).click();

  await page.locator('[data-test="logout-sidebar-link"]').click();

    await page.locator('[data-test="username"]').fill('locked_out_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();

  await page.waitForTimeout(2000);

});