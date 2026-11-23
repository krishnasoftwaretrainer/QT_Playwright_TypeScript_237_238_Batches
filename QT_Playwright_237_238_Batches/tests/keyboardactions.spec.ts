import {test, expect} from '@playwright/test';

test('Keyboard actions test', async ({page}) => {
await page.goto('https://omayo.blogspot.com/');

const textarea1= page.locator('#ta1');
const textarea2=page.locator('//textarea[@cols="30"]');
//await textarea1.type('Hello World');
await page.pause();
await textarea1.focus();
await page.keyboard.type('Hello World', {delay: 100});

await page.keyboard.press('Control+A');
await page.keyboard.press('Control+C');

await textarea2.focus();
await page.keyboard.press('Control+A');
await page.keyboard.press('Backspace');
await page.keyboard.press('Control+V');
await page.waitForTimeout(2000);
});
test('Manual Scrolling:KeyBoard ', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

await page.keyboard.press('PageDown');//Vertical:Up to Down
await page.waitForTimeout(1000);
await page.keyboard.press('PageDown');//Vertical:Up to Down
await page.waitForTimeout(1000);
await page.keyboard.press('PageUp'); //Vertical:Down to Up 
await page.waitForTimeout(1000);
await page.keyboard.press('ArrowLeft'); // bottom//Horizontal Scrolling: Left to Right
await page.waitForTimeout(1000);
await page.keyboard.press('ArrowRight'); // top //Horizontal Scrolling: Right to Right 
await page.waitForTimeout(1000);
await page.keyboard.press('End'); // bottom
await page.waitForTimeout(1000);
await page.keyboard.press('Home'); // top
await page.waitForTimeout(1000);
});