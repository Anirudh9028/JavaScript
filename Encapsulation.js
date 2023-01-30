class encp
{
    constructor()
    {
        let name ,marks;
    }

    getName()
    {
        return this.name;
    }
    setName(name)
    {
        this.name=name;
    }
    getMarks()
    {
        return this.marks;


    }
    setMarks(marks)
    {
        this.marks=marks;
    }

}

let df = new encp();

df.setName("john");
df.setMarks(456);

console.log(df.getMarks());
console.log(df.getName());