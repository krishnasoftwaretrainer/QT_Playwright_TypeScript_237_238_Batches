import {test, expect} from '@playwright/test';

test('Singel Frame', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');

  const singleframe=page.frameLocator('#singleframe');
  const textbox1=singleframe.locator('//input[@type="text"]');
  textbox1.fill('Krishna');

await page.waitForTimeout(2000);
});

test.only('Nested Frame', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');

  const framebutton=page.getByText('Iframe with in an Iframe');
  await framebutton.click();

    const outerframe=page.frameLocator('//iframe[@src="MultipleFrames.html"]');
    const innerframe=outerframe.frameLocator('//iframe[@src="SingleFrame.html"]');
    
    const textbox2=innerframe.locator('//input[@type="text"]');
    await textbox2.fill('abcde');

await page.waitForTimeout(2000);
});