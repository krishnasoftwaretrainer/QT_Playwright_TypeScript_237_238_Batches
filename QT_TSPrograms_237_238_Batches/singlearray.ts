let id:number[]=[101,102,103,104,105];
 console.log(id);
 console.log('Length:', id.length);
// console.log(id[2]); //103
// console.log(id.indexOf(103)); //2

// id[2]=1003;
// console.log(id);

// console.log('Length:', id.length); //6

console.log(id.includes(107)); //false
id.push(107);  //add new element at the end of array
console.log(id);
console.log('Length:', id.length); //6

console.log(id.includes(107)); //true
id.unshift(100); //add new element at the beginning of array
console.log(id);
console.log('Length:', id.length); //7

id.pop(); //remove last element from the array
console.log(id);
console.log('Length:', id.length); //6

id.shift(); //remove first element from the array
console.log(id);
console.log('Length:', id.length); //5

console.log(id.includes(103)); //true
/*
push() - add new element at the end of array
unshift() - add new element at the beginning of array
pop() - remove last element from the array
shift() - remove first element from the array

*/
