let a:boolean=false;
let b:boolean=false;

console.log(a&&b);  //true false false false
console.log(a||b); //true true true false

console.log(!a)     //false false true true
console.log(!(a&&b)); //false true true true