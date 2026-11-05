class RBI  //Parent
{
   public RateOfInterest():void
   {
    console.log("RBI Rate of Interest:5%");
   }
}

//Child-1
class SBI extends RBI
{
   public RateOfInterest():void
   {
       console.log("SBI Rate of Interest:6%");
   }
}

//Child-2
class HDFC extends RBI
{
   public RateOfInterest():void
   {
       console.log("HDFC Rate of Interest:7%");
   }
}

let sb=new SBI();
sb.RateOfInterest();  //6%

let hd=new HDFC();
hd.RateOfInterest()