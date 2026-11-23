import {test, expect} from '@playwright/test';

test('Auto Wait ', async ({page}) => {
await page.goto('https://demoqa.com/buttons');
    //Double Click
const doublelclick=page.locator('#doubleClickBtn');
await doublelclick.click();
const dbmsg=page.locator('#doubleClickMessage');
console.log(await dbmsg.textContent());
await expect(dbmsg).toBeVisible();

//Test timeout of 30000ms exceeded.
//Test timeout of 10000ms exceeded.
});