/*
while loop
do while loop
for loop
for in loop
for of loop

*/
//while loop

let i = 1;
while(i<=10)
{
    console.log(i);
    i++;

}

// do while loop
console.log("do while loop");

let p=1;

do{
    console.log(p);
    p++;

}while(p<=10);

// for loop
console.log("for loop");

for(let i =1;i<=10;i++)
{

    console.log(i);
}

// Jumping Statement 
console.log(" Jumping Statement break commant");
for(let i =1;i<=10;i++)
{
    if(i==5){break;}
   
    console.log(i);
}

console.log(" Jumping Statement Continue commant");
for(let i =1;i<=10;i++)
{
    if(i==5)
    {continue;}
   
    console.log(i);
}
