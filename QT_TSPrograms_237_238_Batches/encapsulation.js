"use strict";
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
class customer {
    accname = 'Krishna';
    accno = 123456789;
    balance = 10000;
    //getter and setter methods
    getAccname() {
        return this.accname;
    }
    getAccno() {
        return this.accno;
    }
    getBalance() {
        return this.balance;
    }
    setBalance(balance) {
        this.balance = balance;
    }
}
class Employee {
    cusdisplay() {
        let cus1 = new customer();
        //cus1.setBalance(20000);
        console.log("Account Name: " + cus1.getAccname());
        console.log("Account Number: " + cus1.getAccno());
        console.log("Balance: " + cus1.getBalance());
    }
}
let emp1 = new Employee();
emp1.cusdisplay();
