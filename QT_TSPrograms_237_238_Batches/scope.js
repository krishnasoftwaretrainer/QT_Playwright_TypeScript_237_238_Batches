"use strict";
//Global Scope:Outside of function and outside of block(if) 
var a = 22;
function samp() {
    var b = 33; //Inside function / function scope 
    console.log(b);
}
samp();
// function samp1() //let const:block scope 
// {
//     if(true)
//     {
//        var c:number=43;  //Inside block / block scope 
//     }
// }
