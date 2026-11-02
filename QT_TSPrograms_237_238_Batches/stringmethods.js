"use strict";
let str1 = 'Hello';
//length
console.log('Length:' + str1.length);
//UpperCase and LowerCase
console.log('UpperCase:' + str1.toUpperCase());
console.log('LowerCase:' + str1.toLowerCase());
//trim
let str2 = '   Hello World   ';
console.log('Trimmed:' + str2.trim());
//charAt
console.log('Char at 0:' + str1.charAt(0));
console.log('Char at 4:' + str1.charAt(4));
//indexOf
console.log('Index of "l":' + str1.indexOf('l'));
console.log('Index of "z":' + str1.indexOf('z'));
//concat
let str3 = ' TypeScript';
console.log('Concat:' + str1.concat(str3));
console.log('Concat with +:' + str1 + str3);
console.log('Concat with template literals:' + `${str1}${str3}`);
console.log('Concat with console.log:' + str1, str3);
//compare == ===
//replace
let str4 = 'Hello World';
console.log('Replace:' + str4.replace('World', 'TypeScript'));
//isEmpty
let str5 = '';
console.log('Is Empty:' + (str5.length === 0));
