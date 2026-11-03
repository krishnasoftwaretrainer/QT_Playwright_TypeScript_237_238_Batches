export class Calculator1 {
    //+ - * /
    static addition() {
        let a = 10, b = 20;
        let c = a + b;
        console.log("Addition is : " + c);
    }
    static subtraction() {
        let a = 10, b = 20;
        let c = a - b;
        console.log("Subtraction is : " + c);
    }
}
let cal1 = new Calculator1(); //Creating object of class
//Calculator1.addition();  //Calling static method using class name
//cal1.subtraction();  //Calling instance method using object name
