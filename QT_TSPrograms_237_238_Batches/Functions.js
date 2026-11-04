"use strict";
//Named Functions
function add() {
    let a = 10, b = 20;
    let sum = a + b;
    console.log("Sum of a and b is : " + sum);
}
//Without Parameter Functions
function sub() {
    let a = 10, b = 20;
    let sub = a - b;
    console.log("Sub of a and b is : " + sub);
}
//Parameterized Functions , no return type
function mul(a, b) {
    let mul = a * b;
    console.log("Mul of a and b is : " + mul);
}
//Parameterized Functions , with return type
function div(a, b) {
    let div = a / b;
    return div;
}
//Anonymous Function
let display = function () {
    console.log("This is Anonymous Function");
};
//Function Expression
let sum = function (x, y) {
    let sum = x + y;
    return sum;
};
console.log(sum(100, 200));
//display();
// add();
// sub();
// mul(10,20);
// let divResult = div(10,20);
// console.log("Div of a and b is : " + divResult);
