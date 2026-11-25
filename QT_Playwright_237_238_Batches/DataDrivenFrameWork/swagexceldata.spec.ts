import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';
// import loginData from '../DataDrivenFrameWork/Swagalltestdataexcel.xlsx';

//Reads the testdata from excelsheets.
const workbook = XLSX.readFile(
  'DataDrivenFrameWork/Swagalltestdataexcel.xlsx'
);

const sheet = workbook.Sheets[workbook.SheetNames[0]];

const loginData = XLSX.utils.sheet_to_json<any>(sheet, {
  defval: ''
});


for (let i = 0; i < loginData.length; i++) {
  test(String(loginData[i].testName).trim(), async ({ page }) => {

    const username = String(loginData[i].username ?? '').trim();
    const password = String(loginData[i].password ?? '').trim();
    const expected = String(loginData[i].expected ?? '').trim();

    // await page.goto('https://www.saucedemo.com/');
    await page.goto('/'); // Use the baseURL defined in playwright.config.ts

    await page.locator('[data-test="username"]').fill(username);
    await page.locator('[data-test="password"]').fill(password);

    await page.locator('[data-test="login-button"]').click();

    if (expected.toLowerCase() === 'success') {  //succESS  success 1
      await expect(page).toHaveURL(/inventory\.html/);
      await expect(page.locator('.title')).toHaveText('Products');
    } 
     else if(expected.toLowerCase() === 'epic sadface: username and password do not match any user in this service')
      {
        const errorMessage = page.locator('//h3[text()="Epic sadface: Username and password do not match any user in this service"]');
      await expect(errorMessage)
        .toContainText(expected);
    }
     else if(expected.toLowerCase() === 'epic sadface: username is required') //4th
      {
        const usernameError = page.locator('//h3[text()="Epic sadface: Username is required"]');
      await expect(usernameError)
        .toHaveText(expected);
    }
    else
      {
      //await expect(page.locator('[data-test="error"]'))
      const passwordError = page.locator('//h3[text()="Epic sadface: Password is required"]');
      await expect(passwordError)
        .toHaveText(expected);
    }
  });
}