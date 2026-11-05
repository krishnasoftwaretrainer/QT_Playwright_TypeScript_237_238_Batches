interface RBI   //Parent
{
    RateOfIntrest():void
}

class SBI implements RBI //Child 
{
RateOfIntrest()
{
    console.log('SBI Rate of intrest:8%')
}
}
