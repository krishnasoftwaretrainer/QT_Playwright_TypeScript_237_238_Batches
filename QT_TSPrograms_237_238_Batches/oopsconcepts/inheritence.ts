//Single Level Inheritance
/*
class Parent
{
    Father()
    {
        console.log("I am your Father");
    }
}

class Child extends Parent
{
    Son()
    {
        console.log("I am your Son");
    }
}

// let p=new Parent();
// p.Father();

let c=new Child();
c.Father();
c.Son();  */

//Multi Level Inheritance
/*
class GrandParent
{
    GrandFather()
    {
        console.log("I am your GrandFather");
    }
}

class Parent extends GrandParent
{
    Father()
    {
        console.log("I am your Father");
    }
}

class Child extends Parent
{
    Son()
    {
        console.log("I am your Son");
    }
}

let ch1=new Child();
ch1.GrandFather();
ch1.Father();
ch1.Son();

//Reg->Login->Cart->Payment
*/

//Hierarchical Inheritance

class Parent 
{
    Father()
    {
        console.log("I am your Father");
    }
}

class Child1 extends Parent
{
    Son1()
    {
        console.log("I am your Son1");
    }
}

class Child2 extends Parent
{
    Son2()
    {
        console.log("I am your Son2");
    }
}

class Child3 extends Parent
{
    Son3()
    {
        console.log("I am your Son3");
    }
}

let ch1=new Child1();
ch1.Father();
ch1.Son1();

let ch2=new Child2();
ch2.Father();
ch2.Son2();

let ch3=new Child3();
ch3.Father();
ch3.Son3();