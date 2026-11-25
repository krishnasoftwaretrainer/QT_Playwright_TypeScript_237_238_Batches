import { test, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';


const loginData = parse<any>(
  fs.readFileSync('DataDrivenFrameWork/swagcsvdata.csv'),
  {
    columns: true,
    skip_empty_lines: true
  }
);


for (let i = 0; i < loginData.length; i++) {

  test(loginData[i].testName, async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]')
      .fill(loginData[i].username);

    await page.locator('[data-test="password"]')
      .fill(loginData[i].password);

    await page.locator('[data-test="login-button"]')
      .click();


    if (loginData[i].expected === 'success') {

      await expect(page).toHaveURL(/inventory\.html/);

      await expect(page.locator('.title'))
        .toHaveText('Products');

    } else {

      await expect(page.locator('[data-test="error"]'))
        .toContainText(loginData[i].expected);

    }

  });

}