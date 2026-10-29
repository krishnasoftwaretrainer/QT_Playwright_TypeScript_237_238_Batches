"use strict";
let a = 10;
let b = 3;
a = 3;
b = 10;
a = 10;
b = 10;
console.log(a > b); //true false false
console.log(a >= b); //true false true 
console.log(a < b); //false true false
console.log(a <= b); //false true true 
console.log(a == b); //false false true 
console.log(a != b); //true true false
