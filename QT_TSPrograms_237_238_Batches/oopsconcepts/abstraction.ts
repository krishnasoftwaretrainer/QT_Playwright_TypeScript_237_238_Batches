abstract class  RBI  //Normal Parent Class 
{
   public abstract RateOfInterest():void  //Un-Implemented[No Body:{}]
   
   public banktimings()
   {
    console.log('9am to 5pm')
   }

}

class SBI extends RBI
{

    public RateOfInterest():void
    {
        console.log("SBI Rate of Intrest:7%")
    }
}

class HDFC extends RBI
{

    public RateOfInterest():void
    {
        console.log("SBI Rate of Intrest:8%")
    }
}