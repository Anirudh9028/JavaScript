// ex 1 two ways declear array .. array treats as object

let car = ["saan","weer","neem"];

//ex 2
let bike = new Array ("bullet","hero","kawasaki");

console.log(car); // print all car array list
console.log(car[2]); // print 2 index value in array
console.log(bike); // print all bike array list

// update the array value
car [0] = "opel"
console.log(car);

// Array contains different type of data

let array = [100,"mkl",10.25,true];
console.log(array);

// example 3 = object + array

let person1=
{
    name: "mcdf",
    age:30,


};

let person2=
{
    name: "lkj",
    age:23,


};

let obj = [person1,person2];
console.log(obj);// print all object list

console.log(obj[0]);// print first array list person1 list only

// some methods of array

let fruits = ["Mango","Banana","Apple","orange"];

console.log(fruits.length); // arraylistname.length = return length of list ..Ans4

// Looping element from array

for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

// second option using for/of loop
for(ele of fruits)
{
    console.log(ele);

}
// recognize an array type of
console.log(typeof fruits); // return type of the array list using typeof method....Ans object

console.log(Array.isArray(fruits)); // return boolean statement based on passed list array or not ..Ans true

