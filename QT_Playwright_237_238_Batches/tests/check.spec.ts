import {test,expect} from '@playwright/test';

test('Sample', async ({page})=>{

await page.goto('https://demo.automationtesting.in/Alerts.html');

const alertbutton = page.locator('//button[@onclick="alertbox()"]');

page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);

    await dialog.accept();  // Click OK
});
console.log(await alertbutton.textContent());
await alertbutton.click();

await page.waitForTimeout(2000);
});