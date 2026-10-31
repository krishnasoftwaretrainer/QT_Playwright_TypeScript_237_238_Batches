//Blood donation eligibility criteria
//Age:>=18T T F and  Weight:>=40T  F  

let age:number=25;
let weight:number=35;

if(age>=18)  //Outer T  T  F
{
    if(weight>=40)  //Inner T F
    {
        console.log('You are eligible to donate blood')
        //TBS 
    }
    else  //Inner 
    {
        console.log('Not Eligible to donate blood');
        console.log('Your Weight is <40kg');
    }
}
    else  //Outer 
    {
        console.log('Not Eligible to donate blood');
        console.log('Your Age is <18years');
    }