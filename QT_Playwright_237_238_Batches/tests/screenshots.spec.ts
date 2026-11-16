import {test,expect} from '@playwright/test';

test('screenshot Visible Page', async ({page}) => {

await page.goto('https://www.amazon.in/');
await page.waitForTimeout(2000);
await page.screenshot({path:'Screenshots/screenshot2.png'});
await page.waitForTimeout(2000);

});

test('screenshot with Date.now()', async ({page}) => {

await page.goto('https://www.amazon.in/');
await page.waitForTimeout(2000);
await page.screenshot({path:`Screenshots/screenshot${Date.now()}.png`});
await page.waitForTimeout(2000);

});

test('Full Page screenshot with Date.now()', async ({page}) => {

await page.goto('https://www.amazon.in/');
await page.waitForTimeout(2000);
await page.screenshot({path:`Screenshots/screenshot${Date.now()}.png`, fullPage:true});
await expect(page).toHaveURL('https://www.amazon./');
await page.waitForTimeout(2000);

});

test('Element screenshot with Date.now()', async ({page}) => {

await page.goto('https://www.amazon.in/');
await page.waitForTimeout(2000);
const amazonlogo =  page.locator('#nav-logo-sprites'); 
await amazonlogo.screenshot({path:`Screenshots/screenshot${Date.now()}.png`});
await expect(page).toHaveURL('https://www.amazon.in/');
await page.waitForTimeout(2000);

});

test.only('Screenshot:Config.ts', async ({page}) => {

await page.goto('https://www.amazon.in/');
await page.waitForTimeout(2000);
await expect(page).toHaveURL('https://www.amazon.in/');
await page.waitForTimeout(2000);

});