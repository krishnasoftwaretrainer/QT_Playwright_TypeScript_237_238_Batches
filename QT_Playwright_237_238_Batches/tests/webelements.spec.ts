import {test, expect} from '@playwright/test';

test('Text Box ', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

//page.getByRole('textbox', {name: 'First Name'}).fill('eggeerge');

const firstNameInput = page.getByRole('textbox', {name: 'First Name'});
//firstNameInput.fill('Krishna');
//firstNameInput.clear();
firstNameInput.fill('Ramesh');
await page.waitForTimeout(2000);
//console.log('First NAme:',firstNameInput.inputValue());
let firstnamevalue:string=await firstNameInput.inputValue();
console.log('First Name:',firstnamevalue);
await page.waitForTimeout(2000);
});

test('Text Area ', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

//page.getByRole('textbox', {name: 'First Name'}).fill('eggeerge');

//const AddressInput = page.locator('.form-control ng-pristine ng-valid ng-touched');
const AddressInput = page.locator('//textarea[@ng-model="Adress"]');
AddressInput.fill('Ameerpet,\nHyderabad,\n50008');
await page.waitForTimeout(2000);
//console.log('First NAme:',firstNameInput.inputValue());
let addressvalue:string=await AddressInput.inputValue();
console.log(addressvalue);
await page.waitForTimeout(2000);
});

test('Button ', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

const submitbutton=page.getByRole('button', {name: 'Submit'});
// let namesubmit=await submitbutton.textContent();  //Dom Text or Visible Text
let namesubmit=await submitbutton.innerText();  //Only Visible Text
console.log(namesubmit);  //Submit
await submitbutton.focus();
submitbutton.click();
await page.waitForTimeout(3000);

});

test('Link ', async ({page}) => {
await page.goto('https://www.facebook.com/');

const forgetpasswordlink=page.getByText('Forgotten password?');
await forgetpasswordlink.click();
await page.waitForTimeout(2000);

});

test('Radio Button ', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

const femaleradio=page.getByRole('radio', {name: 'FeMale'});
//await femaleradio.click();
await femaleradio.check();
await page.waitForTimeout(2000);

});

test('Check Box ', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

const cricketcheckbox=page.locator('#checkbox1');
const moviescheckbox=page.locator('#checkbox2');
const hockeycheckbox=page.locator('#checkbox3');
await cricketcheckbox.check();
await moviescheckbox.check();
await hockeycheckbox.check();

await page.waitForTimeout(2000);
await cricketcheckbox.uncheck();
await moviescheckbox.uncheck();
await hockeycheckbox.uncheck();
await page.waitForTimeout(2000);
});

test('Check Box using loop', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

const cricketcheckbox=page.locator('//input[@type="checkbox"]');

//for(let i=0;i<3;i++)
for(let i=0;i<await cricketcheckbox.count();i++)
{
    await cricketcheckbox.nth(i).check();
    await page.waitForTimeout(2000);
}
await page.waitForTimeout(2000);
});

test('Check Box  ', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

const cricketcheckbox=page.locator('#checkbox1');
const moviescheckbox=page.locator('#checkbox2');
const hockeycheckbox=page.locator('#checkbox3');
await cricketcheckbox.click();
await page.waitForTimeout(2000);
await cricketcheckbox.click();   
await page.waitForTimeout(2000);
moviescheckbox.click();
await page.waitForTimeout(2000);
});

test.only('DropDown  ', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');

const year=page.locator('#yearbox');
await year.focus();
await year.selectOption({index:10});  //1920 Using Index 

const month=page.locator('//select[@placeholder="Month"]');
await month.focus();
await month.selectOption('November'); //Value

const day=page.locator('#daybox');
await day.focus();
await day.selectOption({label:'13'});  //Label

await page.waitForTimeout(3000);
});