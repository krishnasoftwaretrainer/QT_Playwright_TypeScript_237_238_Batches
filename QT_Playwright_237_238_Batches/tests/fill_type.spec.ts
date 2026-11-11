import {test,expect} from '@playwright/test';

test('1.getByRole',async({page})=>{

await page.goto('https://www.saucedemo.com/'); //Open 
await page.waitForTimeout(2000);
//await page.locator('[data-test="username"]').fill('test_user');
await page.locator('[data-test="username"]').type('test_user');
await page.waitForTimeout(2000);
await page.locator('[data-test="username"]').clear();
await page.waitForTimeout(2000);
//await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="username"]').type('standard_user');
await page.waitForTimeout(2000);

});