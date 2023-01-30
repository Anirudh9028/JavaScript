/* prototype is an object that is associated with every function and object by default
if we want to add new properties at later stage to a function /class , we can take the help of
prototype. */

function student()
{
    this.name ="John";
    this.gender = "male";

}

stu = new student();

console.log(stu.gender);
console.log(stu.name);

// to add new attribute in function, here age belong to only stu object 

//stu.age = 23;
//console.log(stu.gender,stu.name,stu.age);

// using prototype we can update the function data so each every object access this
student.prototype.age =23;

console.log(stu.gender,stu.name,stu.age);

stu1 = new student();
console.log(stu1.gender,stu1.name,stu1.age);



/* Second Example class level add new variable using prototype*/
class employee
{
    constructor(eid,ename)
    {
        this.eid =eid;
        this.ename = ename;

    }
}
employee.prototype.sal =50000;

emp =new employee(101,"klj");
console.log(emp.eid,emp.ename,emp.sal);

emp2 = new employee(102,"lkj");
console.log(emp2.eid,emp2.ename,emp2.sal);





/* third Example add fuction at class level using prototype*/
class employee2
{
    constructor(eid,ename)
    {
        this.eid =eid;
        this.ename = ename;

    }
}
employee2.prototype.sal =50000;


employee2.prototype.disp = function()
{
    console.log(this.eid,this.ename,this.sal);
}



empl =new employee2(12,"opi");
empl.disp();


empl2 = new employee2(11,"uyt");
empl2.disp();


