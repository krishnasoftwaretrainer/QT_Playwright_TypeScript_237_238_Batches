
import { test, chromium } from '@playwright/test';

test('Open Multiple Tabs and Windows', async () => {

    // Launch Chromium
    const browser = await chromium.launch({
        headless: false
    });

    // Create first browser context
    const context = await browser.newContext();

    // First tab
    const page1 = await context.newPage();

    await page1.goto('https://www.google.com');

    console.log('First Tab:', page1.url());
const newTabPromise = context.waitForEvent('page');

    // Second tab in the same window
    const page2 = await context.newPage();

    await page2.goto('https://www.amazon.in');

    console.log('Second Tab:', page2.url());

    // New browser window (separate context)
    const context2 = await browser.newContext();

    const page3 = await context2.newPage();

    await page3.goto('https://www.flipkart.com');

    console.log('New Window:', page3.url());

    // Keep browser open until manually closed
    // await new Promise(() => {});

    // browser.close();
});
