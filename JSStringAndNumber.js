
/* String  methods*/

let string = "welcome"; //or let string = new String("welcome");

console.log(string);

 /* charAt()= point out character in string */
 console.log(string.charAt(1)); // e

 /* concat() = join two string */
 console.log(string.concat(" java"));
 console.log(string.concat(" python").concat(" ruby"));

 /*replace("repalce string" ,"new string") = rplace string */
 let strng = "java And Python";
 console.log(strng.replace("java","ruby")); 

 /* substring(start index ,end index) =  mentioned start index and end index it will show those character*/

 let s ="Arjun";
console.log(s.substring(0,3)); //Arj

/* toUpperCase() & toLowerCase() */

let r = "WelComeiuoujn";
console.log(r.toLowerCase()); // convert into lowercase
console.log(r.toUpperCase()); // convert into uppercase

/*split() = split the string with refernce delimeter and return type is array list */

s = "welcome java one";
let ar1 = s.split(" ");
console.log(ar1); //
console.log(ar1[0]);
console.log(ar1[1]);
console.log(ar1[2]);

/* trim() = trim pre and post spaces from string */

s = "     Welcome    ";
console.log(s.trim());

/* Numbers  two ways declear the number */
let x1 = 100;
let x2 = new Number(2000);

let a = 100;
let b =101.23;
let c =10e2;

console.log(a,b,c);

// isInteger()= return boolean value if supply number datatype is integer 

a = 10;
c = 12.36;
b= "10";
console.log(Number.isInteger(a)); //true

console.log(Number.isInteger(c)); // false
console.log(Number.isInteger(b)); //false

//parseInt() = converts a string into number

b= "133246";

console.log(typeof(b)); // String
console.log(typeof(Number.parseInt(b))); //number

// parseFloat() = convert into Float

b= "133.246";

console.log(typeof(b)); // String
console.log(typeof(Number.parseFloat(b)));

// to String() = convert into string
 b= 123;
 console.log(typeof(b));
 console.log(typeof(Number.toString(b)));