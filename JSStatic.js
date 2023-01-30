class statickeyword{


    static a =10; // Static variable
    b =20; // Non- Static variable

    static m1()
    {
        console.log("Static Method m1");
    }

    m2()
    {
        console.log("Non-static Method M2");
    }


}

// to access the static object use class name directly

console.log(statickeyword.a);
statickeyword.m1();

statickeyword.a =10000; // u can modify the value
console.log(statickeyword.a);

// to access the non static object first creat the object

let rtf = new statickeyword();

console.log(rtf.b);
rtf.m2();