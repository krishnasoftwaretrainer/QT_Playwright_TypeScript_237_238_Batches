interface Parent1
{
    Father1():void
}
interface Parent2
{
    Father2():void
}
interface Parent3
{
    Father3():void
}

class Child implements Parent1,Parent2,Parent3
{
    Father1():void
    {
        console.log('Father1')
    }
     Father2():void
    {
         console.log('Father2')
    }
     Father3():void
    {
         console.log('Father3')
    }
}

let ch=new Child();
ch.Father1();
ch.Father2();
ch.Father3();
