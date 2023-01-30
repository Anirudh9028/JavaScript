/* Method overriding is concept over we use this code multipletimes
rule - method name , argumnet same as parent class method which is inhereted in child class */


class bank
{

    roi(){
        return 0;
    }
}
class sbi extends bank
{
    roi()
    {
        return 10.5;
    }
}
class axis extends bank
{
    roi()
    {
        return 11.5;
    }
}

let SBI =new sbi();

console.log(SBI.roi());

let AXIS = new axis();

console.log(AXIS.roi());


