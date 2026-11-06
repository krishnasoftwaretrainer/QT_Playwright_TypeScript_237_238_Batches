/*
class customer
{
    accname: string='Krishna';
    accno: number=123456789;
    balance: number=10000;

    public display(): void
    {
        console.log("Account Name: " + this.accname);
        console.log("Account Number: " + this.accno);
        console.log("Balance: " + this.balance);
    }
}
// let cus1= new customer();
// cus1.display();

class Employee
{
    public cusdisplay(): void
    {
        let cus1= new customer();
        cus1.display();
    }
}

let emp1= new Employee();
emp1.cusdisplay();  */

class customer
{
    private accname: string='Krishna';
    private accno: number=123456789;
    private balance: number=10000;

    //getter and setter methods
    public getAccname(): string
    {
        return this.accname;
    }

    public getAccno(): number
    {
        return this.accno;
    }

    public getBalance(): number
    {
        return this.balance;
    }

   public setBalance(balance: number): void
   {
        this.balance=balance;
   }
}
class Employee
{
    public cusdisplay(): void
    {
        let cus1= new customer();
        cus1.setBalance(20000);
        console.log("Account Name: " + cus1.getAccname());
        console.log("Account Number: " + cus1.getAccno());
        console.log("Balance: " + cus1.getBalance());
    }
}

let emp1= new Employee();
emp1.cusdisplay();

