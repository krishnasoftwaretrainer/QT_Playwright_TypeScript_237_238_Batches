
//textContent(), innerText(), getAttribute(), inputValue()

import {test, expect} from '@playwright/test';

test('Text Box ', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');
const firstNameInput = page.getByRole('textbox', {name: 'First Name'});
await firstNameInput.fill('Ramesh');
console.log('Input Value:',await firstNameInput.inputValue());

const submitbutton=page.getByRole('button', {name: 'Submit'});
console.log('Text Content:',await submitbutton.textContent());  
console.log('Inner Text:',await submitbutton.innerText());

const firstNameAttribute=await firstNameInput.getAttribute('placeholder');
console.log('Placeholder Attribute:',firstNameAttribute);  //First Name

const firstNameAttribute1=await firstNameInput.getAttribute('class');
console.log('Class Attribute:',firstNameAttribute1);  //form-control ng-pristine ng-untouched ng-invalid ng-invalid-required
await page.waitForTimeout(2000);

});