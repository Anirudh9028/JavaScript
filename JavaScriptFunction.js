/* (just like java methos)
A js function is block of statements which will perform a specific task
A js function is executed when "something" invokes it (calls it).

syntax:-
function name (para1 ,para2)
{
    code
}

Why Function ..??

U can reuse code : Define the code once, and use it many times 
u can use the same code many times with different arguments, to produce differnt result 

hw to invoke the function..??
When an event occurs (when a user clicks a btn)
When it is invoked from javascript code
Automatically (self called)

*/

//Example one with arg

console.log("Example1 = with arg");

// decleared the function
function add (a,b)
{
    console.log(a+b);

}

add(100,200); // call the function

// Example Two arg + retuen value 

console.log("Example2 = arg + retuen value");

function sub (a,b)
{
    return (a-b); // return statement

}

let res = sub(253,456)  // return value store in variable
console.log(res); // print this value

// or

// console.log (sub(145,200));



// Example Three Empty arg

console.log("Example3 = Empty arg");

function msg ()
{
   console.log("Hey hii Anu"); // return statement

}

msg();// call the function

