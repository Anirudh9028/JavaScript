/* inheritance concept
for multiple inheritance not suport by class */

class A{
    a=100;

    disp()
    {
        console.log(this.a);

    }
}
class B extends A{

b=200;
show()
{
    console.log(this.b);
}

}



let inh = new B();

inh.disp();
inh.show();