import {test,expect} from '@playwright/test';

test('Single File Upload', async ({page}) => {

await page.goto('https://demo.automationtesting.in/FileUpload.html');
const browse=page.locator('#input-4');

await browse.setInputFiles("C:\\Users\\HP\\OneDrive\\Pictures\\134356469600071741.jpg");
await page.waitForTimeout(2000);

});

test('Multiple Files Upload', async ({page}) => {
await page.goto('https://demo.automationtesting.in/FileUpload.html');
const browse=page.locator('#input-4');
await browse.setInputFiles([
"C:\\Users\\HP\\OneDrive\\Pictures\\134356469600071741.jpg",
"C:\\Users\\HP\\OneDrive\\Pictures\\134356469600071741.jpg",
"C:\\Users\\HP\\OneDrive\\Pictures\\134375035706531926.jpg"]);
await page.waitForTimeout(5000);

});

test('Remove Uploded Files', async ({page}) => {
await page.goto('https://demo.automationtesting.in/FileUpload.html');
const browse=page.locator('#input-4');
await browse.setInputFiles([
"C:\\Users\\HP\\OneDrive\\Pictures\\134356469600071741.jpg",
"C:\\Users\\HP\\OneDrive\\Pictures\\134356469600071741.jpg",
"C:\\Users\\HP\\OneDrive\\Pictures\\134375035706531926.jpg"]);
await page.waitForTimeout(2000);
await browse.setInputFiles([]);
await page.waitForTimeout(3000);
});

test.only('Download Files', async ({page}) => {
await page.goto('https://demo.automationtesting.in/FileDownload.html');
const downloadbtn=page.locator('//a[text()="Download"]');

const downloadPromise= page.waitForEvent('download');

await downloadbtn.first().click();
await downloadPromise;
await page.waitForTimeout(3000);
});