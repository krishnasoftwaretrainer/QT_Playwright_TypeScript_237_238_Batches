import { Calculator1 } from "./methods.js";
class Calculator2 {
    multiplication() {
        let a = 10, b = 20;
        let c = a * b;
        console.log("Multiplication is : " + c);
    }
}
Calculator1.addition();
Calculator1.subtraction();
let cal3 = new Calculator2();
cal3.multiplication(); //Calling instance method using object name
