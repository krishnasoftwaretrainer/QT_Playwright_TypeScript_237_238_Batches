import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

console.log('Page title:', await page.title()); // Log the page title to the console
 console.log('Page URL:', page.url()); // Log the current page URL to the console
  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Playwright/);
 await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright'); // Expect the title to be exactly this string 
  await expect(page).toHaveURL(/playwright.dev/); // Expect the URL to contain 'playwright.dev'
  await page.waitForTimeout(2000);
});
/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.waitForTimeout(2000);
  //Close
});
*/