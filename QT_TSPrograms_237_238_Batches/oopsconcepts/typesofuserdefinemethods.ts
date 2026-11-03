class typesofuserdefinemethods 
{
//Without parameters and without return type

addition():void
    {
        let a:number=10,b:number=20;
        let c:number=a+b;
        console.log("Addition is : "+c); //30
    }

    //With parameters and without return type
    addition1(a:number,b:number):void
    {
        let c:number=a+b;
        console.log("Addition is : "+c); //
    }

//Without parameters and with return type

addition2():number
    {
        let a:number=100,b:number=200;
        let c:number=a+b;
        return c; //300
    }

    //With parameters and with return type
    addition3(a:number,b:number):number
    {
        let c:number=a+b;
        return c; //300
    }
}

let um=new typesofuserdefinemethods();
um.addition1(11,22);
um.addition1(100,200);

console.log("Addition is : "+um.addition2()); //300

let addres=um.addition3(10.3,33.4);
console.log("Addition is : "+addres); //43.7
