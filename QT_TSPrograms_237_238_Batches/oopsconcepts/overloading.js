"use strict";
class Calculator {
    add(a, b, c) {
        if (c !== undefined) //defined:10 20 30 or 10 20
         {
            return a + b + c; //60
        }
        else {
            return a + b; //30
        }
    }
}
let cal = new Calculator();
// let sum=cal.add(10,20,30);
let sum = cal.add(10, 20);
console.log(sum);
