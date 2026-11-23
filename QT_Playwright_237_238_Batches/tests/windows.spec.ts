import {chromium,test, expect, firefox} from '@playwright/test';

test('Browser Navigations ', async () => {

    const browser1=await chromium.launch(
        {headless:false}   //Chrome Browser
);

        const context1=await browser1.newContext();  //New Window 
    
        const page1 = await context1.newPage();  //New Tab-1

        await page1.goto('https://demo.automationtesting.in/Register.html');

        const page2 = await context1.newPage();  //New Tab-2
        await page2.goto('https://www.saucedemo.com/');

        const page3 = await context1.newPage();  //New Tab-3
        await page3.goto('https://www.facebook.com/');
        page1.close();
        page2.close();
        page3.close();
        context1.close();
        

        const context2=await browser1.newContext();  //New Window
        const page4=await context2.newPage();
        await page4.goto('https://www.youtube.com/');

         page4.close();
           context2.close();

            const browser2=await firefox.launch(
        {headless:false}   //Chrome Browser
);

        const context3=await browser2.newContext();  //New Window
        const page5=await context3.newPage();
        await page5.goto('https://www.youtube.com/');
        await expect(page5).toHaveTitle(/YouTube/);
        page5.close();
        context3.close();
        await page3.waitForTimeout(3000);
});