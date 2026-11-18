import {test,expect} from '@playwright/test';

test('Sample', async ({page})=>{

await page.goto('https://www.browserstack.com/');

const alertbutton = page.locator('#products-dd-toggle');
await alertbutton.hover();
await page.waitForTimeout(2000);
await page.mouse.move(0,100);
await page.waitForTimeout(2000);

});