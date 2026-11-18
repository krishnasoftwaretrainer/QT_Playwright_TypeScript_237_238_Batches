import {test, expect} from '@playwright/test';

test('Simple Alert:Accept', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');

  const simplealert=page.locator('//button[@onclick="alertbox()"]');

//   page.on('dialog', dialog => dialog.accept());
//     console.log(await simplealert.textContent());
//       await simplealert.click();
//       console.log(page.on('dialog', dialog => dialog.message()));

console.log(await simplealert.textContent());
page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();  // Click OK
});
await simplealert.click();
      await page.waitForTimeout(2000);
});

test('Confirmation Alert:Accept or Dismiss', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');

const AlertwithOKCancel=page.locator('//a[@href="#CancelTab"]');
const clickthebuttontodisplayaconfirmbox =page.locator('//button[@onclick="confirmbox()"]');
const afterdialogmsg=page.locator('#demo');

console.log(await AlertwithOKCancel.textContent());
console.log(await clickthebuttontodisplayaconfirmbox.textContent());


page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();  // Click OK
    //await dialog.dismiss();  // Click Cancel
});
await AlertwithOKCancel.click();
await clickthebuttontodisplayaconfirmbox.click();
console.log(await afterdialogmsg.textContent());
      await page.waitForTimeout(2000);
});

test.only('Prompt Alert:Enter Text,Accept or Dismiss', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');

const AlertwithText=page.getByText('Alert with Textbox ')
const clickthebuttontopromptbox =page.locator('//button[@onclick="promptbox()"]');
const afterdialogmsg=page.locator('#demo1');

console.log(await AlertwithText.textContent());
console.log(await clickthebuttontopromptbox.textContent());


page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept('Krishna');  // Click OK and send text input
    //await dialog.dismiss();  // Click Cancel
});
await AlertwithText.click();
await clickthebuttontopromptbox.click();
console.log(await afterdialogmsg.textContent());
      await page.waitForTimeout(2000);
});