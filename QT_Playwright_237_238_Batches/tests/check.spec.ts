import {test,expect} from '@playwright/test';

test('Sample', async ({page})=>{

await page.goto('https://www.saucedemo.com/');
await expect(page).toHaveURL('https://www.saucedemo.com/');
await page.screenshot({path:'Screenshots/sc'+Date.now()+ '.png'});
page.locator('').setInputFiles(['cbb','vxvx','xcvxv']);
await page.waitForTimeout(2000);
});