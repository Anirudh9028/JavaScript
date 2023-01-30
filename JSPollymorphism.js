class shape
{
    draw()
    {
        return "i am generic shape";
    }
}
class squre extends shape
{
    draw()
    {
        return "i am squre";
    }

}
class circle extends shape
{
    draw()
    {
        return "i am circle";
    }
}

let obj = new shape();
console.log(obj.draw());

let obj1 = new squre();
console.log(obj1.draw());

let obj2 = new circle();
console.log(obj2.draw());
