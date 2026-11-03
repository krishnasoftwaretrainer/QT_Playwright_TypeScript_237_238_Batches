export class Calculator1
{
    //+ - * /
    
    private static addition():void  //Method-1 User-defined static method
    {
        let a:number=10,b:number=20;
        let c:number=a+b;
        console.log("Addition is : "+c);
    }

     protected static subtraction()  //Method-2 User-defined Instance method
    {
        let a:number=10,b:number=20;
        let c:number=a-b;
        console.log("Subtraction is : "+c);
    }

    }
    let cal1=new Calculator1();  //Creating object of class
//Calculator1.addition();  //Calling static method using class name
//cal1.subtraction();  //Calling instance method using object name