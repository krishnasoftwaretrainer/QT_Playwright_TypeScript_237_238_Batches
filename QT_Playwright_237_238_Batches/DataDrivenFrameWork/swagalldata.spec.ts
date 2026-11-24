import {test,expect} from '@playwright/test';
import swagtestdata from '../DataDrivenFrameWork/swagalltestdata.json';

//for(let i=0;i<5;i++) //0<5T 1<5T 2<T 3<5T 4<5T 5<5F 
for(let i=0;i<swagtestdata.swagtestdataall.length;i++)
{
test(swagtestdata.swagtestdataall[i].testname,async({page})=>{

await page.goto('https://www.saucedemo.com/'); //Open 
await page.pause();

await page.waitForTimeout(2000); //Waits 2seconds
await page.getByRole('textbox',{name:'Username'}).fill(swagtestdata.swagtestdataall[i].username); //Enter
 await page.waitForTimeout(2000); //Waits 2seconds
await page.getByRole('textbox',{name:'Password'}).fill(swagtestdata.swagtestdataall[i].password); //Enter
await page.waitForTimeout(2000); //Waits 2seconds
await page.getByRole('button',{name:'Login'}).click();  //Click 

if(swagtestdata.swagtestdataall[i].expectedresult=='success')
{
    await expect(page).toHaveURL(/inventory.html/);
    console.log('Login Sueccess as Excepted')
}
else 
{
   const errormsg=page.locator('//h3[@data-test="error"]');
   await expect(errormsg).toBeVisible();
   console.log('Login Failed as Excepted')
}

});
}

//https://www.demoblaze.com/