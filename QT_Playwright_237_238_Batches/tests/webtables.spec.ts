import {test, expect} from '@playwright/test';

test('Web Tables:Header Test', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

  const tablel=page.locator('//table/thead/tr/th');
  //console.log(await tablel.count());

  //Print Specific Column Header Name
  const tableheader=page.locator('//table/thead/tr/th');
 // console.log(await tableheader.nth(3).textContent());

 //Print All Column Header Names
  for (let i = 0; i < await tableheader.count(); i++) 
    {
    console.log(await tableheader.nth(i).textContent());
  }
});

test.only('Web Tables:Body Test', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');

  //const tablebodyrowsl=page.locator('//table/tbody/tr');
  //Print Body Rows Count
    //console.log('Body Rows Count:',await tablebodyrowsl.count());
  
    //Print Body Column Count
    // const tablebodycolumnsl=page.locator('//table/tbody/tr/td');
    // console.log('Body Column Count:',await tablebodycolumnsl.count());

    //Print Specific Row Data
    //const tablebodyrowsl=page.locator('//table/tbody/tr[2]');
     //console.log('Specific Row Data:',await tablebodyrowsl.nth(1).textContent());
    //console.log('Specific Row Data:',await tablebodyrowsl.textContent());

    //Print Specific Row all columns Data
// const tablebodyrowsl=page.locator('//table/tbody/tr[2]/td');  //7 0 1 2

// for(let i=0;i<await tablebodyrowsl.count();i++)
// {
// console.log(await tablebodyrowsl.nth(i).textContent());
// }

//Specfic Row and Specfic Column Data
// const tablebodyrowsl=page.locator('//table/tbody/tr[2]/td[4]'); 
// console.log('Specific Column Data:',await tablebodyrowsl.textContent());

//AllRows and All Columns Data
const tablebodyrowsl=page.locator('//table/tbody/tr');  //3

//Nested for loop:Outer Loop:Rows,Inner Loop:Columns

for(let i=0;i<await tablebodyrowsl.count();i++) //3 0 1 2
{
     const columnsData = tablebodyrowsl.nth(i).locator('td');

    for(let j=0;j<await columnsData.count();j++) //7 00 01 02 03 04 05 06  10 11 12
{

console.log(await columnsData.nth(j).textContent());
}
}
 });