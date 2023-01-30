/* class contains = methods , variable ,constructor */

class student
{
    
    constructor(sid ,name ,grade)
    {
        this.sid = sid;
        this.name = name;
        this.grade = grade;

    }
    
    
    
    
    // setdetaitals(sid ,name ,grade)
    // {
    //     this.sid = sid;
    //     this.name = name;
    //     this.grade = grade;

    // }

    display()
    {
        console.log(this.sid,this.name,this.grade);
    }


}

let stu =new student(12,"lpk","B");

//stu.setdetaitals(10,"kjkl","A");

stu.display();