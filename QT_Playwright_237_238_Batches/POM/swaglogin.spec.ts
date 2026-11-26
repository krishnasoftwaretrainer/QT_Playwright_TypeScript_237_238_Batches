import { test } from '@playwright/test';
import { SwagLoginPagePOM } from './swagLoginpageLocAct';
import { SwagLogoutPagePOM } from './swagLogOutpageLocAct';

test('Login Scenario', async ({ page }) => {

  const loginPageInstance = new SwagLoginPagePOM(page);
  const logoutPageInstance = new SwagLogoutPagePOM(page);

  await loginPageInstance.openApplication();

  await loginPageInstance.loginToApplication(
    'standard_user', 'secret_sauce'
  );

  await logoutPageInstance.logout();

  await page.waitForTimeout(2000);


  await loginPageInstance.closeApplication();
});