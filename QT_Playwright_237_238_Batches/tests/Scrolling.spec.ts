import {test, expect} from '@playwright/test';

test('Default Scrolling ', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

const submitbutton=page.getByRole('button', {name: 'Submit'});
submitbutton.click();
await page.waitForTimeout(3000);

});

test('Manual Scrolling:Mouse.Wheel ', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

await page.mouse.wheel(0,300); //Vertical:Up to Down
await page.waitForTimeout(1000);
await page.mouse.wheel(0,-200); //Vertical:Down to Up 
await page.waitForTimeout(1000);
await page.mouse.wheel(200,0); //Horizontal Scrolling: Left to Right
await page.waitForTimeout(1000);
await page.mouse.wheel(-200,0); //Horizontal Scrolling: Right to Right 
await page.waitForTimeout(1000);
await page.mouse.wheel(200,200); //Both
await page.waitForTimeout(1000);

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

test.only('Scroll to Specfic Element ', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

const submitbutton=page.getByRole('button', {name: 'Submit'});
//submitbutton.scrollIntoViewIfNeeded();
await submitbutton.focus();
await page.waitForTimeout(3000);

});