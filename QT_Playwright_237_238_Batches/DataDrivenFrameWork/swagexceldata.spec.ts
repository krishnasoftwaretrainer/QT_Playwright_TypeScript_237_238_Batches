import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';

//Reads the testdata from excelsheets.
const workbook = XLSX.readFile(
  'DataDriven/Swagalltestdata.xlsx'
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

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill(username);
    await page.locator('[data-test="password"]').fill(password);

    await page.locator('[data-test="login-button"]').click();

    if (expected.toLowerCase() === 'success') {
      await expect(page).toHaveURL(/inventory\.html/);
      await expect(page.locator('.title')).toHaveText('Products');
    } else {
      await expect(page.locator('[data-test="error"]'))
        .toContainText(expected);
    }
  });
}
