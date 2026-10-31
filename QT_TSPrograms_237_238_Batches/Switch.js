"use strict";
//Calculator Program: + - * / %: 5 2 
let num1 = 5;
let num2 = 2;
console.log('CALCULATOR');
console.log('1.Addition');
console.log('2.Substraction');
console.log('3.Multification');
console.log('4.Division');
//console.log('Select required operator');
/*
let choice:number=5;

switch(choice)
{
    case 1:
        {
            let sum:number=num1+num2;
            console.log('Addition',sum);
            break;
        }
         case 2:
        {
            let sub:number=num1-num2;
            console.log('Substraction',sub);
            break;
        }
         case 3:
        {
            let mul:number=num1*num2;
            console.log('Multification',mul);
            break;
        }
         case 4:
        {
            let div:number=num1/num2;
            console.log('Division',div);
            break;
        }
        default:
            {
                console.log("Only choose 1 to 4");
            }
}
*/
let choice = 'Addition';
switch (choice) {
    case 'Addition':
        {
            let sum = num1 + num2;
            console.log('Addition', sum);
            break;
        }
    case 'Substraction':
        {
            let sub = num1 - num2;
            console.log('Substraction', sub);
            break;
        }
    case 'Multification':
        {
            let mul = num1 * num2;
            console.log('Multification', mul);
            break;
        }
    case 'Division':
        {
            let div = num1 / num2;
            console.log('Division', div);
            break;
        }
    default:
        {
            console.log("Only choose 1 to 4");
        }
}
