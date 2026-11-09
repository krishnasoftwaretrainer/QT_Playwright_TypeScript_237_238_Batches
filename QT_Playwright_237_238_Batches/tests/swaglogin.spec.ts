import {test,expect} from '@playwright/test';

test('Swag Login',async({page})=>{
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