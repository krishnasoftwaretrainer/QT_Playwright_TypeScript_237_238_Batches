import { test, expect } from '@playwright/test';

test('SwagLabs title1', async ({ page }) => {
  await page.goto('/');

console.log('Page title:', await page.title()); // Log the page title to the console
 console.log('Page URL:', page.url()); // Log the current page URL to the console
  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Playwright/);
 await expect(page).toHaveTitle('Swag Labs'); // Expect the title to be exactly this string 
  await expect(page).toHaveURL(/saucedemo.com/); // Expect the URL to contain 'saucedemo.com'
  await page.waitForTimeout(2000);
});

test('SwagLabs title2', async ({ page }) => {
  await page.goto('/');

console.log('Page title:', await page.title()); // Log the page title to the console
 console.log('Page URL:', page.url()); // Log the current page URL to the console
  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Playwright/);
 await expect(page).toHaveTitle('Swag Labs'); // Expect the title to be exactly this string 
  await expect(page).toHaveURL(/saucedemo.com/); // Expect the URL to contain 'saucedemo.com'
  await page.waitForTimeout(2000);
});

test('SwagLabs title3', async ({ page }) => {
  await page.goto('/');

console.log('Page title:', await page.title()); // Log the page title to the console
 console.log('Page URL:', page.url()); // Log the current page URL to the console
  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Playwright/);
 await expect(page).toHaveTitle('Swag Labs'); // Expect the title to be exactly this string 
  await expect(page).toHaveURL(/saucedemo.com/); // Expect the URL to contain 'saucedemo.com'
  await page.waitForTimeout(2000);
});