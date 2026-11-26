import { test } from '@playwright/test';
import { LoginPage } from '../DataDrivenFrameWork/sk';
import { LogoutPage } from '../DataDrivenFrameWork/sss';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: './DataDrivenFrameWork/.env' });
test('Login Scenario', async ({ page }) => {

    const loginPageInstance = new LoginPage(page);

    // Read URL from .env
    const url = process.env.URL;

    if (!url) {
        throw new Error('URL is not defined in .env file');
    }

    await page.goto(url);

    await loginPageInstance.loginToApplication(
        'standard_user',
        'secret_sauce'
    );

    await page.waitForTimeout(1000);

    const logoutPageInstance = new LogoutPage(page);

    await logoutPageInstance.logout();

});