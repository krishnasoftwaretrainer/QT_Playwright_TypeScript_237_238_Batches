import { Calculator1 } from "./methods.js";

 class Calculator2
{
public multiplication():void  //Method-1 User-defined Instance method
    {
        let a:number=10,b:number=20;
        let c:number=a*b;
        console.log("Multiplication is : "+c);
    }

}
Calculator1.addition();
Calculator1.subtraction();
let cal3=new Calculator2();
cal3.multiplication();  //Calling instance method using object name
