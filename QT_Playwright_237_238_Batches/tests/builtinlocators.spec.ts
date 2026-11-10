import {test,expect} from '@playwright/test';

test('1.getByRole',async({page})=>{
//Open Browser/Page [Before Hooks]
await page.goto('https://www.saucedemo.com/'); //Open 
//await page.pause();
await page.waitForTimeout(2000); //Waits 2seconds
await page.getByRole('textbox',{name:'Username'}).fill('fhkerjherkjg'); //Enter
 await page.waitForTimeout(2000); //Waits 2seconds
await page.getByRole('textbox',{name:'Password'}).fill('fegdgjfejkf'); //Enter
await page.waitForTimeout(2000); //Waits 2seconds
await page.getByRole('button',{name:'Login'}).click();  //Click 
await page.waitForTimeout(2000); //Waits 2seconds
//await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
//Close Browser/Page [After Hooks]
});


test('2.getByPlaceHolder',async({page})=>{
//Open Browser/Page [Before Hooks]
await page.goto('https://www.saucedemo.com/'); //Open 
//await page.pause();
await page.waitForTimeout(2000); //Waits 2seconds
await page.getByPlaceholder('Username').fill("ksjrfberkjfer");
 await page.waitForTimeout(2000); //Waits 2seconds
await page.getByPlaceholder('Password').fill('fegdgjfejkf'); //Enter
await page.waitForTimeout(2000); //Waits 2seconds
await page.getByRole('button',{name:'Login'}).click();  //Click 
await page.waitForTimeout(2000); //Waits 2seconds
//await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
//Close Browser/Page [After Hooks]
});

test('3.getByLabel',async({page})=>{
//Open Browser/Page [Before Hooks]
await page.goto('https://www.saucedemo.com/'); //Open 
//await page.pause();
await page.waitForTimeout(2000); //Waits 2seconds
await page.getByLabel('Username').fill("ksjrfberkjfer");
 await page.waitForTimeout(2000); //Waits 2seconds
await page.getByLabel('Password').fill('fegdgjfejkf'); //Enter
await page.waitForTimeout(2000); //Waits 2seconds
await page.getByRole('button',{name:'Login'}).click();  //Click 
await page.waitForTimeout(2000); //Waits 2seconds
//await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
//Close Browser/Page [After Hooks]
});

test('4.getByText',async({page})=>{
//Open Browser/Page [Before Hooks]
await page.goto('https://demo.automationtesting.in/Register.html'); //Open 
//await page.pause();

await page.waitForTimeout(2000); //Waits 2seconds
await page.getByText(' Submit ').click();
await page.waitForTimeout(2000); //Waits 2seconds

//Close Browser/Page [After Hooks]
});

test('5.getByTitle',async({page})=>{
//Open Browser/Page [Before Hooks]
await page.goto('https://jqueryui.com/'); //Open 
//await page.pause();

await page.waitForTimeout(2000); //Waits 2seconds
await page.getByTitle('jQuery UI').first().isVisible();
await page.waitForTimeout(2000); //Waits 2seconds
await page.getByTitle('jQuery UI').first().click();
await page.waitForTimeout(2000); //Waits 2seconds

//Close Browser/Page [After Hooks]
});

test('6.getByAltText',async({page})=>{
//Open Browser/Page [Before Hooks]
await page.goto('https://www.bing.com/'); //Open 
//await page.pause();

await page.waitForTimeout(2000); //Waits 2seconds
//await page.getByAltText('© The New Indian Express').nth(2).isVisible();
await page.getByAltText('© The New Indian Express').first().isVisible();
await page.waitForTimeout(2000); //Waits 2seconds
//await page.getByAltText('© The New Indian Express').nth(2).click();
await page.getByAltText('© The New Indian Express').first().click();
await page.waitForTimeout(2000); //Waits 2seconds

//Close Browser/Page [After Hooks]
});

test.only('7.getByTestId',async({page})=>{
//Open Browser/Page [Before Hooks]
await page.goto('https://www.emirates.com/in/english/book/?utm_source'); //Open 
//await page.pause();

await page.waitForTimeout(2000); //Waits 2seconds
//await page.getByAltText('© The New Indian Express').nth(2).isVisible();
await page.getByTestId('combobox_Departure airport').click();
await page.waitForTimeout(2000); //Waits 2seconds

//Close Browser/Page [After Hooks]
});