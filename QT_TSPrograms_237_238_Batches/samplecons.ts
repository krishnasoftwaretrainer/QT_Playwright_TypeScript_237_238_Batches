class Cons
{
    //Default or Without Parameter Constructor
    /*
    constructor()
    {
        console.log('URL');
    }
*/
    //Parameterized Constructor
    constructor(url:string)
    {
        console.log(url);
    }
    
    validlogin()
    {
        console.log('Valid Login');
    }
}
let con = new Cons('New URL');
con.validlogin();