import {test, expect} from '@playwright/test';

test('Browser Navigations ', async ({page}) => {

    await page.pause();
await page.goto('https://demo.automationtesting.in/Register.html');
await page.waitForTimeout(1000);

await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(1000);

await page.goto('https://www.facebook.com/');
await page.waitForTimeout(3000);

await page.goBack();  //Action 
await page.goBack();

await page.reload();

await page.goForward();
await page.goForward();

});