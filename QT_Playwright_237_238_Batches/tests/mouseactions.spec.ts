import {test, expect} from '@playwright/test';

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

test('Mouse Clicks ', async ({page}) => {
await page.goto('https://demoqa.com/buttons');
//Doube Click Right Click and Single Click 

//Double Click
const doublelclick=page.locator('#doubleClickBtn');
await doublelclick.dblclick();
const dbmsg=page.locator('#doubleClickMessage');
console.log(await dbmsg.textContent());
await expect(dbmsg).toBeVisible();

//Right Click
const rightclick=page.locator('#rightClickBtn');
await rightclick.click({button:'right'});

const rightmsg=page.locator('#rightClickMessage');
console.log(await rightmsg.textContent());
await expect( rightmsg).toBeVisible();

//Singel Click
//const singleclick=page.getByText('Click Me');
// const singleclick=page.getByRole('button', { name: 'Click Me' });
const singleclick=page.locator('//button[text()="Click Me"]');
await singleclick.click();
const clickmsg=page.locator('#dynamicClickMessage');
console.log(await clickmsg.textContent());
await expect( clickmsg).toBeVisible();

await page.waitForTimeout(2000);
});

test('Drag and Drop ', async ({page}) => {
// await page.goto('https://demoqa.com/droppable');

// const source=page.locator('#draggable').first();
// const target=page.locator('#droppable').first();

// //await source.dragTo(target);
// await page.dragAndDrop('#draggable','#droppable');

await page.goto('https://testyard.onrender.com/practice/dragdrop');

const source=page.locator('#drag-me').first();
const target=page.locator('#drop-zone').first();

await source.dragTo(target);
//await page.dragAndDrop('#drag-me','#drop-zone');
await page.waitForTimeout(3000);
});

test('Move Mouse', async ({page}) => {

await page.goto('https://demoqa.com/buttons');
await page.pause();
await page.mouse.move(100, 100);
await page.waitForTimeout(1000);
await page.mouse.move(200, 200);
await page.waitForTimeout(1000);
await page.mouse.move(300, 300);
await page.waitForTimeout(1000);
await page.mouse.move(400, 400);
await page.waitForTimeout(2000);

const source=page.locator('#drag-me').first();
//await source.mouse.move(0, 400);
});

test.only('Mouse Hover ', async ({page}) => {
await page.goto('https://www.browserstack.com/');
await page.pause();
const products=page.locator('#products-dd-toggle');
await products.hover();

const webtesting=page.locator('//span[text()="Web Testing"]');
await webtesting.first().hover();

const live=page.locator('//span[text()="Live"]');
await live.first().click();
await page.waitForTimeout(2000);

});