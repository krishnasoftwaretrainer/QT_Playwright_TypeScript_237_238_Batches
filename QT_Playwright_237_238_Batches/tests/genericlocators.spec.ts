import {test,expect} from '@playwright/test';

test('CSS Selectors',async({page})=>{
//Open Browser/Page [Before Hooks]
await page.goto('https://www.saucedemo.com/'); //Open 
//await page.pause();
await page.waitForTimeout(2000); //Waits 2seconds
//await page.locator('#user-name').fill('standard_user'); //Using ID
await page.locator('[data-test="username"]').fill('standard_user'); //Using attribute="value"
await page.locator('.input_error.form_input').last().fill('secret_sauce');//Using ClassName
await page.locator('input').nth(2).click(); //Using Tagname
await page.waitForTimeout(2000);

});

test.only('Xpath',async({page})=>{
//Open Browser/Page [Before Hooks]
await page.goto('https://www.saucedemo.com/'); //Open 
//await page.pause();
await page.waitForTimeout(2000); //Waits 2seconds
await page.locator('//input[@aria-label="Username"]').fill('grtgrtg'); //Using XPath
console.log('Count: ',await page.locator('//*[@data-test="password"]').count()); //Count of the element
await page.locator('//*[@data-test="password"]').fill('trhrthrt'); //Using XPath
await page.locator('//input[@id="login-button"]').click(); //Using XPath

const errormesg=page.locator('//h3[text()="Epic sadface: Username and password do not match any user in this service"]');
//console.log(await errormesg.textContent());  //Visible Text or Dom Text 
console.log(await errormesg.innerText()); //Visible Text 
await page.waitForTimeout(2000);

});