import { test, expect } from '@playwright/test';

test('Assertions-1 isVisible(),isEnabled(),isChecked() ', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

const cricketcheckbox=page.locator('#checkbox1');
const moviescheckbox=page.locator('#checkbox2');
const hockeycheckbox=page.locator('#checkbox3');

//await cricketcheckbox.click();
//await page.waitForTimeout(2000);  //True True True 

if(await cricketcheckbox.isVisible() && await cricketcheckbox.isEnabled() && !await cricketcheckbox.isChecked())
{
    await cricketcheckbox.click();
   
}
else
{

 console.log('Cricket Checkbox is Already checked');
}
await page.waitForTimeout(2000);
});

//2nd Test 
test('Assertions-1 isDisabled() ', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

const firstNameInput = page.getByRole('textbox', {name: 'First Name'});
await firstNameInput.focus();
await firstNameInput.fill('Krishna');
//await firstNameInput.type('Krishna');
// await expect(firstNameInput).toBeVisible();
// //await expect(firstNameInput).toBeDisabled();  //Pass Fail 
// await expect(firstNameInput).toBeEditable();
 await expect(firstNameInput).toBeEmpty();
// //await expect(firstNameInput).toBeHidden();
// await expect(firstNameInput).toBeFocused();
// await expect(firstNameInput).toBeEnabled();
await firstNameInput.fill('Ramesh');
await page.waitForTimeout(2000);
});

test('Hard and Soft Assertions ', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

const firstNameInput = page.getByRole('textbox', {name: 'First Name'});
await firstNameInput.focus();
await firstNameInput.fill('Krishna');

await expect(firstNameInput).toBeEmpty();  //Hard Stop Hold 

//await expect.soft(firstNameInput).toBeEmpty();  //soft 
console.log('Assertion is Pass')

});

test('Assertions-2 ', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

await expect(page).toHaveURL('https://demo.automationtesting.in/Register.html');

await expect(page).toHaveTitle('Register');

const firstNameInput = page.getByRole('textbox', {name: 'First Name'});
// await firstNameInput.focus();
await firstNameInput.fill('Krishna');
await expect(firstNameInput).toHaveValue('Krish');
await page.waitForTimeout(2000);

});

test('toHaveText toContainText toHaveAttribute', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

const Title=page.locator('//h1[text()="Automation Demo Site "]');

//await expect(Title).toHaveText('Automation Demo Site123 ');
await expect(Title).toContainText('Automation Demo');
const firstNameInput = page.getByRole('textbox', {name: 'First Name'});
await expect(firstNameInput).toHaveAttribute('placeholder','First Name');
await page.waitForTimeout(2000);
});

test.only('toHaveCount ', async ({page}) => {
await page.goto('https://www.saucedemo.com/');

const Samplelocator=page.locator('.form_group');
console.log('Count: ',await Samplelocator.count());
await expect(Samplelocator).toHaveCount(3);
//Samplelocator.fill('asfsegs');
await page.waitForTimeout(2000);

});